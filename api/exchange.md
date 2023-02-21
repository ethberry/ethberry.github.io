# Exchange

Exchange is the main contract that serves the mechanics around the tokens.

### Overview of Exchange Functionality:

This contract enables the exchange of tokens in a flexible manner, with various exchange mechanics available such as **[Claim](/admin/simple-mechanics/claim/)**, **[Grade](/admin/simple-mechanics/grade/)**, **Purchase**, etc. This functionality allows users to exchange one or multiple assets. However, to prevent unauthorized transactions, a trusted source (Server) must sign the transaction before it can be executed on the blockchain. Once the signature and additional information from the Server response are obtained, they can be combined with the Asset information to execute the exchange on the blockchain.

<!-- ### How Signing a Transaction Works Behind the Scenes: -->
### Signing a Purchase Transaction on Marketplace:

To sign any transaction, we use the standard [EIP-712](http://). This combines all parameters passed to the contract function into one string and hashes them. When executing the transaction, the address will be recovered from signature and contract will check this address for the appropriate minting rights. If the address has the necessary rights, the transaction is processed.
<!-- the signature recovered the address that signed the transaction and check for the appropriate minting rights. If the address has the necessary rights, the transaction is processed. -->

To sign a transaction via the Server endpoint, several arguments must be provided, including the **referral address** (if not applicable, pass '0x'), and the **templateId**.

> Different mechanics mey require different input. For Excample **Craft** require only **craftId**.

**The response will be similar to this:**
```javascript
{
    nonce: "0x1c37fa85c31c5fa39dc...",
    signature: "0x1c5fa85c31c5fa39dc1c5fa85c31c5fa39dc...",
    expiresAt: 0
}
```

### Executing Purchase on Blockchain:

Whenever a signature is available, the purchase can be executed on the blockchain.

**First** of all need to check - does the ***ExchangeContract*** (contract that will execute Purchase) **have allowance** for all tokens in **price**. If not we have to create an instance of the **token contract** and **[approve](/market/miscellaneous/approve/) tokens** for ***ExchangeContract***. 
<!-- In order to create an instance of the token contract we need **contract address** of the token and **ABI** of the contract. -->

**Second** we have to **create an instance** of the ***ExchangeContract*** and execute function that will perform the purchase. 
In order to create an instance of the ***ExchangeContract*** we need **address** and **ABI** of ***ExchangeContract***.

All contracts in our ecosystem using the same logic for exchange and have almost the same arguments for executing:
<!-- - **externalId**    : A constant ID associated with the particular mechanic that remains the same for each mechanic, -->
- **params**:
    - **nonce**         : Unique request ID. This parameter must be retrieved from the **sign response**,
    - **externalId**    : Line number in the database that describes the specific mechanics, <br/>_(For example we can have different Grade mechanics - one for Healt, one for Power and each of them have their own external ID)_
    - **expiresAt**     : This parameter describes how long signature would be valid _(If equal to 0, don't have any time limitations)_. <br/>Must be retrieved from the **sign response**,
    - **referrer**      : Use the same referrer that was used to sign the transaction.
- **item**: [Asset](/admin/miscellaneous/asset/) that user will receive,
- **price**: an array of [Assets](/admin/miscellaneous/asset/) that user must transfer,
- **sign**: signature taken from **sign response**.


#### Some notes:

> If **Native tokens** are in the **"price"**, the transaction must be executed with the same value as in **price.amount**.

<!-- > The Exchange functionality **supports ERC1363** transfer of ERC20 tokens. -->

<!-- > Each exchange mechanic may have different arguments for **"item"** and **"price"**. For example, [Claim](/admin/simple-mechanics/claim/) exchanges don't require a **"price"** argument since the user does not need to transfer anything. Similarly, [Grade](/admin/simple-mechanics/grade/) exchanges don't require an **"item"** argument as they only upgrade the metadata of the token. Some mechanics may have an array of **"item"**, this will allow to receive more than one [asset](/admin/miscellaneous/asset/). -->

> If the Exchange functionality (Purchase, Grade, etc.)  **accepts an array** of **"item"** or **"price"**, **unlimited [assets](/admin/miscellaneous/asset/) can be passed** for transfer or received as long as there is enough gas in the transaction.

> The arguments for signing a transaction and executing an exchange must be **exactly the same** (params, item, price).
> The exchange function on contract requires a combination of the **signature response params** and **asset information** (item, price).
> For signing a transaction, only a few properties (account, referrer, templateId) are required. 
> The server collects the rest of the exchange information (item, price) and signs it. This is done to prevent user manipulation of signature inputs from the front-end and ensure server control of all signatures for **security** reason.
