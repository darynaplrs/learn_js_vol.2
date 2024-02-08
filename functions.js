"use strict"

let arr = [1, 6, 3, 7, 3, 2, 90];
let arr2 = [3, 4, 2, 5, 67, 3, 4];

function sumAll(...args){
	console.log(typeof(args));
	// alert(`Додатків: ${arguments.length}`);
	let sum = 0;
	for (let item of args){
		sum += item;
	}
	return sum;
}

function average(...args){
	return sumAll(args) / average.length;
}

let arrCopy = [...arr]; //making a copy

function theRest (arg1, arg2, arg3, ...rest){
	console.log(`This is the first argument: ${arg1}`);
	console.log(`This is the second argument: ${arg2}`);
	console.log(`This is the third argument: ${arg3}`);
	console.log(`And this is the rest: ${rest.join(", ")}`);
}

let object = {
	say: "hello",
	show: "peace",
}

let objectCopy = {...object}; // making a copy






/*У нас є вбудований для масивів метод arr.filter(f). Він фільтрує всі елементи через функцію f. Якщо вона повертає true, цей елемент повертається в отриманому масиві.

Зробіть набір “готових до використання” фільтрів:

inBetween(a, b) – фільтрує елементи які більше a та менше b. Також має включати елементи, які дорівнюють їм.
inArray([...]) – фільтрує елементи, які включено у заданий масив.
Використання має бути таким:

arr.filter(inBetween(3,6)) – вибирає лише значення від 3 до 6.
arr.filter(inArray([1,2,3])) – вибирає лише елементи, які включені у масив [1,2,3].*/



function inBetween(a, b){
	return function(num){
		return num >= a && num <= b;
	}
}

function inArray(arr){
	return function(num) {
		return arr.includes(num);
	}
}


// --------

function byField(fieldName){
	return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1; // ми беремо перше і наступне значення, порівнюємо їх імена, 
	// якщо перше більше за наступне повертаємо одиницю (тобто true), якщо ні - -1(false). Таким чином, якщо true, то 
	// порядок не міняється.
}



// -----


function makeArmy() {
  let shooters = [];

  let i = 0;

  while (i < 10) {
  	let shooterNum = i;

  	let shooter = function() { // створюємо функцію стрільця,
    	alert( shooterNum ); // що має показувати свій номер
    };
    
    shooters.push(shooter); // додаємо її до масиву
    
    i++;
  }

  // ...і повертаємо масив стрільців
  return shooters;
}

let army = makeArmy();



// Властивості функцій як обʼєктів

function sayBye(){
	console.log("Bye!");

	// sayBye.counter++;
	// console.log(`Counter is: ${sayBye.counter}`);
}



let whichColor = function bl(which){
	if (which){
		alert(`This color is: ${which}`)
	} else {
		bl("neutral")
	}
};

let whatColor = whichColor;
whichColor = null;



// Встановити і зменшити лічильник

/*function makeCounter(){

function counter(){
	return counter.count++;

}

	counter.count = 0;

	return counter;
}*/


// let timerId = setInterval(sayBye, 1000);
// setTimeout(()=> {clearInterval(timerId); alert("stop"); }, 3002);

//алтернативний спосіб на setInterval
/*let timerId2 = setTimeout(function tick(){
	alert("tick");
	timerId2 = setTimeout(tick, 1000)
}, 1000);
*/




// Вивід кожної секунди

function printNumbers1(from, to) {
	let current = from;

	let timerId = setInterval(function(){
		alert(current);
		if (current === to){
			clearInterval(timerId);
		}
		current++;
	}, 1000)
}


function printNumbers2(from, to){
	let current = from;

	setTimeout( function go(){
		alert(current);
		if(current < to) {
			setTimeout(go, 1000)
		}
		current++;

	}, 1000)

}



//Декоратори

function spy(func){

	function wrapper(...args){ //стоврюємо основну функцію декоратора
		wrapper.calls.push(args); //додаємо до масиву, котрий створимо нижчеаргументи функції
		return func.apply(this, args); // повертаємо виклик функції з контекстом в this
	}

	wrapper.calls = []; //створюємо той масив

	return wrapper; // повертаємо функцію декоратора
}

function work(a, b) {
  alert( a + b ); // працює як довільна функція або метод
}

work = spy(work); //додаємо декоратор


// ----------

function mul(a, b){
	return a * b;
}

let double = mul.bind(null, 2);




