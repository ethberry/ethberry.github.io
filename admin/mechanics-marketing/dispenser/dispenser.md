---
hide_table_of_contents: true
sidebar_position: 1
---

# Dispenser

This mechanic allows to mass-transact tokens to the list of addresses.

## Upload

This mechanic accepts CSV file as an input. While fields of the CSV file, are bing validated to match expected pattern (
for example `address`), we do not validate amount of transactions, and you may see blockchain error related to this.

### Upload options

- **account** - receiver
- **tokenType** - one of the supported token types (NATIVE, ERC20, ERC721, ERC998, ERC1155)
- **address** - address of the token being sent, (0x0...0 for NATIVE)
- **templateId** - template id (0 for NATIVE, ERC20)
- **amount** - amount of tokens

![Dispenser upload dialog](/img/admin/mechanics-marketing/dispenser/dispenser_upload_dialog.png)

<iframe width="560" height="315" src="https://www.youtube.com/embed/2-2ZlAbkaj8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
