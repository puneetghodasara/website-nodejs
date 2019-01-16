const whois = require('whois');
const parser = require('parse-whois');
const TrackModel = require('./../model/trackmodel');

exports.lookup = function(trackModel, callback){
    whois.lookup(trackModel.ip, function (err, data) {
        if(err){
            console.error("Could not look up for " + trackModel.ip);
            callback(err, undefined);
        }
        let whoIsData = parser.parseWhoIsData(data);
        // console.debug(whoIsData);
        var netname = whoIsData.filter(record => record.attribute.toUpperCase() === "netname".toUpperCase()).map(record =>record.value).join(' ');
        var description = whoIsData.filter(record => record.attribute.toUpperCase() === "descr".toUpperCase()).map(record =>record.value).join(' ');
        var country = whoIsData.filter(record => record.attribute.toUpperCase() === "Country".toUpperCase()).map(record =>record.value).join(' ');
        var address = whoIsData.filter(record => record.attribute.toUpperCase() === "address".toUpperCase()).map(record =>record.value).join(' ');

        trackModel.netName = netname;
        trackModel.netDesc = description;
        trackModel.country = country;
        trackModel.address = address;
        // console.log(trackModel);
        callback(undefined, trackModel);
    });
};
