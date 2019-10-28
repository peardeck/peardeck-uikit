import React from "react";
import { create } from "react-test-renderer";
import { CallToAction } from "./CallToAction";

describe("CallToAction", () => {
  it("matches the snapshot", () => {
    const json = create(
      <CallToAction
        title="Call To Action!"
        buttonContent="Do the thing"
        image="foo"
      />
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  it("renders with out an image", () => {
    const json = create(
      <CallToAction title="Call To Action!" buttonContent="Do the thing" />
    ).toJSON();
    expect(json).toMatchSnapshot();
  });
});
