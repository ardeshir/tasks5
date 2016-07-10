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
			// reset text field
			$("#new-task-name").val("").focus();
		} // end of if


	} // end of addTask

	// adding Task Element

	function addTaskElement(taskName) {
		var $task = $("<li></li>");
		var $delete = $("<button class='delete'>X</button>");
		var $moveUp = $("<button class='move-up'>^</button>");
		var $moveDown = $("<button class='move-down'>v</button>");
		$task.append($moveUp)
		     .append($moveDown)
                     .append("<span class='task-name'>" + taskName + "</span>")
		     .append($delete);

		$delete.click(function(){ $task.remove(); });

		/* $task.text(taskName); */
		$("#task-list").append($task);
		
		$moveUp.click(function() {
			$task.insertBefore($task.prev());
		});
		$moveDown.click(function() {
			$task.insertAfter($task.next());
		});
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
