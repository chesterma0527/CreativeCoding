
var input1;
var inputButton;
var inputText;
var p;


function setup() {

	createCanvas(400,400);

	inputText = "start";

    input1 = createInput("What is your hobby?");
    input1.position(50, 150);
    input1.style('width', '150px');

    
    inputButton = createButton("Go!");
    inputButton.position(100,300);
    inputButton.mousePressed(printName);

   
    p = createP(inputText);
    p.position(50,250);
    p.style('outline-color','#e8a725');
    p.style('outline-style','groove');
    p.style('text-decoration','underline')
    p.style('text-transform','uppercase')
    p.style('text-indent','0.5%')
    
}

function draw() {

	background(200);
	text(inputText,100,100);
    



}


function printName(){
	inputText = input1.value();
	input1.value(""); 
	p.html(inputText);



}
