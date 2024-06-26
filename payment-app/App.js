import * as React from 'react';
import MainContainer from './navigation/MainContainer'; 
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <MainContainer />
    </ThemeProvider>
  );
}  

export default App;