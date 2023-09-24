---
sidebar_position: 2
---

# Exchange interfaces

These interfaces helps to tie tokens to mechanics

```ts
export interface IAsset extends IIdBase {
  components: Array<IAssetComponent>;
}

export interface IAssetComponent extends IIdBase {
  tokenType: TokenType;
  contractId: number;
  contract?: IContract;
  templateId: number | null;
  template?: ITemplate;
  amount: string;
  asset?: IAsset;
  assetId: number;
}

export enum ExchangeType {
  ITEM = "ITEM",
  PRICE = "PRICE",
}

export interface IAssetComponentHistory extends IIdBase {
  exchangeType: ExchangeType;
  historyId: number;
  history?: IEventHistory;
  contractId: number;
  contract?: IContract;
  tokenId: number | null;
  token?: IToken;
  amount: string;
}
```
