# ORG.JSON Vocabulary

Permanent location of this file: [ORGID_VOCAB_URL]

## Abstract

ORG.JSON, part of [ORGiD](https://orgid.tech), is a data format for representing data about organizations and their structural units.

This document describes classes and properties that can be used to create, read and validate ORG.JSON datasheets.

## Status of This Document

This specification was published by the Winding Tree and proposed to the community as standard.

Google group for discussing ORGiD and ORG.JSON: https://groups.google.com/a/windingtree.com/g/standards (standards@windingtree.com).

## Namespaces

- [ORGiD](https://orgid.tech) namespace: `orgid`
- [OpenAPI](https://swagger.io/specification/) namespace: `oas`
- [Verifiable Credentials](https://www.w3.org/TR/vc-data-model/) namespace: `vc`

## Classes

- [`orgid:trust`](#orgidtrust)
- [`orgid:assertion`](#orgidassertion)
- [`orgid:legalIdentifier`](#orgidlegalidentifier)
- [`orgid:address`](#orgidaddress)
- [`orgid:geocode`](#orgidgeocode)
- [`orgid:location`](#orgidlocation)
- [`orgid:openingHoursItem`](#orgidorganizationalunit)
- [`orgid:contact`](#orgidcontact)
- [`orgid:messenger`](#orgidmessenger)
- [`orgid:legalEntity`](#orgidlegalentity)
- [`orgid:mediaResource`](#orgidmediaresource)
- [`orgid:media`](#orgidmedia)
- [`orgid:organizationalUnit`](#orgidorganizationalunit)

---
### `orgid:trust`

Trust records can be of two types: assertions and credentials. Assertions do not require a third party to prove the validity of the data in question, while credentials are provided by third parties.

**Status**
- not stable

**Class name**
- `orgid:trust`

**Expected properties**
- [assertions](#assertions)
- [credentials](#credentials)

Example

```json
{
    "assertions": [
        {
            "claim": "windingtree.com",
            "type": "dns",
            "proof": "TXT"
        },
        {
            "claim": "glider.travel",
            "type": "domain",
            "proof": "http://test2.com/orgid.txt"
        },
        {
            "claim": "twitter.com/jack",
            "type": "post",
            "proof": "https://twitter.com/jack/status/123456789/"
        }
    ],
    "credentials": {
        "@context": [],
        "id": "http://example.edu/credentials/58473",
        "type": ["VerifiableCredential", "AlumniCredential"],
        "credentialSubject": {},
        "proof": {}
    }
}
```

---
### `orgid:assertion`

**Status**
- not stable

**Class name**
- `orgid:assertion`

**Expected properties**
- [claim](#assertionclaim)
- [type](#assertiontype)
- [proof](#assertionproof)

**Required properties**
- [claim](#assertionclaim)
- [type](#assertiontype)
- [proof](#assertionproof)

Example: website `assertion` with `dns` proof (TXT DNS record):

```json
{
    "claim": "windingtree.com",
    "type": "dns",
    "proof": "TXT"
}
```

Example: website `assertion` with `domain` proof (text file):

```json
{
    "claim": "lif.windingtree.com",
    "type": "domain",
    "proof": "https://lif.windingtree.com/orgid.txt"
}
```

---
### `orgid:legalIdentifier`

An identifier issued to the organization by local authorities during its incorporation. A.k.a. registry code, company identification number, commercial register number, entity number, etc..

**Status**
- not stable

**Class name**
- `legalIdentifier`

**Expected properties**
- [type](#legalidentifiertype)
- [value](#legalidentifiervalue)

**Required properties**
- [type](#legalidentifiertype)
- [value](#legalidentifiervalue)

Example:

```json
{
    "type": "Commercial register number",
    "value": "CH-170.7.000.838-1"
}
```

---
### `orgid:address`

Legal entity's registered address. It must match record of the authority it is registered with.

**Status**
- stable

**Class name**
- `orgid:address`

**Expected properties**
- [country](#addresscountry)
- [subdivision](#addresssubdivision)
- [locality](#addresslocality)
- [postalCode](#addresspostalcode)
- [streetAddress](#addressstreetaddress)
- [premise](#addresspremise)
- [gps](#addressgps)
- [geocodes](#addressgeocodes)

**Required properties**
- [country](#addresscountry)
- [locality](#addresslocality)
- [postalCode](#addresspostalcode)
- [streetAddress](#addressstreetaddress)

Example:

```json
{
    "country": "CH",
    "subdivision": "ZG",
    "locality": "Zug",
    "postal_code": "6300",
    "street_address": "Gubelstrasse 11",
    "premise": "c/o Sielva Management SA"
}
```

---
### `orgid:geocode`

Address geocode, e.g. Open Location Code (`olc`), what3words, etc.

**Status**
- stable

**Class name**
- `orgid:geocode`

**Expected properties**
- [type](#geocodetype)
- [value](#geocodevalue)

**Required properties**
- [type](#geocodetype)
- [value](#geocodevalue)

Example:

```json
{
    "type": "olc",
    "value": "5GF9+J4 Zug"
}
```

---
### `orgid:location`

Physical location related to legal entity or an organizational unit. E.g. an office, a facility, etc.

**Status**
- stable

**Class name**
- `orgid:location`

**Expected properties**
- [name](#locationname)
- [description](#locationdescription)
- [address](#locationaddress)
- [openingHours](#locationopeninghours)
- [contacts](#locationcontacts)

**Required properties**
- [name](#locationname)
- [address](#locationaddress)

Example:

```json
{
    "name": "Main Office",
    "description": "This is our company's main office",
    "address": {
        "country": "CH",
        "subdivision": "ZG",
        "locality": "Zug",
        "postal_code": "6300",
        "street_address": "Gubelstrasse 11",
        "premise": "c/o Sielva Management SA",
        "gps": "50.087070,14.417210",
        "geocodes": [
            {
                "type": "olc",
                "value": "5GF9+J4 Zug"
            },
            {
                "type": "what3words",
                "value": "luring.deployed.quench"
            }
        ]
    },
    "openingHours": [
        {
            "weekDay": "mon,tue,wed,thu",
            "hours": "9:00-16:00"
        },
        {
            "weekDay": "fri",
            "hours": "10:00-13:00"
        }
    ],
    "contacts": []
}
```

---
### `orgid:openingHoursItem`

Opening hours of the entity

**Status**
- stable

**Class name**
- `orgid:openingHoursItem`

**Expected properties**
- [weekDay](#openinghoursitemweekday)
- [hours](#openinghoursitemhours)

**Required properties**
- [weekDay](#openinghoursitemweekday)
- [hours](#openinghoursitemhours)

Examples:

```json
[
    {
        "weekDay": "mon,tue,wed,thu",
        "hours": "9:00-16:00"
    },
    {
        "weekDay": "fri",
        "hours": "10:00-13:00"
    }
]
```

---
### `orgid:contact`

Contact details

**Status**
- stable

**Class name**
- `orgid:contact`

**Expected properties**
- [function](#contactfunction)
- [name](#contactname)
- [phone](#contactphone)
- [email](#contactemail)
- [messengers](#contactmessengers)
- [language](#contactlanguage)


Example:

```json
{
    "function": "Community Chat",
    "messengers": [
        {
            "type": "telegram",
            "value": "t.me/windingtree"
        }
    ]
}
```

---
### `orgid:messenger`

Messenger account information

**Status**
- stable

**Class name**
- `orgid:messenger`

**Expected properties**
- [type](#messengertype)
- [value](#messengervalue)

**Required properties**
- [type](#messengertype)
- [value](#messengervalue)

Example:

```json
{
    "type": "telegram",
    "value": "t.me/windingtree"
}
```

---
### `orgid:legalEntity`

`legalEntity` is one of the two possible main blocks of ORGiD (another being `organizationalUnit`).

**Status**
- stable

**Class name**
- `orgid:legalEntity`

**Expected properties**
- [legalName](#legalentitylegalname)
- [alternativeName](#legalentityalternativename)
- [legalIdentifier](#legalentitylegalidentifier)
- [identifiers](#legalentityidentifiers)
- [legalType](#legalentitylegaltype)
- [registeredAddress](#legalentityregisteredaddress)
- [location](#legalentitylocation)
- [contacts](#legalentitycontacts)

**Required properties**
- [legalName](#legalentitylegalname)
- [legalIdentifier](#legalentitylegalidentifier)
- [legalType](#legalentitylegaltype)
- [registeredAddress](#legalentityregisteredaddress)

Example:

```json
{
    "legalName": "Winding Tree Stiftung",
    "alternativeName": "Winding Tree",
    "legalIdentifier": "CHE-415.029.859",
    "identifiers": [
        {
            "type": "Commercial register number",
            "value": "CH-170.7.000.838-1"
        }
    ],
    "legalForm": "Stiftung",
    "registeredAddress": {
        "country": "CH",
        "subdivision": "ZG",
        "locality": "Zug",
        "postal_code": "6300",
        "street_address": "Gubelstrasse 11",
        "premise": "c/o Sielva Management SA"
    },
    "locations": [
        {
            "name": "Main Office",
            "description": "",
            "address": {
                "country": "CH",
                "subdivision": "ZG",
                "locality": "Zug",
                "postal_code": "6300",
                "street_address": "Gubelstrasse 11",
                "premise": "c/o Sielva Management SA",
                "gps": "50.087070,14.417210",
                "geocodes": [
                    {
                        "type": "olc",
                        "value": "5GF9+J4 Zug"
                    },
                    {
                        "type": "what3words",
                        "value": "luring.deployed.quench"
                    }
                ]
            },
            "openingHours": [
                {
                    "weekDay": "mon,tue,wed,thu",
                    "hours": "9:00-16:00"
                },
                {
                    "weekDay": "fri",
                    "hours": "10:00-13:00"
                }
            ]
        }
    ],
    "contacts": [
        {
            "function": "Community Chat",
            "messengers": [
                {
                    "type": "telegram",
                    "value": "t.me/windingtree"
                }
            ]
        }
    ]
}
```

---
### `orgid:mediaResource`

Media resource like image, video, document

**Status**
- stable

**Class name**
- `orgid:mediaResource`

**Expected properties**
- [description](#mediaresourcedescription)
- [cover](#mediaresourcecover)
- [thumbnail](#mediaresourcethumbnail)
- [uri](#mediaresourceuri)

**Required properties**
- [description](#mediaresourcedescription)
- [uri](#mediaresourceuri)

Example:

```json
{
    "description": "Background image",
    "uri": "https://arbor.fm/images/bg.png"
}
```

---
### `orgid:media`

List of the media files

**Status**
- stable

**Class name**
- `orgid:media`

**Expected properties**
- [logo](#medialogo)
- [images](#mediaimages)
- [videos](#mediavideos)
- [documents](#mediadocuments)

**Required properties**
- [logo](#medialogo)

```json
{
    "logo": "https://arbor.fm/images/arbor-logo.png",
    "images": [
        {
            "description": "Background image",
            "uri": "https://arbor.fm/images/bg.png"
        }
    ],
    "videos": [
        {
            "description": "Welcome video",
            "uri": "https://arbor.fm/images/intro.mp4"
        }
    ],
    "documents": []
}
```

---
### `orgid:organizationalUnit`

Information about the organizational unit. e.g. Hotel, Agency

**Status**
- stable

**Class name**
- `orgid:organizationalUnit`

**Expected properties**
- [name](#organizationalunitname)
- [type](#organizationalunittype)
- [description](#organizationalunitdescription)
- [longDescription](#organizationalunitlongdescription)
- [address](#organizationalunitaddress)
- [openingHours](#organizationalunitopeninghours)
- [contacts](#organizationalunitcontacts)
- [media](#organizationalunitmedia)

**Required properties**
- [name](#organizationalunitname)
- [type](#organizationalunittype)

Example:

```json
{
    "name": "Grand Budapest Hotel",
    "type": [
        "hotel",
        "boutique"
    ],
    "description": "Grand Budapest Hotel is a boutique hotel in the heart of Budapest",
    "longDescription": "",
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
            "phone": "+1234567890",
            "email": "email@spam.com"
        }
    ],
    "media": {
        "logo": "https://imagehosting/hotel.jpg",
        "images": [
            {
                "description": "Hotel Lobby",
                "uri": "https://imagehosting/123456789.jpg",
                "thumbnail": "https://imagehosting/123456789-thumbnail.jpg"
            }
        ],
        "videos": [
            {
                "description": "Hotel Tour",
                "uri": "https://videohosting/hotel-tour.mp4",
                "cover": "https://imagehosting/hotel-tour-cover.jpg",
                "thumbnail": "https://imagehosting/hotel-tour-cover-thumbnail.jpg"
            }
        ],
        "documents": [
            {
                "description": "Hotel Presentation",
                "uri": "https://filehosting/hotel-presentation.pdf"
            }
        ]
    }
}
```

# Properties

### assertions

A list of claims with proofs

**Status**
- stable

**Range**
- `oas:array`

**Items**
- [`orgid:assertion`](#orgidassertion)

---
### credentials

Verifiable credentials list

**Status**
- stable

**Range**
- `oas:array`

**Items**
- [`vc`](https://www.w3.org/TR/vc-data-model/)

---
### assertions.type

The claim type. e.g. domain, twitter, facebook

**Status**
- stable

**Range**
- `oas:string`


---
### assertions.claim

The claim subject. For example - account or domain name

**Status**
- stable

**Range**
- `oas:string`


---
### assertions.proof

A proof of the claim. e.q. link to the file with DID inside or DNS record

**Status**
- stable

**Range**
- `oas:string`


---
### legalEntity.description

**Status**
- stable

**Range**
- `oas:string`


---
### legalEntity.legalName

The legal name of the business. A business might have more than one legal name, particularly in countries with more than one official language.

**Status**
- stable

**Range**
- `oas:string`


---
### legalEntity.alternativeName

A recognized name other than the legal name. Some jurisdictions recognise concepts such as a trading name or alternative forms of a legal entity's name. The Alternative Name property can be used to record such names but should not be used to record translations of the primary legal name. Where more than one legal name exists and where they have equal standing but are expressed in different languages, identify the language used in each of the multiple legal names. It is notable that some jurisdictions regard the use of any name other than the primary Legal Name as suspicious.

**Status**
- stable

**Range**
- `oas:string`


---
### legalEntity.legalIdentifier

The identifier given to the legal entity by the authority with which it is registered.

**Status**
- stable

**Range**
- `oas:string`

### legalEntity.identifiers

A set of legal identifiers obtained from registrators, associations etc.

**Status**
- stable

**Range**
- `oas:array`

**Items**
- [`orgid:legalIdentifier`](#legalentitylegalidentifier)


---
### legalEntity.legalType

The type of the business. e.g. LLC,SA,PLC,GmbH

**Status**
- stable

**Range**
- `oas:string`


---
### legalEntity.registeredAddress

The registered address of the business. In almost all jurisdictions, legal entities must register a postal address. This may or may not be the actual address at which the legal entity does its business - it is commonly the address of their lawyer or accountant - but it is the address to which formal communications can be sent.

**Status**
- stable

**Range**
- `orgid:address`


---
### legalEntity.location

**Status**
- stable

**Range**
- [`orgid:location`](#orgidlocation)


---
### legalEntity.contacts

**Status**
- stable

**Range**
- `oas:array`

**Items**
- [`orgid:contact`](#orgidcontact)


---
### legalIdentifier.type

The type of an identifier. e.g. iata

**Status**
- stable

**Range**
- `oas:string`


---
### legalIdentifier.value

Value of the identifier. e.g. IATA code or Trade license

**Status**
- stable

**Range**
- `oas:string`


---
### address.country

A country code in "ISO 3166 alpha-2" country code standard

**Status**
- stable

**Range**
- `oas:string`


---
### address.subdivision

Subdivision string

**Status**
- stable

**Range**
- `oas:string`


---
### address.locality

City / Town

**Status**
- stable

**Range**
- `oas:string`


---
### address.postalCode

Postal code / ZIP Code

**Status**
- stable

**Range**
- `oas:string`


---
### address.streetAddress

Street number

**Status**
- stable

**Range**
- `oas:string`


---
### address.premise

Apartment, Suite, Box number, etc.

**Status**
- stable

**Range**
- `oas:string`


---
### address.gps

Geographic coordinates

**Status**
- stable

**Range**
- `oas:string`


---
### address.geocodes

Special codes to ease locate an entity on the map

**Status**
- stable

**Range**
- `oas:array`

**Items**
- [`orgid:geocode`](#orgidgeocode)


---
### geocode.type

Geo code type. e.g. olc, what2words, etc.

**Status**
- stable

**Range**
- `oas:string`


---
### geocode.value

Geo code value

**Status**
- stable

**Range**
- `oas:string`


---
### location.name

Location name

**Status**
- stable

**Range**
- `oas:string`


---
### location.description

Location description

**Status**
- stable

**Range**
- `oas:string`


---
### location.address

**Status**
- stable

**Range**
- [`orgid:address`](#orgidaddress)


---
### location.openingHours

**Status**
- stable

**Range**
- `oas:array`

**Items**
- [`orgid:openingHoursItem`](#orgidopeninghoursitem)


---
### location.contacts

**Status**
- stable

**Range**
- `oas:array`

**Items**
- `orgid:contact`

---
### openingHoursItem.weekDay

A week day in short form. e.g. sun,mon,tue... etc

**Status**
- stable

**Range**
- `oas:string`


---
### openingHoursItem.hours

Formatted string with hours range. string MUST be formatted accordig to mask HH:MM

**Status**
- stable

**Range**
- `oas:string`

**Pattern**
- `^[0-9]{2}-[0-9]{2}$`


---
### contact.function

The contact type that represents his job function. e.g. Sales,IT,Marketing

**Status**
- stable

**Range**
- `oas:string`


---
### contact.name

The contact name

**Status**
- stable

**Range**
- `oas:string`


---
### contact.phone

The contact phone number

**Status**
- stable

**Range**
- `oas:string`


---
### contact.email

The contact email

**Status**
- stable

**Range**
- `oas:string`

**Format**
- email


---
### contact.messengers

List of messangers accounts of the contact

**Status**
- stable

**Range**
- `oas:array`

**Items**
- [`orgid:messenger`](#orgidmessenger)


---
### contact.language

List of languages of the contact.
A languages code specifies a unique name for each culture based on "RFC 4646" (Windows Vista and later). The name is a combination of an "ISO 639" two-letter lowercase culture code associated with a language and an "ISO 3166" two-letter uppercase subculture code associated with a country or region. e.g. "en-US"

**Status**
- stable

**Range**
- `oas:array`

**Items**
- `orgid:string`


---
### messenger.type

Messanger type. e.g. whatsup,telegram,viber,wechat,messanger,line

**Status**
- stable

**Range**
- `oas:string`


---
### messenger.value

Messanger account

**Status**
- stable

**Range**
- `oas:string`


---
### organizationalUnit.name

Name of the organizational unit. e.g. Grand Budapesht Hotel

**Status**
- stable

**Range**
- `oas:string`


---
### organizationalUnit.type

Type of the organizational unit. e.g. ["hotel", "boutique"]

**Status**
- stable

**Range**
- `oas:array`

**Items**
- `oas:string`


---
### organizationalUnit.description

Short description of the organizational unit

**Status**
- stable

**Range**
- `oas:string`


---
### organizationalUnit.longDescription

Long description of the organizational unit

**Status**
- stable

**Range**
- `oas:string`


---
### organizationalUnit.address

**Status**
- stable

**Range**
- [`orgid:address`](#orgidad"name": "Grand Budapest Hotel",
    "type": [
        "hotel",
        "boutique"
    ],
    "description": "Grand Budapest Hotel is total lorem ipsum",
    "longDescription": "Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”\nAs Cicero would put it, “Um, not so fast.”\nThe placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.",
    "address": {
        "country": "CZ",
        "subdivision": "71",
        "locality": "Jihlava",
        "postal_code": "71354",
        "street_address": "3150 Main St.",
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
            "phone": "+1234567890",
            "email": "email@spam.com"
        }
    ],
    "media": {
        "logo": "https://imagehosting/hotel.jpg",
        "images": [
            {
                "description": "Hotel Lobby",
                "uri": "https://imagehosting/123456789.jpg",
                "thumbnail": "https://imagehosting/123456789-thumbnail.jpg"
            }
        ],
        "videos": [
            {
                "description": "Hotel Tour",
                "uri": "https://videohosting/hotel-tour.mp4",
                "cover": "https://imagehosting/hotel-tour-cover.jpg",
                "thumbnail": "https://imagehosting/hotel-tour-cover-thumbnail.jpg"
            }
        ],
        "documents": [
            {
                "description": "Hotel Presentation",
                "uri": "https://filehosting/hotel-presentation.pdf"
            }
        ]
    }
}dress)


---
### organizationalUnit.openingHours

**Status**
- stable

**Range**
- `oas:array`

**Items**
- [`orgid:openingHoursItem`](#orgidopeninghoursitem)

---
### organizationalUnit.contacts

**Status**
- stable

**Range**
- `oas:array`

**Items**
- [`orgid:contact`](#orgidcontact)


---
### organizationalUnit.media

**Status**
- stable

**Range**
- [`orgid:media`](#orgidmedia)


---
### media.logo

Logotype of the organizational unit, URI

**Status**
- stable

**Range**
- `oas:string`

**Format**
- uri


---
### media.images

List of images

**Status**
- stable

**Range**
- [`oas:mediaResource`](#orgidmediaresource)


---
### media.videos

List of videos

**Status**
- stable

**Range**
- [`oas:mediaResource`](#orgidmediaresource)


---
### media.documents

List of documents

**Status**
- stable

**Range**
- [`oas:mediaResource`](#orgidmediaresource)


---
### mediaResource.description

Resource role description

**Status**
- stable

**Range**
- `oas:string`


---
### mediaResource.cover

Image that representing a video content

**Status**
- stable

**Range**
- `oas:string`


---
### mediaResource.thumbnail

Thumbnail image

**Status**
- stable

**Range**
- `oas:string`


---
### mediaResource.uri

Link to the media resource. e.g. image of video file

**Status**
- stable

**Range**
- `oas:string`

**Format**
- uri
