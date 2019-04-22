let form = document.forms.lesson;

// Задание 8.2 i
form=document.forms.lesson;

let color=form.elements.color;
for (let i = 0; i < color.length; i++) {
	color[i].addEventListener('click', showColor);
}
function showColor(){
	form.elements.checkbox_fieldset.style.background = this.value;
}

// Задание 8.2 ii


// Задание 8.2 iii
let elem = form.elements.disabledOnOff;
	elem.addEventListener('click', activated);

function activated(){
	form.elements.disable.disabled= this.checked;
	if (form.elements.disable.hasAttribute('disabled'))
	{
		form.elements.disable.removeAttribute('disabled');
	}

else {
	form.elements.disable.setAttribute('disabled', '1');
}
}