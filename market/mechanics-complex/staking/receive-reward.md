---
sidebar_position: 2
---

# Receive Staking Reward

Staking can be classified into two types: **recurrent** and **non-recurrent**.
- **Recurrent** staking, allows the user to receive the rewards after each full period has been completed. For example, if a user deposited 100 tokens and completed a full staking period of 30 days, they would receive a reward, let's say 10 tokens, at the end of the period. If they continue to hold their deposit for another full staking period of 30 days, they will receive another reward - 10 more  tokens and so on, indefinitely.
- **Non-recurrent** staking, on the other hand, means that the user can receive only one reward after a full period has passed. For example, if a user deposited 100 tokens and completed a full staking period of 30 days, they would receive a reward, same 10 tokens, at the end of the period. But if they continue to hold their deposit beyond the first full period, they will not be able to receive any further rewards.

Users can withdraw their deposited tokens and receive rewards in one transaction. However, there are a few things to keep in mind:

### Withdraw Deposit:
1. For both **recurrent** and **non-recurrent** staking, If the user **has not held** their deposit for at least one full staking period since the time they made the deposit, and wishes to withdraw, a penalty will be deducted from the total deposit amount.
2For **reccurent** staking, If the user **has held** their deposit for at least one full staking period since the time they made the deposit and wishes to withdraw, they will receive the full amount of their deposited tokens.
3For **non-reccurent** staking, If the staking deposit **has been held** for full period (meaning the user has completed their staking period and will not continue to receive rewards), the contract will automatically withdraw the full deposit amount to the user's account without requiring any further action from the user.

### Receive Reward:
When a user receives a reward, the following steps are taken:
1. The contract checks whether the user has held their deposit for at least one full staking period since their last received reward. If the user has not yet received any reward, the contract will check the full staking period from the time the user made the deposit.
2. The reward amount, multiplied by the total number of full staking periods (for non-recurrent staking, this can only be 1), will be transferred to the user's account.
3. If the staking rule is recurrent, the contract will update the time of the user's last received reward to the current timestamp. If the user does not withdraw their deposited tokens, they will be able to continue receiving rewards, and they will be able to withdraw the full amount of their deposited tokens at any time.

> **NOTE!** <br/>
> If a transaction does not involve either receiving of reward or withdrawing deposited tokens, the transaction will be reverted.
