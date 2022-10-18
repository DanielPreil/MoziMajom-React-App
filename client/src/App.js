// How to Run React Frontend: (Terminal Commands)
// -> cd client
// -> npm start
// -> Server ShutDown: CTRL + C, then Y (Yes) and Enter

// Imports (React, sseEffect, useState) from react
import React, { useEffect, useState } from 'react'
// Import index.css
import "./index.css"
// Import backgroundSvgImage03 (Image Name) from "./assets/backgroundImage03.svg"
import backgroundSvgImage03 from "./assets/backgroundImage03.svg"

// App
const App = () => {

  // Incrase Number Data For The Movies
  let number = 1

  // Declare a new State Variable
  const [backendData, setBackendData] = useState(({}))

  // Fetch Backend Datat Once / loading the page from server.js
  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  // App Frontend Return

  return (

    // Class mainDiv
    <div className="mainDiv">

      <img src={backgroundSvgImage03} alt="BackgroundSvgImage" className="backgroundSvgImage"/>

      {/* ---------- Navigation Bar ---------- */}

      <nav className="navBar">

        {/* Navigation Bar Title */}

        <a href="index.html" className="navBarTitle"><h1>MoziMajom</h1></a>

        {/* Navigation Bar Href a Link Elements */}

        <ul className="navBarLinkElements">
          <a href="index.html"><li>Mozi</li></a>
          <a href="index.html"><li>Rólunk</li></a>
          <a href="index.html"><li>Beállítások</li></a>
        </ul>

      </nav>

      {/* ---------- Navigation Bar Over ---------- */}


      {/* ---------- Content Container ---------- */}

      <div className="ContentContainer">

        {/* Content Cinema Title */}

        <div className="cinemaTitle01">
          <h1 className='cinemaTitle'>Tatabánya Vértes Center Mozi</h1>
        </div>

        {/* Cinema: Tatabánya Vértes Center Mozi */}

        <div className="tatabanyaVertesCenterDiv">

          {/* Movies Now Title */}

          <h2>Filmek Most</h2>

          {/* The Movies Get from the server.js (API) */}

          <div className="tatabanyaVertesCenterMovies">

            {(typeof backendData.movies === "undefined") ? (
              <p>Loading...</p>
            ): (// backendData-ból (server.js-ből) Filmek megszerzése -> kiküldése <p>-tag-ek közé egy <a>-tag-ben (Href Link lesz belőle), number érték növelése minden kiíratásnál
              backendData.movies.map((movie, i) => (
                <a href="https://vertescenter.mimozink.hu/" key={i}><p className="tbanyaCinemaMovieLinkElements">{number++ + " "}{movie}</p></a>
              ))
            )}

          </div>
              
        </div>

      </div>

      {/* ---------- Content Container Over ---------- */}

    </div>
    
  )
}

export default App