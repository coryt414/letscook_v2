import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    return (
        <div>
            {cart.length ===0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {/* <p>{JSON.stringify(cart)}</p> */}
                    {cart.map((item) => (
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <ul>
                                {item.ingredients.map((ingredient) => (
                                    <li key={ingredient.id}>{ingredient.name}</li>
                                ))}
                            </ul>
                            {/* {item.name} - Quantity: {item.quantity} */}
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    ))}

                </ul>
            )}
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
};

export default Cart;