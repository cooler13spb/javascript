console.log("Задание 1:");
let arr = [8, 3, 1, 6, -2, 9, 8];
let i;
for (i = 0; arr[i] + arr [i + 1] !== 7; i++) {
 }
console.log("Найдены два числа сумма которых 7:", arr[i], arr[i + 1]);

console.log("Задание 2:");

for (i = 1; i <=20; i++){
	if (i % 3 == 0 && i % 5 == 0){
	console.log("три_пять");
} else if (i % 5 == 0){
	console.log("пять");
} else if (i % 3 == 0){
	console.log("три");
} else {
	console.log(i);}
}

console.log("Задание 3:");
let a = 2,b = 3,c = 4;

if (a + b > c && b + c > a && a + c > b){
	
	if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2) ||
	Math.pow(a, 2) + Math.pow(c, 2) == Math.pow(b, 2) ||
	Math.pow(b, 2) + Math.pow(c, 2) == Math.pow(a, 2)){
	console.log("Прямоугольный");
	} 
	else if (Math.pow(a, 2) + Math.pow(b, 2) < Math.pow(c, 2) ||
	Math.pow(a, 2) + Math.pow(c, 2) < Math.pow(b, 2) ||
	Math.pow(b, 2) + Math.pow(c, 2) < Math.pow(a, 2)){
	console.log("Тупой");	
	} 
	else {
	console.log("Острый");
	}	
	}
	else {
	console.log("Не существует");
	}

console.log("Задание 4_1: не плнял задачу");
// 	arr = [];
// let data = prompt("введите число");
//     arr.length = data;


console.log("Задание 4_2:");
a = 1
 for (i = 1; i <= 20; ++i){
 	a = a * 2;
 console.log(a);
}

console.log("Задание 4_3:");
let height = 10;
let str = "";
a = "#";
for (i = 1; i <= height; i++){
	str += a;
	console.log(str);
}

console.log("Задание 5:");
let tar = 10;
let ms = 3;
for (i = 1; tar !==0 && ms !==0; i++){
	tar = tar - 1;
	ms = ms - 0.5;
	console.log("моющего средства осталось:"+ms);
	if (tar == 0){
		console.log("тарелоки закончились")
	}
	else if (ms == 0){
	console.log("тарелок осталось:"+tar)
	}
	}