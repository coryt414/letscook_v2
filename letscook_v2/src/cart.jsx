import React from 'react';
import Product from './components/Product';
import Cart from './components/Cart';

const products = [
  {id: 1, name: 'Product 1'},
  {id: 2, name: 'Product 2'},
];

function CartPage() {
  return (
    <div>
      <h1>My Shopping Cart</h1>
      <div>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Cart />
    </div>
  );
}

export default CartPage;