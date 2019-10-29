import "jest-styled-components";
import { create } from "react-test-renderer";
import React from "react";
import { Box } from "./Box";
import { theme } from "../../theme/theme";

describe("Box", () => {
  it("matches the snapshot", () => {
    const json = create(<Box />).toJSON();
    expect(json).toMatchSnapshot();
  });

  it("`size` prop sets width and height", () => {
    const json = create(<Box size={40} />).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toHaveStyleRule("width", "40px");
    expect(json).toHaveStyleRule("height", "40px");
  });

  test("`width` prop sets width", () => {
    const json = create(<Box width={1 / 2} />).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toHaveStyleRule("width", "50%");
  });

  test("`m` prop sets margin", () => {
    const json = create(<Box m={2} />).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toHaveStyleRule("margin", `${theme.space[2]}px`);
  });

  test("`p` prop sets padding", () => {
    const json = create(<Box p={2} />).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toHaveStyleRule("padding", `${theme.space[2]}px`);
  });

  test("`color` prop sets color", () => {
    const json = create(<Box color="blue" />).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toHaveStyleRule("color", theme.colors.blue);
  });

  test("`bg` prop sets background color", () => {
    const json = create(<Box bg="green" />).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toHaveStyleRule("background-color", theme.colors.green);
  });
});
