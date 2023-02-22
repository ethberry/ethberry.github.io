---
sidebar_position: 1
---

# Contract

ERC721 contract for non-fungible tokens (NFTs). Represents unique items such as simple images, in-game items, characters, etc.

## Deployment

ERC721 contracts are being deployed using [Contract Manager](/admin/miscellaneous/contract-manager/)

### Deployment options

This information is passed directly to blockchain

- **template** - see available features [here](/admin/hierarchy/ERC721/features/)
- **name** - Token name in human-readable format
- **symbol** - Token ticker to be displayed on exchanges, markets, wallets etc.
- **base token url** - URL which points to server with metadata. (usually a stand-alone [JSON microservice](/api/category/json-microservice/) server or IPFS).
- **royalty** - Royalty (automatic payouts to the smart contract's owner made on secondary sales). Big marketplaces such as OpenSea pays royalty, but some smaller marketplaces might not support it [EIP-2981](https://eips.ethereum.org/EIPS/eip-2981)

## Configuration

After deployment information about smart contract is stored to database and requires some tuning before being displayed on site

### Configuration options

While deployment options are used as default values there are still things to configure

- **title** - This is how collection is displayed on site or marketplace
- **description** - General description. Supports Markdown format.
- **status**
  - **NEW** - Default status after contract deployment, should be manually changed to **ACTIVE**
  - **ACTIVE** - Active tokens are displayed on site and available for selection for other actions
  - **INACTIVE** - Inactive tokens are not available for selection
- **image** - Cover image, that is displayed on market
