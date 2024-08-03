import { useState } from 'react'
import './App.css'
import '@mantine/core/styles.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './dashboard';
import Cart from './cart';
import Recipe_directory from './recipe_directory';



import { MantineProvider } from '@mantine/core';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/recipe_directory">Recipe Directory</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/recipe_directory" element={<Recipe_directory />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App
