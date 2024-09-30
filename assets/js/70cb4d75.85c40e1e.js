"use strict";(self.webpackChunkethberry_github_io=self.webpackChunkethberry_github_io||[]).push([[2481],{32697:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(74848),a=t(28453);const i={hide_table_of_contents:!0,sidebar_position:2},c="Hierarchy interfaces",s={id:"interfaces/hierarchy",title:"Hierarchy interfaces",description:"These interfaces reflect hierarchy of entities related to core blockchain functionality",source:"@site/api/interfaces/hierarchy.md",sourceDirName:"interfaces",slug:"/interfaces/hierarchy",permalink:"/api/interfaces/hierarchy",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{hide_table_of_contents:!0,sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Exchange interfaces",permalink:"/api/interfaces/exchange"},next:{title:"Claim interfaces",permalink:"/api/interfaces/mechanics/claim"}},o={},l=[];function u(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.RP)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"hierarchy-interfaces",children:"Hierarchy interfaces"})}),"\n",(0,r.jsx)(n.p,{children:"These interfaces reflect hierarchy of entities related to core blockchain functionality"}),"\n",(0,r.jsxs)(n.p,{children:["For more information ",(0,r.jsx)(n.a,{href:"http://localhost:3000/admin/hierarchy/",children:"see table"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'export enum ContractStatus {\n  ACTIVE = "ACTIVE",\n  INACTIVE = "INACTIVE",\n  NEW = "NEW",\n}\n\nexport declare enum TokenType {\n  NATIVE = "NATIVE",\n  ERC20 = "ERC20",\n  ERC721 = "ERC721",\n  ERC998 = "ERC998",\n  ERC1155 = "ERC1155"\n}\n\nexport enum ModuleType {\n  HIERARCHY = "HIERARCHY",\n  MYSTERY = "MYSTERY",\n  LOTTERY = "LOTTERY",\n  RAFFLE = "RAFFLE",\n  VESTING = "VESTING",\n  STAKING = "STAKING",\n  WAITLIST = "WAITLIST",\n}\n\nexport enum ContractSecurity {\n  "OWNABLE" = "OWNABLE",\n  "ACCESS_CONTROL" = "ACCESS_CONTROL",\n}\n\nexport interface IContract extends ISearchable {\n  address: string;\n  chainId: number;\n  imageUrl: string;\n  name: string;\n  symbol: string;\n  decimals: number;\n  royalty: number;\n  baseTokenURI: string;\n  parameters: Record<string, string | number>;\n  isPaused: boolean;\n  contractStatus: ContractStatus;\n  contractType: TokenType | null;\n  contractFeatures: Array<ContractFeatures>;\n  contractModule: ModuleType;\n  contractSecurity: ContractSecurity;\n  templates?: Array<ITemplate>;\n  merchantId: number;\n  merchant?: IMerchant;\n}\n\nexport enum TemplateStatus {\n  ACTIVE = "ACTIVE",\n  HIDDEN = "HIDDEN",\n  INACTIVE = "INACTIVE",\n}\n\nexport interface ITemplate extends ISearchable {\n  imageUrl: string;\n  title: string;\n  price?: IAsset;\n  priceId: number;\n  cap: string;\n  amount: string;\n  cid: string | null;\n  templateStatus: TemplateStatus;\n  contractId: number;\n  contract?: IContract;\n  tokens?: Array<IToken>;\n}\n\nexport enum TokenStatus {\n  MINTED = "MINTED",\n  BURNED = "BURNED",\n}\n\nexport interface IToken extends IIdDateBase {\n  imageUrl: string | null;\n  metadata: Record<string, string | number>;\n  tokenId: string;\n  royalty: number;\n  cid: string | null;\n  tokenStatus: TokenStatus;\n  templateId: number;\n  template?: ITemplate;\n  balance?: Array<IBalance>;\n}\n\nexport interface IBalance extends IIdDateBase {\n  account: string;\n  amount: string;\n  tokenId: number;\n  token?: IToken;\n  targetId: number | null;\n  target?: IToken;\n}\n\n'})})]})}function d(e={}){const{wrapper:n}={...(0,a.RP)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{RP:()=>i,xA:()=>s});var r=t(96540);const a=r.createContext({});function i(e){const n=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function s({components:e,children:n,disableParentContext:t}){let s;return s=t?"function"==typeof e?e({}):e||c:i(e),r.createElement(a.Provider,{value:s},n)}}}]);