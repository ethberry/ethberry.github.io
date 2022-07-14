---
sidebar_position: 1
---

# Marketplaces

All non-fungible tokens created by framework could be traded on 3rd party marketplaces. To make this experience pleasant
we created JSON-microservice. Main goal af this service to display information about tokens in compliant format.

[ERC721](https://eips.ethereum.org/EIPS/eip-721) doesn't describe data structure at all
while [ERC1155](https://eips.ethereum.org/EIPS/eip-1155) defines it in general. The actual implementation with
examples is available at [OpenSea's](https://docs.opensea.io/docs/category/metadata-standards) documentation. This implementation
is also compatible
with [Metamask](https://metamask.zendesk.com/hc/en-us/articles/360058238591-NFT-tokens-in-your-MetaMask-wallet) wallet
