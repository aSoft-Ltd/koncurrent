(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-functions'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'foundation-runtimes-functions'.");
    }
    root['foundation-runtimes-functions'] = factory(typeof this['foundation-runtimes-functions'] === 'undefined' ? {} : this['foundation-runtimes-functions'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var interfaceMeta = kotlin_kotlin.$_$.u4;
  //endregion
  //region block: pre-declaration
  //endregion
  function Function() {
  }
  Function.$metadata$ = interfaceMeta('Function');
  function Supplier() {
  }
  Supplier.$metadata$ = interfaceMeta('Supplier');
  function Consumer() {
  }
  Consumer.$metadata$ = interfaceMeta('Consumer');
  function Runnable() {
  }
  Runnable.$metadata$ = interfaceMeta('Runnable');
  //region block: exports
  function $jsExportAll$(_) {
    var $functions = _.functions || (_.functions = {});
    var $functions = _.functions || (_.functions = {});
    var $functions = _.functions || (_.functions = {});
    var $functions = _.functions || (_.functions = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = Consumer;
  _.$_$.b = Runnable;
  //endregion
  return _;
}));

//# sourceMappingURL=foundation-runtimes-functions.js.map