---
sidebar_position: 2
---

# GAME microservice

GAME-microservice is intended as a gateway between game's server and the blockchain. It is not meant to be accessed from
Unity/Unreal app. To access it from Unity/Unreal app the developer has to proxy all calls through game server and hide the API key

The game server can connect to the GAME-microservice using API key as a Bearer token in request header.

Request example

```bash
curl -X 'GET' \
  'http://localhost:3012/claims?account=0xfe3b557e8fb62b89f4916b721be55ceb828dbd73&skip=0&take=25' \
  -H 'accept: */*' \
  -H 'Authorization: Bearer 11111111-2222-3333-4444-555555555555'
```

Full list of endpoints available at [swagger documentation](https://game-api.gemunion.io/swagger)
