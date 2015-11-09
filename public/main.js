$(document).ready(function () {
  var socket = new io();
  var toggle = true;
  var chooseScreen;
  // Establish a connection back to the server from the browser.
  socket.connect('http://localhost:3000', {
    autoConnect: true
  });

  // Attach an event to the click event of document's button.
  $('#stop').click(function () {
    var message = "Abbruch";
    chooseScreen = "screen5";
    socket.send(message);
    socket.send(chooseScreen);

  });

  $('#go_on').click(function () {
    var message = "Weiter";
    chooseScreen = "screen4";
    socket.send(message);
    socket.send(chooseScreen);

  });

  // $('#stopCoffee').click(function () {
  //   chooseScreen = "screen4";
  //   socket.send(message);
  //   socket.send(chooseScreen);
  //
  // });

  // Create a handler for when a message arrives from the server.
  socket.on('message', function (message) {

    if(message === "Alarm_off") {

      //$('img#screens').attr("src", "img_screen2.png");
      //chooseScreen = "img_screen2";

      //console.log (message);
    } else if (message === "Alarm_on") {

            //chooseScreen = "img_screen1";
      //console.log (message);
    }

    if(message === "Light_off") {

      //console.log (message);
    } else if (message === "Light_on") {

      //console.log (message);
    }


});
socket.on('message', function (chooseScreen) {

if (chooseScreen === "screen1"){
        $('img#screens').attr("src", "img_screen1.png");
}
if (chooseScreen === "screen2"){
        $('img#screens').attr("src", "img_screen2.png");
}

if (chooseScreen === "screen3"){
        $('img#screens').attr("src", "img_screen3.png");
}

if (chooseScreen === "screen3"){
        $('img#screens').attr("src", "img_screen3.png");
}

if (chooseScreen === "screen4"){
        $('img#screens').attr("src", "img_screen4.png");

}

if (chooseScreen === "screen5"){
        $('img#screens').attr("src", "img_screen5.png");
}

});
});
