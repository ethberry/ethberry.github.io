---
sidebar_position: 6
---

# Contract actions

Each contract deployed via the [Contract Manager](/admin/miscellaneous/contract-manager/contract-manager.md) has additional actions that can be performed from the Admin panel. While some of these actions may depend on the specific [features](/admin/hierarchy/ERC20/features) of the contract, there are several standard features that are available in all contracts deployed via the Contract Manager:

- **Access Control:**
    - **Grant role** - Grants a specific role to a specified Ethereum address. (The caller must have Admin role)
    - **Revoke role** - Revokes a specific role from a specified Ethereum address. (The caller must have Admin role)
    - **Renounce role** - Removes a specific role from the Ethereum address that currently holds it. (The caller must have a Role that is being relinquished)
- **Access List:**
    - **Add to blacklist**: Adds a specified Ethereum address to the blacklist. (Available only if contract have Blacklist feature)
    - **Remove from blacklist** - Removes a specified Ethereum address from the blacklist. (Available only if contract have Blacklist feature)
- **Misc:**
    - **Mint tokens** - Allows the contract owner to mint new tokens and add them to the supply.
    - **Snapshot** - Creates a snapshot of the current state of the contract and its variables.
- **Dev:**
    - **Add ETH listeners** - Enables the contract to listen for ETH deposits to the contract address. (Only for developers)
    - **Remove ETH listeners** - Disables the ETH listener feature on the contract. (Only for developers)

![](/img/hierarchy/erc20/erc20_contract_actions.png)