---
sidebar_position: 1
---

# Overview

Exchange contract allows users to exchange their [assets](/admin/miscellaneous/asset) for other [assets](/admin/miscellaneous/asset), depending on the specific mechanics used in the contract. The table below provides an overview of several common mechanics that use exchange functionality:

| Mechanics     | Give items | Receive items | Change metadata | Time delay | Random |
|---------------|------------|---------------|-----------------|------------|--------|
| BREED         |      –     |       –       |        –        |      –     |    ✔️   |
| CLAIM         |      ✖️     |       ✔️       |        ✖️        |      ✖️     |    ✖️   |
| COLLECTION    |      –     |       –       |        –        |      –     |    ✖️   |
| CRAFT         |      ✔️     |       ✔️       |        ✖️        |      ✖️     |    ✖️   |
| GRADE         |      ✔️     |       ✖️       |        ✔️        |      ✖️     |    ✖️   |
| LOTTERY       |      –     |     **–**     |        –        |      –     |    ✔️   |
| MYSTERYBOX    |      ✖️     |       ✔️       |        ✖️        |      ✖️     |    ✔️   |
| PURCHASE      |      ✔️     |       ✔️       |        ✖️        |      ✖️     |    ✖️   |
| PYRAMID       |      ✔️     |       ✔️       |        ✖️        |      ✔️     |    ✖️   |
| STAKING       |      ✔️     |       ✔️       |        ✖️        |      ✔️     |    ✖️   |
| VESTING       |      ✖️     |       ✔️       |        ✖️        |      ✔️     |    ✖️   |
| WAITLIST      |      ✖️     |       ✔️       |        ✖️        |      ✔️     |    ✖️   |
| WRAPPER       |      ✔️     |       ✔️       |        ✖️        |      ✖️     |    ✖️   |

This list is not exhaustive, but it provides an idea of how exchange functionality is used in different mechanics. Here are some examples:

<!-- 
    BREED - Add description.
    CLAIM - More about items on off-chain.
 -->
- **BREED** - mechanics involve the reproduction of tokens by combining existing items or characters. This process is akin to genetic breeding, where the metadata of items is encrypted into genes from a mother and father. By combining the genes of two existing tokens, a new token with unique attributes and characteristics is created. The breed mechanic adds an element of creativity and diversity to the token ecosystem, allowing for the generation of new and distinct tokens through the blending of existing ones.
- **CLAIM** - mechanics allow users to receive items without giving anything to the system. One common use case of claim mechanics is the transfer of balances from an off-chain environment to an on-chain environment. Users who have stored their balances off-chain can claim their respective balances on-chain, enabling seamless integration and synchronization of balances across different platforms. This mechanic is also used for distributing presents or rewards to specific users, granting them access to certain items or benefits without requiring any exchange of items or tokens.
- **COLLECTION** - mechanics allow for the creation of a batch amount of NFTs during the creation of a contract. It enables the mass generation of NFTs with predefined attributes, characteristics, or metadata. This mechanic is often used to establish a set or series of NFTs with a common theme or design. It provides an efficient way to mint a large number of NFTs with consistent properties and can be customized according to specific requirements.
- **CRAFT** - mechanics are similar to Purchase but usually is used to take from User all kind of tokens (Native, ERC20, ERC721, etc.)
- **GRADE** - mechanics upgrade the metadata of an NFT and require users to give an item. The upgrade is instantaneous, enhancing the attributes or characteristics of the NFT.
- **LOTTERY** - mechanics involve users having a random chance to receive items. The items received are typically random and predetermined.
- **MYSTERYBOX** - Mystery box mechanics involve users receiving items from a mystery box. The items received are typically random and predetermined, adding an element of anticipation and surprise.
- **PURCHASE** - mechanics involve taking something from the user, typically native or ERC20 tokens, and giving them something else in return.
- **PYRAMID** - mechanics are similar to staking mechanics but involve a pyramid-like reward structure. Rewards are generated from new participants' contributions, and existing participants receive a portion of those contributions, while staking mechanics involve users locking their tokens for a specific period of time to receive rewards based on their contribution. Participants higher up in the pyramid structure receive higher rewards.
- **STAKING** - mechanics are similar to pyramid, craft and exchange mechanics, but users receive something after a certain period of time in addition to their contributions.
- **VESTING** - mechanics involve a time-based release of tokens or items to users. Users typically give their tokens or items to the system, and the system releases them gradually over a specific vesting period. This mechanic ensures that users cannot access the full amount immediately.
- **WAITLIST** - mechanics are similar to claim mechanics, where users receive items without giving any items in return. However, waitlist mechanics are useful for handling a large number of receivers. By storing the receiver data on-chain, a waitlist can efficiently handle a significant number of users, reducing gas costs by utilizing encrypted Merkle trees.
- **WRAPPER** - mechanics allow users to convert their tokens or items into a different form or representation. Users give their original tokens or items to the system and receive wrapped tokens or items in return, which can have different functionalities or purposes.

> **It's important to note** that if the user receives an **ERC721**, **ERC1155**, or **ERC998** token, it will be **minted**, while if they receive **Native** or **ERC20** tokens, it will be **deducted** from the mechanic contract's balance.

### Security

All transactions must be signed by the server and validated before being executed on the blockchain. The server creates a signature containing the specific exchange details, including what the user should receive and what they should pay. The Exchange contract then verifies the signature and ensures that the signer has the necessary permissions and that the input arguments match the signature. If any of these checks fail, the transaction will be reverted. 