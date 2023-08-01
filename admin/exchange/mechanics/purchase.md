---
sidebar_position: 1
---

# Purchase

Purchase is an exchange mechanism that enables users to buy [asset](/admin/miscellaneous/asset) for other [assets](/admin/miscellaneous/asset). The user can only receive one asset per transaction, and at least one asset must be transferred for payment. While it's possible to use multiple assets for payment, but it's important to be cautious since using too many payment assets can significantly increase the gas cost of the transaction.

In order to create an asset for selling, you must first fullfill template information (such as [ERC721](http://), [ERC1155](http://)) according to the asset that you want to sell. Once the template is complete and the Status is set to Active, the asset will be visible on the marketplace and would be availabe for purchasing. Important to note that if you set Status to Hide, it would not be available for use in **Purchase** but would be available on **[Drop](/admin/mechanics-simple/drop)** mechanic.

Whenever a user purchases NFT token (ERC721, ERC998, ERC1155), a **new** NFT is minted and sent to their address. However, if the token is Native or ERC20, it is **deducted** from the contract address.
