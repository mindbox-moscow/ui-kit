const { setup: setupPuppeteer } = require("jest-puppeteer-docker");

module.exports = async jestConfig => {
	// any stuff you need to do can go here
	await setupPuppeteer(jestConfig);
};
