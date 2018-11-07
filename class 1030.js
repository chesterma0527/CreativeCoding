var myRect1;
var myRect2;
var myRect3;
var myRect4;
var myRect5;
var myRect6;
var mycolor1;
var mycolor2;
var mycolor3;
var mycolor4;
var mycolor5;
var mycolor6;


function setup() {
	createCanvas(500,500);
	mycolor1 = color(255,0,140);
	mycolor2 = color(0,144,24);
	mycolor3 = color(25,23,140);
	mycolor4 = color(235,134,214);
	mycolor5 = color(25,0,140);
	mycolor6 = color(34,14,24);





	myRect1 = new Rect(400,100,50,20,1,2,10,5,mycolor1);
	myRect2 = new Rect(100,200,30,60,2,5,2,6,mycolor2);
	myRect3 = new Rect(200,70,10,80,4,3,3,4,mycolor3);
	myRect4 = new Rect(260,230,60,50,5,1,5,1,mycolor4);
	myRect5 = new Rect(300,200,20,60,7,3,12,4,mycolor5);
	myRect6 = new Rect(420,270,30,90,1,5,4,2,mycolor6);

}

function draw() {
  background(200);
  myRect1.displayRect();
  myRect2.displayRect();
  myRect3.displayRect();
  myRect4.displayRect();
  myRect5.displayRect();
  myRect6.displayRect();
 
  myRect1.animate();
  myRect2.animate();
  myRect3.animate();
  myRect4.animate();
  myRect5.animate();
  myRect6.animate();



}


function Rect(xPos, yPos,length,high,Xvelocity,Yvelocity,vellength,velhigh,thiscolor){
	this.x = xPos;
	this.y = yPos;
	this.velx = Xvelocity;
	this.vely = Yvelocity;
	this.length = length;
	this.high = high;
	this.vellength = vellength;
	this.velhigh = velhigh;
	this.color = thiscolor;

	this.displayRect = function(){
		fill(this.color);
		rectMode(CENTER);
		rect(this.x,this.y,this.length,this.high);
	}

	this.animate = function(){
		this.x += this.velx;
		this.y += this.vely;
		this.length += this.vellength;
		this.high += this.velhigh;

		if(this.x < 0 || this.x > 500){
			this.velx *= -1;
		}
		if(this.y < 0 || this.y > 500){
			this.vely *= -1;
		}
		if(this.length < 0 || this.length > 100){
			this.vellength *= -1;
		}
		if(this.high < 0 || this.high > 100){
			this.velhigh *= -1;
		}


	}













};