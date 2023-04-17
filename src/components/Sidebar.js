import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/sidebar.css';

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <span className="material-icons"></span>
      </div>
      <ul>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/addproduct">Add Product</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/addcategory">Add Category</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
