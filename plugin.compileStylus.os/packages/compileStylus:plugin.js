(function () {

(function () {

var fs = Npm.require('fs');
var stylus = Npm.require('stylus');
var nib = Npm.require('nib');
var path = Npm.require('path');
var jeet = Npm.require('jeet');
var rupture = Npm.require('rupture');
var alpmixins = Npm.require('alpmixins');
var Future = Npm.require('fibers/future');

Plugin.registerSourceHandler("styl", {archMatching: 'web'}, function (compileStep) {
  var f = new Future();
  stylus(compileStep.read().toString('utf8'))
    .use(nib())
    .use(jeet())
    .use(rupture())
    .use(alpmixins())                                                                     // 10
    .set('filename', compileStep.inputPath)                                          // 11
    // Include needed to allow relative @imports in stylus files                     // 12
    .include(path.dirname(compileStep._fullInputPath))                               // 13
    .render(f.resolver());                                                           // 14
                                                                                     // 15
  try {                                                                              // 16
    var css = f.wait();                                                              // 17
  } catch (e) {                                                                      // 18
    compileStep.error({                                                              // 19
      message: "Stylus compiler error: " + e.message                                 // 20
    });                                                                              // 21
    return;                                                                          // 22
  }                                                                                  // 23
  compileStep.addStylesheet({                                                        // 24
    path: compileStep.inputPath + ".css",                                            // 25
    data: css                                                                        // 26
  });                                                                                // 27
});                                                                                  // 28
                                                                                     // 29
// Register import.styl files with the dependency watcher, without actually          // 30
// processing them. There is a similar rule in the less package.                     // 31
Plugin.registerSourceHandler("import.styl", function () {                            // 32
  // Do nothing                                                                      // 33
});                                                                                  // 34
                                                                                     // 35
                                                                                     // 36
///////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package.compileStylus = {};

})();

//# sourceMappingURL=compileStylus:plugin.js.map
