import styled from 'styled-components'
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: hidden;
  font-family: sans-serif;
  background: rgb(0,0,101);
  background: linear-gradient(211deg, rgba(0,0,101,1) 0%, rgba(128,0,167,1) 100%);
`;

function App() {
  return (
    <DivStyled>
      <Header />
      <Main />
      <Footer/>
    </DivStyled>
  );
}

export default App;
