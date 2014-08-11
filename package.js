Package.describe({
  summary: 'Expressive, dynamic, robust CSS',
  version: "0.44.0",
  git: "https://github.com/adithep/alpha-stylus.git"
});

Package._transitional_registerBuildPlugin({
  name: "compileStylus",
  use: [],
  sources: [
    'plugin/compile-stylus.js'
  ],
  npmDependencies: { stylus: "0.47.3", nib: "1.0.3", jeet: "5.3.0", rupture: "0.3.0", alpmixins: "0.0.9" }
});

Package.on_test(function (api) {
  api.use(['tinytest', 'alpha-stylus', 'test-helpers', 'templating']);
  api.add_files([
    'stylus_tests.html',
    'stylus_tests.styl',
    'stylus_tests.import.styl',
    'stylus_tests.js'
  ],'client');
});
