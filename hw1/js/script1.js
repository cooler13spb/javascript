console.log("Задание 1");

let height = parseInt (prompt("Введите высоту"));
let width = parseInt (prompt("Введите ширину"));

console.log("Площадь:", height * width);

let res = (height === width) ? "высота и ширина равны" : 
(height > width) ? "высота больше" : "ширина больше";
console.log(res);

console.log("Задание 2");

var square = 10 * 100;
var state = 15 * 50;
res = (square % state);
console.log("М^2 не занято:", res);

console.log("Задание 3");

var square_oval = 15 * 100
var square_oval_2 = 600
res = (square_oval - square_oval_2);
var res_2 = res / 100;

console.log("Площадь кольца СМ^2:", res);
console.log("Площадь кольца ДМ^2:", res_2);

console.log("Задание 4");

var x = 4;
var y = 2;
var z;


if (x > y) {
	z = x;
	x = y;
	y = z;
}

//или
//[x, y] = (x > y) ? [y, x] : [x, y];

//или
// res = (x == y) ? "равны" : (x < y) ? "x меньше" : [x, y] = [y, x];
// console.log(res);

console.log(x, y);


console.log("Задание 5");
var m =-5;
var n =20;
var a, b, c = 10;
a = m - c; 
b = n - c; 
d = Math.abs(a);
e = Math.abs(b);
res = (d < e) ? "Ближе a" : "Ближе b";
console.log(res);