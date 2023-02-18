---
sidebar_position: 3
---

# Exchange

<!-- Different mechanics like Clame, Grade, Purchase, etc using the same functionality for exchange tokens. The contract can take saverel items or assets and also can give several items or assets depends on extra logic of your app. This make exchange very flexible for all needs. But due to all functions is available to the whole world we have to validate witch transaction can be procedure and whitch can not. In order to do this, the transaction have to be sign by trusted source (SERVER), before the transaction is being procedure.  -->
The Exchange functionality is used across different mechanics such as [Claim](/admin/simple-mechanics/claim/), [Grade](/admin/simple-mechanics/grade/), [Purchase](https://), etc, to facilitate the exchange of tokens. The Exchange contract is designed to allow for the exchange of one or more [assets](/admin/miscellaneous/asset/), based on the specific logic of the application. This means that users can give one or many [assets](/admin/miscellaneous/asset/) and receive one or many [assets](/admin/miscellaneous/asset/) in return, making the exchange functionality very flexible. However, to prevent unauthorized transactions, the transaction must be validated by a trusted source (SERVER) before being processed. 
<!-- In order to sign the transaction via an endpoint, specific arguments need to be passed, and the sign contains important information that validates the transaction. This functionality can be invoked on different mechanics depending on the specific use case. -->

<!-- #### Example with Purchasing item on Marketplace: -->
### Here's an example of how to sign a transaction via endpoint request and purchase an item on a marketplace:

<!-- #### How to sign transaction:
In order to sign transaction, you need to make a POST request to our enpoint such as _**"/grade/sign"**_, _**"/marketplace/sign"**_ or other enpoints related to specific mechanic. -->
To sign a transaction, you need to make a POST request to an endpoint such as **"/grade/sign"** or **"/marketplace/sign"**, depending on the specific mechanic. The request for **"/marketplace/sign"** should include the token's **template ID**, the **address** of the account for exchange, and the **address** of the person who referred them. 

**The requst can look like:**
```javascript
{
    url: "/marketplace/sign",
    method: "POST",
    data: {
        templateId: 1,
        account: '0x61284003E50b2D7cA2B95F93857abB78a1b0F3Ca',
        referrer: ethers.constants.AddressZero,
    },
}
```
<!-- - **templateId** - template id of the token.
- **account** - address of the account for exchange.
- **referrer** - address of the person who bring him here. -->

<!-- If everything went well, you will receive a response from the server where you will find **signuture** which you will need for executing **purchase** function on contract. -->
If the request is **successful**, the server will respond with a signature that you need to execute the **purchase** function on the contract. <br/>
**The response will be similar to this:**
```javascript
{
    nonce: "0x1c37fa85c31c5fa39dc...",
    signature: "0x1c5fa85c31c5fa39dc1c5fa85c31c5fa39dc...",
    expiresAt: 0
}
```

<!-- #### How to execute transaction in blockchain: *(in this example we will use library ethers)* -->
<!-- First we need create an instance of contract via ethers.Contract. It takes 3 arguments:
1. **Address** of the contract.
2. **ABI** (Application Binary Interface) of the contract.
3. **Signer** (for more details see [ethers](https://docs.ethers.org/v5/api/signer/)) -->
To execute the transaction on the blockchain, you can create an instance of the contract via **ethers.Contract**, which takes the **address** of the contract, its **ABI**, and the **[Signer](https://docs.ethers.org/v5/api/signer/)** as arguments:

```javascript
const contract = new ethers.Contract(process.env.EXCHANGE_ADDR, ExchangeSol.abi, web3.getSigner());
```
<br/>

<!-- Than we can call **purchase** function from contract instance.<br/>it takes 4 arguments: **params**, **item**, **price** and **sign**: -->
You can then call the **purchase** function from the contract instance, which takes the **params**, **item**, **price**, and **sign** as arguments:

- **params**:
    - **nonce**         : Take from *"/marketplace/sign"* response
    - **externalId**    : can be hardcoded from db
    - **expiresAt**     : Take from *"/marketplace/sign"* response
    - **referrer**      : same referrer that you used for signing transaction.
- **item** - item that will be received:
    - **tokenType**    : **0** - **4** <br/>_(**0**: ETH, **1**: ERC20, **2**: ERC721, **3**: ERC998, **4**: ERC1155)_
    - **token**        : contract address of the token.
    - **tokenId**      : tokenId to receive. 
    - **amount**       : amount of tokens to receive.
- **price** - items that have to be paid.
    - **tokenType**    : **0** - **4** <br/>_(**0**: ETH, **1**: ERC20, **2**: ERC721, **3**: ERC998, **4**: ERC1155)_
    - **token**        : contract address of the token.
    - **tokenId**      : tokenId to give. 
    - **amount**       : amount of tokens to give.
- **sign** - Take from *"/marketplace/sign"* response
- **overrides** - this is optional argument (for more details see [ethers](https://docs.ethers.org/v5/api/contract/contract/#Contract--write))

<!-- > **NOTE**:<br/> 
> **item** and **price** are the same except that item is what the sender will receive and price is what the sender will pay. -->

<!-- > **NOTE**:<br/> 
> Different mechanics can accept array of **item** or array of **price**. <br/>
> **purchase** function accept only one **item** to receive, and can accept array of **price**. -->

**purchase** request can be look like this:

```javascript
contract.purchase(
    { // params
    nonce: ethers.utils.arrayify(sign.nonce),
    externalId: template.id,
    expiresAt: sign.expiresAt,
    referrer: ethers.constants.AddressZero,
    },
    { // item
    tokenType: 2, // ERC721
    token: template.contract?.address,
    tokenId: 130101,
    amount: 1,
    },
    [ // price
        {
            tokenType: 0, // ETH
            token: ethers.constants.AddressZero,
            tokenId: 0,
            amount: ethers.constants.weiPerEther,
        },
        {
            tokenType: 1, // ERC20
            token: process.env.ERC20,
            tokenId: 0,
            amount: ethers.constants.weiPerEther,
        }
    ],
    sign.signature,
    { value: ethers.constants.weiPerEther } // Send 1 ether
)
```

In the example, we have to spend **1 ETH** and **10^18 of ERC20** tokens and receive an **ERC721** token with a tokenId of 130101.

It's important to note that in order to proceed with this transaction, the contract that you are calling must have an allowance to the tokens that are in the price. In our case, we have to give an allowance to the ERC20 tokens.

In order to do this, we have to create an instance of the ERC20 contract and call the approve function from the contract:

```javascript
const erc20Instance = new ethers.Contract(process.env.ERC20, ERC20.abi, signer);
await erc20Instance.approve(
    process.env.EXCHANGE_ADDR, // spender
    ethers.constants.weiPerEther // amount - it have to be equal or greater than amount in price.
);
```
