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
  key: fs.readFileSync("keys/key.pem"),
  cert: fs.readFileSync("keys/cert.pem")
};
let httpsServer = https.createServer(options, app);
httpsServer.listen(PORT_HTTPS);
let httpServer = http.createServer(app);
httpServer.listen(PORT_HTTP);

app.use('', routes);
// Because we host site behind Amazon Load Balancer
app.set('trust proxy', 'loopback, linklocal, uniquelocal');

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

console.log(" ... website is hosted ...");

function shutdown(){
  console.info('SIGTERM signal received.');

  httpServer.close(() => {
    console.log('Http server closed.');
  });
  httpsServer.close(() => {
    console.log('Https server closed.');
  });

}