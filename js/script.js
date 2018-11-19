// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
 var userChoice ="";
 var computerChoice ="";



$("button").click(function() {
    $("#userChoice").text($("#input").val());
 
    var randommnumber = Math.random();
    
    if (randommnumber < 0.33) {
        computerChoice = "rock";
    }
            else if (randommnumber < 0.66) {
                computerChoice = "paper";
            }
            else {
                computerChoice = "scissors";
            }
    $("#computerChoice").text(computerChoice)        
});


// DOCUMENT READY FUNCTION BELOW

