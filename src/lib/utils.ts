/**
 * Combines class names into a single string.
 * @param classes - Class names to combine.
 * @returns Combined class names.
 * @example
 * ```tsx
 * const className = cn("foo", "bar", "baz");
 * //=> "foo bar baz"
 *
 * const className = cn("foo", undefined, "bar", null, "baz");
 * //=> "foo bar baz"
 *
 * const className = cn({ foo: true, bar: false, baz: true });
 * //=> "foo baz"
 */
export const cn = (
  ...classes: (string | undefined | Record<string, boolean>)[]
) =>
  classes
    .filter(Boolean)
    .map((cls) =>
      typeof cls === "object"
        ? Object.entries(cls)
            .filter(([, b]) => b)
            .map(([c]) => c)
        : cls
    )
    .flat()
    .join(" ");
