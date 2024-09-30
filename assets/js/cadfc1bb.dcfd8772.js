"use strict";(self.webpackChunkethberry_github_io=self.webpackChunkethberry_github_io||[]).push([[6585],{57573:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var o=n(74848),t=n(28453);const r={hide_table_of_contents:!0,sidebar_position:6},i="Access Control",c={id:"miscellaneous/access-contol",title:"Access Control",description:"This is implementation of permission system from OpenZeppelin",source:"@site/admin/miscellaneous/access-contol.md",sourceDirName:"miscellaneous",slug:"/miscellaneous/access-contol",permalink:"/admin/miscellaneous/access-contol",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{hide_table_of_contents:!0,sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"Metadata",permalink:"/admin/miscellaneous/metadata"},next:{title:"User Roles",permalink:"/admin/miscellaneous/user-roles"}},l={},a=[{value:"Roles",id:"roles",level:2}];function d(e){const s={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.RP)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"access-control",children:"Access Control"})}),"\n",(0,o.jsxs)(s.p,{children:["This is implementation of permission system from ",(0,o.jsx)(s.a,{href:"https://docs.openzeppelin.com/contracts/5.x/access-control#role-based-access-control",children:"OpenZeppelin"})]}),"\n",(0,o.jsxs)(s.p,{children:["In the process of deployment the ",(0,o.jsx)(s.a,{href:"/admin/miscellaneous/contract-manager/",children:"Contract Manager"})," assigns required roles to new contracts.\nThese roles later could be added or removed by you in the Admin Panel."]}),"\n",(0,o.jsx)(s.h2,{id:"roles",children:"Roles"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"DEFAULT_ADMIN_ROLE"})," - Automatically assigned to contract deployer and allows to assign other roles"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"MINTER_ROLE"})," - Automatically assigned to ",(0,o.jsx)(s.a,{href:"/market/overview/",children:"Marketplace"})," contract, so it could mint and sell new items"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"PAUSER_ROLE"})," - Allows to pause some contracts, for example pause ",(0,o.jsx)(s.a,{href:"/admin/mechanics-marketing/claim/",children:"Claim"})," before it could be open"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"METADATA_ROLE"})," - Allows to update the metadata of the NFT."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"PREDICATE_ROLE"})," - Specific to ",(0,o.jsx)(s.a,{href:"https://docs.polygon.technology/docs/develop/ethereum-polygon/mintable-assets/",children:"Polygon network"})]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.strong,{children:"DEPOSITOR_ROLE"})," - Specific to ",(0,o.jsx)(s.a,{href:"https://docs.polygon.technology/docs/develop/ethereum-polygon/mintable-assets/",children:"Polygon network"})]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["You can add or revoke any role for specific contract via ",(0,o.jsx)(s.a,{href:"/admin/hierarchy/contract-actions",children:"contract actions"}),"."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:n(52929).A+"",width:"2232",height:"578"})})]})}function h(e={}){const{wrapper:s}={...(0,t.RP)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},52929:(e,s,n)=>{n.d(s,{A:()=>o});const o=n.p+"assets/images/grant_role-72c5c5830258751d8e6f3321698abe17.png"},28453:(e,s,n)=>{n.d(s,{RP:()=>r,xA:()=>c});var o=n(96540);const t=o.createContext({});function r(e){const s=o.useContext(t);return o.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function c({components:e,children:s,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||i:r(e),o.createElement(t.Provider,{value:c},s)}}}]);