// How to Run NodeJs Backend: (Terminal Commands)
// -> cd server
// -> npm run dev
// -> Server ShutDown: CTRL + C, then Y (Yes) and Enter

// Express Backend Server
const express = require("express");
const app = express()

// Backend Data (EXAMPLE: USERNAMES)
app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"] })
})

// App listening on the port of 5000 (Backend Server IS Online)
app.listen(5000, () => {console.log("Server started on port 5000") })