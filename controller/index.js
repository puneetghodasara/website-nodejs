const constants = require('../constants');
const fs = require('fs');

exports.selection = (req, res) => {
    var content = constants.TAG_START_HTML + constants.TAG_START_HEAD + constants.HTML_HEAD + constants.TAG_TITLE + constants.TAG_START_BODY
        + constants.HTML_TITLE + constants.HTML_NAVBAR + constants.HTML_SPACE + constants.HTML_SPACE + constants.HTML_SPACE ;
    var paas = fs.readFileSync('./asset/selection.html').toString();

    content +=paas;

    content += constants.HTML_HR + constants.HTML_FOOTER + constants.HTML_COPYRIGHT + constants.TAG_END_BODY;
    res.send(content);
};

exports.index = (req, res) => {
    var content = constants.TAG_START_HTML + constants.TAG_START_HEAD + constants.HTML_HEAD + constants.TAG_TITLE + constants.TAG_START_BODY
        + constants.HTML_TITLE + constants.HTML_NAVBAR + constants.HTML_SPACE + constants.HTML_SPACE + constants.HTML_SPACE ;
    var paas = fs.readFileSync('./asset/home-section.html').toString();

    content +=paas;

    content += constants.HTML_HR + constants.HTML_FOOTER + constants.HTML_COPYRIGHT + constants.TAG_END_BODY;
    res.send(content);
};
