---
hide_table_of_contents: true
sidebar_position: 2
---

# Mystery

```ts
export enum MysteryBoxStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export interface IMysteryBox extends ISearchable {
  imageUrl: string;
  item?: IAsset;
  templateId: number;
  template?: ITemplate;
  tokens?: Array<IToken>;
  mysteryBoxStatus: MysteryBoxStatus;
}
```
