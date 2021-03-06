const fs = require('fs');
const csv = require('csv-parse/lib/sync');
const Story = require('../model/storymodel.js');
const constant = require('../constants');

function loadStories(){
	var stories = [];
	if(!fs.existsSync(constant.DB_STORY_FILE)){
		console.error(" Story File (story.csv) not found. ");
		return stories;
	}
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
