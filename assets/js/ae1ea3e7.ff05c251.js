"use strict";(self.webpackChunkethberry_github_io=self.webpackChunkethberry_github_io||[]).push([[3387],{51615:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=o(74848),n=o(28453);const s={hide_table_of_contents:!0,sidebar_position:1},a="Firebase",r={id:"miscellaneous/authorization/firebase",title:"Firebase",description:"Firebase login provider is a part of an integration with Google Cloud. Basically, it is an aggregator of other login providers",source:"@site/api/miscellaneous/authorization/firebase.md",sourceDirName:"miscellaneous/authorization",slug:"/miscellaneous/authorization/firebase",permalink:"/api/miscellaneous/authorization/firebase",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{hide_table_of_contents:!0,sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Authorization providers",permalink:"/api/category/authorization-providers"},next:{title:"Cognito",permalink:"/api/miscellaneous/authorization/cognito"}},l={},d=[{value:"Web",id:"web",level:2},{value:"Desktop",id:"desktop",level:2},{value:"Mobile",id:"mobile",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const i={h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.RP)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"firebase",children:"Firebase"})}),"\n",(0,t.jsx)(i.p,{children:"Firebase login provider is a part of an integration with Google Cloud. Basically, it is an aggregator of other login providers\nincluding but not limited to Google, Facebook, Twitter, Game Center, etc. It also has a built-in function for 2FA (\ntwo-factor authorizations) like emails and SMS. So why would you need such a complex system to authorize users? Because\npretty match every game aims for several platforms - web, desktop, mobile."}),"\n",(0,t.jsx)(i.p,{children:"The main advantages of Firebase are"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"connection to social networks (Google, Facebook, Apple)"}),"\n",(0,t.jsx)(i.li,{children:"connection to gaming platforms (Google Play, Game Center)"}),"\n",(0,t.jsx)(i.li,{children:"builtin 2FA (two-factor authorizations)"}),"\n",(0,t.jsx)(i.li,{children:"builtin localization"}),"\n",(0,t.jsx)(i.li,{children:"builtin password recovery flow"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"web",children:"Web"}),"\n",(0,t.jsx)(i.p,{children:"This is the easiest way to authorize users. Web platform uses all kinds of auth strategies"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"1st parties (login/password, metamask, biometric)"}),"\n",(0,t.jsx)(i.li,{children:"3rd parties (Google, Facebook, Twitter)"}),"\n",(0,t.jsx)(i.li,{children:"different by transport (Session, JWT, JWKS, GraphQL)"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"All of these strategies provide different information about the user. For example, Twitter does not provide user email, so\nthe system should rely on some sort of unique ID to identify users. While metamask provides only a user wallet, which makes it\ndifficult to make a personalized appeal"}),"\n",(0,t.jsx)(i.h2,{id:"desktop",children:"Desktop"}),"\n",(0,t.jsx)(i.p,{children:"This platform is pretty much the same as the web except it is built on Unity/Unreal (or any other) framework, that has its own\necosystem of integration with cloud providers. It also adds the ability to use Google Play and Game Center as login providers\nbecause an application is capable to store certificates required for connection."}),"\n",(0,t.jsx)(i.h2,{id:"mobile",children:"Mobile"}),"\n",(0,t.jsx)(i.p,{children:"This is the trickiest way that uses mostly Google Play and Game Center. The upside of this approach - it lets users play\nusing only their device, without the creation of password or social network account. The downside is - it does not provide\nany meaningful information."}),"\n",(0,t.jsx)(i.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(i.p,{children:"Wend up having 3 types of unique identification"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"email"})," is used by social networks"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"wallet"})," is used by Metamask and Wallet Connect"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"hash"})," is used by Google Play and Game Center"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"It is almost impossible to match users by these parameters unless you are Google and tracking every user on every site.\nOnce the user logs in on any site using firebase its data is added to global Google's profile and can be used on any other\nsite for authorization."}),"\n",(0,t.jsx)(i.p,{children:"We use this technology to share user data between mobile application where the user logs in using id given by Game Center\nand web store where the user logs in using login/password"})]})}function h(e={}){const{wrapper:i}={...(0,n.RP)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,i,o)=>{o.d(i,{RP:()=>s,xA:()=>r});var t=o(96540);const n=t.createContext({});function s(e){const i=t.useContext(n);return t.useMemo((()=>"function"==typeof e?e(i):{...i,...e}),[i,e])}const a={};function r({components:e,children:i,disableParentContext:o}){let r;return r=o?"function"==typeof e?e({}):e||a:s(e),t.createElement(n.Provider,{value:r},i)}}}]);