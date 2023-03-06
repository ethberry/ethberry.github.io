---
sidebar_position: 1
---

# Overview

Exchange contract allows users to exchange their [assets](/admin/miscellaneous/asset) for other [assets](/admin/miscellaneous/asset), depending on the specific mechanics used in the contract. The table below provides an overview of several common mechanics that use exchange functionality:

| Mechanics       | CLAIM | GRADE | CRAFT | PURCHASE | Staking |
|-----------------|-------|-------|-------|----------|---------|
| Give items      |   ✖️   |   ✔️   |   ✔️   |     ✔️    |    ✔️    |
| Receive items   |   ✔️   |   ✖️   |   ✔️   |     ✔️    |    ✔️    |
| Change metadata |   ✖️   |   ✔️   |   ✖️   |     ✖️    |    ✖️    |
| Time delay      |   ✖️   |   ✖️   |   ✖️   |     ✖️    |    ✔️    |

This list is not exhaustive, but it provides an idea of how exchange functionality is used in different mechanics. Here are some examples:

- **CLAIM** - mechanics allow users to claim an item without giving anything to the system, and there is no time delay.
- **GRADE** - mechanics upgrade the metadata in an NFT, and require users to give an item. The upgrade is instant.
- **PURCHASE** - mechanics take something from the user (usually it's a Native or ERC20 tokens) and give them something else in return.
- **CRAFT** - mechanics are similar to Purchase but usually is used to take from User all kind of tokens (Native, ERC20, ERC721, etc.)
- **STAKING** - mechanics are similar to craft and exchange mechanics, but users receive something after a certain period of time.

> **It's important to note** that if the user receives an **ERC721**, **ERC1155**, or **ERC998** token, it will be **minted**, while if they receive **Native** or **ERC20** tokens, it will be **deducted** from the mechanic contract's balance.

### Security

All transactions must be signed by the server and validated before being executed on the blockchain. The server creates a signature containing the specific exchange details, including what the user should receive and what they should pay. The Exchange contract then verifies the signature and ensures that the signer has the necessary permissions and that the input arguments match the signature. If any of these checks fail, the transaction will be reverted. 