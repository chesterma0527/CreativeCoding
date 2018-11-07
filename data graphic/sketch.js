var myData;
var color;
function preload(){
	myData = loadJSON("assets/elements.json");
}

function setup() {
	createCanvas(2500,1000);
}

function draw() {

	
	for (var i =0;i < 29;i++){
		 var elementweight = myData.elements[i].atomic_weight;
		 var elementName = myData.elements[i].name;
		 var elementdensity = myData.elements[i].density;
	
	push();
		color = map(elementdensity,0.00008988,8.96,255,0);
		fill(color);
		ellipse(70+i*80,80,elementweight*1.1,elementweight*1.1);
	pop();	 
		text(elementName,50+i*80,15,50,50);
	}
}