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
import React from "react";
import styled from "styled-components";
import { IconCollapseArrow } from "@pearkit/icons";
const StyledCollapsibleHeader = styled.button`
  color: #547272;
  display: flex;
  align-items: center;
  border: 0;
  background-color: transparent;
  appearance: none;
  width: 100%;
  text-align: left;
  margin: 0;
  padding: 0.5em;
  cursor: pointer;

  :focus {
    outline: 0;
  }
`;
const StyledCollapsibleHeaderContent = styled.div`
  flex: 1;
`;
const StyledCollapsibleHeaderTitle = styled.div`
  font-size: 2em;
  text-transform: uppercase;
`;
const StyledCollapsibleHeaderSubTitle = styled.div`
  font-size: 1.25em;
`;
const StyledCollapsibleHeaderIcon = styled.div`
  transform: ${({ collapsed }) =>
    collapsed ? "rotate(180deg)" : "rotate(0deg)"};
  opacity: 0.7;
  transition: all 0.3s;
`;
export const CollapsibleHeader = _a => {
  var { onCollapsedChange, title, subTitle, collapsed } = _a,
    props = __rest(_a, ["onCollapsedChange", "title", "subTitle", "collapsed"]);
  return React.createElement(
    StyledCollapsibleHeader,
    Object.assign({}, props, { onClick: () => onCollapsedChange(!collapsed) }),
    React.createElement(
      StyledCollapsibleHeaderContent,
      null,
      React.createElement(StyledCollapsibleHeaderTitle, null, title),
      subTitle &&
        React.createElement(StyledCollapsibleHeaderSubTitle, null, subTitle)
    ),
    React.createElement(
      StyledCollapsibleHeaderIcon,
      { collapsed: collapsed },
      React.createElement(IconCollapseArrow, null)
    )
  );
};
//# sourceMappingURL=CollapsibleHeader.js.map
