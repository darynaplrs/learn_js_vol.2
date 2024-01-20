"use strict"

function sumAll(...args){
	let sum = 0;
	for (let item of args){
		sum += +item;
	}
	return sum;
}

function theRest (arg1, arg2, arg3, ...rest){
	console.log(`This is the first argument: ${arg1}`);
	console.log(`This is the second argument: ${arg2}`);
	console.log(`This is the third argument: ${arg3}`);
	console.log(`And this is the rest: ${rest.join(", ")}`);
}