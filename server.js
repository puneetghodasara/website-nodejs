'use strict';

const fs = require('fs');
const https = require("https");
const http = require("http");
const app = require('./app');

// Constants
const PORT_HTTP = 80;
const PORT_HTTPS = 443;

const options = {
  key: fs.readFileSync("keys/key.pem"),
  cert: fs.readFileSync("keys/cert.pem")
};
let httpsServer = https.createServer(options, app);
httpsServer.listen(PORT_HTTPS);
let httpServer = http.createServer(app);
httpServer.listen(PORT_HTTP);

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