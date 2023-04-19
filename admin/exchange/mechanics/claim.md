---
sidebar_position: 2
---

# Claim

Claim is an exchange mechanism that enables users to receives [assets](/admin/miscellaneous/asset) from the server. The user can receive at least one asset per transaction, and no need to transfer any assets for payment. While it's possible to use multiple assets for receiving, but it's important to be cautious since using too many assets can significantly increase the gas cost of the transaction.

You can find more details how to configure Claim mechanic [here](/admin/simple-mechanics/claim).

Whenever a user claim NFT token (ERC721, ERC998, ERC1155), a **new** NFT is minted and sent to their address. However, if the token is Native or ERC20, it is **deducted** from the contract address.