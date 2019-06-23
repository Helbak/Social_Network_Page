function Controller() {
    this.logic = new Logic();
    this.model = new Model();
};

Controller.prototype.init = function () {
    const indev = document.getElementById('indev');
    indev.innerHTML = this.model.getStep1();

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const confirm = document.getElementById("confirm");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");

    username.value = this.model.username;
    phone.value = this.model.phone;
    password.value = this.model.password;
    confirm.value = this.model.confirm;
    email.value = this.model.email;

    username.addEventListener('keyup', function () {
            if (this.logic.checkUsernameLength(username.value) === true && this.logic.checkUsernameValidation(username.value) === true) {
                this.redDrawer("usernameArea", 'black');
                this.hideTip();
            }
            if (this.logic.checkUsernameLength(username.value) === false || this.logic.checkUsernameValidation(username.value) === false) {
                this.redDrawer("usernameArea", 'red');
                this.showTip("username");
            }
        }.bind(this),
        false);


    password.addEventListener('keyup', function () {
            if (this.logic.checkPasswordLength(password.value) !== false && this.logic.checkPasswordValidation(password.value) === true) {
                this.redDrawer("passwordArea", 'black');
                this.hideTip();
            }

            if (this.logic.checkPasswordLength(password.value) === false || this.logic.checkPasswordValidation(password.value) === false) {
                this.redDrawer("passwordArea", 'red');
                this.showTip("password");
            }

        }.bind(this),
        false);


    confirm.addEventListener('keyup', function () {
            if (this.logic.checkConfirm(password.value, confirm.value) === true) {
                this.redDrawer("confirmArea", 'black');
                this.hideTip();
            }
            if (this.logic.checkConfirm(password.value, confirm.value) === false) {
                this.redDrawer("confirmArea", 'red');
                this.showTip("confirm");
            }
        }.bind(this),
        false);


    email.addEventListener('keyup', function () {
            if (this.logic.checkEmailValidation(email.value) === true) {
                this.redDrawer("emailArea", 'black');
                this.hideTip();
            }
            if (this.logic.checkEmailValidation(email.value) === false) {
                this.redDrawer("emailArea", 'red');
                this.showTip("email");
            }
        }.bind(this),
        false);


    phone.addEventListener('keyup', function () {
            if (this.logic.checkPhoneNumberValidation(phone.value) === true) {
                this.redDrawer("phoneArea", 'black');
                this.hideTip();
            }
            if (this.logic.checkPhoneNumberValidation(phone.value) === false) {
                this.redDrawer("phoneArea", 'red');
                this.showTip("phone");
            }
        }.bind(this),
        false);

    const nextFromStep1 = document.getElementById("nextButton");
    nextFromStep1.addEventListener('click', function () {
            if (this.logic.checkPhoneNumberValidation(phone.value) === true &&
                this.logic.checkPhoneNumberValidation(phone.value) === true &&
                this.logic.checkConfirm(password.value, confirm.value) === true &&
                this.logic.checkPasswordLength(password.value) !== false &&
                this.logic.checkPasswordValidation(password.value) === true
            ) {
                this.model.setUsername(username.value);
                this.model.setPhone(phone.value);
                this.model.setPassword(password.value);
                this.model.setConfirm(confirm.value);
                this.model.setEmail(email.value);
                this.hideTip();
                this.functionStep2();
            }
        }.bind(this),
        false);
};
Controller.prototype.functionStep2 = function () {

    const indev = document.getElementById('indev');
    indev.innerHTML = this.model.getStep2();
    const name = document.getElementById('name');
    const surname = document.getElementById('surname');
    const gender = document.getElementById('gender');
    const relation = document.getElementById('relation');

    name.value=this.model.name;
    surname.value=this.model.surname;
    gender.value=this.model.gender;
    relation.value=this.model.relation;


    name.addEventListener('keyup', function () {
            if (this.logic.checkNameValidation(name.value) === true) {
                this.model.setName(name.value);
                this.redDrawer("nameArea", "black");
            }
            if (this.logic.checkNameValidation(name.value) === false) {
                this.redDrawer("nameArea", "red");
            }
        }.bind(this),
        false);

    surname.addEventListener('keyup', function () {
            this.model.setSurname(surname.value);
            }.bind(this),
        false);

    gender.addEventListener('change', function () {
            this.model.setGender(gender.value);

        }.bind(this),
        false);

    relation.addEventListener('change', function () {
            this.model.setRelation(relation.value);

        }.bind(this),
        false);

    const backButtonFrom2 = document.getElementById("backButtonFrom2");
    backButtonFrom2.addEventListener('click', function () {
            this.init();
        }.bind(this),
        false);
    const nextButtonFrom2 = document.getElementById('nextButtonFrom2');

    nextButtonFrom2.addEventListener('click', function () {

        if (this.logic.checkNameValidation(name.value) === true) {
            this.functionStep3();
        }
        }.bind(this),
        false);

};
Controller.prototype.functionStep3 = function () {


    const indev = document.getElementById('indev');
    indev.innerHTML = this.model.getStep3();

    const progrLang = document.getElementById('progrLang');
    progrLang.addEventListener('change', function () {
                    this.model.setProgrLang(progrLang.value);
        }.bind(this),
        false);
    const experience = document.getElementById('experience');
    experience.addEventListener('change', function () {
            this.model.setExperience(progrLang.value);
        }.bind(this),
        false);
    const backButtonFromStep3 = document.getElementById('backButtonFromStep3');
    backButtonFromStep3.addEventListener('click', function () {
            this.functionStep2();
        }.bind(this),
        false);
    const checkboxRules = document.getElementById('checkboxRules');

    checkboxRules.addEventListener('change',function () {
        this.model.setRules(checkboxRules.checked);

        }.bind(this),
        false);
    const registerButton = document.getElementById('registerButton');
    registerButton.addEventListener('click', function () {
        if(this.model.rules===true){
            this.init();}
        }.bind(this),
        false);
};

Controller.prototype.redDrawer = function (id, color) {

    let area = document.getElementById(id);
    if (color === 'black') {
        area.style = "color: rgba(9, 1, 1, 0.95);";
    }
    if (color === 'red') {
        area.style = "color: rgba(254, 27, 46, 0.95)";
    }
};

Controller.prototype.showTip = function (id) {
    if (id === 'username') {
        console.log(this.model.usernameTipString);
        const tip = document.getElementById('tooltip');
        tip.style.display = 'block';
        tip.innerHTML = this.model.usernameTipString;
        tip.style.top = '300px';
        tip.style.left = '950px';
    } else if (id === 'password') {
        const tip = document.getElementById('tooltip');
        tip.style.display = 'block';
        tip.innerHTML = this.model.passwordTipString;
        tip.style.top = '380px';
        tip.style.left = '950px';
    } else if (id === 'confirm') {
        const tip = document.getElementById('tooltip');
        tip.style.display = 'block';
        tip.innerHTML = this.model.confirmTipString;
        tip.style.top = '430px';
        tip.style.left = '950px';
    } else if (id === 'email') {
        const tip = document.getElementById('tooltip');
        tip.style.display = 'block';
        tip.innerHTML = this.model.emailTipString;
        tip.style.top = '500px';
        tip.style.left = '950px';
    } else if (id === 'phone') {
        const tip = document.getElementById('tooltip');
        tip.style.display = 'block';
        tip.innerHTML = this.model.phoneTipString;
        tip.style.top = '550px';
        tip.style.left = '950px';
    } else {
        return false;
    }
};

Controller.prototype.hideTip = function () {
    const tip = document.getElementById('tooltip');
    return tip.style.display = 'none';
};