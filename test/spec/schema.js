const Ajv = require('ajv');
const schema = require('../../dist/org.json');
const jsonFile1 = require('../../examples/legal-entity.json');
const jsonFile2 = require('../../examples/unit.json');

require('chai').should();

describe('Schema', () => {
    let ajv;
    const files = [
        {
            name: 'legalEntity',
            file: jsonFile1
        },
        {
            name: 'unit',
            file: jsonFile2
        }
    ];
    
    beforeEach(async () => {
        ajv = new Ajv();
    });

    files.forEach(({ name, file }) => {

        describe(`#${name}`, () => {

            it('should validate an example json file against schema', async () => {
                const result = ajv.validate(schema, file);
                (result).should.be.true;
            });
        });
    });
});
