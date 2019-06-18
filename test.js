const testLogic = new Logic();
describe(" first test of all tests (a+b)", () => {
        it(`test value 2 and 5`, function () {
        const act = testLogic.aPlusB(2, 5);
        const exp = 7;
        assert.equal(act, exp);
    });
});