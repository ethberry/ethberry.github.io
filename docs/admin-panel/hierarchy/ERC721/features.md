---
sidebar_position: 4
---


# Features

### SIMPLE

The SIMPLE contract is a foundational component of all features offered by our platform. It includes all the basic functions necessary for the creation and management NFTs, such as **minting**, **burning**, and **transferring**.

#### Consist of several contracts:
- **Access Control** - provides the ability to restrict or grant permission for specific addresses to interact with a smart contract. _(see [OpenZeppelin](https://docs.openzeppelin.com/contracts/4.x/access-control))_
- **Burnable** -  allows for a token to be destroyed, reducing the overall supply and potentially increasing the value of remaining tokens _(see [OpenZeppelin](https://docs.openzeppelin.com/contracts/4.x/api/token/erc721#ERC721Burnable))_
- **Enumerable** - allows the contract to be queried for a list of all token holders and their token balances _(see [OpenZeppelin](https://docs.openzeppelin.com/contracts/4.x/api/token/erc721#ERC721Enumerable))_
- **Royalty** - allows for a portion of the sale price to be paid to the original creator of the NFT each time it is resold
- **BaseUrl** - allows the NFTs to have a URI pointing to a public location where additional information and resources can be stored
- **MetaData** - provides tiny key/values storage for metadata associated with an NFT.

Overall, the SIMPLE feature provides a comprehensive set of tools for the creation and management of NFTs, serving as the foundation for all other features offered by our platform.


### BLACKLIST

The **Blacklist** feature is a security mechanism that **restrict** certain addresses from **transfering NFT**. These addresses are typically considered to be bad actors and are unable to use the NFTs they possess if they are added to blacklist. This helps to maintain the integrity of the contract and ensure that NFTs are not being used maliciously.


### WHITELIST

The **Whitelist** feature in NFTs works as the opposite of the Blacklist. While the blacklist restrict specific addresses from transfering the NFT, the Whitelist **allows only a specific set of addresses transfer the NFT**.


### PAUSABLE

The **Pausable** feature in smart contracts allows the contract owner or authorized parties to **temporarily pause the execution of the contract**. This feature is particularly useful when the marketing team starts selling NFTs, but the programming side is not yet ready to support the transaction process. It can also be used to address unexpected bugs or errors that may arise during the lifetime of the contract, without affecting the overall integrity of the contract.

One practical example of its use is in the sale of mystery boxes. If the NFTs within the mystery boxes are not yet available, the contract can be paused until they are ready. This ensures that the users cannot access the NFTs until the contract is ready, adding an extra layer of security and control to the process. The Pausable feature of ERC721 contracts allows for greater flexibility and control, making it an important component for any project utilizing NFTs.


### UPGRADEABLE

The **Upgradeable** feature allows NFTs to be upgraded with attributes such as level, power, stamina, etc. It provides a new level of functionality to NFTs by allowing owners to enhance their assets. This can increase the value and desirability of NFTs, making them more appealing to buyers and investors.

In a gaming platform, for example, players can upgrade their NFTs to improve their in-game abilities or earn more in-game currency. This not only enhances the user's experience but also positively influences the overall economy of the token as upgraded tokens may hold a higher value.


### GENES

The **Genes** feature allows for the creation and management of unique, inheritable traits within NFTs. This allows for a new level of complexity and depth in the NFT ecosystem, creating new opportunities for collectibility and gameplay. The GENES feature has been utilized by popular NFT projects such as [Axie Infinity](https://axieinfinity.com/) and [CryptoKitties](https://www.cryptokitties.co/), where players can breed and trade creatures with unique traits. One more example is [Derace](https://derace.com/) that allow for the creation of rare and valuable horses NFTs, where the traits of the horses can be passed down through generations. The addition of the GENES feature opens up new possibilities for NFT creators, collectors, and gamers.


### RANDOM

The **RANDOM** feature is an important aspect of the ERC721 contract, as it provides a way to randomly generate events within a blockchain application. To ensure the fairness and transparency of the random number generation process, we use the popular decentralized oracle service, [ChainLink](/docs/integrations/chain-link/).

Combining the RANDOM feature with the UPGRADABLE feature also provides new possibilities for NFT-based gaming experiences. Players can be surprised by the rarity of the NFT they receive and can then work to upgrade it and increase its value. This creates a unique and dynamic NFT economy, where the value of NFTs is determined by both player effort and luck.

You can also combine RANDOM with other features such as MYSTERY BOX, and this can enhance the overall user experience and drive engagement. The use of RANDOM in NFT projects, such as in gaming, can greatly add to the value and desirability of the NFTs, leading to a more active and thriving community and economy.

### SOULBOUND

The **SOULBOUND** feature is a valuable addition to NFTs, providing security and control to the distribution and ownership of these tokens. By tying ownership to a specific individual, the SOULBOUND feature ensures that the NFT remains in the hands of its intended owner, rather than being traded or passed on to others. This is particularly useful for NFTs with important or high-value attributes, such as **Governance tokens** used for voting purposes.

The use of the SOULBOUND feature as a voting pass in [governance](/docs/admin-panel/complex-mechanics/governance/) systems ensures that each vote is **securely tied** to an individual voter, preventing fraudulent or duplicated voting. This provides a level of trust and accountability to the [governance](/docs/admin-panel/complex-mechanics/governance/) process, ensuring that the outcome accurately reflects the will of the voters.
