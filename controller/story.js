const fs = require('fs');
const constants = require('../constants');
const util = require('../util/util');
const db = require('../db/db.js');
const Story = require('../model/storymodel');
const tracker = require('../util/tracker');

exports.story = (req, res) => {
	var storyId = req.params.storyId;
	var cloud = util.getCloudProvider(req);

	var story = db.stories.find(function(record){
		return Number(record.getId()) === Number(storyId);
	});

    var ip = util.getIp(req);
    console.debug("Sending push for " + storyId +" by " + ip);
    tracker.track(storyId, ip, cloud);

	var content = util.getWebsiteHeader();
	var extraBreadCrumb = "<li>Stories</li><li class='active'>"+ story.getId() + ". " + story.getTitle() + "</li>";
	content += util.getQuote();
	content += util.getBreadCrumb(cloud, extraBreadCrumb, true);

	var fileName = Story.getRawFile(storyId);

	if(story && fs.existsSync(fileName) && story.isActive()){
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
		
	content += util.getWebsiteFooter(true);
	
	res.send(content);
};
