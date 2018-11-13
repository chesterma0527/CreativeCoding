var url;
var myData;
function setup() {
	var baseUrl = "https://na1.api.riotgames.com/lol/spectator/v3/active-games/by-summoner/";
	var playerid = "20768765"
	var apiKey = "RGAPI-c27822e9-5308-4d87-8d92-fff50365e90f";

	url= baseUrl+playerid+"?api_key="+apiKey
	console.log(url);
}

function draw() {
  // put drawing code here
}

function gotData(myData){
	console.log(myData);


}

function mouseClicked(){
	myData = loadJSON(url, gotData);
}

