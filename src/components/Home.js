
import React, { useState, useEffect, } from "react"; 
const useGenerateRandomColor = () => {
    const [color,setColor] = useState("")
    const generateColor = () =>{
        setColor(Math.random().toString(16).substr(-6));
    };
    return {color,generateColor};
      
};

function Home() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fetch("https://calm-falls-89460.herokuapp.com/colors")
      .then((response) => response.json())
      .then((data) => {
        setColors(data)
      });
  }, []);

  const { color, generateColor } 
  = useGenerateRandomColor();
  return (
    <div
      style={{
        height: "80vh",
        width: "100vw",
        backgroundColor: "#" + color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{
          padding: "40px",
          borderRadius: "10px",
          backgroundImage: 
"linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
          fontSize: "larger",
        }}
        onClick={generateColor}
      >
        Generate random color
      </button>
    </div>
  );
}

export default Home;