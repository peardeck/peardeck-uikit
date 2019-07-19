import React from "react";
import { create } from "react-test-renderer";
import { LoadingIndicator } from "./LoadingIndicator";

describe("LoadingIndicator", () => {
  test("is a named export", () => {
    expect(LoadingIndicator).toBeDefined();
  });

  test("it matches the snapshot", () => {
    const component = create(<LoadingIndicator />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
