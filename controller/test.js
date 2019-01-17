const constants = require('../constants');
var os = require("os");
const prettyMs = require('pretty-ms');
const bytes = require('bytes');
const fs = require('fs');

exports.test = (req, res) => {

    var content = "<td>Information</td><td colspan='3'>Value</td>";

    var hostname = os.hostname();

    var ifaces = os.networkInterfaces();

    Object.keys(ifaces).forEach(iface => {
        let addresses = ifaces[iface]
            .filter(ifaddr => !ifaddr.internal)
            .map(ifaddr => "(" + ifaddr.family + ") " + ifaddr.address)
            .join("</td><td>");
        if (addresses) {
            content += "<tr><td>Interfaces</td><td>" + iface + "</td><td>" + addresses + "</td></tr>";
        }
    });

    content += "<tr><td>Hostname</td><td colspan='3'>" + hostname + "</td></tr>";

    content += "<tr><td>Website Started at</td><td colspan='3'>" + constants.STARTED_AT + "</td></tr>";
    content += "<tr><td>OS Uptime</td><td colspan='3'> " + prettyMs(os.uptime() * 1000,) + "</td></tr>";
    content += "<tr><td>OS Memory</td><td colspan='3'> " + bytes(os.totalmem()) + "</td></tr>";
    content += "<tr><td>OS CPUs</td><td colspan='3'> " + os.cpus().length + "</td></tr>";
    content += "<tr><td>OS Type</td><td colspan='3'> " + os.type() + "</td></tr>";
    content += "<tr><td>OS USer</td><td colspan='3'> " + os.userInfo().username + "</td></tr>";

    var response = fs.readFileSync('./asset/info-section.html').toString().replace("TABLE_CONTENT", content);


    res.send(response);
};
