import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'cloudfashion/intro',
    {
      type: 'category',
      label: '使用指南',
      items: [
        'cloudfashion/installation',
        'cloudfashion/commands',
        'cloudfashion/gui',
      ],
    },
    {
      type: 'category',
      label: '配置参考',
      items: ['cloudfashion/configuration'],
    },
    'cloudfashion/troubleshooting',
  ],
};

export default sidebars;
