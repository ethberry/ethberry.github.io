---
hide_table_of_contents: true
sidebar_position: 1
---

# Set Up

## Quick Overview:
To set up the Raffle Contract, follow these steps:
1. **Deploy Raffle Contract** and set its **status** to `Active`.
2. **Deploy Ticket (ERC721) Contract** and grant the `MINTER_ROLE` role to the Raffle Contract.
3. **Configure ChainLink**: Set the **Raffle Contract Address** as a consumer by `subscriptionId` and set this `subscriptionId` to the Raffle Contract.
4. Grant `MINTER_ROLE` to the **Exchange Contract** from the **Raffle Contract**.

Let's dive into each step:
### Deploy the Raffle Contract
<!-- All our smart contracts that are deployed in our system is deployed via [Contract Manager Contract](/admin/miscellaneous/contract-manager/). It help us to update our db according to smart contracts that deployed in project ecosystem. -->
  1. Go to **Dashboard > Raffle > Contract** and click the **Deploy button**. Confirm by clicking **OK**.
      > ![](/img/admin/mechanics-gambling/raffle/contract_deploy_dialog.png)
  2. Wait for the transaction to process. Once displayed on the screen, you should see the contract name `Raffle` and three buttons (edit, delete, and actions).
      > ![](/img/admin/mechanics-gambling/raffle/contract_search.png)
  3. Click the **Edit Button**, change the contract **status** to `Active`, and optionally update the title and description. <br/>Click **OK** when done.
      <!-- > Keep in Mind, that we still need to connect ChainLink to Raffle to make it work -->
      > ![](/img/admin/mechanics-gambling/raffle/contract_edit_dialog.png)
### Deploy the Ticket (ERC721) Contract and Grant MINTER_ROLE to Raffle
  1. Go to **Dashboard > Raffle > Ticket** and click the **Deploy Button**.
      > You can also connect your own ticket with **Create Button** (if contract already deployed), but we don't recomend to do that because each ticket token suppose to be tasted and have to include several functions like **mintTicket**, **getTicketData** and **setPrize**.
      > ![](/img/admin/mechanics-gambling/raffle/ticket_deploy_dialog.png)
  2. **Grant `MINTER_ROLE` to Raffle Contract**
      > Without this permission, the **Raffle** contract would not be able to mint any tokens from **Ticket** contract.
      1. Go to Dashboard > Raffle > Tickets and find the created ticket EthBerry Raffle Ticket.
      2. Go to **Dashboard > Raffle > Tickets** and find the created ticket `EthBerry Raffle Ticket`
      3. Click `•••` **[action button]** and click **Grant Role**
      4. Choose `MINTER_ROLE` in the **Role** field and search for `Raffle` or enter its `address` in the **Address** field. 
      5. Search for **Raffle Contract Title** not for ~~Raffle Ticket Title~~
      6. And click **OK** Button
      > ![](/img/admin/mechanics-gambling/raffle/ticket_grant_role_dialog.png)
     
### Grant MINTER_ROLE to Exchange Contract
The **Exchange contract** is used for selling tickets, so it needs the `MINTER_ROLE` from the **Raffle Contract** to mint and sell tickets.
1. Go to **Dashborad > Raffle > Contract**, click the `•••` **action button** and select `Grant Role`
2. Choose `MINTER_ROLE` in the **Role** field
3. Search for `Exchange` in the **Address** field. Select the contract on the same network as the Raffle contract. 
4. Click **Ok**.
    > ![](/img/admin/mechanics-gambling/raffle/contract_grant_role_dialog.png)
   
### Configure ChainLink
For detailed instructions on setting up ChainLink, refer to this [page](/admin/integrations/chain-link/).
