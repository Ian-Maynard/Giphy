$(document).ready(function() {

// Define Variables 

var toPics = ["Aircraft","Sailing Ships","Rockets","Cellphones","Robots","Electrical lines",
				"Sattelites","Power Plants","Spacecraft"];

function buttonBuilder(){
	$("#bFrame").empty();                           // Clear the display area first
    	for(var i=0; i<toPics.length; i++) {
    		var catBtn = $("<button>");                	// Create the button                                  
            catBtn.addClass("catClass");
            catBtn.attr("data-name",toPics[i]);
            catBtn.text(toPics[i]);         			// Assign the text of the question to the button 
                  // Assign a single class to all buttons                   
            $("#bFrame").append(catBtn);        // Insert the button in the div.     
    }   // End for loop                                                         // End Button creation and stylization loop  
} // End buttonBuilder 

// function catGetter(){
	
// } // Query giffy given a particular category 





buttonBuilder();





      $("#addCateGory").on("click", function(event) {
        event.preventDefault(); // Hold execution 
        var newCat = $("#cateGory").val().trim(); // format input
        toPics.push(newCat); // add to array
        document.forms['catForm'].reset(); // Reset the field after entry
		    buttonBuilder(); // call button display to add new category to list
      }); // If the input event added a button 


      $(".catClass").on("click", function(event) {
        event.preventDefault(); // Hold execution 

        

        var gifQ = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q="+gifQ+"&limit=10&api_key=dc6zaTOxFJmzC";
               
          $.ajax({
              url: queryURL,
              method: 'GET'
            }).done(function(response) {
                  $("#gFrame").empty();
                  var outPut = response.data;
                      for (i=0; i < outPut.length; i++) {
                        var gImage = $("<img>");
                        var graTing = outPut[i].graTing;  // Loop variables
                        gImage.attr("data-state", "still");
                        gImage.attr("data-still", outPut[i].images.fixed_height_still.url);
                        gImage.attr("data-animate", outPut[i].images.fixed_height.url);
                        gImage.attr("src", outPut[i].images.fixed_height_still.url);
                        $("#gFrame").append(gImage)
                        $("#gFrame").append("<p>graTing: " + graTing + "</p>");
                  } // End For Loop 
            }); // Ajax function 



      }); // If the input event added a button 


}); // End function wrapper