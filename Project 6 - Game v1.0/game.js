//Global variables
	var score = 0;
    var currentLoc = 0;
    var nextLocation = 0;
    
    var inventoryList = "Inventory:\n";
    var inventory = [];
    var North = 0
    var South = 1
    var East = 2
    var West = 3
    var init = false


    
// Navigation  work-in-progress      
var btn = ["btnNorth","btnSouth","btnEast","btnWest"]
var nav = [   //N S E W
			  [1,2,3,4],	//0			
              [-1,0,5,-1],	//1
              [0,-1,6,7],	//2
              [5,6,9,0],	//3
              [-1,7,0,-1],	//4
              [8,3,-1,1],	//5
              [3,-1,-1,2],	//6
              [4,-1,2,-1],	//7
              [10,5,-1,-1], //8
              [-1,-1,-1,3], //9
              [-1,-1,-1,-1], //10
    
			   ]

var NoBtn =	[//N S E W
			[0,0,0,1],  //0  
			[0,0,0,1],	//1 
			[0,0,1,0],	//2 
			[1,1,1,1],	//3 
			[1,0,0,0],	//4
			[1,1,1,0],	//5
			[0,1,0,1],	//6
			[0,0,1,0],	//7
			[0,1,1,0],	//8
			[1,0,0,1],	//9
			[1,1,1,0],  //10
			]
            

function btnNorth_click() {
		nextLoc(North);
 }

function btnSouth_click() {
		nextLoc(South);
 }

 function btnEast_click() {
		nextLoc(East);
 }

 function btnWest_click() {
		nextLoc(West);            
 }
                  

function nextLoc(dir) {
    var message = "You can't go that way!";
    nextLocation = nav[currentLoc][dir];
	if (nextLocation >= 0) {
		lookTime(nextLocation);
	} else {		
		updateDisplay(message);
	}
    updateScore();
}


//lookTime function
function lookTime(nextLocation) {
	var message = "";
	message = gLocations[nextLocation].desc;
	if (nextLocation >= 10) {
	if (inventory.length > 4) {
			currentLoc = nextLocation;
			updateDisplay(message);
			updateDisplay("Congrats, you win!");
			document.getElementById("btnTake").disabled = true;
			document.getElementById("btnCommand").disabled = true;
		} else {
		updateDisplay("You must collect all items to proceed!");
	}
	} else {
	currentLoc = nextLocation;
	updateDisplay(message);
	}
	DisableTime();
	updateScore();
}

function DisableTime() {
	var disable = 0;
	for (j=0; j < btn.length; j++) {
		disable = NoBtn[currentLoc][j];
	  if (disable === 1) {
	  document.getElementById(btn[j]).disabled = true;
	  } else {
	  document.getElementById(btn[j]).disabled = false;
	 }
}
}
    

//  Item Track Function
function item (id, name, description) {
	this.id = id;
	this.name = name;
	this.description = description;
	this.check = 0;
	this.toString=function () {
		return this.description;
	}	
}




// User Enter Commands
	   function btnEnterCommand_click() {
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
                            if (userText === "help") {
                                    response = help();
                                } else if (userText === "Take" || userText === "take") {
                                   itemTake();
                                } else if (userText == "list") {
                                    inventory();
                                } else {
                                    errorMsg();
                                }
                        }
                    }
                }
            }
       }

//Error Command Message Function
 function errorMsg() {
     var message = "I don't understand your command. Valid commands are N,S,E,W or Click on the 'Help'button "
     updateDisplay(message);
     
 }

function itemTake() {
    var checkItem = gLocations[currentLoc];
	if (checkItem.item === null) {
		alert("There is nothing to take here.")
	} else {
		inventory.push(items[currentLoc].name);
		alert("You have picked up " + items[currentLoc].name);
		gLocations[currentLoc].item = null;
	}	
    
}
    
//Inventory
        function inventoryCheck(){
          if (gItems.length == 0){
            alert("No items in Inventory.\n");
          }
          else{
            alert(inventoryList);
          }
        }

function look() {
    var message = "";
	message = gLocations[currentLoc];
	var checkItem = gLocations[currentLoc].item;
	if (checkItem !== null) {
		message = message + checkItem;
	}
	updateDisplay(message); 
}

//Calls look()

function Init() {
    if (init === false) {
    message = "It is a quiet evening in the mountain side!" +
			" Go on an adventure and discover the hidden treasures of your environment.";
	init = true;
	updateDisplay(message);
    }
}       


// HELP FUNCTION
function help() {
	var message = "Click the directional buttons to change locations or enter the commands: N, S, E, W, n, s, e, w to change locations.  Locations and compass are displayed. To pick an item, type in the word \"take\". To list your inventory, type in the word \"list\" ";
	updateDisplay(message);
}



//Update Text Display
function updateDisplay(msg) {
     var target = document.getElementById("textarea");
     target.value = msg + "\n\n";
 }

function updateScore() {
	var scoring = gLocations[currentLoc];
	if(scoring.check === false) {
		score += 5;
		document.getElementById("score").innerHTML = score;
		scoring.check = true;
	}
}		