---
sidebar_position: 1
---

# Contract

ERC1155 contract represents semi-unique items (i.e. Game's resources or potions) 

## Deployment

ERC1155 contracts are being deployed using [Contract Manager](/docs/admin-panel/miscellaneous/contract-manager/)

### Deployment options

This information is passed directly to blockchain

- **template** - Smart contract template with its unique functions
    - **SIMPLE** - Simple template includes all basic functions like _mint_, _burn_ and _transfer_ ant their batch versions
- **base token url** - URL which points to server with metadata. (usually a stand-alone JSON server)[JSON microservice](/api/category/json-microservice/).

## Configuration

After deployment information about smart contract is stored to database and requires some tuning before being displayed on site

### Configuration options

While deployment options are used as default values, there are still things to configure

- **title** - This is how collection is displayed on site or marketplace
- **description** - General description. Supports Markdown format. Optional and present mostly for compatibility with other tokens
- **status**
  - **NEW** - Default status after contract deployment, should be manually changed to **ACTIVE**
  - **ACTIVE** - Active tokens are displayed on site and available for selection for other actions
  - **INACTIVE** - Inactive tokens are not available for selection
- **role** - collection role
  - **TOKEN** - Common ERC721 collection which could be deployed in unlimited amount
- **image** - Cover image, that is displayed on market
