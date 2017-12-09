//Global variables
	var score = 0;
    var currentLoc = 0;
    var newLoc = 0;
    var inventory = [];
    var North = 0;
    var South = 1;
    var East = 2;
    var West = 3;
    var init = false;


    
// Can't seem to figure out what's wrong with my navigation    
var btn = ["btnNorth","btnSouth","btnEast","btnWest"];
var nav = [   //N S E W
               [1,6,7,-1],		//0			
			   [2,0,4,-1],		//1
			   [8,1,-1,3],		//2
			   [9,-1,2,-1],	    //3
			   [3,7,5,1],		//4
			   [6,-1,-1,4],	    //5
			   [8,-1,8,-1],		//6
			   [4,8,-1,0],		//7
			   [7,-1,-1,6],		//8
			   [-1,2,10,-1],	//9		   
            ];


var noBtn =	[//N S E W
    
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

			];



function nextLoc(move) {
    var message = "You can't go that way!";
    var newLoc = nav[currentLoc][move];
	if (newLoc >= 10) {
		lookTime(newLoc);
	} else if (newLoc == 5) {		
		updateDisplay('You can\'t go to the cave without a torch');
	}
    updateScore();
}

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


//lookTime function
function lookTime(newLoc) {
	var message = " ";
	message = gLocations[newLoc].desc;
	if (newLoc >= 10) {
	if (inventory.length > 3) {
			currentLoc = newLoc;
			updateDisplay(message);
			updateDisplay("Congrats, you've made it to the cave!");
			document.getElementById("btnTake").disabled = true;
			document.getElementById("btnCommand").disabled = true;
		} else {
		updateDisplay("You must collect all items to proceed to the cave");
	}
	} else {
        currentLoc = newLoc;
        updateDisplay(message);
	}
        disableTime();
        updateScore();
}

function disableTime() {
	var disable = 0;
	for ( var j = 0; j < btn.length; j++ ) {
		disable = noBtn[currentLoc][j];
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
                                    inventoryCheck();
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
    
//Inventory Check
        function inventoryCheck() {
          if (items.length == 0){
            alert("No items in Inventory.\n");
          }
          else{
            var message = "Inventory:\n" + inventory;
          }
            alert(message);
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

//Calls Init()

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
	alert("Click the directional buttons to change locations or enter the commands: N, S, E, W, n, s, e, w to change locations.  Locations and compass are displayed. To pick an item, type in the word \"take\". To list your inventory, type in the word \"list\" ");
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

//  Locations.js for game.html v1.0

function Location(id, name, desc, item)
{
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.item = item;
    this.visited = false;
    function toString() {
		return name + desc;
    }
}


// Location Variables
var loc_porch = new Location (0, "terrace", " You are sitting comfortably chair inside your cabin. You're about to read a book when suddenly you hear a strange sound. You can pick the book with you", book, false);

var loc_frontCabin = new Location (1, "frontCabin", "You are standing in front of the cabin. A dog runs towards you to greet you!", null, false);

var loc_forest = new Location (2, "forest", "You're standing in the middle of a forest. You hear the sounds of owls hooting", null, false);

var loc_pineTree = new Location (3, "pineTree", "You reach the end of the forest. There's a large pine tree with pine cones every where. Pick them up!", pineCone, false);

var loc_cave = new Location (4, "cave", "You are standing in front of a large cave. You try to see what's inside the cave but it is too dark. There's a torch lying near you.", torch, false);

var loc_insideCave = new Location (5, "insideCave", "You are standing inside the cave. It's very dark and cold. You see cave paintings on the walls. You reach a dead end!", null, false);

var loc_road = new Location (6, "road", "You are standing next to a country road, from here you can see a picture of a town.", null, false);

var loc_cliff = new Location(7, "cliff", "You are standing at the edge of a cliff. There is a lighthouse in the distance", null, false);

var loc_lake = new Location (8, "lake", "You are standing near a lake. You hear screaming.", null, false);

var loc_beach = new Location (9, "beach", "You are standing at the beach of the lake. You see children playing in the lake. There are sea shells everywhere.", seaShell, false);

//Global Location Array

var gLocations = [loc_porch, loc_frontCabin, loc_forest, loc_pineTree, loc_cave, loc_insideCave, loc_road, loc_cliff, loc_lake, loc_beach];

// Items Prototype
function item (id, name, desc) {
	this.id = id;
	this.name = name;
	this.desc = desc;
	this.isTaken = false;
	function toString() {
		return desc;
	}
}

// Item Variables
var book = new item (0, "book", "You've collected the book", false);
var pineCone = new item (3, "pine cones", "You've picked up a pine cone", false);
var torch = new item (6, "torch", "You've picked up a torch", false);
var seaShell = new item (9, "sea shells", "You've picked up a sea shell", false);


// Item Variables
var items = new Array();
items[0] = book;
items[3] = pineCone;
items[6] = torch;
items[9] = seaShell;



