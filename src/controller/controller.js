function Controller() {
    this.logic = new Logic();
    this.model = new Model();
};

Controller.prototype.init = function () {
const indev = document.getElementById('indev');
indev.innerHTML = this.model.getStep1();

const nextFromStep1 = document.getElementById("nextButton");
    nextFromStep1.addEventListener('click', function () {
        indev.innerHTML = this.model.getStep3();
    }.bind(this),
    false);
};