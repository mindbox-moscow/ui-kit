const path = require('path');

const getComponentPathLine = (componentPath) => {
    let name = path.basename(componentPath, '.tsx');
    name = path.basename(name, '.tsx');
    const dir = path.dirname(componentPath).replace(/\\/g, "/");
    return `import { ${name} } from "@mindbox/ui-kit/${dir}";`
}

module.exports = {
    title: "Mindbox UI kit",
    styleguideDir: "docs",

    propsParser: require('react-docgen-typescript').parse,
    webpackConfig: require('./webpack.config.js'),

    getComponentPathLine: getComponentPathLine,

    sections: [
        {
          name: 'Introduction',
          content: 'styleguide/introduction.md'
        },
        {
          name: 'Documentation',
          sections: [
            {
              name: 'Installation',
              content: 'styleguide/installation.md',
              description: 'The description for the installation section'
            },
            {
              name: 'Configuration',
              content: 'styleguide/configuration.md'
            }
          ]
        },
        {
          name: 'UI Components',
          content: 'styleguide/ui.md',
          components: 'components/**/[A-Z]*.{tsx}'
        }
      ]
}
