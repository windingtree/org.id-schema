/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * ORG.JSON VC version with NFT extension
 */
export type ORGJSONVCNFT = ORGJSONVCNFT1 & ORGJSONVCNFT2;
export type ORGJSONVCNFT1 = CredentialReference;
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
  | "Ed25519Signature2018"
  | "RsaSignature2018"
  | "EcdsaSecp256k1RecoverySignature2020";
/**
 * Name of the item
 */
export type NftName = string;
/**
 * A human readable description of the item. Markdown is supported.
 */
export type NftDescription = string;
/**
 * This is the URL to the image of the item. Can be just about any type of image (including SVGs), and can be IPFS URLs or paths. The recommend size: 350px x 350px.
 */
export type NftImage = string;
/**
 * This is the URL that will appear below the asset's image on NFT markets or wallets and will allow users to get more information about the item on an external website.
 */
export type NftExternalUrl = string;
/**
 * Background color of the item on NFT markets, dashboards or other resources. Must be a six-character hexadecimal without a pre-pended #.
 */
export type NftBackgroundColor = string;
/**
 * A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA. Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas, WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.
 */
export type NftAnimationUrl = string;
/**
 * A field indicating how you would like trait attribute to be displayed
 */
export type NftAttributeTraitDisplayType = "number" | "boost_number" | "boost_percentage" | "date";
export type NftAttributes = NftAttributeReference[];

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
   * Holder' ORGiD
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
export interface ORGJSONVCNFT2 {
  name: NftName;
  description: NftDescription;
  image: NftImage;
  external_url?: NftExternalUrl;
  background_color?: NftBackgroundColor;
  animation_url?: NftAnimationUrl;
  youtube_url?: NftAnimationUrl;
  attributes?: NftAttributes;
  [k: string]: unknown;
}
/**
 * Additional NFT Metadata attribute. This attributes format is adopting the OpenSea metadata recommendations: https://docs.opensea.io/docs/metadata-standards#attributes
 */
export interface NftAttributeReference {
  /**
   * The name of the trait
   */
  trait_type: string;
  /**
   * The trait value
   */
  value: string;
  display_type?: NftAttributeTraitDisplayType;
  [k: string]: unknown;
}