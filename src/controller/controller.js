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

    username.value=this.model.username;
    phone.value=this.model.phone;
    password.value=this.model.password;
    confirm.value=this.model.confirm;
    email.value=this.model.email;

    username.addEventListener('keyup', function () {
            if (this.logic.checkUsernameLength(username.value) === true && this.logic.checkUsernameValidation(username.value) === true) {
                this.redDrawer("usernameArea", 'black');
            }
            if (this.logic.checkUsernameLength(username.value) === false || this.logic.checkUsernameValidation(username.value) === false) {
                this.redDrawer("usernameArea", 'red');
            }
        }.bind(this),
        false);


    password.addEventListener('keyup', function () {
            if (this.logic.checkPasswordLength(password.value) !== false && this.logic.checkPasswordValidation(password.value) === true) {
                this.redDrawer("passwordArea", 'black');
            }

            if (this.logic.checkPasswordLength(password.value) === false || this.logic.checkPasswordValidation(password.value) === false) {
                this.redDrawer("passwordArea", 'red');
            }

        }.bind(this),
        false);


    confirm.addEventListener('keyup', function () {
            if (this.logic.checkConfirm(password.value, confirm.value) === true) {
                this.redDrawer("confirmArea", 'black');
            }
            if (this.logic.checkConfirm(password.value, confirm.value) === false) {
                this.redDrawer("confirmArea", 'red');
            }
        }.bind(this),
        false);


    email.addEventListener('keyup', function () {
            if (this.logic.checkEmailValidation(email.value) === true) {
                this.redDrawer("emailArea", 'black');
            }
            if (this.logic.checkEmailValidation(email.value) === false) {
                this.redDrawer("emailArea", 'red');
            }
        }.bind(this),
        false);


    phone.addEventListener('keyup', function () {
            if (this.logic.checkPhoneNumberValidation(phone.value) === true) {
                this.redDrawer("phoneArea", 'black');
            }
            if (this.logic.checkPhoneNumberValidation(phone.value) === false) {
                this.redDrawer("phoneArea", 'red');
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
        )
            {
                this.model.setUsername(username.value);
                this.model.setPhone(phone.value);
                this.model.setPassword(password.value);
                this.model.setConfirm(confirm.value);
                this.model.setEmail(email.value);
                this.functionStep2();
                            }
        }.bind(this),
        false);

};
Controller.prototype.functionStep2 = function () {
    const indev = document.getElementById('indev');
    indev.innerHTML = this.model.getStep2();
    const name = document.getElementById('name');
    name.addEventListener('keyup', function () {
            this.model.setName(name.value);
            this.redDrawer("nameArea");

        }.bind(this),
        false);
    const surname = document.getElementById('surname');
    surname.addEventListener('keyup', function () {
            this.model.setSurname(surname.value);
            this.redDrawer("surnameArea");
        }.bind(this),
        false);
    const gender = document.getElementById('gender');
    gender.addEventListener('click', function () {
            this.model.setGender(gender.value);

        }.bind(this),
        false);
    const relation = document.getElementById('relation');
    relation.addEventListener('click', function () {
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
            this.functionStep3();
        }.bind(this),
        false);

};
Controller.prototype.functionStep3 = function () {
    const indev = document.getElementById('indev');
    indev.innerHTML = this.model.getStep3();

    const progrLang = document.getElementById('progrLang');
    progrLang.addEventListener('click', function () {
            this.model.setProgrLang(progrLang.value);
            console.log("username =  " + this.model.getProgrLang());
        }.bind(this),
        false);
    const experience = document.getElementById('experience');
    experience.addEventListener('click', function () {
            this.model.setExperience(progrLang.value);
        }.bind(this),
        false);
    const backButtonFromStep3 = document.getElementById('backButtonFromStep3');
    backButtonFromStep3.addEventListener('click', function () {
            this.functionStep2();
        }.bind(this),
        false);
    const registerButton = document.getElementById('registerButton');
    registerButton.addEventListener('click', function () {
            this.init();
        }.bind(this),
        false);
};
// Controller.prototype.redDrawer = function (id) {
//     const arrayArea= this.model.getArea();
//    for(let i=0; i<arrayArea.length; i++){
//
//        if(id ===arrayArea[i]){
//            let area = document.getElementById(arrayArea[i]);
//            area.style ="color: rgba(254, 27, 46, 0.95);";
//
//        }
//        if(id !==arrayArea[i] ){
//            let area = document.getElementById(arrayArea[i]);
//            area.style ="color: rgba(9, 1, 1, 0.95);";
//        }
//    }
//
// };

Controller.prototype.redDrawer = function (id, color) {
    console.log(" Controller.prototype.redDrawer ");
    let area = document.getElementById(id);
    if (color === 'black') {
        area.style = "color: rgba(9, 1, 1, 0.95);";
    }
    if (color === 'red') {
        area.style = "color: rgba(254, 27, 46, 0.95)";
    }
};