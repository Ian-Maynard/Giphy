$(document).ready(function() {

// Define Variables 

var catArr = ["Aircraft","Sailing Ships","Rockets","Cellphones","Robots","Electrical lines",
				"Sattelites","Power Plants","Spacecraft"];

function buttonBuilder(){
	$("#bFrame").empty();                           // Clear the display area first
	for(var i=0; i<=catArr.length-1; i++){
		var catBtn = $("<button>");                	// Create the button                                  
         catBtn.text(catArr[i]);         			// Assign the text of the question to the button 
         catBtn.addClass("catArr");               	// Assign a single class to all buttons                   
        $("#bFrame").append(catBtn);               	// Insert the button in the div.     
    }   // End for loop                                                         // End Button creation and stylization loop  
} // End buttonBuilder 

function gifGetter(){


} // Query giffy given a particular category 


buttonBuilder();



// Listen for input 
// if it's from the buttons
// 		construct a query 
// 		submit it to giffy 
// 		display 10 gifs in the output area

// If it's from the form 
// 		construct andbutton
// 		add it to the button area
// loop Back

}); // End function wrapper