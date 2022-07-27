import React, { useState, useEffect, Fragment } from "react";
import '../App.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";


function App() {
  
  // const randomColor = getRandomColor();
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fetch("https://calm-falls-89460.herokuapp.com/colors")
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].hex);
      });
  }, []);

  return (<Fragment>
    <Navbar/>
    
    <ul>
      {
        colors.map((color, index) => {
          return <li key={index} index>{color?.name}</li>
         })
      }
    </ul>
    <Home/>
  </Fragment>)

}

export default App;
