const assert = require('assert')
var today = new Date();
var day = today.getDate();

// Using Mocha Framework and custom commands to check today date
describe(`Validation 3`, function () {
    describe(`Check today's Day`, function () {
        it('Today is = ' + day, function () {
            assert.equal('13', day);
        });
    });
});