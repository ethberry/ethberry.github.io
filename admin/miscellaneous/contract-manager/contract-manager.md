---
hide_table_of_contents: true
sidebar_position: 1
---

# Overview

The Contract Manager is a smart contract that provides a centralized way to keep track of all contracts deployed by the system. This allows for easier management and monitoring of the system's contracts.

#### ContractManager have several purposes:
1. **Validating new contract deployemnts:**
    - Transactions for deploying contracts via the ContractManager **must be signed** by the server to ensure that only the intended contract can be deployed, preventing unexpected issues.
    - The server will try to find the contract's bytecode using the **contractTemplate** parameter, which specifies the features of the contract.
    - Once the contract is validated, the server returns a signature containing the bytecode that can be used to deploy the contract on the blockchain.
2. **Connecting deployed contracts to our system:**
    - Whenever a contract is deployed via the Contract Manager, it emits an event that our Server listens to. This allows the Server to connect the deployed contract to the system and track its status in our database.

![](/img/admin/miscellaneous/contract-manager/contract_manager_diagram.jpeg)
