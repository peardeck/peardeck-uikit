import { create } from "react-test-renderer";
import React from "react";
import { Divider } from "./Divider";
import { theme } from "../../theme/theme";

describe("Divider", () => {
  it("matches the snapshot", () => {
    const component = create(<Divider />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("width prop sets width", () => {
    const json = create(<Divider width={1 / 2} />).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toHaveStyleRule("width", "50%");
  });

  test("m prop sets margin", () => {
    const json = create(<Divider m={2} />).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toHaveStyleRule("margin", `${theme.space[2]}px`);
  });

  test("borderColor prop sets borderColor", () => {
    const json = create(<Divider borderColor="blue.3" />).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toHaveStyleRule("border-color", theme.colors.blue[3]);
  });
});
