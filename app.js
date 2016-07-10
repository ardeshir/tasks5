"use strict";

function Tasks() {
	var version = "v0.1";
	
	function setStatus(message) {
		$("#app>footer").text(message);
	} // end of set Status
	
	// adding addTask

	function addTask() {
		var taskName = $("#new-task-name").val();

		if(taskName) {
			addTaskElement(taskName);
			// reset test filed
			$("#new-task-name").val("").focus();
		} // end of if


	} // end of addTask

	// adding Task Element

	function addTaskElement(taskName) {
		var $task = $("<li></li>");
		$task.text(taskName);
		$("#task-list").append($task);

	} // end of task element

	this.start = function() {

		$("#new-task-name").keypress(function(e) {
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
