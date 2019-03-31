console.log("Задание 1:");
let arr = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];

function comp(a, a2){
if (a.length === a2.length){
for (let i = 0; i < a.length; i++){
	if (a[i] === a2[i]){
	}
		else {
			res = "folse";
			return res;
		}
	}
} else {
	res = "folse"
	return res;
}
res = "true";
return res;
}

res = comp(arr, arr2);
console.log(res);

console.log("Задание 2:");

function sum(a){

if (a < 10){
return a;
}
else {
	return Math.trunc((a % 10)) + Math.trunc(sum(a / 10));
}

}

res = sum(12345);
console.log(res);

console.log("Задание 3:");