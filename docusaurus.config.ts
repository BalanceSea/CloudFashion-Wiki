import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'CloudFashion',
  tagline: '✨ 高版本 Minecraft 时装系统',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://balancesea.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/CloudFashion-Wiki/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BalanceSea',
  projectName: 'CloudFashion-Wiki',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/BalanceSea/CloudFashion-Wiki/edit/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'CloudFashion 文档',
      logo: {
        alt: 'CloudFashion Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        {
          href: 'https://github.com/BalanceSea/CloudFashion',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'CloudFashion 文档',
              to: '/docs/cloudfashion/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: '作者 QQ：3643203568',
              href: 'https://qm.qq.com/',
            },
            {
              label: 'GitHub 仓库',
              href: 'https://github.com/BalanceSea/CloudFashion',
            },
            {
              label: '问题反馈',
              href: 'https://github.com/BalanceSea/CloudFashion/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: '安装指南',
              to: '/docs/cloudfashion/installation',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/BalanceSea/CloudFashion',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MoutainSeaL · CloudFashion`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
