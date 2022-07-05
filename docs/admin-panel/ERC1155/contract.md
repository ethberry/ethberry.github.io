---
sidebar_position: 1
---

# Contract

ERC1155 contract represents semi-unique items such as resources and potions

## Deployment

ERC1155 contracts are being deployed using [Contract Manager](/docs/admin-panel/ContractManager)

### Deployment options

This information is passed directly to blockchain

- **template** - Smart contract template with its unique functions
    - **SIMPLE** - Simple template includes all basic functions like _mint_, _burn_ and _transfer_ ant their batch versions
- **base token url** - URL which points to server with metadata. most likely [JSON microservice](/api/category/json-microservice/).

## Configuration

After deployment information about smart contract is stored to database and requires some tuning before being displayed on site

### Configuration options

While deployment options are used as default values there are still things to configure

- **title** - This is how collection is displayed on site, especially on marketplace
- **description** - General description in markdown format.
- **status**
    - **NEW** - default status after contract deployment, should be manually changed to **ACTIVE**
    - **ACTIVE** - active token are displayed on site and available for selection for other actions
    - **INACTIVE** - inactive tokens are not available for selection and exists for references
- **role** - collection role
    - **TOKEN** - is a common collection which could be deployed in unlimited amount
- **image** - Cover image, that is displayed on market
