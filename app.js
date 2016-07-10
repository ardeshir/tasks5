"use strict";

function Tasks() {
	var version = "v0.1";
	
	function setStatus(message) {
		$("#app>footer").text(message);
	} // end of set Status

	this.start = function() {

		$(#new-task-name").keypress(function(e) {
			if(e.which == 13){ // endter key
				addTask();
				return false;
			} // end if 
                                         
		}).focus();

		$("#app>header").append(version);

		setStatus("ready...");
	}; 

} // end of Tasks 

$(function() {
	window.app = new Tasks();
	window.app.start();
});
