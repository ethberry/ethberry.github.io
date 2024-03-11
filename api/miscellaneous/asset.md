---
hide_table_of_contents: true
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

#### Validation model reference

- NftDto = ERC721, ERC998
- SemiNftDto = ERC721, ERC998, ERC1155
- CoinDto = NATIVE, ERC20
- SemiCoinDto = NATIVE, ERC20, ERC1155
- NativeDto = NATIVE
- NotNativeDto = ERC20, ERC721, ERC998, ERC1155
- AllTypesDto = NATIVE, ERC20, ERC721, ERC998, ERC1155

#### Common validation rules

| Mechanics     | Item          | Price       |
|---------------|---------------|-------------|
| TEMPLATE      | N/A           | SemiCoinDto |
| MYSTERYBOX    | NotNativeDto  | SemiCoinDto |
| CLAIM         | NotNativeDto  | N/A         |
| VESTING       | CoinDto       | N/A         |
| WAIT LIST     | SemiNftDto    | N/A         |
| GRADE         | N/A           | SemiCoinDto |
| CRAFT         | SemiNftDto  ️ | AllTypesDto |
| MERGE         | NftDto ️      | NftDto      |
| DISMANTLE     | NotNativeDto  | NftDto      |
| RENT          | N/A           | SemiCoinDto |
| ASSET PROMO   | SemiNftDto    | CoinDto     |
| ASSET PRODUCT | N/A           | CoinDto     |
| STAKING       | N/A           | N/A         |
