---
sidebar_position: 1
---

# Contract

Raffle contract is an entry point to blockchain actions.

## Contract actions

Each contract deployed via the [Contract Manager](/admin/miscellaneous/contract-manager/contract-manager.md) has
action menu with relevant blockchain actions

Merchant has to fund a contract with [LINK](/admin/integrations/chain-link/) token to use
ChainLink's [VRF](https://docs.chain.link/vrf/v2/introduction).

- **Access Control:**
  - **Grant role** - Grants a specific role to a specified Ethereum address. (The caller must have Admin role)
  - **Revoke role** - Revokes a specific role from a specified Ethereum address. (The caller must have Admin role)
  - **Renounce role** - Removes a specific role from the Ethereum address that currently holds it. (The caller must have a Role that is being relinquished)
- **Misc:**
  - **Pause** - Temporary suspense contract
- **Specific:**
  - **Start round** - Manually starts round
  - **End round** - Manually ends round
  - **Schedule** - Set automatic round start/end using CRON scheduler. Example: every monday at 12am

> **NOTE!** Scheduling is only available in Standalone version

![raffle contract action menu](/img/admin/mechanics-simple/raffle/contract_actions.png)

