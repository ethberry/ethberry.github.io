---
sidebar_position: 4
---

# Grade

Grade mechanic is used for leveling items and characters.

## Configuration

By default all contract with **Upgradeable** feature created with default upgrade strategy, you have to manually change
it after creation.

### Configuration options

- **contract** - The contract to update (readonly)
- **grade strategy** - There are 3 grade strategy available. Cost of upgrade to the next level is calculated by the formula
    - **FLAT** - each time the same as previous, **cost = amount**
    - **LINEAR** - slowly rises each level **cost = amount * level**
    - **EXPONENTIAL** - exponentially rises, using grows rate **cost = amount * (1 + rate / 100) ^ level**
- **price** - The price for the upgrade from level 1 to 2 (see [asset](/docs/admin-panel/misc/asset/))




