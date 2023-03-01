---
sidebar_position: 1
---

# Overview

<!-- This is a centralized way to keep track of all contracts deployed by the system.

It does several things which allow us to be certain that user deployed proper contract with valid parameters:

1. Validates new contract's parameters on server
2. Signs a transaction which includes contract's bytecode and those parameters
3. Passes this transaction to user for execution
4. Listens to blockchain events
5. Creates all necessary entities in database based on event data -->

The Contract Manager is a smart contract that provides a centralized way to keep track of all contracts deployed by the system. This allows for easier management and monitoring of the system's contracts.

#### ContractManager have several purposes:
1. **Validating new contract deployemnts:**
    - Transactions for deploying contracts via the ContractManager **must be signed** by the server to ensure that only the intended contract can be deployed, preventing unexpected issues.
    - The server will try to find the contract's bytecode using the **contractTemplate** parameter, which specifies the features of the contract.
    - Once the contract is validated, the server returns a signature containing the bytecode that can be used to deploy the contract on the blockchain.
2. **Connecting deployed contracts to our system:**
    - Whenever a contract is deployed via the Contract Manager, it emits an event that our Server listens to. This allows the Server to connect the deployed contract to the system and track its status in our database.

The Contract Manager plays a vital role in ensuring the integrity and security of the system's contracts. Its centralized approach to contract management allows for easier monitoring and management of the system's contracts, which can help to prevent errors and security breaches.
<!-- - In order to execute transaction for deploying contract via Contract Manager, transaction have to be sign through server. in order to ensure that only the intended contract can be deployed, preventing unexpected issues.
- The server will try to find the bytecode of the contract that needs to be deployed using the **contractTemplate** parameter (which is passed with other argument for deploing), which specifies the **features** of the contract.
-  Once the Server validates the **contractTemplate** feature (to be compatible to each other), it returns a signature that includes the bytecode of the contract that can be deployed. This signature is then used to execute the deployment on the blockchain. This approach helps to ensure that only valid contracts are deployed to the system. -->
<!-- 1. **Validating new contract parameters**: The **Server** validates the parameters of new contracts to ensure that they are valid and meet the system's requirements.
- First Server make validation for the contract that has to be deployed. It prevent deploing contracts that may can't interrect with our ecosystem.
    - Server validating that we are deploing the code in what we are sure. This is the reason server is signing transaction with bytecode of the contract, just to make sure that any other contract can't be deployed. Otherwise it can make unexpected issues, this contract way have some issues that will accure unpossible communication with our system.
- Second, it connect all deployed contracts to our system. (Whenever contract deployed via ContractManager it will emit an Event. Our Server is listening this events to connetc this contract to the whole system (to our DB))
2. **Signing transactions**: Once the **Server** has validated the new contract's parameters, it signs a transaction that includes the contract's bytecode and parameters. This ensures that the new contract is authentic and has not been tampered with.
3. **Executing transactions**: The **Server** then passes the signed transaction to the user for execution on the blockchain.
4. **Listening to events**: The **Server** listens to **ContractManager** events to monitor the state of the system's contracts. This allows for quick detection of any issues or errors.
5. **Creating entities**: Based on the event data, the **Server** creates all necessary entities in the system's database. This ensures that the system has an accurate and up-to-date record of all contracts and their associated data. -->


