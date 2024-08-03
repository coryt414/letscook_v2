import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [ingredients, setIngredients] = useState([]);


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
      <h1>Ingredient Data</h1>
      {ingredients.length > 0 ? (
        <ul>
          {ingredients.map(ingredients => (
            <ul key={ingredients.ingredient_id}>{ingredients.ingredient_name}</ul>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;