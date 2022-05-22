module.exports = {
	cacheDirectory: '.jest-cache',
	coverageDirectory: '.jest-coverage',
	coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
	coverageReporters: ['html', 'text'],
	coverageThreshold: {
		global: {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100
		}
	},
	testEnvironment: "jsdom",
	testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
	setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
	moduleNameMapper: {
		"\\.(css|less|scss|sass)$": "identity-obj-proxy"
	}
};