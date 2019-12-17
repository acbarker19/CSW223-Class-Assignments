

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//start class
function MyClickArea(theOver, theDown, theWidth, theHeight)
{
	var _over = theOver;  
	var _down = theDown;  
	var _width = theWidth;  
	var _height = theHeight;  
	
	
	this.toString = function toString()
	{
		return "MyClickArea  "+_over+"  "+_down+"   "+_width+"  "+_height;
	}
	
	this.setArea = function setArea(theOver, theDown, theWidth, theHeight)
	{
		_over = theOver;  
		_down = theDown;  
		_width = theWidth;  
		_height = theHeight;
	}
	
	this.hitTest = function hitTest(point)
	{
		//return true iff point is inside this object
		if (point.x > _over && point.x < _over + _width
		&&  point.y > _down && point.y < _down + _height)
			return true;
		else
			return false;
	}
		
	this.draw = function draw()
	{
		_g_context.fillStyle = "rgba(200, 200, 200, 0.0)";
		//NOTE: the last parameter is the alpha value (0.0 is transparent --- 1.0 is solid)
		    //alert("test");
		_g_context.fillRect(_over,_down,_width,_height);
	}
	
}//end class
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////	