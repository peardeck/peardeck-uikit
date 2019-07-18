import React from "react";
import { storiesOf } from "@storybook/react";
import * as icons from "./";
import styled from "styled-components";

const ICON_NAMES = Object.keys(icons);

const IconGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
`;

const IconGridItem = styled.figure`
  width: 15em;
  text-align: center;
  padding: 1em;
  border: 1px solid #eee;
`;

const IconDescription = styled.figcaption`
  color: #333;
  margin-top: 1em;
`;

storiesOf("icons", module).add("All", () => (
  <IconGrid>
    {ICON_NAMES.map(iconName => {
      const Icon = (icons as any)[iconName];
      return (
        <IconGridItem key={iconName}>
          <Icon />
          <IconDescription>
            <code>{iconName}</code>
          </IconDescription>
        </IconGridItem>
      );
    })}
  </IconGrid>
));

const ICON_SIZES = ["1em", "1.5em", "2em", "2.5em", "3em", "3.5em"];

const IconSet = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const IconSetItem = styled.figure`
  width: 15em;
  text-align: center;
  padding: 2em 1em 1em;
  border: 1px solid #eee
  display: flex;
  flex-direction: column;
  align-items: center;

  > svg {
    flex-grow: 1;
  }
`;

const stories = storiesOf("icons/Components", module);

ICON_NAMES.forEach(iconName => {
  const Icon = (icons as any)[iconName];
  stories.add(iconName, () => (
    <IconSet>
      {ICON_SIZES.map(size => (
        <IconSetItem>
          <Icon size={size} />
          <IconDescription>{size}</IconDescription>
        </IconSetItem>
      ))}
    </IconSet>
  ));
});
