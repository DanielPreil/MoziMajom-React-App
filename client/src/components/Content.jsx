// ----- Content Component -----

// Import React from react
import React from 'react'
// Imports (React, useEffect, useState) from react
import { useState, useEffect } from "react"

const Content = () => {

    // Fetch Backend Datat Once / loading the page from server.js
    useEffect(() => {
      fetch("/api1").then(
        response => response.json()
      ).then(
        data => {
          setBackendData(data)
        }
      )
    }, [])
  
    // Incrase Number Data For The Movies
    let number = 1

    // Declare a new State Variable
    const [backendData, setBackendData] = useState(({}))
  
    return (

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
                <a href="index.html" key={i}><p className="tbanyaCinemaMovieLinkElements">{number++ + " "}{movie}</p></a>
              ))
            )}

          </div>
              
        </div>

    </div>

  )
}

export default Content