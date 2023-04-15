---
sidebar_position: 4
---

# Metadata

Generally, metadata is used to store some information on-chain. While you want to store slow-data like rarity or level,
you most likely don't want to store fast-data like HP and durability. The main reason to not store fast-data on chain is
someone has to update it and pay for transaction.

For now only 5 types of data is stored on-chain:

1. **Template** refers to the item template and is used internally
2. **Grade** refers to a level of the item. Grade attribute can be increased by paying certain amount of resources, coins
   or ETH using [Upgrade mechanics](/)
3. **Rarity** refers to an item quality of being rare and is obtained on-chain
   from [ChainLink](/admin/integrations/chain-link/) service. This attribute is not meant to be changed ever.
4. **Genes** 
   refers to the genetic code of an NFT. They are inherited from the genes of the NFT's parents and can be used to determine certain attributes or properties of the NFT. 
   For example, in a game, the genes of a character NFT could determine its strength, speed, or other stats.
5. **Traits** 
   refer to specific characteristics or attributes that determine its appearance. These traits are represented by a set of predefined images, such as Head, Eyes, Skin, and so on. Each image is associated with a unique set of traits that define its appearance. During the generation process, one of these images is randomly selected, and the corresponding set of traits is applied to the NFT.