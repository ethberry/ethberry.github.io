---
sidebar_position: 2
---

# Claim

Claim is a basic mechanic in the world of NFTs to give away an [asset](/admin/miscellaneous/asset/)
for the cost of transaction.

Claims are a great way to reward users for their participation in various activities. For example:
- For participation in marketing campaigns
- For killing minions and other in-game events
- Can be used to redeem off-chain balance

Claim can be combined with [vesting](/admin/simple-mechanics/vesting), [mystery boxes](/admin/simple-mechanics/mystery/box) and achievements

> **NOTE!** When the user receives a **ERC721**, **ERC998**, or **ERC1155** token, it will be
> **minted**, while **NATIVE** or **ERC20** tokens will be **spent** from the merchants balance.

## Create

In order to start using Claims, you will need to create [templates](/admin/hierarchy/ERC721/template/) first.

### Create options

- **account** - The address of beneficiary
- **item** - The item(s) to be claimed (see [asset](/admin/miscellaneous/asset/))
- **end date** - The expiration date of the transaction

![claim create dialog](/img/simple-mechanics/claim/claim_create_dialog.png)

## Upload

As an alternative you can upload CSV with data

### Upload options

- **account** - receiver
- **tokenType** - one of the supported token types (NATIVE, ERC20, ERC721, ERC998, ERC1155)
- **address** - address of the token being sent, (0x0...0 for NATIVE)
- **templateId** - template id (0 for NATIVE, ERC20)
- **amount** - amount of tokens
- **end date** - the expiration date of the transaction

![claim upload dialog](/img/simple-mechanics/claim/claim_upload_dialog.png)
