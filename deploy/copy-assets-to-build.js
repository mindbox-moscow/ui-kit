const cpy = require('cpy');

(async () => {
    await cpy(['**/*', '!**/*{.md,.js,.jsx,.ts,.tsx}'], '../build', {
        parents: true,
        cwd: "components"
    });
    console.log('Assets copied!');

    await cpy(['package.json'], 'build');
    console.log('package.json copied!');
})();
