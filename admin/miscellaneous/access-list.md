---
sidebar_position: 7
---

# Access List

This is implementation of permission system base on lists

There are two types of lists **Blacklist** and **Whitelist**.

## Blacklist

Disallows certain account to execute transactions with tokens. Owned token would be just blocked on account until account is removed from list.

`Add to blacklist` and `Remove from blacklist` buttons are available from contract action menu for contracts with template [BLACKLIST](/admin/hierarchy/ERC20/contract/)

Currently, Blacklist is implemented only for [ERC20](/admin/category/erc20/) and could be implemented for any type of token on request

## Whitelist

In contrast to Blacklist, Whitelist allows operation with tokens only to accounts in the list

Whitelist could be implemented for any type of token on request.
