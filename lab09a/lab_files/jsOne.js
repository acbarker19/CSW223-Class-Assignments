//global variables
var _g_canvas;
var _g_context;

var _g_ballTest;
var _g_count;

var _g_showOtherBall;
var _g_otherBall;

var gDoor;
var gDoorOpen;

	function jsOneInit()
	{
		_g_canvas = document.getElementById('myCanvas');
		_g_context = _g_canvas.getContext("2d");
		
		_g_canvas.addEventListener("mousedown",doMouseDown,false);
		_g_canvas.addEventListener("mousemove",doMouseMove,false);
		_g_canvas.addEventListener("mouseup",doMouseUp,false);
		_g_canvas.addEventListener("mouseover",doMouseOver,false);
		_g_canvas.addEventListener("mouseout",doMouseOut,false);
		
		_g_ballTest = new Ball("Ball 1",0,100,50);
		//alert("_g_ballTest.toString()   "+_g_ballTest.toString());
		
		_g_showOtherBall = false;
		_g_otherBall = new Ball("other",0,50,200);
		
		gDoorOpen = false;
		gDoor = new Door(285, 250);
		
		displayInfo("using external <a href='lab_files/jsOne.js'>jsOne.js</a>,  <a href='lab_files/Ball.js'>Ball.js</a>, and  <a href='lab_files/MyClickArea.js'>MyClickArea.js</a>");	
		
		_g_count = 1;
		draw();
		//alert("end jsOneInit()");
	}
	
	
	function draw()
	{
		_g_context.fillStyle = "rgb(100, 100, 255)";
		_g_context.fillRect(0,0,1000,1000);
	
		//_g_context.fillStyle = "rgb(255, 0, 0)";
		_g_context.fillStyle = "rgb(240, 240, 255)";
			
		
		_g_context.font="30px Arial";
		var message = "draw()  _g_count "+_g_count;
			
		_g_context.fillText(message, 50, 150);
			
		//_g_ballTest.over = _g_count;
		//alert("this.toString()   "+this.toString());
		
		_g_ballTest.draw();
		//alert("draw() ");
		
		var countInfo = "draw()  _g_count "+_g_count;
		_g_count++;
		
		document.getElementById("countInfo").innerHTML =  countInfo;
		
		if (_g_showOtherBall)
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
		var pos = getMousePos(_g_canvas, event);
		var ballIsHit = _g_ballTest.hitTest(pos);
		var doorIsHit = gDoor.hitTest(pos);
		
		var mouseDownInfo = "mouseDownInfo pos.x "+pos.x+"     pos.y "+pos.y;
		document.getElementById("mouseDownInfo").innerHTML =  mouseDownInfo;		
		
		var mouseDownInfoBall = "mouseDownInfoBall    ballIsHit "+ballIsHit;
		document.getElementById("mouseDownInfoBall").innerHTML =  mouseDownInfoBall;		
		
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
		
		draw();	
		
	}

	function doMouseMove(event)
	{
		var pos = getMousePos(_g_canvas, event);
		var ballIsHit = _g_ballTest.hitTest(pos);
	
		var mouseMoveInfo = "mouseMoveInfo pos.x "+pos.x+"     pos.y "+pos.y+"     ballIsHit "+ballIsHit;
		document.getElementById("mouseMoveInfo").innerHTML =  mouseMoveInfo;	
		
		var mouseMoveInfoBall = "mouseMoveInfoBall     ballIsHit "+ballIsHit;
		document.getElementById("mouseMoveInfoBall").innerHTML =  mouseMoveInfoBall;	
	
	
		draw();	
			
	}

	function doMouseUp(event)
	{
		var pos = getMousePos(_g_canvas, event);
		var ballIsHit = _g_ballTest.hitTest(pos);
		
		var mouseUpInfo = "mouseUpInfo pos.x "+pos.x+"     pos.y "+pos.y;
		document.getElementById("mouseUpInfo").innerHTML =  mouseUpInfo;
		
		var mouseUpInfoBall = "mouseUpInfoBall    ballIsHit "+ballIsHit;
		document.getElementById("mouseUpInfoBall").innerHTML =  mouseUpInfoBall;	
		
		//_g_draggingState = "none";
		//document.getElementById("mouseDraggingInfo").innerHTML =  _g_draggingState;
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

  