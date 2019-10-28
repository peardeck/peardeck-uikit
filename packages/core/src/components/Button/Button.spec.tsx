import React from "react";
import { create } from "react-test-renderer";
import { Button } from "./Button";

describe("Button", () => {
  it("matches the snapshot", () => {
    const json = create(<Button />).toJSON();
    expect(json).toMatchSnapshot();
  });
});
