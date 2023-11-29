---
hide_table_of_contents: true
sidebar_position: 9
---

# Staking

```ts
export enum DurationUnit {
  YEAR = "YEAR",
  MONTH = "MONTH",
  WEEK = "WEEK",
  DAY = "DAY",
  HOUR = "HOUR",
  MINUTE = "MINUTE",
}

export enum StakingRuleStatus {
  NEW = "NEW",
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export interface IStakingRule extends ISearchable {
  depositId: number;
  deposit?: IAsset;
  rewardId: number;
  reward?: IAsset;
  durationAmount: number;
  durationUnit: DurationUnit;
  penalty: number;
  maxStake: number;
  recurrent: boolean;
  stakingRuleStatus: StakingRuleStatus;
  externalId: string;
  contractId: number;
  contract?: IContract;
}


export enum StakingDepositStatus {
  ACTIVE = "ACTIVE",
  CANCELED = "CANCELED",
  COMPLETE = "COMPLETE",
}

export interface IStakingDeposit extends IIdDateBase {
  account: string;
  externalId: string;
  stakingDepositStatus: StakingDepositStatus;
  startTimestamp: string;
  withdrawTimestamp: string;
  multiplier: number;
  stakingRuleId: number;
  stakingRule?: IStakingRule;
}

```
