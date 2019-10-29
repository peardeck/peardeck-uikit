import React from "react";
import { useState } from "@storybook/addons";
import { Collapsible } from "./Collapsible";

export default {
  component: Collapsible,
  title: "core|Collapsible",
};

export const Default = () => {
  const [collapsed, onCollapsedChange] = useState(false);

  return (
    <Collapsible
      title="This is the title"
      subTitle="...and a subtitle goes here"
      collapsed={collapsed}
      onCollapsedChange={onCollapsedChange}
    >
      Content goes here!
      <div
        style={{
          height: "10em",
          border: "1px solid red",
          backgroundColor: "pink",
          color: "white",
        }}
      >
        Make room!
      </div>
    </Collapsible>
  );
};
