---
sidebar_position: 1
---

# Contract

ERC20 token represents currency and is used for De-Fi(decentralized-finance)

## Deployment

ERC20 token contracts are being deployed using [Contract Manager](/admin/miscellaneous/contract-manager/)

### Deployment options

This is the way to deploy new contract yourself, params are passed directly to blockchain

- **features** - Smart contract template with its unique functions
- **name** - Token name in human-readable format
- **symbol** - Token ticker to be displayed on exchanges, markets, wallets etc.
- **cap** - Token cap, which limits amount of emitted tokens (use [MaxUint256](https://docs.ethers.io/v5/api/utils/constants/) to remove limits)

## Configuration

After deployment to blockchain, information about smart contract is stored to database and requires some tuning before
being displayed on site

### Configuration options

While deployment options are used as default values, there are still things to configure

- **title** - This is how token is displayed on site, mostly in autocomplete fields for other actions
- **description** - General description. Supports Markdown format. Optional and present mostly for compatibility with other tokens
- **token status**
    - **NEW** - Default status after contract deployment, should be manually changed to **ACTIVE**
    - **ACTIVE** - Active tokens are displayed on site and available for selection for other actions
    - **INACTIVE** - Inactive tokens are not available for selection
- **features** - Contract features
    - **BLACKLIST** - <u>Comming soon</u>
    - **EXTERNAL** - <u>Comming soon</u> 
        *, can connect already existing token (USDT, BUSD), and can get payments in MarketPlace on this currency*
    - **OWNER** - <u>Comming soon</u> (ERC20, ERC1155) 
        *This kind of feature allow for ERC20 ownable on onaother tokens. Without this feature they can ownable only ERC721 and ERC998*
        *The main benefit of this feature that you can send all this tokens in one transaction so it would be m*
## Creation

As an alternative you can use already deployed 3rd party contracts like USDT

### Creation options

- **symbol** - Token ticker to be displayed on exchanges, markets, wallets etc.
- **decimals** - Amount of decimals, defaults to 18 to match Native token
- **title** - This is how token is displayed on marketplace
- **description** - General description. Supports Markdown format.
- **address** - Address of the existing token
