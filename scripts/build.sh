#!/usr/bin/env bash

rm -rf dist
rm -rf build
rm -rf types
mkdir -p dist
mkdir -p build
mkdir -p types/org.json
mkdir -p types/vc
mkdir -p types/nft
mkdir -p types/orgVc
mkdir -p types/trustAssertion
node ./scripts/bundle.js
npx json2ts ./build/org.json > types/org.json/index.d.ts
npx json2ts ./build/vc.json > types/vc/index.d.ts
npx json2ts ./build/nft.json > types/nft/index.d.ts
npx json2ts ./build/orgVc.json > types/orgVc/index.d.ts
npx json2ts ./build/trustAssertion.json > types/trustAssertion/index.d.ts
npx tsc -p ./tsconfig-build.json
