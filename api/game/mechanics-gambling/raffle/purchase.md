---
hide_table_of_contents: true
sidebar_position: 2
---

# Purchasing raffle tickets

Purchasing raffle tickets from game website

#### Step 1: get raffle contract

Request

```bash
curl -X 'GET' \
  'https://game-api.gemunion.io/raffle/contracts?skip=0&take=25&chainId=10001' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer 11111111-2222-3333-4444-555555555555'
```

Response

```json
{
  "rows": [
    {
      "id": 12201,
      "createdAt": "2024-03-15T02:09:10.938Z",
      "updatedAt": "2024-03-15T02:09:10.938Z",
      "address": "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",
      "chainId": 10001,
      "title": "RAFFLE",
      "description": "{\"blocks\":[{\"key\":\"e9n5e\",\"text\":\"bold\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":4,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"dfijs\",\"text\":\"italic\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":6,\"style\":\"ITALIC\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"fdeqa\",\"text\":\"underscore\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":10,\"style\":\"UNDERLINE\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"4uhh1\",\"text\":\"strikethrough\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":13,\"style\":\"STRIKETHROUGH\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
      "merchantId": 1,
      "imageUrl": "https://firebasestorage.googleapis.com/v0/b/gemunion-firebase.appspot.com/o/DO_NOT_REMOVE%2Flogo.png?alt=media&token=73cdfd99-1374-45e0-8140-5c02fc4d8097",
      "name": "Raffle",
      "symbol": "",
      "decimals": 0,
      "fromBlock": 0,
      "royalty": 0,
      "baseTokenURI": "",
      "parameters": {
        "timeLagBeforeRelease": "100",
        "commission": "30",
        "schedule": "0 0 * * 6,0",
        "roundId": 103
      },
      "isPaused": false,
      "contractStatus": "ACTIVE",
      "contractType": null,
      "contractFeatures": [
        "RANDOM",
        "ALLOWANCE",
        "PAUSABLE"
      ],
      "contractModule": "RAFFLE",
      "contractSecurity": "ACCESS_CONTROL",
      "merchant": {
        "id": 1,
        "wallet": "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73"
      }
    }
  ],
  "count": 1
}
```

#### Step 2: get raffle round

Request

```bash
curl -X 'GET' \
  'https://game-api.gemunion.io/rounds/current?contractId=12201' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer 11111111-2222-3333-4444-555555555555'
```

Response

```json
{
  "id": 103,
  "createdAt": "2024-03-15T02:09:10.969Z",
  "updatedAt": "2024-03-15T02:09:10.969Z",
  "number": null,
  "roundId": "103",
  "contractId": 12201,
  "ticketContractId": 12101,
  "priceId": 102210003,
  "maxTickets": 5,
  "startTimestamp": "2024-03-16T02:09:10.969Z",
  "endTimestamp": null,
  "contract": {
    "id": 12201,
    "createdAt": "2024-03-15T02:09:10.938Z",
    "updatedAt": "2024-03-15T02:09:10.938Z",
    "address": "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",
    "chainId": 10001,
    "title": "RAFFLE",
    "description": "{\"blocks\":[{\"key\":\"e9n5e\",\"text\":\"bold\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":4,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"dfijs\",\"text\":\"italic\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":6,\"style\":\"ITALIC\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"fdeqa\",\"text\":\"underscore\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":10,\"style\":\"UNDERLINE\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"4uhh1\",\"text\":\"strikethrough\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":13,\"style\":\"STRIKETHROUGH\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "merchantId": 1,
    "imageUrl": "https://firebasestorage.googleapis.com/v0/b/gemunion-firebase.appspot.com/o/DO_NOT_REMOVE%2Flogo.png?alt=media&token=73cdfd99-1374-45e0-8140-5c02fc4d8097",
    "name": "Raffle",
    "symbol": "",
    "decimals": 0,
    "fromBlock": 0,
    "royalty": 0,
    "baseTokenURI": "",
    "parameters": {
      "timeLagBeforeRelease": "100",
      "commission": "30",
      "schedule": "0 0 * * 6,0",
      "roundId": 103
    },
    "isPaused": false,
    "contractStatus": "ACTIVE",
    "contractType": null,
    "contractFeatures": [
      "RANDOM",
      "ALLOWANCE",
      "PAUSABLE"
    ],
    "contractModule": "RAFFLE",
    "contractSecurity": "ACCESS_CONTROL"
  },
  "ticketContract": {
    "id": 12101,
    "createdAt": "2024-03-15T02:09:10.923Z",
    "updatedAt": "2024-03-15T02:09:10.923Z",
    "address": "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",
    "chainId": 10001,
    "title": "RAFFLE TICKET",
    "description": "{\"blocks\":[{\"key\":\"e9n5e\",\"text\":\"bold\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":4,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"dfijs\",\"text\":\"italic\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":6,\"style\":\"ITALIC\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"fdeqa\",\"text\":\"underscore\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":10,\"style\":\"UNDERLINE\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"4uhh1\",\"text\":\"strikethrough\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":13,\"style\":\"STRIKETHROUGH\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "merchantId": 1,
    "imageUrl": "https://firebasestorage.googleapis.com/v0/b/gemunion-firebase.appspot.com/o/DO_NOT_REMOVE%2Flogo.png?alt=media&token=73cdfd99-1374-45e0-8140-5c02fc4d8097",
    "name": "RAFF",
    "symbol": "RAFF721",
    "decimals": 0,
    "fromBlock": 0,
    "royalty": 100,
    "baseTokenURI": "http://localhost:3011/metadata/",
    "parameters": {},
    "isPaused": false,
    "contractStatus": "ACTIVE",
    "contractType": "ERC721",
    "contractFeatures": [],
    "contractModule": "RAFFLE",
    "contractSecurity": "ACCESS_CONTROL"
  },
  "price": {
    "id": 102210003,
    "components": [
      {
        "id": 281,
        "tokenType": "ERC20",
        "contractId": 10201,
        "templateId": 1020101,
        "tokenId": null,
        "amount": "1000000000000000000",
        "contract": {
          "id": 10201,
          "createdAt": "2024-03-15T02:09:08.751Z",
          "updatedAt": "2024-03-15T02:09:08.751Z",
          "address": "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73",
          "chainId": 10001,
          "title": "Space Credits",
          "description": "{\"blocks\":[{\"key\":\"e9n5e\",\"text\":\"bold\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":4,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"dfijs\",\"text\":\"italic\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":6,\"style\":\"ITALIC\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"fdeqa\",\"text\":\"underscore\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":10,\"style\":\"UNDERLINE\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"4uhh1\",\"text\":\"strikethrough\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":13,\"style\":\"STRIKETHROUGH\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "merchantId": 1,
          "imageUrl": "https://firebasestorage.googleapis.com/v0/b/gemunion-framework-production.appspot.com/o/DO_NOT_REMOVE%2Fspace_credit.png?alt=media&token=b940fa35-78bd-4534-b015-6ee8e290506e",
          "name": "Space Credits",
          "symbol": "GEM20",
          "decimals": 18,
          "fromBlock": 0,
          "royalty": 0,
          "baseTokenURI": "",
          "parameters": {},
          "isPaused": false,
          "contractStatus": "ACTIVE",
          "contractType": "ERC20",
          "contractFeatures": [],
          "contractModule": "HIERARCHY",
          "contractSecurity": "ACCESS_CONTROL"
        },
        "template": {
          "id": 1020101,
          "createdAt": "2024-03-15T02:09:08.850Z",
          "updatedAt": "2024-03-15T02:09:08.850Z",
          "title": "Space Credits",
          "description": "{\"blocks\":[{\"key\":\"e9n5e\",\"text\":\"bold\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":4,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"dfijs\",\"text\":\"italic\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":6,\"style\":\"ITALIC\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"fdeqa\",\"text\":\"underscore\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":10,\"style\":\"UNDERLINE\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"4uhh1\",\"text\":\"strikethrough\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":13,\"style\":\"STRIKETHROUGH\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "imageUrl": "https://firebasestorage.googleapis.com/v0/b/gemunion-firebase.appspot.com/o/DO_NOT_REMOVE%2Flogo.png?alt=media&token=73cdfd99-1374-45e0-8140-5c02fc4d8097",
          "priceId": null,
          "cap": "0",
          "amount": "1000000000000000000000",
          "cid": null,
          "templateStatus": "ACTIVE",
          "contractId": 10201,
          "tokens": [
            {
              "id": 102010101,
              "createdAt": "2024-03-15T02:09:08.955Z",
              "updatedAt": "2024-03-15T02:09:08.955Z",
              "imageUrl": null,
              "metadata": {},
              "tokenId": "0",
              "royalty": 0,
              "cid": null,
              "tokenStatus": "MINTED",
              "templateId": 1020101
            }
          ]
        }
      }
    ]
  },
  "ticketCount": 0
}
```

#### Step 3: sign selling transaction

Request

```bash
curl -X 'POST' \
  'https://game-api.gemunion.io/raffle/ticket/sign' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer 11111111-2222-3333-4444-555555555555' \
  -H 'Content-Type: application/json' \
  -d '{
  "account": "0x7008594bB5764beDE9c0511b0E1322e7fC5048D3",
  "referrer": "0x7008594bB5764beDE9c0511b0E1322e7fC5048D3",
  "contractId": 12201
}'
```

Response

```json
{
  "nonce": "0xa6095cfacc57731f5ce5f541b9e33ae6590817482c036d25d9528cc8ff992322",
  "signature": "0x46ccfccbec0f50e980b27ae54e5e43fda92a50ce75987945c45d74e214c2d3ff02211d226ceaf882e651216a39617087f139949bcbe06298d523d396f88899851c",
  "expiresAt": 0
}
```

#### Step 4: execute transaction in metamask

Purchase function ABI

```json
[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "externalId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "expiresAt",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "nonce",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "extra",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "referrer",
            "type": "address"
          }
        ],
        "internalType": "struct Params",
        "name": "params",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "enum TokenType",
            "name": "tokenType",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "internalType": "struct Asset",
        "name": "item",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "enum TokenType",
            "name": "tokenType",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "token",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "internalType": "struct Asset",
        "name": "price",
        "type": "tuple"
      },
      {
        "internalType": "bytes",
        "name": "signature",
        "type": "bytes"
      }
    ],
    "name": "purchaseRaffle",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
]
```

```typescript
import { BigNumber, Contract, utils, ZeroAddress } from "ethers";

const instance = new Contract(GEMUNION_EXCHNAGE_ADDR, RafflePurchaseABI, Signer);

const onClick = () => instance.purchaseRaffle(
  {
    externalId: round.id,
    expiresAt: sign.expiresAt,
    nonce: utils.arrayify(sign.nonce),
    extra: utils.formatBytes32String("0x"),
    receiver: round.contract.address,
    referrer: ZeroAddress,
  },
  {
    tokenType: Object.values(TokenType).indexOf(TokenType.ERC721),
    token: round.ticketContract.address,
    tokenId: "0",
    amount: "1",
  },
  round.price.components.map(component => ({
    tokenType: Object.values(TokenType).indexOf(component.tokenType),
    token: component.contract.address,
    tokenId: component.template.tokens[0].tokenId,
    amount: component.amount,
  }))[0],
  sign.signature,
  {
    value: round.price.components.reduce((memo, current) => {
      if (current.tokenType === TokenType.NATIVE) {
        return memo.add(current.amount);
      }
      return memo;
    }, BigNumber.from(0)),
  },
);
```
