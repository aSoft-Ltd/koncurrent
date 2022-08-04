(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './foundation-runtimes-koncurrent-primitives-core.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './foundation-runtimes-koncurrent-primitives-coroutines.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./foundation-runtimes-koncurrent-primitives-core.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./foundation-runtimes-koncurrent-primitives-coroutines.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-pending-coroutines'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-pending-coroutines'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-primitives-core'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-pending-coroutines'. Its dependency 'foundation-runtimes-koncurrent-primitives-core' was not found. Please, check whether 'foundation-runtimes-koncurrent-primitives-core' is loaded prior to 'foundation-runtimes-koncurrent-pending-coroutines'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-pending-coroutines'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-pending-coroutines'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-primitives-coroutines'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-pending-coroutines'. Its dependency 'foundation-runtimes-koncurrent-primitives-coroutines' was not found. Please, check whether 'foundation-runtimes-koncurrent-primitives-coroutines' is loaded prior to 'foundation-runtimes-koncurrent-pending-coroutines'.");
    }
    root['foundation-runtimes-koncurrent-pending-coroutines'] = factory(typeof this['foundation-runtimes-koncurrent-pending-coroutines'] === 'undefined' ? {} : this['foundation-runtimes-koncurrent-pending-coroutines'], this['kotlin-kotlin-stdlib-js-ir'], this['foundation-runtimes-koncurrent-primitives-core'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['foundation-runtimes-koncurrent-primitives-coroutines']);
  }
}(this, function (_, kotlin_kotlin, kotlin_foundation_runtimes_koncurrent_primitives_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_foundation_runtimes_koncurrent_primitives_coroutines) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.g1;
  var PendingState_getInstance = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.a;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.c1;
  var CoroutineStart_DEFAULT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var CoroutineImpl = kotlin_kotlin.$_$.k2;
  var THROW_CCE = kotlin_kotlin.$_$.y3;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var isInterface = kotlin_kotlin.$_$.b3;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.u1;
  var ConcurrentState = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.b;
  var PendingState = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.e;
  var Fulfilled = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.d;
  var Rejected = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.f;
  var classMeta = kotlin_kotlin.$_$.s2;
  var SuspendFunction1 = kotlin_kotlin.$_$.m2;
  var await_0 = kotlin_foundation_runtimes_koncurrent_primitives_coroutines.$_$.a;
  //endregion
  //region block: pre-declaration
  pending$slambda.prototype = Object.create(CoroutineImpl.prototype);
  pending$slambda.prototype.constructor = pending$slambda;
  //endregion
  function pending(_this__u8e3s4, context, start, block) {
    var tmp$ret$3;
    {
      var resolveFn = {_v: null};
      var rejectFn = {_v: null};
      var promise = new Promise(pending$lambda(resolveFn, rejectFn));
      {
        var tmp0__set_resolveFn__j33417 = resolveFn._v;
        var tmp$ret$0;
        {
          tmp$ret$0 = promise;
        }
        tmp$ret$0.resolveFn = tmp0__set_resolveFn__j33417;
      }
      {
        var tmp1__set_rejectFn__bwjinf = rejectFn._v;
        var tmp$ret$1;
        {
          tmp$ret$1 = promise;
        }
        tmp$ret$1.rejectFn = tmp1__set_rejectFn__bwjinf;
      }
      {
        var tmp2__set_state__1dkvps = PendingState_getInstance();
        var tmp$ret$2;
        {
          tmp$ret$2 = promise;
        }
        tmp$ret$2.state = tmp2__set_state__1dkvps;
      }
      tmp$ret$3 = promise;
    }
    var pending = tmp$ret$3;
    launch(_this__u8e3s4, context, start, pending$slambda_0(block, pending, null));
    return pending;
  }
  function pending$default(_this__u8e3s4, context, start, block, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      context = EmptyCoroutineContext_getInstance();
    if (!(($mask0 & 2) === 0))
      start = CoroutineStart_DEFAULT_getInstance();
    return pending(_this__u8e3s4, context, start, block);
  }
  function pending$lambda($resolveFn, $rejectFn) {
    return function (resolve, reject) {
      $resolveFn._v = resolve;
      $rejectFn._v = reject;
      return Unit_getInstance();
    };
  }
  function pending$slambda($block, $pending, resultContinuation) {
    this.$block_1 = $block;
    this.$pending_1 = $pending;
    CoroutineImpl.call(this, resultContinuation);
  }
  pending$slambda.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  pending$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  pending$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 8;
            this.exceptionState_1 = 7;
            this.state_1 = 1;
            continue $sm;
          case 1:
            this.state_1 = 2;
            suspendResult = this.$block_1(this.$this$launch_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_resolveWith = suspendResult;
            var tmp_0 = this.$pending_1.state;
            var tmp0_elvis_lhs = tmp_0 instanceof ConcurrentState ? tmp_0 : null;
            var WHEN_RESULT;
            if (tmp0_elvis_lhs == null) {
              this.tmp$ret$00__1 = false;
              this.state_1 = 6;
              continue $sm;
            } else {
              WHEN_RESULT = tmp0_elvis_lhs;
              this.state_1 = 3;
              continue $sm;
            }

            break;
          case 3:
            var s = WHEN_RESULT;
            if (s instanceof PendingState) {
              var tmp_1 = this.$pending_1.resolveFn;
              var tmp1_elvis_lhs = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
              var WHEN_RESULT_0;
              if (tmp1_elvis_lhs == null) {
                this.tmp$ret$00__1 = false;
                this.state_1 = 6;
                continue $sm;
              } else {
                WHEN_RESULT_0 = tmp1_elvis_lhs;
                this.state_1 = 5;
                continue $sm;
              }
            } else {
              this.state_1 = 4;
              continue $sm;
            }

            ;
            break;
          case 4:
            this.tmp$ret$00__1 = false;
            if (false) {
              this.state_1 = 1;
              continue $sm;
            }

            this.state_1 = 6;
            continue $sm;
          case 5:
            var r = WHEN_RESULT_0;
            r(tmp0_resolveWith);
            var tmp0__set_state__b2y64u = new Fulfilled(tmp0_resolveWith);
            this.$pending_1.state = tmp0__set_state__b2y64u;
            this.tmp$ret$00__1 = true;
            this.state_1 = 6;
            continue $sm;
          case 6:
            ;
            this.exceptionState_1 = 8;
            this.state_1 = 9;
            continue $sm;
          case 7:
            this.exceptionState_1 = 8;
            var tmp_2 = this.exception_1;
            if (tmp_2 instanceof Error) {
              var err = this.exception_1;
              var tmp$ret$2;
              l$ret$3: do {
                var tmp_3 = this.$pending_1.state;
                var tmp0_elvis_lhs_0 = tmp_3 instanceof ConcurrentState ? tmp_3 : null;
                var tmp_4;
                if (tmp0_elvis_lhs_0 == null) {
                  tmp$ret$2 = false;
                  break l$ret$3;
                } else {
                  tmp_4 = tmp0_elvis_lhs_0;
                }
                var s_0 = tmp_4;
                if (s_0 instanceof PendingState) {
                  var tmp_5 = this.$pending_1.rejectFn;
                  var tmp1_elvis_lhs_0 = (!(tmp_5 == null) ? typeof tmp_5 === 'function' : false) ? tmp_5 : null;
                  var tmp_6;
                  if (tmp1_elvis_lhs_0 == null) {
                    tmp$ret$2 = false;
                    break l$ret$3;
                  } else {
                    tmp_6 = tmp1_elvis_lhs_0;
                  }
                  var r_0 = tmp_6;
                  r_0(err);
                  var tmp0__set_state__b2y64u_0 = new Rejected(err);
                  this.$pending_1.state = tmp0__set_state__b2y64u_0;
                  tmp$ret$2 = true;
                  break l$ret$3;
                }
                tmp$ret$2 = false;
              }
               while (false);
              this.state_1 = 9;
              continue $sm;
            } else {
              throw this.exception_1;
            }

            break;
          case 8:
            throw this.exception_1;
          case 9:
            this.exceptionState_1 = 8;
            return Unit_getInstance();
        }
      } catch ($p) {
        if (this.exceptionState_1 === 8) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  pending$slambda.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new pending$slambda(this.$block_1, this.$pending_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  pending$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  pending$slambda.$metadata$ = classMeta('pending$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function pending$slambda_0($block, $pending, resultContinuation) {
    var i = new pending$slambda($block, $pending, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function await_1(_this__u8e3s4, $cont) {
    return await_0(_this__u8e3s4, $cont);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = pending$default;
  //endregion
  return _;
}));

//# sourceMappingURL=foundation-runtimes-koncurrent-pending-coroutines.js.map