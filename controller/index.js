const util = require('./../util/util');
const fs = require('fs');

exports.index = (req, res) => {
    var cloud = util.getCloudProvider(req);
    var content = util.getWebsiteHeader();
    content += util.getBreadCrumb(cloud, undefined, true);
    content += fs.readFileSync('./asset/home-section.html').toString();
    content += util.getWebsiteFooter(false);
    res.send(content);
};
