module.exports = {
  title: "Hackney Our Ways Of Working",
  tagline:
    "A guide on Hackney's development practices, and how to follow them",
  url: "https://github.com/LBHackney-IT/ways-of-working",
  baseUrl: "/ways-of-working/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "lbhackney-it",
  projectName: "ways-of-working",
  themeConfig: {
    prism: {
      additionalLanguages: ["csharp"],
    },
    navbar: {
      title: "Our ways of working",
      logo: {
        alt: "Our ways of working",
        src: "img/logo-long.svg",
      },
      items: [
        {
          href: "https://github.com/LBHackney-IT/ways-of-working",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    algolia: {
      apiKey: '4a83a5c4eb60fa0e4dae66ff84553e02',
      indexName: 'hackney',
      placeholder: 'Search ways-of-working'
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Made by HackIT.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/LBHackney-IT/ways-of-working/edit/master/",
        },
        theme: {
          customCss: [require.resolve("./src/docs.scss")],
        },
      },
    ],
  ],
  clientModules: [require.resolve("./src/docs.js")],
  plugins: ["docusaurus-plugin-sass"],
};
