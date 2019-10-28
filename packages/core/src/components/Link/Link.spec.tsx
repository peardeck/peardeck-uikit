import { create } from "react-test-renderer";
import React from "react";
import { Link } from "./Link";

describe("Link", () => {
  it("matches the snapshot", () => {
    const component = create(<Link href="/home" />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
