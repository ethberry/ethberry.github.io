---
hide_table_of_contents: true
sidebar_position: 2
---

# Recipes interfaces

These interfaces related to claim mechanic

```ts
export enum CraftStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export interface ICraft extends IIdDateBase {
  item?: IAsset;
  price?: IAsset;
  merchantId: number;
  merchant?: IMerchant;
  craftStatus: CraftStatus;
}

export enum DismantleStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export enum DismantleStrategy {
  FLAT = "FLAT",
  LINEAR = "LINEAR",
  EXPONENTIAL = "EXPONENTIAL",
}

export interface IDismantle extends IIdDateBase {
  item?: IAsset;
  price?: IAsset;
  merchantId: number;
  merchant?: IMerchant;
  dismantleStatus: DismantleStatus;
  rarityMultiplier: number;
  dismantleStrategy: DismantleStrategy;
  history?: Array<IEventHistory>;
}
```
