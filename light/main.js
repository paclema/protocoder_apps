/* 
*	Uses android from text to speech 
*/

ui.setFullscreen();
//ui.backgroundColor(0, 255, 255);

var camera;

//add camera 
camera = ui.addCameraView(0,0,0,0,0);


//toggle flash on and off
ui.addToggle("Flash", 0, 200, 500, 300, false, function(state) { 
    camera.turnOnFlash(state);

});
