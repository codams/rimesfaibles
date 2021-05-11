import { useContext } from 'react';
import styled from 'styled-components';
import { WordsContext } from '../contexts/WordsContext';

const H4Styled = styled.h4`
	color: transparent;
	text-transform: uppercase;
	font-size: 8vw;
	background: linear-gradient(cornflowerblue 30%, #e4e4e4, darkmagenta 60%, cornflowerblue 100%);
	background-size: contain;
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-stroke: 1px #000000;
	filter: drop-shadow(2px 2px 1px black) drop-shadow(1px 1px 1px magenta);
`;

export const WordOutput = () => {
	const { input } = useContext(WordsContext);
	const DivStyled = styled.div`
		margin-top: 3vh;
		border: 4px solid #eb219b;
		box-sizing: border-box;
		display: ${input ? 'flex' : 'none'};
		justify-content: center;
		align-items: center;
		padding: 2vw;
		filter: drop-shadow(2px 2px 1px #88006a) drop-shadow(1px 1px 1px magenta);
	`;
	return (
		<DivStyled>
			<H4Styled>{input}</H4Styled>
		</DivStyled>
	);
};
