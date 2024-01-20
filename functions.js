"use strict"

let arr = [1, 6, 3, 7, 3, 2, 90];
let arr2 = [3, 4, 2, 5, 67, 3, 4];

function sumAll(...args){
	alert(`Додатків: ${arguments.length}`);
	let sum = 0;
	for (let item of args){
		sum += +item;
	}
	return sum;
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

let objectCopy = {...object};