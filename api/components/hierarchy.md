---
sidebar_position: 2
---

# Hierarchy

Hierarchy of entities consists of 4 levels, some entities does not make sense, so they are virtual

|          | ERC20 | ERC721 | ERC998 | ERC1155 |
|----------|-------|--------|--------|---------|
| contract |   ✔   |    ✔   |    ✔   |    ✔    |
| template |   ✘   |    ✔   |    ✔   |    ✔    |
| token    |   ✘   |    ✔   |    ✔   |    ✘    |
| balance  |   ✔   |    ✘   |    ✘   |    ✔    |


For example token entity of ERC20 and ERC1155 has no metadata thus they are redundant
As well as balance entity for erc721 and ERC998 always has amount equal to 1
