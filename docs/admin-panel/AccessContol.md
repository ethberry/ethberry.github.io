---
sidebar_position: 6
---

# Access Control

This is implementation of permission system from [OpenZepplin](https://docs.openzeppelin.com/contracts/4.x/access-control#role-based-access-control)

In the process of deployment the [Contract Manager](/docs/admin-panel/ContractManager/) assigns required roles to new contracts.
These roles later could be added or removed by your decision in Admin panel.

## Roles

- **DEFAULT_ADMIN_ROLE** - Automatically assigned to contract deployer and allows to assign other roles
- **MINTER_ROLE** - Automatically assigned to [Marketplace](/docs/category/marketplace/) contract, so it could mint and sell new items
- **PAUSER_ROLE** - Allows to pause some contracts, for example pause [Claim](/docs/admin-panel/mechanics/claim/) before it could be open
- **SNAPSHOT_ROLE** - Makes a snapshot of [ERC20](/docs/admin-panel/ERC20/token/) owners
- **PREDICATE_ROLE** - Specific to [Polygon network](https://docs.polygon.technology/docs/develop/ethereum-polygon/mintable-assets/)
- **DEPOSITOR_ROLE** - Specific to [Polygon network](https://docs.polygon.technology/docs/develop/ethereum-polygon/mintable-assets/)
