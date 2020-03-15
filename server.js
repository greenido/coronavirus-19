//
// A site to keep track on Coronavirus COVID-19 Global Cases from Johns Hopkins + Tweets/News
//
// @author: Ido Green | @greenido
// @date: March 2020
//
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

//
// http://expressjs.com/en/starter/basic-routing.html
//

// The main map page
app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

// just numbers
app.get("/num", (request, response) => {
  response.sendFile(`${__dirname}/views/num.html`);
});

// /tweet + news page
app.get("/tweets", (request, response) => {
  response.sendFile(`${__dirname}/views/tweets.html`);
});

// helper function that prevents html/css/script malice
const cleanseString = function(string) {
  return string.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

//
// listen for requests 😃
//
var listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
