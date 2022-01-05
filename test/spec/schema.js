const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const orgJsonSchema = require('../../dist/build/org.json');
const orgVcSchema = require('../../dist/build/orgVc.json');
const jsonFile1 = require('../../examples/legal-entity.json');
const jsonFile2 = require('../../examples/unit.json');
const jsonFile3 = require('../../examples/org-vc.json');
const { expect } = require('chai');

describe('Schema', () => {
  // let ajv;
  // let validate;
  const files = [{
      name: 'legalEntity',
      file: jsonFile1
    },
    {
      name: 'unit',
      file: jsonFile2
    }
  ];

  files.forEach(({
    name,
    file
  }) => {

    describe(`#${name}`, () => {
      let ajv;

      before(async () => {
        ajv = new Ajv({
          useDefaults: true,
          coerceTypes: true,
          strict: false
        });
        addFormats(ajv);
        ajv.addSchema(orgJsonSchema, 'schema.json');
      });

      it('should validate an example json file against schema', async () => {
        ajv.validate(
          {
            $ref: `schema.json`
          },
          file
        );
        expect(ajv).to.have.property('errors').to.be.null;
      });
    });
  });

  describe('Org VC', () => {
    let ajv;

    before(async () => {
      ajv = new Ajv({
        useDefaults: true,
        coerceTypes: true,
        strict: false
      });
      addFormats(ajv);
      ajv.addSchema(orgVcSchema, 'schema.json');
    });

    it('should validate an example of Org VC against schema', async () => {
      ajv.validate(
        {
          $ref: `schema.json`
        },
        jsonFile3
      );
      expect(ajv).to.have.property('errors').to.be.null;
    });
  });
});
