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

The [Contract Manager](/admin/miscellaneous/contract-manager/) handles the deployment process. If you would like more information about deployment options, please refer to the relevant [page](/admin/miscellaneous/contract-manager/vesting).

### Fund

After contract is deployed you have to manually fund it with tokens. There is a `FUND` button next to each vesting
contract that helps to perform this operation using all system's [NATIVE](/admin/category/native/)
and [ERC20](/admin/category/erc20/) tokens

![](/img/simple-mechanics/vesting/vesting-fund.png)

### Vesting Balance

To check the amount of tokens on a Vesting Contract, click the `WALLET` button next to the contract. From there, you can view the total amount of [NATIVE](/admin/category/native/) or [ERC20](/admin/category/erc20/) tokens in the contract. If you want to know the amount available for release, you can click the `CHECK RELEASABLE AMOUNT` button. Once you have checked the releasable amount, you can then click `RELEASE` button to release this funds.

![](/img/simple-mechanics/vesting/vesting-wallet.png)

### Additional info

To view the main information for each Vesting contract, click on the `VIEW` button. This will display the following details:
- **Address** - The address of the Vesting contract on the blockchain.
- **Account** - The owner of the contract.
- **Start date** - The date on which the Vesting period began.
- **End date** - The date on which the Vesting period ends.
- **Template** - The type of Vesting contract being used. (can be *Linear*, *Graded* or *Cliff*)

![](/img/simple-mechanics/vesting/vesting-view.png)

### Templates

![](/img/simple-mechanics/vesting/vesting-schedule.png)

### References

You can read more about how to create your own Vesting
Template [here](https://docs.openzeppelin.com/contracts/4.x/api/finance#VestingWallet)

