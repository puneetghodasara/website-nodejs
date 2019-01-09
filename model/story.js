
function Story(record){
	this.sId = record[0];
	this.sTitle = record[1];
	this.sDate = record[2];
	this.sPlace = record[3];
	this.sIsActive = record[4];
	this.sIsOpen = record[5];
	this.sPrev = record[6];
	this.sNext = record[7];
}

Story.prototype.isOpen = function(){
	return Number(this.sIsOpen) > 0;
};

Story.prototype.isActive = function(){
	return Number(this.sIsActive) > 0;
};

Story.prototype.hasNext = function(){
	return Number(this.sNext) > 0;
};

Story.prototype.hasPrevious = function(){
	return Number(this.sPrev) > 0;
};

Story.prototype.getTitle = function(){
	return this.sTitle;
};

Story.prototype.getId = function(){
	return this.sId;
};

Story.prototype.getDate = function(){
	return this.sDate;
};

Story.prototype.getPlace = function(){
	return this.sPlace;
};

Story.prototype.toString = function(){
	return this.getId() + " " + this.getTitle() + " " + this.isActive() + " " + this.sIsActive;
};

module.exports = Story;