---
hide_table_of_contents: true
sidebar_position: 7
---

# Raffle

A raffle is a lottery-style event where participants purchase tickets for a chance to win prizes. The winners are
selected randomly, usually through a drawing. Raffles are commonly used for fundraising or promotional purposes and
provide a fun and accessible way for individuals to potentially obtain rewards or gifts.

### How it works:

1. **Starting a New Round**: The admin initiates a new round.
2. **Ticket Sales**: Tickets are sold to users through the [Exchange Contract](https://).
3. **Ending the Round**: The admin concludes the current round, emitting an event for the ChainLink contract to generate a random number and select a winner.
4. **Collecting Funds**: The admin collects all funds received during the round.
5. **Prize**: Winners gain the opportunity to invoke the getPrize function, which updates the metadata of their winning ticket. (not necessary if prize would be received off-chain)

![raffle workflow](/img/admin/mechanics-gambling/raffle/workflow.jpeg)

### Raffle Prize:
The raffle contract serves as a mechanism for selecting a random winner on-chain and updating the metadata of the winning ticket. However, the distribution of rewards is handled externally to the raffle contract. Rewards can be provided in various forms, including off-chain rewards (such as physical items or monetary prizes) or on-chain rewards (such as ERC20 or ERC721 tokens). It's important to implement a reward system separately from the raffle contract to determine how winners will receive their prizes.

### Integration with Exchange Contract:
All ticket sales are conducted through the Exchange Contract, which provides the necessary functionality for token exchange and payment processing. It's crucial to ensure that the Exchange Contract is granted the MINTER_ROLE in the Raffle Contract to enable the minting of tickets.