---
sidebar_position: 0
---

# Hierarchy

Hierarchy of entities consists of 4 levels, some entities does not make sense, so they are virtual

|             | NATIVE | ERC20 | ERC721 | ERC998 | ERC1155 |
|-------------|--------|-------|--------|--------|---------|
| contract    |    ✔   |   ✔   |    ✔   |    ✔   |    ✔    |
| template    |    ✘   |   ✘   |    ✔   |    ✔   |    ✔    |
| token       |    ✘   |   ✘   |    ✔   |    ✔   |    ✘    |
| balance     |    ✔   |   ✔   |    ✘   |    ✘   |    ✔    |
| composition |    ✘   |   ✘   |    ✘   |    ✔   |    ✘    |


For example token entity of ERC20 and ERC1155 has no metadata thus they have no template, as well as balance entity for ERC721 and ERC998 always has amount equal to 1


<iframe width="560" height="315" src="https://www.youtube.com/embed/HbtCBVdwBGA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
