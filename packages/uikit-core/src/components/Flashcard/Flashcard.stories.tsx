import React, { ElementType } from "react";
import { boolean, number, text, select } from "@storybook/addon-knobs";
import {
  IconAlphabetical,
  IconAccount,
  IconCalendar,
  IconCheckmark,
  IconClassroom,
  IconImage,
} from "@peardeck/uikit-icons";
import { colorKnobs, spaceKnobs } from "../../theme/knobs";
import { Box } from "../Box/Box";
import { Flashcard } from "./Flashcard";

export default {
  component: Flashcard,
  title: "core|Flashcard",
};

const ICONS: { [key: string]: ElementType } = {
  IconAlphabetical,
  IconAccount,
  IconCalendar,
  IconCheckmark,
  IconClassroom,
  IconImage,
};
const ICONS_KEYS = Object.keys(ICONS);

const KNOB_GROUP = "Flashcard";

export const Default = () => {
  const height = number("Container Height", 300, {}, KNOB_GROUP);
  const width = number("Container Width", 500, {}, KNOB_GROUP);
  const slideAnimation = boolean("Use Slide Animation", false, KNOB_GROUP);
  const iconKey = select("Icon", ICONS_KEYS, ICONS_KEYS[1], KNOB_GROUP);
  const IconComponent = ICONS[iconKey];

  return (
    <Box {...colorKnobs()} {...spaceKnobs()} m={3}>
      <Flashcard
        p={4}
        height={height}
        width={width}
        slideAnimation={slideAnimation}
        image={IconComponent && <IconComponent height="100%" width="100%" />}
        term={text("Term", "Figurative Language", KNOB_GROUP)}
        definition={text(
          "Definition",
          "Language that uses imagination or exaggeration and does not stick to the facts",
          KNOB_GROUP
        )}
        example={text(
          "Example",
          "I had to walk 15 miles to school in the snow, uphill, in bare feet.",
          KNOB_GROUP
        )}
        flipped={boolean("Flipped", false, KNOB_GROUP)}
        flipSpeed={`${number("Flip Speed", 0.5, {}, KNOB_GROUP)}s`}
      />
    </Box>
  );
};
