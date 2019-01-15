const constants = require('../constants');
var os = require("os");


exports.test = (req, res) => {

    var content = "";

    var hostname = os.hostname();

    var ifaces = os.networkInterfaces();

    Object.keys(ifaces).forEach(function (ifname) {
        var alias = 0;

        ifaces[ifname].forEach(function (iface) {
            if ('IPv4' !== iface.family || iface.internal !== false) {
                // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
                return;
            }

            if (alias >= 1) {
                // this single interface has multiple ipv4 addresses
                console.log(ifname + ':' + alias, iface.address);
            } else {
                // this interface has only one ipv4 adress
                console.log(ifname, iface.address);
                content += "Interface Name and IP :" + ifname + "&nbsp;" + iface.address +"</br>";
            }
            ++alias;
        });
    });


    content += "Hostname : " + hostname + "</br>";
    content += "Website Started at:" + constants.STARTED_AT + "</br>"
    res.send(content);
};
