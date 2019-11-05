import { create } from "react-test-renderer";
import React from "react";
import { FlippableBoxResponsive } from "./FlippableBoxResponsive";

describe("FlippableBoxResponsive", () => {
  test("it matches the snapshot", () => {
    const json = create(
      <FlippableBoxResponsive
        front={<div>This is the front</div>}
        back={<div>This is the back</div>}
      />
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  describe("flipped", () => {
    test("it matches the snapshot", () => {
      const json = create(
        <FlippableBoxResponsive
          front={<div>This is the front</div>}
          back={<div>This is the back</div>}
          flipped
        />
      ).toJSON();
      expect(json).toMatchSnapshot();
    });
  });
});
