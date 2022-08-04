(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-test-js-ir.js', './foundation-runtimes-koncurrent-later-coroutines.js', './kotlin-kotlin-test-js-ir.js', './foundation-runtimes-koncurrent-primitives-core.js', './foundation-runtimes-koncurrent-later-core.js', './foundation-runtimes-functions.js', './foundation-runtimes-kotlinx-collections-interoperable.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-test-js-ir.js'), require('./foundation-runtimes-koncurrent-later-coroutines.js'), require('./kotlin-kotlin-test-js-ir.js'), require('./foundation-runtimes-koncurrent-primitives-core.js'), require('./foundation-runtimes-koncurrent-later-core.js'), require('./foundation-runtimes-functions.js'), require('./foundation-runtimes-kotlinx-collections-interoperable.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-coroutines-test'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-later-coroutines-test'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-test-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-coroutines-test'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-test-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-test-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-later-coroutines-test'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-later-coroutines'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-coroutines-test'. Its dependency 'foundation-runtimes-koncurrent-later-coroutines' was not found. Please, check whether 'foundation-runtimes-koncurrent-later-coroutines' is loaded prior to 'foundation-runtimes-koncurrent-later-coroutines-test'.");
    }
    if (typeof this['kotlin-kotlin-test-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-coroutines-test'. Its dependency 'kotlin-kotlin-test-js-ir' was not found. Please, check whether 'kotlin-kotlin-test-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-later-coroutines-test'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-primitives-core'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-coroutines-test'. Its dependency 'foundation-runtimes-koncurrent-primitives-core' was not found. Please, check whether 'foundation-runtimes-koncurrent-primitives-core' is loaded prior to 'foundation-runtimes-koncurrent-later-coroutines-test'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-later-core'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-coroutines-test'. Its dependency 'foundation-runtimes-koncurrent-later-core' was not found. Please, check whether 'foundation-runtimes-koncurrent-later-core' is loaded prior to 'foundation-runtimes-koncurrent-later-coroutines-test'.");
    }
    if (typeof this['foundation-runtimes-functions'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-coroutines-test'. Its dependency 'foundation-runtimes-functions' was not found. Please, check whether 'foundation-runtimes-functions' is loaded prior to 'foundation-runtimes-koncurrent-later-coroutines-test'.");
    }
    if (typeof this['foundation-runtimes-kotlinx-collections-interoperable'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-coroutines-test'. Its dependency 'foundation-runtimes-kotlinx-collections-interoperable' was not found. Please, check whether 'foundation-runtimes-kotlinx-collections-interoperable' is loaded prior to 'foundation-runtimes-koncurrent-later-coroutines-test'.");
    }
    root['foundation-runtimes-koncurrent-later-coroutines-test'] = factory(typeof this['foundation-runtimes-koncurrent-later-coroutines-test'] === 'undefined' ? {} : this['foundation-runtimes-koncurrent-later-coroutines-test'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-test-js-ir'], this['foundation-runtimes-koncurrent-later-coroutines'], this['kotlin-kotlin-test-js-ir'], this['foundation-runtimes-koncurrent-primitives-core'], this['foundation-runtimes-koncurrent-later-core'], this['foundation-runtimes-functions'], this['foundation-runtimes-kotlinx-collections-interoperable']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_test, kotlin_foundation_runtimes_koncurrent_later_coroutines, kotlin_kotlin_test, kotlin_foundation_runtimes_koncurrent_primitives_core, kotlin_foundation_runtimes_koncurrent_later_core, kotlin_foundation_runtimes_functions, kotlin_foundation_runtimes_kotlinx_collections_interoperable) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_getInstance = kotlin_kotlin.$_$.d2;
  var println = kotlin_kotlin.$_$.z4;
  var CoroutineImpl = kotlin_kotlin.$_$.u4;
  var THROW_CCE = kotlin_kotlin.$_$.c7;
  var TestScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_test.$_$.b;
  var isInterface = kotlin_kotlin.$_$.u5;
  var await_0 = kotlin_foundation_runtimes_koncurrent_later_coroutines.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.e4;
  var assertEquals$default = kotlin_kotlin_test.$_$.a;
  var classMeta = kotlin_kotlin.$_$.f5;
  var Executors_getInstance = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.a;
  var Later = kotlin_foundation_runtimes_koncurrent_later_core.$_$.b;
  var Long = kotlin_kotlin.$_$.z6;
  var runTest$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_test.$_$.a;
  var suite = kotlin_kotlin_test.$_$.b;
  var test = kotlin_kotlin_test.$_$.c;
  var SuspendFunction1 = kotlin_kotlin.$_$.w4;
  //endregion
  //region block: pre-declaration
  LaterCanAwait$should_be_able_to_recover_on_a_failure$slambda.prototype = Object.create(CoroutineImpl.prototype);
  LaterCanAwait$should_be_able_to_recover_on_a_failure$slambda.prototype.constructor = LaterCanAwait$should_be_able_to_recover_on_a_failure$slambda;
  //endregion
  function LaterCanAwait$should_be_able_to_recover_on_a_failure$lambda($zero) {
    return function (res, _anonymous_parameter_1__qggqgd) {
      $zero._v = 0;
      res(25);
      return Unit_getInstance();
    };
  }
  function LaterCanAwait$should_be_able_to_recover_on_a_failure$lambda_0($zero) {
    return function (it) {
      println('danger here');
      return 1 / $zero._v | 0;
    };
  }
  function LaterCanAwait$should_be_able_to_recover_on_a_failure$lambda_1() {
    return function (it) {
      println('danger cont...');
      return imul(it, 2);
    };
  }
  function LaterCanAwait$should_be_able_to_recover_on_a_failure$lambda_2($zero) {
    return function (it) {
      println('Recovering');
      return $zero._v;
    };
  }
  function LaterCanAwait$should_be_able_to_recover_on_a_failure$lambda_3() {
    return function (it) {
      println('Recovered');
      return it + 1 | 0;
    };
  }
  function LaterCanAwait$should_be_able_to_recover_on_a_failure$slambda($result, resultContinuation) {
    this.$result_1 = $result;
    CoroutineImpl.call(this, resultContinuation);
  }
  LaterCanAwait$should_be_able_to_recover_on_a_failure$slambda.prototype.invoke_qflhgo_k$ = function ($this$runTest, $cont) {
    var tmp = this.create_5ibv4j_k$($this$runTest, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  LaterCanAwait$should_be_able_to_recover_on_a_failure$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_qflhgo_k$((!(p1 == null) ? isInterface(p1, TestScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  LaterCanAwait$should_be_able_to_recover_on_a_failure$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = await_0(this.$result_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            assertEquals$default(1, ARGUMENT, null, 4, null);
            return Unit_getInstance();
          case 2:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 2) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  LaterCanAwait$should_be_able_to_recover_on_a_failure$slambda.prototype.create_5ibv4j_k$ = function ($this$runTest, completion) {
    var i = new LaterCanAwait$should_be_able_to_recover_on_a_failure$slambda(this.$result_1, completion);
    i.$this$runTest_1 = $this$runTest;
    return i;
  };
  LaterCanAwait$should_be_able_to_recover_on_a_failure$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_5ibv4j_k$((!(value == null) ? isInterface(value, TestScope) : false) ? value : THROW_CCE(), completion);
  };
  LaterCanAwait$should_be_able_to_recover_on_a_failure$slambda.$metadata$ = classMeta('LaterCanAwait$should_be_able_to_recover_on_a_failure$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function LaterCanAwait$should_be_able_to_recover_on_a_failure$slambda_0($result, resultContinuation) {
    var i = new LaterCanAwait$should_be_able_to_recover_on_a_failure$slambda($result, resultContinuation);
    var l = function ($this$runTest, $cont) {
      return i.invoke_qflhgo_k$($this$runTest, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function LaterCanAwait() {
    this.executor_1 = Executors_getInstance().default();
  }
  LaterCanAwait.prototype.get_executor_1zf7oc_k$ = function () {
    return this.executor_1;
  };
  LaterCanAwait.prototype.should_be_able_to_recover_on_a_failure_lex9ii_k$ = function () {
    var zero = {_v: -1};
    var tmp$ret$4;
    {
      var tmp$ret$3;
      {
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            var tmp$ret$0;
            {
              var tmp0_Later = this.executor_1;
              var tmp1_Later = LaterCanAwait$should_be_able_to_recover_on_a_failure$lambda(zero);
              tmp$ret$0 = new Later(tmp1_Later, tmp0_Later);
            }
            var tmp2_then = tmp$ret$0;
            var tmp3_then = LaterCanAwait$should_be_able_to_recover_on_a_failure$lambda_0(zero);
            var tmp4_then = tmp2_then.executor_1;
            tmp$ret$1 = tmp2_then.then_kkt96f_k$(tmp3_then, null, tmp4_then);
          }
          var tmp5_then = tmp$ret$1;
          var tmp6_then = LaterCanAwait$should_be_able_to_recover_on_a_failure$lambda_1();
          var tmp7_then = tmp5_then.executor_1;
          tmp$ret$2 = tmp5_then.then_kkt96f_k$(tmp6_then, null, tmp7_then);
        }
        var tmp8_catch = tmp$ret$2;
        var tmp9_catch = LaterCanAwait$should_be_able_to_recover_on_a_failure$lambda_2(zero);
        var tmp10_catch = tmp8_catch.executor_1;
        tmp$ret$3 = tmp8_catch.then_kkt96f_k$(null, tmp9_catch, tmp10_catch);
      }
      var tmp11_then = tmp$ret$3;
      var tmp12_then = LaterCanAwait$should_be_able_to_recover_on_a_failure$lambda_3();
      var tmp13_then = tmp11_then.executor_1;
      tmp$ret$4 = tmp11_then.then_kkt96f_k$(tmp12_then, null, tmp13_then);
    }
    var result = tmp$ret$4;
    var tmp = new Long(0, 0);
    return runTest$default(null, tmp, LaterCanAwait$should_be_able_to_recover_on_a_failure$slambda_0(result, null), 3, null);
  };
  LaterCanAwait.$metadata$ = classMeta('LaterCanAwait');
  function test_fun_izoufj() {
    suite('LaterCanAwait', false, test_fun$LaterCanAwait_test_fun_ap3dki());
  }
  function test_fun$LaterCanAwait_test_fun$should_be_able_to_recover_on_a_failure_test_fun_3f7e2x() {
    return function () {
      var tmp = new LaterCanAwait();
      return tmp.should_be_able_to_recover_on_a_failure_lex9ii_k$();
      $unreachable();
    };
  }
  function test_fun$LaterCanAwait_test_fun_ap3dki() {
    return function () {
      test('should_be_able_to_recover_on_a_failure', false, test_fun$LaterCanAwait_test_fun$should_be_able_to_recover_on_a_failure_test_fun_3f7e2x());
      return Unit_getInstance();
    };
  }
  //region block: tests
  (function () {
    suite('', false, function () {
      test_fun_izoufj();
    });
  }());
  //endregion
  //region block: exports
  kotlin_foundation_runtimes_functions.$jsExportAll$(_);
  kotlin_foundation_runtimes_koncurrent_primitives_core.$jsExportAll$(_);
  kotlin_foundation_runtimes_kotlinx_collections_interoperable.$jsExportAll$(_);
  kotlin_foundation_runtimes_koncurrent_later_core.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=foundation-runtimes-koncurrent-later-coroutines-test.js.map