
var keyImg;
var backButton;
var building;
var door1;//normal state 
var door2;//key appears
var door3;//key can be moved
var door4;
var door5;
var keyboard;
var keyboard2;
var d1 = 0.04;
var d2 = 0.14;
var d3 = 0.04;

var closebutton;
var room1;
var roomhint;
var roomhint2;
var roomnofire;
var roomplate;
var roomstair;
var fire;
var firehint;
var plate;
var waterbottle;
var platehint;

var stateIndex = 0;
var xKey = 990;
var yKey = 720;
var xWater = 925;
var yWater = 560;
var backPosX = 15;
var backPosY = 15;
var backSize = 50;

function preload(){
	backButton = loadImage("assets/back.png");
	keyImg = loadImage("assets/key.png");
	building = loadImage("assets/building1.jpg");
	door1 = loadImage("assets/door1.jpg");
	door2 = loadImage("assets/door2.jpg");
	door3 = loadImage("assets/door3.jpg");
	door4 = loadImage("assets/door4.jpg");
	door5 = loadImage("assets/door5.jpg");
	keyboard = loadImage("assets/keyboard.jpg");
	keyboard2 = loadImage("assets/keyboard2.jpg");

	room1 = loadImage("assets/room1.jpg");
	roomhint = loadImage("assets/roomhint.jpg");
	roomhint2 = loadImage("assets/roomhint2.jpg");
	roomnofire = loadImage("assets/roomnofire.jpg");
	roomplate = loadImage("assets/roomplate.jpg");
	roomstair = loadImage("assets/roomstair.jpg");
	fire = loadImage("assets/fire.jpg");
	firehint = loadImage("assets/firehint.jpg");
	platehint = loadImage("assets/platehint.jpg");
	plate = loadImage("assets/plate.jpg");
	waterbottle = loadImage("assets/water.png");

	


}


function setup() {
	createCanvas(1700,900);
}

function draw() {
	//console.log(mouseX,mouseY);
	//console.log(d1);
	background(200);
	switch(stateIndex){
		case 0:
			introductionPage();
			break;
		case 1:
			buildingPage();
			break;
		case 2: 
			door1Page();
			break;
		case 3:
			door2Page();
			break;
		case 4:
			door2PageKey();
			break;
		case 5:
			buildingPage2();
			break;
		case 6:
			buildingPage3();
			break;
		case 7:
			keyboardPage();
			break;
		case 8:
			keyboardPage2();
			break;
		case 9:
			keyboardPage3();
			break;
		case 10:
			keyboardPage4();
			break;
		case 11:
			keyboardPage5();
			break;
		case 12:
			door4Page();
			break;
		case 13:
			doorOpened();
			break;
		case 14:
			buildingPage4();
			break;
		
			//Part 2

		case 15://inside room
			RoomNormal();
			break;
		case 16://hint 1 about the fire
			RoomHint();
			break;
		case 17://hint 1 about the stair
			RoomHint2();
			break;
		case 18://press the water 
			RoomWaterMove();
			break;
		case 19://press the water 
			RoomNoFire();
			break;
		case 20://fire hint
			RoomFireHint();
			break;
		case 21://fire hint big
			RoomFireHintBig();
			break;
		case 22://room plate appear
			RoomPlate();
			break;
		case 23://room plate appear
			RoomPlateBig();
			break;
		case 24://d1 success
			RoomPlateBig2();
			break;
		case 25://d2 success
			RoomPlateBig3();
			break;
		case 26://d3 success and room plate show that stair is unlocked
			RoomPlateHint();
			break;
		case 27://room where stair is unlocked
			RoomStair();
			break;

		default:
			break;
		}



}
	function introductionPage(){//case0
		text("chesterma0527",width/2,height/2);
	}

	function buildingPage(){//case1
		image(building,0,0,width,height);
	}

	function buildingPage2(){//case5
		image(building,0,0,width,height);
	}

	function buildingPage3(){//case6
		image(building,0,0,width,height);
	}
	function buildingPage4(){//case6
		image(building,0,0,width,height);
	}
	// function buildingPage5(){//case6
	// 	image(building,0,0,width,height);
	// }

	function door1Page(){//frontdoor case2
		image(door1,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function door2Page(){//find the key  case3
		image(door2,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function door2PageKey(){//move the key case4
		image(door3,0,0,width,height);
		image(keyImg,xKey,yKey,30,20);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function door4Page(){//move the key case4
		image(door5,0,0,width,height);
		image(keyImg,xKey,yKey,30,20);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function keyboardPage(){//move the key case4
		image(keyboard,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function keyboardPage2(){//openedkeyboard
		image(keyboard,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function keyboardPage3(){//first key pressed 
		image(keyboard,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}
	function keyboardPage4(){//second key pressed 
		image(keyboard,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}
	function keyboardPage5(){//third key pressed 
		image(keyboard2,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}
	function doorOpened(){//doorisOpened 
		image(door4,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}
	
	

//Part two 


	function RoomNormal(){//room1 
		image(room1,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
		image(waterbottle,935,560,50,68);
	}

	function RoomHint(){//hint about the fire
		image(roomhint,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);

	}

	function RoomHint2(){//hint about the stair
		image(roomhint2,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function RoomWaterMove(){//move the water
		image(room1,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
		image(waterbottle,xWater - 20,yWater - 34 ,50,68);
	}

	function RoomNoFire(){//fire has been put out 
		image(roomnofire,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function RoomFireHint(){//fire with hint
		image(fire,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function RoomFireHintBig(){//bighint
		image(firehint,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function RoomPlate(){//plate appear
		image(roomplate,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}


	function RoomPlateBig(){//plate appear
		image(plate,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
		
		push();
		fill(0);
				push();
				translate(791,450);
				rotate(d1);
			ellipse(-294,-5,20,20);
		pop();
		
		push();
		fill(0);
			push();
				translate(788,450);
				rotate(d2);
			ellipse(-79,-195,20,20);
		pop();
			
		pop();

		push();
		fill(0);
			push();
				translate(788,450);
				rotate(d3);
			ellipse(-4,-116,20,20);
		pop();
			
		pop();
	}

	function RoomPlateBig2(){//plate appear
		image(plate,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
		
		push();
		fill(0);
				push();
				translate(791,450);
				rotate(d1);
			ellipse(-294,-5,20,20);
		pop();
		
		push();
		fill(0);
			push();
				translate(788,450);
				rotate(d2);
			ellipse(-79,-195,20,20);
		pop();
			
		pop();

		push();
		fill(0);
			push();
				translate(788,450);
				rotate(d3);
			ellipse(-4,-116,20,20);
		pop();
			
		pop();
	}
	function RoomPlateBig3(){//plate appear
		image(plate,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
		
		push();
		fill(0);
				push();
				translate(791,450);
				rotate(d1);
			ellipse(-294,-5,20,20);
		pop();
		
		push();
		fill(0);
			push();
				translate(788,450);
				rotate(d2);
			ellipse(-79,-195,20,20);
		pop();
			
		pop();

		push();
		fill(0);
			push();
				translate(788,450);
				rotate(d3);
			ellipse(-4,-116,20,20);
		pop();
			
		pop();
	}




	function RoomPlateHint(){//hint shows that stair is unlocked
		image(platehint,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);



	}

	function RoomStair(){//hint shows that stair is unlocked
		image(roomstair,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);



	}



	function mouseClicked(){
		
		if(stateIndex == 0){//form introduction page into the game
			if(mouseX > 100 && mouseX < 1500 && mouseY > 300 && mouseY < 600){
			stateIndex = 1;
			}
		}



		if(stateIndex == 1){//go to the front door 
			if(mouseX > 578 && mouseX < 740&& mouseY > 400 && mouseY < 486){
			stateIndex = 2;
			}
		}

		if(stateIndex == 2){//go back to the opening page from front door
			if(mouseX > 17 && mouseX < 61 && mouseY > 27 && mouseY < 63){
			stateIndex = 1;
			}
		}

		if(stateIndex == 2){//find the key 
			if(mouseX > 1001 && mouseX < 1058 && mouseY > 656 && mouseY < 739){
			stateIndex = 3;
			}
		}

		if(stateIndex == 3){
			if(mouseX > 17 && mouseX < 61 && mouseY > 27 && mouseY < 63){
			stateIndex = 5;
			}
		}

		if(stateIndex == 5){
			if(mouseX > 578 && mouseX < 740&& mouseY > 400 && mouseY < 486){
			stateIndex = 3;
			}
		}


		if(stateIndex == 3){//move the key
			if(mouseX > 986 && mouseX < 1013 && mouseY > 726 && mouseY < 736){
			stateIndex = 4;
			}
		}

		if(stateIndex == 4){//move the key
			if(mouseX > 17 && mouseX < 61 && mouseY > 27 && mouseY < 63){
			stateIndex = 6;
			}
		}

		if(stateIndex == 6){//move the key
			if(mouseX > 578 && mouseX < 740&& mouseY > 400 && mouseY < 486){
			stateIndex = 4;
			}
		}

		if(stateIndex == 7){//move the key
			if(mouseX > 17 && mouseX < 61 && mouseY > 27 && mouseY < 63){
			stateIndex = 4;
			}
		}

		if(stateIndex == 4){//move the key
			if(mouseX > 478 && mouseX < 513&& mouseY > 410 && mouseY < 457){
			stateIndex = 7;
			}
		}

		if(stateIndex == 4){//move the key
			if(mouseX > 478 && mouseX < 513&& mouseY > 410 && mouseY < 457){
			stateIndex = 8;
			}
		}

		if(stateIndex == 8){//move the key
			if(mouseX > 17 && mouseX < 61 && mouseY > 27 && mouseY < 63){
			stateIndex = 4;
			}
		}

		if(stateIndex == 7){//move the key
			if(mouseX > 694 && mouseX < 806 && mouseY > 382 && mouseY < 478){
			stateIndex = 9;
			}
		}

		if(stateIndex == 9){//move the key
			if(mouseX > 17 && mouseX < 61 && mouseY > 27 && mouseY < 63){
			stateIndex = 4;
			}
		}

		if(stateIndex == 9){//move the key
			if(mouseX > 830 && mouseX < 942 && mouseY > 497 && mouseY < 590){
			stateIndex = 10;
			}
		}
		if(stateIndex == 10){//move the key
			if(mouseX > 17 && mouseX < 61 && mouseY > 27 && mouseY < 63){
			stateIndex = 4;
			}
		}
		if(stateIndex == 10){//move the key
			if(mouseX > 694 && mouseX < 806 && mouseY > 601 && mouseY < 696){
			stateIndex = 11;
			}
		}
		if(stateIndex == 11){//move the key
			if(mouseX > 17 && mouseX < 61 && mouseY > 27 && mouseY < 63){
			stateIndex = 12;
			}
		}

		// if(stateIndex == 13){//move the key
		// 	if(mouseX > 17 && mouseX < 61 && mouseY > 27 && mouseY < 63){
		// 	stateIndex = 15;
		// 	}
		// }

		// if(stateIndex == 15){//move the key
		// 	if(mouseX > 578 && mouseX < 740&& mouseY > 400 && mouseY < 486){
		// 	stateIndex = 13;
		// 	}
		// }

		if(stateIndex == 12){//move the key
			if(mouseX > 485 && mouseX < 502 && mouseY > 410 && mouseY < 430){
			stateIndex = 13;
			}
		}

		if(stateIndex == 13){//from front door to opening page
			if(mouseX > 17 && mouseX < 61 && mouseY > 27 && mouseY < 63){
			stateIndex = 14;
			}
		}

		if(stateIndex == 14){//from opening page to front door
			if(mouseX > 578 && mouseX < 740&& mouseY > 400 && mouseY < 486){
			stateIndex = 13;
			}
		}





		//part two 

		if(stateIndex == 13){//go into the room
			if(mouseX > 600 && mouseX < 965 && mouseY > 218 && mouseY < 695){
			stateIndex = 15;
			}
		}
		if(stateIndex == 15){//fire hint
			if(mouseX > 1067 && mouseX < 1320 && mouseY > 439 && mouseY < 491){
			stateIndex = 16;
			}
		}

		if(stateIndex == 16){//fire hint disappear
			if(mouseX > 1103 && mouseX < 1121 && mouseY > 245 && mouseY < 275){
			stateIndex = 15;
			}
		}
		
		if(stateIndex == 15){//stair hint
			if(mouseX > 861 && mouseX < 994 && mouseY > 301 && mouseY < 493){
			stateIndex = 17;
			}
		}

		if(stateIndex == 17){//stair hint disappear
			if(mouseX > 1103 && mouseX < 1121 && mouseY > 251 && mouseY < 272){
			stateIndex = 15;
			}
		}

		if(stateIndex == 15){//move water
			if(mouseX > 951 && mouseX < 968 && mouseY > 562 && mouseY < 628){
			stateIndex = 18;
			}
		}

		if(stateIndex == 18){//water put out fire
			if(mouseX > 1067 && mouseX < 1320 && mouseY > 439 && mouseY < 491){
			stateIndex = 19;
			}
		}

		if(stateIndex == 19){//fire with hint
			if(mouseX > 1127 && mouseX < 1142 && mouseY > 470 && mouseY < 485){
			stateIndex = 20;
			}
		}

		if(stateIndex == 20){//fire with bighint
			if(mouseX > 389 && mouseX < 489 && mouseY > 546 && mouseY < 590){
			stateIndex = 21;
			}
		}

		if(stateIndex == 21){//go back from firehint to room
			if(mouseX > 17 && mouseX < 61 && mouseY > 20 && mouseY < 63){
			stateIndex = 19;
			}
		}
		if(stateIndex == 20){//go back from firehint to room
			if(mouseX > 17 && mouseX < 61 && mouseY > 20 && mouseY < 63){
			stateIndex = 19;
			}
		}

		if(stateIndex == 19){//go back from firehint to room
			if(mouseX > 1121 && mouseX < 1304 && mouseY > 209 && mouseY < 353){
			stateIndex = 22;
			}
		}

		if(stateIndex == 22){//go to big plate hint
			if(mouseX > 1141 && mouseX < 1229 && mouseY > 233 && mouseY < 313){
			stateIndex = 23;
			}
		}

		if(stateIndex == 23 ){
			console.log(d1);
			console.log(d2);
			console.log(d3);

		if (dist(791,450,mouseX,mouseY) > 237 && dist(791,450,mouseX,mouseY) < 317 ){
			d1 += 0.25;

		}
		if (dist(788,445,mouseX,mouseY) > 147 && dist(788,445,mouseX,mouseY) < 236 ){
			d2 += 0.25;
		}
		if (dist(788,445,mouseX,mouseY) > 61 && dist(788,445,mouseX,mouseY) < 147 ){
			d3 += 0.25;
		}
	
		}

		if(stateIndex == 24 ){
			console.log(d1);
			console.log(d2);
			console.log(d3);

		if (dist(791,450,mouseX,mouseY) > 237 && dist(791,450,mouseX,mouseY) < 317 ){
			d1 += 0.25;

		}
		if (dist(788,445,mouseX,mouseY) > 147 && dist(788,445,mouseX,mouseY) < 236 ){
			d2 += 0.25;
		}
		if (dist(788,445,mouseX,mouseY) > 61 && dist(788,445,mouseX,mouseY) < 147 ){
			d3 += 0.25;
		}
	
		}

		if(stateIndex == 25 ){
			console.log(d1);
			console.log(d2);
			console.log(d3);

		if (dist(791,450,mouseX,mouseY) > 237 && dist(791,450,mouseX,mouseY) < 317 ){
			d1 += 0.25;

		}
		if (dist(788,445,mouseX,mouseY) > 147 && dist(788,445,mouseX,mouseY) < 236 ){
			d2 += 0.25;
		}
		if (dist(788,445,mouseX,mouseY) > 61 && dist(788,445,mouseX,mouseY) < 147 ){
			d3 += 0.25;
		}
	
		}
			

		if(stateIndex == 23){//go back from platehint to room
			if(mouseX > 17 && mouseX < 61 && mouseY > 20 && mouseY < 63){
			stateIndex = 22;
			}
		}

		if(stateIndex == 23){
			if( d1 < 6.05 && d1 >6.03
				){
			stateIndex = 24;
			console.log("yes");

			}
		}

		if(stateIndex == 24){
			if( d2 < 5 && d2 > 4.5 ){
			stateIndex = 25;
			console.log("yes2");
			}
		}

		if(stateIndex == 25){
			if( d3 < 4.6 && d3 > 4.4){
			stateIndex = 26;
			console.log("yes3");
			}
		}

		if(stateIndex == 26){//go back from platehint to room
			if(mouseX > 17 && mouseX < 61 && mouseY > 20 && mouseY < 63){
			stateIndex = 27;
			}
		}



	}

	function mouseDragged(){
		if(stateIndex == 12){
			if(mouseX > 61 && mouseY > 63){
		xKey = mouseX - 10;
		yKey = mouseY;
		}
	}

	if(stateIndex == 18){
			if(mouseX > 61 && mouseY > 63){
		xWater = mouseX 
		yWater = mouseY;
		}
	}

	if(stateIndex == 4){
			if(mouseX > 61 && mouseY > 63){
			
		xKey = mouseX - 10;
		yKey = mouseY;
		}
	}
	}



	