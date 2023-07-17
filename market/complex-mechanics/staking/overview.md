---
sidebar_position: 1
---

# Overview

This page describes the staking feature on the platform and provides an overview of how it works. It allows users to make deposits using different deposit rules, view the details of each deposit rule, and manage their deposits. 

## Deposits

To make a deposit, the user needs to choose a **deposit rule** they want to use. The user can find all available deposit rules on the 'Deposit rules' page. Each rule has several actions: **allowance**, **deposit**, and **view**.

- **allowance**: This action opens a form where users can **approve** a token for the Staking Contract address.
- **deposit**: This action prepares and sends a transaction to deposit tokens according to the chosen staking rule. Users should ensure that they have already set an allowance for the contract. For NATIVE deposit tokens, an allowance is not required.
- **view**: This action provides all the details about the deposit rule:
    - **Title**: The title of the deposit rule.
    - **Description**: A general description, deposit terms, or a story about a unique weapon or a mine/sawmill.
    - **Deposit**: The amount of the tokens that the user needs to deposit in order to participate in the staking rule.
    - **Reward**: The amount of the tokens that the user receives as a reward for participating in the staking rule.
    - **Duration**: The duration of the staking period in days. After this period, the reward will be available for withdrawal.
    - **Penalty**: The penalty amount that is deducted from the deposit if the user withdraws before the end of the staking period.
    - **Is recurent?**: A `yes` or `no` indicating whether the staking rule allows for recurring rewards. If the user does not withdraw their deposit and continues staking, they will continue to receive rewards.
    - **Contract**: The **address** of the staking contract.

![](/img/market/complex-mechanics/staking/deposit_rules_view.png)
![](/img/market/complex-mechanics/staking/deposit_rules_allowance.png)


## My Deposits

On the 'My Deposits' page, users can find a list of all the deposits they have made. By clicking the **view** action corresponding to each deposit, they can access all the deposit rule's details. The list of deposits can have three status types: **Active**, **Cancelled**, and **Completed**.
- **Active**: means tokens are still in the contract, 
- **Cancelled**: means the user withdrew tokens before the duration was over
- **Completed**: means the user received the reward and withdrew the deposited tokens from the contract.


### Withdraw reward and staked tokens

To receive rewards and/or withdraw tokens from the staking contract, users click the **Reward** action (available only if the status of the deposit is ACTIVE). It displays a description of what they receive, as well as the penalty amount if they withdraw tokens before the **Duration** period passes.

If the 'Withdraw deposit' switch is turned on, it withdraws the deposit. However, if the **Duration** period has not passed, a penalty is deducted. Clicking OK proceeds with the transaction on the blockchain. If users have available rewards, they withdraw them to their account.

![](/img/market/complex-mechanics/staking/myDeposits_reward.png)

<!-- ## Leader board -->
