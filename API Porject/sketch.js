var url;
var myData;
var humid;

function preload(){
	apiIndex = loadImage("assets/WechatIMG419.png");
	apiIcon = loadImage("assets/travel.png");
	windSpeedIcon = loadImage("assets/wind.png");
	windDirectionIcon = loadImage("assets/weather-vane.png");
	humidityIcon = loadImage("assets/humidity.png");
	thermometerIcon = loadImage("assets/thermometer.png");
	pressureIcon = loadImage("assets/pressure.png");
	sunIcon = loadImage("assets/sunny.png");
	cloudIcon = loadImage("assets/cloud.png");
	cloudsIcon = loadImage("assets/clouds.png");
}

function setup() {
	createCanvas(600,1200);
	background(201,238,250);
	var baseUrl = "http://api.airvisual.com/v2/city?city=";
	var cityName = "Hartford";
	var state = "Connecticut";
	var country = "USA";
	var apiKey = "9TmdgW6YPq2Y6DDZJ";


	url= baseUrl+cityName+"&state="+state+"&country="+country+"&key="+apiKey;
	
	push();
	textAlign(CENTER);
	textSize(50);
	fill(253);
	text(cityName,width/2,100);
	pop();
}

function draw() {
	image(apiIndex,0,800,600,400);

	image(thermometerIcon,15,275,60,60);
	text("Tempreature",10,370);
	text("(°C)",30,385)

	image(humidityIcon,10,580,60,60);
	text("Humidity",15,670);
	text("(%)",30,685)

	image(windSpeedIcon,15,430,55,55);
	text("Wind Speed",10,520);
	text("(m/s)",30,535)

	image(windDirectionIcon,315,430,60,60);
	text("Wind Direction",310,520);
	text("(N=0, CounterClockwise)",280,535);

	image(apiIcon,320,275,60,60);
	text("Air Quality Index",310,370)

	image(pressureIcon,315,580,60,60);
	text("Pressure",320,670)
	text("(hpa)",330,685)

	image(sunIcon,-80,-80,256,256);
	image(cloudsIcon,370,100,200,150);
	image(cloudIcon,100,150,150,100)



}

function gotData(myData){
	console.log(myData);
	AQI = myData.data.current.pollution.aqius;
	Temp = myData.data.current.weather.tp;
	humidity = myData.data.current.weather.hu;
	pressure = myData.data.current.weather.pr;
	windSpeed = myData.data.current.weather.ws;
	windDirection = myData.data.current.weather.wd;
	
	push();
		textAlign(CENTER);
		textSize(50);
		fill(100);
			text(Temp,210,340);
			text(windSpeed,210,490);
			text(windDirection,510,490)
			text(humidity,210,650);
			text(pressure,510,650);
	pop();
	
	push();
		textAlign(CENTER);
		textSize(50);
		if(AQI < 50){
			fill(151,213,91);
			text(AQI,510,340);
		}
		if(AQI >= 50 && AQI < 100){
			fill(242,206,74);
			text(AQI,510,340);
		}
		if(AQI >= 100 && AQI < 150){
			fill(237,132,50);
			text(AQI,510,340);
		}
		if(AQI >= 150 && AQI < 200){
			fill(232,50,35);
			text(AQI,510,340);
		}
			if(AQI >= 200 && AQI < 300){
			fill(129,26,65);
			text(AQI,510,340);
		}
			if(AQI >= 300 && AQI < 500){
			fill(108,19,35);
			text(AQI,510,340);
		}
	pop();
}

function mouseClicked(){
	myData = loadJSON(url, gotData);
}