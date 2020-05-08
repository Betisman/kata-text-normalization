const expect = require('expect.js');
const normalizer = require('./normalizer');

describe("text normalization", () => {
    describe("spanish normalizer", () => {
        const spanish = normalizer('ES');
        it('should return the same word uppercase', () => {
            const output = spanish('casa');
            expect(output).to.eql(['CASA']);
        });
    
        it('should return an array splitted by space with the same words', () => {
            const output = spanish('casa blanca');
            expect(output).to.eql(['CASA', 'BLANCA']);
        });
    
        it('should remove all accents', () => {
            const output = spanish('casá blanca');
            expect(output).to.eql(['CASA', 'BLANCA']);
        });
    });
});