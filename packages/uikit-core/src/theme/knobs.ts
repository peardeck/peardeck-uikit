import { number, select } from "@storybook/addon-knobs";
import { theme } from "./theme";

/**
 * This contains various predefined knobs and helper methods for creating
 * knobs.
 *
 * Notes:
 *
 * * The `createOptions...` methods are used to generated options from existing
 *   scales or arrays more easily, while additionally adding a "not specified"
 *   option to select, which effect means "the default value when the prop
 *   is not given"
 *
 * * The `select` knob does not display options with an underlying value of
 *   `undefined` - this is why the default and "not specified" values are
 *   actually set to `null`. Then each knob uses the `nullToUndefined`
 *   helper to convert it correctly to undefined.
 */

export const GROUP_ID_TYPOGRAPHY = "Typography";
export const GROUP_ID_COLOR = "Color";
export const GROUP_ID_SPACE = "Space";
export const GROUP_ID_DISPLAY = "Display";
export const GROUP_ID_BORDER = "Border";
export const GROUP_ID_LAYOUT = "Layout";

/* *************************************
 * Helper methods
 ************************************ */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const nullToUndefined = (result: any) => (result === null ? undefined : result);

/**
 * Creates options for a `select` knob that also includes a "not specified"
 * value, with the option labels matching the array _values_.
 * @param values An array of values
 */
export const createOptionsFromArray = (values: (string | number)[]) =>
  values.reduce((options, value) => ({ ...options, [value]: value }), {
    "not specified": null,
  });

/**
 * Creates options for a `select` knob that also includes a "not specified"
 * value, with the option labels matching the array _indexes_.
 * @param values An array of values
 */
export const createOptionsFromScale = (values: (string | number)[]) =>
  values.reduce((options, _, index) => ({ ...options, [index]: index }), {
    "not specified": null,
  });

/**
 * Creates options for a `select` knob that also includes a "not specified"
 * value, with the option labels generated using the keys of the map
 * @param map A map of values
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createOptionsFromMap = (map: { [key: string]: any }) =>
  Object.keys(map).reduce((options, key) => ({ ...options, [key]: key }), {
    "not specified": null,
  });

/* *************************************
 * Predefined knobs
 ************************************ */

/**
 * A knob for selecting a font size value from the theme-defined scale of font sizes scale
 */
export const themeFontSizeKnob = (label = "Font size", initial = null) =>
  nullToUndefined(
    select(
      label,
      createOptionsFromScale(theme.fontSizes),
      initial,
      GROUP_ID_TYPOGRAPHY
    )
  );

/**
 * A knob for selecting a font family value from the theme-defined font families
 */
export const themeFontFamilyKnob = (label = "Font Family", initial = null) =>
  nullToUndefined(
    select(
      label,
      createOptionsFromMap(theme.fonts),
      initial,
      GROUP_ID_TYPOGRAPHY
    )
  );

/**
 * A knob for selecting a font weight value from the theme-defined font weights
 */
export const themeFontWeightKnob = (label = "Font Weight", initial = null) =>
  nullToUndefined(
    select(
      label,
      createOptionsFromMap(theme.fontWeights),
      initial,
      GROUP_ID_TYPOGRAPHY
    )
  );

/**
 * A knob for selecting a line height value from the theme-defined line heights
 */
export const themeLineHeightKnob = (label = "Line Height", initial = null) =>
  nullToUndefined(
    select(
      label,
      createOptionsFromMap(theme.lineHeights),
      initial,
      GROUP_ID_TYPOGRAPHY
    )
  );

/**
 * A knob for selecting a color value from the theme-defined (named) colors
 * (For _any_ color, use the `color` knob provided by `@storybook/addon-knobs`)
 */
export const themeColorKnob = (
  label = "Color",
  initial: null | string = null
) =>
  nullToUndefined(
    select(label, createOptionsFromMap(theme.colors), initial, GROUP_ID_COLOR)
  );

/**
 * A knob for selecting an opacity value from 0 to 1.
 */
export const opacityKnob = (label = "Opacity", initial = 1) =>
  nullToUndefined(
    number(
      label,
      initial,
      { range: true, min: 0, max: 1, step: 0.01 },
      GROUP_ID_COLOR
    )
  );

/**
 * A knob for selecting a letter spacing value from the theme-defined letter spacings scale
 */
export const themeLetterSpacingKnob = (
  label = "Letter Spacing",
  initial = null
) =>
  nullToUndefined(
    select(
      label,
      createOptionsFromScale(theme.letterSpacings),
      initial,
      GROUP_ID_SPACE
    )
  );

/**
 * A knob for selecting a border value from the theme-defined borders
 */
export const themeBordersKnob = (label = "Border", initial = null) =>
  nullToUndefined(
    select(
      label,
      createOptionsFromScale(theme.borders),
      initial,
      GROUP_ID_BORDER
    )
  );

/**
 * A knob for selecting a radius value from the theme-defined radii scale
 */
export const themeRadiiKnob = (label = "Border Radius", initial = null) =>
  nullToUndefined(
    select(label, createOptionsFromScale(theme.radii), initial, GROUP_ID_BORDER)
  );

/**
 * A knob for selecting a shadow value from the theme-defined shadows scale
 */
export const themeShadowsKnob = (
  label = "Shadow",
  initial: number | null = null
) =>
  nullToUndefined(
    select(
      label,
      createOptionsFromScale(theme.shadows),
      initial,
      GROUP_ID_BORDER
    )
  );

/**
 * A knob for selecting a spacing value from the theme-defined space scale
 */
export const themeSpaceKnob = (label = "Spacing", initial = null) =>
  nullToUndefined(
    select(label, createOptionsFromScale(theme.space), initial, GROUP_ID_SPACE)
  );

/**
 * A knob for selecting a standard font style value
 */
export const fontStyleKnob = (label = "Font Style", initial = null) =>
  nullToUndefined(
    select(
      label,
      createOptionsFromArray(["normal", "italic", "oblique"]),
      initial,
      GROUP_ID_TYPOGRAPHY
    )
  );

/**
 * A knob for selecting a standard text alignment attribute value
 */
export const textAlignKnob = (label = "Text Align", initial = null) =>
  nullToUndefined(
    select(
      label,
      createOptionsFromArray([
        "inherit",
        "initial",
        "revert",
        "unset",
        "center",
        "end",
        "justify",
        "left",
        "right",
        "start",
      ]),
      initial,
      GROUP_ID_TYPOGRAPHY
    )
  );

/**
 * A knob for selecting a standard display attribute value
 */
export const displayKnob = (label = "Display", initial = null) =>
  nullToUndefined(
    select(
      label,
      createOptionsFromArray([
        "block",
        "inline",
        "run-in",
        "inline-block",
        "flex",
        "table",
        "grid",
        "list-item",
        "none",
      ]),
      initial,
      GROUP_ID_DISPLAY
    )
  );

export const elementTypes = ["span", "div", "p"];

/**
 * A knob for selecting an element type (for an "as" prop) from a predefined
 * list of element types. (feel free to add additional types here if needed)
 */
export const elementTypeKnob = (label = "Element Type", initial = null) =>
  nullToUndefined(
    select(label, createOptionsFromArray(["span", "div", "p"]), initial)
  );

/* *************************************
 * Knob groups
 ************************************ */

/**
 * A collection of knobs for changing topography-related values.
 */
export const typographyKnobs = () => ({
  fontFamily: themeFontFamilyKnob(),
  fontSize: themeFontSizeKnob(),
  fontWeight: themeFontWeightKnob(),
  lineHeight: themeLineHeightKnob(),
  letterSpacing: themeLetterSpacingKnob(),
  fontStyle: fontStyleKnob(),
  textAlign: textAlignKnob(),
});

/**
 * Creates a collection of knobs for changing space-related values.
 */
export const spaceKnobs = () => ({
  m: themeSpaceKnob("Margin"),
  p: themeSpaceKnob("Padding"),
});

/**
 * Creates a collection of knobs for changing color-related values.
 */
export const colorKnobs = () => ({
  color: themeColorKnob("Foreground Color"),
  backgroundColor: themeColorKnob("Background Color"),
  opacity: opacityKnob(),
});

/**
 * Creates a collection of knobs for changing display-related values.
 */
export const displayKnobs = () => ({
  display: displayKnob(),
});

export const borderKnobs = () => ({
  border: themeBordersKnob(),
  boxShadow: themeShadowsKnob("Box Shadow"),
  borderRadius: themeRadiiKnob("Border Radius"),
});

export const layoutKnobs = () => ({
  // width,
  // height,
  // minWidth,
  // minHeight,
  // maxWidth,
  // maxHeight,
  // size,
  // overflow,
  // display,
  // verticalAlign,
});
