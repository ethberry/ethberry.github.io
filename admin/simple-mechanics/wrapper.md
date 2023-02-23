---
sidebar_position: 8
---

# Wrapper

The main idea of the **Wrapper** mechanic is that it can **wrap an unlimited amount of [assets](/admin/miscellaneous/asset/)** into a single token. The **Wrap token** represents all of the [assets](/admin/miscellaneous/asset/) that were wrapped, and can be transferred to anyone in a single transfer. When a user wants to unwrap the Wrap token, they can call the "**unpack**" function and pass the **token ID** of the Wrap token. This will transfer all of the wrapped tokens back to the owner's address, and the *Wrap token* will be **burned**.

To wrap tokens the user needs to provide an **array of [assets](/admin/miscellaneous/asset/)** representing the tokens that should be wrapped, as well as an **account address** that will receive the Wrap token. The Wrapper mechanic uses the **[Transfer](/admin/category/exchange/) functionality** to receive an **array of [assets](/admin/miscellaneous/asset/)** from the **sender's account address**. The received assets are then stored in the **contract address** of the created Wrap token. When the Wrap token is unwrapped, the Wrapper mechanic retrieves the stored array of assets and uses it to transfer the wrapped tokens back to the owner's account address.
