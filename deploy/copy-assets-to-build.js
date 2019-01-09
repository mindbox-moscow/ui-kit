const cpy = require('cpy');

(async () => {
    await cpy(['**/*', '!**/*{.md,.js,.jsx,.ts,.tsx}'], '../build', {
        parents: true,
        cwd: "src"
    });
    console.log('NPM:', 'assets copied');

    await cpy(['package.json'], 'build');
    console.log('NPM:', 'package.json copied');
})();
