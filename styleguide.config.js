const path = require('path');

const getComponentPathLine = (componentPath) => {
    let name = path.basename(componentPath, '.tsx');
    name = path.basename(name, '.tsx');
    const dir = path.dirname(componentPath).replace(/\\/g, "/");
    return `import { ${name} } from "@mindbox/ui-kit/${dir}";`
}

module.exports = {
    title: "Mindbox UI kit",

    propsParser: require('react-docgen-typescript').parse,
    webpackConfig: require('./webpack.config.js'),

    getComponentPathLine: getComponentPathLine,
    
    template: {
        head: {
          links: [{
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=PT+Sans'
          }]
        }
      },
      theme: {
        fontFamily: {
          base: '"PT Sans", sans-serif;'
        }
      },

    sections: [
        {
          name: 'Introduction',
          content: 'docs/introduction.md'
        },
        {
          name: 'Documentation',
          sections: [
            {
              name: 'Installation',
              content: 'docs/installation.md',
              description: 'The description for the installation section'
            },
            {
              name: 'Configuration',
              content: 'docs/configuration.md'
            }
          ]
        },
        {
          name: 'UI Components',
          content: 'docs/ui.md',
          components: 'components/**/[A-Z]*.{tsx}'
        }
      ]
}
