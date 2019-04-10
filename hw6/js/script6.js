(function (){
'use strict';

let goods = {
        piano: {
            title: "Пианино",
            price: 3000,
            count: 25,
            img: '1.png'
        },
        guitar: {
            title: "Гитара",
            price: 1200,
            count: 40,
            img: '2.png'
        },
        drum: {
            title: "Барабаны",
            price: 2700,
            count: 12,
            img: '3.png'
        },
        flute: {
            title: "Флейта",
            price: 900,
            count: 50,
            img: '4.png'
        },
        harp: {
            title: "Арфа",
            price: 3400,
            count: 5,
            img: '5.png'
        }
    };


function createElement(obj){
	for (let key in obj){
		console.log(obj[key].title);
		let title = document.createElement("h2");
		title.innerText = obj[key].title;

		console.log(obj[key].img);
		let img = document.createElement("img");
		img.setAttribute("src", "img/" + obj[key].img);

		console.log(obj[key].price);
		let price = document.createElement("p");
		price.innerText = "Цена: "+obj[key].price;

		let div = document.createElement('div');
		div.classList.add("box");
		div.appendChild(title);
		div.appendChild(img);
		div.appendChild(price);

		let goodsDiv = document.getElementById("goods");
		goodsDiv.appendChild(div);
	}
}

createElement(goods);





let articles = [
        {
            id: 1,
            title: "JS",
            description: "Описание",
            author: "Dmitry"
        },
        {
            id: 2,
            title: "PHP",
            description: "Описание",
            author: "Mike"
        },
        {
            id: 3,
            title: "HTML",
            description: "Описание",
            author: "Alex"
        },
        {
            id: 4,
            title: "Базы Данных",
            description: "Описание",
            author: "Peter"
        }
    ];


let allTable = document.getElementsByTagName("table");
let table = allTable[0];
table.setAttribute("border", "1");

let caption = table.createCaption();
caption.innerText = "Задание 2";

 
 for (let i = 0; i < articles.length; i++){
   let row = table.insertRow(i); 

   for (let key in articles[i]){
    let cell = row.insertCell(-1);
    cell.innerText = articles[i][key];

}
}





}());