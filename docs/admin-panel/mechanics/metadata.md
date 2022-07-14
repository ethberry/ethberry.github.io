---
sidebar_position: 4
---

# Metadata

Generally metadata is used to store some information on-chain. While you want to store slow-data like rarity and level,
you most likely don't want to store fast-data like HP and durability. The main reason to not store fast-data on chain is
someone has to update it and pay for transaction.

For now only two types of data is stored on-chain:

1. **Rarity** refers to an item quality of being rare and is obtained on-chain
   from [ChainLink](/docs/integrations/ChainLink/)
   service. This attribute is not meant to be changed ever.
3. **Grade** refers to a level of the item. Grade attribute can be increased by paying certain amount of resources, coins
   or ETH.
