//Global variables
	var score = 0;
    var currentLoc = 0;
/*

    // OLD LOCATION VARIABLES
    
    var visitLoc0 = false;
    var visitLoc1 = false;
    var visitLoc2 = false;
    var visitLoc3 = false;
    var visitLoc4 = false;
    var visitLoc5 = false;
    var visitLoc6 = false;
    var visitLoc7 = false;
    var visitLoc8 = false;
    var visitLoc9 = false;
*/
    
    var inventoryList = "Inventory:\n";
    var inventory = [];
    var Items = [];

    var North = 0
    var South = 1
    var East = 2
    var West = 3
    // var isPlaying = true;


// Item Arrays

gItems = new Array();

function items(id, name, description)
   {
       this.id = id;
       this.name = name;
       this.description = description;
       this.toString = function () {return(this.id + "" + this.name + "" + this.description); };
   }

function Location(id,name,description, item)
{
    this.id = id;
    this.name = name;
    this.description = description;
    this.item = item;
    this.check = false;
    this.toString = function () {
        return(this.id + "" + this.name + "" + this.description); 
    };
}

// Item Variables
var book = new item(0, "book", "You've collected the book");
var pineCones = new item(3, "pine cones", "You've picked up a pine cone");
var torch = new item(6, "torch", "You've picked up a torch");
var seaShells = new item(9, "sea shells", "You've picked up a sea shell");


// Global Item Variables
var items = new Array();
items[0] = book;
items[3] = pineCones;
items[6] = torch;
items[9] = seaShells;





// Location Variables
var loc_porch = new Location(0, "terrace", " You are sitting comfortably on a rocking chair infront of a cabin. You're about to read a book when suddenly you hear a strange sound. You can pick the book with you", book);
var loc_frontCabin = new Location(1, "frontCabin", "You are standing in front of the cabin. A dog runs towards you to greet you!", null);
var loc_forest = new Location(2, "forest", "You're standing in the middle of a forest. You hear the sounds of owls hooting", null);
var loc_pineTree = new Location(3, "pineTree", "You reach the end of the forest. There's a large pine tree with pine cones every where. Pick them up!", pineCones);
var loc_cave = new Location(4, "cave", "You are standing in front of a large cave. You try to see what's inside the cave but it is too dark. There's a torch lying near you.", torch);
var loc_insideCave = new Location(5, "insideCave", "You are standing inside the cave. It's very dark and cold. You see cave paintings on the walls. You reach a dead end!", null);
var loc_road = new Location(6, "road", "You are standing next to a country road, from here you can see a picture of a town.", null);
var loc_cliff = new Location(7, "cliff", "You are standing at the edge of a cliff. There is a lighthouse in the distance", null);
var loc_lake = new Location(8, "lake", "You are standing near a lake. You hear screaming.", null);
var loc_beach = new Location(9, "beach", "You are standing at the beach of the lake. You see children playing in the lake. There are sea shells everywhere.", seaShells);

//Global Location Array
var gLocations = [loc_porch, loc_frontCabin, loc_forest, loc_pineTree, loc_cave, loc_insideCave, loc_road, loc_cliff, loc_lake, loc_beach];



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
     var message = "I don't understand your command. Valid commands are N,S,E,W"
     updateDisplay(message);
     
 }
     
//Score 
       function updateScore() {
          document.getElementById("score").innerHTML = score;
        }
//Take Item
/*

    // OLD 'ITEM TAKE' FUNCTION
    
        function itemTake(){
          if (gLocations[currentLoc].item == undefined){
            alert("There is no item to take!");
          }
          else{
            gItems.push(gLocations[currentLoc].item);
            inventoryList += gItems[gItems.length-1].name + "\n";
            gLocations[currentLoc].item = undefined;
            updateDisplay(gItems[gItems.length-1].description);
          }
        }
 */

// 
function itemTake() {
    var checkItem = gLocations[currentLoc];
	if (checkItem.item === null) {
		var message = "There is nothing to take here."
		updateDisplay(message);
	} else {
		inventory.push(items[currentLoc].name);
		updateDisplay("You have picked up " + items[currentLoc].name);
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
	function init() {
            look();
    }       
/*     


// OLD NAVIGATION AND LOCATION FUNCTIONS


//LOCATION FUNCTIONS
 function porch() {
    if (visitLoc0 == false) {
        visitLoc0 = true;
        score += 5;
        updateScore();
    }
  } 
  
  function frontCabin() {
    if (visitLoc1 == false) {
        visitLoc1 = true;
        score += 5;
        updateScore();
    }
  } 
  
  function forest() {
    if (visitLoc2 == false) {
        visitLoc2 = true;
        score += 5;
        updateScore();
    }
  }  
  
  function pineTree() {
    if (visitLoc3 == false) {
        visitLoc3 = true;
        score += 5;
        updateScore();
    }
  } 
  
  function cave() {
    if (visitLoc4 == false) {
        visitLoc4 = true;
        score += 5;
        updateScore();
    }
  }
  
  function insideCave() {
    if (visitLoc5 == false) {
        visitLoc5 = true;
        score += 5;
        updateScore();
    }
  }
  
  function road() {
    if (visitLoc6 == false) {
        visitLoc6 = true;
        score += 5;
        updateScore();
    }
  }
  
  function cliff() {
    if (visitLoc7 == false) {
        visitLoc7 = true;
        score += 5;
        updateScore();
    }
  }
  
  function lake() {
    if (visitLoc8 == false) {
        visitLoc8 = true;
        score += 5;
        updateScore();
    }
  }
  
  function beach() {
    if (visitLoc9 == false) {
        visitLoc9 = true;
        score += 5;
        updateScore();
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
         updateDisplay(gLocations[currentLoc].description);
         document.getElementById("btnEast").disabled = false;
         document.getElementById("btnWest").disabled = false;
         document.getElementById("btnSouth").disabled = false;
         document.getElementById("btnNorth").disabled = false;

     } else {
         if (currentLoc === 1) {
             currentLoc = 2;
             look();
             updateDisplay(gLocations[currentLoc].description);
             document.getElementById("btnEast").disabled = true;
             document.getElementById("btnWest").disabled = true;
             document.getElementById("btnSouth").disabled = false;
             document.getElementById("btnNorth").disabled = false;
         } else {
             if (currentLoc === 2) {
                 currentLoc = 3;
                 look();
                 updateDisplay(gLocations[currentLoc].description);
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
         updateDisplay(gLocations[currentLoc].description);
         document.getElementById("btnEast").disabled = true;
         document.getElementById("btnWest").disabled = true;
         document.getElementById("btnSouth").disabled = false;
         document.getElementById("btnNorth").disabled = false;
     } else {
         if (currentLoc === 2) {
             currentLoc = 1;
             look();
             updateDisplay(gLocations[currentLoc].description);
             document.getElementById("btnEast").disabled = false;
             document.getElementById("btnWest").disabled = false;
             document.getElementById("btnSouth").disabled = false;
             document.getElementById("btnNorth").disabled = false;
         } else {
             if (currentLoc === 1) {
                 currentLoc = 0;
                 look();
                 updateDisplay(gLocations[currentLoc].description);
                 document.getElementById("btnEast").disabled = true;
                 document.getElementById("btnWest").disabled = true;
                 document.getElementById("btnSouth").disabled = true;
                 document.getElementById("btnNorth").disabled = false;
             }
         }
     }
     look();
     updateDisplay(gLocations[currentLoc].description);
 }

 //East
 function btnEast_click() {
     // GOING EAST
     if (currentLoc === 1) {
         currentLoc = 8;
         look();
         updateDisplay(gLocations[currentLoc].description);
         document.getElementById("btnEast").disabled = false;
         document.getElementById("btnWest").disabled = false;
         document.getElementById("btnSouth").disabled = true;
         document.getElementById("btnNorth").disabled = true;
     } else {
         if (currentLoc === 8) {
             currentLoc = 9;
             look();
             updateDisplay(gLocations[currentLoc].description);
             document.getElementById("btnEast").disabled = false;
             document.getElementById("btnWest").disabled = false;
             document.getElementById("btnSouth").disabled = true;
             document.getElementById("btnNorth").disabled = true;
         } else {
             if (currentLoc === 9) {
                 currentLoc = 4;
                 look();
                 updateDisplay(gLocations[currentLoc].description);
                 document.getElementById("btnEast").disabled = false;
                 document.getElementById("btnWest").disabled = false;
                 document.getElementById("btnSouth").disabled = true;
                 document.getElementById("btnNorth").disabled = true;
             } else {
                 if (currentLoc === 4) {
                     currentLoc = 5;
                     look();
                     updateDisplay(gLocations[currentLoc].description);
                     document.getElementById("btnEast").disabled = true;
                     document.getElementById("btnWest").disabled = false;
                     document.getElementById("btnSouth").disabled = true;
                     document.getElementById("btnNorth").disabled = true;
                 
                 } 
                 }
             }
         }
        look();
        updateDisplay(gLocations[currentLoc].description);
     }
 //West
 function btnWest_click() {
     if (currentLoc === 5) {
         currentLoc = 4;
         look();
         updateDisplay(gLocations[currentLoc].description);
         document.getElementById("btnEast").disabled = false;
         document.getElementById("btnWest").disabled = false;
         document.getElementById("btnSouth").disabled = true;
         document.getElementById("btnNorth").disabled = true;
     } else {
         if (currentLoc === 4) {
             currentLoc = 9;
             look();
             updateDisplay(gLocations[currentLoc].description);
             document.getElementById("btnEast").disabled = false;
             document.getElementById("btnWest").disabled = false;
             document.getElementById("btnSouth").disabled = true;
             document.getElementById("btnNorth").disabled = true;
         } else {
             if (currentLoc === 9) {
                 currentLoc = 8;
                 look();
                 updateDisplay(gLocations[currentLoc].description);
                 document.getElementById("btnEast").disabled = false;
                 document.getElementById("btnWest").disabled = false;
                 document.getElementById("btnSouth").disabled = true;
                 document.getElementById("btnNorth").disabled = true;
     } else {
             if (currentLoc === 8) {
                 currentLoc = 1;
                 look();
                 updateDisplay(gLocations[currentLoc].description);
                 document.getElementById("btnEast").disabled = false;
                 document.getElementById("btnWest").disabled = false;
                 document.getElementById("btnSouth").disabled = false;
                 document.getElementById("btnNorth").disabled = false;
     } else {
         // GOING WEST FROM  CENTER
         if (currentLoc === 1) {
                 currentLoc = 6;
                 look();
                 updateDisplay(gLocations[currentLoc].description);
                 document.getElementById("btnEast").disabled = false;
                 document.getElementById("btnWest").disabled = false;
                 document.getElementById("btnSouth").disabled = true;
                 document.getElementById("btnNorth").disabled = true;
     } else {
         if (currentLoc === 6) {
                 currentLoc = 7;
                 look();
                 updateDisplay(gLocations[currentLoc].description);
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
    updateDisplay(gLocations[currentLoc].description);
   }
 }
*/



// NEW 'WORK-IN-PROGRESS' NAVIGATION USING MATRIX - NEED HELP UNDERSTANDING HOW THIS WORKS

var btn = ["btnNorth","btnSouth","btnEast","btnWest"]
var nav = [//N S E W
			   [1,6,7,-1],		//0			
			   [2,0,4,-1],		//1
			   [9,1,-1,3],		//2
			   [-1,-1,2,-1],	//3
			   [-1,7,5,1],		//4
			   [-1,-1,-1,4],	//5
			   [0,-1,8,-1],		//6
			   [4,8,-1,0],		//7
			   [7,-1,-1,6],		//8
			   [-1,2,10,-1],	//9
			   [-1,-1,-1,9],	//10
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
	var newLoc = nav[currentLoc][dir];
	if (newLoc >= 0) {
		if (newLoc==3 && inventory.length==5 && score == 50){
			currentLoc = newLoc;
			look();
			updateDisplay("Congratulations! You won!");
			//isPlaying = false;
			//Disable();
		}else if (newLoc==3){
			updateDisplay("You can't go to the cave yet.");		
		}else{
			currentLoc = newLoc;
			look();
			//Disable();
		}
	} else {
	   updateDisplay("You can't go that way.");
	} 
	updateScore();           
 }

function updateScore() {
	var scoring = gLocations[currentLoc];
	if(scoring.check === false) {
		score += 5;
		document.getElementById("score").innerHTML = score;
		scoring.check = true;
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
     
        
	

    
	