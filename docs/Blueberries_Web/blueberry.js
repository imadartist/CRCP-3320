class Blueberry {
	constructor(w,h,x,y) {
		this.w = w;
		this.h = h;
		this.xPos = x;
		this.yPos = y;
		this.size = 1;
		this.xSpeed = random(-1,3);
		this.ySpeed = random(1,15);
	}

	displayBlueberries() {
		push();
		scale(size);
		img(this.blueberry,this.xPos/this.size,this.yPos/this.size);
		pop();
	}

	moveBlueberries() {
		this.xPos = this.xPos + this.xSpeed;
		this.yPos = this.yPos + this.ySpeed;
	}

	checkEdges() {
		if (this.xPos <= 0 || this.xPos >= width) {
			this.xSpeed = this.xSpeed * -0.7;
		} 
		if (this.yPos <= 0 || this.yPos >= height) {
			this.ySpeed = this.ySpeed * -0.7;
		}
	}

	setBlueberry(b) {
		this.blueberry=b;
	}
}