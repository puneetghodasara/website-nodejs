const fs = require('fs');
module.exports = Object.freeze({
	MY_ANT: 'some value',
	ANOTHER_ANT: 'another value',
	
	TAG_START_HTML: "<html lang='en'>",
	TAG_START_HEAD: "<head>",

	HTML_HEAD: fs.readFileSync('./snip/head.html').toString(),

	TAG_TITLE: "<title>Puneet Ghodasara - Story Index Page</title>",
	TAG_END_HEAD: "</head>",

	TAG_START_BODY: "<body><div class='container'>",

	HTML_TITLE: fs.readFileSync('./snip/title.html').toString(),

	HTML_NAVBAR: fs.readFileSync('./snip/navbar.html').toString(),

	HTML_SPACE: fs.readFileSync('./snip/space.html').toString(),

	HTML_QUOTE: fs.readFileSync('./snip/quote.html').toString(),

	HTML_HR: fs.readFileSync('./snip/hr.html').toString(),

	HTML_STORY_FOOTER: fs.readFileSync('./snip/storyfooter.html').toString(),

	HTML_FOOTER: fs.readFileSync('./snip/footer.html').toString(),

	HTML_COPYRIGHT: fs.readFileSync('./snip/copyright.html').toString(),

	TAG_END_BODY: "</div></body></html>",
		
	HTML_READ_MORE: '<div class="row"><div class="col-xs-12 col-sd-12 col-md-12 prev-next"><a href="/story"> Read more stories </a>						</div>					</div>'
});

