//global variables
var _g_canvas;
var _g_context;

//var _g_ballTest;
var _g_count;

//var _g_showOtherBall;
//var _g_otherBall;

//var gDoor;
//var gDoorOpen;

//var gLB1;
//var gLB2;
//var gLB3;

//var gIsLit1;
//var gIsLit2;
//var gIsLit3;

var _g_myCar;
var gCar2;
var gIsLit;
var _g_myCounter;
var _topObject;

	function jsInit()
	{
		//alert("init running");
		_g_canvas = document.getElementById('myCanvas');
		_g_context = _g_canvas.getContext("2d");
		
		_g_canvas.addEventListener("mousedown",doMouseDown,false);
		_g_canvas.addEventListener("mousemove",doMouseMove,false);
		_g_canvas.addEventListener("mouseup",doMouseUp,false);
		_g_canvas.addEventListener("mouseover",doMouseOver,false);
		_g_canvas.addEventListener("mouseout",doMouseOut,false);
		
//		_g_ballTest = new Ball("Ball 1",0,100,50);
		//alert("_g_ballTest.toString()   "+_g_ballTest.toString());
		
//		_g_showOtherBall = false;
//		_g_otherBall = new Ball("other",0,50,200);
		
//		gDoorOpen = false;
//		gDoor = new Door(285, 250);

	//alert("middle");
//	new Ball("name", 0, 20, 20);
//	new Lightbulb("#1a", 0, 20, 50);
//		gLB1 = new Lightbulb("#1a", 0, 20, 50);
//		gLB2 = new Lightbulb("#2b", 0, 90, 50);
//		gLB3 = new Lightbulb("#3c", 0, 160, 50);
//alert("after lightbulbs");

		_g_myCar = new Car("Car", 0, 25, 150);
		gCar2 = new Car("Car 2", 0, 200, 150);
		gIsLit = true;
		
		_topObject = _g_myCar;

//		gIsLit1 = true;
//		gIsLit2 = true;
//		gIsLit3 = true;

		displayInfo("using external <a href='lab_files/jsOne.js'>jsOne.js</a>,  <a href='lab_files/Car.js'>Car.js</a>, and  <a href='lab_files/MyClickArea.js'>MyClickArea.js</a>");	
		
		_g_count = 1;
		draw();
//		alert("end jsOneInit()");
	}
	
	
	function draw()
	{
		_g_context.fillStyle = "rgb(100, 100, 255)";
		_g_context.fillRect(0,0,1000,1000);
	
		//_g_context.fillStyle = "rgb(255, 0, 0)";
		_g_context.fillStyle = "rgb(240, 240, 255)";
			
		
		_g_context.font="15px Arial";
		var message = "draw()  _g_count "+_g_count;
			
		_g_context.fillText(message, 10, 20);
			
		//_g_ballTest.over = _g_count;
		//alert("this.toString()   "+this.toString());
/*		
		gLB1.changeLight(gIsLit1);
		gLB2.changeLight(gIsLit2);
		gLB3.changeLight(gIsLit3);
*/		
//		gLB1.draw();
//		gLB2.draw();
//		gLB3.draw();
		//_g_ballTest.draw();
		//alert("draw() ");
		
		_g_myCar.draw();
		gCar2.draw();
		
		_topObject.draw();
		
		var countInfo = "draw()  _g_count "+_g_count;
		_g_count++;
		
		document.getElementById("countInfo").innerHTML =  countInfo;
		
/*		if (_g_showOtherBall)
		{
			_g_otherBall.draw();
		}
		
		_g_context.fillStyle = "#f00";
		_g_context.fillRect(275, 225, 100, 50);
		
		_g_context.fillStyle = "#0f0";
		_g_context.beginPath();
		_g_context.moveTo(265, 225);
		_g_context.lineTo(385, 225);
		_g_context.lineTo(325, 175);
		_g_context.fill();
		
		_g_context.fillStyle = "#00f";
		_g_context.fillRect(285, 250, 15, 25);
		
		if(gDoorOpen){
			gDoor.draw();
		}
*/	
	}
	
	
	//get mouse position within the _g_canvas
	//no matter where the _g_canvas is on the web page
	//http://stackoverflow.com/questions/17130395/_g_canvas-html5-real-mouse-position
	//Klayder added "Math.round"
	function getMousePos(_g_canvas, evt) {
		var rect = _g_canvas.getBoundingClientRect();
		return {
		    x: Math.round((evt.clientX - rect.left) / (rect.right - rect.left) * _g_canvas.width),
		    y: Math.round((evt.clientY - rect.top) / (rect.bottom - rect.top) * _g_canvas.height)
		};
	}
	
	function doMouseDown(event)
	{
		//alert("down");
		var pos = getMousePos(_g_canvas, event);
//		var ballIsHit = _g_ballTest.hitTest(pos);
//		var doorIsHit = gDoor.hitTest(pos);
//		var isHit1 = gLB1.hitTest(pos);
//		var isHit2 = gLB2.hitTest(pos);
//		var isHit3 = gLB3.hitTest(pos);

		var isHit = _g_myCar.hitTest(pos);
		
//		alert("the isHits are done" + isHit1 + isHit2 + isHit3);
		
/*		var mouseDownInfo = "mouseDownInfo pos.x "+pos.x+"     pos.y "+pos.y;
		document.getElementById("mouseDownInfo").innerHTML =  mouseDownInfo;		
		
		var mouseDownInfoBall = "mouseDownInfoBall    ballIsHit "+ballIsHit;
		document.getElementById("mouseDownInfoBall").innerHTML =  mouseDownInfoBall;		
/*		
		if(doorIsHit){
			if(gDoorOpen == true){
				gDoorOpen = false;
			}
			else{
				gDoorOpen = true;
			}
		}
		
		if (ballIsHit)
		{
			//alert("ballIsHit");
			
			
			//toggle _g_showOtherBall
			if (_g_showOtherBall == true)
			{	
				_g_showOtherBall = false;
			}else
			{
				_g_showOtherBall = true;
			}
			
			
			//  _g_showOtherBall = !_g_showOtherBall;  //alternative way to toggle _g_showOtherBall
		}
*/	

		if(isHit){
			//alert("car is object");
			_g_myCar.toggleLight(false);
			_userSelectedObject = _g_myCar;
			_topObject = _g_myCar;
			//_g_myCounter++;
		}	
		
		isHit = gCar2.hitTest(pos);
		
		if(isHit){
			//alert("car is object");
			gCar2.toggleLight(false);
			_userSelectedObject = gCar2;
			_topObject = gCar2;
			//_g_myCounter++;
		}

/*		if(isHit1){
			if(gIsLit1 == true){
				gIsLit1 = false;
			}
			else{
				gIsLit1 = true;
			}
			gLB1.changeLight(gIsLit1);
		}
//		alert("if 1 done");
//		alert(gIsLit1);
		if(isHit2){
			if(gIsLit2 == true){
				gIsLit2 = false;
			}
			else{
				gIsLit2 = true;
			}
			gLB2.changeLight(gIsLit2);
		}
		
		if(isHit3){
			if(gIsLit3 == true){
				gIsLit3 = false;
			}
			else{
				gIsLit3 = true;
			}
			gLB3.changeLight(gIsLit3);
		} */

		draw();	
//		alert("the isHits are done");
	}

	function doMouseMove(event)
	{
		//alert("move");
		if(_userSelectedObject != null){
			//alert("not null");
			var pos = getMousePos(_g_canvas, event);
			//var IsHit = _g_myCar.hitTest(pos);
		
			/*var mouseMoveInfo = "mouseMoveInfo pos.x "+pos.x+"     pos.y "+pos.y+"     IsHit "+IsHit;
			document.getElementById("mouseMoveInfo").innerHTML =  mouseMoveInfo;	
			
			var mouseMoveInfoBall = "mouseMoveInfoBall     IsHit "+IsHit;
			document.getElementById("mouseMoveInfoBall").innerHTML =  mouseMoveInfoBall;	*/
			
			_userSelectedObject.over = pos.x - 60;
			_userSelectedObject.down = pos.y - 50;
		
		
			draw();	
		}
			
	}

	function doMouseUp(event)
	{
		if(_userSelectedObject != null){
			//alert("Up");
			//var pos = getMousePos(_g_canvas, event);
			//var IsHit = _g_myCar.hitTest(pos);
			
			//var mouseUpInfo = "mouseUpInfo pos.x "+pos.x+"     pos.y "+pos.y;
			//document.getElementById("mouseUpInfo").innerHTML =  mouseUpInfo;
			
			//var mouseUpInfoBall = "mouseUpInfoBall    IsHit "+IsHit;
			//document.getElementById("mouseUpInfoBall").innerHTML =  mouseUpInfoBall;	
			
			//_g_draggingState = "none";
			//document.getElementById("mouseDraggingInfo").innerHTML =  _g_draggingState;
			
			//_g_myCounter++;
			_g_myCar.toggleLight(true);
			
			gCar2.toggleLight(true);
			
			_userSelectedObject = null;
			draw();
		}
	}

	function doMouseOver(event)
	{
		var pos = getMousePos(_g_canvas, event);
		var info = "mouseOverInfo pos.x "+pos.x+"     pos.y "+pos.y;
		document.getElementById("mouseOverInfo").innerHTML =  info;		
	}

	function doMouseOut(event)
	{
		var pos = getMousePos(_g_canvas, event);
		var info = "mouseOutInfo pos.x "+pos.x+"     pos.y "+pos.y;
		document.getElementById("mouseOutInfo").innerHTML =  info;		
	}


	function displayInfo(theInfo)
	{
		//alert("testing");
		document.getElementById("scriptInfo").innerHTML =  theInfo;

	}

  