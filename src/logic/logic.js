function Logic() {

};

Logic.prototype.checkUsernameLength = function (username) {
    if (username.length < 1 || username.length > 40) {
        return false;
    } else {
        return true;
    }
};

Logic.prototype.checkUsernameValidation = function (username) {
    if (/[a-zA-Z0-9!:,<>;@#$%^&*()\-_+=]+$/.test(username)) {
        return true
    } else {
        return false;
    }
};

Logic.prototype.checkPasswordLength = function (password) {
    if (password.length < 6 || password.length > 30) {
        return false;
    } else if (password.length >= 6 && password.length <= 8) {
        return "Password is easy"
    } else if (password.length >= 9 && password.length <= 10) {
        return "Password is middle"
    } else if (password.length >= 11 && password.length <= 40) {
        return "Password is hard"
    }
};
Logic.prototype.checkPasswordOnlyLength = function (password) {
    if (password.length >= 6 || password.length <= 30) {
        return true;
    }
    return false;
};

Logic.prototype.checkPasswordValidation = function (password) {
    if (/(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])^[^а-яА-Я]+$/.test(password)) {
        return true;
    } else {
        return false;
    }
};

Logic.prototype.checkConfirm = function (stringA, stringB) {
    if (stringA === stringB) {
        return true;
    } else {
        return false;
    }
};

Logic.prototype.checkEmailValidation = function (email) {
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        return true;
    } else {
        return false;
    }
};

Logic.prototype.checkPhoneNumberValidation = function (phoneNumber) {
    if (/^\(?([+1]{2})\)?[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})$/.test(phoneNumber)) {
        return true;
    } else if (/^\(?([+]{1}[-.() ]?[3]{1}[-.() ]?[8]{1}[-.() ]?[0]{1})\)?[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})$/.test(phoneNumber)) {
        return true;
    } else if (/^\(?([+]{1}[-.() ]?[9]{1}[-.() ]?[7]{1}[-.() ]?[2]{1})\)?[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})[-.() ]?([0-9]{1})$/.test(phoneNumber)) {
        return true;
    } else {
        return false;
    }
};

Logic.prototype.checkNameValidation = function (name) {
    if (name.length < 2 || name.length > 40) {
        return false;
    }
    if (/^[a-zA-Z]+$/.test(name)) {
        return true;
    } else {
        return false;
    }
};
Logic.prototype.checkListGender = function (datalist) {
    if (datalist === 'male' || datalist === 'female') {
        return true;
    }
    if (datalist !== 'male' || datalist !== 'female') {
        return false;
    }
};
Logic.prototype.checkListRelation = function (relation) {
    if (relation === 'single' || relation === 'married' || relation === 'divorced') {
        return true;
    }
    return false;
};
Logic.prototype.checkListLanguages = function (language, languages) {
    for(let i=0; i<languages.length; i++){
        if(languages[i]===language){
            return true;
        }
    }
    return false;
};
Logic.prototype.checkListExperience = function (experience, experiences) {
    for(let i=0; i<experiences.length; i++){
        if(experiences[i]===experience){
            return true;
        }
    }
    return false;
};
Logic.prototype.checkStringIsEmpty = function (string) {
    if(string!==""){
        return true;
    }
    return false;
};

