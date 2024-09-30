---
hide_table_of_contents: true
sidebar_position: 1
---

# Installation

Welcome to [ETHBERRY](https://www.ethberry.io/) framework 

This monorepo is powered by Lerna. You can read about what is monorepo and how Lerna
works [here](https://github.com/lerna/lerna)

## Overview

Project consists of 4 main sections

- CONTRACTS is a home of all solidity smart contracts
- PACKAGES contains FE localization and types between FE and BE
- SERVICES contains FE and BE code of the application
- MICROSERVICES a bunch of utils for integration with other services

## Installation

There are a number of external services we need for data storage and communication between different parts of the
system, to install and run them execute

### Pre Install

I assume you have NodeJS NPM/YARN, Postgres, RabbitMQ and Redis installed
or, you just can use them as a docker container

```bash
docker compose up -d
```

In case you have installed postgres, you have to manually create an `framework-development` database,
our script only creates a schema for you.

In order to run tests, you have to manually create `framework-test` database.

In any case you have to fill up sensitive keys in docker files and .env files

### Manual Installation

1. First, install dependencies and build project:

```bash
npm i
npm run bootstrap
```

2. Then, you can run Project's services one-by-one, run them in separate terminals for easy monitoring

Admin-api (it will run initial postgres migrations to seed database)

```shell script
npm run --prefix ./services/admin-api start
```

Admin-ui

```shell script
npm run --prefix ./services/admin-ui start
```

Market-api

```shell script
npm run --prefix ./services/market-api start
```

Market-ui

```shell script
npm run --prefix ./services/market-ui start
```

Core-eth

```shell script
npm run --prefix ./services/core-eth start
```

JSON-MS

```shell script
npm run --prefix ./microservices/json start
```

GAME-MS

```shell script
npm run --prefix ./microservices/game start
```

Emailer

```shell script
npm run --prefix ./microservices/eml start
```

## API docs

There are Swagger API documentation configured at appropriate service ports, ie
Admin-api: http://localhost:3001/swagger
Market-api: http://localhost:3005/swagger
Core-eth: http://localhost:3021/swagger

## Configuration

For fine tune of each (micro)service check README files

