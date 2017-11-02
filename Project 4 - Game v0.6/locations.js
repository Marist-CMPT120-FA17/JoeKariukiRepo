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
										var textarea = document.getElementById("textarea");
										textarea.value = "Invalid Commands! Only N, n, S, s, E, e and W, w are valid";
                        }
                    }
                }
            }
       }

        
	//LOCATIONS
        //Forest
		function forest() {
			var message = "You're standing in the middle of a forest. You hear the sounds of owls hooting";
			updateDisplay(message);
			if (visitLoc0 ==0) {
				score +=5;
				document.getElementById("points").innerHTML = score;
				visitLoc0 = 1;
				} else {
				var message = "You're standing in the middle of a forest.  You hear the sounds of owls hooting";
				updateDisplay(message);
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
                    var message = "You're near a lake. You hear a person screaming ";
					updateDisplay(message);
				}
		}
        
 /*       //Beach: You are standing on the beach of the lake. You see children playing in the water and limestone on the floor.
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
*/
        //Cliff
		function secondNorthBtn() {
			var message = "You are standing at a cliff. There's a lighthouse at the cliff";
			updateDisplay(message);
			 if (visitLoc5 == 0) {
                    score += 5;
                    document.getElementById("points").innerHTML = score;
                    visitLoc5 = 1;
                } else {
                    var message = "You are standing at a cliff. There's a torn t-shirt near the cliff";
					updateDisplay(message);
				}
		}
        
        //Highway
		function southBtn() {
			var message = "You're standing next to a highway. There is a dead body with claw marks on it";
			updateDisplay(message);
			 if (visitLoc2 == 0) {
                    score += 5;
                    document.getElementById("points").innerHTML = score;
                    visitLoc2 = 1;
                } else {
					var message = "You're standing next to a highway. There is a dead body with claw marks on it";
					updateDisplay(message); 
				}
		}
        
        //Pine tree
		function eastBtn() {
			var message = "You're next to a pine tree. You see a large paw print with blood covering it";
			updateDisplay(message);
			 if (visitLoc3 == 0) {
                    score += 5;
                    document.getElementById("points").innerHTML = score;
                    visitLoc3 = 1;
                } else {
					var message = "You're next to a pine tree. You see a large paw print with blood covering it";
					updateDisplay(message);
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
                var message = "You are standing in front of a large cave. You hear growling"
				updateDisplay(message);
				}
		}
        
        //Inside of Cave
       
        
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
				default: "Wrong Way! Try again."
            }
        }

//Textarea for var message for each button, coming from each locations function
        function updateDisplay(MSGTA) {
            var textarea = document.getElementById("textarea");
            textarea.value = MSGTA;
        }
	