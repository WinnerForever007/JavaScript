export function checkUndefined(und){
	if(typeof und != 'undefined'){
		alert("Значение не равно undefined");}
	else {
		alert("undefined")}
}

export function checkNull(n){
	if(n === null){
		alert("NULL");}
	else {
		alert("не NULL");}
}

export function checkNan(ch){
	if(isNaN(ch)){
		alert("NaN");}
	else{
		alert("не является NaN");}
}

export function checkEmptyObject(obj){
	if(typeof obj === "object" && obj !== null){
		if(Object.keys(obj).length === 0){
		alert("Объект пустой");}
		else {
		alert("Объект не является пустым");}
	} else {alert("Не является объектом");}
}

export function objectTransformation(obj){
	var newObj = new Object();
	if(typeof obj === "object" && obj !== null){
		for(var i in obj){
			if(obj.hasOwnProperty(i)){
			newObj[i] = obj[i] + " new Value";}
		} return newObj;
	} else {alert("Не является объектом");}
}

export function randomInteger(int1, int2){
	if(isNaN(int1) || isNaN(int2)){
		alert("NaN");}
	else{
		if(int1 > int2){
		var c = int2; int2 = int1; int1 = c;}
		return Math.floor(Math.random() * (int2 - int1)) + int1;}
}

export function deepComparison(obj1, obj2){
	if(typeof obj1 == typeof obj2){
		if(typeof obj1 == "object" && obj1 !== null){
			var equ = true;
			for(var prop in obj1){
				if(obj1.hasOwnProperty(prop) && obj2.hasOwnProperty(prop)){
					if(!deepComparison(obj1[property], obj2[property])){
						equ = false;
					}
				}
				else {
					equ = false;}
			} return equ;
		} else {
			return false;}
	}
}

export function deleteProperties(obj){
	if(typeof obj === "object" && obj !== null){
		for(var prop in obj){
			if(obj.hasOwnProperty(prop)){
			}
		}
	} else {
		alert("Не является объектом");}
}