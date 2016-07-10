"use strict";

function Tasks() {
	var version = "v0.1";
	
	function setStatus(message) {
		$("#app>footer").text(message);
	} // end of set Status

	this.start = function() {
		$("#app>header").append(version);

		setStatus("ready...");
	}; 

} // end of Tasks 

$(function() {
	window.app = new Tasks();
	window.app.start();
});
