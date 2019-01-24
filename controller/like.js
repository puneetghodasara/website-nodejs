const util = require('./../util/util');
const tracker = require('../util/tracker');

exports.thumbsUp = (req, res) => {

    var storyId = req.query.id;

    let cloud = util.getCloudProvider(req);
    let ip = util.getIp(req);
    tracker.like(storyId, ip, cloud);
    res.sendStatus(201);
};
