function Logic() {

};

Logic.prototype.checkUsernameLength = function(username){
    if (username.length < 1 || username.length > 40) {
        return false;
    } else {
        return true;
    }
};

Logic.prototype.checkUsernameValidation = function (username) {
    if (/[a-zA-Z0-9!:,<>;@#$%^&*()\-_+=]/.test(username)) {
        return true
    } else {
        return false;
    }
};
Logic.prototype.checkPasswordLength = function (password) {
    if (password.length < 6 || password.length > 30) {
        return false;
    } else if ( password.length >= 6 && password.length <= 8) {
        return "Password is easy"
    } else if ( password.length >= 9 && password.length <= 10) {
        return "Password is middle"
    } else if ( password.length >= 11 && password.length <= 40) {
        return "Password is hard"
    }
};

Logic.prototype.checkPasswordValidation = function (password) {
    if(/(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])^[^а-яА-Я]+$/.test(password)){
        return true;
    } else {
        return false;
    }
};

Logic.prototype.checkConfirm = function (stringA, stringB){
    if (stringA === stringB) {
        return true;
    } else {
        return false;
    }
};

Logic.prototype.checkEmailValidation = function (email) {
    if(/(^[-a-zA-Z0-9!#$%&'*+/=?^_`{|}~]{0,20})+(?:\.[-a-zA-Z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-zA-Z0-9]([-a-zA-Z0-9]{0,18}[a-zA-Z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/.test(email)){
        return true;
    } else {
        return false;
    }
};

Logic.prototype.checkPhoneNumberValidation = function (phoneNumber) {
    if(/^\(?([+1]{2})\)?[-.()]?([0-9]{3})[-.()]?([0-9]{3})[-.()]?([0-9]{6})$/.test(phoneNumber)){
        return true;
    } else if (/^\(?([+]{1}[3]{1}[8]{1}[0]{1})\)?[-.()]?([0-9]{3})[-.()]?([0-9]{6})$/.test(phoneNumber)){
        return true;
    } else if (/^\(?([+]{1}[9]{1}[7]{1}[2]{1})\)?[-.()]?([0-9]{3})[-.()]?([0-9]{6})$/.test(phoneNumber)) {
        return true;
    } else {
        return false;
    }
};

Logic.prototype.checkNameValidation = function (name) {
    if (/^[a-zA-Z]+$/.test(name)){
        return true;
    } else {
        return false;
    }
};







