

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//start class
function Car(name, age, theOver, theDown)
{
	//alert("Lightbulb");
	//save the original values
	//so the 'restart' function can use them
	var _originalAge = age;
	var _originalOver = theOver;
	var _originalDown = theDown;

	var _name = name; 
	var _age = age;
	
	this.over = theOver;  //public data
	this.down = theDown;  //public data
	
	var _size = 100;
	var _clickAreaSize = _size;
	
	var _isLit = true;
	
	var gColor = "red";
	
	var myClickArea = new MyClickArea(theOver, theDown, _clickAreaSize, _clickAreaSize);
	
	var _pixelSpeed = 10; //number of pixels to move each time function move() is called
	
	
	this.toString = function toString()
	{
		return _name+"  "+this.over+"  "+this.down;
	}
	
	this.restart = function restart()
	{
		_age = _originalAge;
		this.over = _originalOver;
		this.down = _originalDown;
	
	
	}
	
	
	this.hitTest = function hitTest(point)
	{
		return myClickArea.hitTest(point);
	
	}
		
	this.draw = function draw()
	{
		if(_isLit == true){
			_g_context.fillStyle = "yellow";
			_g_context.beginPath()
			_g_context.moveTo(this.over+_size, this.down+_size/2);
			_g_context.lineTo(this.over+_size+60, this.down+_size/2-20);
			_g_context.lineTo(this.over+_size+60, this.down+_size/2+20);
			_g_context.fill();
		}
		
		myClickArea.setArea(this.over, this.down, _clickAreaSize+20, _clickAreaSize);
//		_g_context.fillStyle = "rgb(255, 200, 255)";
//		_g_context.fillRect(this.over,this.down,_size+20,_size);
	
		_g_context.fillStyle = gColor;
		_g_context.fillRect(this.over, this.down+20, _size+20, _size-40);
		_g_context.fillRect(this.over+20, this.down, _size-20, _size/4);
		
		_g_context.fillStyle = "black";
		_g_context.beginPath();
		_g_context.arc(this.over+30, this.down+_size-20, 20, 0, 2 * Math.PI, false);
		_g_context.fill();
		
		_g_context.beginPath();
		_g_context.arc(this.over+_size-10, this.down+_size-20, 20, 0, 2 * Math.PI, false);
		_g_context.fill();
		
		
/*			_g_context.fillStyle = "gray";
		_g_context.fillRect(this.over + 10, this.down + 40, 30, 30);

		//now draw a filled circle
		var centerX = this.over + _size / 2;
		var centerY = this.down + _size / 2;
		var radius = _size / 2;

		_g_context.beginPath();
		_g_context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
		if(_isLit == true){
			_g_context.fillStyle = 'yellow';
		}
		else{
			_g_context.fillStyle = 'black';
		}
		_g_context.fill();
		_g_context.lineWidth = 5;
		_g_context.strokeStyle = 'orange';
		_g_context.stroke(); */

	   
		_g_context.font="16px Arial";
		_g_context.fillStyle = "black";
		var message = _name;
		//var message = "ball draw test";   //_name;
		
		_g_context.fillText(message, this.over+_size/2, this.down+_size/2);
		
		
		//alert("Ball.draw() --- this.toString()   "+this.toString());
		//alert(message);
		
		//myClickArea.draw();  //for debugging
		
	
	}
		
	this.setColor = function setColor(color){
		gColor = color;
		draw();
	}
		
	this.driveCar = function driveCar()
	{
		_age++;
		this.over += _pixelSpeed;
		//this.down++;
		draw();
		
	}
		
	this.restartCar = function restartCar(){
		_age = _originalAge;
		this.over = _originalOver;
		this.down = _originalDown;
		draw();
	}
		
	this.toggleLight = function toggleLight(isLit){
		_isLit = isLit;
	}
	
	
}//end class
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////	