import styled from "styled-components";
import './App.css';
import { Contact } from './components/Contact';
import { Main } from './components/Main';
import { Profile } from './components/Profile';
import { Works } from './components/Works';

const Container = styled.div`
  height: 100vh;
  color: white;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  background: url("../img/bg.jpeg");
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
  
`;

function App() {
  return (
    <Container>
      <Profile/>
      <Main/>
     
      <Works/> 
    </Container>
  );
}

export default App;
