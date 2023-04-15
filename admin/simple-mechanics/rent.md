---
sidebar_position: 9
---

# Rent

**Renting NFTs** is a popular mechanic in the world of blockchain gaming. It allows users to temporarily acquire access to an NFT in exchange for a rental fee. Using the [EIP-4907](https://eips.ethereum.org/EIPS/eip-4907) standard, owners or approvers can designate a user as a renter and set a rental duration for their NFT. The smart contract then saves the renter's address and the expiration time until which the renter has access to the NFT.

During the rental period, the renter can use the NFT within the ecosystem, such as playing a game and earning rewards or breeding and receiving new offspring. However, the renter cannot transfer the NFT or use it in ways outside of ecosystem.

At any time, the owner can revoke the renter's access to the NFT, but this feature can be excluded. The NFT access is automatically revoked at the end of the rental period, and the owner can then rent it again or transfer it to another user.

This mechanic is facilitated by smart contracts on the blockchain, which enable secure and automated tracking of the rental period. Using [EIP-4907](https://eips.ethereum.org/EIPS/eip-4907), owners can easily register renters and ensure that the NFT is returned at the end of the rental period.

Renting NFTs can provide benefits for both owners and renters. Owners can earn revenue from their NFTs without having to sell them, while renters can enjoy the benefits of using an NFT without the long-term commitment and investment. Overall, renting NFTs has the potential to create new revenue streams and opportunities in the NFT ecosystem.

![](/img/simple-mechanics/rent.png)

<!-- The **Renting NFT** mechanic allows users to temporarily rent an NFT from its owner in exchange for a fee. The owner of the NFT can choose to list their NFT for rent and set the rental fee and duration. Users interested in renting the NFT can then pay the rental fee and specify the rental duration. Once the rental period ends, the NFT is automatically transferred back to the owner's account.

To list an NFT for rent, the owner needs to specify the **rental fee** and **rental duration** in the contract. Interested renters can then call the **rent** function and specify the **rental duration** and pay the **rental fee** in advance. The NFT is then transferred to the renter's account and can be used during the rental period. When the rental period expires, the NFT is automatically transferred back to the owner's account.

The **Renting NFT** mechanic relies on the Transfer functionality to transfer the NFT between the owner and renter's accounts. It also uses a time-based mechanism to track the rental period and automatically transfer the NFT back to the owner's account. -->