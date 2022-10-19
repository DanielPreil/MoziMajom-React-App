// How to Run NodeJs Backend: (Terminal Commands)
// -> cd server
// -> npm run dev
// -> Server ShutDown: CTRL + C, then Y (Yes) and Enter


// ---------- Express Settings App Listen on port 5000 ----------

// Express Backend Server
const express = require("express");
const app = express()


// App listening on the port of 5000 (Backend Server IS Online)
app.listen(5000, () => {console.log("Server started on port 5000") })

// ---------- App is Listening on port 5000 Over ----------


// ---------- Cheerio Settings SetUp ----------

// request legyen egyenlő request Module-al
// cheerio legyen egyenlő cheerio Module-al

const request = require('request');
const cheerio = require('cheerio');

// tatabanyaVertesCenterUrlHrefLink: Weboldal Target, ahol a filmek adatait lehet megszerezni
tatabanyaVertesCenterUrlHrefLink = "https://vertescenter.mimozink.hu/"

// ---------- Cheerio Settings SetUp Vége ----------


// request kérj request-et tatabanyaVertesCenterUrlHrefLink html-től
request(tatabanyaVertesCenterUrlHrefLink, (error,
response, html) => {

    // Ha nem érkezik / történik Hiba, vagy response.statusCode egyenlő 200-al, akkor:
    if(!error && response.statusCode === 200) {
        // $ értéke cheerio töltsd be html-értéket (WebScraper)
        const $ = cheerio.load(html);

        // ---------- Tatabánya Vértes Center Filmek Neve - Megszerzés ----------

        // movieList: Tartalmazza a megszerzett Filmek-neveit
        let movieList = [];

        // Minden egyes elem amely, class:title-el és tag:a -val rendelkezik, azt tárold egy változóban (movieTitle), 
        // melynek az értékét konvertáld text-é (szöveggé), ezután töltsd fel movieList-be (Lista a megszerzett filmek neveiről)
        $(".title a").each((index, value) => {
            let movieTitle = $(value).text();
            movieList.push(movieTitle)
            //console.log(movieTitle);
        });

        // movieListLength értéke legyen egyenlő movieList-ben taralmazott értékek összességének számával
        let movieListLength = movieList.length;
        // realMovieList értéke legyen egyenlő movieListLength / 2-vel (Ok: Webscraping folyamata során kétszer kapjuk meg a megszerzett filmeket kiíratva), 
        // ezért ha elosszuk a filmek összegének számát 2-vel és csak a reális kerek szemát nézzük még, ha páratlan számot is kapunk, akkor:
        let realMovieList = Math.floor(movieListLength / 2)
        // tatabanyaVertesCenterMoviesTodayList értéke legyen egyenlő az eredi listának 0.indextől -> realMovieList (Előzőekben megkapott teljes méret a megfelezett listának)
        let tatabanyaVertesCenterMoviesTodayList = movieList.slice(0,realMovieList)

        // Backend Data Elküldése App.js-nek (Tatabanya Vértes Center Filmek Real Time)
        app.get("/api1", (req, res) => {
            res.json({"movies": tatabanyaVertesCenterMoviesTodayList });
        })

        // Console Log -Movies List- (From Tatabanya Vértes Center Mozi) <- (DEBUG MOVIES) ->
        //console.log(tatabanyaVertesCenterMoviesTodayList)       <- (DEBUG MOVIES) ->


        // ---------- Tatabánya Vértes Center Filmek Neve - Megszerzés Vége ----------


        // ---------- Tatabánya Vértes Center Filmek Href Link - Megszerzés ----------

        // movieListHrefLinks: Tartalmazza a megszerzett Filmek-Href Link-eket
        let movieListHrefLinks = []

        // Minden egyes elem amely, class:title-el és tag:a -val rendelkezik, azt vizsgáld fölül és, ha tartalmaz "href" attribute-umot, 
        // akkor értéke legyen egyenlő movieLinks változóval, 
        // melyet .push metódus segítségével töltsünk fel movieListHrefLinks Listába + "https://vertescenter.mimozink.hu/" - szöveggel,
        // ezzel biztosítva a teljes eléréi utat az adott filmek a moziban
        $(".title a").each((index, value) => {
           let movieLinks = $(value).attr("href");
           movieListHrefLinks.push("https://vertescenter.mimozink.hu/" + movieLinks);
        });

        // hrefMovieLinksLength értéke legyen egyenlő movieListHrefLinks-ben taralmazott értékek összességének számával
        let hrefMovieLinksLength = movieListHrefLinks.length
        // realhrefMovieLinksLength értéke legyen egyenlő hrefMovieLinksLength / 2-vel (Ok: Webscraping folyamata során kétszer kapjuk meg a megszerzett filmeket href link-eket kiíratva), 
        // ezért ha elosszuk a filmek href linkeinek összegének számát 2-vel és csak a reális kerek szemát nézzük még, ha páratlan számot is kapunk, akkor:
        let realhrefMovieLinksLength = Math.floor(hrefMovieLinksLength / 2)
        // realSiezOfTatabanyaVertesCenterMovieHrefLinks értéke legyen egyenlő az eredi listának 0.indextől -> realhrefMovieLinksLength (Előzőekben megkapott teljes méret a megfelezett listának)
        let realSiezOfTatabanyaVertesCenterMovieHrefLinks = movieListHrefLinks.slice(0,realhrefMovieLinksLength)

        // Backend Data Elküldése App.js-nek (Tatabanya Vértes Center Filmek Href Link Real Time)
        app.get("/api2", (req, res) => {
            res.json({"moviesHrefLinks": realSiezOfTatabanyaVertesCenterMovieHrefLinks });
        })

        // Console Log realSiezOfTatabanyaVertesCenterMovieHrefLinks -HrefLinks List- (From Tatabanya Vértes Center Mozi) <- (DEBUG MOVIES) ->
        console.log(realSiezOfTatabanyaVertesCenterMovieHrefLinks)

        // ---------- Tatabánya Vértes Center Filmek Href Link - Megszerzés Vége ----------
    }
});