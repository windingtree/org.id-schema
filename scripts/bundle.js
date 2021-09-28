const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const basePath = process.cwd();

// File read helper
const getFile = filePath => fs.readFileSync(
  path.resolve(basePath, filePath),
  'utf8'
);

// File write helper
const writeFile = (filePath, data) => fs.writeFileSync(
  path.resolve(basePath, filePath),
  data,
  'utf8'
);

// Define schemes
const files = [
  {
    path: './src/org.json.yaml',
    ref: './org.json.yaml',
    out: './dist/org.json'
  },
  {
    path: './src/vc.yaml',
    ref: './vc.yaml',
    out: './dist/vc.json'
  },
  {
    path: './src/nft.yaml',
    ref: './nft.yaml',
    out: './dist/nft.json'
  },
  {
    path: './src/org.vc.yaml',
    ref: './org.vc.yaml',
    out: './dist/orgVcNft.json'
  }
];

// URI escaping rule
const refsEscapeRule = /[-/\\^$*+?.()|[\]{}]/g;

// Extract list of all refs and prepare a replacement RegEx
const refs = files
  .map(f => f.ref)
  .map(r => r.replace(refsEscapeRule, '\\$&'))
  .join('|');

// Extract definitions recursively
const getDefinitions = (filePath, files, paths = []) => {
  let rawFile = getFile(filePath);
  let sharedDefinitions = yaml.load(rawFile).definitions;

  for (const fileConfig of files) {

    if (!paths.includes(fileConfig.path)) {
      const refRegex = new RegExp(fileConfig.ref.replace(refsEscapeRule, '\\$&'), 'gmi');
      const processDefinitions = refRegex.exec(rawFile) !== null;

      if (processDefinitions) {
        sharedDefinitions = {
          ...sharedDefinitions,
          ...getDefinitions(
            fileConfig.path,
            files,
            [...paths, filePath, fileConfig.path]
          )
        };
      }
    }
  }

  return sharedDefinitions;
};

// Load root schemas
files.forEach(
  fileConfig => {
    const sharedDefinitions = getDefinitions(fileConfig.path, files);
    const rawFile = getFile(fileConfig.path);
    const jsonFile = yaml.load(rawFile);

    return writeFile(
      fileConfig.out,
      JSON
        .stringify(
          {
            ...jsonFile,
            definitions: {
              ...jsonFile.definitions,
              ...sharedDefinitions
            }
          },
          null,
          2
        )
        .replace(new RegExp(refs, 'gmi'), '')
    );
  }
);
