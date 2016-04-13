/* 
*	Websockets 
*
*
*/ 

var port= 2525; 
var url = "ws://172.16.17.132:2525";

var client = network.connectWebsocket(url, function(status, data) {
	console.log(status, data);
});
/*
ui.addButton("Caca", 10, 10, 200, 100, function() {
	client.send("caca");
});

ui.addButton("Culo", 210, 10, 200, 100, function() {
	client.send("culo");
});

*/
ui.addImageButton(10, 10, 200, 100,"caca.jpg", function() {
	client.send("caca");
});

ui.addImageButton(210, 10, 200, 100,"culo.jpg", function() {
	client.send("culo");
});

ui.addButton("Te huele mazu el", 10, 110, 400, 100, function() {
	client.send("huele");
});

ui.addButton("Waka", 10, 210, 200, 100, function() {
	client.send("Waka");
});

ui.addButton("Mole", 210, 210, 200, 100, function() {
	client.send("Mole");
});

//other useful methods 
//server.stop();
//client.close();