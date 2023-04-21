---
sidebar_position: 2
---

# Rules

Staking contract can have multiple staking rules.
Each rule is configured in Admin panel and later loaded to the Staking contract by executing transaction


### Configuration options

- **title** - This is how Staking rule appears on the site.
- **description** - General description, deposit terms or the story about unique weapon or mine/sawmill
- **status** 
    - **ACTIVE** - This status means that the staking rule is currently available for staking by users.
    - **INACTIVE** - This status means that the staking rule is not currently available for staking by users.
- **deposit token** - This refers to [assets](/admin/miscellaneous/asset) that users must deposit in order to participate in the staking rule.
- **reward token** -  This refers to [assets](/admin/miscellaneous/asset) that users will receive as a reward for participating in the staking rule.
- **duration** - Duration of the staking period, set in days
- **penalty** - Early termination fee, if any (default 0)
- **is recurrent** - A boolean flag indicating whether the staking rule allows for recurring rewards, meaning that if the user does not withdraw their deposit and continues staking, they will continue to receive rewards.

![](/img/complex-mechanics/staking/rules.png)