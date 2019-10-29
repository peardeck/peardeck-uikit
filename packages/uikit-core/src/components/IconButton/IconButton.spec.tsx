import React from "react";
import { create } from "react-test-renderer";
import { IconButton } from "./IconButton";

describe("IconButton", () => {
  it("matches the snapshot", () => {
    const json = create(<IconButton />).toJSON();
    expect(json).toMatchSnapshot();
  });
});
