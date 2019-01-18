const fs = require('fs');
module.exports = Object.freeze({

	DB_STORY_FILE : "./story/story.csv",
	DB_PREFIX: "./story/",

	TAG_START_HTML: "<html lang='en'>",

	TAG_START_HEAD: "<head>",

	TAG_TITLE: "<title>Puneet Ghodasara - Website</title>",

	TAG_END_HEAD: "</head>",

	TAG_START_BODY: "<body><div class='container'>",

	HTML_SPACE_NON_MOBILE: `<div class="space-5 clearix hidden-xs hidden-sm"></div>`,

    HTML_SPACE: `<div class="space-5 clearix"></div>`,

	TAG_END_BODY: "</div></body></html>",
		
	HTML_READ_MORE: '<div class="row"><div class="col-xs-12 col-sd-12 col-md-12 prev-next"><a href="/story"> Read more stories </a></div></div>',

	STARTED_AT: new Date()
});