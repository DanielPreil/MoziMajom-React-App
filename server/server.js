// How to Run NodeJs Backend: (Terminal Commands)
// -> cd server
// -> npm run dev
// -> Server ShutDown: CTRL + C, then Y (Yes) and Enter


//! -------------- Express Settings App Listen on port 5000 --------------

// Express Backend Server
const express = require("express");
const app = express()


// App listening on the port of 5000 (Backend Server IS Online)
app.listen(5000, () => {console.log("Server started on port 5000") })

//! -------------- App Listen on port 5000 Vége --------------



//! -------------- Cheerio Settings SetUp --------------

// request legyen egyenlő request Module-al
// cheerio legyen egyenlő cheerio Module-al

const request = require('request');
const cheerio = require('cheerio');

// tatabanyaVertesCenterUrlHrefLink: Weboldal Target, ahol a filmek adatait lehet megszerezni
tatabanyaVertesCenterUrlHrefLink = "https://vertescenter.mimozink.hu/"

//! -------------- Cheerio Settings SetUp Vége --------------


// request kérj request-et tatabanyaVertesCenterUrlHrefLink html-től
request(tatabanyaVertesCenterUrlHrefLink, (error,
response, html) => {

    // Ha nem érkezik / történik Hiba, vagy response.statusCode egyenlő 200-al, akkor:
    if(!error && response.statusCode === 200) {
        // $ értéke cheerio töltsd be html-értéket
        const $ = cheerio.load(html);

        // movieList: Tartalmazza a megszerzett Filmek-enveit
        let movieList = [];

        // Minden egyes elem amely, class:title-el és tag:a -val rendelkezik, azt tárold egy változóban (movieTitle), 
        // melynek az értékét konvertáld text-é (szöveggé), ezután töltsd fel movieList-be (Lista a megszerzett filmek neveiről)
        $('.title a').each((i, el) => {
            let movieTitle = $(el).text();
            movieList.push(movieTitle)
            //console.log(movieTitle);
        });

        // movieListLength értéke legyen egyenlő movieList-ben taralmazott értékek összességének számával
        let movieListLength = movieList.length;
        // realMovieList értéke legyen egyenlő movieListLength / 2-vel (Ok: Webscraping folyamata során kétszer kapjuk meg a megszerzett filmeket kiíratva), 
        // ezért ha elosszuk a filmek összegének számát 2-vel és csak a reális kerek szemát nézzük még, ha páratlan számot is kapunk, akkor:
        let realMovieList = Math.floor(movieListLength / 2)
        // tatabanyaVertesCenterMoviesTodayList értéke legyen egyenlő az eredi listának 0.indextől -> realMovieList (Előöekben megkapott teljes méret a megfelezett listának)
        let tatabanyaVertesCenterMoviesTodayList = movieList.slice(0,realMovieList)

        // Backend Data Elküldése App.js-nek (Tatabanya Vértes Center Filmek Real Time)
        app.get("/api", (req, res) => {
            res.json({"movies": tatabanyaVertesCenterMoviesTodayList })
        })

        // Console Log Movies (From Tatabanya Vértes Center Mozi)
        console.log(tatabanyaVertesCenterMoviesTodayList)
    }
});