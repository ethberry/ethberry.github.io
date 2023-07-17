---
sidebar_position: 6
---

# Contract actions

Each contract deployed via the [Contract Manager](/admin/miscellaneous/contract-manager/contract-manager.md) has
action menu with relevant blockchain actions.

While some of these actions may depend on the specific [features](/admin/hierarchy/ERC20/features) of the contract,
there are several standard features that are available in all contracts from hierarchy section:

- **Access Control:**
  - **Grant role** - Grants a specific role to a specified Ethereum address. (The caller must have Admin role)
  - **Revoke role** - Revokes a specific role from a specified Ethereum address. (The caller must have Admin role)
  - **Renounce role** - Removes a specific role from the Ethereum address that currently holds it. (The caller must have a Role that is being relinquished)
- **Access List:**
  - **Add to blacklist** - Adds a specified Ethereum address to the blacklist. (Available only if contract have Blacklist feature)
  - **Remove from blacklist** - Removes a specified Ethereum address from the blacklist. (Available only if contract have Blacklist feature)
  - **Add to whitelist** - Adds a specified Ethereum address to the whitelist. (Available only if contract have Whitelist feature)
  - **Remove from whitelist** - Removes a specified Ethereum address from the whitelist. (Available only if contract have Whitelist feature)
- **Misc:**
  - **Mint tokens** - Allows the contract owner to mint new tokens and add them to the supply.
  - **Transfer** - Transfers tokens from one Ethereum address to another.
  - **Allowance** - Approves a third-party address to spend a specified amount of tokens on behalf of the token owner.
  - **Snapshot** - Creates a snapshot of the current state of the contract and its variables. (Only for [ERC20](/admin/category/erc20/))
  - **Royalty** - Updates royalty contract-wise. (Only for [ERC721](/admin/category/erc721/), [ERC998](/admin/category/erc998/), [ERC1155](/admin/category/erc1155/))
- **Dev:**
  - **Add ETH listeners** - Enables the contract to listen for ETH deposits to the contract address. (Only for
    developers)
  - **Remove ETH listeners** - Disables the ETH listener feature on the contract. (Only for developers)

![hierarchy contract action menu](/img/admin/hierarchy/contract_actions.png)
