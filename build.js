#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const YAML = require('js-yaml');

const {
    version
} = require('./package.json');
const buildDir = 'dist';

const convertSchema = () => {
    if (!fs.existsSync(buildDir)) {
        fs.mkdirSync(buildDir);
    }

    const processed = YAML.safeLoad(fs.readFileSync('./swagger.yaml', 'utf8'));
    processed.info.version = version;

    fs.writeFileSync(
        `${buildDir}/swagger.yaml`,
        YAML.safeDump(processed)
    );
};

module.exports = {
    convertSchema
};

if (require.main === module) {
    convertSchema();
}
