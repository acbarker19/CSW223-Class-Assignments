/* Alec Barker */
function Person(name, age, over, down){
	var _name = name;
	var _age = age;
	var _over = over;
	var _down = down;
	
	this.showHair = true;
	this.showHello = false;
	this.color = "#55a";

	var r = 0;
	var g = 0;
	var b = 0;
	
	this.restart = function restart(){

	}
	
	function randomIntFromInterval(min, max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}

	
	this.draw = function draw(){
		if(this.showHello == true){
			_g_context.fillStyle = "black";
			_g_context.font = "20px Arial";
			_g_context.fillText("Hello", _over, _down-20);
		}
		
		if(this.showHair == true){
			_g_context.fillStyle = "brown";
			_g_context.fillRect(_over, _down-10, 50, 10);
		}
		
		_g_context.fillStyle = "yellow";
		_g_context.fillRect(_over, _down, 50, 70);
		
		_g_context.fillStyle = "black";
		_g_context.fillRect(_over+10, _down+50, 30, 10);
		
		_g_context.fillStyle = this.color;
		_g_context.fillRect(_over+10, _down+20, 10, 10);
		_g_context.fillRect(_over+30, _down+20, 10, 10);
	}
	
	this.move = function move(amount){
		_over += amount;
	}
	
	this.randomColors = function randomColors(){
		r = randomIntFromInterval(0, 255);
		g = randomIntFromInterval(0, 255);
		b = randomIntFromInterval(0, 255);
		this.color = "rgb(" + r + "," + g + "," + b + ")";
	}
}