---
sidebar_position: 2
---

# Vesting

Vesting is used to lock investors funds and unlock them using time-base function

## Deployment

Vesting contracts are being deployed using [Contract Manager](/docs/AdminPanel/ContractManager).  

### Deployment options

This information is passed directly to blockchain

- **template** - Smart contract template with its unique functions
  - **LINEAR** - Splits duration in 4 equal period and unlocks funds by 25% each period
  - **GRADED** - Splits duration in 4 equal period and unlocks funds by formula 10% -> 30% -> 60% -> 100%
  - **CLIFF** - Unlocks all funds in the end of vesting period.
- **contract template** - One of the available contract template. The key difference between template is unlocking schedule
- **beneficiary** - The address that can withdraw currency
- **start time** - Starting date of vesting schedule
- **duration** - Vesting duration

### Templates

- **LINEAR** - Splits duration in 4 equal period and unlocks funds by 25% each period
- **GRADED** - Splits duration in 4 equal period and unlocks funds by formula 10% -> 30% -> 60% -> 100%
- **CLIFF** - Unlocks all funds in the end of vesting period.

### References

You can read more about how to create your own Vesting Template [here](https://docs.openzeppelin.com/contracts/4.x/api/finance#VestingWallet)
