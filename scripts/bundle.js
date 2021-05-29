const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const basePath = process.cwd();

// File helper
const getFile = filePath => fs.readFileSync(
    path.resolve(basePath, filePath),
    'utf8'
);

// Define children schemes
let files = [
    {
        path: './src/org.json.yaml',
        ref: './org.json.yaml'
    },
    {
        path: './src/vc.yaml',
        ref: './vc.yaml' // How to this file referenced in the root schema
    }
];

// Extract list of all refs and prepare a replacement RegEx
let refs = files
    .map(f => f.ref)
    .map(r => r.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))
    .join('|');

// Load root schema file
let rootFileRaw = getFile('./src/org.json.yaml');
rootFileRaw = rootFileRaw.replace(new RegExp(refs, 'gmi'), ''); // remove direct ref

// Extract children definitions from schemes
const definitions = files
    .map(
        file => {
            let childSchema = getFile(file.path);
            childSchema = childSchema.replace(new RegExp(refs, 'gmi'), ''); // remove all cross refs
            const json = yaml.load(childSchema);
            return json.definitions;
        }
    )
    .reduce(
        (a, v) => ({
            ...a,
            ...v
        }),
        {}
    );

// Parse cleared root schema file
const rootJson = yaml.load(rootFileRaw);

// Join definitions and print entire schema
console.log(JSON.stringify({
    ...rootJson,
    definitions: {
        ...rootJson.definitions,
        ...definitions
    }
}, null, 2));