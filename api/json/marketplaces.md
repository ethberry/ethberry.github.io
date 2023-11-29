---
hide_table_of_contents: true
sidebar_position: 1
---

# Marketplaces

All non-fungible tokens created by framework could be traded on 3rd party marketplaces. To make this experience smooth
and pleasant we created JSON-microservice. Main goal of this service to display information about tokens in compliant
format.

[ERC721](https://eips.ethereum.org/EIPS/eip-721) doesn't describe data structure at all
while [ERC1155](https://eips.ethereum.org/EIPS/eip-1155) defines it in general. The actual implementation with
examples is available at [OpenSea's](https://docs.opensea.io/docs/category/metadata-standards) documentation. This
implementation is also compatible
with [Metamask](https://metamask.zendesk.com/hc/en-us/articles/360058238591-NFT-tokens-in-your-MetaMask-wallet) wallet

## Example

Here is an example of metadata for [RANDOM](/admin/integrations/chain-link/), [UPGRADABLE](/admin/mechanics-simple/grade/) [ERC998](/admin/category/erc998/) token

```json
{
  "description": "Lorem ipsum dolor sit amet...",
  "external_url": "https://example.com/metadata/0x96c1f5d31c4c627d6e84a046d4790cac4f17d3ed/1",
  "image": "https://cdn.example.com/images/warrior.png",
  "name": "Warrior",
  "attributes": [
    {
      "trait_type": "LEVEL",
      "value": "1"
    },
    {
      "trait_type": "RARITY",
      "value": "RARE"
    }
  ]
}
```
