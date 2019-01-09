const path = require('path');

const getComponentPathLine = (componentPath) => {
    let name = path.basename(componentPath, '.tsx');
    name = path.basename(name, '.tsx');
    const dir = path.dirname(componentPath).replace(/\\/g, "/");

    if (dir.startsWith("templates"))
        return null;

    return `import { ${name} } from "@mindbox/ui-kit/${dir}";`
}

module.exports = {
    title: "Mindbox UI kit",
    styleguideDir: "docs",

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

    sections: [{
            name: 'Introduction',
            content: 'styleguide/introduction.md'
        },
        {
            name: 'Documentation',
            sections: [{
                    name: 'Installation',
                    content: 'styleguide/installation.md'
                },
                {
                    name: 'Full-page examples',
                    content: 'styleguide/examples.md'
                },
            ]
        },
        {
            name: 'UI Components',
            content: 'styleguide/ui.md',
            components: 'src/**/[A-Z]*.{ts,tsx}'
        }
    ]
}