# ORGiD VC schema

A verifiable credential (VC) can represent any information that can be verified from physical credentials to digital ownership claims and so on. An issuer of a VC must be a known trusted entity with a valid DID document that contains a valid verification method.

Verifiable credentials can be used in a trust relationship between an organization and its employee or an organization and its organizational unit. For example, an organization can issue a VC to its manager that proves that he is able to apply signatures on behalf of its. Or a VC can represent proof of successful completeness of internal or external organization audit. There is a lot of use cases for VC.

ORGiD VC schema is based on [Verifiable Credentials Data Model](https://www.w3.org/TR/vc-data-model/) and adopted to be used in the ORGiD ecosystem. The ORGiD SDK has a full set of features that allow the creation or import of cryptographic keys required for VC signing and verification and creation and verification of credentials as well.

VC validity can be restricted by time and extended with custom properties. Here the example of the VC:

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1"
  ],
  "id": "c48aba97-c92b-4189-8546-184112f0ebff", // <-- unique credential Id
  "issuer": "did:orgid:4:0x57b...ad94", // <-- credential issuer
  "holder": "did:orgid:4:0x94b...ad75", // <-- credential holder
  "type": [
    "VerifiableCredential", // <-- base credential type
    "TestProof" // <-- type extension
  ],
  "issuanceDate": "2021-06-03T13:20:06.398Z",
  // time restrictions (from, until, expire)
  "validFrom": "2021-06-04T00:00:00.000Z",
  "validUntil": "2021-12-04T00:00:00.000Z",
  "expirationDate": "2022-01-01T00:00:00.000Z",
  "credentialSubject": {
    ...
    "data": { ... }
  },
  "proof": {
    "type": "EcdsaSecp256k1Signature2019", // <-- proof signature cryptographic suite
    "created": "2021-06-03T13:20:06.398Z",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "did:orgid:0x57b...ad94#key2", // <-- issuer public key
    "jws": "eyJhbGciOiJSUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..." // <-- the proof signature
  }
}
```
