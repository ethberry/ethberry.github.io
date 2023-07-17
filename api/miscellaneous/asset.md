---
sidebar_position: 8
---

# Asset

Read more about asset [here](/admin/miscellaneous/asset)

#### Asset consist of 4 parameters:

- **tokenType**: can be in a range from **0** to **4**, and is used to identify the type of token being used
    - **0**: NATIVE
    - **1**: ERC20
    - **2**: ERC721
    - **3**: ERC998
    - **4**: ERC1155
- **token**:  specifies the contract **address** of the token
- **tokenId**: is used to identify the specific token being used, and is only relevant for non-fungible tokens
- **amount**: represents the quantity of tokens being exchanged, and is only relevant for fungible tokens

