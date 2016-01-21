'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
      $("#testjs").text("Please wait...");
      $(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
   $("a.thumbnail").click(projectClick);
   $("#submitBtn").click(function(e) {
      var containingProject = $(".form-control").val();
      var widthVal = $(".form-control#width").val();
      var newDes = $(".form-control#description").val();
      var description = $(containingProject).find(".project-description");

      $(containingProject).animate({
         width: widthVal  
      });

      if (description.length > 0) { 
         description.text(newDes);   
      }
      
   });
   $(".project").find(".img").hide();
}

function projectClick(e) {
   // prevent the page from reloading
   e.preventDefault();

   // In an event listener, $(this) is the element that fired the event
   var projectTitle = $(this).find("p").text();
   var jumbotronHeader = $(".jumbotron h1");
   jumbotronHeader.text(projectTitle);

   var containingProject = $(this).closest(".project");
   var description = $(containingProject).find(".project-description");

   if (description.length == 0)
   {
      $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
      //$(containingProject).find(".project-description").hide();
   }
   //else
   //{
      $(description).fadeToggle();
      $(this).find(".img").fadeToggle();
      //description.html("<p>Stop clicking on me!  You just did it at " + (new Date()) + "</p>");
   //}
}
