function Controller() {
    this.logic = new Logic();
    this.model = new Model();
};

Controller.prototype.init = function () {
const indev = document.getElementById('indev');
indev.innerHTML = this.model.getStep1();

const username = document.getElementById("username");
username.addEventListener('keydown', function () {
        this.model.setUsername(username.value);
    }.bind(this),
    false);

    const password = document.getElementById("password");
    password.addEventListener('keydown', function () {
            this.model.setPassword(password.value);
        }.bind(this),
        false);

    const confirm = document.getElementById("confirm");
    confirm.addEventListener('keydown', function () {
            this.model.setConfirm(confirm.value);
        }.bind(this),
        false);

    const email = document.getElementById("email");
    confirm.addEventListener('keydown', function () {
            this.model.setEmail(email.value);
        }.bind(this),
        false);

    const phone = document.getElementById("phone");
    confirm.addEventListener('keydown', function () {

            this.model.setPhone(phone.value);
        }.bind(this),
        false);
    const nextFromStep1 = document.getElementById("nextButton");
nextFromStep1.addEventListener('click', function () {
        this.functionStep2();
    }.bind(this),
    false);
};
Controller.prototype.functionStep2 = function () {
    const indev = document.getElementById('indev');
    indev.innerHTML = this.model.getStep2();
    const name = document.getElementById('name');
    name.addEventListener('keydown', function () {
            this.model.setName(name.value);
        }.bind(this),
        false);
    const surname = document.getElementById('surname');
    surname.addEventListener('keydown', function () {
            this.model.setSurname(surname.value);
        }.bind(this),
        false);



    const backButtonFrom2 = document.getElementById("backButtonFrom2");
    backButtonFrom2.addEventListener('click', function () {
            this.init();
        }.bind(this),
        false);
    const nextButtonFrom2 = document.getElementById('nextButtonFrom2');
    nextButtonFrom2.addEventListener('click', function () {
            this.functionStep3();
        }.bind(this),
        false);

};
Controller.prototype.functionStep3 = function () {
    const indev = document.getElementById('indev');
    indev.innerHTML = this.model.getStep3();
    const backButtonFromStep3 = document.getElementById('backButtonFromStep3');
    backButtonFromStep3.addEventListener ('click', function () {
            this.functionStep2();
        }.bind(this),
        false);


};
