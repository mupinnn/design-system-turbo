module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-mupinnn`
  extends: ['acme'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
