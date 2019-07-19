import React from "react";
import { create } from "react-test-renderer";
import { Button } from "./Button";

describe("Button", () => {
  test("is a named export", () => {
    expect(Button).toBeDefined();
  });

  test("it matches the snapshot", () => {
    const component = create(<Button />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
