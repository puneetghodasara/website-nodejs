const fs = require('fs');
const csv = require('csv-parse/lib/sync');
const Story = require('../model/storymodel.js');
const constant = require('../constants');

function loadStories(){
	var stories = [];
	csv(fs.readFileSync(constant.DB_STORY_FILE, "UTF8"))
				.forEach(function(line){
					var story = new Story(line);
					stories.push(story);
				});
	return stories;
};

module.exports = Object.freeze({
	stories: loadStories()
});
