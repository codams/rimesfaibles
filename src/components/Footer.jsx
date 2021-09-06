import styled from 'styled-components';

const FooterStyled = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 5vh;
`;

const StyledA = styled.a`
	text-decoration: none;
	color: #ff0fad;
	:hover {
		text-decoration: underline;
		text-decoration-color: #ff0fad;
	}
`;

export const Footer = () => {
	return (
		<FooterStyled>
			<StyledA href="https://github.com/Damiaou/rimesfaibles">Editer sur Github</StyledA>
		</FooterStyled>
	);
};


