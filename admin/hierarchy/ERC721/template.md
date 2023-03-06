---
sidebar_position: 2
---

# Template

Template is an abstraction level to create a blueprint of the item. 

## Configuration

To start selling tokens you have to configure them first

### Configuration options

- **title** - This is how template is displayed on site, especially on marketplace
- **description** - General description in markdown format.
- **attributes** - attributes from the game such as durability, hit points, physical/magical attack/defence
- **price** - The price of the NFT on the marketplace, represented as an array of [assets](/admin/miscellaneous/asset). 
- **amount** - amount of similar token to be sold on marketplace
- **status** - 
  - **ACTIVE** - Active templates are available for purchase on marketplace
  - **HIDDEN** - Hidden templates are removed from marketplace, but available for some other mechanics such as [Drop](/admin/simple-mechanics/drop/)
  - **INACTIVE** - Deleted templates exists for reference and history purposes
- **contract** - collection which this item belongs to
- **image** - image to be shown on internal and external marketplaces

![](/img/hierarchy/erc721/erc721_template_edit_modal.png)