//  Locations.js for game.html v1.0

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


// Location Variables
var loc_porch = new Location(0, "terrace", " You are sitting comfortably chair inside your cabin. You're about to read a book when suddenly you hear a strange sound. You can pick the book with you", book);
var loc_frontCabin = new Location(1, "frontCabin", "You are standing in front of the cabin. A dog runs towards you to greet you!", null, false);
var loc_forest = new Location(2, "forest", "You're standing in the middle of a forest. You hear the sounds of owls hooting", null, false);
var loc_pineTree = new Location(3, "pineTree", "You reach the end of the forest. There's a large pine tree with pine cones every where. Pick them up!", pineCones, false);
var loc_cave = new Location(4, "cave", "You are standing in front of a large cave. You try to see what's inside the cave but it is too dark. There's a torch lying near you.", torch, false);
var loc_insideCave = new Location(5, "insideCave", "You are standing inside the cave. It's very dark and cold. You see cave paintings on the walls. You reach a dead end!", null, false);
var loc_road = new Location(6, "road", "You are standing next to a country road, from here you can see a picture of a town.", null, false);
var loc_cliff = new Location(7, "cliff", "You are standing at the edge of a cliff. There is a lighthouse in the distance", null, false);
var loc_lake = new Location(8, "lake", "You are standing near a lake. You hear screaming.", null, false);
var loc_beach = new Location(9, "beach", "You are standing at the beach of the lake. You see children playing in the lake. There are sea shells everywhere.", seaShells, false);

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
var book = new item(0, "book", "You've collected the book", false);
var pineCones = new item(3, "pine cones", "You've picked up a pine cone", false);
var torch = new item(6, "torch", "You've picked up a torch", false);
var seaShells = new item(9, "sea shells", "You've picked up a sea shell", false);


// Item Variables
var items = new Array();
items[0] = book;
items[3] = pineCones;
items[6] = torch;
items[9] = seaShells;











        
	

    
	