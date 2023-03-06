---
sidebar_position: 1
---

# Contract

ERC721 contract is used for creating non-fungible tokens (NFTs) that represent unique items such as simple images, in-game items, characters, and more. These tokens are unique and cannot be interchanged, making them ideal for representing one-of-a-kind digital assets. NFTs have become increasingly popular in the art world and in DeFi as a way to represent ownership and value of unique digital assets.

## Deployment

ERC721 contracts are being deployed using [Contract Manager](/admin/miscellaneous/contract-manager/)

### Deployment options

The [Contract Manager](/admin/miscellaneous/contract-manager/) handles the deployment process. If you would like more information about deployment options, please refer to the relevant [page](/admin/miscellaneous/contract-manager/erc721).

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

![](/img/hierarchy/erc721/erc721_contract_edit_modal.png)

## Contracts actions

ERC721 Contracts have extra actions that can be performed from admin panale. <br/>You can find more details for all actions [here](/admin/hierarchy/contract-actions).

![](/img/hierarchy/erc721/erc721_contract_actions.png)