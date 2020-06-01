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
	setupFilesAfterEnv: ["<rootDir>/jest/setupTests.ts"],
	snapshotSerializers: ["enzyme-to-json/serializer"]
};
