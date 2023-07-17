---
sidebar_position: 3
---

# System

System or in-house login provider stores all user data in the local database. It uses email/password pair to identify the
user and email service for confirmation of identity.

While this is a solid way to handle users it has a lot of pitfalls

- data stored in the local database could leak
- it requires 3rd party email service
- it requires 3rd party 2FA provider
- it requires additional work to implement password recovery flow
- users do not want to share their email just to check out a new game, because of potential spam

While most of these things are covered by our framework we recommend using [Firebase provider](/api/miscellaneous/authorization/firebase/) as
authorization provider


