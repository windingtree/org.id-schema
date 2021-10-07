![npm](https://img.shields.io/npm/v/@windingtree/org.json-schema) [![NPM Package](https://github.com/windingtree/org.json-schema/actions/workflows/tests.yml/badge.svg)](https://github.com/windingtree/org.json-schema/actions/workflows/tests.yml)

## Version 1.0.0-beta.*

- Updated DID format that now supports multichain ORGiD:

```
did:orgid:4:0x94bf5a57b850a35b4d1d7b59f663ce3a8a76fd9928ef2067cc772fc97fb0ad75
          ^ network Id
```
> `4` - Ethereum Rinkeby ChainID according to [https://chainlist.org/](https://chainlist.org/)

- Added ORG.JSON VC schema - a cryptographically signed version of ORG.JSON
- ORG.JSON VC schema extended with NFT-specific properties to support ORGiD NFT meta-data feature
- ORG.JSON schema extended with `capabilityDelegation` definition
- `trustAssertions` definition in the ORG.JSON schema is extended with support for Trust Assertion Credential
- Added separate Trust Assertion Credential schema
- Added typescript types which are can be imported from the `types` directory of the package as following

```typescript
import type { ORGJSON } from '@windingtree/org.json-schema/types/org.json';
```

The whole list of available types definitions:

- `/types/org.json`
- `/types/orgVc`
- `/types/vc`
- `/types/nft`
- `/types/trustAssertion`

The whole list of json schemas that can be imported from the package:

- `org`
- `orgVc`
- `vc`
- `nft`
- `trustAssertion`

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

## Version 0.4.0 breaking change

- `legalEntity.legalIdentifier` is renamed to `legalEntity.registryCode`

If you are want to use an old term you should define s specific `schemaVersion` (0.3.4) in your `org.json` file overwise your `org.json` will throw a warning during validation.

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
## JSON Schema Specification

This will generate a JSON Schema specification file in the `dist` directory:

```bash
yarn build
```

## Testing

```bash
yarn test
```

