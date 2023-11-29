---
hide_table_of_contents: true
sidebar_position: 2
---

# Features

### SIMPLE

The SIMPLE contract is a foundational component of all features offered by our platform. It includes all the basic functions necessary for the creation and management NFTs, such as **minting**, **burning**, and **transferring**.

#### Consist of several extensions:
- **ERC20Snapshot** - This extension adds the ability to create and manage snapshots of the token's state. ([OpenZeppelin](https://docs.openzeppelin.com/contracts/3.x/api/token/erc20#ERC20Snapshot))
- **ERC20Capped** -  This extension adds a cap to the maximum supply of the token ([OpenZeppelin](https://docs.openzeppelin.com/contracts/3.x/api/token/erc20#ERC20Capped))
- **ERC20Burnable** - This extension adds the ability for token holders to burn their tokens ([OpenZeppelin](https://docs.openzeppelin.com/contracts/3.x/api/token/erc20#ERC20Burnable))
- **AccessControl** - This extension adds role-based access control to the token ([OpenZeppelin](https://docs.openzeppelin.com/contracts/3.x/access-control#role-based-access-control))
- **ERC1363** - This extension adds support for the ERC1363 interface, which allows for the token to be used in conjunction with other contracts that are compatible with ERC1363. ([EIP-1363](https://eips.ethereum.org/EIPS/eip-1363#security-considerations))

Overall, the SIMPLE feature provides a comprehensive set of tools for the creation and management of ERC20 tokens, serving as the foundation for all other features offered by our platform.


### BLACKLIST

The **Blacklist** feature is a security mechanism that **restricts** certain addresses from **transferring ERC20 tokens**. These addresses are typically considered to be bad actors and are unable to use the tokens they possess if they are added to the blacklist. This helps to maintain the integrity of the contract and ensure that tokens are not being used maliciously.


### WHITELIST

The **Whitelist** feature in ERC20 tokens works as the opposite of the **Blacklist**. While the Blacklist restricts specific addresses from transferring the tokens, the Whitelist allows only a specific set of addresses to transfer the tokens.


### EXTERNAL

**External** contracts are only available in [Self-Hosted version](https://gemunion.io/pricing), these are contracts deployed by other developers but connected to the system to use in various mechanics. These contracts have disabled contract menu.

### STABLE_COIN

**Stable Coins** are special cases of **External** contracts and are well tokens such as USDT and BUSD
