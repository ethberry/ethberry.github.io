---
sidebar_position: 1
---

# Vesting

Vesting is usually used to lock investors funds and unlock them using time-base function. This means investors still can
use their bound to gain profit by selling it or by using it for [governance](/admin/complex-mechanics/governance/)
but can't just sell tokens on the market.

## Deployment

Vesting contracts are being deployed using [Contract Manager](/admin/miscellaneous/contract-manager/).

### Deployment options

This information is passed directly to blockchain

- **template** - Smart contract template with its unique time-base functions. The key difference between template is
  unlocking schedule
    - **LINEAR** - Splits duration in 4 equal period and unlocks funds by 25% each period
    - **GRADED** - Splits duration in 4 equal period and unlocks funds by formula 10% -> 30% -> 60% -> 100%
    - **CLIFF** - Unlocks 100% funds in the end of vesting period.
- **account** - The address of beneficiary
- **start time** - Starting date of vesting schedule
- **duration** - Vesting duration

### Fund

After contract is deployed you have to manually fund it with tokens. There is a `FUND` button next to each vesting
contract that helps to perform this operation using all system's [NATIVE](/admin/category/native/)
and [ERC20](/admin/category/erc20/) tokens

### Templates

![](/img/vesting-schedule.png)

### References

You can read more about how to create your own Vesting
Template [here](https://docs.openzeppelin.com/contracts/4.x/api/finance#VestingWallet)

