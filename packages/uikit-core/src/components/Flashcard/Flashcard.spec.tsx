import { create } from "react-test-renderer";
import React from "react";
import { Flashcard } from "./Flashcard";

describe("Flashcard", () => {
  test("it matches the snapshot", () => {
    const json = create(
      <Flashcard height={300} width={100} term="" definition="" example="" />
    ).toJSON();
    expect(json).toMatchSnapshot();
  });

  describe("flipped", () => {
    test("it matches the snapshot", () => {
      const json = create(
        <Flashcard
          height={500}
          width={300}
          term="Claim"
          definition="What you are trying to prove, your thesis"
          example="Aliens Exist"
          flipped
        />
      ).toJSON();
      expect(json).toMatchSnapshot();
    });
  });
});
