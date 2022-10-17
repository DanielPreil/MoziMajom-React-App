// How to Run React Frontend: (Terminal Commands)
// -> cd client
// -> npm start
// -> Server ShutDown: CTRL + C, then Y (Yes) and Enter

// Imports (React, sseEffect, useState) from react
import React, { useEffect, useState } from 'react'

// App
const App = () => {

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

      {(typeof backendData.users === "undefined") ? (
        <p>Loading...</p>
      ): (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}

    </div>
  )
}

export default App