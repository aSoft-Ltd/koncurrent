(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './foundation-runtimes-koncurrent-later-core.js', './foundation-runtimes-koncurrent-primitives-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./foundation-runtimes-koncurrent-later-core.js'), require('./foundation-runtimes-koncurrent-primitives-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-coroutines'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-later-coroutines'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-coroutines'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-later-coroutines'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-later-core'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-coroutines'. Its dependency 'foundation-runtimes-koncurrent-later-core' was not found. Please, check whether 'foundation-runtimes-koncurrent-later-core' is loaded prior to 'foundation-runtimes-koncurrent-later-coroutines'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-primitives-core'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-coroutines'. Its dependency 'foundation-runtimes-koncurrent-primitives-core' was not found. Please, check whether 'foundation-runtimes-koncurrent-primitives-core' is loaded prior to 'foundation-runtimes-koncurrent-later-coroutines'.");
    }
    root['foundation-runtimes-koncurrent-later-coroutines'] = factory(typeof this['foundation-runtimes-koncurrent-later-coroutines'] === 'undefined' ? {} : this['foundation-runtimes-koncurrent-later-coroutines'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['foundation-runtimes-koncurrent-later-core'], this['foundation-runtimes-koncurrent-primitives-core']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_foundation_runtimes_koncurrent_later_core, kotlin_foundation_runtimes_koncurrent_primitives_core) {
  'use strict';
  //region block: imports
  var intercepted = kotlin_kotlin.$_$.h4;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var finally$default = kotlin_foundation_runtimes_koncurrent_later_core.$_$.a;
  var Unit_getInstance = kotlin_kotlin.$_$.d2;
  var Companion_getInstance = kotlin_kotlin.$_$.c2;
  var createFailure = kotlin_kotlin.$_$.h7;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.m1;
  var Rejected = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.f;
  var Fulfilled = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.d;
  //endregion
  //region block: pre-declaration
  //endregion
  function await_0(_this__u8e3s4, $cont) {
    var tmp$ret$0;
    {
      var tmp0__anonymous__q1qw7t = $cont;
      var cancellable = new CancellableContinuationImpl(intercepted(tmp0__anonymous__q1qw7t), get_MODE_CANCELLABLE());
      cancellable.initCancellability_sh6jkn_k$();
      {
        finally$default(_this__u8e3s4, null, await$lambda(cancellable), 1, null);
      }
      tmp$ret$0 = cancellable.getResult_clfhg3_k$();
    }
    return tmp$ret$0;
  }
  function await$lambda($cancellable) {
    return function (it) {
      var tmp0_subject = it;
      var tmp;
      if (tmp0_subject instanceof Fulfilled) {
        var tmp$ret$1;
        {
          var tmp0_resume = it.value_1;
          var tmp$ret$0;
          {
            var tmp0_success = Companion_getInstance();
            tmp$ret$0 = _Result___init__impl__xyqfz8(tmp0_resume);
          }
          tmp$ret$1 = $cancellable.resumeWith_s3a3yh_k$(tmp$ret$0);
        }
        tmp = tmp$ret$1;
      } else {
        if (tmp0_subject instanceof Rejected) {
          var tmp$ret$3;
          {
            var tmp1_resumeWithException = it.cause_1;
            var tmp$ret$2;
            {
              var tmp0_failure = Companion_getInstance();
              tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(tmp1_resumeWithException));
            }
            tmp$ret$3 = $cancellable.resumeWith_s3a3yh_k$(tmp$ret$2);
          }
          tmp = tmp$ret$3;
        }
      }
      return Unit_getInstance();
    };
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = await_0;
  //endregion
  return _;
}));

//# sourceMappingURL=foundation-runtimes-koncurrent-later-coroutines.js.map