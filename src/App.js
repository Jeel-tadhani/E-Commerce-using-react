import { useContext } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import {store } from './Context/Context';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';

function App() {
  const {islogin}= useContext(store);
  return (
    
    <Routes>
      <Route path="/" element={islogin?<Home/>:<Login/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/products" element={<ProductList/>}/>
      <Route path="/product" element={<Product/>} />
    </Routes>
    
  );
}

export default App;
