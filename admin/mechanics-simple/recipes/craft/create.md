---
sidebar_position: 1
---

# Creation

While this mechanic can be configured in any way you like, for example:

- ERC1155 -> ERC1155
- ERC1155 -> ERC721
- ERC1155 -> ERC998
- ERC1155 + NATIVE -> ERC721
- ERC1155 + ERC20 -> ERC721
- ERC1155 + ERC1155 -> ERC721
- we discourage to configure it as pure purchase mechanic (ERC20 -> ERC721)

> **NOTE!** <br/>
> While it's possible to use multiple assets for payment, it's important
to note that using too many payment assets can significantly increase the gas cost of the transaction and may even reach
the network limit.

It is possible to create more than one recipe to craft the same item.

## Creation options

- **item** - An [item(s)](/admin/miscellaneous/asset/) to be crafted
- **price** - A list of [item(s)](/admin/miscellaneous/asset/) that are required to craft (item being dismantled)

![Craft create dialog](/img/admin/mechanics-simple/recipes/craft/craft_create_dialog.png)

