import React from "react";
import { storiesOf } from "@storybook/react";
import * as icons from "./";

const stories = storiesOf("icons", module);
const iconNames = Object.keys(icons);

stories.add("all", () => (
  <div>
    {iconNames.map(iconName => {
      const Icon = (icons as any)[iconName];
      return (
        <figure key={iconName}>
          <Icon />
          <figcaption>{iconName}</figcaption>
        </figure>
      );
    })}
  </div>
));

iconNames.forEach(iconName => {
  const Icon = (icons as any)[iconName];
  stories.add(iconName, () => (
    <>
      <Icon />
      <Icon height="1.5em" width="1.5em" />
      <Icon height="2em" width="2.5em" />
      <Icon height="2.5em" width="2.5em" />
      <Icon height="2.5em" />
      <Icon width="2.5em" />
    </>
  ));
});
