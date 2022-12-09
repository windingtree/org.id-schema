# ORG.JSON VC NFT schema

DID documents that are built on the base of ORG.JSON specification to be verifiable must be protected from unauthorised changes with the usage of the verifiable credential method.

The ORGiD SDK has a function for the creation of VC (`createVc`) that accepts adding of DID documents as a credential subject for VC. Also, because every ORGiD has to provide NFT metadata to be a valid NFT this VC creation function also provides a method of adding such metadata.

A digital document created by this function will be a valid VC document and NFT metadata source that can be validated using the schema proposed by this package.

The example of the VC with DID document as a credential subject and NFT metadata:

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://raw.githubusercontent.com/windingtree/org.id-schema/feat/new-orgid/src/context.json"
  ],
  "id": "c48aba97-c92b-4189-8546-184112f0ebff", // <-- unique credential Id
  "issuer": "did:orgid:4:0x57b...ad94", // <-- credential issuer
  "type": [
    "VerifiableCredential", // <-- base credential type
    "OrgJson" // <-- ORG.JSON VC type
  ],
  "issuanceDate": "2021-06-03T13:20:06.398Z",

  // time restrictions (from, until, expire)
  "validFrom": "2021-06-04T00:00:00.000Z",
  "validUntil": "2021-12-04T00:00:00.000Z",
  "expirationDate": "2022-01-01T00:00:00.000Z",

  "credentialSubject": { // ORG.JSON as credential subject
    "id": "did:orgid:4:0x57b...ad94",
    "created": "2021-03-03T13:20:06.398Z",
    "updated": "2021-04-03T13:20:06.398Z",
    "verificationMethod": [
      {
        "id": "did:orgid:4:0x57b...ad94#key1",
        "type": "EcdsaSecp256k1VerificationKey2019",
        "controller": "did:orgid:4:0x57b...ad94",
        "blockchainAccountId": "0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb@eip155:4"
      }
    ],
    "legalEntity": {
      "legalName": "Acme, Corp.",
      "alternativeName": "Acme",
      "registryCode": "US12345567",
      "identifiers": [
        {
          "type": "IATA",
          "value": "123456"
        }
      ],
      "legalType": "GmBH",
      "registeredAddress": {
        "country": "CZ",
        "subdivision": "71",
        "locality": "Jihlava",
        "postalCode": "71354",
        "streetAddress": "3150 Main St.",
        "premise": "STE 100"
      },
      "locations": [
        {
          "name": "Main Office",
          "description": "This is our main office",
          "address": {
            "country": "CZ",
            "subdivision": "71",
            "locality": "Jihlava",
            "postalCode": "71354",
            "streetAddress": "3150 Main St.",
            "premise": "STE 100",
            "gps": "50.087070,14.417210",
            "geocodes": [
              {
                "type": "olc",
                "value": "3CQ9+F2 Prague"
              },
              {
                "type": "what3words",
                "value": "printers.torn.images"
              }
            ]
          },
          "openingHours": [
            {
              "weekDay": "mon,tue,wed",
              "hours": "9:00-18:00"
            },
            {
              "weekDay": "fri",
              "hours": "10:00-16:00"
            }
          ],
          "contacts": [
            {
              "function": "Reception",
              "name": "John Smith",
              "phone": "+1234567890",
              "email": "email@spam.com",
              "messengers": [
                {
                  "type": "whatsapp",
                  "value": "+1234567890"
                },
                {
                  "type": "telegram",
                  "value": "acme.ny.reception"
                },
                {
                  "type": "viber",
                  "value": "+1234567890"
                }
              ]
            }
          ]
        }
      ],
      "contacts": [
        {
          "function": "Customer Service",
          "name": "John Smith",
          "phone": "+1234567890",
          "email": "email@spam.com"
        }
      ]
    }
  },

  // NFT metadata
  "name": "Acme",
  "description": "Acme, Corp.",
  "image": "https://examle.com/path/to/image.png",
  "external_url": "https://examle.com",

  // VC proof
  "proof": {
    "type": "EcdsaSecp256k1Signature2019", // <-- proof signature cryptographic suite
    "created": "2021-06-03T13:20:06.398Z",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "did:orgid:4:0x57b...ad94#key1", // <-- verification method
    "jws": "eyJhbGciOiJSUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..." // <-- proof signature
  }
}
```
