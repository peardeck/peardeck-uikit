import "jest-styled-components";
import { create } from "react-test-renderer";
import React from "react";
import { Select } from "./Select";
import { theme } from "../../theme/theme";

describe("Select", () => {
  it("handles `fontSize` values from theme", () => {
    const json = create(<Select fontSize={2} />).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toHaveStyleRule("font-size", `${theme.fontSizes[2]}px`);
  });

  it("allows non-theme `fontSize` values", () => {
    const json = create(<Select fontSize="200px" />).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toHaveStyleRule("font-size", "200px");
  });

  it("handles `fontWeight` values from theme", () => {
    const json = create(<Select fontWeight="normal" />).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toHaveStyleRule(
      "font-weight",
      String(theme.fontWeights.normal)
    );
  });

  it("handles `fontStyle` values", () => {
    const json = create(<Select fontStyle="italic" />).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toHaveStyleRule("font-style", "italic");
  });

  it("handles `lineHeight` values from theme", () => {
    const json = create(<Select lineHeight="condensedUltra" />).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toHaveStyleRule(
      "line-height",
      String(theme.lineHeights.condensedUltra)
    );
  });

  it('respects fontFamily="monospace"', () => {
    const json = create(<Select fontFamily="monospace" />).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toHaveStyleRule(
      "font-family",
      theme.fonts.monospace.join(",")
    );
  });
});
