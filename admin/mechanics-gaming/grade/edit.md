---
hide_table_of_contents: true
sidebar_position: 2
---

# Configuration

Attributes can be 

## Configuration options

While deployment options are used as default values there are still things to configure

- **contract** - the contract to update (readonly)
- **attribute** - attribute name (readonly)
- **status**
  - **ACTIVE** - Active tokens are displayed on site and available for selection for other actions
  - **INACTIVE** - Inactive tokens are not available for selection
- **grade strategy** - how the price for the next level is calculated
  - **FLAT** - the cost remains the same each time. The cost formula for this strategy is
  > **cost = amount**
  - **LINEAR** - the cost gradually rises with each level. The cost formula for this strategy is
  > **cost = amount * level**
  - **EXPONENTIAL** - the cost rises exponentially using a growth rate. The cost formula for this strategy is
  > **cost = amount * (1 + rate / 100) ^ level**
- **price** - the price for the upgrade from level 0 to 1 (see [asset](/admin/miscellaneous/asset/))

![Grade edit dialog](/img/admin/mechanics-gaming/grade/grade_edit.png)
