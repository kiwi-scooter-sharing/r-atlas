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
  docs: {
    'Getting started': [
      'introduction'
    ],
    'Components': [
      'components-map-container',
      'components-feature',
      'components-geojson',
      'components-tile-layer',
      {
        type: "category",
        label: "Geometry",
        items: [
          'components-geometry-line-string',
          'components-geometry-point',
          'components-geometry-polygon',
        ]
      }
    ],
    
    'Examples': [],
  }
};

module.exports = sidebars;
