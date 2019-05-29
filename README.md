# wt-organization-schemas
Model schema definitions used for Organizations on the
[Winding Tree platform](https://windingtree.com/).

For more information visit our [developer portal](https://developers.windingtree.com/).

## Build

We are using a non-standard notation for referencing external Open API documents,
such as `$ref: '@windingtree/wt-shared-schemas/swagger.yaml#/components/schemas/EthereumAddressType'`.
These references are resolved from NPM dependencies and inlined during the build phase.

Version number is set during the build phase as well.
