---
sidebar_position: 8
---

# Asset

**Asset** is a fundamental concept in our blockchain ecosystem that is used to **represent digital items on the blockchain**. It is the basic unit of data transmission for transactions involving tokens, allowing for accurate definition of the interaction with the token on the blockchain. Assets can represent fungible and non-fungible tokens, and are crucial for transferring tokens between addresses within our ecosystem.

#### Asset consist of 4 parametrs:
- **tokenType**: can range from **0-4**, is used to identify the type of token being exchanged,
    - **0**: NATIVE (ETH),
    - **1**: ERC20,
    - **2**: ERC721,
    - **3**: ERC998,
    - **4**: ERC1155
- **token**:  specifies the contract **address** of the token,
- **tokenId**: is used to identify the specific token being exchanged, and is only relevant for non-fungible tokens,
- **amount**: represents the quantity of tokens being exchanged, and is only relevant for fungible tokens,
