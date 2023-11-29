---
hide_table_of_contents: true
sidebar_position: 6
---

# Lottery

```ts
export interface ILotteryPurchaseData {
  items: Array<IAssetComponentHistory>;
  price: Array<IAssetComponentHistory>;
  index: string;
  address: string;
  transactionHash: string;
}

export interface ILotteryRoundStartData {
  round: ILotteryRound;
  address: string;
  transactionHash: string;
}

export interface ILotteryRoundEndData {
  round: ILotteryRound;
  address: string;
  transactionHash: string;
}

export interface ILotteryPrizeData {
  round: ILotteryRound;
  ticket: IToken;
  multiplier: string;
  address: string;
  transactionHash: string;
}

export interface ILotteryFinalizeData {
  round: ILotteryRound;
  prizeNumbers: Array<number>;
  address: string;
  transactionHash: string;
}
```
