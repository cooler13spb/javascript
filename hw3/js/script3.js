console.log("Задание 1:");
let arr = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 9, 4, 5];

function comp(a, a2){
if (a.length === a2.length){
for (let i = 0; i < a.length; i++){
	if (a[i] === a2[i]){
	}
		else {
			return false;
		}
	}
} else {
	return false;
}
return true;
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

function range(a, b, c) {
  let arr = [];  
  if (!c) c = 1;
  for (let i = a; i <= b; i += c) arr.push(i);
  return arr;
}

console.log(range(2, 15, 3));

console.log("Задание 4:");

function countProduct(count) {
	let product = count+" товаров";
    if (count % 100 < 5 || count % 100 > 20) {
        if (count % 10 == 1) product = count+" товар";
        if (count % 10 > 1 && count % 10 < 5) product = count+" товара";
    }
    return product;
}
console.log(countProduct(3));