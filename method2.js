const {expect} = require('chai');
var today = new Date();
var month = today.getMonth() + 1; //January is 0!

context(`Validation 2`, () => {
    it(`Today's Month is =` + month, () =>
        {
        expect(2).to.equal(month)
        }
    )
})
