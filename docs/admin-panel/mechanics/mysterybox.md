---
sidebar_position: 3
---

# Mystery box

Mystery box, Loot box, Gacha box, Egg are the different names for the same mechanic - an item that contains a random
content. While template of the content is known, its rarity attribute is not. The user can gamble in two ways: open
the box and try get better outcome, or sell the box to get more money. One mystery box can contain multiple
items of different types

## Configuration

To start using mystery boxes you have to create template first, [see](/docs/admin-panel/hierarchy/ERC721/template/)

You also have to fund a contract with [LINK](/docs/integrations/chain-link/) token to use ChainLink's Random Oracle.

### Configuration options

- **title** - This is how template is displayed on site, especially on marketplace
- **description** - General description in markdown format.
- **item** - The template (or templates) to be hidden inside the box (see [asset](/docs/admin-panel/misc/asset/))
- **price** - The price on the marketplace (see [asset](/docs/admin-panel/misc/asset/))
- **status** - Defines whether item is sellable on marketplace (only available for existing items)
- **image** - Image to be shown on internal and external marketplaces
