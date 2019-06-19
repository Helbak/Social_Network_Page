function Logic() {

};
Logic.prototype.aPlusB = function (a,b) {
    return a+b;
};
Logic.prototype.checkAmountOfSignInUsername = function(username){
    return "test";
};
Logic.prototype.checkTypeOfSignUsername = function (username) {
    return "test";
};
Logic.prototype.checkAmountOfSignInPassword = function (password) {
    return "test";
};
Logic.prototype.checkTypeOfSignInPassword = function (password) {
    return "test";
};
Logic.prototype.checkAmountOfSignInEmail = function (email) {
    return "test";
};
Logic.prototype.checkTypeOfSignInEmail = function (email) {
    return "test";
};
Logic.prototype.fullCheckPhoneNumber = function(phoneNumber){
    const clearedPhoneNumber = this.clearPhoneNumberFromDots();
    if(this.checkFirstPlusInPhone(clearedPhoneNumber)===true && this.checkTypeSignInPhone(clearedPhoneNumber)===true && this.checkCodeOfPhone===true && this.checkAmountOfSignInPhone===true/* здесь перебрать все проверки номера*/){
        return true;
    }
    return false;
};
Logic.prototype.clearPhoneNumberFromDots = function (clearedPhoneNumber) {
    return "test";
};
Logic.prototype.checkFirstPlusInPhone = function (clearedPhoneNumber) {
    return "test";
};
Logic.prototype.checkTypeSignInPhone = function (clearedPhoneNumber) {
    return "test";
};
Logic.prototype.checkCodeOfPhone = function (clearedPhoneNumber) {
    return "test";
};
Logic.prototype.checkAmountOfSignInPhone = function (clearedPhoneNumber) {
    return "test";
};








