const fs = require('fs');
const csv = require('csv-parse/lib/sync');
const constants = require('../constants');
const util = require('../util/util');
const db = require('../db/db.js');

exports.listStory = (req, res) => {
	var cloud = util.getCloudProvider(req);
	
	const htmlStoryBar = `<div class='row'> 
						<div class='col-xs-12 col-md-offset-1 col-md-9 story-pan'>`;
						
	const htmlStoryLabel = `<div class='row story-title'> 
								<div class='col-md-8 col-md-offset-1 col-xs-12 col-sd-12 story-title-text text-info'> 
									<i class='fa fa-bookmark'></i>&nbsp;Stories &nbsp;
								</div> 
							</div>`;
    // Story goes here
	var content = util.getWebsiteHeader();
	content += util.getQuote();
    content += util.getBreadCrumb(cloud, "<li class='active'>Stories</li>", true);

    content += htmlStoryBar + htmlStoryLabel + constants.HTML_SPACE + constants.HTML_SPACE_NON_MOBILE + constants.HTML_SPACE_NON_MOBILE;
	
	// Table Start
	var tableStart = `<div class='col-md-12'>
						<div class='table-responsive'>
							<table class='table story-table'>`;
	
	content += tableStart;
		
	db.stories.forEach(function(story){
		content += util.getStoryLine(story);
	});
		
	var tableEnd = `</table>
			</div>
		</div>`;
	
	var htmlStoryBarEnd = `</div>  
				</div>`;
	
	content = content + tableEnd + htmlStoryBarEnd;
	content += util.getWebsiteFooter(true);
	// constants.HTML_HR + constants.HTML_STORY_FOOTER + constants.HTML_HR + constants.HTML_FOOTER + constants.HTML_COPYRIGHT + constants.TAG_END_BODY;
	
	res.send(content);
};
