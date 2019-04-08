(function (){
'use strict';

console.log("Задание 1:");

let str = prompt("Задание 1:Введите строку в которой будем искать");
let str1 = prompt("Задание 1:Введите подстроку (что будем искать)");
let new_str = prompt("Задание 1:Введите новую подстроку (на что будем менять)");

function searchStr(str, search, change){
	let res = new RegExp(search, 'g');
	let res1 = str.replace(res, change);
	return res1;
}

console.log(searchStr(str, str1, new_str));


console.log("Задание 2:");

str = prompt("Задание 2: Введите строку:");
function searchNum(str){
	if (!str)
	return [];
	return str.match(/(\d+)/g);
}
console.log(searchNum(str));




console.log("Задание 3:");

let towns = prompt("Задание 3:Введите города через пробел:");

function townA_Z(towns){
	if(!towns){
	 return '';
	}
	let tows_split = towns.split(" ");
	return tows_split.sort().toString().replace(/,/g, " ");;
}

console.log(townA_Z(towns));



}());



