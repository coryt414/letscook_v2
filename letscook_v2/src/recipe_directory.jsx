import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Button, Card, Image, Text, Badge, Group, List, Flex, ThemeIcon } from '@mantine/core';
import AddToCart from '../components/Button';

function Recipe_directory() {
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
          <Flex
          bg="teal"
          gap="md"
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
        >
        {recipes.length > 0 ? (
        recipes.map(recipes => (
            <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={`/Recipe_Images/${recipes.name}.jpg`}
                height={250}
                alt={recipes.name}
              />
            </Card.Section>
      
            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>{recipes.name}</Text>
              <Badge color="pink">On Sale</Badge>
            </Group>
            <Flex>
            <List
                  spacing="xs"
      size="sm"
              center
              icon={
                <ThemeIcon color="blue" size={6} radius="xl">
              </ThemeIcon>
              }>
              {recipes.ingredients.map(ingredients => (
                <List.Item key={ingredients.id}>{ingredients.name}</List.Item>
              ))}
            </List>
            </Flex>
            <AddToCart
            ingredients= {recipes.ingredients}>
              Add to Shopping List!
            </AddToCart>
          </Card>
        ))
    ) : (
        <li>No recipes found</li>
    )}
    </Flex>
  </div>
  </MantineProvider>
  );
}

export default Recipe_directory;