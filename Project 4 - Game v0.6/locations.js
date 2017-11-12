//Calls look()
	function init() {
            look();
    }
        

//Global variables
	var score = 0;
    var currentLoc = 0;

//Variables for score
    var visitLoc0 = 0;
    var visitLoc1 = 0;
    var visitLoc2 = 0;
    var visitLoc3 = 0;
    var visitLoc4 = 0;
    var visitLoc5 = 0;
    var visitLoc6 = 0;
    var visitLoc7 = 0;
    var visitLoc8 = 0;
    var visitLoc9 = 0;
    

// User Commands
	   function btnGo_click() {
        var userText = document.getElementById("userInput").value;
        var response = "";
            if (userText === "n" || userText === "N") {
                response = btnNorth_click();
            } else {
                if (userText === "s" || userText === "S") {
                    response = btnSouth_click();
                } else {
                    if (userText === "e" || userText === "E") {
                        response = btnEast_click();
                    } else {
                        if (userText === "w" || userText === "W") {
                            response = btnWest_click();
                        } else {
				            errorMsg();
                        }
                    }
                }
            }
       }

//Error Command Message Function
 function errorMsg() {
     var message = "I don't understand your command. Valid commands are N,S,E,W"
     updateDisplay(message);
     
 }
     
     
// Functions for locations
 function porch() {
     var message = "You are sitting comfortably on a rocking chair infront of a cabin when hear a strange sound";
     updateDisplay(message);
     if (visitLoc0 == 0) {
         score += 5;
         document.getElementById("points").value = score;
         visitLoc0 = 1;
     } else {
         document.getElementById("points").value = score;
     }
 }

 function frontCabin() {
     var message = "You're standing in front of the cabin. A dog runs towards you to greet you!";
     updateDisplay(message);
     if (visitLoc1 == 0) {
         score += 5;
         document.getElementById("points").value = score;
         visitLoc1 = 1;
     } else {
         document.getElementById("points").value = score;
     }
 }

 function forest() {
     var message = "You're standing in the middle of a forest. You hear the sounds of owls hooting";
     updateDisplay(message);
     if (visitLoc2 == 0) {
         score += 5;
         document.getElementById("points").value = score;
         visitLoc2 = 1;
     } else {
         document.getElementById("points").value = score;
     }
 }

 function pineTree() {
     var message = "You reach the end of the forest. You cannot go any further";
     updateDisplay(message);
     if (visitLoc3 == 0) {
         score += 5;
         document.getElementById("points").value = score;
         visitLoc3 = 1;
     } else {
         document.getElementById("points").value = score;
     }
 }

 function cave() {
     var message = "You are standing in front of a large cave. You try to see what's inside the cave but it is too dark";
     updateDisplay(message);
     if (visitLoc4 == 0) {
         score += 5;
         document.getElementById("points").value = score;
         visitLoc4 = 1;
     } else {
         document.getElementById("points").value = score;
     }
 }

function insideCave() {
     var message = "You are standing inside the cave. It's very dark and cold. You see cave paintings on the walls. You reach a dead end!";
     updateDisplay(message);
     if (visitLoc4 == 0) {
         score += 5;
         document.getElementById("points").value = score;
         visitLoc4 = 1;
     } else {
         document.getElementById("points").value = score;
     }
 }



 function insideCabin() {
     var message = "You are back inside the cabin. You find the dog sleeping on the floor";
     updateDisplay(message);
     if (visitLoc5 == 0) {
         score += 5;
         document.getElementById("points").value = score;
         visitLoc5 = 1;
     } else {
         document.getElementById("points").value = score;
     }
 }

 function road() {
     var message = "You are standing next to a country road, from here you can see a picture of a town";
     updateDisplay(message);
     if (visitLoc6 == 0) {
         score += 5;
         document.getElementById("points").value = score;
         visitLoc6 = 1;
     } else {
         document.getElementById("points").value = score;
     }
 }

 function cliff() {
     var message = "You are standing near a cliff. There is a lighthouse in the distance";
     updateDisplay(message);
     if (visitLoc7 == 0) {
         score += 5;
         document.getElementById("points").value = score;
         visitLoc7 = 1;
     } else {
         document.getElementById("points").value = score;
     }
 }

function lake() {
     var message = "You are standing near a lake. You hear screaming";
     updateDisplay(message);
     if (visitLoc8 == 0) {
         score += 5;
         document.getElementById("points").value = score;
         visitLoc8 = 1;
     } else {
         document.getElementById("points").value = score;
     }
}

function beach() {
     var message = "You are standing at the beach of the lake. You see children playing in the lake";
     updateDisplay(message);
     if (visitLoc9 == 0) {
         score += 5;
         document.getElementById("points").value = score;
         visitLoc9 = 1;
     } else {
         document.getElementById("points").value = score;
     }
}






function look() {
     var desc = "";
     switch (currentLoc) {
         case 0:
             porch();
             break;
         case 1:
             frontCabin();
             break;
         case 2:
             forest();
             break;
         case 3:
             pineTree();
             break;
         case 4:
             cave();
             break;
         case 5:
             insideCave();
             break;
         case 6:
             road();
             break;
         case 7:
             cliff();
             break;
         case 8:
             lake();
             break;
         case 9:
             beach();
             break;
             default: "You cannot go that way!";
     }
 }

//Button Handlers for Directions
 //North
 function btnNorth_click() {
     if (currentLoc === 0) {
         currentLoc = 1;
         look();
         document.getElementById("btnEast").disabled = false;
         document.getElementById("btnWest").disabled = false;
         document.getElementById("btnSouth").disabled = false;
         document.getElementById("btnNorth").disabled = false;

     } else {
         if (currentLoc === 1) {
             currentLoc = 2;
             look();
             document.getElementById("btnEast").disabled = true;
             document.getElementById("btnWest").disabled = true;
             document.getElementById("btnSouth").disabled = false;
             document.getElementById("btnNorth").disabled = false;
         } else {
             if (currentLoc === 2) {
                 currentLoc = 3;
                 look();
                 document.getElementById("btnEast").disabled = true;
                 document.getElementById("btnWest").disabled = true;
                 document.getElementById("btnSouth").disabled = false;
                 document.getElementById("btnNorth").disabled = true;
             }
         }
     }
     look();
 }

 //South
 function btnSouth_click() {
     if (currentLoc === 3) {
         currentLoc = 2;
         look();
         document.getElementById("btnEast").disabled = true;
         document.getElementById("btnWest").disabled = true;
         document.getElementById("btnSouth").disabled = false;
         document.getElementById("btnNorth").disabled = false;
     } else {
         if (currentLoc === 2) {
             currentLoc = 1;
             look();
             document.getElementById("btnEast").disabled = false;
             document.getElementById("btnWest").disabled = false;
             document.getElementById("btnSouth").disabled = false;
             document.getElementById("btnNorth").disabled = false;
         } else {
             if (currentLoc === 1) {
                 currentLoc = 0;
                 look();
                 document.getElementById("btnEast").disabled = true;
                 document.getElementById("btnWest").disabled = true;
                 document.getElementById("btnSouth").disabled = true;
                 document.getElementById("btnNorth").disabled = false;
             }
         }
     }
     look();
 }

 //East
 function btnEast_click() {
     // GOING EAST
     if (currentLoc === 1) {
         currentLoc = 8;
         look();
         document.getElementById("btnEast").disabled = false;
         document.getElementById("btnWest").disabled = false;
         document.getElementById("btnSouth").disabled = true;
         document.getElementById("btnNorth").disabled = true;
     } else {
         if (currentLoc === 8) {
             currentLoc = 9;
             look();
             document.getElementById("btnEast").disabled = false;
             document.getElementById("btnWest").disabled = false;
             document.getElementById("btnSouth").disabled = true;
             document.getElementById("btnNorth").disabled = true;
         } else {
             if (currentLoc === 9) {
                 currentLoc = 4;
                 look();
                 document.getElementById("btnEast").disabled = false;
                 document.getElementById("btnWest").disabled = false;
                 document.getElementById("btnSouth").disabled = true;
                 document.getElementById("btnNorth").disabled = true;
             } else {
                 if (currentLoc === 4) {
                     currentLoc = 5;
                     look();
                     document.getElementById("btnEast").disabled = true;
                     document.getElementById("btnWest").disabled = false;
                     document.getElementById("btnSouth").disabled = true;
                     document.getElementById("btnNorth").disabled = true;
                 
                 } 
                 }
             }
         }
        look();
     }
 //West
 function btnWest_click() {
     if (currentLoc === 5) {
         currentLoc = 4;
         look();
         document.getElementById("btnEast").disabled = false;
         document.getElementById("btnWest").disabled = false;
         document.getElementById("btnSouth").disabled = true;
         document.getElementById("btnNorth").disabled = true;
     } else {
         if (currentLoc === 4) {
             currentLoc = 9;
             look();
             document.getElementById("btnEast").disabled = false;
             document.getElementById("btnWest").disabled = false;
             document.getElementById("btnSouth").disabled = true;
             document.getElementById("btnNorth").disabled = true;
         } else {
             if (currentLoc === 9) {
                 currentLoc = 8;
                 look();
                 document.getElementById("btnEast").disabled = false;
                 document.getElementById("btnWest").disabled = false;
                 document.getElementById("btnSouth").disabled = true;
                 document.getElementById("btnNorth").disabled = true;
     } else {
             if (currentLoc === 8) {
                 currentLoc = 1;
                 look();
                 document.getElementById("btnEast").disabled = false;
                 document.getElementById("btnWest").disabled = false;
                 document.getElementById("btnSouth").disabled = false;
                 document.getElementById("btnNorth").disabled = false;
     } else {
         // GOING WEST FROM  CENTER
         if (currentLoc === 1) {
                 currentLoc = 6;
                 look();
                 document.getElementById("btnEast").disabled = false;
                 document.getElementById("btnWest").disabled = false;
                 document.getElementById("btnSouth").disabled = true;
                 document.getElementById("btnNorth").disabled = true;
     } else {
         if (currentLoc === 6) {
                 currentLoc = 7;
                 look();
                 document.getElementById("btnEast").disabled = false;
                 document.getElementById("btnWest").disabled = true;
                 document.getElementById("btnSouth").disabled = true;
                 document.getElementById("btnNorth").disabled = true;
             }
            }
          }
        }
     }
    look();
   }
 }


//Update Text Display
function updateDisplay(msg) {
     var target = document.getElementById("textarea");
     target.value = msg + "\n\n";
 }
     
        
	

    
	