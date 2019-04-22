let comment = document.getElementsByName('comment');


let input = document.getElementById('input');


input.addEventListener('click', inText);

//проверку на заполнение формы не успел сделать:(

function inText(){
	var arrImg = ["img/1.png", "img/3.png", "img/2.png"];
	var randImg = Math.floor(Math.random() * arrImg.length);

	var arrName = ["Дмитрий", "Леонид", "Василий", "Анатолий"];
	var randName = Math.floor(Math.random() * arrName.length);


	let box = document.createElement('div');
	box.classList.add('box');
	post.appendChild(box);

	let img = document.createElement('img');
	img.setAttribute('src', arrImg[randImg]);
	img.setAttribute('id', 'img');
	img.classList.add('img');
	

	let name = document.createElement('div');
	name.classList.add('name');
	let nameT = arrName[randName];
	name.appendChild(document.createTextNode(nameT));
	
	
	let data = document.createElement('em');
	data.classList.add('data');
	let date = Date();
	data.appendChild(document.createTextNode(date));
	

	let text = document.getElementById('comment').value;


	let com = document.createElement('div');
	com.classList.add('com');
	

	post.insertBefore(box, post.firstChild);


	box.appendChild(img);
	box.appendChild(name);
	box.appendChild(data);
	box.appendChild(com);
	com.innerHTML = text;


}
