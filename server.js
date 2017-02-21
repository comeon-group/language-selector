// server.js
// where your node app starts

// init project
const express = require('express');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config");

const app = express();
const compiler = webpack(webpackConfig());

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/dist/" // Same as `output.publicPath` in most cases.
}));

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/wc", function (request, response) {
  response.sendFile(__dirname + '/views/wc.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
