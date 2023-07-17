---
sidebar_position: 2
---

# Claimable

This type of vesting is meant to be created as a record in database by merchant and then deployed by beneficiary on
behalf of merchant. This is a good choose when you need to create hundreds of vesting contracts

## Create

In order to create claimable vesting you have to create [NATIVE](/admin/hierarchy/NATIVE/token/)
or [ERC20](/admin/hierarchy/ERC20/contract/) first

### Create options

- **beneficiary** - the address of the beneficiary
- **start date** - the date from which deposits will be displayed
- **cliff in month** - how many month to wait until first unlock
- **monthly release** - how many percents of locked amount to release every month
- **item** - the token to be used as funds

![vesting claim create dialog](/img/admin/mechanics-simple/vesting/versting_claim_create_dialog.png)

## Upload

As an alternative you can upload CSV with data

### Upload options

- **beneficiary** - the address of the beneficiary
- **start date** - the date from which deposits will be displayed
- **cliff in month** - how many month to wait until first unlock
- **monthly release** - how many percents of locked amount to release every month
- **tokenType** - one of the supported token types (NATIVE, ERC20, ERC721, ERC998, ERC1155)
- **address** - address of the token being sent, (0x0...0 for NATIVE)
- **templateId** - template id (0 for NATIVE, ERC20)
- **amount** - amount of tokens

![vesting claim upload dialog](/img/admin/mechanics-simple/vesting/versting_claim_upload_dialog.png)

