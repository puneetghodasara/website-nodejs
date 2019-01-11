const constants = require('../constants');

exports.test = (req, res) => {
    res.send(constants.STARTED_AT);
};
