// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: "Gemunion Framework",
  tagline: "An advanced framework for building decentralized games",
  url: "https://gemunion.io",
  baseUrl: "/",
  trailingSlash: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "gemunion", // Usually your GitHub org/user name.
  projectName: "gemunion.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    ["@docusaurus/plugin-content-pages", {}],
    ["@docusaurus/theme-classic", {
      customCss: require.resolve("./src/css/custom.css"),
    }],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "api",
        path: "api",
        routeBasePath: "api",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "admin",
        path: "admin",
        routeBasePath: "admin",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "market",
        path: "market",
        routeBasePath: "market",
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    metadata: [{ name: "twitter:card", content: "summary" }],
    navbar: {
      title: "GEMUNION",
      logo: {
        alt: "Gemunion Framework",
        src: "img/logo.png",
      },
      items: [
        {
          type: "doc",
          docId: "overview",
          docsPluginId: "admin",
          label: "Admin",
        },
        {
          type: "doc",
          docId: "overview",
          docsPluginId: "market",
          label: "Market",
        },
        {
          type: "doc",
          docId: "installation",
          docsPluginId: "api",
          label: "API",
        },
        {
          href: "https://github.com/GemunIon/framework",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} GEMUNION. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
