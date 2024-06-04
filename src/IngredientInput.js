import React, { useState } from 'react';

const IngredientInput = ({ onSearch, ingredients, setIngredients }) => {
  const [ingredient, setIngredient] = useState('');

  const handleAddIngredient = () => {
    if (ingredient.trim() !== '') {
      setIngredients([...ingredients, ingredient.trim()]);
      setIngredient('');
    }
  };

  const handleDeleteIngredient = (indexToDelete) => {
    setIngredients(ingredients.filter((_, index) => index !== indexToDelete));
  };

  const handleSearch = () => {
    onSearch(ingredients);
  };

  return (
    <div className="ingredient-input">
      <input
        type="text"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <button onClick={handleAddIngredient}>Add Ingredient</button>
      <button onClick={handleSearch}>Search Recipes</button>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient}
            <button onClick={() => handleDeleteIngredient(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientInput;
