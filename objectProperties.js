"use strict";

// Прапори властивостей

let obj1 = {
	name: "George",
	age: 12,
	sayHi() {
		alert("Hello!");
	},
}


let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      alert("Ім’я занадто коротке, потрібно щонайменше 4 символи");
      return;
    }
    this._name = value;
  }
};