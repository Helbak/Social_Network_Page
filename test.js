const testLogic = new Logic();

describe("checkAmountOfSignInUsername tests of field USERNAME", () => {
    it('USERNAME is empty', function () {
        const act = testLogic.checkUsernameLength("");
        const exp = false;
        assert.equal(act, exp);
    });
    it('41 latin letter sign in USERNAME ', function () {
        const act = testLogic.checkUsernameLength("qwertyuiopqwertyuiopqwertyuiopqwertyuiopq");
        const exp = false;
        assert.equal(act, exp);
    });
    it('1 latin letter in USERNAME ', function () {
        const act = testLogic.checkUsernameLength("r");
        const exp = true;
        assert.equal(act, exp);
    });
    it('5 latin letter in USERNAME ', function () {
        const act = testLogic.checkUsernameValidation("radio");
        const exp = true;
        assert.equal(act, exp);
    });
    it('1 number in USERNAME ', function () {
        const act = testLogic.checkUsernameLength("1");
        const exp = true;
        assert.equal(act, exp);
    });
    it('41 numbers in USERNAME ', function () {
        const act = testLogic.checkUsernameLength("12345678901234567890123456789012345678901");
        const exp = false;
        assert.equal(act, exp);
    });
});

describe("checkTypeOfSignUsername tests of field USERNAME", () => {
    it('USERNAME is 1', function () {
        const act = testLogic.checkUsernameValidation(1);
        const exp = true;
        assert.equal(act, exp);
    });
    it('USERNAME is : ', function () {
        const act = testLogic.checkUsernameValidation(":");
        const exp = true;
        assert.equal(act, exp);
    });
    it('USERNAME is - ', function () {
        const act = testLogic.checkUsernameValidation("-");
        const exp = true;
        assert.equal(act, exp);
    });
    it('USERNAME is , ', function () {
        const act = testLogic.checkUsernameValidation(",");
        const exp = true;
        assert.equal(act, exp);
    });
    it('USERNAME is "ш" ', function () {
        const act = testLogic.checkUsernameValidation("ш");
        const exp = false;
        assert.equal(act, exp);
    });
    it('USERNAME is "Ш" ', function () {
        const act = testLogic.checkUsernameValidation("Ш");
        const exp = false;
        assert.equal(act, exp);
    });
    it('USERNAME is "R" ', function () {
        const act = testLogic.checkUsernameValidation("R");
        const exp = true;
        assert.equal(act, exp);
    });
    it('USERNAME is "r" ', function () {
        const act = testLogic.checkUsernameValidation("r");
        const exp = true;
        assert.equal(act, exp);
    });
    it('USERNAME is "+" ', function () {
        const act = testLogic.checkUsernameValidation("+");
        const exp = true;
        assert.equal(act, exp);
    });
    it('USERNAME is "=" ', function () {
        const act = testLogic.checkUsernameValidation("=");
        const exp = true;
        assert.equal(act, exp);
    });
    it('USERNAME is "fffffшшш" ', function () {
        const act = testLogic.checkUsernameValidation("fffffшшш");
        const exp = false;
        assert.equal(act, exp);
    });
});
describe("checkAmountOfSignInPassword tests of field PASSWORD", () => {
    it('one sign in PASSWORD', function () {
        const act = testLogic.checkPasswordLength("1");
        const exp = false;
        assert.equal(act, exp);
    });
    it('two sign in PASSWORD', function () {
        const act = testLogic.checkPasswordLength("12");
        const exp = false;
        assert.equal(act, exp);
    });
    it('three sign in PASSWORD', function () {
        const act = testLogic.checkPasswordLength("123");
        const exp = false;
        assert.equal(act, exp);
    });
    it('four sign in PASSWORD', function () {
        const act = testLogic.checkPasswordLength("1234");
        const exp = false;
        assert.equal(act, exp);
    });
    it('five sign in PASSWORD', function () {
        const act = testLogic.checkPasswordLength("12345");
        const exp = false;
        assert.equal(act, exp);
    });
    it('six sign in PASSWORD', function () {
        const act = testLogic.checkPasswordLength("123456");
        const exp = "Password is easy";
        assert.equal(act, exp);
    });
    it('seven sign in PASSWORD', function () {
        const act = testLogic.checkPasswordLength("1234567");
        const exp = "Password is easy";
        assert.equal(act, exp);
    });
    it('eight sign in PASSWORD', function () {
        const act = testLogic.checkPasswordLength("12345678");
        const exp = "Password is easy";
        assert.equal(act, exp);
    });
    it('nine sign in PASSWORD', function () {
        const act = testLogic.checkPasswordLength("123456789");
        const exp = "Password is middle";
        assert.equal(act, exp);
    });
    it('then sign in PASSWORD', function () {
        const act = testLogic.checkPasswordLength("1234567890");
        const exp = "Password is middle";
        assert.equal(act, exp);
    });
    it('11 sign in PASSWORD', function () {
        const act = testLogic.checkPasswordLength("12345678901");
        const exp = "Password is hard";
        assert.equal(act, exp);
    });
    it('30 sign in PASSWORD', function () {
        const act = testLogic.checkPasswordLength("123456789012345678901234567890");
        const exp = "Password is hard";
        assert.equal(act, exp);
    });
    it('31 sign in PASSWORD', function () {
        const act = testLogic.checkPasswordLength("1234567890123456789012345678901");
        const exp = false;
        assert.equal(act, exp);
    });
});
describe("checkPasswordValidation tests of field PASSWORD", () => {
    it('one sign big KYRYLITSA in PASSWORD', function () {
        const act = testLogic.checkPasswordValidation("ШQwer4tyuiop");
        const exp = false;
        assert.equal(act, exp);
    });
    it('one sign small KYRYLITSA in PASSWORD', function () {
        const act = testLogic.checkPasswordValidation("Qweю4rtyuiop");
        const exp = false;
        assert.equal(act, exp);
    });
    it('= in PASSWORD', function () {
        const act = testLogic.checkPasswordValidation("=Qwe4rtyuiop");
        const exp = true;
        assert.equal(act, exp);
    });
    it('+ in PASSWORD', function () {
        const act = testLogic.checkPasswordValidation("+Qwert4yuiop");
        const exp = true;
        assert.equal(act, exp);
    });
    it('no one number in PASSWORD', function () {
        const act = testLogic.checkPasswordValidation("Qwertyuiop");
        const exp = false;
        assert.equal(act, exp);
    });
    it('no one big letter in PASSWORD', function () {
        const act = testLogic.checkPasswordValidation("1wertyuiop");
        const exp = false;
        assert.equal(act, exp);
    });
    it('no one small letter in PASSWORD', function () {
        const act = testLogic.checkPasswordValidation("1QWERTYUI");
        const exp = false;
        assert.equal(act, exp);
    });
    it('one small letter, one big letter, one number', function () {
        const act = testLogic.checkPasswordValidation("1Q=dsfsdf");
        const exp = true;
        assert.equal(act, exp);
    });
    it('one small letter, one big letter, one number ONLY 6 SIGN', function () {
        const act = testLogic.checkPasswordValidation("1Qqwer");
        const exp = true;
        assert.equal(act, exp);
    });
    it('one small letter, one big letter, one number Cyryllic', function () {
        const act = testLogic.checkPasswordValidation("олрШва32we");
        const exp = false;
        assert.equal(act, exp);
    });
});
describe("checkAmountOfSignInEmail tests of field EMAIL", () => {
    it('no one sign before @', function () {
        const act = testLogic.checkEmailValidation("@");
        const exp = false;
        assert.equal(act, exp);
    });
    it('one sign before @', function () {
        const act = testLogic.checkEmailValidation("1@e.com");
        const exp = true;
        assert.equal(act, exp);
    });
    it('20 signs before @', function () {
        const act = testLogic.checkEmailValidation("12348901234565345350@f.com");
        const exp = true;
        assert.equal(act, exp);
    });
    it('21 signs before @', function () {
        const act = testLogic.checkEmailValidation("123456789012345678901@f.com");
        const exp = false;
        assert.equal(act, exp);
    });
    it('no one signs after @', function () {
        const act = testLogic.checkEmailValidation("123@");
        const exp = false;
        assert.equal(act, exp);
    });
    it('one signs after @', function () {
        const act = testLogic.checkEmailValidation("123@1.com.ua");
        const exp = true;
        assert.equal(act, exp);
    });
    it('20 signs after @', function () {
        const act = testLogic.checkEmailValidation("123@12345678901234567890.com.ua");
        const exp = true;
        assert.equal(act, exp);
    });
    it('21 signs after @', function () {
        const act = testLogic.checkEmailValidation("123@123456789012345678901.com.ua");
        const exp = false;
        assert.equal(act, exp);
    });
});
describe("checkTypeOfSignInEmail tests of field EMAIL", () => {
    it(' one sign KYRYLITSA before @', function () {
        const act = testLogic.checkEmailValidation("rш@df.com");
        const exp = false;
        assert.equal(act, exp);
    });

    it(' one sign KYRYLITSA after @', function () {
        const act = testLogic.checkEmailValidation("emaidl@ш.com");
        const exp = false;
        assert.equal(act, exp);
    });

    it(' one sign big latin and small latin', function () {
        const act = testLogic.checkEmailValidation("emAIL@EMail.com");
        const exp = true;
        assert.equal(act, exp);
    });
});


describe("clearPhoneNumberFromDots tests of field honeNumber", () => {
    it('one sign is empty "  +3812345678', function () {
        const act = testLogic.checkPhoneNumberValidation("  +3812345678");
        const exp = false;
        assert.equal(act, exp);
    });
    it('number has () "(+38123)45678', function () {
        const act = testLogic.checkPhoneNumberValidation("(+38123)45678");
        const exp = false;
        assert.equal(act, exp);
    });
    it('number has ()(( "  +38((12345678', function () {
        const act = testLogic.checkPhoneNumberValidation("(+38((123)45678");
        const exp = false;
        assert.equal(act, exp);
    });
    it('number has empty "+ 3 8  123 45 6 78 ', function () {
        const act = testLogic.checkPhoneNumberValidation("+ 3 8  123 45 6 78 ");
        const exp = false;
        assert.equal(act, exp);
    });
    it('number has -- "-+-38-123-45-6-78', function () {
        const act = testLogic.checkPhoneNumberValidation("-+-38-123-45-6-78");
        const exp = false;
        assert.equal(act, exp);
    });
    it('number has a , * "a+ 38,-123*45-6-78', function () {
        const act = testLogic.checkPhoneNumberValidation("a+ 38,-123*45-6-78");
        const exp = false;
        assert.equal(act, exp);
    });
});
describe("checkTypeSignInPhone tests of field PhoneNumber", () => {
    it('one sign is latin letter "  a+3812345678', function () {
        const act = testLogic.checkPhoneNumberValidation("a+3812345678");
        const exp = false;
        assert.equal(act, exp);
    });
    it('one sign is russian letter "  +3812345678', function () {
        const act = testLogic.checkPhoneNumberValidation("+381Ш2345678");
        const exp = false;
        assert.equal(act, exp);
    });
    it('number has plus and numbers +123456789012345', function () {
        const act = testLogic.checkPhoneNumberValidation("+123456789012345");
        const exp = false;
        assert.equal(act, exp);
    });
    it('number has  second plus +12+3456789012345', function () {
        const act = testLogic.checkPhoneNumberValidation("+12+3456789012345");
        const exp = false;
        assert.equal(act, exp);
    });
    it('number has  > +12>3456789012345 ', function () {
        const act = testLogic.checkPhoneNumberValidation("+12>3456789012345");
        const exp = false;
        assert.equal(act, exp);
    });
    it('number has  : +12:3456789012345', function () {
        const act = testLogic.checkPhoneNumberValidation("+12:3456789012345");
        const exp = false;
        assert.equal(act, exp);
    });
});
describe("checkCodeOfPhone tests of field PhoneNumber", () => {
    it('+380123456789 UA', function () {
        const act = testLogic.checkPhoneNumberValidation("+380123456789");
        const exp = true;
        assert.equal(act, exp);
    });
    it('+381123456789', function () {
        const act = testLogic.checkPhoneNumberValidation("+381123456789");
        const exp = false;
        assert.equal(act, exp);
    });
    it('+370123456789', function () {
        const act = testLogic.checkPhoneNumberValidation("+370123456789");
        const exp = false;
        assert.equal(act, exp);
    });
    it('+480123456789', function () {
        const act = testLogic.checkPhoneNumberValidation("+480123456789");
        const exp = false;
        assert.equal(act, exp);
    });
    it('+972123456789', function () {
        const act = testLogic.checkPhoneNumberValidation("+972123456789");
        const exp = true;
        assert.equal(act, exp);
    });
    it('+971123456789', function () {
        const act = testLogic.checkPhoneNumberValidation("+971123456789");
        const exp = false;
        assert.equal(act, exp);
    });
    it('+962123456789', function () {
        const act = testLogic.checkPhoneNumberValidation("+962123456789");
        const exp = false;
        assert.equal(act, exp);
    });
    it('+872123456789', function () {
        const act = testLogic.checkPhoneNumberValidation("+872123456789");
        const exp = false;
        assert.equal(act, exp);
    });
    it('+11234567890', function () {
        const act = testLogic.checkPhoneNumberValidation("+11234567890");
        const exp = false;
        assert.equal(act, exp);
    });
    it('+01234567890', function () {
        const act = testLogic.checkPhoneNumberValidation("+01234567890");
        const exp = false;
        assert.equal(act, exp);
    });
});
describe("checkAmountOfSignInPhone tests of field PhoneNumber", () => {
    it('+380123456789', function () {
        const act = testLogic.checkPhoneNumberValidation("+380123456789");
        const exp = true;
        assert.equal(act, exp);
    });
    it('+3801234567890', function () {
        const act = testLogic.checkPhoneNumberValidation("+3801234567890");
        const exp = false;
        assert.equal(act, exp);
    });
    it('+38012345678', function () {
        const act = testLogic.checkPhoneNumberValidation("+38012345678");
        const exp = false;
        assert.equal(act, exp);
    });
    it('+972123456789', function () {
        const act = testLogic.checkPhoneNumberValidation("+972123456789");
        const exp = true;
        assert.equal(act, exp);
    });
    it('+9721234567890', function () {
        const act = testLogic.checkPhoneNumberValidation("+9721234567890");
        const exp = false;
        assert.equal(act, exp);
    });
    it('+97212345678', function () {
        const act = testLogic.checkPhoneNumberValidation("+97212345678");
        const exp = false;
        assert.equal(act, exp);
    });
    it('+11234567890', function () {
        const act = testLogic.checkPhoneNumberValidation("+11234567890");
        const exp = false;
        assert.equal(act, exp);
    });
    it('+1123456789', function () {
        const act = testLogic.checkPhoneNumberValidation("+1123456789");
        const exp = false;
        assert.equal(act, exp);
    });
    it('+112345678901', function () {
        const act = testLogic.checkPhoneNumberValidation("+112345678901");
        const exp = false;
        assert.equal(act, exp);
    });
});

describe("checkConfirm test", () => {
    it('string + string is true', function () {
        const act = testLogic.checkConfirm("testPass32", "testPass32");
        const exp = true;
        assert.equal(act, exp);
    });

    it('string + string is false', function () {
        const act = testLogic.checkConfirm("testPass321", "testPass32");
        const exp = false;
        assert.equal(act, exp);
    });
});

describe("checkNameValidation test", () => {
    it('latin is true', function () {
        const act = testLogic.checkNameValidation("Vasya");
        const exp = true;
        assert.equal(act, exp);
    });

    it('Cyryllic is false', function () {
        const act = testLogic.checkNameValidation("Вася");
        const exp = false;
        assert.equal(act, exp);
    });
});