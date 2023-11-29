---
hide_table_of_contents: true
sidebar_position: 1
---

# Configuration

While it looks like a good idea to add each and every token as a potential child, in real life application it is most
likely impossible to wear CryptoKitty as a helmet of your character, because there is no such texture in the game.
Another thing is about amount of children of the same type, i.e. wearing 10 helmets at a time does not seem reasonable.

## Configuration options

We offer a filter to apply custom rules to restrict children.

- **parent** - parent contract
- **child** - child contract
- **amount** - amount of child tokens

NOTE: operations of adding and removing rules are performed directly on blockchain and reflected in database after
transaction is complete

![ERC998 composition create dialog](/img/admin/hierarchy/erc998/composition_create_dialog.png)
