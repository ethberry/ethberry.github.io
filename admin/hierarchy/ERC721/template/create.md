---
sidebar_position: 2
---

# Configuration

To start selling tokens you have to configure them first

## Configuration options

- **title** - This is how template is displayed on site, especially on marketplace
- **description** - General description in markdown format.
- **attributes** - attributes from the game such as durability, hit points, physical/magical attack/defence
- **price** - The price of the NFT on the marketplace, represented as an array of [assets](/admin/miscellaneous/asset). 
- **amount** - amount of similar token to be sold on marketplace
- **status** - 
  - **ACTIVE** - Active templates are available for purchase on marketplace
  - **INACTIVE** - Deleted templates exists for reference and history purposes
  - **HIDDEN** - Hidden templates are removed from marketplace, but available for other mechanics such as [Drop](/admindialog.pngdrop/)
- **contract** - collection which this item belongs to
- **image** - image to be shown on internal and external marketplaces

![ERC721 template edit dialog](/img/admin/hierarchy/erc721/template_edit_dialog.png)
