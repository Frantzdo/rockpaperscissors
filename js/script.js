// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
 var userChoice ="";
 var computerChoice ="";
 var CWins ="Computer Wins!";



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
    $("#computerChoice").text(computerChoice);  
    
    if(userChoice == "rock" && computerChoice == "paper" || 
    userChoice =="scissors" && computerChoice == "rock" ||
        userChoice == "paper" && computerChoice == "scissors")
        console.log("false");
        
        
     else if(userChoice == "rock" && computerChoice == "paper" || 
    userChoice =="scissors" && computerChoice == "rock" ||
        userChoice == "scissors" && computerChoice == "paper")
        console.log("correct");    
});


// DOCUMENT READY FUNCTION BELOW

