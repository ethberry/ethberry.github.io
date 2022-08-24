---
sidebar_position: 4
---

# Social

The framework allows connecting any social network like Google, Facebook, Twitter, and even GitHub as an authorization
provider. Each of them is good on its own, handling identity validation and password recovery flow outside the framework.

However, if you want more than one social provider you have to use
the [System provider](/api/authorization/system/) to unify them. It also makes sense to
use [Metamask provider](/api/authorization/metamask/) to attach the wallet to the account.
This is already at least 4-5 providers that all together could be replaced
with [Firebase provider](/api/authorization/firebase/) for simplicity.


