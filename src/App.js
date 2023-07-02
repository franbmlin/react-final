import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import CreateProduct from './CreateProduct';
import Products from './Products';
import ProductList from './ProductList';
import Footer from './Footer';

function App() {
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<h1>Welcome!!</h1>} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' exact element={<ProductList />} />
          <Route path='products/:id' element={<Products />} />
          <Route path='add' element={<CreateProduct />} />
          <Route path='edit/:id' element={<CreateProduct />} />
        </Route>
        <Route path='*' element={<h1>Sorry Page Not Found :(</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;