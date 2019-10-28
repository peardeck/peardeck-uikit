import { create } from "react-test-renderer";
import React from "react";
import { LoadingIndicator } from "./LoadingIndicator";

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
});
