import React, { useState, useEffect, Fragment } from "react";
// import '../App.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

function App() {
  
  // const [colors, setColors] = useState([]);

  // useEffect(() => {
  //   fetch("https://calm-falls-89460.herokuapp.com/colors")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setColors(data)
  //     });
  // }, []);

  return (<Fragment>
    <Navbar/>
    <Home/>
    <Contact/>
    <About/>

    
    {/* { <ul>
      {
        colors.map((color, index) => {
          return <li key={index} style={{color:color?.hex}} index>{color?.name}</li>
         })
      }
    </ul> } */}
    {/* { <Home/> } */}
  </Fragment>)

}

export default App;