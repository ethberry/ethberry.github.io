---
sidebar_position: 1
---

# Contract

ERC1155 contract is designed for semi-unique items, such as game resources or potions. It allows for the creation of fungible and non-fungible tokens within the same contract, making it a flexible option for game developers and other use cases.

## Deployment

ERC1155 contracts are being deployed using [Contract Manager](/admin/miscellaneous/contract-manager/)

### Deployment options

These values are passed directly to blockchain

- **template** - predefined set of features for this contract
- **base token url** - point to the server with metadata
- **royalty** - royalty percentage on secondary sales

![ERC1155 contract deploy dialog](/img/hierarchy/erc1155/erc1155_contract_deploy_dialog.png)

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
- **image** - Cover image, that is displayed on market

![ERC1155 contract edit dialog](/img/hierarchy/erc1155/erc1155_contract_edit_dialog.png)

## Contracts actions

ERC1155 Contracts have extra actions that can be performed from admin panale. <br/>You can find more details for all actions [here](/admin/hierarchy/contract-actions).
