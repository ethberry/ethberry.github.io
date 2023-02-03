---
sidebar_position: 3
---

# Claim

Claim Mechanic Claim is a basic mechanic in the world of NFTs. 
Its primary purpose is to reward users for certain actions, such as participating in marketing campaigns. Claims are given out for free, with the only cost being the transaction fee.

Claims are pre-signed transactions that users can execute to receive their reward. 
A single claim can contain multiple items of different types, including [mystery boxes](/docs/admin-panel/hierarchy/mystery/box). This makes it an ideal solution for giving out rewards in various campaigns and promotions.

## Eligibility Criteria 

In order to be eligible to receive a reward through the claim mechanic, the user must meet the criteria defined in the pre-signed transaction. This may include requirements such as executing the transaction before a specified expiration date.

## Configuration

In order to start using Claims, you will need to create [templates](/docs/admin-panel/hierarchy/ERC721/template/) first. 
There are a few configuration options that you will need to specify. 

### Configuration options

- **account** - The address of beneficiary
- **item** - The item (or items) to be claimed (see [asset](/docs/admin-panel/miscellaneous/asset/))
- **end date** - The expiration date of the transaction

## Example of usage

Claims are a great way to reward users for their participation in various activities. For example, 
players can win rewards (kill the minion) in a game and the game server can communicate with our API to pre-sign the transaction so the player can claim their NFT. In another example, an admin can give out NFTs to users regardless of the stability of the web server. There are many other possible use cases for Claims, and this mechanic is an effective and flexible way to reward users.

### How to pre-sign transaction for one/multiple accounts:

#### Creating a Pre-Signed Transaction for a Single Account

1. Navigate to the **Claim** section on the dashboard.
2. Click on the **Create** button.
3. Fill in the required information for the claim, including the beneficiary's address and the NFTs to be claimed. <br/>*(You can add multiple NFTs by clicking the **+** button).*
4. Click the **Ok**"** button to complete the process.

#### How to create pre-sgn transaction for one account:
1. Go to dashboard and click to **Claim**  
2. Click **Upload** button
3. Insert CSV file with columns *(account,endTimestamp,tokenType,contractId,templateId,amount)*
4. Click **Ok** button

#### Creating a Pre-Signed Transaction for Multiple Accounts

1. Navigate to the **Claim** section on the dashboard.
2. Click on the **Upload** button.
3. Insert a **CSV** file with the following columns: account, endTimestamp, tokenType, contractId, templateId, and amount.
4. Click the **Ok** button to complete the process.

<br/>Note: Please refer to the attached screenshots for a visual representation of these steps. <br/>


###### Dashboard -> Claim
![](/img/dashboard_claim.jpeg)
<!-- <img src="/img/dashboard_claim.jpeg" width="600"/> -->

###### Claim page
![](/img/claim_actions.jpeg)
<!-- <img src="/img/claim_actions.jpeg" width="600"/> -->

###### Claim -> Create
![](/img/claim_create.jpeg)
<!-- <img src="/img/claim_create.jpeg" width="600"/> -->

###### Claim -> Upload
![](/img/claim_upload.jpeg)
<!-- <img src="/img/claim_upload.jpeg" width="600"/> -->