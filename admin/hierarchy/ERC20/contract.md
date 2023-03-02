---
sidebar_position: 1
---

# Contract

<!-- ERC20 token represents currency and is used for De-Fi(decentralized-finance) -->
An ERC20 token represents a currency or utility token and is widely used in DeFi (decentralized finance) applications for purposes such as trading, lending, and borrowing. ERC20 tokens provide a standard set of rules for creating and managing tokens, making it easier for developers to create new tokens that are compatible with existing wallets and exchanges. They are also the most commonly used type of token in ICOs (Initial Coin Offerings) and other token sales.

## Deployment

ERC20 token contracts are being deployed using [Contract Manager](/admin/miscellaneous/contract-manager/)


### Deployment options

The [Contract Manager](/admin/miscellaneous/contract-manager/) handles the deployment process. If you would like more information about deployment options, please refer to the relevant [page](/admin/miscellaneous/contract-manager/erc20).

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

![](/img/hierarchy/erc20/erc20_contract_edit_modal.png)


## Creation

As an alternative you can use already deployed 3rd party contracts like USDT

### Creation options

- **symbol** - Token ticker to be displayed on exchanges, markets, wallets etc.
- **decimals** - Amount of decimals, defaults to 18 to match Native token
- **title** - This is how token is displayed on marketplace
- **description** - General description. Supports Markdown format.
- **address** - Address of the existing token

![](/img/hierarchy/erc20/erc20_contract_create.png)
![](/img/hierarchy/erc20/erc20_contract_create_modal.png)


## Contracts actions

Each contract deployed via the [Contract Manager](/admin/miscellaneous/contract-manager/contract-manager) has additional actions that can be performed from the Admin panel. While some of these actions may depend on the specific [features](/admin/hierarchy/ERC20/features) of the contract, there are several standard features that are available in all contracts deployed via the Contract Manager:

- **Mint tokens** - Allows the contract owner to mint new tokens and add them to the supply.
- **Snapshot** - Creates a snapshot of the current state of the contract and its variables.
- **Grant role** - Grants a specific role to a specified Ethereum address. The caller must have Admin role.
- **Revoke role** - Revokes a specific role from a specified Ethereum address. The caller must have Admin role.
- **Renounce role** - Removes a specific role from the Ethereum address that currently holds it. The caller must have a Role that is being relinquished
- **Add ETH listeners** - Enables the contract to listen for ETH deposits to the contract address. (Only for developers)
- **Remove ETH listeners** - Disables the ETH listener feature on the contract. (Only for developers)

![](/img/hierarchy/erc20/erc20_contract_options_dropdown.png)