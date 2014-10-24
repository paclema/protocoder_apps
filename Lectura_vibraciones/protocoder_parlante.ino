/* Sweep

Protocoder_parlante

Servo en pin 9.
Enviar caracter "a" por puerto serie para mover el servo varias veces

*/ 

#include <Servo.h> 
 
Servo myservo;  // create servo object to control a servo 
                // twelve servo objects can be created on most boards
 
int pos = 0;    // variable to store the servo position 
 
void setup() 
{ 
    Serial.begin(9600);
 
  myservo.attach(9);  // attaches the servo on pin 9 to the servo object 
    myservo.write(160);              // tell servo to go to position in variable 'pos' 

} 

void loop() {

  if (Serial.peek() != -1) {
    Serial.print("Read: ");
    String inputString2 = "";
    do {
      char inchar = (char) Serial.read();
      inputString2 += inchar;
      
    } while (Serial.peek() != -1);
   
    if(inputString2.startsWith("a")){
    delay(400);
                             // in steps of 1 degree 
    myservo.write(140);              // tell servo to go to position in variable 'pos' 
    delay(100);                       // waits 15ms for the servo to reach the position 
                           
    myservo.write(160);              // tell servo to go to position in variable 'pos' 
    delay(100);     
        myservo.write(140);              // tell servo to go to position in variable 'pos' 
    delay(100);                       // waits 15ms for the servo to reach the position 
                           
    myservo.write(160);              // tell servo to go to position in variable 'pos' 
    delay(100);     
        myservo.write(140);              // tell servo to go to position in variable 'pos' 
    delay(100);                       // waits 15ms for the servo to reach the position 
                           
    myservo.write(160);              // tell servo to go to position in variable 'pos' 
    delay(100);     
        myservo.write(140);              // tell servo to go to position in variable 'pos' 
    delay(100);                       // waits 15ms for the servo to reach the position 
                           
    myservo.write(160);              // tell servo to go to position in variable 'pos' 
    delay(100);     
    
    
    } else if(inputString2.startsWith("ledoff")){

    } 

  }
    
  delay(100);
  /*
  
    if(Serial.available()> 0) {
    myservo.write(140);              // tell servo to go to position in variable 'pos' 
    delay(400);                       // waits 15ms for the servo to reach the position 
                           
    myservo.write(160);              // tell servo to go to position in variable 'pos' 
    delay(400);     
    }
    */
}

