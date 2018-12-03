// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
 var userChoice ="";
 var computerChoice ="";



$("button").click(function() {
    $("#result").empty();
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
        { ("#result").html("Computer Wins!");
      }
       
        
     if(userChoice == "rock" && computerChoice == "scissors" || 
    userChoice =="paper" && computerChoice == "rock" ||
        userChoice == "scissors" && computerChoice == "paper")
      {  ("#result").html("You Win!");
      }
});


// DOCUMENT READY FUNCTION BELOW

