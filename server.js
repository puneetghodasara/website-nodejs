'use strict';

const fs = require('fs');
const express = require('express');
const https = require("https");
const http = require("http");

// Constants
const PORT_HTTP = 80;
const PORT_HTTPS = 443;
const HOST = '0.0.0.0';

// App
const app = express();
const routes = require('./routes');

const options = {
  key: fs.readFileSync("keys/server.key"),
  cert: fs.readFileSync("keys/server.pem")
};
https.createServer(options, app).listen(PORT_HTTPS);
// http.createServer(app).listen(PORT_HTTP);

app.use('', routes);

console.log(`Running on https://${HOST}:${PORT_HTTPS}`);
