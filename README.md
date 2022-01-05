![npm](https://img.shields.io/npm/v/@windingtree/org.json-schema) [![NPM Package](https://github.com/windingtree/org.json-schema/actions/workflows/tests.yml/badge.svg)](https://github.com/windingtree/org.json-schema/actions/workflows/tests.yml)

## Documentation

[ORG.JSON schemas documentation](https://windingtree.github.io/org.id-sdk/#/build/org.json-schema/index).

## Examples

- [legal entity](examples/legal-entity.json)
- [organizational unit](examples/unit.json)
- [real-life examples](https://github.com/windingtree/orgids)

## Setup

### NPM package

```sh
yarn add @windingtree/org.json-schema
```
## JSON Schema Specification

This will generate a JSON Schema specification file and Typescript typings in the `dist` directory:

```bash
yarn build
```

## Testing

```bash
yarn test
```

## Maintenance

New packages must be released using [GitHub release workflow](https://github.com/windingtree/org.json-schema/releases/new).

## TODO for the next version

- Reduce the `capabilityDelegation` definition to the only list of verification method Ids and remove in-place verification method definition possibility
