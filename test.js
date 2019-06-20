const testLogic = new Logic();
describe(" first test of all tests (a+b)", () => {
        it('test value 2 plus 5', function () {
        const act = testLogic.aPlusB(2, 5);
        const exp = 7;
        assert.equal(act, exp);
    });
});
describe("checkAmountOfSignInUsername tests of field USERNAME", () => {
    it('USERNAME is empty', function () {
        const act = testLogic.checkAmountOfSignInUsername("");
        const exp = false;
        assert.equal(act, exp);
    });
    it('4 latin letter sign in USERNAME ', function () {
        const act = testLogic.checkAmountOfSignInUsername("qwertyuiopqwertyuiopqwertyuiopqwertyuiopq");
        const exp = false;
        assert.equal(act, exp);
    });
    it(' latin letter in USERNAME ', function () {
        const act = testLogic.checkAmountOfSignInUsername("radio");
        const exp = false;
        assert.equal(act, exp);
    });
    it('1 latin letter in USERNAME ', function () {
        const act = testLogic.checkAmountOfSignInUsername("r");
        const exp = true;
        assert.equal(act, exp);
    });
    it('5 latin letter in USERNAME ', function () {
        const act = testLogic.checkAmountOfSignInUsername("radio");
        const exp = true;
        assert.equal(act, exp);
    });
    it('1 number in USERNAME ', function () {
        const act = testLogic.checkAmountOfSignInUsername("1");
        const exp = true;
        assert.equal(act, exp);
    });
    it('41 numbers in USERNAME ', function () {
        const act = testLogic.checkAmountOfSignInUsername("12345678901234567890123456789012345678901");
        const exp = false;
        assert.equal(act, exp);
    });
  });
describe("checkTypeOfSignUsername tests of field USERNAME", () => {
    it('USERNAME is 1', function () {
        const act = testLogic.checkTypeOfSignUsername(1);
        const exp = true;
        assert.equal(act, exp);
    });
    it('USERNAME is : ', function () {
        const act = testLogic.checkTypeOfSignUsername(":");
        const exp = true;
        assert.equal(act, exp);
    });
    it('USERNAME is - ', function () {
        const act = testLogic.checkTypeOfSignUsername("-");
        const exp = true;
        assert.equal(act, exp);
    });
    it('USERNAME is , ', function () {
        const act = testLogic.checkTypeOfSignUsername(",");
        const exp = true;
        assert.equal(act, exp);
    });
    it('USERNAME is - ', function () {
        const act = testLogic.checkTypeOfSignUsername("-");
        const exp = true;
        assert.equal(act, exp);
    });
    it('USERNAME is "ш" ', function () {
        const act = testLogic.checkTypeOfSignUsername("-");
        const exp = false;
        assert.equal(act, exp);
    });
    it('USERNAME is "Ш" ', function () {
        const act = testLogic.checkTypeOfSignUsername("-");
        const exp = false;
        assert.equal(act, exp);
    });
    it('USERNAME is "R" ', function () {
        const act = testLogic.checkTypeOfSignUsername("-");
        const exp = true;
        assert.equal(act, exp);
    });
    it('USERNAME is "r" ', function () {
        const act = testLogic.checkTypeOfSignUsername("-");
        const exp = true;
        assert.equal(act, exp);
    });
    it('USERNAME is "+" ', function () {
        const act = testLogic.checkAmountOfSignInUsername("+");
        const exp = true;
        assert.equal(act, exp);
    });
    it('USERNAME is "=" ', function () {
        const act = testLogic.checkTypeOfSignUsername("=");
        const exp = true;
        assert.equal(act, exp);
    });
});
describe("checkAmountOfSignInPassword tests of field PASSWORD", () => {
    it('one sign in PASSWORD', function () {
        const act = testLogic.checkAmountOfSignInPassword("1");
        const exp = false;
        assert.equal(act, exp);
    });
    it('two sign in PASSWORD', function () {
        const act = testLogic.checkAmountOfSignInPassword("12");
        const exp = false;
        assert.equal(act, exp);
    });
    it('three sign in PASSWORD', function () {
        const act = testLogic.checkAmountOfSignInPassword("123");
        const exp = false;
        assert.equal(act, exp);
    });
    it('four sign in PASSWORD', function () {
        const act = testLogic.checkAmountOfSignInPassword("1234");
        const exp = false;
        assert.equal(act, exp);
    });
    it('five sign in PASSWORD', function () {
        const act = testLogic.checkAmountOfSignInPassword("12345");
        const exp = "week password";
        assert.equal(act, exp);
    });
    it('six sign in PASSWORD', function () {
        const act = testLogic.checkAmountOfSignInPassword("123456");
        const exp = "Password is easy";
        assert.equal(act, exp);
    });
    it('seven sign in PASSWORD', function () {
        const act = testLogic.checkAmountOfSignInPassword("1234567");
        const exp = "Password is easy";
        assert.equal(act, exp);
    });
    it('eight sign in PASSWORD', function () {
        const act = testLogic.checkAmountOfSignInPassword("12345678");
        const exp = "Password is easy";
        assert.equal(act, exp);
    });
    it('nine sign in PASSWORD', function () {
        const act = testLogic.checkAmountOfSignInPassword("123456789");
        const exp = "Password is middle";
        assert.equal(act, exp);
    });
    it('then sign in PASSWORD', function () {
        const act = testLogic.checkAmountOfSignInPassword("1234567890");
        const exp = "Password is middle";
        assert.equal(act, exp);
    });
    it('11 sign in PASSWORD', function () {
        const act = testLogic.checkAmountOfSignInPassword("12345678901");
        const exp = "Password is hard";
        assert.equal(act, exp);
    });
    it('30 sign in PASSWORD', function () {
        const act = testLogic.checkAmountOfSignInPassword("123456789012345678901234567890");
        const exp = "Password is hard";
        assert.equal(act, exp);
    });
    it('31 sign in PASSWORD', function () {
        const act = testLogic.checkAmountOfSignInPassword("1234567890123456789012345678901");
        const exp = false;
        assert.equal(act, exp);
    });
});
describe("checkTypeOfSignInPassword tests of field PASSWORD", () => {
    it('one sign big KYRYLITSA in PASSWORD', function () {
        const act = testLogic.checkTypeOfSignInPassword("Ш");
        const exp = false;
        assert.equal(act, exp);
    });
    it('one sign small KYRYLITSA in PASSWORD', function () {
        const act = testLogic.checkTypeOfSignInPassword("ш");
        const exp = false;
        assert.equal(act, exp);
    });
    it('= in PASSWORD', function () {
        const act = testLogic.checkTypeOfSignInPassword("=");
        const exp = true;
        assert.equal(act, exp);
    });
    it('+ in PASSWORD', function () {
        const act = testLogic.checkTypeOfSignInPassword("+");
        const exp = true;
        assert.equal(act, exp);
    });
    it('no one number in PASSWORD', function () {
        const act = testLogic.checkTypeOfSignInPassword("Qwertyuiop");
        const exp = false;
        assert.equal(act, exp);
    });
    it('no one big letter in PASSWORD', function () {
        const act = testLogic.checkTypeOfSignInPassword("1wertyuiop");
        const exp = false;
        assert.equal(act, exp);
    });
    it('no one small letter in PASSWORD', function () {
        const act = testLogic.checkTypeOfSignInPassword("1QWERTYUI");
        const exp = false;
        assert.equal(act, exp);
    });
    it('one small letter, one big letter, one number ONLY 3 SIGN', function () {
        const act = testLogic.checkTypeOfSignInPassword("1Qq");
        const exp = false;
        assert.equal(act, exp);
    });
    it('one small letter, one big letter, one number ONLY 4 SIGN', function () {
        const act = testLogic.checkTypeOfSignInPassword("1Qqw");
        const exp = false;
        assert.equal(act, exp);
    });
    it('one small letter, one big letter, one number ONLY 5 SIGN', function () {
        const act = testLogic.checkTypeOfSignInPassword("1Qqwe");
        const exp = true;
        assert.equal(act, exp);
    });
    it('one small letter, one big letter, one number ONLY 6 SIGN', function () {
        const act = testLogic.checkTypeOfSignInPassword("1Qqwer");
        const exp = true;
        assert.equal(act, exp);
    });
    it('one small letter, one big letter, one number ONLY 31 SIGN', function () {
        const act = testLogic.checkTypeOfSignInPassword("1234567890123456789012345678Qwe");
        const exp = false;
        assert.equal(act, exp);
    });
});
describe("checkAmountOfSignInEmail tests of field EMAIL", () => {
    it('no one sign before @', function () {
        const act = testLogic.checkAmountOfSignInEmail("@");
        const exp = false;
        assert.equal(act, exp);
    });
    it('one sign before @', function () {
        const act = testLogic.checkAmountOfSignInEmail("1@");
        const exp = true;
        assert.equal(act, exp);
    });
    it('20 signs before @', function () {
        const act = testLogic.checkAmountOfSignInEmail("12345678901234567890@");
        const exp = true;
        assert.equal(act, exp);
    });
    it('21 signs before @', function () {
        const act = testLogic.checkAmountOfSignInEmail("123456789012345678901@");
        const exp = false;
        assert.equal(act, exp);
    });
    it('no one signs after @', function () {
        const act = testLogic.checkAmountOfSignInEmail("123@");
        const exp = false;
        assert.equal(act, exp);
    });
    it('one signs after @', function () {
        const act = testLogic.checkAmountOfSignInEmail("123@1");
        const exp = true;
        assert.equal(act, exp);
    });
    it('20 signs after @', function () {
        const act = testLogic.checkAmountOfSignInEmail("123@12345678901234567890");
        const exp = true;
        assert.equal(act, exp);
    });
    it('21 signs after @', function () {
        const act = testLogic.checkAmountOfSignInEmail("123@123456789012345678901");
        const exp = false;
        assert.equal(act, exp);
    });
});
describe("checkTypeOfSignInEmail tests of field EMAIL", () => {
    it(' one sign KYRYLITSA before @', function () {
        const act = testLogic.checkTypeOfSignInEmail("rш@");
        const exp = false;
        assert.equal(act, exp);
    });
    it(' one sign KYRYLITSA after @', function () {
        const act = testLogic.checkTypeOfSignInEmail("email@ш");
        const exp = false;
        assert.equal(act, exp);
    });
    it(' one sign KYRYLITSA after @', function () {
        const act = testLogic.checkTypeOfSignInEmail("email@ш");
        const exp = false;
        assert.equal(act, exp);
    });
    it(' one sign big latin and small latin', function () {
        const act = testLogic.checkTypeOfSignInEmail("emAIL@EMail");
        const exp = true;
        assert.equal(act, exp);
    });
});
describe("checkFirstPlusInPhone tests of field PhoneNumber", () => {
    it('one sign +', function () {
        const act = testLogic.checkFirstPlusInPhone("+");
        const exp = true;
        assert.equal(act, exp);
    });
    it(' sign + before number', function () {
        const act = testLogic.checkFirstPlusInPhone("+12345");
        const exp = true;
        assert.equal(act, exp);
    });
    it('first sign is number', function () {
        const act = testLogic.checkFirstPlusInPhone("123");
        const exp = false;
        assert.equal(act, exp);
    });
    it('first sign is =', function () {
        const act = testLogic.checkFirstPlusInPhone("=123");
        const exp = false;
        assert.equal(act, exp);
    });
    it('first sign is letter', function () {
        const act = testLogic.checkFirstPlusInPhone("a123");
        const exp = false;
        assert.equal(act, exp);
    });
    it('first sign is dot', function () {
        const act = testLogic.checkFirstPlusInPhone(".+123");
        const exp = false;
        assert.equal(act, exp);
    });
});
describe("clearPhoneNumberFromDots tests of field honeNumber", () => {
    it('one sign is empty "  +3812345678', function () {
        const act = testLogic.clearPhoneNumberFromDots("  +3812345678");
        const exp = "+3812345678";
        assert.equal(act, exp);
    });
    it('number has () "(+38123)45678', function () {
        const act = testLogic.clearPhoneNumberFromDots("(+38123)45678");
        const exp = "+3812345678";
        assert.equal(act, exp);
    });
    it('number has ()(( "  +38((12345678', function () {
        const act = testLogic.clearPhoneNumberFromDots("(+38((123)45678");
        const exp = "+3812345678";
        assert.equal(act, exp);
    });
    it('number has empty "+ 3 8  123 45 6 78 ', function () {
        const act = testLogic.clearPhoneNumberFromDots("+ 3 8  123 45 6 78 ");
        const exp = "+3812345678";
        assert.equal(act, exp);
    });
    it('number has -- "-+-38-123-45-6-78', function () {
        const act = testLogic.clearPhoneNumberFromDots("-+-38-123-45-6-78");
        const exp = "+3812345678";
        assert.equal(act, exp);
    });
    it('number has a , * "a+ 38,-123*45-6-78', function () {
        const act = testLogic.clearPhoneNumberFromDots("a+ 38,-123*45-6-78");
        const exp = "a+38,123*45678";
        assert.equal(act, exp);
    });
});
describe("checkTypeSignInPhone tests of field PhoneNumber", () => {
    it('one sign is latin letter "  a+3812345678', function () {
        const act = testLogic.checkTypeSignInPhone("a+3812345678");
        const exp = false;
        assert.equal(act, exp);
    });
    it('one sign is russian letter "  +3812345678', function () {
        const act = testLogic.checkTypeSignInPhone("+381Ш2345678");
        const exp = false;
        assert.equal(act, exp);
    });
        it('number has plus and numbers +123456789012345', function () {
        const act = testLogic.checkTypeSignInPhone("+123456789012345");
        const exp = true;
        assert.equal(act, exp);
    });
    it('number has  second plus +12+3456789012345', function () {
        const act = testLogic.checkTypeSignInPhone("+12+3456789012345");
        const exp = false;
        assert.equal(act, exp);
    });
    it('number has  > +12>3456789012345 ', function () {
        const act = testLogic.checkTypeSignInPhone("+12>3456789012345");
        const exp = false;
        assert.equal(act, exp);
    });
    it('number has  : +12:3456789012345', function () {
        const act = testLogic.checkTypeSignInPhone("+12:3456789012345");
        const exp = false;
        assert.equal(act, exp);
    });
});
describe("checkCodeOfPhone tests of field PhoneNumber", () => {
    it('+380123456789', function () {
        const act = testLogic.checkCodeOfPhone("+380123456789");
        const exp = 'ukr';
        assert.equal(act, exp);
    });
    it('+381123456789', function () {
        const act = testLogic.checkCodeOfPhone("+381123456789");
        const exp = false;
        assert.equal(act, exp);
    });
    it('+370123456789', function () {
        const act = testLogic.checkCodeOfPhone("+370123456789");
        const exp = false;
        assert.equal(act, exp);
    });
    it('+480123456789', function () {
        const act = testLogic.checkCodeOfPhone("+480123456789");
        const exp = false;
        assert.equal(act, exp);
    });
    it('+972123456789', function () {
        const act = testLogic.checkCodeOfPhone("+380123456789");
        const exp = 'isr';
        assert.equal(act, exp);
    });
    it('+971123456789', function () {
        const act = testLogic.checkCodeOfPhone("+971123456789");
        const exp = false;
        assert.equal(act, exp);
    });
    it('+962123456789', function () {
        const act = testLogic.checkCodeOfPhone("+962123456789");
        const exp = false;
        assert.equal(act, exp);
    });
    it('+872123456789', function () {
        const act = testLogic.checkCodeOfPhone("+872123456789");
        const exp = false;
        assert.equal(act, exp);
    });
    it('+11234567890', function () {
        const act = testLogic.checkCodeOfPhone("+11234567890");
        const exp = 'usa';
        assert.equal(act, exp);
    });
    it('+01234567890', function () {
        const act = testLogic.checkCodeOfPhone("+01234567890");
        const exp = false;
        assert.equal(act, exp);
    });
});
describe("checkAmountOfSignInPhone tests of field PhoneNumber", () => {
    it('+380123456789', function () {
        const act = testLogic.checkAmountOfSignInPhone("+380123456789");
        const exp = true;
        assert.equal(act, exp);
    });
    it('+3801234567890', function () {
        const act = testLogic.checkAmountOfSignInPhone("+3801234567890");
        const exp = false;
        assert.equal(act, exp);
    });
    it('+38012345678', function () {
        const act = testLogic.checkAmountOfSignInPhone("+38012345678");
        const exp = false;
        assert.equal(act, exp);
    });
    it('+972123456789', function () {
        const act = testLogic.checkAmountOfSignInPhone("+972123456789");
        const exp = true;
        assert.equal(act, exp);
    });
    it('+9721234567890', function () {
        const act = testLogic.checkAmountOfSignInPhone("+9721234567890");
        const exp = false;
        assert.equal(act, exp);
    });
    it('+97212345678', function () {
        const act = testLogic.checkAmountOfSignInPhone("+97212345678");
        const exp = false;
        assert.equal(act, exp);
    });
    it('+11234567890', function () {
        const act = testLogic.checkAmountOfSignInPhone("+11234567890");
        const exp = true;
        assert.equal(act, exp);
    });
    it('+1123456789', function () {
        const act = testLogic.checkAmountOfSignInPhone("+1123456789");
        const exp = false;
        assert.equal(act, exp);
    });
    it('+112345678901', function () {
        const act = testLogic.checkAmountOfSignInPhone("+112345678901");
        const exp = false;
        assert.equal(act, exp);
    });
});
