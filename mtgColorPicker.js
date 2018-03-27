var cardColors = ["red", "blue", "green", "black", "white"];
var currentColor = "red";

//ask the user how many colors they want in their deck
function promptMe(){
var yourDeck = prompt("How many colors do you want to run?");

//Check to see if the user input a number
if (isNaN(yourDeck))
  alert("That is not a number. Try again.");

function pickColors(yourDeck){
  for(colorNumber = 0; colorNumber < yourDeck; colorNumber++){
      var availableColors = cardColors.length;
      
      //Check that the color options are getting reduced
      //console.log("Avaliable Colors: " + availableColors);
      
      currentColor = cardColors[Math.floor(Math.random()*availableColors)];
      
     // console.log("Current Color: " + currentColor);
     
     //Removes the already selected colors so there are no duplicates
      var remove = cardColors.indexOf(currentColor);
      
      if (remove > -1) {
          console.log(cardColors[remove]);
       cardColors.splice(remove, 1);
      availableColors--;
      }
  }
}

//logs results to the console
//console.log(pickColors(yourDeck));

return pickColors(yourDeck);
  
}