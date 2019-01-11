exports.getStoryLine = function (story) {
	if(story.isActive() === true){
		return '<tr><td>' + story.getId() + '</td><td>' + story.getDate() + '</td><td><a href="story/' + story.getId() + '?ref=index"> ' + story.getTitle() + '</a></td></tr>';
	} else {
		return '<tr><td>' + story.getId() + '</td><td>' + story.getDate() + '</td><td>' + story.getTitle() + '</td></tr>';
	}
};
