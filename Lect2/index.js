function Task1(a, b){ // Задание 1
	if(a > b) return true;
	else return false;
}

Task1(10, 15);
Task1(25, 20);

function Task2(str){ // Задание 2
	str = "Вы ввели " + str;
	alert(str);
}

Task2("Hello");

function Task3(any){ // Задание 3
	if(any === null || any === undefined)
		return true;
	else return false;
}

var b, c = 15;
Task3(b); Task3(c);

function Task4(object1){ // Задание 4
	object1.checked = true;
}

var obj1 = {prop1 : 'Hello', prop2 : 123};
Task4(obj1);
obj1.checked;

function Task5(number){ // Задание 5
    if(number >= 0){
	for(var i = 0; i <= number; i++)
		console.log(i);
	for(var i = number; i >= 0; i--)
		console.log(i);
	}
	else {
		for(var i = 0; i >= number; i--)
		console.log(i);	
		for(var i = number; i <= 0; i++)
		console.log(i);	
	}
}

Task5(12);
Task5(-7);