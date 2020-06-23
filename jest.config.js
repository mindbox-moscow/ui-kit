module.exports = {
	roots: ["<rootDir>/src"],
	transform: {
		"^.+\\.tsx?$": "ts-jest",
		"^.+\\.scss$": "<rootDir>/jest/cssTransform.ts"
	},
	testMatch: [
		"<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
		"<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
	],
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	globals: {
		"ts-jest": {
			diagnostics: {
				warnOnly: true
			}
		}
	},
	globalSetup: "<rootDir>/jest/setup.js",
	globalTeardown: "<rootDir>/jest/teardown.js",
	setupFilesAfterEnv: ["<rootDir>/jest/setupTests.ts"],
	snapshotSerializers: ["enzyme-to-json/serializer"],
	preset: "jest-puppeteer-docker",
	testEnvironment: "jsdom"
};
