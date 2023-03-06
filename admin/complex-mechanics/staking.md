---
sidebar_position: 1
---

# Staking

Staking is a mechanic which allows user to deposit one kind of token and gain an interest over time in some other token. This could be compared with a bank deposit. 

On early stages of the project, when [ERC20](/admin/category/erc20/) token is just emitted it could be used to retain liquidity of this coin.
On middle and late stages it could be used for passive income

## Use case examples

1. The project could configure Staking contract to accept [ERC20](/admin/category/erc20/) and give unique [token in the box](/admin/simple-mechanics/mystery/box) as an interest.

2. Imagine user got 10 [Heroes](/admin/category/erc998/), but he can use only 5 in his squad. What can he do with the rest? 
Of course, he can sell redundant NFTs, but he also can make them work in a mine to gain passive income. 
Let's say project has configured mine to accept [Hero](/admin/category/erc998/) and give [metal ore](/admin/category/erc1155/) as an interest.
5 metal ore per day per character, maximum 5 character per mine. 
This will make user to want to have 10 Heroes instead of 5.

## Deployment

Staking contract is deployed as system contract by initial setup script.

Staking contract can have multiple staking rules.
Each rule is configured in Admin panel and later loaded to the Staking contract by executing transaction

### Configuration options

- **title** - This is how Staking rule appears on the site.
- **description** - General description, deposit terms or the story about unique weapon or mine/sawmill
- **deposit token**
    - **token type** - One of possible token types for deposit.
    - **contract** - Selected collection from that type
    - **template** - Used only for ERC721/ERC998
    - **tokenId** - Used only for ERC1155
    - **amount** - Used only for ERC20/ERC1155
- **reward token**
    - **token type** - One of possible token types for reward.
    - **contract** - Selected collection from that type
    - **template** - Used only for ERC721/ERC998, depending on collection type token would be minted as **_COMMON TOKEN_**, **_RANDOM TOKEN_** or **_MYSTERYBOX_**
    - **tokenId** - Used only for ERC1155
    - **amount** - Used only for ERC20/ERC1155
- **duration** - duration of the staking period, set in days
- **penalty** - Early termination fee, if any (default 0)
- **max per user** - Limits a number of deposits from one account, if any (default unlimited)

