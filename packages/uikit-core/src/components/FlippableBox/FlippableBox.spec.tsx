import { create } from "react-test-renderer";
import React from "react";
import { FlippableBox } from "./FlippableBox";

describe("FlippableBox", () => {
  test("it matches the snapshot", () => {
    const json = create(
      <FlippableBox
        height={300}
        width={200}
        front={<div>This is the front</div>}
        back={<div>This is the back</div>}
      />
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  describe("flipped", () => {
    test("it matches the snapshot", () => {
      const json = create(
        <FlippableBox
          height={300}
          width={200}
          front={<div>This is the front</div>}
          back={<div>This is the back</div>}
          flipped
        />
      ).toJSON();
      expect(json).toMatchSnapshot();
    });
  });
});
