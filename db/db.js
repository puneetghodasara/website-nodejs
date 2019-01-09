const fs = require('fs');
const csv = require('csv-parse/lib/sync');
const Story = require('../model/story.js');

const DB_STORY_FILE = "./story/story.csv";

function loadStories(){
	var stories = [];
	csv(fs.readFileSync(DB_STORY_FILE, "UTF8"))
				.forEach(function(line){
					var story = new Story(line);
					stories.push(story);
				});
	return stories;
};

module.exports = Object.freeze({
	stories: loadStories()
});
