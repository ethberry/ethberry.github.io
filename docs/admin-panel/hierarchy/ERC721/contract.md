---
sidebar_position: 1
---

# Contract

ERC721 contract for non-fungible tokens (NFTs). Represents unique items such as simple images, in-game items, characters, etc.

## Deployment

ERC721 contracts are being deployed using [Contract Manager](/docs/admin-panel/miscellaneous/contract-manager/)

### Deployment options

This information is passed directly to blockchain

- **template** - Smart contract template with its unique functions
    - **SIMPLE** - Simple template includes all basic functions like _mint_, _burn_ and _transfer_
    - **GRADED** - Extends **SIMPLE** plus _metadata storage_, which can be used for updating level of the item
    - **RANDOM** - Extends **GRADED** plus can use _random number_ from [ChainLink](https://docs.chain.link/docs/chainlink-vrf/) service to set rarity based on dispersion function
- **name** - Token name in human-readable format
- **symbol** - Token ticker  to be displayed on exchanges, markets, wallets etc.
- **base token url** - URL which points to server with metadata. (usually a stand-alone JSON server)[JSON microservice](/api/category/json-microservice/).
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
- **features** - Contract features
  - **BLACKLIST** - Extends **SIMPLE**, plus _blacklist_ function to ban any specific addresses
  - **UPGRADEABLE** - Adds level attribute to contract
  - **RANDOM** - Adds [ChainLink](/docs/integrations/chain-link/) support and `rarity` attribute
  - **SOULBOUND** - This type of token is bound to specific wallet because can't be transferred
  - **MYSTERYBOX** - A token than can be `unpacked` to mint new token from RANDOM collection
- **image** - Cover image, that is displayed on market
