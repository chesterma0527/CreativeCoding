
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

var softmusic;
var locksound;
var firesound;
var click;
var catsound;

var introduction1;
var introduction2;
var introduction3;
var introduction4;
var endingpage;

var firsthint;
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
var catawayhint;


var pianoroom;
var cathint;
var pianohint;
var pianohint2;
var pillowmove;
var nocat;
var catnote;
var fish;
var downarrow;
var rightarrow;

var power;
var powerpassword;
var powerpasswordhint;
var powerpasswordhint2;
var pianoopen;
var pianoplaying;
var pianopotion;
var buttonsound;
var buttonsound2;

var dou;
var re;
var mi;
var fa;
var so;
var la;

var stateIndex = 0;
var xKey = 990;
var yKey = 720;
var xWater = 925;
var yWater = 560;
var backPosX = 15;
var backPosY = 15;
var backSize = 50;
var xfish = 378;
var yfish = 649;

function preload(){
	
	firsthint = loadImage("assets/firsthint.jpg");
	backButton = loadImage("assets/back.png");
	downarrow = loadImage("assets/downarrow.png");
	rightarrow = loadImage("assets/rightarrow.png");
	keyImg = loadImage("assets/key.png");
	building = loadImage("assets/building1.jpg");
	door1 = loadImage("assets/door1.jpg");
	door2 = loadImage("assets/door2.jpg");
	door3 = loadImage("assets/door3.jpg");
	door4 = loadImage("assets/door4.jpg");
	door5 = loadImage("assets/door5.jpg");
	keyboard = loadImage("assets/keyboard.jpg");
	keyboard2 = loadImage("assets/keyboard2.jpg");
	catawayhint = loadImage("assets/catawayhint.jpg");
	introduction1 = loadImage("assets/introduction1.jpg");
	introduction2 = loadImage("assets/introduction2.jpg");
	introduction3 = loadImage("assets/introduction3.jpg");
	introduction4 = loadImage("assets/introduction4.jpg");
	endingpage = loadImage("assets/ending.jpg");

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

	pianoroom = loadImage("assets/pianoroom.jpg");
	cathint = loadImage("assets/cathint.jpg");
	pianohint = loadImage("assets/pianohint.jpg");
	pianohint2 = loadImage("assets/pianohint2.jpg");
	pillowmove = loadImage("assets/pillowmove.jpg");
	nocat = loadImage("assets/nocat.jpg");
	catnote = loadImage("assets/catnote.jpg");
	fish = loadImage("assets/fish.png");

	power = loadImage("assets/power.jpg");
	powerpassword = loadImage("assets/powerpassword.jpg");
	powerpasswordhint = loadImage("assets/powerpasswordhint.jpg");
	powerpasswordhint2 = loadImage("assets/powerpasswordhint2.jpg");
	pianoopen = loadImage("assets/pianoopen.jpg");
	pianoplaying = loadImage("assets/pianoplaying.jpg");
	pianopotion = loadImage("assets/pianopotion.jpg");

	dou = loadSound("assets/do.mp3");
	re = loadSound("assets/re.mp3");
	mi = loadSound("assets/mi.mp3");
	fa = loadSound("assets/fa.mp3");
	so = loadSound("assets/so.mp3");
	la = loadSound("assets/la.mp3");
	catsound = loadSound("assets/catsound.mp3");
	click = loadSound("assets/click.mp3");
	firesound = loadSound("assets/firesound.mp3");
	locksound = loadSound("assets/locksound.mp3");
	buttonsound = loadSound("assets/buttonsound.mp3");
	buttonsound2 = loadSound("assets/buttonsound2.mp3");


	

	


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
			introductionPage1();
			break;
		case 65:
			introductionPage2();
			break;
		case 66:
			introductionPage3();
			break;
		case 67:
			introductionPage4();
			break;
		case 68:
			EndingPage();
			break;
		case 1:
			buildingPage();
			break;
		case 63:
			buildingPageFirstHint();
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




			//part 3 

		case 28://
			PianoRoomNormal();
			break;
		case 29://
			PianoRoomCatHint();
			break;
		case 30://
			PianoRoomPianoHint();
			break;
		case 31://
			PianoRoomPillowMove();
			break;
		case 32://
			PianoRoomMoveFish();
			break;
		case 33://
			PianoRoomNoCat();
			break;
		case 34://
			PianoRoomCatNote();
			break;
		case 35://
			PianoRoomPianoHint2();
			break;




			//part four 
		case 36://
			RoomState2();
			break;
		case 37://
			DoorState2();
			break;
		case 38://
			BuildingState2();
			break;
		case 39://
			Power();
			break;
		case 40://
			PowerPassword();
			break;
		case 41://
			PowerPasswordHint();
			break;
		case 42://
			PowerPasswordHint2();
			break;
		case 43://“1”
			PowerPassword1();
			break;
		case 44://“1”
			PowerPassword2();
			break;
		case 45://“3”
			PowerPassword3();
			break;
		case 53://“8”
			PowerPassword4();
			break;
		case 46://
			BuildingState3();
			break;
		case 47://
			RoomisOpened2();
			break;
		case 48://
			RoomStair2();
			break;
		case 49://
			Fire2();
			break;
		case 50://
			FireHint2();
			break;	
		case 51://
			PianoOpen();
			break;
		
//playing piano

		case 54://
			PianoPlaying1();
			break;
		case 55://
			PianoPlaying2();
			break;
		case 56://
			PianoPlaying3();
			break;
		case 57://
			PianoPlaying4();
			break;
		case 58://
			PianoPlaying5();
			break;
		case 59://
			PianoPlaying6();
			break;
		case 60://
			PianoPlaying7();
			break;
		case 61://
			PianoPlaying8();
			break;
		case 62://
			PianoPotion();
			break;
		case 64://
			CatAwayHint();
			break;


		default:
			break;
		}



}
	function introductionPage1(){//case0
		image(introduction1,0,0,width,height);
		image(rightarrow,1550,450,100,100);

	}
	function introductionPage2(){//case0
		image(introduction2,0,0,width,height);
		image(downarrow,750,800,100,100);

	}
	function introductionPage3(){//case0
		image(introduction3,0,0,width,height);
		image(rightarrow,1550,450,100,100);

	}
	function introductionPage4(){//case0
		image(introduction4,0,0,width,height);
		image(downarrow,750,800,100,100);

	}

	function buildingPage(){//case1
		image(building,0,0,width,height);
	}

	function buildingPageFirstHint(){//
		image(firsthint,0,0,width,height);
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
		//image(backButton,backPosX,backPosY,backSize,backSize);
		image(waterbottle,935,560,50,68);
	}

	function RoomHint(){//hint about the fire
		image(roomhint,0,0,width,height);
		//image(backButton,backPosX,backPosY,backSize,backSize);

	}

	function RoomHint2(){//hint about the stair
		image(roomhint2,0,0,width,height);
		//image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function RoomWaterMove(){//move the water
		image(room1,0,0,width,height);
		//image(backButton,backPosX,backPosY,backSize,backSize);
		image(waterbottle,xWater ,yWater ,50,68);
	}

	function RoomNoFire(){//fire has been put out 
		image(roomnofire,0,0,width,height);
		//image(backButton,backPosX,backPosY,backSize,backSize);
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
		//image(backButton,backPosX,backPosY,backSize,backSize);
	}


	function RoomPlateBig(){//plate appear
		image(plate,0,0,width,height);
		//image(backButton,backPosX,backPosY,backSize,backSize);
		
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
		//image(backButton,backPosX,backPosY,backSize,backSize);
		
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
		//image(backButton,backPosX,backPosY,backSize,backSize);
		
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
		//image(backButton,backPosX,backPosY,backSize,backSize);

	}

	function PianoRoomNormal(){//piano room
		image(pianoroom,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function PianoRoomCatHint(){//cat hint
		image(cathint,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function PianoRoomPianoHint(){//pianohint
		image(pianohint,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function PianoRoomPillowMove(){//the fish appear
		image(pillowmove,0,0,width,height);
		image(fish,378,649,60,40);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function PianoRoomMoveFish(){//move the fish
		image(pillowmove,0,0,width,height);
		image(fish,xfish, yfish,60,40);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function PianoRoomNoCat(){//move the fish
		image(nocat,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function PianoRoomCatNote(){//move the fish
		image(catnote,0,0,width,height);
		//image(backButton,backPosX,backPosY,backSize,backSize);
	}
	
	function PianoRoomPianoHint2(){//pianohint
		image(pianohint2,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function RoomState2(){//go back to room
		image(roomstair,0,0,width,height);
		//image(backButton,backPosX,backPosY,backSize,backSize);
		image(rightarrow,1600,450,50,50);
	}

	function DoorState2(){//go back to door
		image(door4,0,0,width,height);
		image(downarrow,770,810,50,50);
		//image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function BuildingState2(){//go back to building
		image(building,0,0,width,height);
	}

	function Power(){//go the power supply
		image(power,0,0,width,height);
	}

	function PowerPassword(){//go the power supply
		image(powerpassword,0,0,width,height);

	}

	function PowerPasswordHint(){//go the power supply
		image(powerpasswordhint,0,0,width,height);

	}

	function PowerPasswordHint2(){//go the power supply
		image(powerpasswordhint2,0,0,width,height);
	}

	function PowerPassword1(){//
		image(powerpassword,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}
	function PowerPassword2(){//
		image(powerpassword,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}
	function PowerPassword3(){//
		image(powerpassword,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function PowerPassword4(){//
		image(powerpassword,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function BuildingState3(){//
		image(building,0,0,width,height);

	}

	function RoomisOpened2(){//
		image(door4,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function RoomStair2(){//
		image(roomstair,0,0,width,height);
	}

	function Fire2(){//
		image(fire,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function FireHint2(){//
		image(firehint,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function FireHint2(){//
		image(firehint,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function PianoOpen(){//
		image(pianoopen,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function PianoPlaying1(){//
		image(pianoplaying,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function PianoPlaying2(){//
		image(pianoplaying,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function PianoPlaying3(){//
		image(pianoplaying,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function PianoPlaying4(){//
		image(pianoplaying,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function PianoPlaying5(){//
		image(pianoplaying,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function PianoPlaying6(){//
		image(pianoplaying,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function PianoPlaying7(){//
		image(pianoplaying,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function PianoPlaying8(){//
		image(pianoplaying,0,0,width,height);
		image(backButton,backPosX,backPosY,backSize,backSize);
	}

	function PianoPotion(){
		image(pianopotion,0,0,width,height);

	}
	
	function CatAwayHint(){
		image(catawayhint,0,0,width,height);

	}

	function EndingPage(){
		image(endingpage,0,0,width,height);

	}













	function mouseClicked(){
		
		if(stateIndex == 0){//form introduction page into the game
			if(mouseX > 1575 && mouseX < 1644 && mouseY > 460 && mouseY < 540){
			buttonsound2.play();
			stateIndex = 65;
			}
		}

		if(stateIndex == 65){//form introduction page into the game
			if(mouseX > 755 && mouseX < 848 && mouseY > 823 && mouseY < 875){
			stateIndex = 66;
			buttonsound2.play();
			}
		}

		if(stateIndex == 66){//form introduction page into the game
			if(mouseX > 1575 && mouseX < 1644 && mouseY > 460 && mouseY < 540){
			stateIndex = 67;
			buttonsound2.play();
			}
		}

		if(stateIndex == 67){//form introduction page into the game
			if(mouseX > 755 && mouseX < 848 && mouseY > 823 && mouseY < 875){
			stateIndex = 1;
			buttonsound2.play();
			}
		}

		if(stateIndex == 1){//form introduction page into the game
			if(mouseX > 1080 && mouseX < 1109 && mouseY > 615 && mouseY < 656){
			stateIndex = 63;
			}
		}

		if(stateIndex == 63){//form introduction page into the game
			if(mouseX > 1162 && mouseX < 1188 && mouseY > 266 && mouseY < 290){
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
			buttonsound.play();
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
			buttonsound.play();
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
			buttonsound.play();
			stateIndex = 11;
			}
		}
		if(stateIndex == 11){//move the key
			if(mouseX > 17 && mouseX < 61 && mouseY > 27 && mouseY < 63){
			stateIndex = 12;
			}
		}

		if(stateIndex == 12){//move the key
			if(mouseX > 485 && mouseX < 502 && mouseY > 410 && mouseY < 430){
			locksound.play();
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
			click.play();
			stateIndex = 26;
			console.log("yes3");
			}
		}

		if(stateIndex == 26){//go back from platehint to room
			if(mouseX > 17 && mouseX < 61 && mouseY > 20 && mouseY < 63){
			stateIndex = 27;
			}
		}

		if(stateIndex == 27){//go to pianoroom 
			if(mouseX > 861 && mouseX < 994 && mouseY > 301 && mouseY < 493){
			stateIndex = 28;
			}
		}

		if(stateIndex == 28){//get cathint
			if(mouseX > 323 && mouseX < 405 && mouseY > 631 && mouseY < 773){
			stateIndex = 29;
			catsound.play();
			}
		}

		if(stateIndex == 29){//close cathint
			if(mouseX > 1168 && mouseX < 1191 && mouseY > 231 && mouseY < 258){
			stateIndex = 28;
			}
		}


		if(stateIndex == 28){//get pianohint
			if(mouseX > 545 && mouseX < 854 && mouseY > 496 && mouseY < 573){
			stateIndex = 30;
			}
		}
		if(stateIndex == 30){//close pianohint
			if(mouseX > 1168 && mouseX < 1191 && mouseY > 231 && mouseY < 258){
			stateIndex = 28;
			}
		}

		if(stateIndex == 28){//move the pillow
			if(mouseX > 375 && mouseX < 443 && mouseY > 600 && mouseY < 688){
			stateIndex = 31;
			}
		}

		if(stateIndex == 31){//move the fish
			if(mouseX > 382 && mouseX < 436 && mouseY > 665 && mouseY < 679){
			stateIndex = 32;
			}
		}
		
		if(stateIndex == 32){//cat disappear
			if(mouseX > 323 && mouseX < 382 && mouseY > 631 && mouseY < 773){
			stateIndex = 64;
			catsound.play();
			}
		}

		if(stateIndex == 64){//cat disappear
			if(mouseX > 1168 && mouseX < 1191 && mouseY > 231 && mouseY < 258){
			stateIndex = 33;
			}
		}

		if(stateIndex == 33){//see the note
			if(mouseX > 361 && mouseX < 407 && mouseY > 736 && mouseY < 757){
			stateIndex = 34;
			}
		}

		if(stateIndex == 34){//note disappear
			if(mouseX > 1205 && mouseX < 1235 && mouseY > 353 && mouseY < 381){
			stateIndex = 33;
			}
		}

		if(stateIndex == 33){//see the pianohint
			if(mouseX > 545 && mouseX < 854 && mouseY > 486 && mouseY < 572){
			stateIndex = 35;
			}
		}
		if(stateIndex == 35){//pianohint disappear
			if(mouseX > 1168 && mouseX < 1191 && mouseY > 231 && mouseY < 258){
			stateIndex = 33;
			}
		}
		if(stateIndex == 33){//see the pianohint
			if(mouseX > 17 && mouseX < 61 && mouseY > 20 && mouseY < 63){
			stateIndex = 36;
			}
		}
		if(stateIndex == 36){//see the pianohint
			if(mouseX > 1611 && mouseX < 1639 && mouseY > 451 && mouseY < 503){
			stateIndex = 37;
			}
		}
		if(stateIndex == 37){//see the pianohint
			if(mouseX > 775 && mouseX < 818 && mouseY > 825 && mouseY < 851){
			stateIndex = 38;
			}
		}

		if(stateIndex == 38){///go to power supply
			if(mouseX > 1082 && mouseX < 1112 && mouseY > 613 && mouseY < 655){
			stateIndex = 39;
			}
		}

		if(stateIndex == 39){///go to power supply
			if(mouseX > 1082 && mouseX < 1112 && mouseY > 613 && mouseY < 655){
			stateIndex = 41;
			}
		}

		if(stateIndex == 41){///go to power supply
			if(mouseX > 1257 && mouseX < 1284 && mouseY > 290 && mouseY < 319){
			stateIndex = 40;
			}
		}

		if(stateIndex == 40){//
			if(mouseX > 554 && mouseX < 710 && mouseY > 369 && mouseY < 553){
			buttonsound.play();
			stateIndex = 43;
			}
		}

		if(stateIndex == 43){//
			if(mouseX > 554 && mouseX < 710 && mouseY > 369 && mouseY < 553){
			buttonsound.play();
			stateIndex = 44;
			}
		}

		if(stateIndex == 44){//
			if(mouseX > 854 && mouseX < 993 && mouseY > 369 && mouseY < 556){
			buttonsound.play();
			stateIndex = 45;
			}
		}

		if(stateIndex == 45){//
			if(mouseX > 699 && mouseX < 847 && mouseY > 723 && mouseY < 875){
			buttonsound.play();
			stateIndex = 42;
			}
		}

		if(stateIndex == 42){//go back from power supply to building
			if(mouseX > 1257 && mouseX < 1284 && mouseY > 290 && mouseY < 319){
			stateIndex = 46;
			}
		}

		if(stateIndex == 46){//go to fromt door
			if(mouseX > 578 && mouseX < 740&& mouseY > 400 && mouseY < 486){
			stateIndex = 47;
			}
		}

		if(stateIndex == 47){//go into the room
			if(mouseX > 600 && mouseX < 965 && mouseY > 218 && mouseY < 695){
			stateIndex = 48;
			}
		}

		if(stateIndex == 48){//go into the room
			if(mouseX > 1071 && mouseX < 1318 && mouseY > 438 && mouseY < 490){
			stateIndex = 49;
			}
		}

		if(stateIndex == 49){//go into the room
			if(mouseX > 389 && mouseX < 489 && mouseY > 546 && mouseY < 590){
			stateIndex = 50;
			}
		}

		if(stateIndex == 50){//go into the room
			if(mouseX > 17 && mouseX < 61 && mouseY > 20 && mouseY < 63){
			stateIndex = 48;
			}
		}

		if(stateIndex == 48){//go to open piano room
			if(mouseX > 861 && mouseX < 994 && mouseY > 301 && mouseY < 493){
			stateIndex = 51;
			}
		}

		if(stateIndex == 51){//play piano
			if(mouseX > 547 && mouseX < 860 && mouseY > 492 && mouseY < 592){
			stateIndex = 54;
			}
		}

		if(stateIndex == 54){//play piano
			if(mouseX > 17 && mouseX < 61 && mouseY > 20 && mouseY < 63){
			stateIndex = 48;
			}
		}

		if(stateIndex == 51){//play piano
			if(mouseX > 17 && mouseX < 61 && mouseY > 20 && mouseY < 63){
			stateIndex = 48;
			}
		}

		if(stateIndex == 49){//play piano
			if(mouseX > 17 && mouseX < 61 && mouseY > 20 && mouseY < 63){
			stateIndex = 48;
			}
		}


		if(stateIndex == 55){//play piano
			if(mouseX > 17 && mouseX < 61 && mouseY > 20 && mouseY < 63){
			stateIndex = 48;
			}
		}

		if(stateIndex == 56){//play piano
			if(mouseX > 17 && mouseX < 61 && mouseY > 20 && mouseY < 63){
			stateIndex = 48;
			}
		}


		if(stateIndex == 54){//play piano
			if(mouseX > 647 && mouseX < 761 && mouseY > 541 && mouseY < 709){
			stateIndex = 55;
			dou.play();
			}
		}

		if(stateIndex == 55){//play piano
			if(mouseX > 1064 && mouseX <1228 && mouseY > 544 && mouseY < 797){
			stateIndex = 56;
			so.play();
			}
		}

		if(stateIndex == 56){//play piano
			if(mouseX > 1180 && mouseX <1324 && mouseY > 549 && mouseY < 790){
			stateIndex = 57;
			la.play();
			}
		}

		if(stateIndex == 57){//play piano
			if(mouseX > 1064 && mouseX <1228 && mouseY > 544 && mouseY < 797){
			stateIndex = 58;
			so.play();
			}
		}

		if(stateIndex == 58){//play piano
			if(mouseX > 969 && mouseX <1115 && mouseY > 546 && mouseY < 796){
			stateIndex = 59;
			fa.play();
			}
		}

		if(stateIndex == 59){//play piano
			if(mouseX > 870 && mouseX < 996 && mouseY > 554 && mouseY < 795){
			stateIndex = 60;
			mi.play();
			}
		}

		if(stateIndex == 60){//play piano
			if(mouseX > 771 && mouseX < 882 && mouseY > 541 && mouseY < 798){
			stateIndex = 61;
			re.play();
			}
		}

		if(stateIndex == 61){//play piano
			if(mouseX > 613 && mouseX < 761 && mouseY > 541 && mouseY < 707){
			stateIndex = 62;
			dou.play();
			}
		}

		if(stateIndex == 62){//play piano
			if(mouseX > 614 && mouseX < 842 && mouseY > 125 && mouseY < 373){
			stateIndex = 68;
			}
		}

		console.log(stateIndex);




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
		xWater = mouseX - 20; 
		yWater = mouseY - 34;
		}
	}
	
	if(stateIndex == 32){
			if(mouseX > 61 && mouseY > 63){
		xfish = mouseX - 30;
		yfish = mouseY - 20;
		}
	}
	
	if(stateIndex == 4){
			if(mouseX > 61 && mouseY > 63){
			
		xKey = mouseX - 10;
		yKey = mouseY;
		}
	}
	}



	