---
sidebar_position: 7
---

# Raffle

```ts
export interface IRaffleRound extends IIdDateBase {
  number: string | null;
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
}
```
