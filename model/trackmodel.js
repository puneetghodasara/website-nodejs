function Trackmodel({id, title, ip, name, desc, address, country, cloud}){
	this.storyId = id;
	this.storyTitle = title;
	this.ip = ip;
	this.netName = name;
	this.netDesc = desc;
	this.country = country;
	this.address = address;
	this.accessTime = new Date().toUTCString();
	this.cloud = cloud;
}

module.exports = Trackmodel;