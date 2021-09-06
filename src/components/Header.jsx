import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  padding-top: 1vw;
`;

const StyledH1 = styled.h1`
  color: transparent;
  text-transform: uppercase;
  font-size: 9vw;
  transform: translatey(25px);
  background: linear-gradient(
    cornflowerblue 30%,
    #e4e4e4,
    darkmagenta 60%,
    cornflowerblue 100%
  );
  background-size: contain;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-stroke: 1px silver;
  filter: drop-shadow(5px 5px 1px black) drop-shadow(1px 1px 1px magenta);
`;

export const Header = () => {
  return (
    <HeaderStyled>
      <StyledH1>Rimesfaibles.tech</StyledH1>
    </HeaderStyled>
  );
};
