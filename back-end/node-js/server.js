import { createServer } from "node:http";

function serve(port = 8080) {
    const server = createServer({keepAliveTimeout: 10000}, async (req, res) => {
        const requestUrl = new URL(req.url, `http://127.0.0.1:${port}`);
        const requestBody = await getRequestBody(req);

        const [statusCode, contentType, data] = processRequest(req.method);
        const contentLength = Buffer.byteLength(data, "utf8");

        res.setHeaders(new Map([
            ["Content-Type", contentType],
            ["Content-Length", contentLength]
        ]));
        res.writeHead(statusCode);

        res.write(data);
        res.end("\n");
    });

    console.log("Listening on port:", port);
    server.listen(port);
}

serve();