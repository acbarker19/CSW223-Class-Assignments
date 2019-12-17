var _g_context;
var _g_canvas;

var _g_myList;

var tempObject;

var newPersonOver = 280;
var newPersonDown = 50;

var howMany = 3;

function init(){

	_g_canvas = document.getElementById('myCanvas');
	_g_context = _g_canvas.getContext("2d");
	
	_g_myList = [];
	_g_myList.push(new Person("fred", 0, 10, 50));
	_g_myList.push(new Person("jim", 0, 100, 50));
	_g_myList.push(new Person("george", 0, 190, 50));
	
	draw();
}

function draw(){
	_g_context.fillStyle = "#aff";
	_g_context.fillRect(0, 0, 1000, 1000);
	
	if(howMany > 12){
		alert("You can only draw 12 people. Setting the number to 12.");
		howMany = 12;
	}
	
	var i;
	for(i = 0; i < howMany; i++){
		tempObject = _g_myList[i];
		tempObject.draw();
	}
	
	//PersonList[0].draw();
}

function create3People(){
	howMany = 3;
	
	_g_myList.push(new Person("fred2", 0, 10, 50));
	_g_myList.push(new Person("jim2", 0, 100, 50));
	_g_myList.push(new Person("george2", 0, 190, 50));
	
	draw();
}

function randomColors(){
	var i;
	for(i = 0; i < howMany; i++){
		tempObject = _g_myList[i];
		tempObject.randomColors();
	}
	
	draw();
}

function showHair(){
	var i;
	for(i = 0; i < howMany; i++){
		tempObject = _g_myList[i];
		tempObject.showHair = true;
	}
	
	draw();
}

function hideHair(){
	var i;
	for(i = 0; i < howMany; i++){
		tempObject = _g_myList[i];
		tempObject.showHair = false;
	}
	
	draw();
}

function sayHello(){
	var i;
	for(i = 0; i < howMany; i++){
		tempObject = _g_myList[i];
		tempObject.showHello = true;
	}
	
	draw();
}

function sayNothing(){
	var i;
	for(i = 0; i < howMany; i++){
		tempObject = _g_myList[i];
		tempObject.showHello = false;
	}
	
	draw();
}

function moveLeft(){
	var i;
	for(i = 0; i < howMany; i++){
		tempObject = _g_myList[i];
		tempObject.move(-10);
	}
	
	draw();
}

function moveRight(){
	var i;
	for(i = 0; i < howMany; i++){
		tempObject = _g_myList[i];
		tempObject.move(10);
	}
	
	draw();
}

function newPerson(){
	howMany++;
	
	_g_myList.push(new Person("Person", 0, newPersonOver, newPersonDown));

	if(newPersonOver <= 190){
		newPersonOver += 90;
	}
	else{
		newPersonOver = 10;
		newPersonDown += 110;
	}
	
	draw();
}

function doButtonInputText() //set number of people using value in TextField
{
	//alert("start doButtonInputText");
	
	howMany = document.getElementById("numField").value;
	
	var i;
	for(i = 0; i < howMany; i++){
		_g_myList.push(new Person("Person", 0, newPersonOver, newPersonDown));
		
		if(newPersonOver <= 190){
		newPersonOver += 90;
		}
		else{
			newPersonOver = 10;
			newPersonDown += 110;
		}
	}
	
	//alert("doButtonInputText: "+howMany);
	
   	draw();
}