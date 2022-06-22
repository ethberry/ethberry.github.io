---
sidebar_position: 8
---

# Staking

Staking is a mechanic which allows user to deposit one kind of token and gain an interest in some other token over time. This could be compared with a bank. 

On early stages of the project, when [ERC20](/docs/category/erc20/) token is just emitted it could be used to retain liquidity of this coin. So the project should configure Staking contract to accept [ERC20](/docs/category/erc20/) and give unique [weapon in the box](/docs/admin-panel/ERC721/dropbox/) as an interest.

On middle and late stages it could be user for passive income

Imagine user got 10 [Heros](/docs/category/erc998/), but he can use only 5 in his squad. What can he do with the rest? Of course, he can sell redundant NFTs, but he also makes them work in a mine and get passive income. Let's say project has configured mine to accept [Hero](/docs/category/erc998/) Hero and give [metal ore](/docs/category/erc1155/) as an interest. 5 metal ore per day per character, maximum 5 character per mine. This will make user to want to have 10 Heroes instead of 5.

## Deployment

Staking contract is deployed by initial script.

### Configuration options

- **title** - This is how staking rule appears on the site.
- **description** - General description, the story about unique weapon or mine/sawmill
- **deposit token**
    - **token type** - One of possible token types.
    - **collection** - desired collection from that type
    - **template** - exists only for ERC721/ERC998
    - **tokenId** - exists only for ERC1155
    - **amount** - exists only for ERC20/ERC1155
- **deposit token**
    - **token type** - One of possible token types.
    - **collection** - desired collection from that type
    - **template** - exists only for ERC721/ERC998, depending on collection type token would be minted as TOKEN, RANDOM TOKEN or DROPBOX
    - **tokenId** - exists only for ERC1155
    - **amount** - exists only for ERC20/ERC1155
- **duration** - duration of the staking period, in days
- **penalty** - an early termination charge, if any
- **max per user** - limits a number of deposits from one account

