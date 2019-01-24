const PropertiesReader = require('properties-reader');
const PROPERTIES = PropertiesReader('./keys/config.ini');
const https = require('https');

function getPushBulletDevice() {
    return PROPERTIES.get("pushbullet.device");
};

function getPushBulletToken() {
    return PROPERTIES.get("pushbullet.token");
};

function isPushEnable(){
  return PROPERTIES.get("pushbullet.push_enable");
};


function push(data) {
    if(isPushEnable() === false){
        console.error("Push Disabled.");
        return;
    }

    const pushRequest = https.request(options, (res) => {
        res.on('data', (d) => {
            process.stdout.write(d)
        });
    });

    pushRequest.on('error', (error) => {
        console.error(error)
    });

    pushRequest.write(data);
    pushRequest.end();
}

exports.sendTrackPush = function (trackModel) {
    let data = getPushBody(trackModel, 'Accessed');

    push(data);
};

exports.sendLikePush = function (trackModel) {
    let data = getPushBody(trackModel, 'Liked');

    push(data);
};

function getPushBody(trackModel, activity) {
    return JSON.stringify({
        "body": "A story number " + trackModel.storyId + " : " + trackModel.storyTitle + " is " + activity + ". \n"
            + "IP: "        + trackModel.ip + "\n"
            + "Time: "      + trackModel.accessTime + "\n"
            + "Netname: "   + trackModel.netName + " (" + trackModel.netDesc + ") \n"
            + "Address: "   + trackModel.address + "\n"
            + "Country: "   + trackModel.country + "\n"
            + "cloud: "     +trackModel.cloud,
        "title": 'Story ' + trackModel.storyId + ' ' + activity,
        "type": 'link',
        "device": getPushBulletDevice()
    });
};


var options = {
    hostname: 'api.pushbullet.com',
    port: 443,
    path: '/v2/pushes',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Access-Token': getPushBulletToken()
    }
};
