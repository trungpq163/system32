module.exports = {
  title: "system32",
  tagline: "An extraordinary document on the Internet contains some things!",
  url: "http://system32.vercel.app",
  baseUrl: "/",
  trailingSlash: true,
  favicon: "img/system32.gif",
  organizationName: "system32",
  projectName: "system32",
  onBrokenLinks: "ignore",
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    navbar: {
      title: "system32",
      logo: {
        alt: "",
        src: "img/system32.gif",
      },
      items: [
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: "Development by admin32 with ❤️",
      links: [],
    },
    algolia: {
      appId: "8E6LWK96JA",
      apiKey: "0285def6cfdb5ff895b665c604f0eead",
      indexName: "docusaurus-2",
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "./docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-2HG3HR0JJS",
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [],
      },
    ],
  ],
  scripts: [],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "jp"],
    localeConfigs: {
      jp: {
        label: "日本語",
        direction: "ltr",
      },
    },
  },
};
