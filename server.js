"use strict";

const http = require("http");
const quotes = require("./quotes")

http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/plain" });

    const count = Math.floor(Math.random()) * Math.floor(quotes.quote.length);
    console.log(count);

    res.write(`${quotes.quote[count]}`);
    res.end();

}).listen(3000, () => {
    console.log("Server is running", 3000);
});

