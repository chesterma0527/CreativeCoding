var stateIndex = 14;
var xKey = 970;
var yKey = 820;
var d = 0;
var d1 = 0;
var d2 = 0;
var line3  = "2330";
var myfont1;
var myfont2;
var myfont3;
var introduction0 = "In this game, you are a spy.";
var introduction1 = "You need to slip into the house and find the serect in the safe.";
var introduction2 = "Find the clues in the room and solve the puzzle!";
var s = "Start!"
var c = "CONGRATULATION!!!"
var w = "YOU WIN!!!"
var n1 = "Door is Locked";
var n2 = "Try to find the key";
var n3 = "Adjust The Time";
var n4 = "always remember to turn the turnplate first";


function preload(){
	myfont1 = loadFont("assets/Herculanum.ttf");
	myfont2 = loadFont("assets/Zapfino.ttf");
	myfont3 = loadFont("assets/Verdana.ttf");

}

function setup() {
	createCanvas(1500,1000);
}
function draw() {
	switch(stateIndex){
		case 0://frontDoor
			stateZero();
			break;
		case 2://twoDoors 
			stateTwo();
			break;
		case 3://clock
			stateThree();
			break;
		case 4://rightRoom
			stateFour();
			break;
		case 5://openedFrontDoor(key)
			stateFive();
			break;
		case 6://openedFrontDoor
			stateSix();
			break;
		case 7://leftRoom
			stateSeven();
			break;
		case 8://clock(hints)
			stateEight();
			break;
		case 9:
			stateNine();
			break;
		case 10:
			stateTen();
			break;
		case 11:
			stateEleven();
			break;
		case 12:
			stateTwelve();
			break;
		case 13:
			stateThirteen();
			break;
		case 14:
			introductionPage();
			break;
		case 15:
			note1();
			break;
		case 16:
			note2();
			break;
		case 17:
			note3();
			break;
		default:
			break;

	}
	if(stateIndex == 3){
		if(d > -115 && d < -95 && d2 > 88 && d2 < 92){
			fill(0,250,0);
				ellipse(600,750,60,60);
			push();
			textSize(18);
			fill(50);
				text("Hints!",575,755);
			pop();

		}
	}
    if(stateIndex == 4){
	  if(d1 == 270){
	  	stateIndex = 9;
	}
}


}

function stateZero(){
	background(20,59,119);
	push();
		noStroke();
		fill(46,120,78);//grassColor
		ellipse(26,830,230,260);
		ellipse(90,820,100,100);
		ellipse(198,820,100,100);
		ellipse(120,810,100,90);
		ellipse(270,780,130,130);
		ellipse(220,800,120,120);
		ellipse(1042,800,150,150)
		ellipse(926,830,130,60);
		ellipse(966,830,120,80);
		ellipse(990,820,100,100);
		ellipse(1098,820,100,100);
		ellipse(1120,810,130,90);
		ellipse(1270,780,130,130);
		ellipse(1220,800,120,120);
		ellipse(1120,800,110,100);
		ellipse(1220,810,130,90);
		ellipse(1340,780,140,140);
		ellipse(1420,800,130,130);
		ellipse(1520,800,120,110);

	pop();
	fill(60);
	beginShape();//road
		vertex(291,837);
		vertex(910,837);
		vertex(1000,1000);
		vertex(189,1000);
		vertex(291,837);
	endShape();
	fill(236,239,100);
		ellipse(100,40,250,250);
	push();
		rectMode(CORNER);
		fill(80);
		rect(0,837,1500,200);
		fill(100);
		rect(290,0,620,835)//house
		fill(60);
		beginShape();//road
			vertex(291,837);
			vertex(910,837);
			vertex(1000,1000);
			vertex(189,1000);
			vertex(291,837);
		endShape();
	pop();
	rectMode(CENTER);
	fill(58,40,35,50);
		rect(600,135,110,45);
	push();
	fill(0);
		textSize(20);
		textFont(myfont3);
		text(line3,573,142);
	pop();
	push();
	fill(150);
		rect(600,500,400,550);//door
	noFill();//doorHandle 
		ellipse(750,500,20,20);
	fill(2);//keyHole
		ellipse(752,538,20,20);
		triangle(752,538,742,570,762,570);
		push();//spray
			stroke(44,42,45);
			strokeWeight(3);
			translate(90,49);
			line(909,728,917,710);
			line(917,710,918,696);
			line(918,696,909,683);
		pop();
		push();
		translate(90,49)
		fill(144,90,66);
		rect(910,732,90,15);
		beginShape();
			vertex(875,740);
			vertex(945,740);
			vertex(930,790);
			vertex(890,790);
			vertex(875,740);
		endShape();
		pop();
		push();
			fill(74,157,99);//leafColor
			translate(90,55);
			beginShape();
				vertex(918,696);
				vertex(925,690);
				vertex(926,687);
				vertex(929,698);
				vertex(925,703);
				vertex(919,707);
			endShape();
			beginShape();
				vertex(917,698);
				vertex(911,696);
				vertex(900,693);
				vertex(905,701);
				vertex(911,707);
				vertex(916,709);
			endShape();
		pop();
		push();
			translate(105,50);
			fill(215,56,46);//petalsColor
			ellipse(901,688,13,35);
			ellipse(890,675,35,15);
			ellipse(910,675,35,15);
			ellipse(901,658,13,35);
			fill(242,206,75);//flowerColor
			ellipse(901,676,18,18);
		pop();
		push();
		fill(230);
		rectMode(CORNER);
		rect(350,775,500,25);//stair1
		rect(325,800,550,25);//stair2
		rect(300,825,600,25);//stair3
		pop();

}

function stateTwo(){
	background(208,199,173);
	rectMode(CENTER);
	fill(94,84,92);
		rect(450,552,320,520);
	fill(94,84,92);
		rect(1000,552,320,520);
	fill(150,112,86);//leftDoor
		rect(450,552,300,500);
	fill(146,103,83);//rightDoor
		rect(1000,552,300,500);
	push();
	rectMode(CORNER);
	beginShape();//leftWall
		fill(220,202,141);
		vertex(0,0);
		vertex(0,1000);
		vertex(220,802);
		vertex(220,0);
		vertex(0,0);
	endShape();
	beginShape();//rightWall
		vertex(1500,0);
		vertex(1500,1000);
		vertex(1280,802);
		vertex(1280,0);
		vertex(1500,0);
	endShape();
	beginShape();//ground
		fill(216,204,180);
		vertex(220,802);
		vertex(0,1000);
		vertex(1500,1000);
		vertex(1280,802);
		vertex(220,802);
	endShape();
		pop();
		push();
		noStroke();
		fill(71);
			rect(60,31,50,15);
			triangle(40,17,25,31,40,45);
	pop();
	fill(50);
	ellipse(570,550,20,20);
	ellipse(1120,550,20,20);
}

function stateThree(){//clock
	background(208,199,173);
	push();
		angleMode(DEGREES);
		noFill(0);
		strokeWeight(3);
			ellipse(600,400,400,400);
	pop();
		fill(0);
		ellipse(600,400,8,8);
	push();
			strokeWeight(5);
			translate(600,400);
			rotate(d);
			stroke(0);
			line(0,0,50,0);
	pop();
	push();
			strokeWeight(5);
			translate(600,400);
			rotate(d2);
			stroke(0);
			line(0,0,90,0);
	pop();
	push();
		fill(69)
		noStroke();
		rect(60,31,50,15);
		triangle(40,17,25,31,40,45);

	pop();
	push();
		rectMode(CENTER);
		fill(0);
		rect(600,220,5,25);//12o'clock
		rect(760,400,25,5);//3o'clock
		rect(600,580,5,25);//6o'clock
		rect(440,400,25,5);//9o'clock
	pop();
	push();
		fill(0);
		textFont(myfont1);
		textSize(50);
		text(n3,800,200);
	pop();

}

function stateFour(){//right room
push();
background(208,199,173);
	rectMode(CORNER);
	beginShape();//leftWall
		fill(220,202,141);
		vertex(0,0);
		vertex(0,1000);
		vertex(220,802);
		vertex(220,0);
		vertex(0,0);
	endShape();
	beginShape();//rightWall
		vertex(1500,0);
		vertex(1500,1000);
		vertex(1280,802);
		vertex(1280,0);
		vertex(1500,0);
	endShape();
	beginShape();//ground
		fill(216,204,180);
		vertex(220,802);
		vertex(0,1000);
		vertex(1500,1000);
		vertex(1280,802);
		vertex(220,802);
	endShape();
		pop();

//safeShape
push();
rectMode(CORNER);
  stroke(0);
  fill(100);//safe color
  strokeWeight(2);
  rect(500,300,500,400);
  fill(150);
  rect(520,320,460,360);
 pop();
//turnplateShape
  fill(221);//turnplae color
  ellipse(width/2, height/2,100,100);
  ellipse(width/2, height/2,70,70);
  fill(229,35,35);
  push();
  translate(352,200);
  triangle(400,268,390,280,410,280);
  pop();
  
  push();
  rectMode(CORNER);
  angleMode(DEGREES);
  translate(750,500);
  rotate(d1);
  rect(35,0,15,5);
  pop();

//numberPadShapr
  push();
  rectMode(CORNER);
  fill(200);//number pad color(outer)
  rect(855,455,80,90);
  fill(150);//nuber pad color 
  rect(860,460,70,20);
  rect(860,485,70,55);
  pop();
  push();
    translate(380,200);
    line(503,285, 503,340);
    line(526,285,526,340);
    line(480,303,550,303);
    line(480,321,550,321);
  pop();
  push();
    translate(380,199);
    fill(0);//character color
    textSize(18);//characterize
    textFont(myfont3);
    text("1",486,301);//location of character 1
    text("2",510,301);//location of character 2
    text("3",534,301);//location of character 3
    text("4",486,320);//location of character 4
    text("5",510,320);//location of character 5
    text("6",534,320);//location of character 6
    text("7",486,339);//location of character 7
    text("8",510,339);//location of character 8
    text("9",534,339);//location of character 9
  pop();
  push();
		fill(70);
		noStroke();
		rect(60,31,50,15);
		triangle(40,17,25,31,40,45);
	pop();
   push();
   		fill(250,0,0);
   		ellipse(725,370,10,10);
   		ellipse(775,370,10,10);

   push();
   translate(1000,860);
   fill(254);
   	rotate(17);
   	rect(0,0,80,30);
 		
   pop();
}

function stateFive(){
	background(20,59,119);
	push();
		noStroke();
		fill(46,120,78);//grassColor
		ellipse(26,830,230,260);
		ellipse(90,820,100,100);
		ellipse(198,820,100,100);
		ellipse(120,810,100,90);
		ellipse(270,780,130,130);
		ellipse(220,800,120,120);
		ellipse(1042,800,150,150)
		ellipse(926,830,130,60);
		ellipse(966,830,120,80);
		ellipse(990,820,100,100);
		ellipse(1098,820,100,100);
		ellipse(1120,810,130,90);
		ellipse(1270,780,130,130);
		ellipse(1220,800,120,120);
		ellipse(1120,800,110,100);
		ellipse(1220,810,130,90);
		ellipse(1340,780,140,140);
		ellipse(1420,800,130,130);
		ellipse(1520,800,120,110);
	pop();
	fill(60);
	beginShape();//road
		vertex(291,837);
		vertex(910,837);
		vertex(1000,1000);
		vertex(189,1000);
		vertex(291,837);
	endShape();
	fill(236,239,100);
		ellipse(100,40,250,250);
	push();
		rectMode(CORNER);
		fill(80);
		rect(0,837,1500,200);
		fill(100);
		rect(290,0,620,835)//house
		fill(60);
		beginShape();//road
			vertex(291,837);
			vertex(910,837);
			vertex(1000,1000);
			vertex(189,1000);
			vertex(291,837);
		endShape();
	pop();
	rectMode(CENTER);
	fill(58,40,35,50);
		rect(600,135,110,45);
	push();

	fill(0);
	textFont(myfont3);
		textSize(20);
		text(line3,573,142);
	pop();

	fill(150);
		rect(600,500,400,550);//door
	noFill();//doorHandle 
		ellipse(750,500,20,20);
	fill(2);//keyHole
		ellipse(752,538,20,20);
		triangle(752,538,742,570,762,570);
		push();//spray
			stroke(44,42,45);
			strokeWeight(3);
			translate(90,49);
			line(909,728,917,710);
			line(917,710,918,696);
			line(918,696,909,683);
		pop();
		push();
		translate(90,49)
		fill(144,90,66);
		rect(910,732,90,15);
		beginShape();
			vertex(875,740);
			vertex(945,740);
			vertex(930,790);
			vertex(890,790);
			vertex(875,740);
		endShape();
		pop();
		push();
			fill(74,157,99);//leafColor
			translate(90,55);
			beginShape();
				vertex(918,696);
				vertex(925,690);
				vertex(926,687);
				vertex(929,698);
				vertex(925,703);
				vertex(919,707);
			endShape();
			beginShape();
				vertex(917,698);
				vertex(911,696);
				vertex(900,693);
				vertex(905,701);
				vertex(911,707);
				vertex(916,709);
			endShape();
		pop();
		push();
			translate(105,50);
			fill(215,56,46);//petalsColor
			ellipse(901,688,13,35);
			ellipse(890,675,35,15);
			ellipse(910,675,35,15);
			ellipse(901,658,13,35);
			fill(242,206,75);//flowerColor
			ellipse(901,676,18,18);
		pop();
		push();
		fill(230);
		rectMode(CORNER);
		rect(350,775,500,25);//stair1
		rect(325,800,550,25);//stair2
		rect(300,825,600,25);//stair3
		pop();
	push();
		noStroke();
		fill(255,210,46);
  			ellipse(xKey,yKey-2,25,25);
  			rect(xKey+20,yKey-5,60,10);
  			rect(xKey+52,yKey,8,20);
  			rect(xKey+38,yKey,8,20);
  	pop();
  }

function stateSix(){
background(20,59,119);
	push();
		noStroke();
		fill(46,120,78);//grassColor
		ellipse(26,830,230,260);
		ellipse(90,820,100,100);
		ellipse(198,820,100,100);
		ellipse(120,810,100,90);
		ellipse(270,780,130,130);
		ellipse(220,800,120,120);
		ellipse(1042,800,150,150)
		ellipse(926,830,130,60);
		ellipse(966,830,120,80);
		ellipse(990,820,100,100);
		ellipse(1098,820,100,100);
		ellipse(1120,810,130,90);
		ellipse(1270,780,130,130);
		ellipse(1220,800,120,120);
		ellipse(1120,800,110,100);
		ellipse(1220,810,130,90);
		ellipse(1340,780,140,140);
		ellipse(1420,800,130,130);
		ellipse(1520,800,120,110);
	pop();
	fill(60);
	beginShape();//road
		vertex(291,837);
		vertex(910,837);
		vertex(1000,1000);
		vertex(189,1000);
		vertex(291,837);
	endShape();
	fill(236,239,100);
		ellipse(100,40,250,250);
	push();
		rectMode(CORNER);
		fill(80);
		rect(0,837,1500,200);
		fill(100);
		rect(290,0,620,835)//house
		fill(60);
		beginShape();//road
			vertex(291,837);
			vertex(910,837);
			vertex(1000,1000);
			vertex(189,1000);
			vertex(291,837);
		endShape();
	pop();
	rectMode(CENTER);
	fill(58,40,35,50);
		rect(600,135,110,45);
	push();
	fill(0);
		textFont(myfont3);
		textSize(20);
		text(line3,573,142);
	pop();
	push();
	fill(0);
		rect(600,500,400,550);//door
	noFill();//doorHandle 
		ellipse(750,500,20,20);
	fill(2);//keyHole
		ellipse(752,538,20,20);
		triangle(752,538,742,570,762,570);
		push();//spray
			stroke(44,42,45);
			strokeWeight(3);
			translate(90,49);
			line(909,728,917,710);
			line(917,710,918,696);
			line(918,696,909,683);
		pop();
		push();
		translate(90,49)
		fill(144,90,66);
		rect(910,732,90,15);
		beginShape();
			vertex(875,740);
			vertex(945,740);
			vertex(930,790);
			vertex(890,790);
			vertex(875,740);
		endShape();
		pop();
		push();
			fill(74,157,99);//leafColor
			translate(90,55);
			beginShape();
				vertex(918,696);
				vertex(925,690);
				vertex(926,687);
				vertex(929,698);
				vertex(925,703);
				vertex(919,707);
			endShape();
			beginShape();
				vertex(917,698);
				vertex(911,696);
				vertex(900,693);
				vertex(905,701);
				vertex(911,707);
				vertex(916,709);
			endShape();
		pop();
		push();
			translate(105,50);
			fill(215,56,46);//petalsColor
			ellipse(901,688,13,35);
			ellipse(890,675,35,15);
			ellipse(910,675,35,15);
			ellipse(901,658,13,35);
			fill(242,206,75);//flowerColor
			ellipse(901,676,18,18);
		pop();
		push();
		fill(230);
		rectMode(CORNER);
		rect(350,775,500,25);//stair1
		rect(325,800,550,25);//stair2
		rect(300,825,600,25);//stair3
		pop();
  	fill(150);
  		beginShape();
  			vertex(800,225);
  			vertex(800,775);
  			vertex(680,828);
  			vertex(680,278);
  		endShape();
  	noFill();
  		ellipse(780,490,20,20);
  	fill(0);
  	 	ellipse(780,540,20,20);
  	 	triangle(780,540,770,580,790,570);
  	 push();//key
		noStroke();
		fill(255,210,46);
  			ellipse(780,540-2,25,25);
  			rect(780+20,540-5,60,10);
  			rect(780+52,540,8,20);
  			rect(780+38,540,8,20);
  	pop();
	}

function stateSeven(){//leftroom
	background(210,199,170);
	push();
	rectMode(CORNER);
	beginShape();//leftWall
		fill(220,202,141);
		vertex(0,0);
		vertex(0,1000);
		vertex(220,802);
		vertex(220,0);
		vertex(0,0);
	endShape();
	beginShape();//rightWall
		vertex(1500,0);
		vertex(1500,1000);
		vertex(1280,802);
		vertex(1280,0);
		vertex(1500,0);
	endShape();
	beginShape();//ground
		fill(216,204,180);
		vertex(220,802);
		vertex(0,1000);
		vertex(1500,1000);
		vertex(1280,802);
		vertex(220,802);
	endShape();
		pop();
	push();
		strokeWeight(3);
		fill(220);
			ellipse(350,150,125,125);
	pop();
	fill(250);
	ellipse(350,150,6,6);
	push();
		strokeWeight(3);
		line(350,150,390,152);
		line(350,150,375,150);
	pop();
	push();
		noStroke();
		fill(70);
			rect(60,31,50,15);
			triangle(40,17,25,31,40,45);
	pop();

	push();
		rectMode(CENTER);
		translate(0,90);
		push();
			strokeWeight(8);
			stroke(130);
			fill(133,192,232);//painting
			rect(750,300,500,250);
		pop();
		push();
		noStroke();
		fill(218,91,75);//sunColor
		ellipse(600,280,140,140);//sun
		pop();

		push();
		beginShape();//mountain1
			translate(0,-90);
			noStroke();
			fill(68,152,84);//mountainColor
			vertex(505,512);
			vertex(520,467);
			vertex(538,443);
			vertex(550,426);
			vertex(563,415);
			vertex(579,404);
			vertex(598,406);
			vertex(607,409);
			vertex(626,421);
			vertex(654,435);
			vertex(670,445);
			vertex(689,455);
			vertex(700,465);
			vertex(719,476);
			vertex(742,490);
			vertex(789,512);
			vertex(505,512);
			endShape();
		pop();
		push();
			fill(34,82,51);
			translate(0,-90);
			noStroke();
			beginShape();//mountain 2
			vertex(679,452);
			vertex(702,417);
			vertex(722,410);
			vertex(744,403);
			vertex(773,406);
			vertex(805,412);
			vertex(837,429);
			vertex(863,475);
			vertex(878,501);
			vertex(883,512);
			vertex(761,514);
			vertex(700,486);
			vertex(681,455);
			endShape();
		pop();

		push();
			fill(68,152,84);
			translate(0,-90);
			noStroke();
			beginShape();//mountain 3
			vertex(833,512);
			vertex(839,475);
			vertex(855,448);
			vertex(885,428);
			vertex(908,383);
			vertex(934,365);
			vertex(960,358);
			vertex(978,344);
			vertex(996,336);
			vertex(996,512);
			vertex(833,512);
			endShape();
		pop();

		push();
			fill(255);
			translate(0,-90);
			noStroke();
			beginShape();//cloud1
			vertex(716,335);
			vertex(736,326);
			vertex(749,326);
			vertex(763,321);
			vertex(776,323);
			vertex(788,337);
			vertex(777,348);
			vertex(761,352);
			vertex(742,351);
			vertex(725,348);
			vertex(716,335);
			endShape();
		pop();
		
		push();
			fill(255);
			translate(120,-80);
			noStroke();
			beginShape();//cloud2
			vertex(716,335);
			vertex(736,326);
			vertex(749,326);
			vertex(763,321);
			vertex(776,323);
			vertex(788,337);
			vertex(777,348);
			vertex(761,352);
			vertex(742,351);
			vertex(725,348);
			vertex(716,335);
			endShape();
		pop();





		push();
			fill(217,213,212);
			ellipse(1250,705,110,35);//pellow
			rect(1149,720,320,35)//beizi
			fill(122,85,53);
			rect(960,790,15,60)//leg(left)
			rect(1335,790,15,60)//leg(right)
			rect(1330,660,20,150);//shu
			rect(1145,740,400,40);//heng
		pop();
	
		beginShape();
			strokeWeight(2);
			vertex(197,514);
			vertex(197,605);
			vertex(17,720);
			vertex(17,595);
			vertex(197,514);
		endShape();
	pop();
	push();
	fill(89,58,44);//deskLegs
		rectMode(CORNER);
		rect(116,862,13,80);
		rect(321,862,13,80);
		rect(385,769,13,80);
	pop();
	push();
		translate(0,-50);
		fill(150,112,86);
		rectMode(rectMode);
		rect(225,900,220,25);//desk
		beginShape();
			vertex(116,888);
			vertex(209,800);
			vertex(400,800);
			vertex(335,888);
			vertex(116,888);
		endShape();
		beginShape();
			vertex(335,888);
			vertex(336,913);
			vertex(401,819);
			vertex(401,800);
			vertex(335,888);
		endShape();
	pop();
		line(63,662,63,776);
		line(142,628,142,729);
		line(17,718,196,633);
		line(17,768,196,666);
		push();
		fill(0);
		ellipse(350,150,6,6)
		pop();

}

function stateEight(){//clockroom(hints)
	background(208,199,173);
	push();
		angleMode(DEGREES);
		noFill();
		strokeWeight(3);
			ellipse(600,400,400,400);
	pop();
		fill(0);
		ellipse(600,400,8,8);
	push();
			strokeWeight(5);
			translate(600,400);
			rotate(d);
			stroke(0);
			line(0,0,50,0);
	pop();
	push();
			strokeWeight(5);
			translate(600,400);
			rotate(d2);
			stroke(0);
			line(0,0,90,0);
	pop();
	push();
		fill(69)
		noStroke();
		rect(60,31,50,15);
		triangle(40,17,25,31,40,45);
	pop();
	push();
		noStroke();
		fill(73);
			rect(60,31,50,15);
			triangle(40,17,25,31,40,45);
	pop();
	push();
		rectMode(CENTER);
		fill(0);
		rect(600,220,5,25);//12o'clock
		rect(760,400,25,5);//3o'clock
		rect(600,580,5,25);//6o'clock
		rect(440,400,25,5);//9o'clock
	pop();
	push();
	 fill(0);
	 textSize(40);
		text("1st number = 2/(2/5)",35,250);//clue(number 5)
	  text("2nd number = 4*0.5",600,800);//clue(number 2)
	  text("3rd number = (3+0.5)*2",970,290);//clue(number 7)
	pop();
	}

function stateNine(){
	background(208,199,173);
push();
	rectMode(CORNER);
	beginShape();//leftWall
		fill(220,202,141);
		vertex(0,0);
		vertex(0,1000);
		vertex(220,802);
		vertex(220,0);
		vertex(0,0);
	endShape();
	beginShape();//rightWall
		vertex(1500,0);
		vertex(1500,1000);
		vertex(1280,802);
		vertex(1280,0);
		vertex(1500,0);
	endShape();
	beginShape();//ground
		fill(216,204,180);
		vertex(220,802);
		vertex(0,1000);
		vertex(1500,1000);
		vertex(1280,802);
		vertex(220,802);
	endShape();
		pop();
push();
rectMode(CORNER);
  stroke(0);
  fill(100);//safe color
  strokeWeight(2);
  rect(500,300,500,400);
  fill(150);
  rect(520,320,460,360);
 pop();
//turnplateShape
  fill(221);//turnplae color
  ellipse(width/2, height/2,100,100);
  ellipse(width/2, height/2,70,70);
  fill(229,35,35);
  push();
  translate(352,200);
  triangle(400,268,390,280,410,280);
  pop();
  
  push();
  rectMode(CORNER);
  angleMode(DEGREES);
  translate(750,500);
  rotate(d1);
  rect(35,0,15,5);
  pop();

//numberPadShapr
  push();
  rectMode(CORNER);
  fill(200);//number pad color(outer)
  rect(855,455,80,90);
  fill(150);//nuber pad color 
  rect(860,460,70,20);
  rect(860,485,70,55);
  pop();
  push();
    translate(380,200);
    line(503,285, 503,340);
    line(526,285,526,340);
    line(480,303,550,303);
    line(480,321,550,321);
  pop();
  push();
    translate(380,199);
    fill(0);//character color
    textSize(18);//characterize
    textFont(myfont3);
    text("1",486,301);//location of character 1
    text("2",510,301);//location of character 2
    text("3",534,301);//location of character 3
    text("4",486,320);//location of character 4
    text("5",510,320);//location of character 5
    text("6",534,320);//location of character 6
    text("7",486,339);//location of character 7
    text("8",510,339);//location of character 8
    text("9",534,339);//location of character 9
  pop();
  push();
		fill(68);
		noStroke();
		rect(60,31,50,15);
		triangle(40,17,25,31,40,45);
	pop();
   push();
   		fill(0,245,0);
   		ellipse(725,370,10,10);
   		fill(250,0,0)
   		ellipse(775,370,10,10);

   pop();
      push();
   translate(1000,860);
   fill(254);
   	rotate(17);
   	rect(0,0,80,30);
 		
   pop();
}

function stateTen(){
push();
	rectMode(CORNER);
	beginShape();//leftWall
		fill(220,202,141);
		vertex(0,0);
		vertex(0,1000);
		vertex(220,802);
		vertex(220,0);
		vertex(0,0);
	endShape();
	beginShape();//rightWall
		vertex(1500,0);
		vertex(1500,1000);
		vertex(1280,802);
		vertex(1280,0);
		vertex(1500,0);
	endShape();
	beginShape();//ground
		fill(216,204,180);
		vertex(220,802);
		vertex(0,1000);
		vertex(1500,1000);
		vertex(1280,802);
		vertex(220,802);
	endShape();
		pop();
push();
rectMode(CORNER);
  stroke(0);
  fill(100);//safe color
  strokeWeight(2);
  rect(500,300,500,400);
  fill(150);
  rect(520,320,460,360);
 pop();
//turnplateShape
  fill(221);//turnplae color
  ellipse(width/2, height/2,100,100);
  ellipse(width/2, height/2,70,70);
  fill(229,35,35);
  push();
  translate(352,200);
  triangle(400,268,390,280,410,280);
  pop();
  
  push();
  rectMode(CORNER);
  angleMode(DEGREES);
  translate(750,500);
  rect(0,-50,5,15);
  pop();

//numberPadShapr
  push();
  rectMode(CORNER);
  fill(200);//number pad color(outer)
  rect(855,455,80,90);
  fill(150);//nuber pad color 
  rect(860,460,70,20);
  rect(860,485,70,55);
  pop();
  push();
    translate(380,200);
    line(503,285, 503,340);
    line(526,285,526,340);
    line(480,303,550,303);
    line(480,321,550,321);
  pop();
  push();
    translate(380,199);
    fill(0);//character color
    textSize(18);//characterize
    textFont(myfont3);
    text("1",486,301);//location of character 1
    text("2",510,301);//location of character 2
    text("3",534,301);//location of character 3
    text("4",486,320);//location of character 4
    text("5",510,320);//location of character 5
    text("6",534,320);//location of character 6
    text("7",486,339);//location of character 7
    text("8",510,339);//location of character 8
    text("9",534,339);//location of character 9
  pop();
  push();
		fill(67);
		noStroke();
		rect(60,31,50,15);
		triangle(40,17,25,31,40,45);
	pop();
   push();
   		fill(0,245,0);
   		ellipse(725,370,10,10);
   		fill(250,0,0)
   		ellipse(775,370,10,10);
   pop();
      push();
   translate(1000,860);
   fill(254);
   	rotate(17);
   	rect(0,0,80,30);
 		
   pop();


}

function stateEleven(){
	push();
	rectMode(CORNER);
	beginShape();//leftWall
		fill(220,202,141);
		vertex(0,0);
		vertex(0,1000);
		vertex(220,802);
		vertex(220,0);
		vertex(0,0);
	endShape();
	beginShape();//rightWall
		vertex(1500,0);
		vertex(1500,1000);
		vertex(1280,802);
		vertex(1280,0);
		vertex(1500,0);
	endShape();
	beginShape();//ground
		fill(216,204,180);
		vertex(220,802);
		vertex(0,1000);
		vertex(1500,1000);
		vertex(1280,802);
		vertex(220,802);
	endShape();
		pop();

push();
rectMode(CORNER);
  stroke(0);
  fill(100);//safe color
  strokeWeight(2);
  rect(500,300,500,400);
  fill(150);
  rect(520,320,460,360);
 pop();
//turnplateShape
  fill(221);//turnplae color
  ellipse(width/2, height/2,100,100);
  ellipse(width/2, height/2,70,70);
  fill(229,35,35);
  push();
  translate(352,200);
  triangle(400,268,390,280,410,280);
  pop();
  
  push();
  rectMode(CORNER);
  angleMode(DEGREES);
  translate(750,500);
 rect(0,-50,5,15);
  pop();

//numberPadShapr
  push();
  rectMode(CORNER);
  fill(200);//number pad color(outer)
  rect(855,455,80,90);
  fill(150);//nuber pad color 
  rect(860,460,70,20);
  rect(860,485,70,55);
  pop();
  push();
    translate(380,200);
    line(503,285, 503,340);
    line(526,285,526,340);
    line(480,303,550,303);
    line(480,321,550,321);
  pop();
  push();
    translate(380,199);
    fill(0);//character color
    textSize(18);//characterize
    textFont(myfont3);
    text("1",486,301);//location of character 1
    text("2",510,301);//location of character 2
    text("3",534,301);//location of character 3
    text("4",486,320);//location of character 4
    text("5",510,320);//location of character 5
    text("6",534,320);//location of character 6
    text("7",486,339);//location of character 7
    text("8",510,339);//location of character 8
    text("9",534,339);//location of character 9
  pop();
  push();
		fill(66);
		noStroke();
		rect(60,31,50,15);
		triangle(40,17,25,31,40,45);
	pop();
   push();
   		fill(0,245,0);
   		ellipse(725,370,10,10);
   		fill(250,0,0)
   		ellipse(775,370,10,10);
   pop();
      push();
   translate(1000,860);
   fill(254);
   	rotate(17);
   	rect(0,0,80,30);
 		
   pop();
	
}

function stateTwelve(){
push();
rectMode(CORNER);
  stroke(0);
  fill(100);//safe color
  strokeWeight(2);
  rect(500,300,500,400);
  fill(150);
  rect(520,320,460,360);
 pop();
//turnplateShape
  fill(221);//turnplae color
  ellipse(width/2, height/2,100,100);
  ellipse(width/2, height/2,70,70);
  fill(229,35,35);
  push();
  translate(352,200);
  triangle(400,268,390,280,410,280);
  pop();
  
  push();
  rectMode(CORNER);
  angleMode(DEGREES);
  translate(750,500);
  rect(0,-50,5,15);
  pop();

//numberPadShapr
  push();
  rectMode(CORNER);
  fill(200);//number pad color(outer)
  rect(855,455,80,90);
  fill(150);//nuber pad color 
  rect(860,460,70,20);
  rect(860,485,70,55);
  pop();
  push();
    translate(380,200);
    line(503,285, 503,340);
    line(526,285,526,340);
    line(480,303,550,303);
    line(480,321,550,321);
  pop();
  push();
    translate(380,199);
    fill(0);//character color
    textSize(18);//characterize
    textFont(myfont3);
    text("1",486,301);//location of character 1
    text("2",510,301);//location of character 2
    text("3",534,301);//location of character 3
    text("4",486,320);//location of character 4
    text("5",510,320);//location of character 5
    text("6",534,320);//location of character 6
    text("7",486,339);//location of character 7
    text("8",510,339);//location of character 8
    text("9",534,339);//location of character 9
    pop();
    push();
		fill(65);
		noStroke();
		rect(60,31,50,15);
		triangle(40,17,25,31,40,45);
	pop();
    push();
   		fill(0,245,0);
   		ellipse(725,370,10,10);
   		ellipse(775,370,10,10);

    pop();
    push();
		fill(152,214,93);
		noStroke();
		triangle(1143,509,1143,553,1163,531);
		translate(1050,500);
		rect(60,31,70,20);
    pop();
       push();
   translate(1000,860);
   fill(254);
   	rotate(17);
   	rect(0,0,80,30);
 		
   pop();
	
}

function stateThirteen(){
	background(249,213,84);
	push();
	textFont(myfont2);
	textSize(65);
	text(c,60,450);
	text(w,400,800);
	pop();
}

function introductionPage(){
background(17,29,92);
textSize(60);
textFont(myfont1);
fill(223,219,116);
text(introduction0,350,200,1000,200);
text(introduction1,300,400,1000,400);
text(introduction2,300,600,1000,600);
push();
rectMode(CENTER);
rect(750,860,250,100);
pop();
push();
fill(17,29,92);
textSize(50);
textFont(myfont1);
text(s,670,872);
pop();

}

function note1(){
	background(20,59,119);
	push();
		noStroke();
		fill(46,120,78);//grassColor
		ellipse(26,830,230,260);
		ellipse(90,820,100,100);
		ellipse(198,820,100,100);
		ellipse(120,810,100,90);
		ellipse(270,780,130,130);
		ellipse(220,800,120,120);
		ellipse(1042,800,150,150)
		ellipse(926,830,130,60);
		ellipse(966,830,120,80);
		ellipse(990,820,100,100);
		ellipse(1098,820,100,100);
		ellipse(1120,810,130,90);
		ellipse(1270,780,130,130);
		ellipse(1220,800,120,120);
		ellipse(1120,800,110,100);
		ellipse(1220,810,130,90);
		ellipse(1340,780,140,140);
		ellipse(1420,800,130,130);
		ellipse(1520,800,120,110);

	pop();
	fill(60);
	beginShape();//road
		vertex(291,837);
		vertex(910,837);
		vertex(1000,1000);
		vertex(189,1000);
		vertex(291,837);
	endShape();
	fill(236,239,100);
		ellipse(100,40,250,250);
	push();
		rectMode(CORNER);
		fill(80);
		rect(0,837,1500,200);
		fill(100);
		rect(290,0,620,835)//house
		fill(60);
		beginShape();//road
			vertex(291,837);
			vertex(910,837);
			vertex(1000,1000);
			vertex(189,1000);
			vertex(291,837);
		endShape();
	pop();
	rectMode(CENTER);
	fill(58,40,35,50);
		rect(600,135,110,45);
	push();
	fill(0);
		textFont(myfont3,573,142);
		textSize(20);
		push();
	fill(0);
		textSize(20);
		textFont(myfont3);
		text(line3,573,142);
	pop();

	fill(150);
		rect(600,500,400,550);//door
	noFill();//doorHandle 
		ellipse(750,500,20,20);
	fill(2);//keyHole
		ellipse(752,538,20,20);
		triangle(752,538,742,570,762,570);
		push();//spray
			stroke(44,42,45);
			strokeWeight(3);
			translate(90,49);
			line(909,728,917,710);
			line(917,710,918,696);
			line(918,696,909,683);
		pop();
		push();
		translate(90,49)
		fill(144,90,66);
		rect(910,732,90,15);
		beginShape();
			vertex(875,740);
			vertex(945,740);
			vertex(930,790);
			vertex(890,790);
			vertex(875,740);
		endShape();
		pop();
		push();
			fill(74,157,99);//leafColor
			translate(90,55);
			beginShape();
				vertex(918,696);
				vertex(925,690);
				vertex(926,687);
				vertex(929,698);
				vertex(925,703);
				vertex(919,707);
			endShape();
			beginShape();
				vertex(917,698);
				vertex(911,696);
				vertex(900,693);
				vertex(905,701);
				vertex(911,707);
				vertex(916,709);
			endShape();
		pop();
		push();
			translate(105,50);
			fill(215,56,46);//petalsColor
			ellipse(901,688,13,35);
			ellipse(890,675,35,15);
			ellipse(910,675,35,15);
			ellipse(901,658,13,35);
			fill(242,206,75);//flowerColor
			ellipse(901,676,18,18);
		pop();
		push();
		fill(230);
		rectMode(CORNER);
		rect(350,775,500,25);//stair1
		rect(325,800,550,25);//stair2
		rect(300,825,600,25);//stair3
		pop();
		
		push();
			fill(255);
			rectMode(CENTER);
			rect(600,500,300,400);
		pop();
		push();
			fill(0);
			textFont(myfont1);
			textSize(25);
			translate(190,200);
			text(n1,650,500,700,500);
			text(n2,650,650,700,650);
			fill(240,0,0);
			rect(540,120,20,20);
		pop();
		push();
		fill(0);
		strokeWeight(2);
		line(721,311,738,330);
		line(721,330,738,311);
		pop();
}
function note2(){
	push();
background(208,199,173);
	rectMode(CORNER);
	beginShape();//leftWall
		fill(220,202,141);
		vertex(0,0);
		vertex(0,1000);
		vertex(220,802);
		vertex(220,0);
		vertex(0,0);
	endShape();
	beginShape();//rightWall
		vertex(1500,0);
		vertex(1500,1000);
		vertex(1280,802);
		vertex(1280,0);
		vertex(1500,0);
	endShape();
	beginShape();//ground
		fill(216,204,180);
		vertex(220,802);
		vertex(0,1000);
		vertex(1500,1000);
		vertex(1280,802);
		vertex(220,802);
	endShape();
		pop();

//safeShape
push();
rectMode(CORNER);
  stroke(0);
  fill(100);//safe color
  strokeWeight(2);
  rect(500,300,500,400);
  fill(150);
  rect(520,320,460,360);
 pop();
//turnplateShape
  fill(221);//turnplae color
  ellipse(width/2, height/2,100,100);
  ellipse(width/2, height/2,70,70);
  fill(229,35,35);
  push();
  translate(352,200);
  triangle(400,268,390,280,410,280);
  pop();
  
  push();
  rectMode(CORNER);
  angleMode(DEGREES);
  translate(750,500);
  rotate(d1);
  rect(35,0,15,5);
  pop();

//numberPadShapr
  push();
  rectMode(CORNER);
  fill(200);//number pad color(outer)
  rect(855,455,80,90);
  fill(150);//nuber pad color 
  rect(860,460,70,20);
  rect(860,485,70,55);
  pop();
  push();
    translate(380,200);
    line(503,285, 503,340);
    line(526,285,526,340);
    line(480,303,550,303);
    line(480,321,550,321);
  pop();
  push();
    translate(380,199);
    fill(0);//character color
    textSize(18);//characterize
    textFont(myfont3);
    text("1",486,301);//location of character 1
    text("2",510,301);//location of character 2
    text("3",534,301);//location of character 3
    text("4",486,320);//location of character 4
    text("5",510,320);//location of character 5
    text("6",534,320);//location of character 6
    text("7",486,339);//location of character 7
    text("8",510,339);//location of character 8
    text("9",534,339);//location of character 9
  pop();
  push();
		fill(70);
		noStroke();
		rect(60,31,50,15);
		triangle(40,17,25,31,40,45);
	pop();
   push();
   		fill(250,0,0);
   		ellipse(725,370,10,10);
   		ellipse(775,370,10,10);

   	push();
   		translate(750,600);
   		rectMode(CENTER);
   		fill(253);
   		rotate(5);
   		rect(0,0,400,90);
   		textFont(myfont2);
   		fill(0);
   		textSize(14);
   		text(n4,-170,12);
   	pop();


}
function note3(){
	push();
background(208,199,173);
	rectMode(CORNER);
	beginShape();//leftWall
		fill(220,202,141);
		vertex(0,0);
		vertex(0,1000);
		vertex(220,802);
		vertex(220,0);
		vertex(0,0);
	endShape();
	beginShape();//rightWall
		vertex(1500,0);
		vertex(1500,1000);
		vertex(1280,802);
		vertex(1280,0);
		vertex(1500,0);
	endShape();
	beginShape();//ground
		fill(216,204,180);
		vertex(220,802);
		vertex(0,1000);
		vertex(1500,1000);
		vertex(1280,802);
		vertex(220,802);
	endShape();
		pop();

//safeShape
push();
rectMode(CORNER);
  stroke(0);
  fill(100);//safe color
  strokeWeight(2);
  rect(500,300,500,400);
  fill(150);
  rect(520,320,460,360);
 pop();
//turnplateShape
  fill(221);//turnplae color
  ellipse(width/2, height/2,100,100);
  ellipse(width/2, height/2,70,70);
  fill(229,35,35);
  push();
  translate(352,200);
  triangle(400,268,390,280,410,280);
  pop();
  
  push();
  rectMode(CORNER);
  angleMode(DEGREES);
  translate(750,500);
  rotate(d1);
  rect(35,0,15,5);
  pop();

//numberPadShapr
  push();
  rectMode(CORNER);
  fill(200);//number pad color(outer)
  rect(855,455,80,90);
  fill(150);//nuber pad color 
  rect(860,460,70,20);
  rect(860,485,70,55);
  pop();
  push();
    translate(380,200);
    line(503,285, 503,340);
    line(526,285,526,340);
    line(480,303,550,303);
    line(480,321,550,321);
  pop();
  push();
    translate(380,199);
    fill(0);//character color
    textSize(18);//characterize
    textFont(myfont3);
    text("1",486,301);//location of character 1
    text("2",510,301);//location of character 2
    text("3",534,301);//location of character 3
    text("4",486,320);//location of character 4
    text("5",510,320);//location of character 5
    text("6",534,320);//location of character 6
    text("7",486,339);//location of character 7
    text("8",510,339);//location of character 8
    text("9",534,339);//location of character 9
  pop();
  push();
		fill(70);
		noStroke();
		rect(60,31,50,15);
		triangle(40,17,25,31,40,45);
	pop();
   push();
   		fill(0,250,0);
   		ellipse(725,370,10,10);
   		fill(250,0,0);
   		ellipse(775,370,10,10);

   	push();
   		translate(750,600);
   		rectMode(CENTER);
   		fill(253);
   		rotate(5);
   		rect(0,0,400,90);
   		textFont(myfont2);
   		fill(0);
   		textSize(14);
   		text(n4,-170,12);
   	pop();


}



function mouseClicked(){
	if(stateIndex == 0){
		var c1 = get(mouseX,mouseY);
		if(green(c1) == 150){
			stateIndex = 15;

		}
		}
	if(stateIndex == 0){
		var c0 = get(mouseX,mouseY);
		if(green(c0) == 2){
			stateIndex = 15;
		}
		}
	if(stateIndex == 15){
		var c0 = get(mouseX,mouseY);
		if(red(c0) == 240){
			stateIndex = 0;
		}
		}

	if(stateIndex == 14){
		var c0 = get(mouseX,mouseY);
		if(green(c0) == 219){
			stateIndex = 0;
		}
		}
	if(stateIndex == 1){
		var c1 = get(mouseX,mouseY);
		if(green(c1) == 175){
			stateIndex = 2;
		}
		}
	if(stateIndex == 2){
		var c2 = get(mouseX,mouseY);
		if(green(c2) == 112){
			stateIndex = 7;
		}
		}
	if(stateIndex == 2){
		var c3 = get(mouseX,mouseY);
		if(green(c3) == 103){
			stateIndex = 4;
		}
		}
	if(stateIndex == 3){
		var c4 = get(mouseX,mouseY);
		if(green(c4) == 69){
			stateIndex = 7;
		}
		}
	if(stateIndex == 4){
		var c5 = get(mouseX,mouseY);
		if(green(c5) == 70){
			stateIndex = 2;
		}
		}
	if(stateIndex == 0){
		var c6 = get(mouseX,mouseY);
		if(green(c6) == 90){
			stateIndex = 5;
		}
		}
	if(stateIndex == 6){
		var c8 = get(mouseX,mouseY);
		if(green(c8) == 0){
			stateIndex = 2;
		}
		}
	if(stateIndex == 2){
		var c9 = get(mouseX,mouseY);
		if(green(c9) == 71){
			stateIndex = 6;
		}
		}
	if(stateIndex == 9){
		var c9 = get(mouseX,mouseY);
		if(green(c9) == 254){
			stateIndex = 17;
		}
		}
	if(stateIndex == 7){
		if(mouseX > 225 && mouseX < 475 && mouseY > 25 && mouseY < 275){
			stateIndex = 3;
		}
		}
	if(stateIndex == 7){
		var c10 = get(mouseX,mouseY);
		if(green(c10) == 70){
			stateIndex = 2;
		}
		}
	if(stateIndex == 3){
		var c11 = get(mouseX,mouseY);
		if(green(c11) == 250){
			stateIndex = 8;
		}
		}
	if(stateIndex == 8){
		var c12 = get(mouseX,mouseY);
		if(green(c12) == 73){
			stateIndex = 7;
		}
		}
	if(stateIndex == 9){
		var c13 = get(mouseX,mouseY);
		if(green(c13) == 68){
			stateIndex = 2;
		}
		}
	if(stateIndex == 10){
		var c14 = get(mouseX,mouseY);
		if(green(c14) == 67){
			stateIndex = 2;
		}
		}
	if(stateIndex == 11){
		var c15 = get(mouseX,mouseY);
		if(green(c15) == 66){
			stateIndex = 2;
		}
		}
	if(stateIndex == 12){
		var c16 = get(mouseX,mouseY);
		if(green(c16) == 65){
			stateIndex = 2;
		}
		}
	if(stateIndex == 12){
		var c17 = get(mouseX,mouseY);
		if(green(c17) == 214){
			stateIndex = 13;
		}
		}
	if(stateIndex == 4){
		var c17 = get(mouseX,mouseY);
		if(green(c17) == 254){
			stateIndex = 16;
		}
		}
	if(stateIndex == 16){
		var c17 = get(mouseX,mouseY);
		if(green(c17) == 199){
			stateIndex = 4;
		}
		}
	if(stateIndex == 16){
		var c17 = get(mouseX,mouseY);
		if(green(c17) == 202){
			stateIndex = 4;
		}
		}
	if(stateIndex == 16){
		var c17 = get(mouseX,mouseY);
		if(green(c17) == 204){
			stateIndex = 4;
		}
		}
	if(stateIndex == 16){
		var c17 = get(mouseX,mouseY);
		if(green(c17) == 150){
			stateIndex = 4;
		}
		}
	if(stateIndex == 16){
		var c17 = get(mouseX,mouseY);
		if(green(c17) == 221){
			stateIndex = 4;
		}
		}
	if(stateIndex == 17){
		var c17 = get(mouseX,mouseY);
		if(green(c17) == 221){
			stateIndex = 9;
		}
		}
	if(stateIndex == 17){
		var c17 = get(mouseX,mouseY);
		if(green(c17) == 202){
			stateIndex = 9;
		}
		}
	if(stateIndex == 17){
		var c17 = get(mouseX,mouseY);
		if(green(c17) == 204){
			stateIndex = 9;
		}
		}
	if(stateIndex == 17){
		var c17 = get(mouseX,mouseY);
		if(green(c17) == 199){
			stateIndex = 9;
		}
		}
	if(stateIndex == 10){
		var c17 = get(mouseX,mouseY);
		if(green(c17) == 254){
			stateIndex = 17;
		}
		}
	if(stateIndex == 11){
		var c17 = get(mouseX,mouseY);
		if(green(c17) == 254){
			stateIndex = 17;
		}
		}	

	if(stateIndex ==4){
		if(mouseX > 700 && mouseX < 800 && mouseY > 455 && mouseY <548){

	d1=d1+18;
		}
		} 
	if(stateIndex == 9){
		if(mouseX > 882 && mouseX < 906 && mouseY > 504 && mouseY <522){
			stateIndex = 10;
		}
		}
	if(stateIndex == 10){
		if(mouseX > 882 && mouseX < 906 && mouseY > 487 && mouseY <504){
			stateIndex = 11;
		}
		}
	if(stateIndex == 11){
		if(mouseX > 860 && mouseX < 882 && mouseY > 522 && mouseY <539){
			stateIndex = 12;
		}
		}

}

	

function mouseDragged(){
	if(stateIndex == 5){
		xKey = mouseX;
		yKey = mouseY;
	}
	if(stateIndex == 5){
		if(mouseX > 743 && mouseX < 761 && mouseY > 530 && mouseY < 554){
			stateIndex = 6;
		}
	}
	if(dist(600,400,mouseX,mouseY) < 65){
 		d = atan2(mouseY - 850 / 2, mouseX - 1200 / 2);
 
	}
	if(dist(600,400,mouseX,mouseY) > 68 && dist(600,400,mouseX,mouseY) < 300){
 		d2 = atan2(mouseY - 850 / 2, mouseX - 1200 / 2);
 
	}
}





