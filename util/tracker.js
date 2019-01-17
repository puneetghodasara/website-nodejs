const db = require('../db/db');
const pushBullet = require('./pushbullet');
const whois = require('../util/whois');
const TrackModel = require('../model/trackmodel');

exports.track = function (storyId, ip, cloud) {
    // Find story Object
    var story = db.stories.find(function(record){
        return Number(record.getId()) === Number(storyId);
    });
    if(!story){
        console.error("No story found for ID : " + storyId);
        return;
    }

    // Tracker and populate with WHO-IS info
    let trackModel = new TrackModel({
        id: story.getId(),
        title: story.getTitle(),
        ip:ip,
        cloud: cloud
    });
    // let trackModel = new TrackModel(story.getId(), story.getTitle(), ip, undefined, undefined, undefined, undefined, cloud);
    whois.lookup(trackModel, (err, trackModel) => {
        if(err){
            console.error("Error populating WHO-IS info, sending push without WHO-IS");
        }
        pushBullet.sendPush(trackModel);
    });
};
