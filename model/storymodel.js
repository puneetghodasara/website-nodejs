const constant = require('../constants');

function Storymodel(record){
	this.sId = record[0];
	this.sTitle = record[1];
	this.sDate = record[2];
	this.sPlace = record[3];
	this.sIsActive = record[4];
	this.sIsOpen = record[5];
	this.sPrev = record[6];
	this.sNext = record[7];
}

Storymodel.prototype.isOpen = function(){
	return Number(this.sIsOpen) > 0;
};

Storymodel.prototype.isActive = function(){
	return Number(this.sIsActive) > 0;
};

Storymodel.prototype.hasNext = function(){
	return Number(this.sNext) > 0;
};

Storymodel.prototype.hasPrevious = function(){
	return Number(this.sPrev) > 0;
};

Storymodel.prototype.getTitle = function(){
	return this.sTitle;
};

Storymodel.prototype.getId = function(){
	return this.sId;
};

Storymodel.prototype.getDate = function(){
	return this.sDate;
};

Storymodel.prototype.getPlace = function(){
	return this.sPlace;
};

Storymodel.prototype.toString = function(){
	return this.getId() + " " + this.getTitle() + " " + this.isActive() + " " + this.sIsActive;
};

Storymodel.getRawFile = function(storyId){
	return constant.DB_PREFIX + storyId + ".txt";
}

module.exports = Storymodel;