let ball;


function setup() {
  createCanvas(600, 200); 
  ball = new Walker();
}


function draw() {
  background(220, 5);
  ball.update();
  ball.display();
}


// new way to define Object
class Walker {
  //setup values
  constructor() {
  	this.x = width/2;
  	this.y = height/2;
  	this.w = 10;
  }
  
  update() {
    //update position
  	this.x = this.x + random(-5, 5);
  	this.y = this.y + random(-5, 5);
  }
  
  display() {
    //display walker
    fill(200, 0, 0);
	ellipse(this.x, this.y, this.w);
  }
}