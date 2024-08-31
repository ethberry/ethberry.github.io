---
hide_table_of_contents: true
sidebar_position: 2
---

# Dismantle

Dismantle is a mechanic used to break redundant items for crafting materials.

Here are some common scenarios for dismantling:

1. Dismantle items into resources. User can dismantle ERC721 token for several ERC1155 tokens.
   This way sword becomes an X iron

To start dismantling items you have to create  [items](/admin/hierarchy/ERC721/template/)
and [resources](/admin/hierarchy/ERC1155/template/) first

Full steps to create and test Dismantle from scratch:
Admin-ui
1. Deploy ERC20 Simple contract
2. Mint 10 ERC20 tokens to the Owner (then add ERC20 token to Metamask to see balance)
3. Deploy ERC721 Simple contract
4. Create ERC721 Template with price 1 ETH
5. Mint 1 ERC721 token to Owner (then add ERC721 token to Metamask to see balance)
6. Create Dismantle rule (Price - ERC721 Template, Item - 10 ERC20 Tokens)

Market-ui
7. On the ERC721 Token page - click Dismantle button
8. Confirm approve token spend for ERC721 token
9. Confirm Dismantle of ERC721 token
10. Check 2 things: ERC721 token burned, ERC20 balance doesn't change
    (as 10 ERC20 Tokens will be transferred from Owner to Owner)