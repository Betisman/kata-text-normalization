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

        it('should remove symbols', () => {
            const output = spanish('teléfono, mi casa');
            expect(output).to.eql(['TELEFONO', 'CASA']);
        })

        it('should remove useless words', () => {
            const output = spanish('teléfono mi casa');
            expect(output).to.eql(['TELEFONO', 'CASA']);
        })

        it('should parse to singular', () => {
            const output = spanish('casas coches');
            expect(output).to.eql(['CASA', 'COCHE']);
        })
    });

    describe("english normalizer", () => {
        const english = normalizer('EN');
        it('should return the same word uppercase', () => {
            const output = english('house');
            expect(output).to.eql(['HOUSE']);
        });
    
        it('should return an array splitted by space with the same words', () => {
            const output = english('white house');
            expect(output).to.eql(['WHITE', 'HOUSE']);
        });
    
        it('should remove all accents', () => {
            const output = english('chocolate crêpe');
            expect(output).to.eql(['CHOCOLATE', 'CREPE']);
        });

        it('should remove symbols', () => {
            const output = english('telephone, my house');
            expect(output).to.eql(['TELEPHONE', 'HOUSE']);
        });

        it('should remove useless words', () => {
            const output = english('telephone my house');
            expect(output).to.eql(['TELEPHONE', 'HOUSE']);
        });

        it('should parse to singular', () => {
            const output = english('houses cars');
            expect(output).to.eql(['HOUSE', 'CAR']);
        })
    });
});