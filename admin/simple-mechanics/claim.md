---
sidebar_position: 3
---

# Claim

Claim Mechanic Claim is a basic mechanic in the world of NFTs. 
Its primary purpose is to reward users for certain actions, such as participating in marketing campaigns. Claims are given out for free, with the only cost being the transaction fee.

Claims are pre-signed transactions that users can execute to receive their reward. 
A single claim can contain multiple items of different types, including [mystery boxes](/admin/simple-mechanics/mystery/box). This makes it an ideal solution for giving out rewards in various marketing campaigns and promotions.

## Configuration

In order to start using Claims, you will need to create [templates](/admin/hierarchy/ERC721/template/) first. 
There are a few configuration options that you will need to specify. 

### Configuration options

- **account** - The address of beneficiary
- **item** - The item (or items) to be claimed (see [asset](/admin/miscellaneous/asset/))
- **end date** - The expiration date of the transaction

## Example of usage

Claims are a great way to reward users for their participation in various activities. For example, 
players can win rewards (kill the minion) in a game and the game server can communicate with our API to pre-sign the transaction so the player can claim their NFT. In another example, an admin can give out NFTs to users regardless of the stability of the web server. There are many other possible use cases for Claims, and this mechanic is an effective and flexible way to reward users.

### How to pre-sign transaction for signle/multiple accounts:

#### Creating a Pre-Signed Transaction for a single Account

1. Navigate to the **Claim** section on the dashboard.
2. Click on the **Create** button.
3. Fill in the required information for the claim, including the beneficiary's address and the NFTs to be claimed. <br/>*(You can add multiple NFTs by clicking the **+** button).*
4. Click the **Ok** button to complete the process.

#### Creating a Pre-Signed Transaction for Multiple Accounts

1. Navigate to the **Claim** section on the dashboard.
2. Click on the **Upload** button.
3. Insert a **CSV** file with the following columns: account, endTimestamp, tokenType, contractId, templateId, and amount.
4. Click the **Ok** button to complete the process.

<br/>Note: Please refer to the attached screenshots for a visual representation of these steps. <br/>


###### Claim page
![](/img/simple-mechanics/claim/claim_actions.jpeg)

###### Claim -> Create
![](/img/simple-mechanics/claim/claim_create.jpeg)

###### Claim -> Upload
![](/img/simple-mechanics/claim/claim_upload.jpeg)