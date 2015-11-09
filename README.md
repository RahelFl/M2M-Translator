# M2M-Translator

![Title](https://github.com/RahelFl/M2M-Translator/blob/master/img/Titel.png)

The „M2M Translator is a work that was done within the two-week-long project „Johnny-five-is-alive“. The task was to build an prototype of an IoT object that communicates with a website using Johnny Five.

## The idea

In a world that gets more and more connected, we are surrounded by machines talking to each other. Mostly, for us it is not possible to know what they are actually communicating. That this fact could get really disturbing or even terrifying is shown by the little scenario of Paula and her smart home on the following pictures:


<img src="https://github.com/RahelFl/M2M-Translator/blob/master/img/Szenario_1.jpg" height="170" style="float: right; margin-left: 30px;"/>
<img src="https://github.com/RahelFl/M2M-Translator/blob/master/img/Szenario_2.jpg" height="170" style="float: right; margin-left: 30px;"/>
<img src="https://github.com/RahelFl/M2M-Translator/blob/master/img/Szenario_3.jpg" height="170" style="float: right; margin-left: 30px;"/>
<img src="https://github.com/RahelFl/M2M-Translator/blob/master/img/Szenario_4.jpg" height="170" style="float: right; margin-left: 30px;"/>
<img src="https://github.com/RahelFl/M2M-Translator/blob/master/img/Szenario_5.jpg" height="170" style="float: right; margin-left: 30px;"/>
<img src="https://github.com/RahelFl/M2M-Translator/blob/master/img/Szenario_6.jpg" height="170" style="float: right; margin-left: 30px;"/>
<img src="https://github.com/RahelFl/M2M-Translator/blob/master/img/Szenario_7.jpg" height="170" style="float: right; margin-left: 30px;"/>
<img src="https://github.com/RahelFl/M2M-Translator/blob/master/img/Szenario_8.jpg" height="170" style="float: right; margin-left: 30px;"/>
<img src="https://github.com/RahelFl/M2M-Translator/blob/master/img/Szenario_9.jpg" height="170" style="float: right; margin-left: 30px;"/>
<img src="https://github.com/RahelFl/M2M-Translator/blob/master/img/Szenario_10.jpg" height="170" style="float: right; margin-left: 30px;"/>


![Solution](https://github.com/RahelFl/M2M-Translator/blob/master/img/The solution.jpg)



## The setting




![Sketch_setting](https://github.com/RahelFl/M2M-Translator/blob/master/img/Szenario_Scan4.jpg)


To prototype the translator in a smart home environment, I decided to built an demonstrator consisting of representatives of an alarm clock, a lamp and a coffee machine. Both the alarm clock and the lamp have a physical button to switch it on or off and a led. The coffee maker has three led’s that turn on and off one after the other to give the impression of coffee dripping into the pot.



![Img_setting](https://github.com/RahelFl/M2M-Translator/blob/master/img/Aufbau.jpg)

![Sketch_setting](https://github.com/RahelFl/M2M-Translator/blob/master/img/151012_Sketch_Steckplatine.png)

The demonstrator is connected to an Arduino board. Using the Johnny Five library to control the Arduino pins, the code runs from a node server. The node server works like a mediator, communicating with the Arduino board using Johnny Five and communicating with the website using socket.io. Doing this it builds the connection between the Arduino in- and output and the in- and output given by the website.

## The App prototype

![Sketch_setting](https://github.com/RahelFl/M2M-Translator/blob/master/img/App.png)

On the website, a prototype of the M2M translator is shown. It tells the user what is actually going on at the smart home demonstrator and reacts to input. If for example the alarm clock is switched off and lights go on, you can follow the devices’ communication translated to understandable language on the screen. If the user wants to stop an action he can do that using the little cross displayed after each action.

If an action is stopped via the app, this information is sent to the server and from there to the Arduino board, where the specific action gets stopped.

## Demo


[![Demo on Vimeo](https://github.com/RahelFl/M2M-Translator/blob/master/img/Vimeo_Screenshot.jpg)](https://vimeo.com/144001575 "Demo on Vimeo")
