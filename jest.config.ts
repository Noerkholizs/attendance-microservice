export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        }
    },
    collectCoverageFrom: ["src/**/*.ts"],
}