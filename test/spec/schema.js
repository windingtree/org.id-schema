const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const orgJsonSchema = require('../../dist/org.json');
const jsonFile1 = require('../../examples/legal-entity.json');
const jsonFile2 = require('../../examples/unit.json');

require('chai').should();

describe('Schema', () => {
    let ajv;
    let validate;
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
        ajv = new Ajv({ allErrors: true });
        // ajv.addKeyword('schemaVersion');
        ajv.addKeyword('example');
        ajv.addKeyword('validFrom');
        ajv.addKeyword('validUntil');
        addFormats(ajv);
        validate = ajv.compile(orgJsonSchema);
    });

    files.forEach(({ name, file }) => {

        describe(`#${name}`, () => {

            it('should validate an example json file against schema', async () => {
                const result = validate(file);
                if (!result) {
                    console.log(ajv.errorsText(validate.errors));
                }
                (result).should.be.true;
            });
        });
    });
});
