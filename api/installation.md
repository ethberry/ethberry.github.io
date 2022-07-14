---
sidebar_position: 1
---

# Installation

Welcome to [GEMUNION](https://www.gemunion.io/) framework monorepo

This monorepo is powered by Lerna. You can read about what is monorepo and how it works [here](https://github.com/lerna/lerna) 

## Overview

Project consists of 4 main sections

- CONTRACTS is a home of all solidity smart contracts
- PACKAGES contains FE localization and shared types
- SERVICES contains FE and BE code
- MICROSERVICES a bunch of utils for integration with other services

## Installation

There are a number of external services we need for data storage and communication between different parts of the system, to install and run thm execute

```shell
docker compose up -d
```

We also have to deploy all required contracts
```shell
cd contracts/core
hardhat run scripts/001-deploy-dev.ts --network besu
```

Then you can run individual service or microservice with
```shell
npm run --prefix ./services/admin-api start
npm run --prefix ./services/admin-ui start
```
