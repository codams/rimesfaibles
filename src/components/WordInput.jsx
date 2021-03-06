import { useState, useContext } from "react";
import styled from "styled-components";
import { WordsContext } from "../contexts/WordsContext";

const InputStyled = styled.input`
  text-align: center;
  height: 8vh;
  border-radius: 2em;
  font-size: 4vw;
  color: #eb219b;
  :focus {
    border: 4px solid #eb219b;
    outline: none;
  }
`;
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;
const SubmitStyled = styled.input`
  padding: 5px;
  margin-top: 4vh;
  height: 8vh;
  border-radius: 2em;
  background-color: #eb219b;
  font-family: "Mr Dafoe", cursive;
  color: #fff;
  -webkit-text-fill-color: #fff;
  text-shadow: -1px -1px 0 #fff;
  -webkit-filter: drop-shadow(1px 1px 1px #fff);
  font-weight: 700;
  font-size: 3vh;
`;

export const WordInput = () => {
  const [userInput, setUserInput] = useState("");
  const { setInput } = useContext(WordsContext);
  const handleForm = (e) => {
    e.preventDefault();
    setInput(userInput);
  };
  return (
    <FormStyled autocomplete="off" onSubmit={(e) => handleForm(e)}>
      <InputStyled
        type="text"
        name="wordInput"
        id="wordInput"
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />
      <SubmitStyled
        type="submit"
        value="Entre un mot pour connaitre sa rime !"
      />
    </FormStyled>
  );
};
