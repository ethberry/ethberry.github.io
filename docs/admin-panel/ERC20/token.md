---
sidebar_position: 1
---

# Token

ERC20 token represents currency and is used for De(centralized) Fi(nance)

## Deployment

ERC20 token contracts are being deployed using [Contract Manager](/docs/admin-panel/ContractManager)

### Deployment options

This information is passed directly to blockchain

- **template** - Smart contract template with its unique functions
  - **SIMPLE** - Simple template includes all basic functions like _mint_, _burn_, _transfer_ and _snapshot_
  - **BLACKLIST** - Includes everything from SIMPLE template plus blacklist to ban specific addresses
- **name** - Token name in human-readable format
- **symbol** - Token ticket to be displayed on exchanges
- **cap** - Token cap limits amount of emitted tokens, to remove limits use MaxUint256

## Configuration

After deployment information about smart contract is stored to database and requires some tuning before being displayed on site 

### Configuration options

While deployment options are used as default values there are still things to configure

- **title** - This is how token is displayed on site, mostly in autocomplete fields for other actions
- **description** - General description in markdown format. Does not make a lot of sense and present mostly for compatibility with other tokens
- **token status** 
  - **NEW** - Default status after contract deployment, should be manually changed to **ACTIVE**
  - **ACTIVE** - Active token are displayed on site and available for selection for other actions
  - **INACTIVE** - Inactive tokens are not available for selection and exists for references
