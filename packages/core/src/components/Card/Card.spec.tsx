import "jest-styled-components";
import { create } from "react-test-renderer";
import React from "react";
import { theme } from "../../theme/theme";
import { Card } from "./Card";

describe("Card", () => {
  it("renders a drop shadow by default", () => {
    const json = create(<Card />).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).not.toHaveStyleRule("border");
    expect(json).toHaveStyleRule("box-shadow", theme.shadows[1]);
  });

  it("renders a standard border when depth is 0", () => {
    const json = create(<Card depth={0} />).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toHaveStyleRule("border", theme.borders[1]);
  });

  it("handles depth=2", () => {
    const json = create(<Card depth={2} />).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toHaveStyleRule("box-shadow", theme.shadows[2]);
  });
});
