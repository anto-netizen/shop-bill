import React, { useState } from 'react';

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 600 },
  { name: "Headphones", price: 200 }
];

function App() {
  const [cart, setCart] = useState(products.map(p => ({ ...p, quantity: 0 })));

  const handleQuantityChange = (index, quantity) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = parseInt(quantity) || 0;
    setCart(updatedCart);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div style={{ padding: 20 }}>
      <h2>Shopping Bill Calculator</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <strong>{item.name}</strong>: Rs.{item.price}
          <input
            type="number"
            min="0"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(index, e.target.value)}
            style={{ marginLeft: 10 }}
          />
        </div>
      ))}
      <hr />
      <p>Subtotal: Rs.{subtotal.toFixed(2)}</p>
      <h3>Total: Rs.{total.toFixed(2)}</h3>
    </div>
  );
}

export default App;
