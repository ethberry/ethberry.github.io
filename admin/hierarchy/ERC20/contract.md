---
sidebar_position: 1
---

# Contract

<!-- ERC20 token represents currency and is used for De-Fi(decentralized-finance) -->
An ERC20 token represents a currency or utility token and is widely used in DeFi (decentralized finance) applications for purposes such as trading, lending, and borrowing. ERC20 tokens provide a standard set of rules for creating and managing tokens, making it easier for managers to create new tokens that are compatible with existing wallets and exchanges. They are also the most commonly used type of token in ICOs (Initial Coin Offerings) and other token sales.

## Deployment

ERC20 token contracts are being deployed using [Contract Manager](/admin/miscellaneous/contract-manager/)


### Deployment options

These values are passed directly to blockchain

- **template** - predefined set of features for this contract
- **name** - token name
- **symbol** - token ticker on the market
- **cap** - max amount of tokens ever possible to mint

![ERC20 contract deploy dialog](/img/admin/hierarchy/erc20/erc20_contract_deploy_dialog.png)

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

![ERC20 contract edit dialog](/img/admin/hierarchy/erc20/erc20_contract_edit_dialog.png)

## Creation

As an alternative you can use already deployed 3rd party contracts like USDT, BUSD, WETH. 

### Creation options

- **symbol** - Token ticker to be displayed on exchanges, markets, wallets etc.
- **decimals** - Amount of decimals, defaults to 18 to match Native token
- **title** - This is how token is displayed on marketplace
- **description** - General description. Supports Markdown format.
- **address** - Address of the existing token

![ERC20 contract create dialog](/img/admin/hierarchy/erc20/erc20_contract_create_dialog.png)

## Contracts actions

ERC20 Contracts have extra actions that can be performed from admin panale. <br/>You can find more details for all actions [here](/admin/hierarchy/contract-actions).
