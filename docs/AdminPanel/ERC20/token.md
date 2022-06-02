---
sidebar_position: 1
---

# Token

EC20 token is a company shares representation. It is used for De(centralized) Fi(nance)

## Deployment

ERC20 token contracts are being deployed using [Contract Manager](/docs/AdminPanel/ContractManager)

### Deployment parameters

This information is passed directly to blockchain

- **name** - Token name in human-readable format
- **symbol** - Token ticket to be displayed on exchanges
- **cap** - Token cap limits amount of emitted tokens, to remove limits use MaxUint256

### Configuration options

While deployment options are used as default values there are still things to configure 

- **title** - This is how token is displayed on site, mostly in autocomplete fields for ather actions
- **description** - General description in markdown format. Does not make a lot of sense and present mostly for compatibility with other tokens
- **token status** 
  - **NEW** - default status after token deployment, should be manually changed to **ACTIVE** by admin
  - **ACTIVE** - active token are displayed on site and available for selection for other actions
  - **INACTIVE** - inactive tokens are not available for selection and exists for references

### Templates

- **SIMPLE** - Simple template includes all basic functions like mint, burn, transfer and snapshot
- **BLACKLIST** - Includes everything from SIMPLE template plus blacklist to ban specific addresses
