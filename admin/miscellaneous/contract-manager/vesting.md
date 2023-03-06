---
sidebar_position: 5
---

# Vesting

VestingContractManager is a contract that facilitates the deployment and management of vesting contracts on the Ethereum blockchain. It provides an easy-to-use interface for creating and deploying new vesting contracts, as well as managing existing ones.

### Deployment options:

- **contractTemplate** - Smart contract template with its unique functions. (can be *Linear*, *Graded* or *Cliff*)
- **account** - Address of the beneficiary who will receive the vested tokens.
- **startTimestamp** - Unix timestamp (in seconds) of the vesting start time.
- **duration** - The length of time, in seconds, until all tokens are vested.

The contract validates the input and creates a new vesting contract on the blockchain. Once the contract is deployed, the tokens are locked and will be released to the beneficiary over the vesting period.

![](/img/miscellaneous/contract-manager/vesting_deploy.png)