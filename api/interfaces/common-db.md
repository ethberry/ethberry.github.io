---
sidebar_position: 1
---

# Common DB interfaces

These interfaces are being extended by all db entities

```ts
export interface IDateBase {
  createdAt: string;
  updatedAt: string;
}

export interface IIdBase {
  id: number;
}

export interface IIdDateBase extends IIdBase, IDateBase {
}

export interface IUuidBase {
  uuid: string;
}

export interface IUuidDateBase extends IUuidBase, IDateBase {
}

export interface ISearchable extends IIdDateBase {
  title: string;
  description: string;
}
```
