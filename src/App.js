import React from 'react';
import './App.css';
import { useState,useEffect } from 'react';
import Login from './components/signin/login';
import Register from './components/singup/register';
import {Route,BrowserRouter, Routes} from 'react-router-dom'
import Display from './components/Addproperty1/display';
import Sidebar from './components/dashboard/sidebar';
import ProgressBar from './components/dashboard/progressBar';
import Display2 from './components/Addproperty1/display2';
import Display3 from './components/Addproperty1/display3';
import Display4 from './components/Addproperty1/display4';
import Home from './components/HomePage/home';

function App() {
 
  const [property, setProperty] = useState("")
  const [contact, setcontact] = useState("")
  const [area, setArea] = useState('')
  const handleChildData = (data) => {

    setcontact(data.contact);

  }
  const handleChildData1 = (data) => {
    setArea(data.area);

  }
  const handleChildData2 = (data) => {
    setProperty(data.property);
  }
 
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path="/home" element={<Home />}/>
         <Route path="/display" element={<Display onData2={handleChildData2} />}/>
         <Route path="/display2" element={<Display2 onData1={handleChildData1}/>}/>
         <Route path="/display3" element={<Display3 onData={handleChildData}/>}/>
         <Route path="/display4" element={<Display4  property={property} area={area} contact={contact}/>}/>
      </Routes>
       </BrowserRouter> 
    </div>
  );
}

export default App;
