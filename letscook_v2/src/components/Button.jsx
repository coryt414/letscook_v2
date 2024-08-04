import { Button } from '@mantine/core';
import React, { useEffect, useState } from 'react';


export default function AddToCart({ ingredients }) {
  const [cart, setCart] = useState([]);
  function handleClick() {
    let ingredient_list = []
    {ingredients.map(ingredient => (
      ingredient_list.push(ingredient.name)
    ))}
    alert(ingredient_list);
    setCart([...cart, ingredient_list], []);
    console.log(cart)
  }
    return <Button onClick={handleClick} variant="outline" color="cyan" radius="md">Add to Cart!</Button>;
  }