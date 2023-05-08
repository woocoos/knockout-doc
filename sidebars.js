/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
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
      items: ['account','directory'],
      collapsed: false,
    },
  ],
};

module.exports = sidebars;
