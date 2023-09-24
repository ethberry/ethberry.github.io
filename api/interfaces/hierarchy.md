---
sidebar_position: 2
---

# Hierarchy interfaces

These interfaces reflect hierarchy of entities related to core blockchain functionality

For more information [see table](http://localhost:3000/admin/hierarchy/) 

```ts
export enum ContractStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  NEW = "NEW",
}

export declare enum TokenType {
  NATIVE = "NATIVE",
  ERC20 = "ERC20",
  ERC721 = "ERC721",
  ERC998 = "ERC998",
  ERC1155 = "ERC1155"
}

export enum ModuleType {
  HIERARCHY = "HIERARCHY",
  MYSTERY = "MYSTERY",
  LOTTERY = "LOTTERY",
  RAFFLE = "RAFFLE",
  VESTING = "VESTING",
  STAKING = "STAKING",
  WAITLIST = "WAITLIST",
}

export enum ContractSecurity {
  "OWNABLE" = "OWNABLE",
  "ACCESS_CONTROL" = "ACCESS_CONTROL",
}

export interface IContract extends ISearchable {
  address: string;
  chainId: number;
  imageUrl: string;
  name: string;
  symbol: string;
  decimals: number;
  royalty: number;
  baseTokenURI: string;
  parameters: Record<string, string | number>;
  isPaused: boolean;
  contractStatus: ContractStatus;
  contractType: TokenType | null;
  contractFeatures: Array<ContractFeatures>;
  contractModule: ModuleType;
  contractSecurity: ContractSecurity;
  templates?: Array<ITemplate>;
  merchantId: number;
  merchant?: IMerchant;
}

export enum TemplateStatus {
  ACTIVE = "ACTIVE",
  HIDDEN = "HIDDEN",
  INACTIVE = "INACTIVE",
}

export interface ITemplate extends ISearchable {
  imageUrl: string;
  title: string;
  price?: IAsset;
  priceId: number;
  cap: string;
  amount: string;
  cid: string | null;
  templateStatus: TemplateStatus;
  contractId: number;
  contract?: IContract;
  tokens?: Array<IToken>;
}

export enum TokenStatus {
  MINTED = "MINTED",
  BURNED = "BURNED",
}

export interface IToken extends IIdDateBase {
  imageUrl: string | null;
  metadata: Record<string, string | number>;
  tokenId: string;
  royalty: number;
  cid: string | null;
  tokenStatus: TokenStatus;
  templateId: number;
  template?: ITemplate;
  balance?: Array<IBalance>;
}

export interface IBalance extends IIdDateBase {
  account: string;
  amount: string;
  tokenId: number;
  token?: IToken;
  targetId: number | null;
  target?: IToken;
}

```
