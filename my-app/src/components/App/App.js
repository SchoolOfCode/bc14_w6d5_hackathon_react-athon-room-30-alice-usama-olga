import './App.css';
import RecipeText from '../RecipeText/index';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [showRecipe, setShowRecipe] = useState(false);
  const [theme, setTheme] = useState('light'); // track the current theme

  function handleClick() {
    setShowRecipe(true);
    console.log('Button clicked');
  }

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light'); // toggle the theme
  }

  return (
    <div className={`App ${theme}`}>
      <button onClick={handleClick}>Press me</button>
      <button onClick={toggleTheme}>
        <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
      </button>
      {showRecipe && <RecipeText setShowRecipe={setShowRecipe} />}
    </div>
  );
}

export default App;




