const util = require('../util/util');
const fs = require('fs');

exports.selection = (req, res) => {
    var content = util.getWebsiteHeaderForSelection();
    content += fs.readFileSync('./asset/selection.html').toString();
    content += util.getWebsiteFooter(false);
    res.send(content);
};

