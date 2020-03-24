let blueberries = new Array(11);
for (var i = 0; i < blueberries.length; i++) {
	blueberries[i] = new Array(10);
}


let w;
let h;
let b;
let fileURL;
let blue;
let menu = 0;


function setup() {
	createCanvas(windowWidth,windowHeight);
	w = width/10;
	h = height/11;
	loadArrays();
}

function draw() {
	//deletion here might be problematic
		background(0);
		displayBlueberries();
		if (blue == true) {
			dropPattern();
		}
		if (blue == false) {
			resetPattern();
		}
	}


function loadArrays() {
	for (let x = 0; x < 10; x++) {
		for (let y = 0; y < 11; y++) {
			i = (y*10) + x + 1;
			blueberries[y][x] = new Blueberry(w, h, x*w, y*h);

			fileURL = "https://raw.githubusercontent.com/imadartist/CRCP-3320/master/Blueberries_Web/"+i+".png";
	

			console.log(fileURL);
			b = loadImage(fileURL);
			blueberries[y][x].setBlueberry(b);
		}
	}
}



function displayBlueberries() {
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 11; y++) {
      blueberries[y][x].displayBlueberries();
      blueberries[y][x].setSize(map(mouseX, 0, height, -2, 2));
    }
  }
}


function dropPattern () {
  for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 11; y++) {
        blueberries[y][x].moveBlueberries();
        blueberries[y][x].checkEdges();
        blueberries[y][x].displayBlueberries();
      }
    }
}


function resetPattern () {
   for (let x = 0; x < 10; x++) {
    for (let y = 0; y < 11; y++) {
      blueberries[y][x].xSpeed= random(-2,2);
      blueberries[y][x].ySpeed= random(-2,2);
      blueberries[y][x].xPos = x*w;
      blueberries[y][x].yPos = y*h;
    }
  }
}

function mousePressed() {
  blue = !blue;
}


