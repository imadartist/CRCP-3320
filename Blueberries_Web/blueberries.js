let blueberries = new Array(11);
for (var i = 0; i < blueberries.length; i++) {
	blueberries[i] = new Array(10);
}

//Blueberry[][] blueberries = new Blueberry[11][10];
//intialize?

let w;
let h;
let b;
let fileName;
let blue;
let menu = 0;


function setup() {
	//fullScreen(P2D);
	createCanvas(windowWidth,windowHeight);
	w = width/10;
	h = height/11;
	loadArrays();
}

function draw() {
	if (menu == 0) {
		//displayMenu();
	} else {
		background(0);
		//displayBlueberries();
		if (blue == true) {
			//dropPattern();
		}
		if (blue == false) {
			//resetPattern();
		}
	}
}

function loadArrays() {
	for (let x = 0; x < 10; x++) {
		for (let y = 0; y < 11; y++) {
			i = (y*10) + x + 1;
			blueberries[y][x] = new Blueberry(w, h, x*w, y*h);
			fileName = i + " copy.png";
			console.log(fileName);
			b = loadImage(fileName);
			//blueberries[y][x].setBlueberry(b);
		}
	}
}


/*
void displayBlueberries() {
  for (int x = 0; x < 10; x++) {
    for (int y = 0; y < 11; y++) {
      blueberries[y][x].displayBlueberries();
      blueberries[y][x].size = map(mouseX, 0, height, -2, 2);
    }
  }
}

void dropPattern () {
  for (int x = 0; x < 10; x++) {
    for (int y = 0; y < 11; y++) {
        blueberries[y][x].moveBlueberries();
        blueberries[y][x].checkEdges();
        blueberries[y][x].displayBlueberries();
      }
    }
}
void resetPattern () {
     for (int x = 0; x < 10; x++) {
    for (int y = 0; y < 11; y++) {
      blueberries[y][x].xSpeed= random(-2,2);
      blueberries[y][x].ySpeed= random(-2,2);
      blueberries[y][x].xPos = x*wDimension;
      blueberries[y][x].yPos = y*hDimension;
    }
  }
}
void mousePressed() {
  blue = !blue;
}
*/

