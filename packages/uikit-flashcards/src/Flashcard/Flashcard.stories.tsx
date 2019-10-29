import React, { useState } from "react";
import { boolean, number } from "@storybook/addon-knobs";
import { Button } from "@peardeck/uikit-core";
import { Flashcard } from "./Flashcard";

export default {
  component: Flashcard,
  title: "Flashcards|Flashcard",
};

export const Default = () => {
  const [isFlipped, setFlipped] = useState(false);
  return (
    <>
      <Button buttonSize="small" mb={2} onClick={() => setFlipped(!isFlipped)}>
        Flip It
      </Button>
      <Flashcard
        flipped={isFlipped}
        slide={boolean("Slide animation", false)}
        speed={number("Speed", 0.5)}
      />
    </>
  );
};
