import { describe, expect, it } from "vitest";
import { classNames } from "../../src/util";

describe("utils", () => {
  describe("#classNames()", () => {
    it("should return an empty string when no arguments are passed", () => {
      expect(classNames()).toBe("");
    });

    it("should be trimmed", () => {
      expect(classNames("", "b", {}, "")).toBe("b");
    });

    it("joins arrays of class names and ignore falsy values", () => {
      expect(classNames("a", 0, null, undefined, false, "b")).toBe("a b");
    });

    it("supports heterogenous arguments", () => {
      const result = classNames("a", { b: true }, { c: true }, "d");
      expect(result).toBe("a b c d");
    });

    it("handles all types of truthy and falsy property values as expected", () => {
      const result = classNames({
        // falsy:
        null: null,
        emptyString: "",
        noNumber: NaN,
        zero: 0,
        negativeZero: -0,
        false: false,
        undefined: undefined,

        // truthy (literally anything else):
        nonEmptyString: "foobar",
        whitespace: " ",
        greaterZero: 1,
      });

      expect(result).toBe("nonEmptyString whitespace greaterZero");
    });
  });
});
