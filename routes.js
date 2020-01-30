const express = require('express')
const route = express.Router();
const storyIndex = require('./controller/storyindex');
const story = require('./controller/story');
const index = require('./controller/index');
const selection = require('./controller/selection');
const test = require('./controller/test');
const info = require('./controller/info');
const like = require('./controller/like');

route.use(express.static('public'));

// HTTP to HTTPS
route.use(function (req, res, next) {
    if (req.secure) {
        next();
    } else {
        res.redirect('https://' + req.headers.host + req.url);
    }
});

route.get('/', function(req, res) {
    var host = req.get('host');
    var fullUrl = req.protocol + '://' + host + req.originalUrl;
    // if(host.includes('aws')
    //     || host.includes('gcp')
    //     || host.includes('azure')
    //     || host.includes('127')){
    //     // This is already at cloud site ...
    //     return index.index(req, res);
    // }
    return index.index(req, res);
    // return selection.selection(req, res);
});

route.get('/index.php', function (req, res) {
    res.redirect('/');
});
route.get('/storyindex.php', function (req, res) {
    res.redirect('/story');
});

route.get('/story', storyIndex.listStory);

route.get('/story.php', function (req, res) {
    var storyId = req.query.id;
    res.redirect('/story/' + storyId);
});

route.get('/story/:storyId', story.story);

route.get('/info', info.info);

route.get('/like', like.thumbsUp);

route.get('/test', test.test);

module.exports = route;
