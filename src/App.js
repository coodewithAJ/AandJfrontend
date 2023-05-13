
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';
import Products from './Pages/Products';

function App() {
  return (
   <>
   <BrowserRouter>
   {/* <Navbar/> */}
   <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/products/:category" element={<Products/>}/>
    
    <Route path="/products/jeans/:id" element={<Product/>}/>
    <Route path="/cart" element={<Cart/>}/>
   </Routes>
   </BrowserRouter>
   
   
   </>
  );
}

export default App;
