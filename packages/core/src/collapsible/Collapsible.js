var __rest =
  (this && this.__rest) ||
  function(s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
import React, { useState } from "react";
import styled from "styled-components";
import { CollapsibleHeader } from "./CollapsibleHeader";
const StyledCollapsible = styled.div`
  border: 1px solid #eee;
`;
const StyledCollapsibleContent = styled.div`
  transition: all 0.5s;
  overflow: hidden;
  max-height: ${({ collapsed }) => (collapsed ? "0" : "600px")};
`;
export const Collapsible = _a => {
  var { children, collapsed, onCollapsedChange } = _a,
    props = __rest(_a, ["children", "collapsed", "onCollapsedChange"]);
  return React.createElement(
    StyledCollapsible,
    Object.assign({}, props),
    React.createElement(CollapsibleHeader, {
      title: "The Title",
      subTitle: "A subtitle goes here",
      collapsed: collapsed,
      onCollapsedChange: onCollapsedChange,
    }),
    React.createElement(
      StyledCollapsibleContent,
      { collapsed: collapsed },
      children
    )
  );
};
export const UncontrolledCollapsible = props => {
  const [collapsed, onCollapsedChange] = useState(false);
  return React.createElement(
    Collapsible,
    Object.assign({}, props, {
      collapsed: collapsed,
      onCollapsedChange: onCollapsedChange,
    })
  );
};
//# sourceMappingURL=Collapsible.js.map
