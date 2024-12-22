import './App.css';
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import Login from './Login-Reg/Login'
import Register from './Login-Reg/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import About from './Product-page/About';
import Bestseller from './Product-page/Bestseller';
import Musical from './Product-page/Musical'
import Lego from './Product-page/Lego';
import Soft from './Product-page/Soft';
import Contact from './Product-page/Contact';
import Action from './Product-page/Action';
import Puzzle from './Product-page/Puzzle';
import { Fragment } from 'react';

function App() {
  return (

    <Fragment>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path='/About' element={<About/>}/>
          <Route path='/Bestseller' element={<Bestseller/>}/>
          <Route path='/Musical' element={<Musical/>}/>
          <Route path='/Lego' element={<Lego/>}/>
          <Route path='/Soft' element={<Soft/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Puzzle' element={<Puzzle/>}/>
          <Route path='/Action' element={<Action/>}/>

        </Routes>

        <Footer/>
      </BrowserRouter>

    </Fragment>

  );
}

export default App;