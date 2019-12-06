import { create } from "react-test-renderer";
import React from "react";
import { LoadingIndicator, RotatingIconLoading } from "./LoadingIndicator";

describe("LoadingIndicator", () => {
  test("it matches the snapshot", () => {
    const json = create(<LoadingIndicator />).toJSON();
    expect(json).toMatchSnapshot();
  });

  it("allows children to be customized", () => {
    const json = create(
      <LoadingIndicator>A custom message</LoadingIndicator>
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  it("respects iconSize", () => {
    const wrapper = create(<LoadingIndicator iconSize="1em" />);
    const json = wrapper.toJSON();
    expect(json).toMatchSnapshot();

    // The `iconSize` prop should be passed into the underlying icon
    // using the `size` prop.
    expect(wrapper.root.findByType(RotatingIconLoading).props).toMatchObject({
      size: "1em",
    });
  });
});
