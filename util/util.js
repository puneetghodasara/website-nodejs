const constants = require('./../constants');

exports.getStoryLine = function (story) {
    if (story.isActive() === true) {
        return '<tr><td>' + story.getId() + '</td><td>' + story.getDate() + '</td><td><a href="story/' + story.getId() + '?ref=index"> ' + story.getTitle() + '</a></td></tr>';
    } else {
        return '<tr><td>' + story.getId() + '</td><td>' + story.getDate() + '</td><td>' + story.getTitle() + '</td></tr>';
    }
};

exports.getWebsiteHeader = function () {
    return constants.TAG_START_HTML + constants.TAG_START_HEAD + constants.HTML_HEAD + constants.TAG_TITLE + constants.TAG_START_BODY
        + constants.HTML_TITLE + constants.HTML_NAVBAR + constants.HTML_SPACE_NON_MOBILE + constants.HTML_SPACE_NON_MOBILE + constants.HTML_SPACE_NON_MOBILE;
};

exports.getBreadCrumb = function(cloud, param1){
    var breadcrumb = constants.HTML_BREADCRUMB_CLOUD.replace("ACTIVE", cloud);
    if(!param1){
        breadcrumb = breadcrumb.replace("PARAM_1","<li class='active'>Homepage</li>");
    } else {
        breadcrumb = breadcrumb.replace("PARAM_1", param1);
    }
    breadcrumb += constants.HTML_SPACE_NON_MOBILE;
    return breadcrumb;
};


exports.getQuote = function(){
    return constants.HTML_QUOTE;
};

exports.getWebsiteFooter = function (withStoryFooter) {
    var content = constants.HTML_HR;
    if (withStoryFooter) {
        content += constants.HTML_STORY_FOOTER + constants.HTML_HR;
    }
    content += constants.HTML_FOOTER + constants.HTML_COPYRIGHT + constants.TAG_END_BODY;
    return content;
};

exports.getWebsiteHeaderForSelection = function () {
    return constants.TAG_START_HTML + constants.TAG_START_HEAD + constants.HTML_HEAD + constants.TAG_TITLE + constants.TAG_START_BODY
        + constants.HTML_TITLE + constants.HTML_NAVBAR_HOME_ONLY + constants.HTML_SPACE + constants.HTML_SPACE + constants.HTML_SPACE;
};

exports.getCloudProvider = function(req){
    var host = req.get('host');
    if(host.includes('aws')){
        return "AWS";
    } else if(host.includes('gcp')){
        return "GCP";
    } else if (host.includes('azure')){
        return "Azure";
    } else {
        return "Undefined";
    }
};

exports.getIp = function(req) {
    return (req.headers['x-forwarded-for'] || '').split(',').pop() ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
};
