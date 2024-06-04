import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe.recipe.label}</h3>
            <p>{recipe.recipe.source}</p>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
              View Recipe
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;


