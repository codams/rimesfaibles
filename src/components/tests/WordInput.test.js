import { WordInput } from "../WordInput";
import { WordsContext } from "../../contexts/WordsContext";

import { render, screen } from "@testing-library/react";
import { useState } from "react";

test("renders word input", () => {
  const WordsProvider = WordsContext.Provider;
  render(
    <WordsProvider value={("", jest.fn())}>
      <WordInput />
    </WordsProvider>
  );
  const wordInput = screen.getByText(/Entre un mot pour connaitre sa rime !/);
  expect(wordInput).toBeInTheDocument();
});
