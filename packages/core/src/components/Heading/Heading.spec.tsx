import React from "react";
import { create } from "react-test-renderer";
import {
  Heading,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "./Heading";

describe("Heading", () => {
  it("matches the snapshot", () => {
    const json = create(<Heading>Default Heading</Heading>).toJSON();
    expect(json).toMatchSnapshot();
    expect(json && json.type).toEqual("h1");
  });

  describe("Heading1", () => {
    it("matches the snapshot", () => {
      const json = create(<Heading1>Heading 1</Heading1>).toJSON();
      expect(json).toMatchSnapshot();
      expect(json && json.type).toEqual("h1");
    });
  });

  describe("Heading2", () => {
    it("matches the snapshot", () => {
      const json = create(<Heading2>Heading 2</Heading2>).toJSON();
      expect(json).toMatchSnapshot();
      expect(json && json.type).toEqual("h2");
    });
  });

  describe("Heading3", () => {
    it("matches the snapshot", () => {
      const json = create(<Heading3>Heading 3</Heading3>).toJSON();
      expect(json).toMatchSnapshot();
      expect(json && json.type).toEqual("h3");
    });
  });

  describe("Heading4", () => {
    it("matches the snapshot", () => {
      const json = create(<Heading4>Heading 4</Heading4>).toJSON();
      expect(json).toMatchSnapshot();
      expect(json && json.type).toEqual("h4");
    });
  });

  describe("Heading5", () => {
    it("matches the snapshot", () => {
      const json = create(<Heading5>Heading 5</Heading5>).toJSON();
      expect(json).toMatchSnapshot();
      expect(json && json.type).toEqual("h5");
    });
  });

  describe("Heading6", () => {
    it("matches the snapshot", () => {
      const json = create(<Heading6>Heading 6</Heading6>).toJSON();
      expect(json).toMatchSnapshot();
      expect(json && json.type).toEqual("h6");
    });
  });
});
