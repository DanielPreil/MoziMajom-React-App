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
// Imports (Navbar, Content, LoadingScreen, Footer) from ./components
import { Navbar, Content, LoadingScreen, Footer } from "./components";

// App
const App = () => {

  // App Frontend Return

  return (

    // Class mainDiv
    <div className="mainDiv">

      {/* ---------- Loading Screen (LoadingScreen Component) ---------- */}
      <LoadingScreen />

      <img src={backgroundSvgImage03} alt="BackgroundSvgImage" className="backgroundSvgImage"/>

      {/* ---------- Navigation Bar (Navbar Component) ---------- */}
      <Navbar />

      {/* ---------- Content Container (Content Component) ---------- */}
      <Content />

      {/* ---------- Footer Bar (Footer Component) ---------- */}
      <Footer />

    </div>
    
  )
}

export default App