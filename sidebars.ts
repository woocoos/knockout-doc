import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

const sidebars: SidebarsConfig = {
  // But you can create a sidebar manually
  md: [  
    'guide',
    {
      type: 'category',
      label: '指南',
      items: ['quickstart','dev-config'],
      collapsed: false,
    },    
    {
      type: 'category',
      label: '概念',
      items: [ 
        {
          type: 'category',
          label: '身份和访问管理',
          link: {
            type: 'doc',
            id: 'iam/iam-index',
          },
          items: [
            'iam/ko-identity','iam/directory','iam/access-control'
          ],
        },
        "file",
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: '开发者工具',
      items: [
        'tools/kocli'
      ]
    },
  ],
};

module.exports = sidebars;
