---
sidebar_position: 5
---

# Contract Manager

This is a centralized way to keep track of all contracts deployed by the system.

It does several things which allow us to be certain that user deployed proper contract with valid parameters:

1. Validates new contract's parameters on server
2. Signs a transaction which includes contract's bytecode and those parameters
3. Passes this transaction to user for execution
4. Listens to blockchain events
5. Creates all necessary entities in database based on event data

