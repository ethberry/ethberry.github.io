---
sidebar_position: 1
---

# Deployable

This type of vesting is meant to be deployed as a contract by merchant. This is a good choice when you need to deploy 
one contract at a time

## Deployment

Vesting contracts are being deployed using [Contract Manager](/admin/miscellaneous/contract-manager/).

You can create empty vesting contract and TopUp it later.

### Deployment options

- **beneficiary** - the address of the beneficiary
- **start date** - the date from which deposits will be displayed
- **cliff in month** - how many month to wait until first unlock
- **monthly release** - how many percents of locked amount to release every month

![Vesting contract deploy dialog](/img/simple-mechanics/vesting/vesting_contract_deploy_dialog.png)

