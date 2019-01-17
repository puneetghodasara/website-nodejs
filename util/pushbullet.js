const PropertiesReader = require('properties-reader');
const PROPERTIES = PropertiesReader('./keys/config.ini');
const https = require('https');

function getPushBulletDevice() {
    return PROPERTIES.get("pushbullet_device");
};

function getPushBulletToken() {
    return PROPERTIES.get("pushbullet_token");
};

function isPushEnable(){
  return PROPERTIES.get("push_enable");
};

exports.sendPush = function (trackModel) {
    if(isPushEnable() === false){
        console.error("Push Disabled.")
        return;
    }

    var data = getPushbulletBody(trackModel);

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


function getPushbulletBody(trackModel) {
    return JSON.stringify({
        "body": "A story number " + trackModel.storyId + " : " + trackModel.storyTitle + " is accessed. \n"
            + "IP: "        + trackModel.ip + "\n"
            + "Time: "      + trackModel.accessTime + "\n"
            + "Netname: "   + trackModel.netName + " (" + trackModel.netDesc + ") \n"
            + "Address: "   + trackModel.address + "\n"
            + "Country: "   + trackModel.country + "\n"
            + "cloud: "     +trackModel.cloud,
        "title": 'Story ' + trackModel.storyId + ' Accessed',
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
