const { teardown: teardownPuppeteer } = require("jest-puppeteer-docker");

module.exports = async jestConfig => {
	await teardownPuppeteer(jestConfig);
	// any stuff you need to do can go here
};
