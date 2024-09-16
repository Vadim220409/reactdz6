import './App.css';
import { createGlobalStyle } from 'styled-components';
import PageBoard from './PageBoard';
import events from './upcoming-events.json';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <PageBoard events={events}/>
    </>
    
  );
}

export default App;
