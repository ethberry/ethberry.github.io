---
sidebar_position: 5
---

# Contract Manager

This is a centralized way to keep track of all contracts deployed by the system.

It does several things which allows us to be certain user deployed proper contract with valid parameters:

1. validates new contract's parameters on server
2. signs a transaction which includes contract's bytecode and those parameters
3. passes this transaction to user for execution
4. listens to blockchain events
5. creates all necessary entities in database based on event data

