---
hide_table_of_contents: true
sidebar_position: 2
---

# GAME microservice

`GAME-MS` is intended as a gateway between merchant's `game server` and the blockchain. It is not meant to be accessed from
Unity/Unreal app. To access it from Unity/Unreal app the developer has to proxy all calls through `game server` and hide the API key.

The `game server` can connect to the `GAME-MS` using API key as a Bearer token in request header.

Full list of endpoints available at [swagger documentation](https://game-api.ethberry.io/swagger)
