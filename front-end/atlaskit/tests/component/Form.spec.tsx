/* eslint @typescript-eslint/no-unused-vars: "off" */
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import * as router from "react-router";
import Form from "../../src/component/Form.tsx";
import type { FormAction } from "../../src/types";

export interface Path {
    pathname: string;
    search: string;
    hash: string;
}

type MockTo = string | Partial<Path> | number;

const TestForm = ({ action }: { action: FormAction }) => (
    <Form action={action}>
        <fieldset>
            <p>
                <input type="text" name="the_field" />
            </p>
        </fieldset>
    </Form>
);

describe("Form", () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    beforeEach(() => {
        vi.mock(import("react-router"), async (importOriginal) => {
            const actual = await importOriginal();
            return {
                ...actual,
                useNavigate: vi.fn(),
            };
        });
    });

    it("should render correctly", () => {
        const noop = async (_: FormData) => {};
        const { getAllByRole, getByRole } = render(<TestForm action={noop} />);
        const buttons: HTMLElement[] = getAllByRole("button") as HTMLElement[];
        expect(buttons).toHaveLength(2);

        const textInput: HTMLInputElement = getByRole("textbox") as HTMLInputElement;
        expect(textInput).not.toBeNull();
        expect(textInput.name).toBe("the_field");
    });

    it("should handle the submit event", async () => {
        const noop = vi.fn().mockImplementation(async (_: FormData) => {});

        const { getByText } = render(<TestForm action={noop} />);
        const button = getByText("Save and exit");

        await userEvent.click(button);
        expect(noop).toHaveBeenCalledOnce();
    });

    it("should pass through the form data to the action handler", async () => {
        let result = "";
        const action = async (formData: FormData) => {
            result = formData.get("the_field") as string;
        };

        const { getByText, getByRole } = render(<TestForm action={action} />);

        const button = getByText("Save and exit");
        const textInput: HTMLInputElement = getByRole("textbox") as HTMLInputElement;

        textInput.value = "brunsnik";
        await userEvent.click(button);

        expect(result).toBe("brunsnik");
    });

    it("should navigate to the root page after form is submitted", async () => {
        let route: MockTo = "";
        const noop = async (_: FormData) => {};
        const navigateHook = vi.spyOn(router, "useNavigate").mockImplementation(() => (to: MockTo) => {
            route = to;
        });

        const { getByText } = render(<TestForm action={noop} />);
        const button = getByText("Save and exit");

        await userEvent.click(button);

        expect(navigateHook).toHaveBeenCalledOnce();
        expect(route).toBe("/");
    });
});
