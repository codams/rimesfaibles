import styled from 'styled-components';

import { Title } from './Title';

const HeaderStyled = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 20vh;
	padding: 1vw;
`;

export const Header = () => {
	return (
		<HeaderStyled>
			<Title />
		</HeaderStyled>
	);
};
