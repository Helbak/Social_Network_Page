function Controller() {
    this.tooltip = document.getElementById('tooltip');
    this.logic = new Logic();
    this.model = new Model();
}

Controller.prototype.init = function (a) {
    const indev = document.getElementById('indev');
    indev.innerHTML = this.model.getStep1();

    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const confirm = document.getElementById("confirm");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");

    if (a === 2) {
        if (this.logic.checkUsernameLength(this.model.username) === true && this.logic.checkUsernameValidation(this.model.username) === true) {
            this.redDrawer("usernameArea", 'blue');
        }
        if (this.logic.checkUsernameLength(this.model.username) === false || this.logic.checkUsernameValidation(this.model.username) === false) {
            this.redDrawer("usernameArea", 'red');
            this.model.username = '';
        }
        if (this.logic.checkPasswordLength(this.model.password) !== false && this.logic.checkPasswordValidation(this.model.password) === true) {
            this.redDrawer("passwordArea", 'blue');
        }
        if (this.logic.checkPasswordLength(this.model.password) === false || this.logic.checkPasswordValidation(this.model.password) === false) {
            this.redDrawer("passwordArea", 'red');
            this.model.password = '';
            this.model.confirm = '';
        }
        if (this.logic.checkConfirm(this.model.password, this.model.confirm) === true) {
            this.redDrawer("confirmArea", 'blue');
        }
        if (this.logic.checkConfirm(this.model.password, this.model.confirm) === false || this.model.password === '') {
            this.redDrawer("confirmArea", 'red');
            this.model.confirm = '';
        }
        if (this.logic.checkEmailValidation(this.model.email) === true) {
            this.redDrawer("emailArea", 'blue');
        }
        if (this.logic.checkEmailValidation(this.model.email) === false) {
            this.redDrawer("emailArea", 'red');
            this.model.email = '';
        }
        if (this.logic.checkPhoneNumberValidation(this.model.phone) === true) {
            this.redDrawer("phoneArea", 'blue');
        }
        if (this.logic.checkPhoneNumberValidation(this.model.phone) === false) {
            this.redDrawer("phoneArea", 'red');
            this.model.phone = '';
        }
    }
    ;
    username.value = this.model.username;
    phone.value = this.model.phone;
    password.value = this.model.password;
    confirm.value = this.model.confirm;
    email.value = this.model.email;

    username.addEventListener('keyup', function () {
            if (this.logic.checkUsernameLength(username.value) === true && this.logic.checkUsernameValidation(username.value) === true) {
                this.redDrawer("usernameArea", 'blue');
                this.model.setUsername(username.value);
                this.hideTip();
            }
            if (this.logic.checkUsernameLength(username.value) === false || this.logic.checkUsernameValidation(username.value) === false) {
                this.redDrawer("usernameArea", 'red');
                this.model.setUsername('');
                this.showTip("username");
            }
        }.bind(this),
        false);


    password.addEventListener('keyup', function () {
            if (this.logic.checkConfirm(password.value, confirm.value) === true) {
                this.redDrawer("confirmArea", 'blue');
            }
            if (this.logic.checkConfirm(password.value, confirm.value) === false) {
                this.redDrawer("confirmArea", 'red');
            }
            if (this.logic.checkPasswordLength(password.value) !== false && this.logic.checkPasswordValidation(password.value) === true) {
                this.redDrawer("passwordArea", 'blue');
                this.model.setPassword(password.value);
                this.hideTip();
            }
            if (this.logic.checkPasswordLength(password.value) === false || this.logic.checkPasswordValidation(password.value) === false) {
                this.redDrawer("passwordArea", 'red');
                this.model.setPassword('');
                this.showTip("password");
            }
        }.bind(this),
        false);


    confirm.addEventListener('keyup', function () {
            if (this.logic.checkConfirm(password.value, confirm.value) === true) {
                this.redDrawer("confirmArea", 'blue');
                this.model.setConfirm(confirm.value);
                this.hideTip();
            }
            if (this.logic.checkConfirm(password.value, confirm.value) === false) {
                this.redDrawer("confirmArea", 'red');
                this.model.setConfirm('');
                this.showTip("confirm");
            }
        }.bind(this),
        false);


    email.addEventListener('keyup', function () {
            if (this.logic.checkEmailValidation(email.value) === true) {
                this.redDrawer("emailArea", 'blue');
                this.model.setEmail(email.value);
                this.hideTip();
            }
            if (this.logic.checkEmailValidation(email.value) === false) {
                this.redDrawer("emailArea", 'red');
                this.model.setEmail('');
                this.showTip("email");
            }
        }.bind(this),
        false);

    phone.addEventListener('keyup', function () {
            if (this.logic.checkPhoneNumberValidation(phone.value) === true) {
                this.redDrawer("phoneArea", 'blue');
                this.model.setPhone(phone.value);
                this.hideTip();
            }
            if (this.logic.checkPhoneNumberValidation(phone.value) === false) {
                this.redDrawer("phoneArea", 'red');
                this.model.setPhone('');
                this.showPhoneTip();
            }
        }.bind(this),
        false);

    const nextFromStep1 = document.getElementById("nextButton");
    nextFromStep1.addEventListener('click', function () {
            this.hideTip();
            this.functionStep2(0);
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

    if (this.model.countStep2 > 1) {
        if (this.logic.checkNameValidation(this.model.name) === true) {
            this.redDrawer("nameArea", "blue");
        }
        if (this.logic.checkNameValidation(this.model.name) === false) {
            this.redDrawer("nameArea", "red");
            this.model.name = '';
        }
        if (this.logic.checkNameValidation(this.model.surname) === true) {
            this.redDrawer("surnameArea", "blue");
        }
        if (this.logic.checkNameValidation(this.model.surname) === false) {
            this.redDrawer("surnameArea", "red");
            this.model.surname = '';
        }
        if(this.model.gender===''){
            this.redDrawer("genderArea", "red");
        }
        if(this.model.gender!==''){
            this.redDrawer("genderArea", "blue");
        }
        if(this.model.relation===''){
            this.redDrawer("relationArea", "red");
        }
        if(this.model.relation!==''){
            this.redDrawer("relationArea", "blue");
        }
    }
    ;


    name.value = this.model.name;
    surname.value = this.model.surname;
    gender.value = this.model.gender;
    relation.value = this.model.relation;
    this.model.setCountStep2(2);

    name.addEventListener('keyup', function () {
            if (this.logic.checkNameValidation(name.value) === true) {
                this.model.setName(name.value);
                this.model.name = name.value;
                this.redDrawer("nameArea", "blue");
                this.hideTip();
            }
            if (this.logic.checkNameValidation(name.value) === false) {
                this.redDrawer("nameArea", "red");
                this.model.name ='';
                this.showTip("nameArea");
            }
        }.bind(this),
        false);

    surname.addEventListener('keyup', function () {
            if (this.logic.checkNameValidation(surname.value) === true) {
                this.model.setSurname(surname.value);
                this.model.surname = surname.value;
                this.redDrawer("surnameArea", "blue");
                this.hideTip();
            }
            if (this.logic.checkNameValidation(surname.value) === false) {
                this.redDrawer("surnameArea", "red");
                this.model.surname = '';
                    this.showTip("surnameArea");
            }
        }.bind(this),
        false);

    gender.addEventListener('change', function () {
            this.model.setGender(gender.value);
            this.redDrawer("genderArea", "blue");
        }.bind(this),
        false);
    gender.addEventListener('keyup', function () {
            if (this.logic.checkListGender(gender.value) === false) {
                gender.value = '';
                this.model.setGender(gender.value);
                this.redDrawer("genderArea", "black");
            }
        }.bind(this),
        false);
    relation.addEventListener('change', function () {
            this.model.setRelation(relation.value);
            this.redDrawer("relationArea", "blue");
        }.bind(this),
        false);
    relation.addEventListener('keyup', function () {
            if (this.logic.checkListRelation(relation.value) === false) {
                relation.value = '';
                this.redDrawer("relationArea", "black");
                this.model.setRelation(relation.value);
            }
        }.bind(this),
        false);
    const backButtonFrom2 = document.getElementById("backButtonFrom2");
    backButtonFrom2.addEventListener('click', function () {
            this.init(2);
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
    const progrLang = document.getElementById('progrLang');
    const experience = document.getElementById('experience');
    const checkboxRules = document.getElementById('checkboxRules');
    const backButtonFromStep3 = document.getElementById('backButtonFromStep3');
    const registerButton = document.getElementById('registerButton');
    registerButton.disabled=true;
    if (
        this.model.rulesBox === true
        &&
        this.logic.checkNameValidation(this.model.name) === true
        &&
        this.logic.checkUsernameValidation(this.model.username) === true
        &&
        this.logic.checkUsernameLength(this.model.username) === true
        &&
        this.logic.checkPasswordValidation(this.model.password) === true
        &&
        this.logic.checkPasswordOnlyLength(this.model.password) === true
        &&
        this.logic.checkConfirm(this.model.confirm, this.model.password) === true
        &&
        this.logic.checkEmailValidation(this.model.email) === true &&
        this.logic.checkPhoneNumberValidation(this.model.phone) === true &&
        this.logic.checkPhoneNumberValidation(this.model.phone) === true &&
        this.logic.checkStringIsEmpty(this.model.progrLang) === true &&
        this.logic.checkStringIsEmpty(this.model.experience) === true
    ) {
        registerButton.disabled=false;
    }
    ;


    if (this.model.countStep3 > 1) {

        if(this.model.progrLang===''){
            this.redDrawer("progrLangArea", "red");
        }
        if(this.model.progrLang!==''){
            this.redDrawer("progrLangArea", "blue");
        }
        if(this.model.experience===''){
            this.redDrawer("experienceArea", "red");
        }
        if(this.model.experience!==''){
            this.redDrawer("experienceArea", "blue");
        }
    }
    ;

    progrLang.value = this.model.progrLang;
    experience.value = this.model.experience;
    checkboxRules.checked = this.model.rulesBox;
    this.model.setCountStep3(2);
    progrLang.addEventListener('change', function () {
            this.model.setProgrLang(progrLang.value);
            this.redDrawer("progrLangArea", "blue");
            if (
                this.model.rulesBox === true
                &&
                this.logic.checkNameValidation(this.model.name) === true
                &&
                this.logic.checkUsernameValidation(this.model.username) === true
                &&
                this.logic.checkUsernameLength(this.model.username) === true
                &&
                this.logic.checkPasswordValidation(this.model.password) === true
                &&
                this.logic.checkPasswordOnlyLength(this.model.password) === true
                &&
                this.logic.checkConfirm(this.model.confirm, this.model.password) === true
                &&
                this.logic.checkEmailValidation(this.model.email) === true &&
                this.logic.checkPhoneNumberValidation(this.model.phone) === true &&
                this.logic.checkPhoneNumberValidation(this.model.phone) === true &&
                this.logic.checkStringIsEmpty(this.model.progrLang) === true &&
                this.logic.checkStringIsEmpty(this.model.experience) === true
            ) {
                registerButton.disabled=false;

            }
            ;
        }.bind(this),
        false);
    progrLang.addEventListener('keyup', function () {
            if (this.logic.checkListLanguages(progrLang.value, this.model.languages) === false) {
                progrLang.value = '';
                this.redDrawer("progrLangArea", "black");
                this.model.setProgrLang(progrLang.value);
            }
        }.bind(this),
        false);

    experience.addEventListener('change', function () {
            this.model.setExperience(experience.value);
            this.redDrawer("experienceArea", "blue");
            if (
                this.model.rulesBox === true
                &&
                this.logic.checkNameValidation(this.model.name) === true
                &&
                this.logic.checkUsernameValidation(this.model.username) === true
                &&
                this.logic.checkUsernameLength(this.model.username) === true
                &&
                this.logic.checkPasswordValidation(this.model.password) === true
                &&
                this.logic.checkPasswordOnlyLength(this.model.password) === true
                &&
                this.logic.checkConfirm(this.model.confirm, this.model.password) === true
                &&
                this.logic.checkEmailValidation(this.model.email) === true &&
                this.logic.checkPhoneNumberValidation(this.model.phone) === true &&
                this.logic.checkPhoneNumberValidation(this.model.phone) === true &&
                this.logic.checkStringIsEmpty(this.model.progrLang) === true &&
                this.logic.checkStringIsEmpty(this.model.experience) === true
            ) {

                registerButton.disabled=false;

            }
            ;
        }.bind(this),
        false);
    experience.addEventListener('keyup', function () {
            if (this.logic.checkListExperience(experience.value, this.model.experiences) === false) {
                experience.value = '';
                this.redDrawer("experienceArea", "black");
                this.model.setExperience(experience.value);
            }
        }.bind(this),
        false);


    backButtonFromStep3.addEventListener('click', function () {
            this.functionStep2();
        }.bind(this),
        false);

    checkboxRules.addEventListener('change', function () {
            if (this.model.setRulesBox(checkboxRules.checked) === true) {
                this.hideTip();
                if (
                    this.model.rulesBox === true
                    &&
                    this.logic.checkNameValidation(this.model.name) === true
                    &&
                    this.logic.checkUsernameValidation(this.model.username) === true
                    &&
                    this.logic.checkUsernameLength(this.model.username) === true
                    &&
                    this.logic.checkPasswordValidation(this.model.password) === true
                    &&
                    this.logic.checkPasswordOnlyLength(this.model.password) === true
                    &&
                    this.logic.checkConfirm(this.model.confirm, this.model.password) === true
                    &&
                    this.logic.checkEmailValidation(this.model.email) === true &&
                    this.logic.checkPhoneNumberValidation(this.model.phone) === true &&
                    this.logic.checkPhoneNumberValidation(this.model.phone) === true &&
                    this.logic.checkStringIsEmpty(this.model.progrLang) === true &&
                    this.logic.checkStringIsEmpty(this.model.experience) === true
                ) {

                    registerButton.disabled=false;

                }
                ;
            } else {
                this.showTip("checkboxRules");
            }
            this.model.setRulesBox(checkboxRules.checked);
        }.bind(this),
        false);

    const btnRules = document.getElementById('btnRules');
    btnRules.addEventListener('click', function () {
            this.functionRules();
        }.bind(this),
        false);


    registerButton.addEventListener('click', function () {
            if (
                this.model.rulesBox === true
                &&
                this.logic.checkNameValidation(this.model.name) === true
                &&
                this.logic.checkUsernameValidation(this.model.username) === true
                &&
                this.logic.checkUsernameLength(this.model.username) === true
                &&
                this.logic.checkPasswordValidation(this.model.password) === true
                &&
                this.logic.checkPasswordOnlyLength(this.model.password) === true
                &&
                this.logic.checkConfirm(this.model.confirm, this.model.password) === true
                &&
                this.logic.checkEmailValidation(this.model.email) === true &&
                this.logic.checkPhoneNumberValidation(this.model.phone) === true &&
                this.logic.checkPhoneNumberValidation(this.model.phone) === true &&
                this.logic.checkStringIsEmpty(this.model.progrLang) === true &&
                this.logic.checkStringIsEmpty(this.model.experience) === true
            ) {

                this.functionResult();

            }
            ;
        }.bind(this),
        false);
};
Controller.prototype.functionRules = function () {
    const indev = document.getElementById('indev');
    indev.innerHTML = this.model.getRules();
    const backButtonFromRules = document.getElementById('backButtonFromRules');
    backButtonFromRules.addEventListener('click', function () {
            this.functionStep3();
        }.bind(this),
        false);
};
Controller.prototype.functionResult = function () {
    window.open('successedRegistr.html');
    const indev = document.getElementById('indev');
    indev.innerHTML = this.model.getResult();
    const usernameResult = document.getElementById("usernameResult");
    const passwordResult = document.getElementById("passwordResult");
    const confirmResult = document.getElementById("confirmResult");
    const emailResult = document.getElementById("emailResult");
    const phoneResult = document.getElementById("phoneResult");
    const nameResult = document.getElementById("nameResult");
    const surnameResult = document.getElementById("surnameResult");
    const genderResult = document.getElementById("genderResult");
    const relationResult = document.getElementById("relationResult");
    const progrLangResult = document.getElementById("progrLangResult");
    const experienceResult = document.getElementById("experienceResult");

    usernameResult.value = "username: " + this.model.username;
    passwordResult.value = "password: " + this.model.password;
    confirmResult.value = "confirm: " + this.model.confirm;
    emailResult.value = "email: " + this.model.email;
    phoneResult.value = "phone: " + this.model.phone;
    nameResult.value = "name: " + this.model.name;
    genderResult.value = "gender: " + this.model.gender;
    surnameResult.value = "surname: " + this.model.surname;
    relationResult.value = "relation: " + this.model.relation;
    progrLangResult.value = "progrLang: " + this.model.progrLang;
    experienceResult.value = "experience: " + this.model.experience;

    // const backButtonFromResult = document.getElementById("backButtonFromResult");
    // backButtonFromResult.addEventListener('click', function () {
    //         this.init();
    //     }.bind(this),
    //     false);
};

Controller.prototype.redDrawer = function (id, color) {

    let area = document.getElementById(id);
    if (color === 'black') {
        area.style = "color: rgba(9, 1, 1, 0.95);";
    }
    if (color === 'red') {
        // area.style = "color: rgba(254, 27, 46, 0.95)";
        area.style = "color: rgba(255, 0, 0)";
    }
    if (color === 'blue') {
        area.style = "color:  rgba(55, 68, 206)";
    }
};

Controller.prototype.showTip = function (id) {
    switch (id) {
        case ('username'):
            this.tooltip.style.display = 'block';
            this.tooltip.innerHTML = this.model.usernameTipString;
            this.tooltip.style.top = '300px';
            this.tooltip.style.left = '980px';
            break;
        case ('password'):
            this.tooltip.style.display = 'block';
            this.tooltip.innerHTML = this.model.passwordTipString;
            this.tooltip.style.top = '380px';
            this.tooltip.style.left = '980px';
            break;
        case('confirm'):
            this.tooltip.style.display = 'block';
            this.tooltip.innerHTML = this.model.confirmTipString;
            this.tooltip.style.top = '430px';
            this.tooltip.style.left = '980px';
            break;
        case('email'):
            this.tooltip.style.display = 'block';
            this.tooltip.innerHTML = this.model.emailTipString;
            this.tooltip.style.top = '500px';
            this.tooltip.style.left = '980px';
            break;
        case('nameArea'):
            this.tooltip.style.display = 'block';
            this.tooltip.innerHTML = this.model.nameTipString;
            this.tooltip.style.top = '300px';
            this.tooltip.style.left = '980px';
            break;
        case('surnameArea'):
            this.tooltip.style.display = 'block';
            this.tooltip.innerHTML = this.model.surnameTipString;
            this.tooltip.style.top = '380px';
            this.tooltip.style.left = '980px';
            break;
        case('checkboxRules'):
            this.tooltip.style.display = 'block';
            this.tooltip.innerHTML = this.model.checkBoxTipString;
            this.tooltip.style.top = '450px';
            this.tooltip.style.left = '528px';
            break;
        default :
            break;
    }
};

Controller.prototype.showPhoneTip = function () {
    if (phone.value[0] !== '+') {
        this.tooltip.style.display = 'block';
        this.tooltip.innerHTML = this.model.phoneTipString1;
        this.tooltip.style.top = '570px';
        this.tooltip.style.left = '980px';
        //подсказка про коды ниже
    } else if (phone.value[0] === '+' && phone.value !== '+1' && phone.value !== '+380' && phone.value !== '+972' && phone.value.length < 5) {
        this.tooltip.style.display = 'block';
        this.tooltip.innerHTML = this.model.phoneTipString2;
        this.tooltip.style.top = '570px';
        this.tooltip.style.left = '980px';
        //подсказка про длину цифр ниже
    } else if (phone.value.substring(0, 2) === '+1' || phone.value.substring(0, 4) === '+380' || phone.value.substring(0, 4) === '+972') {
        this.tooltip.style.display = 'block';
        this.tooltip.innerHTML = this.model.phoneTipString3;
        this.tooltip.style.top = '570px';
        this.tooltip.style.left = '980px';
        //подсказка про только цифры ниже
    }
    if (phone.value[0] === '+' && /[А-Яа-яA-Za-z  ]+$/.test(phone.value)) {
        this.tooltip.style.display = 'block';
        this.tooltip.innerHTML = this.model.phoneTipString4;
        this.tooltip.style.top = '570px';
        this.tooltip.style.left = '980px';
    }
};

Controller.prototype.hideTip = function () {
    return this.tooltip.style.display = 'none';
};