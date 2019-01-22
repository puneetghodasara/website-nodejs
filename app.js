'use strict';

const express = require('express');
const app = express();
const routes = require('./routes');

app.use('', routes);
// Because we host site behind Amazon Load Balancer
app.set('trust proxy', 'loopback, linklocal, uniquelocal');

module.exports = app;