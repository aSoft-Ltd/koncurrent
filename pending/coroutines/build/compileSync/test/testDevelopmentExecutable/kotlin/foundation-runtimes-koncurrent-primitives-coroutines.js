(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-primitives-coroutines'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-primitives-coroutines'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-primitives-coroutines'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-primitives-coroutines'.");
    }
    root['foundation-runtimes-koncurrent-primitives-coroutines'] = factory(typeof this['foundation-runtimes-koncurrent-primitives-coroutines'] === 'undefined' ? {} : this['foundation-runtimes-koncurrent-primitives-coroutines'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.g1;
  var Companion_getInstance = kotlin_kotlin.$_$.f1;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.x;
  var createFailure = kotlin_kotlin.$_$.d4;
  var CoroutineImpl = kotlin_kotlin.$_$.k2;
  var intercepted = kotlin_kotlin.$_$.x1;
  var get_MODE_CANCELLABLE = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var CancellableContinuationImpl = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var returnIfSuspended = kotlin_kotlin.$_$.c;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.u1;
  var classMeta = kotlin_kotlin.$_$.s2;
  //endregion
  //region block: pre-declaration
  $awaitCOROUTINE$0.prototype = Object.create(CoroutineImpl.prototype);
  $awaitCOROUTINE$0.prototype.constructor = $awaitCOROUTINE$0;
  //endregion
  function await_0(_this__u8e3s4, $cont) {
    var tmp = new $awaitCOROUTINE$0(_this__u8e3s4, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  }
  function get_isPromise(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    var tmp0_safe_receiver = tmp$ret$0;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.constructor;
    return (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.name) == 'Promise';
  }
  function await$lambda($cancellable) {
    return function (it) {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_success = Companion_getInstance();
          tmp$ret$0 = _Result___init__impl__xyqfz8(it);
        }
        tmp$ret$1 = $cancellable.resumeWith_s3a3yh_k$(tmp$ret$0);
      }
      return Unit_getInstance();
    };
  }
  function await$lambda_0($cancellable) {
    return function (it) {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_failure = Companion_getInstance();
          tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(it));
        }
        tmp$ret$1 = $cancellable.resumeWith_s3a3yh_k$(tmp$ret$0);
      }
      return Unit_getInstance();
    };
  }
  function $awaitCOROUTINE$0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this._this__u8e3s4__1 = _this__u8e3s4;
  }
  $awaitCOROUTINE$0.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 3;
            var tmp0_safe_receiver = this._this__u8e3s4__1;
            var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.constructor;
            if ((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.name) == 'Promise') {
              this.state_1 = 1;
              var tmp_0 = this;
              tmp_0.tmp0__anonymous_1_q5x4ye_1 = this;
              this.cancellable2__1 = new CancellableContinuationImpl(intercepted(this.tmp0__anonymous_1_q5x4ye_1), get_MODE_CANCELLABLE());
              this.cancellable2__1.initCancellability_sh6jkn_k$();
              var tmp_1 = await$lambda(this.cancellable2__1);
              this._this__u8e3s4__1.then(tmp_1, await$lambda_0(this.cancellable2__1));
              suspendResult = returnIfSuspended(this.cancellable2__1.getResult_clfhg3_k$(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_2 = this;
              tmp_2.WHEN_RESULT0__1 = this._this__u8e3s4__1;
              this.state_1 = 2;
              continue $sm;
            }

            break;
          case 1:
            this.WHEN_RESULT0__1 = suspendResult;
            this.state_1 = 2;
            continue $sm;
          case 2:
            return this.WHEN_RESULT0__1;
          case 3:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 3) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  $awaitCOROUTINE$0.$metadata$ = classMeta('$awaitCOROUTINE$0', undefined, undefined, undefined, undefined, CoroutineImpl.prototype);
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = await_0;
  //endregion
  return _;
}));

//# sourceMappingURL=foundation-runtimes-koncurrent-primitives-coroutines.js.map