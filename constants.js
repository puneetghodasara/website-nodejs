const fs = require('fs');
module.exports = Object.freeze({

	DB_STORY_FILE : "./story/story.csv",
	DB_PREFIX: "./story/",

	TAG_START_HTML: "<html lang='en'>",

	TAG_START_HEAD: "<head>",

	HTML_HEAD: fs.readFileSync('./asset/head.html').toString(),

	TAG_TITLE: "<title>Puneet Ghodasara - Website</title>",

	TAG_END_HEAD: "</head>",

	TAG_START_BODY: "<body><div class='container'>",

	HTML_TITLE: fs.readFileSync('./asset/title.html').toString(),

	HTML_NAVBAR: fs.readFileSync('./asset/navbar.html').toString(),

	HTML_NAVBAR_HOME_ONLY: fs.readFileSync('./asset/navbar-home-only.html').toString(),

    HTML_BREADCRUMB_CLOUD: fs.readFileSync('./asset/breadcrumb-cloud.html').toString(),

	HTML_SPACE_NON_MOBILE: `<div class="space-5 clearix hidden-xs hidden-sm"></div>`,

    HTML_SPACE: `<div class="space-5 clearix"></div>`,

	HTML_QUOTE: fs.readFileSync('./asset/quote.html').toString(),

	HTML_HR: fs.readFileSync('./asset/hr.html').toString(),

	HTML_STORY_FOOTER: fs.readFileSync('./asset/storyfooter.html').toString(),

	HTML_FOOTER: fs.readFileSync('./asset/footer.html').toString(),

	HTML_COPYRIGHT: fs.readFileSync('./asset/copyright.html').toString(),

	TAG_END_BODY: "</div></body></html>",
		
	HTML_READ_MORE: '<div class="row"><div class="col-xs-12 col-sd-12 col-md-12 prev-next"><a href="/story"> Read more stories </a></div></div>',

	STARTED_AT: new Date()
});