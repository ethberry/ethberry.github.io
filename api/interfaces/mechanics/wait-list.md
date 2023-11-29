---
hide_table_of_contents: true
sidebar_position: 4
---

# Wait list

```ts
export interface IWaitListList extends ISearchable {
  items?: Array<IWaitListItem>;
  root: string;
  item?: IAsset;
  itemId: number;
  contractId: number;
  contract: IContract;
  isPrivate: boolean;
}

export enum WaitListItemStatus {
  NEW = "NEW",
  REDEEMED = "REDEEMED",
}

export interface IWaitListItem extends IIdDateBase {
  account: string;
  waitListItemStatus: WaitListItemStatus;
  listId: number;
  list?: IWaitListList;
}

```
