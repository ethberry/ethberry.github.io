---
hide_table_of_contents: true
sidebar_position: 4
---


# Features

### SIMPLE

The SIMPLE contract is a foundational component of all features offered by our platform. It includes all the basic functions necessary for the creation and management NFTs, such as **minting**, **burning**, and **transferring**.

#### Consist of several extensions:
- **Access Control** - provides the ability to restrict or grant permission for specific addresses to interact with a smart contract. _(see [OpenZeppelin](https://docs.openzeppelin.com/contracts/5.x/access-control))_
- **Burnable** -  allows for a token to be destroyed, reducing the overall supply and potentially increasing the value of remaining tokens. _(see [OpenZeppelin](https://docs.openzeppelin.com/contracts/5.x/api/token/erc1155#ERC1155Burnable))_
- **Supply** - allows for the creation of a fixed supply of tokens, or a variable supply of tokens with a maximum limit. _(see [OpenZeppelin](https://docs.openzeppelin.com/contracts/5.x/api/token/erc1155#ERC1155Supply))_
- **Royalty** - allows for a portion of the sale price to be paid to the original creator of the NFT each time it is resold. _(see [EIP-2981](https://eips.ethereum.org/EIPS/eip-2981))_
- **BaseUrl** - allows the NFTs to have a URI pointing to a public location where additional information and resources can be stored. _(see [JSON-microservice](/api/category/json-microservice/))_

Overall, the SIMPLE feature provides a comprehensive set of tools for the creation and management of NFTs, serving as the foundation for all other features offered by our platform.


### BLACKLIST

The **Blacklist** feature is a security mechanism that **restrict** certain addresses from **transfering NFT**. These addresses are typically considered to be bad actors and are unable to use the NFTs they possess if they are added to blacklist. This helps to maintain the integrity of the contract and ensure that NFTs are not being used maliciously.


### SOULBOUND

The **SOULBOUND** feature is a valuable addition to NFTs, providing security and control to the distribution and ownership of these tokens. By tying ownership to a specific individual, the SOULBOUND feature ensures that the NFT remains in the hands of its intended owner, rather than being traded or passed on to others. This is particularly useful for NFTs with important or high-value attributes, such as collectible cards or in-game items.

The use of the SOULBOUND feature with the SUPPLY feature, where a limited supply of NFTs are created and tied to specific individuals, ensures that the rarity and value of each token is maintained. This is useful for NFTs that have a limited production run, such as rare artwork or unique collectibles.


### EXTERNAL

**External** contracts are only available in [Self-Hosted version](https://gemunion.io/pricing), these are contracts deployed by other developers but connected to the system to use in various mechanics. These contracts have disabled contract menu.
