# wt-organization-schemas
Model schema definitions used for ORG.JSON part of ORG.ID of the
[Winding Tree platform](https://windingtree.com/).


This data structure called **ORG.JSON** is part of the `ORG.ID` specification and JSON files
conforming to this layout should be linked from the **0xORG** smart contract.

For more information visit our [developer portal](https://developers.windingtree.com/).

## Build

We are using a non-standard notation for referencing external Open API documents,
such as `$ref: '@windingtree/wt-shared-schemas/swagger.yaml#/components/schemas/EthereumAddressType'`.
These references are resolved from NPM dependencies and inlined during the build phase.

Version number is set during the build phase as well.
