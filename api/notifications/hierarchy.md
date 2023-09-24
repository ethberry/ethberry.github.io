---
sidebar_position: 1
---

# Hierarchy

Various token transfers

```ts
export interface ITokenTransferData {
  token: IToken;
  from: string;
  to: string;
  amount: string;
}

export interface IBatchTransferData {
  tokens: Array<IToken>;
  from: string;
  to: string;
  amounts: Array<string>;
}

export interface IConsecutiveTransferData {
  tokens: Array<IToken>;
  from: string;
  to: string;
}
```
