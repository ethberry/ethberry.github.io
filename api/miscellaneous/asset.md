---
hide_table_of_contents: true
sidebar_position: 8
---

# Asset

Read more about asset [here](/admin/miscellaneous/asset)

### Asset consist of 4 parameters:

- **tokenType**: can be in a range from **0** to **4**, and is used to identify the type of token being used
    - **0**: NATIVE
    - **1**: ERC20
    - **2**: ERC721
    - **3**: ERC998
    - **4**: ERC1155
- **token**:  specifies the contract **address** of the token
- **tokenId**: is used to identify the specific token being used, and is only relevant for non-fungible tokens
- **amount**: represents the quantity of tokens being exchanged, and is only relevant for fungible tokens

# Validation

## Validation model reference

- NativeDto = NATIVE
- CoinDto = NATIVE, ERC20
- NftDto = ERC721, ERC998
- SemiCoinDto = NATIVE, ERC20, ERC1155
- SemiNftDto = ERC721, ERC998, ERC1155
- NotNativeDto = ERC20, ERC721, ERC998, ERC1155
- AllTypesDto = NATIVE, ERC20, ERC721, ERC998, ERC1155

## General validation rules

### Market

| Purchase       | Price         |
|----------------|---------------|
| TEMPLATE       | SemiCoinDto   |
| LOTTERY TICKET | SemiCoinDto   |
| RAFFLE TICKET  | SemiCoinDto   |
| LOOT BOX       | SemiCoinDto   |
| MYSTERY BOX    | SemiCoinDto   |

### Mechanic

| Mechanics      | Item          | Price        |
|----------------|---------------|--------------|
| CLAIM TEMPLATE | SemiNftDto    | N/A          |
| CLAIM TOKEN    | NotNativeDto  | N/A          |
| CLAIM VESTING  | ERC20         | N/A          |
| VESTING        | CoinDto       | N/A          |
| WAIT LIST      | SemiNftDto    | N/A          |
| DISCRETE       | N/A           | SemiCoinDto  |
| CRAFT          | SemiNftDto  ️ | NotNativeDto |
| MERGE          | NftDto ️      | NftDto       |
| DISMANTLE      | NotNativeDto  | NftDto       |
| RENT           | N/A           | SemiCoinDto  |
| ASSET PROMO    | SemiNftDto    | CoinDto      |

### Boxes

| Mechanics   | Content      | Price        |
|-------------|--------------|--------------|
| MYSTERY BOX | NftDto       | SemiCoinDto  |
| LOOT BOX    | NotNativeDto | SemiCoinDto  |
| WRAPPER     | AllTypesDto  | N/A          |

### Finance

| Mechanics | Deposit     | Reward      |
|-----------|-------------|-------------|
| STAKING   | AllTypesDto | AllTypesDto |
| PONZI     | CoinDto     | CoinDto     |

### Ecommerce

| Mechanics     | Item          | Price     |
|---------------|---------------|-----------|
| PRODUCT       | N/A           | CoinDto   |
| PRODUCT PROMO | N/A           | CoinDto   |
