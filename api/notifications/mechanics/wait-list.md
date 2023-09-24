---
sidebar_position: 4
---

# Wait list

```ts
export interface IWaitListRewardSetData {
  waitListList: IWaitListList;
  address: string;
  transactionHash: string;
}

export interface IWaitListRewardClaimedData {
  waitListItem: IWaitListItem;
  address: string;
  transactionHash: string;
}
```
