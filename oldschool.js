var player;
var xborder;
var yborder;

//50,110,170,230,290,350,410,470,530
var spawnLoc = [50, 110, 170, 230, 290, 350, 410, 470, 530];
var enemyLocX = [230, 410, 110, 230, 350];
var enemyLocY = [-50, -170, -290, -290, -410];

var sizex = 600;
var sizey = 600;
var speed = 1;

var x;
var y;
var xenemy;
var yenemy;
var score = 0;



function setup() {
    frameRate(60);
    createCanvas(sizex, sizey);
    xborder = 0;
    yborder = 0;
    player = new player();
    border = new border();
    enemy = new enemy();
}

function draw() {
    background(50);
    player.update();
    player.show();
    border.show();
    enemy.check();
    enemy.update();
    enemy.show();
    enemy.colision();
    fill(255);
    textSize(32);
    text(score, 32, 40);

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

function enemy() {
    xenemy = 50;
    yenemy = -50;
    this.check = function() {
        if (max(enemyLocY) > 600) {
            for (var i = 0; i < enemyLocX.length; i++) {
                if (enemyLocY[i] > 600) {
                    this.rand = floor(random(9));
                    enemyLocX[i] = spawnLoc[this.rand];
                    enemyLocY[i] = -50;

                }
            }
            score += 10;
            if (score % 200 === 0) {
                this.rand = floor(random(9));
                enemyLocX = append(enemyLocX, spawnLoc[this.rand]);
                enemyLocY = append(enemyLocY, -100);
                console.log(enemyLocX);
            }

            if (score === 500) speed = speed + 1;
        }
    }

    this.show = function() {
        fill(0, 255, 255);
        for (var i = 0; i < enemyLocX.length; i++) {
            rect(enemyLocX[i], enemyLocY[i], 20, 20)
            rect(enemyLocX[i], enemyLocY[i], 20, 20)
            rect(enemyLocX[i], enemyLocY[i] + 20, 20, 20)
            rect(enemyLocX[i], enemyLocY[i] + 40, 20, 20)
            rect(enemyLocX[i], enemyLocY[i] + 60, 20, 20)
            rect(enemyLocX[i] - 20, enemyLocY[i] + 20, 20, 20)
            rect(enemyLocX[i] + 20, enemyLocY[i] + 20, 20, 20)
            rect(enemyLocX[i] - 20, enemyLocY[i] + 60, 20, 20)
            rect(enemyLocX[i] + 20, enemyLocY[i] + 60, 20, 20)

        }
    }

    this.update = function() {
        //yenemy=yenemy+1;
        for (var i = 0; i < enemyLocX.length; i++) {
            enemyLocY[i] += 5 * speed;
        }

    }
    this.colision = function() {
        for (var i = 0; i < enemyLocX.length; i++) {

            if (x === enemyLocX[i] && 540 === (enemyLocY[i] + 80) || x === enemyLocX[i] && 540 === enemyLocY[i]) {
                enemyLocY = [-50, -170, -290, -290, -410];
                enemyLocX =[];
                for(var i=0;i<5;i++){
                    this.rand = floor(random(9));
                    enemyLocX = append(enemyLocX,spawnLoc[this.rand]);
                }
                x = (sizex / 2) - 10;
                y = 520;
                score = 0;
                speed = 1;

            }


        }
    }
}



function player() {
    x = (sizex / 2) - 10;
    y = 520;
    this.xspeed = 0;
    this.yspeed = 0;

    this.dir = function(x, y) {
        this.xspeed = x;

    }

    this.update = function() {
        x = x + this.xspeed;
        if (x < 50) x = 50;
        if (x > 530) x = 530;
        this.xspeed = 0;
    }

    this.show = function() {
        fill(255, 0, 0);
        rect(x, y, 20, 20)
        rect(x, y + 20, 20, 20)
        rect(x, y + 40, 20, 20)
        rect(x, y + 60, 20, 20)
        rect(x - 20, y + 20, 20, 20)
        rect(x + 20, y + 20, 20, 20)
        rect(x - 20, y + 60, 20, 20)
        rect(x + 20, y + 60, 20, 20)
    }

}

function border() {
    this.show = function() {
        fill(255, 255, 255);
        rect(xborder, yborder - 300, 20, 100);
        rect(xborder + 580, yborder, 20, 100);
        rect(xborder, yborder, 20, 100);
        rect(xborder + 580, yborder - 300, 20, 100);
        rect(xborder, yborder + 300, 20, 100);
        rect(xborder + 580, yborder + 300, 20, 100);
        yborder = yborder + 10;
        if (yborder > 290) yborder = 0;
    }

}