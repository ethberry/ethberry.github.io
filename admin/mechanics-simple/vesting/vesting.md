---
sidebar_position: 4
---

# Vesting

Vesting is usually used to lock investors funds and unlock them using time-base function. This means investors still can
use their bound to gain profit by selling it as a derivative or by using it for 
[governance](/admin/mechanics-complex/governance/) but can't just sell tokens on the DEX.

# Contract actions

Each contract deployed via the [Contract Manager](/admin/miscellaneous/contract-manager/contract-manager.md) has 
action menu with relevant blockchain actions

- **Misc:**
    - **Allowance** - Approves a third-party address to spend a specified amount of tokens on behalf of the token owner.
    - **TopUp** - Transfer [NATIVE](/admin/category/native/) or [ERC20](/admin/category/erc20/) to the contract

### Additional info

To view the main information for each vesting contract, click on the `VIEW` button. This will display the following details:
- **address** - the address of the Vesting contract on the blockchain.
- **account** - the owner of the contract.
- **start date** - the date on which the vesting period began.
- **cliff in month** - how many month to wait until first unlock
- **duration** - total amount of month needs to release all funds
- **monthly release** - how many percents of locked amount to release every month
-
![vesting contract view dialog](/img/admin/mechanics-simple/vesting/vesting_contract_view_dialog.png)

### References

You can read more about how to create your own vesting schedule
[here](https://docs.openzeppelin.com/contracts/4.x/api/finance#VestingWallet)

