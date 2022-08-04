(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['foundation-runtimes-expect-coroutines'] = factory(typeof this['foundation-runtimes-expect-coroutines'] === 'undefined' ? {} : this['foundation-runtimes-expect-coroutines']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=foundation-runtimes-expect-coroutines.js.map