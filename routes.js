const express = require('express')
const route = express.Router();
const storyIndex = require('./storyindex');
const story = require('./story');
const db = require('./db/db.js');

route.use(express.static('public'));

route.get('/', (req, res) => {

	var content = "";

	db.stories.forEach(function(story){
			content += story.toString() + "is" + story.isOpen() + "\n";
	});
	res.send(content);
});

route.get('/index.php', function(req, res){
	res.redirect('/story');
});
route.get('/storyindex.php', function(req, res){
	res.redirect('/story');
});

route.get('/story', storyIndex.listStory);


route.get('/story.php', function(req, res){
	var storyId = req.query.id;
	res.redirect('/story/' + storyId);
});

route.get('/story/:storyId', story.story);

module.exports = route;