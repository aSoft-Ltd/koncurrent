(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './foundation-runtimes-koncurrent-primitives-mock.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./foundation-runtimes-koncurrent-primitives-mock.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-test'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-later-test'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-primitives-mock'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-test'. Its dependency 'foundation-runtimes-koncurrent-primitives-mock' was not found. Please, check whether 'foundation-runtimes-koncurrent-primitives-mock' is loaded prior to 'foundation-runtimes-koncurrent-later-test'.");
    }
    root['foundation-runtimes-koncurrent-later-test'] = factory(typeof this['foundation-runtimes-koncurrent-later-test'] === 'undefined' ? {} : this['foundation-runtimes-koncurrent-later-test'], this['kotlin-kotlin-stdlib-js-ir'], this['foundation-runtimes-koncurrent-primitives-mock']);
  }
}(this, function (_, kotlin_kotlin, kotlin_foundation_runtimes_koncurrent_primitives_mock) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.w1;
  var MockExecutor_init_$Create$ = kotlin_foundation_runtimes_koncurrent_primitives_mock.$_$.a;
  //endregion
  //region block: pre-declaration
  //endregion
  function runLaterTest(executor, block) {
    var tmp$ret$1;
    {
      var tmp0_unsafeCast = new Promise(runLaterTest$lambda(block));
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_unsafeCast;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  }
  function runLaterTest$default(executor, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0)) {
      executor = MockExecutor_init_$Create$(null, 1, null);
    }
    return runLaterTest(executor, block);
  }
  function runLaterTest$lambda$lambda($resolve) {
    return function (it) {
      $resolve(Unit_getInstance());
      return Unit_getInstance();
    };
  }
  function runLaterTest$lambda($block) {
    return function (resolve, reject) {
      var tmp = $block();
      var tmp_0 = runLaterTest$lambda$lambda(resolve);
      tmp.then$default_qwqxvb_k$(tmp_0, reject, null, 4, null);
      return Unit_getInstance();
    };
  }
  function test(_this__u8e3s4, executor) {
    return runLaterTest(executor, test$lambda(_this__u8e3s4));
  }
  function test$lambda($this_test) {
    return function () {
      return $this_test;
    };
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = runLaterTest;
  //endregion
  return _;
}));

//# sourceMappingURL=foundation-runtimes-koncurrent-later-test.js.map