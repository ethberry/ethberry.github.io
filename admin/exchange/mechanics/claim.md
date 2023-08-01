---
sidebar_position: 2
---

# Claim

Claim is an exchange mechanism that allows server to send an [assets](/admin/miscellaneous/asset) to user. The user can
receive at least one asset per transaction, and no need to transfer any assets for payment. While it is possible to send
multiple assets the gas cost of the transaction will rise with each additional asset and may even reach the network limit.

You can find more details how to configure Claim mechanic [here](/admin/mechanics-simple/claim).

Whenever a user claim NFT token (ERC721, ERC998, ERC1155), a **new** NFT is minted and sent to their address. However,
if the token is Native or ERC20, it is **deducted** from the contract address.

