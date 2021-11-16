# Validation schemas

The package `@windingtree/org.json-schema` provides a following set of validation schemas based on [json-schema](http://json-schema.org/specification.html) standard.

- `ORG.JSON`: base ORG.JSON schema
- `ORGiD VC`: generic verifiable credential schema
- `ORG.JSON VC NFT`: verifiable credential with ORG.JSON subject and NFT extension
- `Trust Assertion Credential`: verifiable credential with Trust Assertion subject
- `NFT Metadata`: base NFT metadata schema

## Installing the package

```bash
yarn add @windingtree/org.json-schema@1.0.0-beta.4
```

## Import of schemas

```typescript
import {
  org as orgJsonSchema,
  vc as verifiableCredentialSchema,
  orgVc as orgJsonVcNftSchema,
  trustAssertion as trustAssertionSchema,
  nft as nftMetaDataSchema
} from '@windingtree/org.json-schema';
```

## Using schema for a data validation

> For the validation the ready-made `validateWithSchemaOrRef` utility from the `@windingtree/org.id-utils` package can used. Under the hood this utility is uses a powerful [`ajv`](https://github.com/ajv-validator/ajv) package.

```typescript
import type { ORGJSON } from '@windingtree/org.json-schema/types/org.json';
import { org as orgJsonSchema } from '@windingtree/org.json-schema';
import { object } from '@windingtree/org.id-utils';

export interface OrgJsonValidatorConfig {
  schema: ORGJSON;
  path: string;
}

const orgJson = { /* ... */ }; // raw data object

const validationResult = object.validateWithSchemaOrRef(
  orgJsonSchema,
  '', // empty because we do not use a specific reference from the schema
  orgJson as ORGJSON
);

if (validationResult !== null) {
  throw new Error(
    `Validation error: ${validationResult}`
  );
}
```

## Typings

> Each schema definition has a huge subset of children schemas that can be imported as a separate type.
> Below you can see examples of import of major types. To get detailed information about all available types please review types definition files using your IDE.

```typescript
import type { ORGJSON } from '@windingtree/org.json-schema/types/org.json';
import type { ORGiDVC } from '@windingtree/org.json-schema/types/vc';
import type { ORGJSONVCNFT } from '@windingtree/org.json-schema/types/orgVc';
import type { TrustAssertionCredential } from '@windingtree/org.json-schema/types/trustAssertion';
import type { NFTMetadata } from '@windingtree/org.json-schema/types/';
```

## Schemas

- [ORG.JSON schema](org-json.md)
- [ORGiD VC schema](vc.md)
- [ORG.JSON VC NFT schema](org-json-vc-nft.md)





