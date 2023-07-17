---
sidebar_position: 1
---

# Contract

WaitList contract is an entry point to blockchain actions.

# Contract actions

Each contract deployed via the [Contract Manager](/admin/miscellaneous/contract-manager/contract-manager.md) has
action menu with relevant blockchain actions

- **Access Control:**
    - **Grant role** - Grants a specific role to a specified Ethereum address. (The caller must have Admin role)
    - **Revoke role** - Revokes a specific role from a specified Ethereum address. (The caller must have Admin role)
    - **Renounce role** - Removes a specific role from the Ethereum address that currently holds it. (The caller must have a Role that is being relinquished)
- **Misc:**
    - **Pause** - Temporary suspense contract

![waitlist contract action menu](/img/admin/mechanics-simple/wait-list/waitlist_contract_actions.png)

