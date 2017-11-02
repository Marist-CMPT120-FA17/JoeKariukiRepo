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
     var message = "You're next to a pine tree. You see a large paw print on the floor";
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
     var message = "You are standing at the beach of the lake. You hear screaming";
     updateDisplay(message);
     if (visitLoc9 == 0) {
         score += 5;
         document.getElementById("points").value = score;
         visitLoc9 = 1;
     } else {
         document.getElementById("points").value = score;
     }
}


 function dock() {
     var message = "You are standing at a dock near the lighthouse";
     updateDisplay(message);
     if (visitLoc10 == 0) {
         score += 5;
         document.getElementById("points").value = score;
         visitLoc10 = 1;
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
         case 10:
              dock();
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
         document.getElementById("btnEast").disabled = true;
         document.getElementById("btnWest").disabled = true;
         document.getElementById("btnSouth").disabled = false;
         document.getElementById("btnNorth").disabled = false;
     } else {
         if (currentLoc === 1) {
             currentLoc = 2;
             look();
             document.getElementById("btnEast").disabled = true;
             document.getElementById("btnWest").disabled = true;
             document.getElementById("btnSouth").disabled = false;
             document.getElementById("btnNorth").disabled = true;
         } else {
             if (currentLoc === 4) {
                 currentLoc = 0;
                 look();
                 document.getElementById("btnEast").disabled = false;
                 document.getElementById("btnWest").disabled = false;
                 document.getElementById("btnSouth").disabled = false;
                 document.getElementById("btnNorth").disabled = false;
             }
         }
     }
     look();
 }

 //South
 function btnSouth_click() {
     if (currentLoc === 2) {
         currentLoc = 1;
         look();
         document.getElementById("btnEast").disabled = true;
         document.getElementById("btnWest").disabled = true;
         document.getElementById("btnSouth").disabled = false;
         document.getElementById("btnNorth").disabled = false;
     } else {
         if (currentLoc === 1) {
             currentLoc = 0;
             look();
             document.getElementById("btnEast").disabled = false;
             document.getElementById("btnWest").disabled = false;
             document.getElementById("btnSouth").disabled = false;
             document.getElementById("btnNorth").disabled = false;
         } else {
             if (currentLoc === 0) {
                 currentLoc = 4;
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
     if (currentLoc === 0) {
         currentLoc = 10;
         look();
         document.getElementById("btnEast").disabled = false;
         document.getElementById("btnWest").disabled = false;
         document.getElementById("btnSouth").disabled = true;
         document.getElementById("btnNorth").disabled = true;
     } else {
         if (currentLoc === 10) {
             currentLoc = 3;
             look();
             document.getElementById("btnEast").disabled = false;
             document.getElementById("btnWest").disabled = false;
             document.getElementById("btnSouth").disabled = true;
             document.getElementById("btnNorth").disabled = true;
         } else {
             if (currentLoc === 9) {
                 currentLoc = 5;
                 look();
                 document.getElementById("btnEast").disabled = false;
                 document.getElementById("btnWest").disabled = false;
                 document.getElementById("btnSouth").disabled = true;
                 document.getElementById("btnNorth").disabled = true;
             } else {
                 if (currentLoc === 3) {
                     currentLoc = 7;
                     look();
                     document.getElementById("btnEast").disabled = false;
                     document.getElementById("btnWest").disabled = false;
                     document.getElementById("btnSouth").disabled = true;
                     document.getElementById("btnNorth").disabled = true;
                 } else {
                     if (currentLoc === 7) {
                         currentLoc = 8;
                         look();
                         document.getElementById("btnEast").disabled = true;
                         document.getElementById("btnWest").disabled = false;
                         document.getElementById("btnSouth").disabled = true;
                         document.getElementById("btnNorth").disabled = true;
                     } else {
                         if (currentLoc === 5) {
                             currentLoc = 0;
                             look();
                             document.getElementById("btnEast").disabled = false;
                             document.getElementById("btnWest").disabled = false;
                             document.getElementById("btnSouth").disabled = false;
                             document.getElementById("btnNorth").disabled = false;

                         }
                     }
                 }
             }
         }
     }
     look();
 }
 //West
 function btnWest_click() {
     if (currentLoc === 0) {
         currentLoc = 5;
         look();
         document.getElementById("btnEast").disabled = false;
         document.getElementById("btnWest").disabled = false;
         document.getElementById("btnSouth").disabled = true;
         document.getElementById("btnNorth").disabled = true;
     } else {
         if (currentLoc === 5) {
             currentLoc = 9;
             look();
             document.getElementById("btnEast").disabled = false;
             document.getElementById("btnWest").disabled = false;
             document.getElementById("btnSouth").disabled = true;
             document.getElementById("btnNorth").disabled = true;
         } else {
             if (currentLoc === 10) {
                 currentLoc = 0;
                 look();
                 document.getElementById("btnEast").disabled = false;
                 document.getElementById("btnWest").disabled = false;
                 document.getElementById("btnSouth").disabled = false;
                 document.getElementById("btnNorth").disabled = false;
             } else {
                 if (currentLoc === 9) {
                     currentLoc = 6;
                     look();
                     document.getElementById("btnEast").disabled = true;
                     document.getElementById("btnWest").disabled = true;
                     document.getElementById("btnSouth").disabled = true;
                     document.getElementById("btnNorth").disabled = true;
                 } else {
                     if (currentLoc === 3) {
                         currentLoc = 10;
                         look();
                         document.getElementById("btnEast").disabled = false;
                         document.getElementById("btnWest").disabled = false;
                         document.getElementById("btnSouth").disabled = false;
                         document.getElementById("btnNorth").disabled = false;
                     } else {
                         if (currentLoc === 7) {
                             currentLoc = 3;
                             look();
                             document.getElementById("btnEast").disabled = false;
                             document.getElementById("btnWest").disabled = false;
                             document.getElementById("btnSouth").disabled = true;
                             document.getElementById("btnNorth").disabled = true;
                         } else {
                             if (currentLoc === 8) {
                                 currentLoc = 7;
                                 look();
                                 document.getElementById("btnEast").disabled = false;
                                 document.getElementById("btnWest").disabled = false;
                                 document.getElementById("btnSouth").disabled = true;
                                 document.getElementById("btnNorth").disabled = true;
                             }
                         }
                     }
                 }
             }
         }
     }
     look();
 }

/*

//LOCATIONS
        //Forest

		function forest() {
			var message = "You're standing in the middle of a forest. You hear the sounds of owls hooting";
			updateDisplay(message);
			if (visitLoc0 == 0) {
				score +=5;
				document.getElementById("points").innerHTML = score;
				visitLoc0 = 1;
				} else {
                document.getElementById("points").value = score;
				}
		}

        
        
        //Inside Cabin
        
        //Lake
		function firstNorthBtn() {
			var message = "You're near a lake. You hear a person screaming ";
			updateDisplay(message);
			 if (visitLoc1 == 0) {
                    score += 5;
                    document.getElementById("points").innerHTML = score;
                    visitLoc1 = 1;
                } else {
                  document.getElementById("points").value = score;
				}
		}
        
 
        //Cliff
		function secondNorthBtn() {
			var message = "You are standing at a cliff. There's a lighthouse at the cliff";
			updateDisplay(message);
			 if (visitLoc5 == 0) {
                    score += 5;
                    document.getElementById("points").innerHTML = score;
                    visitLoc5 = 1;
                } else {
                   document.getElementById("points").value = score;
				}
		}
        
        //Road
		function southBtn() {
			var message = "You're standing next to a dirt road. You can see a town in the distance";
			updateDisplay(message);
			 if (visitLoc2 == 0) {
                    score += 5;
                    document.getElementById("points").innerHTML = score;
                    visitLoc2 = 1;
                } else {
					document.getElementById("points").value = score;
				}
		}
        
        //Pine tree
		function eastBtn() {
			var message = "You're next to a pine tree. You see a large paw print on the floor";
			updateDisplay(message);
			 if (visitLoc3 == 0) {
                    score += 5;
                    document.getElementById("points").innerHTML = score;
                    visitLoc3 = 1;
                } else {
					document.getElementById("points").value = score;
				}
		}
        
        //In front of Cave
		function westBtn()	{
			var message = "You are standing in front of a large cave. You try to see what's inside the cave but it is too dark"
			updateDisplay(message);
			 if (visitLoc4 == 0) {
                    score += 5;
                    document.getElementById("points").innerHTML = score;
                    visitLoc4 = 1;
                } else {
                    document.getElementById("points").value = score;
				}
		}

        //Inside of Cave
       
      
            function InsideCave()	{
			var message = "You are standing inside the cave. You see paintings on the walls of the cave"
			updateDisplay(message);
			 if (visitLoc4 == 0) {
                    score += 5;
                    document.getElementById("points").innerHTML = score;
                    visitLoc4 = 1;
                } else {
                var message = "You are standing inside the cave. You see paintings on the walls of the cave"
				updateDisplay(message);
				}
		}


      //Beach: You are standing on the beach of the lake. You see children playing in the water and limestone on the floor.
        function beach() {
            var message = "You are standing on the beach of the lake. You see children playing in the water and limestone on the floor. ";
			updateDisplay(message);
			 if (visitLoc7 == 0) {
                    score += 5;
                    document.getElementById("points").innerHTML = score;
                    visitLoc7 = 1;
                } else {
                    var message = "You are standing on the beach of the lake. You see children playing in the water and limestone on the floor. ";
					updateDisplay(message);
				}
        }


     //Beach: You are standing on the beach of the lake. You see children playing in the water and limestone on the floor.
        function beach() {
            var message = "You are standing on the beach of the lake. You see children playing in the water and limestone on the floor. ";
			updateDisplay(message);
			 if (visitLoc7 == 0) {
                    score += 5;
                    document.getElementById("points").innerHTML = score;
                    visitLoc7 = 1;
                } else {
                    var message = "You are standing on the beach of the lake. You see children playing in the water and limestone on the floor. ";
					updateDisplay(message);
				}
        }

	//DIRECTIONS
        
	//Go North
        function btnNorth_click() {
            if (currentLoc === 0) {
                currentLoc = 1;
                look();
                document.getElementById("btnEast").disabled = true;
                document.getElementById("btnWest").disabled = true;
                document.getElementById("btnSouth").disabled = false;
                document.getElementById("btnNorth").disabled = false;
            } else {
                if (currentLoc === 1) {
                    currentLoc = 5;
                    look();
                    document.getElementById("btnEast").disabled = true;
                    document.getElementById("btnWest").disabled = true;
                    document.getElementById("btnSouth").disabled = false;
                    document.getElementById("btnNorth").disabled = true;
                } else {
                    if (currentLoc === 2) {
                        currentLoc = 0;
                        look();
                        document.getElementById("btnEast").disabled = false;
                        document.getElementById("btnWest").disabled = false;
                        document.getElementById("btnSouth").disabled = false;
                        document.getElementById("btnNorth").disabled = false;
                    }
                }
            }
            look();
        }
    //Go South
        function btnSouth_click() {
            if (currentLoc === 0) {
                currentLoc = 2;
                look();
                document.getElementById("btnEast").disabled = true;
                document.getElementById("btnWest").disabled = true;
                document.getElementById("btnSouth").disabled = true;
                document.getElementById("btnNorth").disabled = false;
            } else {
                if (currentLoc === 5) {
                    currentLoc = 1;
                    look();
                    document.getElementById("btnEast").disabled = true;
                    document.getElementById("btnWest").disabled = true;
                    document.getElementById("btnSouth").disabled = false;
                    document.getElementById("btnNorth").disabled = false;
                } else {
                    if (currentLoc === 1) {
                        currentLoc = 0;
                        look();
                        document.getElementById("btnEast").disabled = false;
                        document.getElementById("btnWest").disabled = false;
                        document.getElementById("btnSouth").disabled = false;
                        document.getElementById("btnNorth").disabled = false;
                    }
                }
            }
            look();
        }
    //Go East
        function btnEast_click() {
            if (currentLoc === 0) {
                currentLoc = 3;
                look();
                document.getElementById("btnEast").disabled = true;
                document.getElementById("btnWest").disabled = false;
                document.getElementById("btnSouth").disabled = true;
                document.getElementById("btnNorth").disabled = true;
            } else {
                if (currentLoc === 4) {
                    currentLoc = 0;
                    look();
                    document.getElementById("btnEast").disabled = false;
                    document.getElementById("btnWest").disabled = false;
                    document.getElementById("btnSouth").disabled = false;
                    document.getElementById("btnNorth").disabled = false;
				}
            }
            look();
        }
    //Go West
        function btnWest_click() {
            if (currentLoc === 0) {
                currentLoc = 4;
                look();
                document.getElementById("btnEast").disabled = false;
                document.getElementById("btnWest").disabled = true;
                document.getElementById("btnSouth").disabled = true;
                document.getElementById("btnNorth").disabled = true;
            } else {
                if (currentLoc === 3) {
                    currentLoc = 0;
                    look();
                    document.getElementById("btnEast").disabled = false;
                    document.getElementById("btnWest").disabled = false;
                    document.getElementById("btnSouth").disabled = false;
                    document.getElementById("btnNorth").disabled = false;
                
                }
            }
            look();
        }
    //look() descriptions featuring switch-case    
		function look() {
            var desc = "";
            switch (currentLoc) {
                case 0: forest();
					break;
				case 1: firstNorthBtn();
					break;
				case 2: southBtn();
					break;
				case 3: eastBtn();
					break;
				case 4: westBtn();
					break;
				case 5: secondNorthBtn();
					break;
    
                case 6: InsideCave();
                    break;
                case 

				default: "Wrong Way! Try again."
            }
        }

//Textarea for var message for each button, coming from each locations function
        function updateDisplay(MSGTA) {
            var textarea = document.getElementById("textarea");
            textarea.value = MSGTA;
        }
    
*/

//Update Text Display
function updateDisplay(msg) {
     var target = document.getElementById("textarea");
     target.value = msg + "\n\n";
 }
     
        
	

    
	