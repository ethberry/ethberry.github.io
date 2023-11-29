---
hide_table_of_contents: true
sidebar_position: 4
---

# Metadata

Generally, metadata is used to store some information on-chain. While you want to store slow-data like rarity or level,
you most likely don't want to store fast-data like HP and durability. The main reason to not store fast-data on chain is
someone has to update it and pay for transaction.

For now only 5 types are stored on-chain:

### TEMPLATE_ID

All tokens have this attribute, it refers to the item template id in the database

- it can't be created as attribute in [Grade](/admin/mechanics-simple/grade/) mechanic for any template
- can't be changed by any mechanic

Example: 1-2147483647; int4

### LEVEL

**LEVEL** is the default attribute for the [Grade](/admin/mechanics-simple/grade/) mechanic
and [Discrete](/admin/hierarchy/ERC721/features/#discrete) feature.

- tokens can be searched by this attribute
- there is page with statistic over this attribute
- can be changed for a price
- this and other attributes from Grade mechanic are displayed on token page

Example: 1-115792089237316195423570985008687907853269984665640564039457584007913129639935; uint256

### RARITY

**RARITY** is the default attribute for [ChainLink](/admin/integrations/chain-link/) integration
and [Random](/admin/hierarchy/ERC721/features/#random) feature.

- tokens can be searched by this attribute
- there is page with statistic over this attribute
- this attribute is displayed on token page
- can't be changed by any mechanic
- it can't be created as attribute in [Grade](/admin/mechanics-simple/grade/) mechanic for templates that contains
  Random and Discrete features

Example: 0-4; common, uncommon, rare, epic, legendary

### GENES

**GENES** is the default attribute for the [Breeding](/admin/mechanics-simple/breeding/) mechanic
   and [Genes](/admin/hierarchy/ERC721/features/#genes) feature.

- this attribute is displayed on token page in decoded format
- can't be changed by any mechanic
- it can't be created as attribute in [Grade](/admin/mechanics-simple/grade/) mechanic for templates that contains
  Genes and Discrete features

```
Example: 5846006549663894039973362281908193186987844304901; { a1: 4, a2: 1, a3: 3, a4: 2, a5: 1, a6: 5 }
```

### TRAITS

**TRAITS** is the default attribute for the [Collectible](/admin/mechanics-simple/collectible/) mechanic.

- this attribute is displayed on token page in decoded format
- can't be changed by any mechanic

```
Example: 5846006549663894039973362281908193186987844304901; { a1: 4, a2: 1, a3: 3, a4: 2, a5: 1, a6: 5 }
```
