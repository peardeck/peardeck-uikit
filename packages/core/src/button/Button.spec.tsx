import React from "react";
import { Button } from "./Button";
import { create } from "react-test-renderer";

describe("Button", () => {
  test("is a named export", () => {
    expect(Button).toBeDefined();
  });

  test("it matches the snapshot", () => {
    const component = create(<Button />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
