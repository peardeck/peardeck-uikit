import React from 'react';
import { storiesOf } from "@storybook/react";
import { UncontrolledCollapsible } from "./Collapsible";


storiesOf("core/Collapsible", module).add("Default", () => (
  <UncontrolledCollapsible title="This is the title" subTitle="...and a subtitle goes here">
    Content goes here!
    <div style={{ height: '10em', border: '1px solid red', backgroundColor: 'pink', color: 'white' }}>Make room!</div>
  </UncontrolledCollapsible>
), {
  notes: `
        # Collapsible

        Provides a container with a clickable header that will collapse and expand child content.
      `,
});
