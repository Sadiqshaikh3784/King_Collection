import { Routes, Route } from "react-router-dom";
import './App.css'
import { Navbar } from './Components/Navbar';
import {Home} from "./Pages/Home";
import {Shop} from "./Pages/Shop";
import {About} from "./Pages/About";
import Product from "./Pages/Product";
import{Contact} from "./Pages/Contact";


function App() {
 

  return (
    <>
    <Navbar />
  
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Shop' element={<Shop />} />
       <Route path='/Collection' element={<Product />} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />

    </Routes>
  
     
    </>
  )
}

export default App
