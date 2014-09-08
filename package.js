Package.describe({
  summary: 'Expressive, dynamic, robust CSS',
  version: "0.44.0",
  git: "https://github.com/adithep/alpha-stylus.git",
  name: "bads:alpha-stylus"
});

Package._transitional_registerBuildPlugin({
  name: "compileStylus",
  use: [],
  sources: [
    'plugin/compile-stylus.js'
  ],
  npmDependencies: { stylus: "0.47.3", nib: "1.0.3", jeet: "5.3.0", rupture: "0.3.0", alpmixins: "0.1.0" }
});
