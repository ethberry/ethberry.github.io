---
sidebar_position: 3
---

# Report

#### This report shows all deposits made for Staking contract. Each deposit contains the following columns:

- **ID**: The unique identifier of deposit.
- **Account**: The **address** of the depositer.
- **Deposit**: Show `Symbol` `Amount` of token being deposit.
- **Staking Rule**: Show `Deposit TokenType` > `Reward TokenType` of the staking rule used for the deposit.
- **Created**: The date and time the deposit occurred.

![](/img/admin/mechanics-complex/staking/report.png)

## Filter

#### You can filter reports by several properties:

- **Status**:
    - **Active**: deposits that are still active and have not been withdrawn.
    - **Cancelled**: deposits that were cancelled and the tokens were returned to the depositor.
    - **Complete**: deposits that were completed and the tokens were released along with the reward.
- **Account**: The **address** of the depositor who made the deposit.
- **Empty reward**: If `checked`, It means that the deposit does not have an **on-chain** reward, and any rewards for the depositor is **off-chain**.
- **Deposit**:
    - **TokenType**: The type of token that was deposited (see [asset](/admin/miscellaneous/asset))
    - **Contract**: The [contract](/admin/hierarchy/ERC721/contract) of the tokens that were used in deposit.
- **Reward**: 
    - **TokenType**: The type of token that was used to reward the deposit (see [asset](/admin/miscellaneous/asset))
    - **Contract**: The [contract](/admin/hierarchy/ERC721/contract) of the tokens that were used to reward the deposit.
- **Start date**: The date from which deposits will be displayed.
- **End date**: The date until which deposits will be displayed.

![](/img/admin/mechanics-complex/staking/report_filter.png)
