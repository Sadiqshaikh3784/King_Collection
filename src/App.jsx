import { Routes, Route } from "react-router-dom";
import './App.css'
import { Navbar } from './Components/Navbar';
import { Home } from "./Pages/Home";
import Shop from "./Pages/Shop";
import { About } from "./Pages/About";
import Product from "./Pages/Products";
import { Contact } from "./Pages/Contact";
import ProductDetails from "./Pages/ProductDetails";


function App() {


  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:slug" element={<Shop />} />
        <Route path='/Collection' element={<Product />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />}
        />

      </Routes>


    </>
  )
}

export default App
