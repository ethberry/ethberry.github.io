---
hide_table_of_contents: true
sidebar_position: 1
---

# Firebase

Firebase login provider is a part of an integration with Google Cloud. Basically, it is an aggregator of other login providers
including but not limited to Google, Facebook, Twitter, Game Center, etc. It also has a built-in function for 2FA (
two-factor authorizations) like emails and SMS. So why would you need such a complex system to authorize users? Because
pretty match every game aims for several platforms - web, desktop, mobile.

The main advantages of Firebase are
- connection to social networks (Google, Facebook, Apple)
- connection to gaming platforms (Google Play, Game Center)
- builtin 2FA (two-factor authorizations)
- builtin localization
- builtin password recovery flow

## Web

This is the easiest way to authorize users. Web platform uses all kinds of auth strategies

- 1st parties (login/password, metamask, biometric)
- 3rd parties (Google, Facebook, Twitter)
- different by transport (Session, JWT, JWKS, GraphQL)

All of these strategies provide different information about the user. For example, Twitter does not provide user email, so
the system should rely on some sort of unique ID to identify users. While metamask provides only a user wallet, which makes it
difficult to make a personalized appeal

## Desktop

This platform is pretty much the same as the web except it is built on Unity/Unreal (or any other) framework, that has its own
ecosystem of integration with cloud providers. It also adds the ability to use Google Play and Game Center as login providers
because an application is capable to store certificates required for connection.

## Mobile

This is the trickiest way that uses mostly Google Play and Game Center. The upside of this approach - it lets users play
using only their device, without the creation of password or social network account. The downside is - it does not provide
any meaningful information.

## Conclusion

Wend up having 3 types of unique identification

- **email** is used by social networks
- **wallet** is used by Metamask and Wallet Connect
- **hash** is used by Google Play and Game Center

It is almost impossible to match users by these parameters unless you are Google and tracking every user on every site.
Once the user logs in on any site using firebase its data is added to global Google's profile and can be used on any other
site for authorization.

We use this technology to share user data between mobile application where the user logs in using id given by Game Center
and web store where the user logs in using login/password
