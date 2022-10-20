// ----- Navbar Component -----

// Import React from react
import React from "react"

const Navbar = () => {
  return (
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
  )
}

export default Navbar