---
sidebar_position: 6
---

# Grade

Grade is a mechanism that allows management of the token's properties. In GemiFi projects, the grade mechanic is particularly useful as it provides a way to track the progress and value of an NFT over time.

The grade level of an NFT is displayed on [marketplaces](/api/components/json-microservice/marketplaces/) and serves as an indicator of the token's quality and value. The higher the grade level, the more valuable and desirable the NFT is likely to be.

#### Grade Properties on OpenSea Marketplace

![](/img/grade_opensea.jpeg)

## Configuration

<!-- When creating an NFT contract with the **Upgradeable** feature, it is set with a default upgrade strategy. 
However, this strategy can be changed after the contract is created. -->

By default all contract with **Upgradeable** feature created with default upgrade strategy, you have to manually change
it after creation. There are three grade strategy options available: **FLAT**, **LINEAR**, and **EXPONENTIAL**. 
The cost of upgrading to the next level is calculated using a formula specific to each strategy.

### Configuration options

- **Contract** - The contract to update (readonly)
- **Grade strategy** - There are 3 grade strategy available. Cost of upgrade to the next level is calculated by the formula
    - **FLAT** - the cost remains the same each time. The cost formula for this strategy is 
    > **cost = amount.**
    - **LINEAR** - the cost gradually rises with each level. The cost formula for this strategy is
    > **cost = amount * level**
    - **EXPONENTIAL** - the cost rises exponentially using a growth rate. The cost formula for this strategy is
    > **cost = amount * (1 + rate / 100) ^ level**
- **price** - The price for the upgrade from level 1 to 2 (see [asset](/docs/admin-panel/miscellaneous/asset/))




