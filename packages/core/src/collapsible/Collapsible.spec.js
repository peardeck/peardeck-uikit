import React from "react";
import { create } from "react-test-renderer";
import { Collapsible } from "./Collapsible";
describe("Collapsible", () => {
  test("is a named export", () => {
    expect(Collapsible).toBeDefined();
  });
  describe("collapsed", () => {
    test("it matches the snapshot", () => {
      const component = create(
        React.createElement(
          Collapsible,
          {
            collapsed: true,
            onCollapsedChange: () => {},
            subTitle: "To the collapsed test",
            title: "Welcome",
          },
          "Here is some content for you"
        )
      );
      expect(component.toJSON()).toMatchSnapshot("collapsed");
    });
  });
  describe("expanded", () => {
    test("it matches the snapshot", () => {
      const component = create(
        React.createElement(
          Collapsible,
          {
            collapsed: false,
            onCollapsedChange: () => {},
            subTitle: "To the expanded test",
            title: "Welcome",
          },
          "Here is some content for you"
        )
      );
      expect(component.toJSON()).toMatchSnapshot("expanded");
    });
  });
});
//# sourceMappingURL=Collapsible.spec.js.map
