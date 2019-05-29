#! /usr/bin/env node
const fs = require('fs');
const path = require('path');
const YAML = require('yamljs');

const { version } = require(path.resolve(__dirname, `package.json`));
const buildDir = 'dist';

let model = YAML.load(`./swagger.yaml`);

/**
 * Update $refs in model definition with absolute address.
 * @param model
 */
const resolveRefs = (model) => {
  if (model.$ref && model.$ref.startsWith('@windingtree/')) {
    model.$ref = model.$ref.replace('@windingtree/wt-shared-schemas/swagger.yaml', '');
  }
  if (typeof model === 'object') {
    for (let property in model) {
      resolveRefs(model[property]);
    }
  }
};

const addDefinitions = (model) => {
  const refDef = YAML.load('node_modules/@windingtree/wt-shared-schemas/dist/swagger.yaml');
  resolveRefs(refDef);
  model.components.schemas = Object.assign(model.components.schemas, refDef.components.schemas);
  return model;
}

resolveRefs(model);
model = addDefinitions(model);
model.info.version = version;
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir);
}
fs.writeFileSync(`${buildDir}/swagger.yaml`, YAML.stringify(model, 10, 2));