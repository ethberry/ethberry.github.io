---
sidebar_position: 6
---

# Staking

**StakingContractManager** is a contract that facilitates the deployment and management of staking contracts on the blockchain. It provides an easy-to-use interface for creating and deploying new vesting contracts, as well as managing existing ones.

> **NOTE!** <br/>
> Staking deployment is exclusively available in the B2B version of the application, and not available for games.

### Deployment options:

- **contractTemplate** - Smart contract template with available features. (can be *Simple* or *Refferal*)
- **maxStakes** - Maximum number of stakes allowed in the staking contract per user.

The contract validates the input and creates a new Staking contract on the blockchain.

![](/img/miscellaneous/contract-manager/staking_deploy.png)
