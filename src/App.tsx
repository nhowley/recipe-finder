import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import RecipeFinderPage from './pages/RecipeFinderPage';
import { theme } from './themes';


function App() {
  return (
    <ThemeProvider theme={theme} >
      <RecipeFinderPage />
   </ThemeProvider>
  );
}

export default App;
