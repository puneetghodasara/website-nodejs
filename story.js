const fs = require('fs');
const lineReader = require('readline')
const constants = require('./constants');
const util = require('./util');
const db = require('./db/db.js');

exports.story = (req, res) => {
	var storyId = req.params.storyId;


	var story = db.stories.find(function(record){
		return Number(record.getId()) == Number(storyId);
	});

	var content = constants.TAG_START_HTML + constants.TAG_START_HEAD + constants.HTML_HEAD + constants.TAG_TITLE + constants.TAG_START_BODY
				+ constants.HTML_TITLE + constants.HTML_NAVBAR + constants.HTML_SPACE + constants.HTML_SPACE + constants.HTML_SPACE + constants.HTML_SPACE
				+ constants.HTML_QUOTE;

	var fileName = util.getStoryFile(storyId);

	if(story && fs.existsSync(fileName)){
		const htmlStoryLabel = `<div class="row">
									<div class="col-xs-12 col-md-offset-1 col-md-9 story-pan">
										<div class="row story-title">
											<div class="col-md-8 col-md-offset-1 col-xs-12 col-sd-12 story-title-text text-info">
												<i class="fa fa-bookmark"></i> &nbsp; `
												+ story.getTitle() + 
											`</div>
											<div class="col-xs-12 col-md-3 pull-right">
												<ul class="fa-ul">
													<li><i class="fa fa-li fa-calendar"></i> &nbsp; ` + story.getDate() + `</li>
													<li><i class="fa fa-li fa-map-marker"></i> &nbsp; ` + story.getPlace() + `</li>
												</ul>
											</div>
										</div>
								`;

		// Story goes here

		content += htmlStoryLabel;

		// Table Start
		var tableStart = `<div class="row">
							<div class="col-md-12">
								<hr width="90%"/>`;

		content = content + tableStart + "<story>";
		fs.readFileSync(fileName, 'utf-8')
			.split(/\r?\n/)
			.forEach(function(line){
				var trimmedLine = line.trim();
				if(!trimmedLine){
					content += "</br>";
				} else {
					content += "<p>" + trimmedLine + "</p>";
				}
			});
				
		
		var ending = `</div>
					</div>
				</div>
			</div>`;
		
		content = content + "</story>" + constants.HTML_READ_MORE + ending;
	}
		
	content += constants.HTML_HR + constants.HTML_STORY_FOOTER + constants.HTML_HR + constants.HTML_FOOTER + constants.HTML_COPYRIGHT + constants.TAG_END_BODY;
	
	res.send(content);
};
