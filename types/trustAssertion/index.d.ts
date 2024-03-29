/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Verifiable Credential that confirms a trust assertion claim
 */
export type TrustAssertionCredential = TrustAssertionCredential1 & TrustAssertionCredential2;
export type TrustAssertionCredential1 = CredentialReference;
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
 * The cryptographic signature suite that was used to generate the signature
 */
export type CryptographicSignatureSuiteReference =
  | "EcdsaSecp256k1Signature2019"
  | "EcdsaSecp256k1RecoverySignature2020"
  | "JsonWebSignature2020";
/**
 * The DID subject is denoted by the id property. The DID subject is the entity that the DID document (ORG.JSON) is about. That is, it is the entity identified by the DID and described in the DID document.
 */
export type DIDReference = string;

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
   * VC issuer
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
 * Context document https://www.w3.org/TR/json-ld/#the-context
 */
export interface LinkedContextDocumentReference {
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
   * Holder's ORGiD
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
   * The identifier of the public key that can verify the signature
   */
  verificationMethod: string;
  /**
   * The digital signature value
   */
  jws: string;
  [k: string]: unknown;
}
export interface TrustAssertionCredential2 {
  credentialSubject?: TrustAssertionSubjectReference;
  [k: string]: unknown;
}
/**
 * The trust assertion subject
 */
export interface TrustAssertionSubjectReference {
  id: DIDReference;
  trustAssertion: AssertionReference;
  [k: string]: unknown;
}
/**
 * Trust assertion
 */
export interface AssertionReference {
  /**
   * Claim subject. E.g. domain name or social account
   */
  claim: string;
  /**
   * Proof type: (domain|dns|social)
   */
  type: "domain" | "dns" | "social";
  /**
   * Proof of the claim: dns record, text file URI, or link to a post on facebook, linkedin, etc.
   */
  proof: string;
  [k: string]: unknown;
}
