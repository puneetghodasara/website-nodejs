const publicIp = require('dns');

exports.getStoryLine = function (story) {
	if(story.isActive() == true){
		return '<tr><td>' + story.getId() + '</td><td>' + story.getDate() + '</td><td><a href="story/' + story.getId() + '?ref=index"> ' + story.getTitle() + '</a></td></tr>';
	} else {
		return '<tr><td>' + story.getId() + '</td><td>' + story.getDate() + '</td><td>' + story.getTitle() + '</td></tr>';

	}

};
exports.getStoryFile = function(storyId){
	return "./story/" + storyId + ".txt";

};

exports.getPublicIp = function (){
	return dns.resolve("nodejs.puneetghodasara.me", (err, addresses)=>{
		console.log(addresses);
		return addresses;
	})
};
