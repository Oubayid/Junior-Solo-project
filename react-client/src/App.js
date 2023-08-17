import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductsList from './components/ProductsList';
import CartList from './components/CartList';
import AddProduct from './AddProduct';
import Update from './components/Update';
import Search from './components/Search';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [data, setData] = useState([]);
  const [view, setView] = useState('productList');
  const [Mogo, setMogo] = useState([]);
  const [Razer, setRazer] = useState([]);
  const [SteelSeries, setSteelSeries] = useState([]);
  const [cart, setCart] = useState([]);
  const [update, setUpdate] = useState({});
  const [trigger, setTrrigger] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/api/products')
      .then((res) => {
        setMogo(res.data.filter((e) => e.name === 'Mogo Mg-24'));
        setRazer(res.data.filter((e) => e.name === 'RAZER X'));
        setSteelSeries(res.data.filter((e) => e.name === 'SteelSeries Arctis Nova'));
        setData(res.data);
        console.log("Updated data:", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addToCart = (products) => {
    setView("cart")
    setCart([...cart, products]);
  };

  const updated = (obj) => {
    setView("update")
    setUpdate(obj);
  };

  const stalSearch = (input) => {
    const filtr = data.filter((e) => {
      return e.name.toLowerCase().includes(input.toLowerCase());
    });
    setData(filtr);
  };

  const switchView = (x) => {
    setView(x);
  };

  return (
    <BrowserRouter>
    <Link to="/">
    <a href="#" className="logo">
      <i className='bx bxs-mouse'></i>MouseBox
    </a>
  </Link>
        <ul className="navbar">
          <li><a href="#" className="active">Overview</a></li>
          <li><a href="# ">Tech Specs</a></li>
          <li><a href="# ">Reviews</a></li>
          <li><a href="# ">Contact Us</a></li>
        </ul>
        
        <Link to={"/add"}>
        <a href="#" className="add">
        ADD New Product
</a>
        </Link>
      
  <div className="main">
  <a href="#" className="bottom" onClick={() => {
    if (data.length > 2) {
      return setData(Mogo);
    } else if (data === Mogo) {
      return setData(Razer);
    } else {
      return setData(SteelSeries);
    }
  }}>
  
    Best Products <i className="bx bx-down-arrow-circle"></i>
  </a>
  <div></div>
  <div className="row"></div>
  <div className="row row2"></div>
  <div className="row row3"></div>
  </div>
      <Routes>

        <Route path="/hh" element={<Search productUpdate={update} stat={stalSearch} />} />
          <Route path="/add" element={<AddProduct addToCart={addToCart} />} />
          <Route path="/update" element={<Update productUpdate={update} />} />
          <Route path="/" element={<ProductsList data={data} updates={updated} addToCart={addToCart} />} index />
          <Route path="/cart" element={<CartList cart={cart} />} />
        </Routes>
   
    </BrowserRouter>
  );
}

export default App;
