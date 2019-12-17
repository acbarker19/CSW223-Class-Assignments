

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//start class
function Ball(name, age, theOver, theDown)
{
	//save the original values
	//so the 'restart' function can use them
	var _originalAge = age;
	var _originalOver = theOver;
	var _originalDown = theDown;

	var _name = name; 
	var _age = age;
	
	this.over = theOver;  //public data
	this.down = theDown;  //public data
	
	var _size = 50;
	var _clickAreaSize = _size;
	
	
	var myClickArea = new MyClickArea(theOver, theDown, _clickAreaSize, _clickAreaSize);
	
	var _pixelSpeed = 7; //number of pixels to move each time function move() is called
	
	
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
			
			myClickArea.setArea(this.over, this.down, _clickAreaSize, _clickAreaSize);
			_g_context.fillStyle = "rgb(255, 200, 255)";
			_g_context.fillRect(this.over,this.down,_size,_size);
		    
	
			//now draw a filled circle
			var centerX = this.over + _size / 2;
			var centerY = this.down + _size / 2;
			var radius = _size / 2;

			_g_context.beginPath();
			_g_context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
			_g_context.fillStyle = 'green';
			_g_context.fill();
			_g_context.lineWidth = 5;
			_g_context.strokeStyle = '#003300';
			_g_context.stroke();
	
		   
			_g_context.font="16px Arial";
			_g_context.fillStyle = "rgb(255, 0, 0)";
			var message = _name;
			//var message = "ball draw test";   //_name;
			
			_g_context.fillText(message, this.over+6, this.down+25);
			
			
			//alert("Ball.draw() --- this.toString()   "+this.toString());
			//alert(message);
			
			//myClickArea.draw();  //for debugging
			
		
		}
	
	this.move = function move()
		{
			_age++;
			this.over += _pixelSpeed;
			//this.down++;
			
		}
}//end class
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////	