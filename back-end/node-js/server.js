/**
 * Simple HTTP Server
 * Adapted from https://github.com/pwcberry/javascript-scripts/blob/main/lib/api-sink.js
 */
import {createServer} from "node:http";
import process from "node:process";
import {open} from "node:fs/promises";
import {URL} from "node:url";
import crypto from "node:crypto";
import {join} from "node:path";

const API_ACTIONS = {
    "read": ["HEAD", "GET", "OPTIONS"],
    "write": ["PUT", "POST", "PATCH"],
    "delete": ["DELETE"],
};

function uuid() {
    const bytes = crypto.randomBytes(16).toString('hex');
    return `${bytes.substring(0, 8)}-${bytes.substring(8, 12)}-${bytes.substring(12, 16)}-${bytes.substring(16, 20)}-${bytes.substring(20)}`;
}

async function getRequestBody(request) {
    let body = "";

    for await (const chunk of request) {
        body += chunk.toString();
    }
}

async function fetchData() {
    const path = join(process.cwd(), "data/sample.json");
    const handle = await open(path);
    const data = await handle.readFile({ encoding: "utf8"});
    await handle.close();
    return data;
}

async function processRequest(request) {
    const requestUrl = new URL(request.url, `http://127.0.0.1`);
    const requestMethod = request.method.toUpperCase();
    const pathname = requestUrl.pathname;

    if (requestMethod === "GET") {
        switch (true) {
            case /^\/api/.test(pathname):
                const data = await fetchData(requestUrl);
                return [200, "application/json", data];
            case /\/graphql/.test(pathname):
                return [404, "text/plain", "NOT FOUND"];
            case /\/auth/.test(pathname):
                return [404, "text/plain", "NOT FOUND"];
            default:
                return [404, "text/plain", "NOT FOUND"]
        }
    } else if (API_ACTIONS.write.includes(requestMethod)) {
        // const requestBody = await getRequestBody(request);
    }
    return [400, "", "BAD REQUEST"];
}

function serve(port = 8080) {
    const server = createServer({keepAliveTimeout: 10000}, async (req, res) => {
        const [statusCode, contentType, content] = await processRequest(req);
        const contentLength = Buffer.byteLength(content, "utf8");

        res.setHeaders(new Headers({
            "Content-Type": contentType,
            "Content-Length": contentLength,
        }));
        res.writeHead(statusCode);

        res.write(content);
        res.end("\n");
    });

    console.log("Listening on port:", port);
    server.listen(port);
}

serve();
