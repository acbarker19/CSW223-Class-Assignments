/* Alec Barker */

var gCanvas;
var gContext;

var gOver, gDown;

var gColor;
	
function init()
{
	//alert("start init()");
	
	gCanvas = document.getElementById('myCanvas');
	gContext = gCanvas.getContext('2d');
	
	gOver = 55;
	gDown = 70;
	
	gColor = "#f00";
	
	drawRedBox();

	//alert("end init()");
}

	

function drawRedBox()
{
	//draw a background over the entire canvas
	gContext.fillStyle = "#fff";
	gContext.fillRect (0, 0, 1000, 1000);

	gContext.fillStyle = gColor;
	gContext.fillRect(gOver,gDown,20,30);
}

function changeToBlue()
{
	gColor = "#00f";
	drawRedBox();
}

function changeToRed()
{
	gColor = "#f00";
	drawRedBox();
}

function changeToGreen()
{
	gColor = "#0f0";
	drawRedBox();
}

function changeLocation()
{
	gOver = Math.floor((Math.random() * 200) + 1);
	gDown = Math.floor((Math.random() * 100) + 1);
	drawRedBox();
}

function changeText1()
{
	displayInfo("text1", "Hello There!");
}

function changeText2()
{
	displayInfo("text2", "This is Lab #2 for <b>CSW 223</b>.");
}

function changeText3()
{
	var tempElement = document.getElementById("input3");
	var tempValue = tempElement.value;
	displayInfo("text3", tempValue);
}
function changeText4()
{
	displayInfo("text4", "<b>Billy</b> walked on the <b>sidewalk</b> alongside a busy <b>street</b> and licked a <b>lolli-pop</b>.");
}

function doAddition()
{
	var num1Element = document.getElementById("num1");
	var num1Value = num1Element.value;	
	var intNum1Value = parseInt(num1Value);
	
	var num2Element = document.getElementById("num2");
	var num2Value = num2Element.value;	
	var intNum2Value = parseInt(num2Value);
	
	var note = intNum1Value+intNum2Value;
	displayInfo("num1+num2", note);
}

function displayInfo(html_id, theInfo)
{
	document.getElementById(html_id).innerHTML = theInfo;
}