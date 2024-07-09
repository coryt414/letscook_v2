import { Button } from '@mantine/core';

export default function AddToCart( { ingredients }) {
  function handleClick() {
    alert(ingredients);
  }
    return <Button onClick={handleClick} variant="outline" color="cyan" radius="md">Add to Cart!</Button>;
  }