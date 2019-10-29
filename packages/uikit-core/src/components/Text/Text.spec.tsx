import "jest-styled-components";
import { create } from "react-test-renderer";
import React from "react";
import { Text } from "./Text";
import { theme } from "../../theme/theme";

describe("Text", () => {
  it("renders a span by default", () => {
    const json = create(<Text />).toJSON();
    expect(json).toMatchSnapshot();
    expect(json && json.type).toEqual("span");
  });

  it('respects the "as" prop', () => {
    const json = create(<Text as="div" />).toJSON();
    expect(json && json.type).toEqual("div");
  });

  it("handles `fontSize` values from theme", () => {
    const json = create(<Text fontSize={2} />).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toHaveStyleRule("font-size", `${theme.fontSizes[2]}px`);
  });

  it("allows non-theme `fontSize` values", () => {
    const json = create(<Text fontSize="200px" />).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toHaveStyleRule("font-size", "200px");
  });

  it("handles `fontWeight` values from theme", () => {
    const json = create(<Text fontWeight="normal" />).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toHaveStyleRule(
      "font-weight",
      String(theme.fontWeights.normal)
    );
  });

  it("handles `fontStyle` values", () => {
    const json = create(<Text fontStyle="italic" />).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toHaveStyleRule("font-style", "italic");
  });

  it("handles `lineHeight` values from theme", () => {
    const json = create(<Text lineHeight="condensedUltra" />).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toHaveStyleRule(
      "line-height",
      String(theme.lineHeights.condensedUltra)
    );
  });

  it('respects fontFamily="monospace"', () => {
    const json = create(<Text fontFamily="monospace" />).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toHaveStyleRule(
      "font-family",
      theme.fonts.monospace.join(",")
    );
  });
});
