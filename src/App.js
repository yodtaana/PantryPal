import React, { useState } from 'react';
import IngredientInput from './IngredientInput';
import RecipeList from './RecipeList';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchRecipes = async (ingredients) => {
    try {
      const API_ID = 'b64d971e';
      const API_KEY = '1118a6699c38099654ddf28a0d82539f';
      const apiUrl = `https://api.edamam.com/search?q=${ingredients.join(',')}&app_id=${API_ID}&app_key=${API_KEY}`;

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }

      const data = await response.json();
      if (data.hits.length === 0) {
        setErrorMessage('No recipes found. Please try different ingredients.');
        setRecipes([]);
      } else {
        setRecipes(data.hits); // Set the recipes state to the fetched data
        setErrorMessage('');
      }
    } catch (error) {
      setErrorMessage(error.message || 'An error occurred while fetching recipes');
    }
  };

  const resetSearch = () => {
    setRecipes([]);
    setIngredients([]);
    setErrorMessage('');
  };

  return (
    <div className="app">
      <h1>Pantry Pal</h1>
      {recipes.length === 0 ? (
        <div>
          <IngredientInput
            onSearch={fetchRecipes}
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
          {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
      ) : (
        <>
          <RecipeList recipes={recipes} />
          <button onClick={resetSearch}>Don't like what you see? Search a new recipe</button>
        </>
      )}
    </div>
  );
};

export default App;
