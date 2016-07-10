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
       
        // adding onEdit TaskName 
	function onEditTaskName($span) {
		$span.hide()
		     .siblings("input.task-name")
		     .val($span.text())
   		     .show()
		     .focus();
	} // end of onEdit

	// adding onChangeTaskName
	function onChangeTaskName($input) {
		$input.hide();
		var $span = $input.siblings("span.task-name");
		if($input.val()) {
		  $span.text($input.val());
		}
		$span.show();

	} // end of onChange

	// adding Task Element
	function addTaskElement(taskName) {

		var $task = $("#task-template .task").clone();
		$("span.task-name", $task).text(taskName);
                                                             
		$("#task-list").append($task);
	        $("button.delete", $task).click(function() {
			$task.remove();
		});
		$("button.move-up", $task).click(function() {
			$task.insertBefore($task.prev());
		});
		$("button.move-down", $task).click(function() {
			$task.insertAfter($task.next());
		});
	
		$("span.task-name", $task).click(function() {
			onEditTaskName($(this));
		});
                 
		$("input.task-name", $task).change(function() {
			onChangeTaskName($(this));
		})
		.blur(function() {
			$(this).hide().siblings("span.task-name").show();
		});

	} // end of task element

	this.start = function() {

		$("#new-task-name").keypress(function(e) {
			if(e.which == 13){ // enter key is pressed
				addTask();
				return false;
			} // end if 
                                         
		}).focus();

		$("#app>header").append(" ready..." );

		setStatus(version);
	}; 

} // end of Tasks 

$(function() {
	window.app = new Tasks();
	window.app.start();
});
