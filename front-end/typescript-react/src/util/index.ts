import type { KeyedObject, NonValue } from "../types";

/**
 * Return a string that is used as a CSS class name.
 *
 * Usage:
 * ```
 * const value = classNames('first-class', {
 *   'second-class': true,
 *   'third-class': false
 * }, 'fourth-class');
 *
 * // value is: "first-class second-class fourth-class"
 * ```
 */
type ClassNamesInput = string | number | boolean | KeyedObject | NonValue;

export const classNames = (...args: ClassNamesInput[]) =>
  args
    .map((item) => {
      if (typeof item === "string") {
        return `${item} `;
      } else if (typeof item === "object" && item !== null) {
        return (
          Object.getOwnPropertyNames(item)
            // All truthy values are output
            .map((name) => (item[name] ? `${name} ` : ""))
            .join("")
        );
      }
      return "";
    })
    .join("")
    .trim();
