# ORG.JSON schema

ORG.JSON is a data format based on the [json-schema](http://json-schema.org/specification.html) specification used for describing organizations of all types: commercial firms, NGOs, even organizations that aren't incorporated (like [W3C](https://www.w3.org/Consortium/facts#org), for example).

The goal behind ORG.JSON is to provide correct and truthful snapshot of an organization, sufficient to represent its subject in any online transaction.

An ORG.JSON file may describe a legal entity, an organizational unit, or both at the same time. Legal entity may have zero or any number of units. Units can't exist on their own, they must belong to a legal entity.

While `legalEntity` definition is self-explanatory, `organizationalUnit`s may represent a wide range of company's structural parts: departments (accounting or legal department), business locations (in case the same legal entity operates a few different stores), etc. A `person` definition can be used fo handling of a personal profile.

> The ORG.JSON format was built to conform to [DID core](https://www.w3.org/TR/did-core/) specification, this way a file that conforms to ORG.JSON specification is a valid DID document. When the [ORGiD DID resolver](https://github.com/windingtree/org.id-resolver/tree/new-resolver) makes an ORGiD resolution it must return a DID document or rise an error. Files that do not conform to ORG.JSON specification cannot be counted as valid DID documents.

So, let see some examples.

## Simple document

> ORG.JSON DID context in this example referenced to original GitHub source. When the ORG.JSON standard will out of beta the context file should be moved to a permanent location.

```json
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://raw.githubusercontent.com/windingtree/org.json-schema/feat/new-orgid/src/context.json"
  ],
  "id": "did:orgid:4:0x94...ad75",
  "created": "2021-01-01T13:10:02.251Z"
}
```

## Date of changes

Every time when DID document is changed `updated` property must be set to the actual date of changes when has been made.

```json
{
  ...
  "updated": "2021-03-06T11:12:04.151Z"
}
```

## Active status

To mark a DID document as inactive it is required to place in the root of the object a `deactivated` property that must contain a date when the related organization or a personal profile have been deactivated.

```json
{
  ...
  "deactivated": "2021-05-08T17:15:22.253Z"
}
```

## Organization profile

As mentioned above for handling of an organization profiles ORG.JSON specification proposes to use `legalEntity` property. This object property has a complex structure that aimed to cover various aspects of an organization profile.

```json
{
  ...
  "legalEntity": {
    "legalName": "TheName",
    ...
  }
}
```

If an organization has related organizational units these units must be reflected in the object property `organizationalUnits` that contains a list of ORGiD's.

```json
{
  "id": "did:orgid:4:0x94...ad75",
  ...
  "legalEntity": {
    "legalName": "TheName",
    ...
    "organizationalUnits": [
      "did:orgid:4:0x93...a119"
    ]
  }
}
```

The definition above means that organization "TheName" with ORGiD "did:orgid:4:0x94...0ad75" has an organizational unit with ORGiD "did:orgid:4:0x93...a119". On another side, the DID document of the "did:orgid:4:0x93...a119" must include `parentOrganization` property pointed to the "did:orgid:4:0x94...0ad75". Only in the case when this bidirectional rule is fulfilled the relation can be counted as verified.

## Organizational unit

For handling of an organizational unit profiles ORG.JSON specification proposes to use `organizationalUnit` property. The way of how this property is work is the same as for `legalEntity`. The detailed information about the structure of the `organizationalUnit` can be found in the [org.json.yaml](https://github.com/windingtree/org.json-schema/blob/feat/new-orgid/src/org.json.yaml) file (see `OrganizationalUnitReference` definition).

## Personal profile

A personal profile is referenced to `ContactReference` definition and contains usual information such as `name`, `phone`, `email`, `messengers`, etc.

## Verification method

A `verificationMethod` is a set of parameters that can be used for the verification of proofs. Each set of parameters should have a unique id by which the verification method can be identified.

> The ORG.JSON specification supposes a mixing of verification methods that are dedicated to verification and assertions in one collection. In future versions, these two types of methods will be split into `verificationMethod` and `assertionMethod` definitions.

```json
{
  ...
  "verificationMethod": [
    {
      "id": "did:orgid:0x94b...ad75#key1",
      "type": "EcdsaSecp256k1VerificationKey2019",
      "controller": "did:orgid:0x94b...ad75",
      "publicKeyJwk": {
        "crv": "secp256k1",
        "x": "NtngWpJUr-rlNNbs0u-Aa8e16OwSJu6UiFf0Rdo1oJ4",
        "y": "qN1jKupJlFsPFc1UkWinqljv4YE0mq_Ickwnjgasvmo",
        "kty": "EC",
        "kid": "WjKgJV7VRw3hmgU6--4v15c0Aewbcvat1BsRFTIqa5Q"
      },
      "note": "Marketing department credentials"
    }
  ]
}
```

The example above illustrate a definition of the verification method that uses `EcdsaSecp256k1VerificationKey2019` cryptography suite. The public key in this example is represented in a JWK form.

The ORGiD SDK supports the generation of various types of key representations but currently, for verification and assetion purposes can be used the following types:

- `publicKeyJwk`
- `blockchainAccountId`

`blockchainAccountId` is a string value of the public key in following format:

```text
0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb@eip155:1
^                                         ^  ^    ^
1                                         2  3    4
```

1. account address (public key)
2. delimiter of the key and its standard
3. the standard there described a type of the blockchain and network identifiers. In this case [the Ethereum blockchain](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-155.md)
4. the blockchain network code. According to the standard `1` is the `Ethereum mainnet`

By default, every DID document must have defined `verificationMethod` with `blockchainAccountId` pointed to the address of the ORGiD owner in the network where this ORGiD has been issued. This is required for a possibility to verify a signed DID document.

> Once added `verificationMethod` should never be removed from the DID document. If this method will be removed then all verifiable credentials or authentication tokens created using this method automatically become invalid.

If you want to revoke a `verificationMethod` you can modify its definition and add `verificationMethodRevocation` in it.

```json
{
  ...
  "verificationMethod": [
    {
      "id": "did:orgid:0x94b...ad75#key1",
      ...
      "verificationMethodRevocation": {
        "reason": "keyCompromise", // Revocation reason according to https://datatracker.ietf.org/doc/html/rfc5280#section-5.3.1
        "invalidityDate": "2021-07-09T19:11:12.367Z"
      }
    }
  ]
}
```

## Capability delegation

The `capabilityDelegation` definition in terms of ORG.JSON specification is the way of delegating a possibility to verify a cryptographically signed DID document to another public key or external method instead of the default method.

Technically, the `capabilityDelegation` is the list of verification methods Ids or complete verification methods definitions. The [ORGiD DID resolver](https://github.com/windingtree/org.id-resolver/tree/new-resolver) will test the existence of this definition during the resolution flow. If this definition will be found the resolver will try to verify a cryptographically signed DID document using the delegated verification method.

> `verificationMethod` Ids that are mentioned in the `capabilityDelegation` definition must be registered in the ORGiD smart contract using the `addDelegate` function.

Here an example of `capabilityDelegation` usage:

```json
{
  ...
  "capabilityDelegation": [
    "did:orgid:0x49b...ba90#key1" // <-- delegated verification method Id
  ]
}
```

## Trust assertion

Building trust relations between entities without the ability to verify trust assertions is not possible. The ORG.JSON specification proposes to use a special kind of verifiable credentials that allow proving special trust assertions.

The idea is that the ORGiD community have to found a special decentralized service that should handle trust assertions verification tasks and issue certificates that prove this assertion results.

This way, trust assertion credentials issued to the address of the entity can represent its trustability.

```json
{
  ...
  "trustAssertions": [
    {
      "@context": [
        "https://www.w3.org/2018/credentials/v1"
      ],
      "id": "c48aba97-c92b-4189-8546-184112f0ebff",
      "issuer": "did:orgid:4:0x57b...ad94", // <-- issuer ORGiD
      "holder": "did:orgid:4:0x94b...ad75", // <-- credential holder
      "type": [
        "VerifiableCredential",
        "TrustAssertion" // <-- trust assertions credential type
      ],
      "issuanceDate": "2019-06-03T13:20:06.398Z",
      "credentialSubject": {
        "id": "did:orgid:4:0x94b...ad75",
        "trustAssertion": {
          "type": "dns", // <-- domain ownership claim
          "claim": "test2.com",
          "proof": "TEXT" // <-- domain ownership can be proved through the publishing of the ORGiD in the TEXT kind of DNS record
        }
      },
      "proof": {
        "type": "EcdsaSecp256k1Signature2019",
        "created": "2019-06-03T13:20:06.398Z",
        "proofPurpose": "assertionMethod",
        "verificationMethod": "did:orgid:0x57b...ad94#key2", // <-- issuer public key
        "jws": "eyJhbGciOiJSUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..."
      }
    }
  ]
}
```

## Service

One of the primary purposes of ORG.JSON is to enable discovery of service endpoints (aka API URIs).

```json
{
  ...
  "service": [
    {
      "id": "did:orgid:4:0x94b...2fc97fb0ad75#apiv1",
      "serviceEndpoint": "https://www.example.com/api/v1",
      "type": "sign up api",
      "description": "Example Membership API",
      "docs": "https://www.example.com/api/docs/"
    }
  ]
}
```
