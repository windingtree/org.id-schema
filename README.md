<a href="https://orgid.tech"><img src="https://github.com/windingtree/branding/raw/master/ORGiD/svg/ORGiD-logo.svg" height="50" alt="ORGiD"></a>

## ORG.JSON Schema

ORG.JSON is a data format used for describing organizations of all types: commercial firms, NGOs, even organizations that aren't incorporated (like [W3C](https://www.w3.org/Consortium/facts#org), for example).

The goal behind ORG.JSON is to provide correct and truthful snapshot of an organization, sufficient to represent its subject in any online transaction.

An ORG.JSON file may describe a legal entity, an organizational unit, or both at the same time. Legal entity may have zero or any number of units. Units can't exist on their own, they must belong to a legal entity.

While "legal entity" is self-explanatory, "units" may represent a wide range of company's structural parts: departments (accounting or legal department), business locations (in case the same legal entity operates a few different stores), etc. We intentionally made the "unit" concept flexible. Relationship between a legal entity and its units is reflected in the [ORGiD Registry](https://github.com/windingtree/org.id) smart contract.

## Examples

- [legal entity](examples/legal-entity.json)
- [organizational unit](examples/unit.json)
- [real-life examples](https://github.com/windingtree/orgids)

## Structure

[Complete ORG.JSON vocabulary](./vocabulary.md).

## Usage

### NPM package

```sh
npm i @windingtree/org.json-schema
```

```javascript
const orgJsonSchema = require('@windingtree/org.json-schema');
```

## JSON Schema Specification

This will generate a JSON Schema specification file in the `dist` directory:

```bash
npm run build
```

## ORGiD Ecosystem

![ORGiD Ecosystem](https://github.com/windingtree/ORGiD/raw/master/assets/ORGiD-ecosystem.png)

- [Winding Tree DAO](https://github.com/windingtree/dao) controls ORGiD Registry smart contract and some Directories (including their rules)
- [ORGiD Registry](https://github.com/windingtree/ORGiD) contains records of all organizations and organizational units
- **ORG.JSON Schema (you are here)**
- [ORGiD Resolver](https://github.com/windingtree/ORGiD-resolver) is an application for resolving ORGiD data in [W3C DID](https://w3c.github.io/did-core/) format
- [ORGiD Directories](https://github.com/windingtree/ORGiD-directories) are curated lists of organizations
- [Arbor](https://arbor.fm) can be used to look up an ORGiD, and also to create and manage your own ORGiD
