const execSync = require("child_process").execSync;
const semver = require("semver");
const fs = require("fs");

const exec = (command) => execSync(command, {encoding: 'utf8'});

const version = exec("npm show @mindbox/ui-kit version");

const patch = semver.patch(version);
const patchedVersion = `${semver.major(version)}.${semver.minor(version)}.${(patch + 1)}`;

let package = require("../package.json");
package.version = patchedVersion;

fs.writeFileSync("./package.json", JSON.stringify(package, null, 2));

console.log("Current npm version:", version);
console.log("Publishing version:", patchedVersion, JSON.stringify(package, null, 2));
