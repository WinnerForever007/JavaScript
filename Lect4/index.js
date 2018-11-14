var ourCalc = document.calculator;
var actualResult = 0;
var isNewNumFlag = false;
var operPending = "";
var n = ourCalc.outText.value;
alert(n);

function number(num){
	
	if(isNewNumFlag){
		ourCalc.outText.value = num;
		isNewNumFlag = false;
	} else {
		if(ourCalc.outText.value == "0"){
		ourCalc.outText.value = num;}
		else { 
		ourCalc.outText.value += num;}
	}
}

function operation(oper){
	var outText = ourCalc.outText.value;
	if(isNewNumFlag && operPending != "="){
		ourCalc.outText.value = actualResult;
	} else {
		isNewNumFlag = true;
		if('+' == operPending) actualResult += parseFloat(outText);
		else if('-' == operPending) actualResult -= parseFloat(outText);
		else if('/' == operPending) actualResult /= parseFloat(outText);
		else if('*' == operPending) actualResult *= parseFloat(outText);
		else actualResult = parseFloat(outText);
		ourCalc.outText.value = actualResult;
		operPending = oper;
	}
}

function clearNumber(){
	ourCalc.outText.value = "0";
	isNewNumFlag = true;
}

function clearAll(){
	operPending = "";
	ourCalc.outText.value = "0";
	isNewNumFlag = true;
}