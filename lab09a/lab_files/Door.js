function Door(over, down){
	var gOver = over;
	var gDown = down;
	
	var myClickArea = new MyClickArea(gOver, gDown, 15, 25);
	
	this.hitTest = function hitTest(point)
	{
		return myClickArea.hitTest(point);
	
	}
	
	this.draw = function draw()
	{
		
		myClickArea.setArea(gOver, gDown, 15, 25);
		_g_context.fillStyle = "rgb(255, 200, 255)";
		_g_context.fillRect(gOver,gDown,15,25);
		
		_g_context.fillStyle = "#000";
		_g_context.fillRect(gOver, gDown, 15, 25);
		
		myClickArea.draw();
	}
	
	this.setColor = function setColor(color){
		
	}
}