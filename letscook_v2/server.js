const express = require('express');
const db = require('./db');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  console.log(`To get test message, go to http://localhost:${port}/api/data`);
  console.log(`or try, http://localhost:${port}/api/recipes for application specific data`);
  console.log(`also, make sure to verify that the AWS database is running.`);
  console.log(`To run the node dev server, use the command 'npm run dev'`);
});

app.get('/api/recipes', async (req, res) => {
  try {
     const query = `
        SELECT r.recipe_id AS r_id, recipe_name AS r_name,
        ingredient_id AS i_id, ingredient_name AS i_name
        FROM recipes r
        LEFT JOIN ingredients i ON r.recipe_id = i.recipe_id
        ORDER BY r_id, i_id;
    `; 
    const result = await db.query(query);
    const recipes = [];
    let currentRecipe = null;

    result.rows.forEach(row => {
        if (!currentRecipe || currentRecipe.id !== row.r_id) {
            currentRecipe = {
                id: row.r_id,
                name: row.r_name,
                ingredients: []
        };
        recipes.push(currentRecipe);
      }
        if (row.i_id) {
          currentRecipe.ingredients.push({
              id: row.i_id,
              name: row.i_name
          });
        }
    });
    res.json(recipes);
  } catch (err) {
    console.error('Error fetching recipes:', err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/api/ingredients', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM ingredients');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});