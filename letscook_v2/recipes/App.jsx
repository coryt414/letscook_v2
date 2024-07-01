import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/recipes')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3000/api/ingredients')
      .then(response => {
        setIngredients(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
    <h1>Recipe Data</h1>
    <ul>
        {recipes.length > 0 ? (
        recipes.map(recipes => (
            <li key={recipes.id}>
                <strong>{recipes.name}</strong>
                <ul>
                    {recipes.ingredients.map(ingredients => (
                        <li key={ingredients.id}>{ingredients.name}</li>
                    ))}
                </ul>
            </li>
        ))
    ) : (
        <li>No recipes found</li>
    )}
    </ul>
{/*     <ul>
        {recipes.map(recipes => (
        <ul key={recipes.recipe_id}>{recipes.recipe_name}</ul>
        ))}
    </ul>
    <h1>Ingredients</h1>
      <ul>
        {ingredients.map(ingredient => (
          <li key={ingredient.ingredient_id}>{ingredient.ingredient_name}</li>
        ))}
      </ul> */}
    )
    </div>
  );
}

export default App;