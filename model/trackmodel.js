function Trackmodel(id, title, ip, name, desc, address, country){
	this.storyId = id;
	this.storyTitle = title;
	this.ip = ip;
	this.netName = name;
	this.netDesc = desc;
	this.country = country;
	this.address = address;
	this.accessTime = new Date().toUTCString();
}

module.exports = Trackmodel;