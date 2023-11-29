---
hide_table_of_contents: true
sidebar_position: 9
---

# Staking

```ts
export interface IStakingDepositStartData {
  stakingDeposit: IStakingDeposit;
  address: string;
  transactionHash: string;
}

export interface IStakingDepositFinishData {
  stakingDeposit: IStakingDeposit;
  address: string;
  transactionHash: string;
}

export interface IStakingRuleCreatedData {
  stakingRule: IStakingRule;
  address: string;
  transactionHash: string;
}

export interface IStakingRuleUpdatedData {
  stakingRule: IStakingRule;
  address: string;
  transactionHash: string;
}

```
