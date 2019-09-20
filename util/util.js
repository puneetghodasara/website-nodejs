const constants = require('./../constants');
const ipaddress = require('ip-address');
const net = require('net');
const fs = require('fs');
const os = require('os');

/* Common Headers and Footers */
exports.getWebsiteHeader = function () {
    return constants.TAG_START_HTML
        + constants.TAG_START_HEAD
        + fs.readFileSync('./asset/head.html').toString()
        + constants.TAG_TITLE
        + constants.TAG_START_BODY
        + fs.readFileSync('./asset/title.html').toString()
        + fs.readFileSync('./asset/navbar.html').toString()
        + constants.HTML_SPACE_NON_MOBILE
        + constants.HTML_SPACE_NON_MOBILE
        + constants.HTML_SPACE_NON_MOBILE;
};

exports.getWebsiteHeaderForSelection = function () {
    return constants.TAG_START_HTML
        + constants.TAG_START_HEAD
        + fs.readFileSync('./asset/head.html').toString()
        + constants.TAG_TITLE
        + constants.TAG_START_BODY
        + fs.readFileSync('./asset/title.html').toString()
        + fs.readFileSync('./asset/navbar-home-only.html').toString()
        + constants.HTML_SPACE + constants.HTML_SPACE + constants.HTML_SPACE;
};

exports.getStoryFeedback = function (storyId) {
  return fs.readFileSync('./asset/story-feedback.html').toString()
      .replace("LIKE_ADDRESS", "/like?id=" + storyId);
};

exports.getWebsiteFooter = function (withStoryFooter) {
    let hr = fs.readFileSync('./asset/hr.html').toString();
    var content = hr;
    if (withStoryFooter) {
        content += fs.readFileSync('./asset/storyfooter.html').toString() + hr;
    }
    content += fs.readFileSync('./asset/footer.html').toString() + fs.readFileSync('./asset/copyright.html').toString() + constants.TAG_END_BODY;
    return content;
};


/* Common HTML Content */
exports.getBreadCrumb = function(cloud, extraCrumb, withAlert){
    var breadcrumb = "<div class='row'>";


    breadcrumb += fs.readFileSync('./asset/breadcrumb-cloud.html').toString()
        .replace("ACTIVE", cloud);
    if(!extraCrumb){
        breadcrumb = breadcrumb.replace("PARAM_1","<li class='active'>Homepage</li>");
    } else {
        breadcrumb = breadcrumb.replace("PARAM_1", extraCrumb);
    }

    if(!withAlert){
        breadcrumb += constants.HTML_SPACE_NON_MOBILE;
    } else {
        breadcrumb += fs.readFileSync('./asset/hosting-alert.html').toString();
        breadcrumb += getModalContent(cloud);
    }

    breadcrumb += "</div>";

    return breadcrumb;
};

function getModalContent(cloud){
    var modalContent = "This page was served by <b>" + cloud + "</b> with container hostname <b>" + os.hostname()
        + " </b> and Host IP " + getPrimaryBoundIP() + "</b> with revision " + getRevision() + "<br><br> "
        + "<small>To check full information visit <a href='/info'>About Website</a> page.</small>";

    return fs.readFileSync('./asset/hosting-detail.html').toString()
        .replace("CLOUD", cloud)
        .replace("MODAL_CONTENT", modalContent);
};

exports.getQuote = function(){
    return fs.readFileSync('./asset/quote.html').toString();
};


exports.getStoryLine = function (story) {
    if (story.isActive() === true) {
        return '<tr><td>' + story.getId() + '</td><td>' + story.getDate() + '</td><td><a href="story/' + story.getId() + '?ref=index"> ' + story.getTitle() + '</a></td></tr>';
    } else {
        return '<tr><td>' + story.getId() + '</td><td>' + story.getDate() + '</td><td>' + story.getTitle() + '</td></tr>';
    }
};

/* Request Utilities */
exports.getCloudProvider = function(req){
    var host = req.get('host');
    if(host.includes('aws')){
        return "AWS";
    } else if(host.includes('gcp')){
        return "GCP";
    } else if (host.includes('azure')){
        return "Azure";
    } else if (host.includes('www')){
        // Default is mapped to GCP
        return "AWS";
    } else {
        return "Undefined";
    }
};

exports.getIp = function(req) {
    var ip = req.ip;
    console.log("Original IP: " + req.ip);

    if(net.isIPv6(ip)) {
        let ipv6 = new ipaddress.Address6(ip);
        let ipv4 = ipv6.to4().address;
        console.log("IPv4 conversion: " + ipv4);
        return ipv4;
    }
    return ip;
    // return (req.headers['x-forwarded-for'] || '').split(',').pop() ||
    //     req.connection.remoteAddress ||
    //     req.socket.remoteAddress ||
    //     req.connection.socket.remoteAddress;
};

function getPrimaryBoundIP(){
    // FIXME: Assuming that it will be bound to eth0 always.
    let networkInterface = os.networkInterfaces()["eth0"];
    if(!networkInterface){
        return "No eth0 Interface";
    }
    return networkInterface.find(address => address.family === "IPv4").address;
};

function getRevision(){
    return fs.readFileSync('./public/revision.info').toString();
};
