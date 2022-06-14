---
sidebar_position: 6
---

# Access Control

This is implementation of permission system from [OpenZepplin](https://docs.openzeppelin.com/contracts/4.x/access-control#role-based-access-control)

In the process of deployment the [Contract Manager](/docs/admin-panel/ContractManager/) assigns required roles to new contracts, these roles could be added or removed on your decision.

## Roles

- **DEFAULT_ADMIN_ROLE** - this role is automatically assigned to contract deployer and allows to assign other roles
- **MINTER_ROLE** - this role automatically assigned to [Marketplace](/docs/category/marketplace/) contract, so it could mint and sell new items
- **PAUSER_ROLE** - this role allows to pause some contracts, for example pause [Airdrop](/docs/marketplace/ERC721/airdrop/) before it could be open
- **SNAPSHOT_ROLE** - makes a snapshot of [ERC20](/docs/marketplace/ERC20/token/) owners
- **PREDICATE_ROLE** - this role is specific to [Polygon network](https://docs.polygon.technology/docs/develop/ethereum-polygon/mintable-assets/)
- **DEPOSITOR_ROLE** - this role is specific to [Polygon network](https://docs.polygon.technology/docs/develop/ethereum-polygon/mintable-assets/)
