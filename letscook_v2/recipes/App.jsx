import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/recipes')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Recipe Data</h1>
      {recipes.length > 0 ? (
        <ul>
          {recipes.map(recipes => (
            <li key={recipes.id}>{recipes.recipe_name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;