---
sidebar_position: 6
---

# Access Control

This is implementation of permission system from [OpenZeppelin](https://docs.openzeppelin.com/contracts/4.x/access-control#role-based-access-control)

In the process of deployment the [Contract Manager](/admin/miscellaneous/contract-manager/) assigns required roles to new contracts.
These roles later could be added or removed by you in the Admin Panel.

## Roles

- **DEFAULT_ADMIN_ROLE** - Automatically assigned to contract deployer and allows to assign other roles
- **MINTER_ROLE** - Automatically assigned to [Marketplace](/market/overview/) contract, so it could mint and sell new items
- **PAUSER_ROLE** - Allows to pause some contracts, for example pause [Claim](/admin/simple-mechanics/claim/) before it could be open
- **SNAPSHOT_ROLE** - Makes a snapshot of [ERC20](/admin/hierarchy/ERC20/contract/) owners
- **METADATA_ROLE** - Allows to update the metadata of the NFT.
- **PREDICATE_ROLE** - Specific to [Polygon network](https://docs.polygon.technology/docs/develop/ethereum-polygon/mintable-assets/)
- **DEPOSITOR_ROLE** - Specific to [Polygon network](https://docs.polygon.technology/docs/develop/ethereum-polygon/mintable-assets/)

You can add or revoke any role for specific contract via [contract actions](/admin/hierarchy/contract-actions).

![](/img/miscellaneous/grant_role.png)