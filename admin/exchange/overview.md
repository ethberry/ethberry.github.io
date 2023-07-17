---
sidebar_position: 1
---

# Overview

Exchange contract allows users to exchange their [assets](/admin/miscellaneous/asset), or
upgrade [metadata](/admin/miscellaneous/metadata/), depending on the specific mechanics used in the contract. 
The table below provides an overview of several common mechanics that use exchange functionality:


| Mechanics  | Gives asset | Takes asset | Change metadata | Time delay | Random |
|------------|-------------|-------------|-----------------|------------|--------|
| BREED      | ✔️          | ✔️          | ✖️              | ✖️         | ✔️     |
| CLAIM      | ✖️          | ✔️          | ✖️              | ✖️         | ✖️     |
| CRAFT      | ✔️          | ✔️          | ✖️              | ✖️         | ✖️     |
| GRADE      | ✔️          | ✖️          | ✔️              | ✖️         | ✖️     |
| MYSTERYBOX | ✖️          | ✔️          | ✖️              | ✖️         | ✔️     |
| PURCHASE   | ✔️          | ✔️          | ✖️              | ✖️         | ✖️     |
| RENT       | ✖️          | ✖️          | ✔️              | ✖️         | ✖️     |

This list is not exhaustive, but it provides an idea of how exchange functionality is used in different mechanics.
Here are some examples:

- **BREED** - mechanics involve the reproduction of NFT tokens by mixing the character's traits. This process is akin
  to genetic breeding, where the metadata of tokens is encrypted into genes from a mother and father. By mixing the
  traits of two existing tokens, a new token with mixed traits is created. The breeding mechanic adds an element of
  creativity and diversity to the token ecosystem, allowing for the generation of new and distinct tokens through the
  blending of existing ones.
- **CLAIM** - mechanics allow users to receive items from the system for free. One common use case of claim mechanics is
  the transfer of balances from an off-chain environment to an on-chain environment. This way user can redeem his
  in-game balance to his on-chain wallet. This mechanic is also used for distributing gifts and rewards from other
  mechanics such as Achievements.
- **CRAFT** - mechanic is similar to Purchase but could be used to spend all kind of tokens, not only currency. It is
  typically used to craft NFT items from semi-NFT resources
- **GRADE** - instantly changes token's metadata in exchange for currency tokens. Could be used for increase character's
  skills and item's level
- **MYSTERYBOX** - Mystery box adding an element of anticipation and surprise to the game. The item received from the
  box is predetermined but has random rarity.
- **PURCHASE** - mechanics is used for minting new NFT tokens in exchange for currency tokens

> **NOTE!** When the user receives a **ERC721**, **ERC998**, or **ERC1155** token, it will be
> **minted**, while **NATIVE** or **ERC20** tokens will be **spent** from the merchants balance.

### Security

All transactions must be signed off by the server before being executed on the blockchain. The server creates a
signature containing the specific exchange details, including what the user should spend and what they should receive.
The Exchange contract then verifies the signature and ensures that the signer has the necessary permissions and that the
input arguments match the signature. If any of these checks fail, the transaction will be reverted. 
