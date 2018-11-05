var player;
var xborder;
var yborder;

var sizex = 600;
var sizey = 600;



function setup() {
	createCanvas(sizex, sizey);
	xborder = 0;
	yborder = 0;
	player = new player();
	border = new border();
}

function draw() {
	background(50);
	player.update();
	player.show();
	border.show();
}

function keyPressed() {
	if (keyIsDown() === false) {
		player.dir(0);
	} else if (keyIsDown(LEFT_ARROW)) {
		player.dir(-60);
	} else if (keyIsDown(RIGHT_ARROW)) {
		player.dir(60);
	}
}

function player() {
	this.x = (sizex / 2) - 10;
	this.y = 520;
	this.xspeed = 0;
	this.yspeed = 0;

	this.dir = function(x, y) {
		this.xspeed = x;

	}

	this.update = function() {
		this.x = this.x + this.xspeed;
		if (this.x < 50) this.x = 50;
		if (this.x > 530) this.x = 530;
		this.xspeed = 0;
	}

	this.show = function() {
		fill(255, 0, 0);
		rect(this.x, this.y, 20, 20)
		rect(this.x, this.y + 20, 20, 20)
		rect(this.x, this.y + 40, 20, 20)
		rect(this.x, this.y + 60, 20, 20)
		rect(this.x - 20, this.y + 20, 20, 20)
		rect(this.x + 20, this.y + 20, 20, 20)
		rect(this.x - 20, this.y + 60, 20, 20)
		rect(this.x + 20, this.y + 60, 20, 20)
	}
}

function border() {
	this.show = function() {
		fill(255, 255, 255);
		rect(xborder, yborder, 20, 100);
		rect(xborder + 580, yborder, 20, 100);
		rect(xborder, yborder + 300, 20, 100);
		rect(xborder + 580, yborder + 300, 20, 100);
		yborder = yborder + 10;
		if (yborder > 260) yborder = 0;
	}

}