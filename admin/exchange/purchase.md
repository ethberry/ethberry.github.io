---
hide_table_of_contents: true
sidebar_position: 2
---

# Purchase

Purchase is an exchange mechanism that enables users to buy [asset](/admin/miscellaneous/asset) for
currency [tokens](/admin/miscellaneous/asset). The user can only
receive one asset per transaction, and at least one asset must be spend as payment. 

> **NOTE!** <br/>
> While it's possible to use multiple assets for payment, it's important
to note that using too many payment assets can significantly increase the gas cost of the transaction and may even reach
the network limit.

In order to create an asset for selling, you must first create template (such
as [ERC721](/admin/hierarchy/ERC721/template/)) according to the asset that you want to sell. Once the template is
created and the `status` is set to
ACTIVE, the asset will be visible on the [marketplace](/market/hierarchy/ERC721/template/) and would be available for
purchasing. Important to note that if you
set Status to 'HIDDEN', it would not be available for use in **Purchase** but would be available on *
*[Promo](/admin/mechanics-simple/promo)** mechanic.

