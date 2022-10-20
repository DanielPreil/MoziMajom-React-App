// App.js

// How to Run React Frontend: (Terminal Commands)
// -> cd client
// -> npm start
// -> Server ShutDown: CTRL + C, then Y (Yes) and Enter

// Import React from react
import React from "react"
// Import index.css
import "./index.css"
// Import backgroundSvgImage03 (Image Name) from "./assets/backgroundImage03.svg"
import backgroundSvgImage03 from "./assets/backgroundImage03.svg"
// Imports (Navbar, Content) from ./components
import { Navbar, Content } from "./components";

// App
const App = () => {

  // App Frontend Return

  return (

    // Class mainDiv
    <div className="mainDiv">

      <img src={backgroundSvgImage03} alt="BackgroundSvgImage" className="backgroundSvgImage"/>

      {/* ---------- Navigation Bar (Navbar Component) ---------- */}

      <Navbar />

      {/* ---------- Navigation Bar Over (Navbar Component) ---------- */}


      {/* ---------- Content Container (Content Component) ---------- */}

      <Content />

      {/* ---------- Content Container (Content Component) Over ---------- */}  

    </div>
    
  )
}

export default App