var mySound;
var mySound2;
var myBackground;
var shapes = [];
var myColor;


function preload(){

	mySound = loadSound("assets/raindrop.mp3");
	mySound2= loadSound("assets/rainsound.mp3");
	myBackground = loadImage("assets/background.png")


}



function setup() {
 createCanvas(1500,800);
 	mySound2.play();
 for(var i = 0; i <20;i++){
 	var x = random(50,1500);
 	var y = random(0,450);
 	var v = random(6,8);
 	shapes[i] = new RaindropShape(x,y,v);
 }
}

function draw() {

 background(200);
 
 myColor = random(240,249);

 image(myBackground,-10,0,1520,800);

 for(var i = 0; i < 20; i++){
 	shapes[i].display();
 	shapes[i].animate();
 }

}

function RaindropShape(xPos,ypos,Yvel){
	this.x = xPos;
	this.y = ypos;
	this.velocity = Yvel;
	
	this.display = function(){

		noStroke();
		fill(myColor);
		ellipse(this.x , this.y , 10, 10 );

	}
 	this.animate = function(){
	this.y += Yvel;
	 	if (this.y > 710 && this.y < 718){
 		mySound.play();
 		myColor = (36,81,218);
 	}
 
}
}

