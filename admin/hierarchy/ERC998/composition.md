---
sidebar_position: 4
---

# Composition

The **ERC998** token is a valuable addition to the existing standards, it enables a whole new range of use cases.
Main feature of **ERC998** is an ability to be composed. This means each **ERC998** token can own another
tokens ([ERC20](/admin/category/erc20/), [ERC721](/admin/category/erc721/), [ERC998](/admin/category/erc998/)
or [ERC1155](/admin/category/erc1155/)) as a child. Composed tokens can be traded in a single transaction for a cost of
transfer of parent token.

## Configuration

While it looks like a good idea to add each and every token as a potential child, in real life application it is most
likely impossible to wear CryptoKitty as a helmet of your character, because there is no such texture in the game.
Another thing is about amount of children of the same type, i.e. wearing 10 helmets at a time does not seem reasonable.

### Configuration options

We offer a filter to apply custom rules to restrict children.

- **parent** - parent contract
- **child** - child contract
- **amount** - amount of child tokens


NOTE: operations of adding and removing rules are performed directly on blockchain and reflected in database after
transaction is complete

![ERC998 composition create dialog](/img/admin/hierarchy/erc998/erc998_composition_create_dialog.png)
