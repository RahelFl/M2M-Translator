var express = require('express');
var app = express();
var server = require('http').createServer(app);
var five = require('johnny-five');
var io = require('socket.io');
var socket = io.listen(server);
var board = new five.Board();
var port = 3000;
var toggleAlarm = true;
var toggleLight = false;
var message;
var chooseScreen = "screen1";
var blink = false;


// setup the app
app.use('/', express.static(__dirname + '/public'));
app.get('/', function(req, res) {
  res.sendfile('index.html');
});
// setup the board
board.on("ready", function() {

// Variablen definieren etc.
  var buttonAlarm = new five.Button({
    pin: 2,
    isPullup: true
  });

  var buttonLight = new five.Button({
      pin: 3,
      isPullup: true
  });

  var ledAlarm = new five.Led(8);

  var ledLight = new five.Led(9);

  // LEDs Coffee maker
  var led1 = new five.Led (10);
  var led2 = new five.Led (5);
  var led3 = new five.Led (6);

  //var array = new five.Leds([10, 5, 6]);

// Start-Set-up des Programms definieren:
ledAlarm.blink(200);

// Coffee Maker Blinker Funktion
  function blinker (){
    if (blink === false){

      led1.stop().off();
      led2.stop().off();
      led3.stop().off();

    } else if (blink === true){
      board.wait(300, function(){
        led1.on();
        led3.off();
        console.log("Led1");
        board.wait(300, function(){
          led2.on();
          led1.off();
          console.log("Led2");
          board.wait(300, function(){
            led3.on();
            led2.off();
            console.log("Led3");
          });
        });
      });

  }
}


// Coffee maker on (läuft die ganze Zeit im Hintergrund)
        board.loop(1000, blinker);


  socket.on('connection', function(client) {

    // log what the client is sending
    client.on('message', function(message) {
      console.log(message);
      if (message === "Abbruch"){
        toggleAlarm = false;
        blink = false;
        console.log(blink);
      } else if (message === "Weiter"){
        toggleAlarm = true;
        blink = true;
      }
    });

    client.on('message', function(chooseScreen) {
      console.log(chooseScreen);
      if ((chooseScreen === "screen5")|(chooseScreen === "screen4")){
        client.send(chooseScreen);
      }
    });




// What happens if ButtonAlarm pressed:
    buttonAlarm.on('down', function(value) {

// Wenn Alarm aus:
      if(toggleAlarm === false ){
        chooseScreen = "screen1";
        client.send(chooseScreen);
        console.log("Goto screen1");

// Programm zurücksetzen:
        board.wait(400, function(){
          toggleAlarm = true;
        });
        ledAlarm.blink(200);
        blink = false;
        console.log("blink",blink);
        message = "Alarm_on";
        client.send(message);
        console.log("Alarm on");


// Licht wieder aus
        toggleLight = false;
        ledLight.off();
        message = "Light_off";
        client.send(message);
        console.log("Light off");


// Wenn Alarm an:
      } else if (toggleAlarm === true){
        toggleAlarm = false;
        ledAlarm.stop().off();
        chooseScreen = "screen2";
        client.send(chooseScreen);
        console.log("Goto screen2");
        message = "Alarm_off";
        client.send(message);
        console.log("Alarm off");

// Wenn Wecker ausschalten, dann Licht an:
        board.wait(800, function(){
        toggleLight = true;
        chooseScreen = "screen3";
        client.send(chooseScreen);
        console.log("Goto screen3");
      });

        console.log("blink",blink);
        ledLight.on();

        board.wait(1000, function(){

          board.wait(600, function(){
          blink = true;
          chooseScreen = "screen4";
          client.send(chooseScreen);
          console.log("Goto screen4");
        });
        });

        message = "Light_on";
        client.send(message);
        console.log("Light on");

// Screen wechseln
        chooseScreen = "screen2";
        client.send(chooseScreen);
      }

// if (blink === true){
//   chooseScreen = "screen4";
//   client.send(chooseScreen);
// }


    });

        //array.pulse();


// Licht:
    buttonLight.on('down', function(value) {

// Licht anschalten wenn Wecker aus:
      if((toggleLight === false) && (toggleAlarm === false)   ) {
        // chooseScreen = "screen4";
        // client.send(chooseScreen);
        toggleLight = true;
        ledLight.on();
        message = "Light_on";
        client.send(message);
        console.log("Light on");

// Licht ausschalten wenn Wecker aus:
      } else if ((toggleLight === true) && (toggleAlarm === false)){
        toggleLight = false;
        // chooseScreen = "screen4";
        // client.send(chooseScreen);
        ledLight.off();
        message = "Light_off";
        client.send(message);
        console.log("Light off");
      }

    });

});
});


// now build the connection via socket
// run the server

console.log("listening on port http://localhost:" + port);
server.listen(port);
