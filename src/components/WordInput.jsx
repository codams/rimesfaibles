import { useState, useContext } from 'react';
import styled from 'styled-components';
import { WordsContext } from '../contexts/WordsContext';

// const LabelStyled = styled.label`
// 	color: white;
// 	font-family: 'Mr Dafoe', cursive;
// 	color: #eb219b;
// 	-webkit-text-fill-color: rgba(253, 90, 250, 1);
// 	text-shadow: -2px -2px 0 #ffbaf2;
// 	-webkit-filter: drop-shadow(3px 3px 1px #441f62);
// 	font-size: 35px;
// 	font-weight: normal;
// 	margin-bottom: 4vh;
// 	text-align: center;
// `;
const InputStyled = styled.input`
	text-align: center;
	height: 4vw;
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
	color: white;
	font-family: 'Mr Dafoe', cursive;
	color: #eb219b;
	-webkit-text-fill-color: rgba(253, 90, 250, 1);
	text-shadow: -2px -2px 0 #ffbaf2;
	-webkit-filter: drop-shadow(3px 3px 1px #441f62);
	font-weight: 700;
	font-size: 3vh;
`;

export const WordInput = () => {
	const [userInput, setUserInput] = useState('');
	const { setInput } = useContext(WordsContext);
	const handleForm = (e) => {
		e.preventDefault();
		console.log('Salut toi.', userInput);
		setInput(userInput);
	};
	return (
		<FormStyled onSubmit={(e) => handleForm(e)}>
			{/* <LabelStyled htmlFor="wordInput">Entre un mot pour trouver une rime :</LabelStyled> */}
			<InputStyled
				type="text"
				name="wordInput"
				id="wordInput"
				onChange={(e) => {
					setUserInput(e.target.value);
				}}
			/>
			<SubmitStyled type="submit" value="Donne moi de la rime !" />
		</FormStyled>
	);
};
