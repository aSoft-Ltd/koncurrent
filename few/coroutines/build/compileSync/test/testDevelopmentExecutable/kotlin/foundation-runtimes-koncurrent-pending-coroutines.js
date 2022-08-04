(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['foundation-runtimes-koncurrent-pending-coroutines'] = factory(typeof this['foundation-runtimes-koncurrent-pending-coroutines'] === 'undefined' ? {} : this['foundation-runtimes-koncurrent-pending-coroutines']);
}(this, function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=foundation-runtimes-koncurrent-pending-coroutines.js.map