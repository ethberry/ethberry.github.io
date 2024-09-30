---
hide_table_of_contents: true
sidebar_position: 2
---

# Automated raffle rounds

SaaS platform does not allow merchants to automate raffle rounds because it requires us to collect and store private
keys, and we do not want to take such responsibilities. 

This is how raffle rounds could be automated using our API. Basically it just starts new round with config from the last one.

#### Step 1: get raffle contract

Request

```bash
curl -X 'GET' \
  'https://game-api.ethberry.io/raffle/contracts?skip=0&take=25&chainId=10001' \
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

#### Step 2: execute transaction on blockchain

Copy this JSON to your app

```json
[
  {
    "inputs": [
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
        "name": "ticket",
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
        "internalType": "uint256",
        "name": "maxTicket",
        "type": "uint256"
      }
    ],
    "name": "startRound",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "endRound",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getCurrentRoundInfo",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "roundId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "startTimestamp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "endTimestamp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "maxTicket",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "prizeNumber",
            "type": "uint256"
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
            "name": "acceptedAsset",
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
            "name": "ticketAsset",
            "type": "tuple"
          }
        ],
        "internalType": "struct RaffleRoundInfo",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]
```

This code snippet is a simplified version of server side code we use in our application 

```typescript
import { JsonRpcProvider, Wallet } from "ethers";

const provider = new JsonRpcProvider(JSON_RPC_URL);
const instance = new Contract(constract.address, RaffleABI, new Wallet(PRIVATE_KEY, jsonRpcProvider));
const roundInfo = await instance.getCurrentRoundInfo();

const { roundId, endTimestamp, acceptedAsset, ticketAsset, maxTicket } = roundInfo;

// if this is not the first round
if (BigInt(roundId) !== 0n) {
  // if current round still active - end round
  if (BigInt(endTimestamp) === 0n) {
    await instance.endRound();
  }

  await instance.startRound(acceptedAsset, ticketAsset, maxTicket);
}
```
