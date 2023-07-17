---
sidebar_position: 2
---

# Claim

Game server can create automatic claims by sending POST request to /claims

```json
{
  "account": "0x61284003E50b2D7cA2B95F93857abB78a1b0F3Ca",
  "item": {
    "components": [
      {
        "tokenType": "ERC721",
        "contractId": 1301,
        "templateId": 130101,
        "amount": 1
      }
    ]
  },
  "endTimestamp": "2025-01-01T00:00:00.000Z"
}
```

Request example

```bash
curl -X 'POST' \
  'http://localhost:3012/claims' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer 11111111-2222-3333-4444-555555555555' \
  -H 'Content-Type: application/json' \
  -d '{
  "account": "0x61284003E50b2D7cA2B95F93857abB78a1b0F3Ca",
  "item": {
    "components": [
      {
        "tokenType": "ERC721",
        "contractId": 1301,
        "templateId": 130101,
        "amount": 1
      }
    ]
  },
  "endTimestamp": "2025-01-01T00:00:00.000Z"
}'
```

Response example

```json
{
  "id": 511,
  "createdAt": "2023-05-10T11:29:48.255Z",
  "updatedAt": "2023-05-10T11:29:48.379Z",
  "merchantId": 1,
  "account": "0x61284003e50b2d7ca2b95f93857abb78a1b0f3ca",
  "itemId": 50000001,
  "claimStatus": "NEW",
  "signature": "0x6aaaeea10a5dd4f9d41c1e1661dc4261a3def75c4cc9ccc4e1a719c3b6d4ad492afae7aee5e0a1a021fc7a43064700691259626c2f57d810358f4e6a6ec439af1c",
  "nonce": "0xef102b2cb48af3447487cc1145a9f882437e1be489639a242f0f764e4d1d7f1a",
  "endTimestamp": "2025-01-01T00:00:00.000Z",
  "item": {
    "id": 50000001,
    "components": [
      {
        "id": 182,
        "tokenType": "ERC721",
        "contractId": 1301,
        "templateId": 130101,
        "amount": "1",
        "template": {
          "id": 130101,
          "createdAt": "2023-05-10T11:27:21.755Z",
          "updatedAt": "2023-05-10T11:27:21.755Z",
          "title": "Physical resistance",
          "description": "{\"blocks\":[{\"key\":\"e9n5e\",\"text\":\"bold\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":4,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"dfijs\",\"text\":\"italic\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":6,\"style\":\"ITALIC\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"fdeqa\",\"text\":\"underscore\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":10,\"style\":\"UNDERLINE\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"4uhh1\",\"text\":\"strikethrough\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":13,\"style\":\"STRIKETHROUGH\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "imageUrl": "https://firebasestorage.googleapis.com/v0/b/gemunion-firebase.appspot.com/o/DO_NOT_REMOVE_LOGO.png?alt=media&token=85c376a8-33a0-4b6b-9285-2b9022287289",
          "priceId": 130101,
          "cap": "0",
          "amount": "1",
          "cid": null,
          "templateStatus": "ACTIVE",
          "contractId": 1301
        },
        "contract": {
          "id": 1301,
          "createdAt": "2023-05-10T11:27:21.639Z",
          "updatedAt": "2023-05-10T11:27:21.639Z",
          "address": "0x7ebce723841e46445bba7d07233fb89dc7f2acad",
          "chainId": 13378,
          "title": "RUNE (simple)",
          "description": "{\"blocks\":[{\"key\":\"e9n5e\",\"text\":\"bold\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":4,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"dfijs\",\"text\":\"italic\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":6,\"style\":\"ITALIC\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"fdeqa\",\"text\":\"underscore\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":10,\"style\":\"UNDERLINE\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"4uhh1\",\"text\":\"strikethrough\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":13,\"style\":\"STRIKETHROUGH\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
          "merchantId": 1,
          "imageUrl": "https://firebasestorage.googleapis.com/v0/b/gemunion-firebase.appspot.com/o/DO_NOT_REMOVE_LOGO.png?alt=media&token=85c376a8-33a0-4b6b-9285-2b9022287289",
          "name": "RUNE",
          "symbol": "GEM721",
          "decimals": 0,
          "fromBlock": 0,
          "royalty": 100,
          "baseTokenURI": "http://localhost:3011/metadata/",
          "parameters": {},
          "isPaused": false,
          "contractStatus": "ACTIVE",
          "contractType": "ERC721",
          "contractFeatures": [],
          "contractModule": "HIERARCHY"
        }
      }
    ]
  }
}
```
