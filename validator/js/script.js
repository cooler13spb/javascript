function FormValidator(form) {
    this._form = form;
    this._elem = document.querySelectorAll('.validate');
    this._errArr = [];
    this._form.addEventListener('submit', this.checkForm.bind(this));
    for(let i=0; i<this._elem.length; i++){
        this._elem[i].addEventListener('focus', this.removeMessage.bind(this));
    }
}

FormValidator.prototype.addRules = function(rule){
    this._rules = rule.rules;
    this._messages = rule.messages;
};

FormValidator.prototype.checkForm = function(event){
    event.preventDefault();
    for (let i = 0; i < this._elem.length; i++){
        if (!this._rules[this._elem[i].name].test(this._elem[i].value)) {
            this._errArr.push([this._elem[i].name]);
        }
        if (!this._rules[this._elem[i].name].test(this._elem[i].value)){
            this._elem[i].nextSibling.innerText = this._messages[this._elem[i].name];
        }
    }
};



FormValidator.prototype.removeMessage = function(event){
    event.target.nextSibling.innerText = "";
};



FormValidator.prototype.isValid = function(){
    if (this._errArr.length > 0){
        console.log("Количество ошибок:", this._errArr.length);
        return;
    }return true;
};



function sendForm() {
    if(formValidator.isValid()){
       console.log("Ошибок нет");
    }
}



let form = document.forms.someForm;
let formValidator = new FormValidator(form);

formValidator.addRules({
    rules: {
        login: /^[a-zA-Z0-9-_\.]{3,15}$/,
        pwd: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/
    },
    messages: {
        login: "Логин может состоять из латинских букв и цифр, длина от 3 до 15 символов",
        pwd: "Пароль должен содержать строчные и прописные латинские буквы и цифры"
    },
});


form.addEventListener("submit", sendForm);