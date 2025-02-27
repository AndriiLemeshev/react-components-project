export const preset = 'ts-jest';
export const testEnvironment = 'jsdom';
export const setupFilesAfterEnv = ['jest-environment-jsdom'];
export const moduleNameMapper = {
  '\\.css$': 'identity-obj-proxy', //Handle css imports.
};
export const globals = {
  "ts-jest": {
    tsconfig: "tsconfig.app.json",
  },
};
