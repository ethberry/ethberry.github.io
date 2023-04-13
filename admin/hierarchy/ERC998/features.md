---
sidebar_position: 4
---


# Features

### Additional Features

**ERC998** is a superset of **ERC721**, which means it includes all the features of [ERC721](/admin/hierarchy/ERC721/features) and adds additional functionality for the creation of complex NFT structures through the creation of nested tokens.

### SIMPLE

The **ERC998Simple** contract allows for the creation and management of composable NFTs, which can have other NFTs or fungible tokens attached to them as child items. It includes all the basic functions necessary for the creation and management of these composable NFTs, such as the ability to attach and detach child items, as well as transfer and query ownership.

#### Consist of several extensions:
- **ERC721Simple** - a basic implementation of ERC721 that provides the core functionality for managing NFTs, including minting, burning, and transferring. (see this [page](/admin/hierarchy/ERC721/features/#simple))
- **ERC721Owner** -  This extension allows a composable NFT to be the owner of an ERC721 token. It enables the creation of nested ERC721 tokens, allowing for the creation of complex NFT structures.
- **WhiteListChild** - Allows ERC998 to specify which Child tokens can be owned and set the maximum number of one kind of Child token that can be owned.


### ERC20Owner

This feature allows a composable NFT to be the owner of an [ERC20](/admin/hierarchy/ERC20/contract) token. It extends the functionality of the contract by adding extra functions for `transferring` and `checking the balance` of **ERC20 tokens** that are **owned by the ERC998 token**.

### ERC1155Owner

This feature allows a composable NFT to be the owner of an [ERC1155](/admin/hierarchy/ERC1155/contract) token. It extends the functionality of the contract by adding extra functions for `transferring` and `checking the balance` of **ERC1155 tokens** that are **owned by the ERC998 token**.

### StateHash

This feature generates a hash of the token state including all ChildTokens. Whenever an ERC998 token `receives` or `removes` any tokens, the state hash is updated. The state hash can be used to verify that a composite NFT has not been modified since it was put up for sale, making it useful for ensuring the authenticity of NFTs on a blockchain.