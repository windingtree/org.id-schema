#!/usr/bin/env bash

rm -rf dist/*
mkdir -p dist
node ./scripts/bundle.js
rm -rf types/*
mkdir -p types/org
mkdir -p types/vc
mkdir -p types/nft
mkdir -p types/orgVcNft
npx json2ts ./dist/org.json > types/org/index.d.ts
npx json2ts ./dist/vc.json > types/vc/index.d.ts
npx json2ts ./dist/nft.json > types/nft/index.d.ts
npx json2ts ./dist/orgVcNft.json > types/orgVcNft/index.d.ts
npx tsc --build .
