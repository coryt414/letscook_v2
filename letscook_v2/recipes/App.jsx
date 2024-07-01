import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Card, Image, Text, Badge, Button, Group, List } from '@mantine/core';

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
    <MantineProvider>
    <div>
    <h1>Recipe Data</h1>
    <ul>
        {recipes.length > 0 ? (
        recipes.map(recipes => (
            <>
            <li key={recipes.id}>
                <strong>{recipes.name}</strong>
                <ul>
                    {recipes.ingredients.map(ingredients => (
                        <li key={ingredients.id}>{ingredients.name}</li>
                    ))}
                </ul>
            </li>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={`/public/Recipe_Images/${recipes.name}.jpg`}
                height={250}
                alt={recipes.name}
              />
            </Card.Section>
      
            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>{recipes.name}</Text>
              <Badge color="pink">On Sale</Badge>
            </Group>
            
            <List>
              {recipes.ingredients.map(ingredients => (
                <List.Item>{ingredients.name}</List.Item>
              ))}
            </List>

            <Text size="sm" c="dimmed">
              With Fjord Tours you can explore more of the magical fjord landscapes with tours and
              activities on and around the fjords of Norway
            </Text>
      
            <Button color="blue" fullWidth mt="md" radius="md">
              Book classic tour now
            </Button>
          </Card>
          </>
        ))
    ) : (
        <li>No recipes found</li>
    )}
    </ul>
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
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
    </MantineProvider>
  );
}

export default App;