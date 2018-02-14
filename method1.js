const assert = require('assert')
var today = new Date();
var year = today.getFullYear();

// Using Mocha Framework and custom commands to check today date
describe(`Validation 1`, function () {
    describe(`Check today's Year`, function () {
        it('This year is = ' + year, function () {
            assert.equal('2018', year);
        });
    });
});