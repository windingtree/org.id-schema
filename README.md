![npm](https://img.shields.io/npm/v/@windingtree/org.json-schema) ![org.json-schema](https://travis-ci.org/windingtree/org.json-schema.svg?branch=master)

<a href="https://orgid.tech"><img src="https://raw.githubusercontent.com/windingtree/branding/master/org.id/svg/org.id-logo.svg" height="50" alt="ORGiD"></a>


## Version 0.4.0 breaking change

- `legalEntity.legalIdentifier` is renamed to `legalEntity.registryCode`

If you are want to use an old term you should define s specific `schemaVersion` (0.3.4) in your `org.json` file overwise your `org.json` will throw a warning during validation.

## Version 0.5.0 new features and updates

This version of the ORG.JSON schema should be used with new version of the ORGiD protocol (2.0).

- `publicKey` property is renamed to `verificationMethod` because of deprecation in the standard
- Added: `verificationMethod.publicKeyJwk` property
- Added: `verificationMethod.blockchainAccountId`

`blockchainAccountId` is a string value of the public key in following format:

```
0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb@eip155:1
^                                         ^  ^    ^
1                                         2  3    4

1. account address (public key)
2. delimiter of the key and its standard
3. the standard there described a type of the blockchain and network identifiers. In this case [the Ethereum blockchain](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md)
4. the blockchain network code. According to the standard 1 is the `Ethereum mainnet`
```

- Added property `publicKey.publicKeyRevocation` to add ability of a key revocation handling
- `trust.assertions` moved to the top level as `trustAssertions`
- `trust.credentials` moved to the top level as `credentials`
- Added optional `legalEntity.organizationalUnits` property that be a list of organizational units dids
- Added optional `organizationalUnit.parentOrganization` property that be a link to the parent organization
- Added top-level `person` property to add ORG.JSON ability to handle personal profiles
- Definitions `CryptoETHAddress` and `CryptoBTCAddress` are replaced with single definition `BlockchainAccountId` which is standardised by the DID specification and able to handle all types of blockchain accounts
- From now schema is building from multiple files. VC schemes are moved to separate file
- Along with the schema file now is provided a file with typescript definitions

## ORG.JSON Schema

ORG.JSON is a data format based on the [json-schema](http://json-schema.org/specification.html) specification used for describing organizations of all types: commercial firms, NGOs, even organizations that aren't incorporated (like [W3C](https://www.w3.org/Consortium/facts#org), for example).

The goal behind ORG.JSON is to provide correct and truthful snapshot of an organization, sufficient to represent its subject in any online transaction.

An ORG.JSON file may describe a legal entity, an organizational unit, or both at the same time. Legal entity may have zero or any number of units. Units can't exist on their own, they must belong to a legal entity.

While "legal entity" is self-explanatory, "units" may represent a wide range of company's structural parts: departments (accounting or legal department), business locations (in case the same legal entity operates a few different stores), etc. We intentionally made the "unit" concept flexible. Relationship between a legal entity and its units is reflected in the [ORGiD Registry](https://github.com/windingtree/org.id) smart contract.

## Examples

- [legal entity](examples/legal-entity.json)
- [organizational unit](examples/unit.json)
- [real-life examples](https://github.com/windingtree/orgids)

## Usage

### NPM package

```sh
npm i @windingtree/org.json-schema
```

```javascript
const { org: orgJsonSchema } = require('@windingtree/org.json-schema');

// The whole list of the package exports:
//
// `org`      # ORG.JSON schema
// `vc`       # VC schema
// `nft`      # NFT schema
// `orgVcNft` # ORG.JSON VC version with NFT extension
```

## Using multiple versions of schema

Define packages in your `package.json` file like following:

```json
{
  "dependencies": {
    "org.json-schema-0.3.1": "npm:@windingtree/org.json-schema@0.3.1",
    "org.json-schema-0.3.2": "npm:@windingtree/org.json-schema@0.3.2"
  }
}
```

and then use in your application:

```javascript
const orgJsonSchema1 = require('org.json-schema-0.3.1');
const orgJsonSchema2 = require('org.json-schema-0.3.2');
```

## JSON Schema Specification

This will generate a JSON Schema specification file in the `dist` directory:

```bash
npm run build
```

## ORGiD Ecosystem

- [Winding Tree DAO](https://github.com/windingtree/dao) controls ORGiD Registry smart contract and some Directories (including their rules)
- [ORGiD Registry](https://github.com/windingtree/ORGiD) contains records of all organizations and organizational units
- **ORG.JSON Schema (you are here)**
- [ORGiD Resolver](https://github.com/windingtree/ORGiD-resolver) is an application for resolving ORGiD data in [W3C DID](https://w3c.github.io/did-core/) format
- [ORGiD Directories](https://github.com/windingtree/ORGiD-directories) are curated lists of organizations
- [Arbor](https://arbor.fm) can be used to look up an ORGiD, and also to create and manage your own ORGiD
