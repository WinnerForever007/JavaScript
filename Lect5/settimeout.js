var message = "Успех!";

var prom = new Promise((resolve, reject) => {
	setTimeout(function(){
	resolve(message);}, 2000);
});

prom.then((message) => {
	console.log(message);
}