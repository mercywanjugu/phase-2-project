import React, { useState, useEffect } from "react";
import '../App.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor); 

  function handleChangeColor() {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor); 

  useEffect(() => {
    fetch("https://calm-falls-89460.herokuapp.com/colors")
      .then((response) => response.json())
      .then((data) => {
        setColor(data.color);
      });
  }, []);
  return (<Navbar/>)
 
  //   <div className="App">
//       <header className="ECDE-COLOR-APP">
//         { <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn Colors
//         </a> }
//       </header>
//     </div>
//   );
 }

export default App;
