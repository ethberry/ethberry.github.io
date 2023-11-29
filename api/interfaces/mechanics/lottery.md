---
hide_table_of_contents: true
sidebar_position: 6
---

# Lottery

```ts
export interface ILotteryRound extends IIdDateBase {
  numbers: Array<boolean>;
  tickets?: Array<IToken>;
  roundId: string;
  contractId: number;
  ticketContractId: number;
  priceId: number;
  price?: IAsset;
  maxTickets: number;
  startTimestamp: string;
  endTimestamp: string;
  contract?: IContract;
  ticketContract?: IContract;
  aggregation?: Array<ILotteryRoundAggregation>;
}

export interface ILotteryRoundAggregation extends IIdDateBase {
  roundId: number;
  round: ILotteryRound;
  match: number; // 1-6
  tickets: number;
  priceId: number;
  price?: IAsset;
}
```
