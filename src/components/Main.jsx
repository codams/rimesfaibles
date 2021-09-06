import React, { useState } from "react";
import styled from "styled-components";

import { WordInput } from "./WordInput";
import { WordOutput } from "./WordOutput";

import { WordsContext } from "../contexts/WordsContext";

const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 6vh;
  flex-grow: 1;
`;

export const Main = () => {
  const WordsProvider = WordsContext.Provider;
  const [input, setInput] = useState("");
  console.log("Built by damsauvagere@gmail.com");
  return (
    <SectionStyled>
      <WordsProvider value={{ input, setInput }}>
        <WordInput />
        <WordOutput />
      </WordsProvider>
    </SectionStyled>
  );
};
