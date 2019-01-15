const constants = require('../constants');
var os = require("os");


exports.test = (req, res) => {
    var hostname = os.hostname();

    res.send(constants.STARTED_AT + hostname);
};
