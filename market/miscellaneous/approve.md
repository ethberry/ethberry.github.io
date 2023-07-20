---
sidebar_position: 2
---

# Approve

**Approving tokens** such as [ERC20](/market/category/erc20/), [ERC721](/market/category/erc721/), [ERC1155](/market/category/erc1155/), [ERC998](/market/category/erc998/) and [MYSTERY-BOX](/admin/category/mystery/)  is a key step in using these tokens in decentralized finance. The approve function enables you to set the maximum amount of tokens that a specific smart contract can use.

**Without approval**, the Exchange, Staking Contracts wouldn't be able to transfer the tokens (ERC20, ERC721, ERC1155, ERC998) from one address to another, thus making the transaction impossible.

**With Approval**, transactions such as buying or selling on a Marketplace, staking tokens for rewards, and more can be smoothly completed. This crucial step ensures that trusted contracts can transfer and use tokens on behalf of the owner, making it a key aspect of decentralized finance.

### Requirements

**Approving** tokens requires the owner to call the approve function and specify **contract** address that will be able to transfer **[asset](/admin/miscellaneous/asset/)**. This authorization is necessary for the specified contract to transfer the tokens on the owner's behalf.

![](/img/market/miscellaneous/approve.jpg)


### Functionality of the Approve Process
It's important to note that the Approve function does not transfer ownership, but rather enables a trusted spender to transfer tokens on the owner's behalf. The Approve function is also reversible, as the token owner can change or revoke the approval at any time.
