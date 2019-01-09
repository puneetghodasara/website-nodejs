$(document).ready(function(){

	/*var hostUrl = "http://puneetghodasara.me/log/";*/
	var hostUrl = "/log/";
	var logUrl  = "social_logger_v1.php?pageid=default";
	// var dblogUrl  = "social_db_logger_v1.php?pageid=default";
	var pushurl = "push_logger_v1.php?pageid=default"

	var refParam = "&ref=" + encodeURIComponent(document.referrer);

	var userFreshness = false;

	// User Key - User Count
	var cookval = localStorage.getItem("userKey");
	if(cookval == null){
		var userKey = Math.random();
		userKey = userKey.toString().replace(".","");
		localStorage.setItem("userKey", userKey);
		localStorage.setItem("userCount", 0);
		userFreshness = true;
	}

	var userKey = localStorage.getItem("userKey");
	var userCount = localStorage.getItem("userCount");
	var newUserCount = Number(userCount)+1;
	localStorage.setItem("userCount", newUserCount);

	var userKeyParam = "&userKey=" + encodeURIComponent(userKey);
	var pageCountParam = "&pageCount=" + encodeURIComponent(newUserCount);
	var userFreshParam = "&isNew=" + encodeURIComponent(userFreshness);

	// Total URL
	var totalUrl = hostUrl + logUrl + refParam + userKeyParam + pageCountParam + userFreshParam;
	//var totaldbUrl = hostUrl + dblogUrl + refParam + userKeyParam + pageCountParam + userFreshParam;
	var totalpushUrl =  hostUrl + pushurl + refParam + userKeyParam + pageCountParam + userFreshParam;  	
	
	
	$.get(totalUrl,
		function(data, status){
	    }
    	);

	// $.get(totaldbUrl,
	// 	function(story, status){
     //      }
    	// );

	$.get(totalpushUrl,
		function(data, status){
          }
    	);
    	


});