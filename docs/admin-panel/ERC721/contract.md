---
sidebar_position: 1
---

# Contract

ERC721 contract represents unique items such as simple images, in-game items or characters

## Deployment

ERC721 contracts are being deployed using [Contract Manager](/docs/admin-panel/ContractManager)

### Deployment options

This information is passed directly to blockchain

- **template** - Smart contract template with its unique functions
    - **SIMPLE** - Simple template includes all basic functions like _mint_, _burn_ and _transfer_
    - **GRADED** - Includes everything from SIMPLE template plus a metadata storage which can be used for updating level of the item
    - **RANDOM** - Includes everything from GRADED template plus can get random number from [ChainLink](https://docs.chain.link/docs/chainlink-vrf/) service to set rarity based dispersion function
- **name** - Token name in human-readable format
- **symbol** - Token ticket to be displayed on markets
- **base token url** - URL which points to server with metadata. most likely JSON server.
- **royalty** - Royalty is a fee paid to collection owner when items from his collection are being sold. Big marketplaces such as OpenSea pays royalty, but smaller marketplaces might not support [EIP-2981](https://eips.ethereum.org/EIPS/eip-2981) standard

## Configuration

After deployment information about smart contract is stored to database and requires some tuning before being displayed on site

### Configuration options

While deployment options are used as default values, there are still things to configure

- **title** - This is how collection is displayed on site, especially on marketplace
- **description** - General description in markdown format.
- **status**
    - **NEW** - default status after contract deployment, should be manually changed to **ACTIVE**
    - **ACTIVE** - active token are displayed on site and available for selection for other actions
    - **INACTIVE** - inactive tokens are not available for selection and exists for references
- **role** - collection role
    - **AIRDROP** - is a system collection which currently cannot be deployed by user. It is used in pair with staking to give the reward
    - **DROPBOX** - is a system collection which currently cannot be deployed by user. It is used for selling items which could have a random parameters
    - **TOKEN** - is a common collection which could be deployed in unlimited amount
- **image** - Cover image, that is displayed on market
