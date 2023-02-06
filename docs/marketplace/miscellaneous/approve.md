---
sidebar_position: 2
---

# Approve

**Approving tokens** such as [ERC20](/docs/category/erc20-1/), [ERC721](/docs/category/erc721-1/), [ERC1155](/docs/category/erc1155-1/), [ERC998](/docs/category/erc998-1/) and [MYSTERY-BOX](/docs/category/mystery/)  is a key step in using these tokens in decentralized finance. The approve function enables you to set the maximum amount of tokens that a specific smart contract can use.

**Without approval**, the Exchange, Staking and Pyramid Contracts wouldn't be able to transfer the tokens (ERC20, ERC721, ERC1155, ERC998) from one address to another, thus making the transaction impossible.

**With Approval**, transactions such as buying or selling on a Marketplace, staking tokens for rewards, and more can be smoothly completed. This crucial step ensures that trusted contracts can transfer and use tokens on behalf of the owner, making it a key aspect of decentralized finance.

### Requirements

**Approving** tokens requires the owner to call the approve function and specify **contract** address that will be able to transfer **[asset](/docs/admin-panel/miscellaneous/asset/)**. This authorization is necessary for the specified contract to transfer the tokens on the owner's behalf.

![](/img/approve.jpg)


### Functionality of the Approve Process
It's important to note that the Approve function does not transfer ownership, but rather enables a trusted spender to transfer tokens on the owner's behalf. The Approve function is also reversible, as the token owner can change or revoke the approval at any time.
