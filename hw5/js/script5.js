(function (){
'use strict';

let goods = {
        piano: {
            title: "Пианино",
            price: 3000,
            count: 25
        },
        guitar: {
            title: "Гитара",
            price: 1200,
            count: 40
        },
        drum: {
            title: "Барабаны",
            price: 2700,
            count: 12
        },
        flute: {
            title: "Флейта",
            price: 900,
            count: 50
        },
        harp: {
            title: "Арфа",
            price: 3400,
            count: 5
        }
    };

console.log("Задание 1:");

function getGoods(obj, from, to){
	let resObj = {};
	for (let key in obj) {
		// console.log("key", key);
		// console.log(obj[key]);
		// console.log(obj[key]["price"]);
		if (obj[key]["price"] >= from && obj[key]["price"] <= to){
		resObj[key] = obj[key];
		}
	}
	console.log(resObj);
	return resObj;
}

getGoods(goods, 2000, 3000);




console.log("Задание 2:");

function basket(obj, title, countToCart) {
                     if(obj[title].count < countToCart){
                        console.log("Не достаточно товара на складе. Остаток:" ,obj[title].count + "шт.");
                        return;
                     }
                        obj[title].count -= countToCart;
                        console.log(obj);
}
basket(goods, 'guitar', 13);





console.log("Задание 3:");

let books = [
    { author: 'Толстой', title: 'Война и мир'},
    { author: 'Гончаров', title: 'Обломов'},
    { author: 'Лермонтов', title: 'Герой Нашего Времени'}
];

function book(arr, title){
    for (let i = 0; i < arr.length; i++){
        if (arr[i].title === title){
        return arr[i];
    }
}
};
   
console.log(book(books,'Обломов'));





console.log("Задание 4:");

let days = {
        1: "Понедельник",
        2: "Вторник",
        3: "Среда",
        4: "Четверг",
        5: "Пятница",
        6: "Суббота",
        7: "Воскресение",
        };

let date = new Date();
let day = date.getDay();
console.log(days[day]);


}());
