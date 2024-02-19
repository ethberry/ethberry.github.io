---
hide_table_of_contents: true
sidebar_position: 2
---

# Chart

The chart represents the **number** and **amount** of deposits for each date. It can show **all active deposits** or **recent deposits** based on the `recent deposits` / `all deposits` filter. 

**The chart includes:** 
- **Columns**: for the number of deposits 
- **Lines**: for the total amount of deposits 

**Depth chart:**
- **All deposits**: by the number of all active deposits and their total amount for all deposits
- **Recent deposits**: the number of recent deposits made per day and their total amount.

**`All deposits`**
![](/img/admin/mechanics-gambling/ponzi/chart.png)

## Filter

#### You can filter chart by several properties:

- **Recent deposits / All deposits**: 
    - **Checked** - Show recent deposits made per date:
    - **Unchecked** - Show the total deposits that were active per date:
- **Empty reward**: If `checked`, It means that the deposit does not have an **on-chain** reward, and any rewards for the depositor is **off-chain**.
- **Deposit**:
    - **TokenType**: The type of token that was deposited (see [asset](/admin/miscellaneous/asset))
    - **Contract**: The [contract](/admin/hierarchy/ERC721/contract) of the tokens that were used in deposit.
- **Reward**: 
    - **TokenType**: The type of token that was used to reward the deposit (see [asset](/admin/miscellaneous/asset))
    - **Contract**: The [contract](/admin/hierarchy/ERC721/contract) of the tokens that were used to reward the deposit.
- **Start date**: The date from which deposits will be displayed.
- **End date**: The date until which deposits will be displayed.

**`Recent deposits`**
![](/img/admin/mechanics-gambling/ponzi/chart_filter.png)
