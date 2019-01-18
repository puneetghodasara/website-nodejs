const constants = require('../constants');
const util = require('./../util/util');
const fs = require('fs');
const prettyMs = require('pretty-ms');
const os = require("os");
const bytes = require('bytes');

function getInterfaceRows(tableContent) {
    var ifaces = os.networkInterfaces();
    let flag = false;
    Object.keys(ifaces).forEach(iface => {
        let addresses = ifaces[iface]
            .filter(ifaddr => !ifaddr.internal)
            .map(ifaddr =>
                // "<small>(" + ifaddr.family + ")</small> " +
                ifaddr.address)
            .join("</td><td>");
        if (addresses) {
            if (!flag) {
                tableContent += "<tr><td><b>Interfaces</b></td><td>" + iface + "</td><td>" + addresses + "</td></tr>";
                flag = true;
            } else {
                tableContent += "<tr><td></td><td>" + iface + "</td><td>" + addresses + "</td></tr>";
            }
        }
    });
    return tableContent;
}

function getOSRows(tableContent) {
    tableContent += "<tr><td><b>Hostname</b></td><td colspan='4'>" + os.hostname() + "</td></tr>";
    tableContent += "<tr><td><b>OS</b></td><td>Type</td><td colspan='4'> " + os.type() + "</td></tr>";
    // tableContent += "<tr><td></td><td>Uptime</td><td colspan='4'> " + prettyMs(os.uptime() * 1000,) + "</td></tr>";
    tableContent += "<tr><td></td><td>CPUs</td><td colspan='4'> " + os.cpus().length + "</td></tr>";
    tableContent += "<tr><td></td><td>Memory</td><td colspan='4'> " + bytes(os.totalmem()) + "</td></tr>";
    tableContent += "<tr><td><b>Website Started at</b></td></td><td colspan='4'>" + constants.STARTED_AT + "</td></tr>";
    return tableContent;
}

exports.info = (req, res) => {

    var cloud = util.getCloudProvider(req);

    var content = util.getWebsiteHeader();
    var extraBreadCrumb = "<li>About Website</li><li class='active'>Hosting information of " + cloud + "</li>";
    content += util.getBreadCrumb(cloud, extraBreadCrumb);

    content += util.getHostingAlert();
    content += util.getModalContent(cloud);

    var tableContent = "";
    tableContent = getInterfaceRows(tableContent);

    tableContent = getOSRows(tableContent);
    content += fs.readFileSync('./asset/code-blueprint.html').toString()
    content += fs.readFileSync('./asset/info-section.html').toString()
        .replace("CLOUD", cloud)
        .replace("TABLE_CONTENT", tableContent);
    content += util.getWebsiteFooter(false);

    res.send(content);
};
