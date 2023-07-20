---
sidebar_position: 1
---

# Creation

By default, all contract with **Upgradeable** feature created without any attributes, merchant has to manually create
attributes after deployment. There are three grade strategies available: **FLAT**, **LINEAR**, and **EXPONENTIAL**.
The cost of upgrading to the next level is calculated using a formula specific to each strategy.

## Creation options

- **contract** - the contract to update (readonly)
- **attribute** - attribute name, 32 chars, uppercase
- **grade strategy** - how the price for the next level is calculated
  - **FLAT** - the cost remains the same each time. The cost formula for this strategy is
  > **cost = amount**
  - **LINEAR** - the cost gradually rises with each level. The cost formula for this strategy is
  > **cost = amount * level**
  - **EXPONENTIAL** - the cost rises exponentially using a growth rate. The cost formula for this strategy is
  > **cost = amount * (1 + rate / 100) ^ level**
- **price** - the price for the upgrade from level 0 to 1 (see [asset](/admin/miscellaneous/asset/))

![Grade create dialog](/img/admin/mechanics-simple/grade/grade_create.png)



