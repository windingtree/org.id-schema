/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ORGJSON = OrgJsonReference;
/**
 * When two software systems need to exchange data, they need to use terminology and a protocol that both systems understand. The @context property ensures that two systems operating on the same DID document are using mutually agreed terminology.
 */
export type ContextReference = LinkedContextReference | LinkedMultipleContextReference | LinkedContextDocumentReference;
/**
 * Linked context URI
 */
export type LinkedContextReference = string;
/**
 * A list of context references
 */
export type LinkedMultipleContextReference = LinkedContextReference[];
/**
 * The DID subject is denoted by the id property. The DID subject is the entity that the DID document (ORG.JSON) is about. That is, it is the entity identified by the DID and described in the DID document.
 */
export type DIDReference = string;
/**
 * Service endpoint URI conforming to [RFC3986] and normalized according to the rules in section 6 of [RFC3986] and to any normalization rules in its applicable URI scheme specification.
 */
export type LinkedEndpointReference = string;
/**
 * Currency code
 */
export type Currency = string;
/**
 * Public key of the blockchain account
 */
export type BlockchainAccountId = string;
/**
 * The cryptographic signature suite that was used to generate the signature
 */
export type CryptographicSignatureSuiteReference = "EcdsaSecp256k1Signature2019" | "JsonWebSignature2020";
/**
 * List of trust assertions (claims with proofs)
 */
export type TrustAssertionsReference = CredentialReference[];
/**
 * List of credentials (provided and signed by third parties)
 */
export type CredentialsReference = CredentialReference[];
/**
 * The capability delegation is used to specify mechanism that might be used by the DID subject (organization entity or person) to delegate a cryptographic capability to another party, such as delegating the authority to access a specific HTTP API to a subordinate or to specify a method of verification of credentials. ORGiD protocol uses capability delegation to specify an own method of ORG.JSON VC verification or a third party verification method to do it.
 */
export type CapabilityDelegationReference = (DIDReference | VerificationMethodReference)[];
/**
 * Opening hours
 */
export type OpeningHoursReference = OpeningHoursRangeReference[];
/**
 * Language tag according to RFC 4646. Represented as combination of the ISO 639-1 language code and ISO 3166-1 alpha-2 country code. Examples: en-US, en-GB, cs-CZ, etc.
 */
export type LanguageItemReference = string;
/**
 * Preferred languages
 */
export type LanguageReference = LanguageItemReference[];

/**
 * ORG.JSON represents an organization or one of its structural units (departments, stores, etc.). In W3C terminology it is called DID Document.
 */
export interface OrgJsonReference {
  /**
   * Semantic version of the org.json schema. If not defined it means the latest version
   */
  schemaVersion?: string;
  "@context": ContextReference;
  id: DIDReference;
  /**
   * Date-time when the data was created.
   */
  created: string;
  /**
   * Date-time when the data was last changed.
   */
  updated?: string;
  /**
   * Date-time when the ORGiD was deactivated
   */
  deactivated?: string;
  /**
   * Public keys are used for digital signatures, encryption and other cryptographic operations, which in turn are the basis for purposes such as authentication or establishing secure communication with service endpoints.
   */
  verificationMethod?: VerificationMethodReference[];
  /**
   * One of the primary purposes of ORG.JSON is to enable discovery of service endpoints (aka API URIs).
   */
  service?: ServiceReference[];
  /**
   * Public information about payment accounts of the organization.
   */
  payment?: PaymentReference[];
  trustAssertions?: TrustAssertionsReference;
  credentials?: CredentialsReference;
  capabilityDelegation?: CapabilityDelegationReference;
  legalEntity?: LegalEntityReference;
  organizationalUnit?: OrganizationalUnitReference;
  person?: ContactReference;
  [k: string]: unknown;
}
/**
 * Context document https://www.w3.org/TR/json-ld/#the-context
 */
export interface LinkedContextDocumentReference {
  [k: string]: unknown;
}
/**
 * Public keys are used for digital signatures, encryption and other cryptographic operations, which in turn are the basis for purposes such as authentication or establishing secure communication with service endpoints.
 */
export interface VerificationMethodReference {
  /**
   * The DID subject is denoted by the id property. The DID subject is the entity that the DID document (ORG.JSON) is about. That is, it is the entity identified by the DID and described in the DID document.
   */
  id: string;
  /**
   * The cryptographic suite that was used to generate a public key
   */
  type: "EcdsaSecp256k1VerificationKey2019" | "JsonWebKey2020";
  /**
   * The DID subject is denoted by the id property. The DID subject is the entity that the DID document (ORG.JSON) is about. That is, it is the entity identified by the DID and described in the DID document.
   */
  controller: string;
  /**
   * Public key (account address) of the blockchain account
   */
  blockchainAccountId?: string;
  /**
   * A public key PEM property is used to specify the PEM-encoded version of the public key
   */
  publicKeyPem?: string;
  /**
   * Public key in JWT format (recommended key format)
   */
  publicKeyJwk?: {
    [k: string]: unknown;
  };
  /**
   * Public key in value in Base58 Bitcoin format
   */
  publicKeyBase58?: string;
  /**
   * Note about the private key purpose
   */
  note?: {
    [k: string]: unknown;
  };
  /**
   * Verification method revocation status
   */
  verificationMethodRevocation?: {
    /**
     * Revocation reason according to https://datatracker.ietf.org/doc/html/rfc5280#section-5.3.1
     */
    reason?:
      | "unspecified"
      | "keyCompromise"
      | "affiliationChanged"
      | "superseded"
      | "cessationOfOperation"
      | "certificateHold"
      | "privilegeWithdrawn";
    /**
     * Date of the public key invalidation
     */
    invalidityDate?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
/**
 * One of the primary purposes of ORG.JSON is to enable discovery of service endpoints (aka API URIs).
 */
export interface ServiceReference {
  id: DIDReference;
  /**
   * Service endpoint type, e.g. "Google Maps" or "NDC"
   */
  type: string;
  serviceEndpoint: {
    [k: string]: unknown;
  } & (LinkedEndpointReference | LinkedDocumentEndpointReference);
  [k: string]: unknown;
}
/**
 * Service endpoint document conforming to JSON-LD object https://www.w3.org/TR/json-ld/
 */
export interface LinkedDocumentEndpointReference {
  "@context": ContextReference;
  /**
   * Service endpoint type
   */
  type?: string;
  [k: string]: unknown;
}
/**
 * Public information about payment accounts of the organization.
 */
export interface PaymentReference {
  /**
   * The type of the payment record
   */
  type: "crypto" | "bank" | "simard";
  /**
   * Currency of the account
   */
  currency: Currency[];
  /**
   * Cryptocurrency account address
   */
  address?: BlockchainAccountId;
  /**
   * SWIFT/BIC bank code according to ISO 9326
   */
  swift?: string;
  /**
   * International Bank Account Number (IBAN) according to ISO 13616:1997
   */
  iban?: string;
  [k: string]: unknown;
}
/**
 * ORGiD Verifiable Credentials Schema
 */
export interface CredentialReference {
  "@context": ContextReference;
  /**
   * Unique identifier of the VC generated by the issuer
   */
  id: string;
  /**
   * Type of the VC
   */
  type: string[];
  /**
   * The DID subject is denoted by the id property. The DID subject is the entity that the DID document (ORG.JSON) is about. That is, it is the entity identified by the DID and described in the DID document.
   */
  issuer: string;
  /**
   * VC holder
   */
  holder?: string | VCTypedHolderReference;
  /**
   * When the VC was issued
   */
  issuanceDate: string;
  /**
   * When the VC will be expired
   */
  expirationDate?: string;
  /**
   * When the VC will becomes valid. Useful when the credential usage is time dependent. E.g. Entrance card to the SPA
   */
  validFrom?: string;
  /**
   * When the VC will becomes invalid. Useful when the credential usage is time dependent. E.g. Entrance card to the SPA
   */
  validUntil?: string;
  /**
   * Claims about the subject of VC
   */
  credentialSubject: {
    [k: string]: unknown;
  };
  proof?: VCProofReference;
  [k: string]: unknown;
}
/**
 * This type of the holder definition can be used when a credential issued to a holder who is not the (only) subject of the credential, who has no relationship with the subject of the credential, but who has a relationship with the issuer
 */
export interface VCTypedHolderReference {
  /**
   * A type of activity during which the issuer permits to own the credential
   */
  type: string;
  /**
   * The DID subject is denoted by the id property. The DID subject is the entity that the DID document (ORG.JSON) is about. That is, it is the entity identified by the DID and described in the DID document.
   */
  id: string;
  [k: string]: unknown;
}
/**
 * Digital proof that makes the credential tamper-evident
 */
export interface VCProofReference {
  type: CryptographicSignatureSuiteReference;
  /**
   * When proof was created
   */
  created: string;
  /**
   * Purpose of the proof
   */
  proofPurpose: string;
  /**
   * The DID subject is denoted by the id property. The DID subject is the entity that the DID document (ORG.JSON) is about. That is, it is the entity identified by the DID and described in the DID document.
   */
  verificationMethod: string;
  /**
   * The digital signature value
   */
  jws: string;
  [k: string]: unknown;
}
/**
 * Legal entity information
 */
export interface LegalEntityReference {
  /**
   * Legal name, e.g. 'Acme, Inc.' or 'Ajax Ltd.'
   */
  legalName: string;
  /**
   * A recognized name other than the legal name. Some jurisdictions recognize concepts such as a trading name or alternative forms of a legal entity's name. The Alternative Name property can be used to record such names but should not be used to record translations of the primary legal name. Where more than one legal name exists and where they have equal standing but are expressed in different languages, identify the language used in each of the multiple legal names. It is notable that some jurisdictions regard the use of any name other than the primary Legal Name as suspicious.
   */
  alternativeName?: string;
  /**
   * Identifier given to the legal entity by the authority with which it is registered.
   */
  registryCode: string;
  /**
   * A formally-issued identifier for the legal entity, other than the one that confers legal status upon it. Legal entities may have any number of identifiers (but only one legal identifier). For example, in many jurisdictions, a business will have one or more tax numbers associated with them which do not, by themselves, confer legal entity status. The Identifier property must not be used to link to the identifier issued by the authority that conferred legal entity status on a business.
   */
  identifiers?: IdentifierReference[];
  /**
   * Legal entity type: limited company, corporation, NGO, etc.
   */
  legalType: string;
  registeredAddress: AddressReference;
  locations?: LocationReference[];
  contacts?: ContactReference[];
  media?: MediaListReference;
  /**
   * A list of organizational units of the legal entity
   */
  organizationalUnits?: DIDReference[];
  [k: string]: unknown;
}
/**
 * A set of identifiers other than legal identifier
 */
export interface IdentifierReference {
  /**
   * Identifier type (e.g. "IATA", "Trade License")
   */
  type: string;
  /**
   * Identifier value
   */
  value: string;
  [k: string]: unknown;
}
/**
 * Legal entity official address, physical location of a store, etc.
 */
export interface AddressReference {
  /**
   * ISO 3166-1 alpha-2 country code
   */
  country: string;
  /**
   * ISO 3166-2 country subdivision code1
   */
  subdivision?: string;
  /**
   * City or town
   */
  locality: string;
  /**
   * Postal code
   */
  postalCode: string;
  /**
   * Street address
   */
  streetAddress: string;
  /**
   * Office, suite, apartment, etc.
   */
  premise?: string;
  /**
   * GPS coordinates
   */
  gps?: string;
  /**
   * Address geocode: Open Location Code, what3words, etc.
   */
  geocodes?: GeoCodeReference[];
  [k: string]: unknown;
}
/**
 * Open Location Code (Plus Code) or what3words
 */
export interface GeoCodeReference {
  /**
   * (olc|what3words)
   */
  type: string;
  /**
   * E.g. "G6FX+QP" or "///compressor.verb.patch"
   */
  value: string;
  [k: string]: unknown;
}
/**
 * Any location that business is related to the organization.
 */
export interface LocationReference {
  /**
   * Location name
   */
  name: string;
  /**
   * Location description
   */
  description?: string;
  address: AddressReference;
  openingHours?: OpeningHoursReference;
  contacts: ContactReference[];
  [k: string]: unknown;
}
/**
 * Opening hours range
 */
export interface OpeningHoursRangeReference {
  /**
   * Three-letter week day, e.g. mon, tue, wed...
   */
  weekDay: string;
  /**
   * Time range, e.g. 9:00-17:30 or 12:30-20:05
   */
  hours: string;
  [k: string]: unknown;
}
/**
 * Contact reference
 */
export interface ContactReference {
  /**
   * Contact function: sales, support, accounting, etc.
   */
  function?: string;
  /**
   * Contact person or department name
   */
  name?: string;
  /**
   * Phone number
   */
  phone?: string;
  /**
   * Email
   */
  email?: string;
  /**
   * Messenger accounts
   */
  messengers?: MessengerReference[];
  language?: LanguageReference;
  [k: string]: unknown;
}
/**
 * Messenger account information
 */
export interface MessengerReference {
  /**
   * whatsapp, telegram, viber, wechat, messenger, line, etc.
   */
  type: string;
  /**
   * Messenger account ID
   */
  value: string;
  [k: string]: unknown;
}
/**
 * List of media files
 */
export interface MediaListReference {
  /**
   * Organization or unit logo
   */
  logo?: string;
  /**
   * List of images
   */
  images?: MediaReference[];
  /**
   * List of video files
   */
  videos?: MediaReference[];
  /**
   * List of documents
   */
  documents?: MediaReference[];
  /**
   * Files other than images, video files or documents
   */
  others?: MediaReference[];
  [k: string]: unknown;
}
/**
 * Media file
 */
export interface MediaReference {
  /**
   * File description
   */
  description?: string;
  /**
   * Thumbnail image
   */
  thumbnail?: string;
  /**
   * Link to the media resource
   */
  uri: string;
  [k: string]: unknown;
}
/**
 * Organizational unit
 */
export interface OrganizationalUnitReference {
  /**
   * Unit name e.g. "Grand Budapest Hotel", "Accounting Department" or "Acme 13th Ave"
   */
  name: string;
  /**
   * Unit type, e.g. ["hotel", "boutique"]
   */
  type?: string[];
  /**
   * Short description of the unit
   */
  description?: string;
  /**
   * Long description of the unit
   */
  longDescription?: string;
  address?: AddressReference;
  openingHours?: OpeningHoursReference;
  contacts?: ContactReference[];
  media?: MediaListReference;
  /**
   * The DID subject is denoted by the id property. The DID subject is the entity that the DID document (ORG.JSON) is about. That is, it is the entity identified by the DID and described in the DID document.
   */
  parentOrganization?: string;
  [k: string]: unknown;
}
