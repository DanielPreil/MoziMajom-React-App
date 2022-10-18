// How to Run React Frontend: (Terminal Commands)
// -> cd client
// -> npm start
// -> Server ShutDown: CTRL + C, then Y (Yes) and Enter

// Imports (React, sseEffect, useState) from react
import React, { useEffect, useState } from 'react'

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

  // App Frontend
  // If backendData.users === undefined -> Get undefined
  // Else get them inside <p> - tags
  return (

    <div>

      <div>
        <h1>Tatabánya Vértes Center Mozi</h1>
      </div>

      <div className="tatabanyaVertesCenterDiv">

        <h2>Filmek Most</h2>

        <div className="tatabanyaVertesCenterMovies">

          {(typeof backendData.movies === "undefined") ? (
            <p>Loading...</p>
          ): (// backendData-ból (server.js-ből) Filmek megszerzése -> kiküldése <p>-tag-ek közé egy <a>-tag-ben (Href Link lesz belőle), number érték növelése minden kiíratásnál
            backendData.movies.map((movie, i) => (
              <a href="https://vertescenter.mimozink.hu/" key={i}><p>{number++ + " "}{movie}</p></a>
            ))
          )}

        </div>
            
      </div>

    </div>
    
  )
}

export default App