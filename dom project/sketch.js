
var input1;
var inputButton;
var input2;
var input3;


function setup() {

	createCanvas(400,400);

    input1 = createInput("Country");
    input1.position(50, 150);
    input1.style('width', '150px');


    input2 = createInput("State");
    input2.position(50, 200);
    input2.style('width', '150px');

    input3 = createInput("City");
    input3.position(50, 250);
    input3.style('width', '150px');
    
    inputButton = createButton("Search");
    inputButton.position(100,300);
    inputButton.mousePressed(printName);

}

function draw() {

	background(200);

}


function printName(){




	var result1 = input1.value(); 
	input1.value(""); 

	var result2 = input2.value(); 
	input2.value(""); 

	var result3 = input3.value();
	input3.value(""); 


	var baseUrl = "http://api.airvisual.com/v2/city?city=";
	var cityName = result3;
	var state = result2;
	var country = result1;
	var apiKey = "9TmdgW6YPq2Y6DDZJ";


	url= baseUrl+cityName+"&state="+state+"&country="+country+"&key="+apiKey;
	console.log(url);

}
