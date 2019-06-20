function Controller() {
    this.logic = new Logic();
    this.model = new Model();
};

Controller.prototype.init = function () {
const indev = document.getElementById('indev');
indev.innerHTML = this.model.getStep1();

const username = document.getElementById("username");
username.addEventListener('click', function () {
        this.model.setUsername(username.value);



    }.bind(this),
    false);

    const password = document.getElementById("password");
    password.addEventListener('click', function () {
            this.model.setPassword(password.value);
        }.bind(this),
        false);

    const confirm = document.getElementById("confirm");
    confirm.addEventListener('click', function () {
            this.model.setConfirm(confirm.value);
        }.bind(this),
        false);

    const email = document.getElementById("email");
    confirm.addEventListener('click', function () {
            this.model.setEmail(email.value);
        }.bind(this),
        false);

    const phone = document.getElementById("phone");
    confirm.addEventListener('click', function () {
            this.model.setPhone(phone.value);
        }.bind(this),
        false);

    const nextFromStep1 = document.getElementById("nextButton");
    nextFromStep1.addEventListener('click', function () {
        indev.innerHTML = this.model.getStep2();
            const backButtonFrom2 = document.getElementById("backButtonFrom2");
            backButtonFrom2.addEventListener('click', function () {
                    indev.innerHTML = this.model.getStep1();
                }.bind(this),
                false);
            const nextButtonFrom2 = document.getElementById('nextButtonFrom2');
            nextButtonFrom2.addEventListener('click', function () {
                    indev.innerHTML = this.model.getStep3();
                }.bind(this),
                false);


        }.bind(this),
    false);
};
Controller.prototype.functionStep2 = function () {

};
Controller.prototype.functionStep3 = function () {

};
