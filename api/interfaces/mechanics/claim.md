---
hide_table_of_contents: true
sidebar_position: 1
---

# Claim interfaces

These interfaces related to claim mechanic

```ts
export enum ClaimStatus {
  NEW = "NEW",
  REDEEMED = "REDEEMED",
  EXPIRED = "EXPIRED",
}

export enum ClaimType {
  TOKEN = "TOKEN",
  VESTING = "VESTING",
}

export interface IClaim extends IIdDateBase {
  account: string;
  item: IAsset;
  claimStatus: ClaimStatus;
  claimType: ClaimType;
  parameters: any;
  nonce: string;
  signature: string;
  endTimestamp: string;
  merchantId: number;
  merchant?: IMerchant;
}
```
