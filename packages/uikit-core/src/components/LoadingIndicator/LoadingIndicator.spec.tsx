import { create } from "react-test-renderer";
import React from "react";
import { LoadingIndicator } from "./LoadingIndicator";

describe("LoadingIndicator", () => {
  test("it matches the snapshot", () => {
    const json = create(<LoadingIndicator />).toJSON();
    expect(json).toMatchSnapshot();
  });

  it("respects size", () => {
    const wrapper = create(<LoadingIndicator size="1em" />);
    const json = wrapper.toJSON();
    expect(json).toMatchSnapshot();

    // The `iconSize` prop should be passed into the underlying icon
    // using the `size` prop.
    expect(wrapper.root.props).toMatchObject({
      size: "1em",
    });
  });
});
