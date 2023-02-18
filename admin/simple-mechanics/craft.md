---
sidebar_position: 5
---

# Craft

Craft is a mechanic used to produce new tokens by exchanging exiting tokens for new ones in proportions.

Here are some common scenarios for crafting:

1. Craft resources of the higher grade. User can craft ERC1155 token from several others ERC1155 tokens. 
   This way X iron ore can be refined to Y iron ingots.
2. Craft items from resources. User can craft ERC721 token from several others ERC1155 tokens. 
   This way X iron ingot becomes a sword
3. Crafting mechanic could be configured the other way around allowing user to dismantle items.
   This way a sword could become an Y iron ingots

## Configuration

To start crafting items you have to create these items first, [see](/docs/admin-panel/hierarchy/ERC1155/template/)

### Configuration options

- **item** - An [item](/docs/admin-panel/miscellaneous/asset/) to be crafted/dismantled
- **ingredients** - A list of tokens that are required to craft (or produced from) the [item](/docs/admin-panel/miscellaneous/asset/). 

NOTE: While you can add ETH and ERC20 as ingredients to the mix or use only them, this mechanic is not meant for direct purchase


