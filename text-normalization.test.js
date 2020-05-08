const expect = require('expect.js');
const normalizer = require('./normalizer');

describe("text normalization", () => {
    it('should return the same word', () => {
        const output = normalizer('ES')('casa');
        expect(output).to.equal('casa');
    })
});