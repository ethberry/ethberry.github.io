---
hide_table_of_contents: true
sidebar_position: 6
---

# Chain Link

[Chain Link](https://chain.link/) is a huge ecosystem that acts as an Oracle for blockchain.

Smart contract can't get any information from off-chain by itself thus required information must be passed to it from
off-chain by executing transaction. This is what ChainLink does. One of the data type which they can pass to blockchain
is random number. We use it in different mechanics
like [Mystery Boxes](/admin/mechanics-marketing/mystery/), [Lottery](/admin/integrations/lottery/)
and [Raffle](/admin/integrations/raffle/).

More information about how it works can be found [here](https://docs.chain.link/docs/chainlink-vrf/)


## Steps to connect ChainLink:
1. **Go to ChainLink dashboard**.
   > ![](/img/admin/integrations/chain-link/chainlink_subscription_list.png)
1. **Create a Subscription**.
   > ![](/img/admin/integrations/chain-link/chainlink_subscription_create.png)
2. **Add the Contract as a Consumer to the Subscription**
   > ![](/img/admin/integrations/chain-link/chainlink_subscription_add_consumer.png)
3. **Fund the Subscription**
   > ![](/img/admin/integrations/chain-link/chainlink_subscription_fund.png)
4. **Set `subscriptionId` in Contract**:
    1. Go to **Contracts list**, click the `•••` and select `Set VRF subscriptionId`
   > ![](/img/admin/integrations/chain-link/contract_menu.png)
    2. Choose the appropriate **VRF Subscription Id** and click `OK`.
   > ![](/img/admin/integrations/chain-link/contract_subscription_id.png)
