/* 
*   Communication with the dashboard  
*
*   Dashboard is an element in the Web Editor where you 
*   can add widgets that interact with your device 
*   
*   You can remote control it!
*/ 

//---------- PHONE UI ---------------------

//add a plot on the dashboard 
var plot;
    plot = dashboard.addPlot("name", 600, 100, 400, 400, 2,4);
var arduino = boards.startArduino(9600, function(data) {
});
/*
ui.addButton("Add plot", 0, 0,500,100, function(){
    plot = dashboard.addPlot("name", 600, 100, 200, 100, 0, 10);
});
*/

var variableX;
var valorMax=0;

//update the plot 
ui.addButton("Reset variables", 0, 500, 500, 500, function(){
    plot.update(variableX);
    valorMax=0;
    
});

//Homing
ui.addButton("Homing", 500, 0, 600, 250, function(){
    arduino.write("G28\n");
    
});

//Subir Z
ui.addButton("Subir Z", 500, 250, 600, 250, function(){
    arduino.write("G1 Z10\n");
    
});
//Bajar Z
ui.addButton("Bajar Z", 500, 500, 600, 250, function(){
    arduino.write("G1 Z-10\n");
    
});
sensors.startAccelerometer(function(x, y, z) {
    //accelerometer.setText("acc: " + x + ", " + y + ", " + z);
    variableX=(x+y+z)/3;
    plot.update(variableX);
    
    if(variableX>=valorMax){
        valorMax=variableX;
    } 
    textChange.setText(valorMax);
    
    
});

//show and hide the dashboard 
ui.addToggle("Show Hide dashboard", 0,0, 500, 500, false, function(b){
    dashboard.show(b);
});

/**
//change the text  
ui.addButton("hola", 0, 300, 500, 100, function(){
    textChange.setText("hola");
});

ui.addButton("adios", 0, 400, 500, 100, function(){
    textChange.setText("adios");
});
*/


//---------- DASHBOARD UI ---------------------
dashboard.setBackgroundColor("#EE000000");
var text = dashboard.addText("Media de aceleraciones", 50, 50, 200, 100, 28, "#FFFFFF");
var textChange = dashboard.addText("This text can change", 50, 250, 200, 100, 28, "#FF00FF");

slider = dashboard.addSlider("name", 50, 400, 200, 100, 0, 100, function(val) {
    console.log(val);
    device.vibrate(100);
    arduino.write("G X"+val+"\n");
});

input = dashboard.addInput("say it", 50, 450, 200, 100, function(val) {
    console.log(val);
    media.textToSpeech(val);
    arduino.write("a\n");
    device.vibrate(100);
});

//add a button on the webpapp and when clicked will execute the inner function
var webbutton = dashboard.addButton("hola", 310, 100, 150, 50, function() {
    ui.toast("hola", 200);
    device.vibrate(500);
});

//add custom html
dashboard.addHtml("<a href = 'http://www.protocoder.org' style='font-size:20px'> This is a link to Protocoder! </a>", 280, 280);
