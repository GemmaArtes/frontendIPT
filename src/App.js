import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import Category from './components/Category';
import AddCategory from './components/AddCategory';
import Login from './components/Login';
import Register from './components/Register';
import { AuthContext } from './contexts/AuthContext';

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
        
        {isAuthenticated && <Sidebar />}
        
        <Routes>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/addproduct" element={<AddProduct/>}/>
          <Route exact path="/categories" element={<Category/>}/>
          <Route exact path="/addcategory" element={<AddCategory/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
