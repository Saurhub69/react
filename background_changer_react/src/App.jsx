// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [color, setColor] = useState("black")
//   // const [allowednumbers, setAllowednumbers] = useState(15)
//   // const [charachter, setCharachter] = useState('')
//   // const [password, setPassword] = useState(


//   return (
//     <div className="w-full h-screen duration-200"
//     style={{backgroundColor: color}}
//     >
//       <div className="fixed flex flex-wrap 
//       justify-center bottom-12 inset-x-0 px-2">
//         <div className="flex flex-wrap justify-center 
//         gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl ">
          
//           <button
//           onClick={() => setColor("red")}
//           className="outline-none px-2 py-1 
//           rounded-3xl text-black shadow-lg"
//           style={{backgroundColor: "red"}}
//           >Red</button>

//           <button
//           onClick={() => setColor("white")}
//           className="outline-none px-4 py-1 
//           rounded-3xl text-black shadow-lg"
//           style={{backgroundColor: "white"}}
//           >white</button>

//           <button
//           onClick={() => setColor("blue")}
//           className="outline-none px-4 py-1 
//           rounded-3xl text-black shadow-lg"
//           style={{backgroundColor: "blue"}}
//           >blue</button>

//           <button
//           onClick={() => setColor("yellow")}
//           className="outline-none px-4 py-1 
//           rounded-3xl text-black shadow-lg"
//           style={{backgroundColor: "yellow"}}
//           >yellow</button>


//           <button
//           onClick={() => setColor("green")}
//           className="outline-none px-4 py-1 
//           rounded-3xl text-black shadow-lg"
//           style={{backgroundColor: "green"}}
//           >green</button>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default App

import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  // State to manage the background color
  const [color, setColor] = useState(getStoredColor() || 'olive'); // Default is olive color

  // Function to get the color from localStorage
  function getStoredColor() {
    return localStorage.getItem('selectedColor');
  }

  // Function to update the color and store it in localStorage
  function updateColor(newColor) {
    setColor(newColor);
    localStorage.setItem('selectedColor', newColor);
  }

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          <button
            onClick={() => updateColor('red')}
            className="outline-none px-2 py-1 rounded-3xl text-black shadow-lg"
            style={{ backgroundColor: 'red' }}
          >
            Red
          </button>
          <button
            onClick={() => updateColor('white')}
            className="outline-none px-4 py-1 rounded-3xl text-black shadow-lg"
            style={{ backgroundColor: 'white' }}
          >
            White
          </button>
          <button
            onClick={() => updateColor('blue')}
            className="outline-none px-4 py-1 rounded-3xl text-black shadow-lg"
            style={{ backgroundColor: 'blue' }}
          >
            Blue
          </button>
          <button
            onClick={() => updateColor('yellow')}
            className="outline-none px-4 py-1 rounded-3xl text-black shadow-lg"
            style={{ backgroundColor: 'yellow' }}
          >
            Yellow
          </button>
          <button
            onClick={() => updateColor('green')}
            className="outline-none px-4 py-1 rounded-3xl text-black shadow-lg"
            style={{ backgroundColor: 'green' }}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
