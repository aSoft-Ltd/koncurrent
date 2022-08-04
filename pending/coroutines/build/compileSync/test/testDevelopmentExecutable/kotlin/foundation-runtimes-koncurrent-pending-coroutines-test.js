(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-test-js-ir.js', './foundation-runtimes-koncurrent-primitives-coroutines.js', './kotlin-kotlin-test-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './foundation-runtimes-koncurrent-pending-coroutines.js', './foundation-runtimes-koncurrent-primitives-core.js', './foundation-runtimes-expect-core.js', './foundation-runtimes-functions.js', './foundation-runtimes-koncurrent-primitives-mock.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-test-js-ir.js'), require('./foundation-runtimes-koncurrent-primitives-coroutines.js'), require('./kotlin-kotlin-test-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./foundation-runtimes-koncurrent-pending-coroutines.js'), require('./foundation-runtimes-koncurrent-primitives-core.js'), require('./foundation-runtimes-expect-core.js'), require('./foundation-runtimes-functions.js'), require('./foundation-runtimes-koncurrent-primitives-mock.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-pending-coroutines-test'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-pending-coroutines-test'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-test-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-pending-coroutines-test'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-test-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-test-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-pending-coroutines-test'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-primitives-coroutines'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-pending-coroutines-test'. Its dependency 'foundation-runtimes-koncurrent-primitives-coroutines' was not found. Please, check whether 'foundation-runtimes-koncurrent-primitives-coroutines' is loaded prior to 'foundation-runtimes-koncurrent-pending-coroutines-test'.");
    }
    if (typeof this['kotlin-kotlin-test-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-pending-coroutines-test'. Its dependency 'kotlin-kotlin-test-js-ir' was not found. Please, check whether 'kotlin-kotlin-test-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-pending-coroutines-test'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-pending-coroutines-test'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-pending-coroutines-test'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-pending-coroutines'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-pending-coroutines-test'. Its dependency 'foundation-runtimes-koncurrent-pending-coroutines' was not found. Please, check whether 'foundation-runtimes-koncurrent-pending-coroutines' is loaded prior to 'foundation-runtimes-koncurrent-pending-coroutines-test'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-primitives-core'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-pending-coroutines-test'. Its dependency 'foundation-runtimes-koncurrent-primitives-core' was not found. Please, check whether 'foundation-runtimes-koncurrent-primitives-core' is loaded prior to 'foundation-runtimes-koncurrent-pending-coroutines-test'.");
    }
    if (typeof this['foundation-runtimes-expect-core'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-pending-coroutines-test'. Its dependency 'foundation-runtimes-expect-core' was not found. Please, check whether 'foundation-runtimes-expect-core' is loaded prior to 'foundation-runtimes-koncurrent-pending-coroutines-test'.");
    }
    if (typeof this['foundation-runtimes-functions'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-pending-coroutines-test'. Its dependency 'foundation-runtimes-functions' was not found. Please, check whether 'foundation-runtimes-functions' is loaded prior to 'foundation-runtimes-koncurrent-pending-coroutines-test'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-primitives-mock'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-pending-coroutines-test'. Its dependency 'foundation-runtimes-koncurrent-primitives-mock' was not found. Please, check whether 'foundation-runtimes-koncurrent-primitives-mock' is loaded prior to 'foundation-runtimes-koncurrent-pending-coroutines-test'.");
    }
    root['foundation-runtimes-koncurrent-pending-coroutines-test'] = factory(typeof this['foundation-runtimes-koncurrent-pending-coroutines-test'] === 'undefined' ? {} : this['foundation-runtimes-koncurrent-pending-coroutines-test'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-test-js-ir'], this['foundation-runtimes-koncurrent-primitives-coroutines'], this['kotlin-kotlin-test-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['foundation-runtimes-koncurrent-pending-coroutines'], this['foundation-runtimes-koncurrent-primitives-core'], this['foundation-runtimes-expect-core'], this['foundation-runtimes-functions'], this['foundation-runtimes-koncurrent-primitives-mock']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_test, kotlin_foundation_runtimes_koncurrent_primitives_coroutines, kotlin_kotlin_test, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_foundation_runtimes_koncurrent_pending_coroutines, kotlin_foundation_runtimes_koncurrent_primitives_core, kotlin_foundation_runtimes_expect_core, kotlin_foundation_runtimes_functions, kotlin_foundation_runtimes_koncurrent_primitives_mock) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_getInstance = kotlin_kotlin.$_$.g1;
  var CoroutineImpl = kotlin_kotlin.$_$.k2;
  var THROW_CCE = kotlin_kotlin.$_$.y3;
  var TestScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_test.$_$.b;
  var isInterface = kotlin_kotlin.$_$.b3;
  var await_0 = kotlin_foundation_runtimes_koncurrent_primitives_coroutines.$_$.a;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.u1;
  var assertEquals$default = kotlin_kotlin_test.$_$.a;
  var classMeta = kotlin_kotlin.$_$.s2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o;
  var Long = kotlin_kotlin.$_$.v3;
  var runTest$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_test.$_$.a;
  var suite = kotlin_kotlin_test.$_$.g;
  var test = kotlin_kotlin_test.$_$.h;
  var SuspendFunction1 = kotlin_kotlin.$_$.m2;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.q;
  var pending$default = kotlin_foundation_runtimes_koncurrent_pending_coroutines.$_$.a;
  var PendingState_getInstance = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.a;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var ConcurrentState = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.b;
  var PendingState = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.e;
  var Fulfilled = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.d;
  var Rejected = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.f;
  var expect = kotlin_foundation_runtimes_expect_core.$_$.a;
  //endregion
  //region block: pre-declaration
  CoroutinesCanAwait$should_be_able_to_await_a_coroutine$slambda.prototype = Object.create(CoroutineImpl.prototype);
  CoroutinesCanAwait$should_be_able_to_await_a_coroutine$slambda.prototype.constructor = CoroutinesCanAwait$should_be_able_to_await_a_coroutine$slambda;
  CoroutinesCanAwait$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline$slambda.prototype = Object.create(CoroutineImpl.prototype);
  CoroutinesCanAwait$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline$slambda.prototype.constructor = CoroutinesCanAwait$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline$slambda;
  CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$slambda.prototype = Object.create(CoroutineImpl.prototype);
  CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$slambda.prototype.constructor = CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$slambda;
  CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$slambda.prototype = Object.create(CoroutineImpl.prototype);
  CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$slambda.prototype.constructor = CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$slambda;
  PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda$slambda.prototype.constructor = PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda$slambda;
  PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda.prototype = Object.create(CoroutineImpl.prototype);
  PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda.prototype.constructor = PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda;
  PendingLambdasShouldBeAbleToRunSuspendingCode$should_be_constructable_with_suspend_functions_in_a_suspend_scope$slambda.prototype = Object.create(CoroutineImpl.prototype);
  PendingLambdasShouldBeAbleToRunSuspendingCode$should_be_constructable_with_suspend_functions_in_a_suspend_scope$slambda.prototype.constructor = PendingLambdasShouldBeAbleToRunSuspendingCode$should_be_constructable_with_suspend_functions_in_a_suspend_scope$slambda;
  PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda$slambda.prototype.constructor = PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda$slambda;
  PendingsCanBeControlledFromTheOutside$should_be_resolvable_externally$slambda.prototype = Object.create(CoroutineImpl.prototype);
  PendingsCanBeControlledFromTheOutside$should_be_resolvable_externally$slambda.prototype.constructor = PendingsCanBeControlledFromTheOutside$should_be_resolvable_externally$slambda;
  PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda.prototype = Object.create(CoroutineImpl.prototype);
  PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda.prototype.constructor = PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda;
  //endregion
  function CoroutinesCanAwait$should_be_able_to_await_a_coroutine$lambda() {
    return function () {
      return 1;
    };
  }
  function CoroutinesCanAwait$should_be_able_to_await_a_coroutine$lambda_0($tmp0_pending) {
    return function (resolve, reject) {
      var tmp;
      try {
        tmp = resolve($tmp0_pending());
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          tmp_0 = reject($p);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function CoroutinesCanAwait$should_be_able_to_await_a_coroutine$slambda($result, resultContinuation) {
    this.$result_1 = $result;
    CoroutineImpl.call(this, resultContinuation);
  }
  CoroutinesCanAwait$should_be_able_to_await_a_coroutine$slambda.prototype.invoke_qflhgo_k$ = function ($this$runTest, $cont) {
    var tmp = this.create_5ibv4j_k$($this$runTest, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  CoroutinesCanAwait$should_be_able_to_await_a_coroutine$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_qflhgo_k$((!(p1 == null) ? isInterface(p1, TestScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  CoroutinesCanAwait$should_be_able_to_await_a_coroutine$slambda.prototype.doResume_5yljmg_k$ = function () {
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
  CoroutinesCanAwait$should_be_able_to_await_a_coroutine$slambda.prototype.create_5ibv4j_k$ = function ($this$runTest, completion) {
    var i = new CoroutinesCanAwait$should_be_able_to_await_a_coroutine$slambda(this.$result_1, completion);
    i.$this$runTest_1 = $this$runTest;
    return i;
  };
  CoroutinesCanAwait$should_be_able_to_await_a_coroutine$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_5ibv4j_k$((!(value == null) ? isInterface(value, TestScope) : false) ? value : THROW_CCE(), completion);
  };
  CoroutinesCanAwait$should_be_able_to_await_a_coroutine$slambda.$metadata$ = classMeta('CoroutinesCanAwait$should_be_able_to_await_a_coroutine$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function CoroutinesCanAwait$should_be_able_to_await_a_coroutine$slambda_0($result, resultContinuation) {
    var i = new CoroutinesCanAwait$should_be_able_to_await_a_coroutine$slambda($result, resultContinuation);
    var l = function ($this$runTest, $cont) {
      return i.invoke_qflhgo_k$($this$runTest, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function CoroutinesCanAwait$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline$lambda() {
    return function () {
      throw IllegalArgumentException_init_$Create$('Whoops');
    };
  }
  function CoroutinesCanAwait$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline$lambda_0($tmp0_pending) {
    return function (resolve, reject) {
      var tmp;
      try {
        tmp = resolve($tmp0_pending());
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          tmp_0 = reject($p);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function CoroutinesCanAwait$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline$lambda_1() {
    return function (it) {
      return 1;
    };
  }
  function CoroutinesCanAwait$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline$lambda_2() {
    return function (it) {
      return imul(it, 2);
    };
  }
  function CoroutinesCanAwait$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline$lambda_3() {
    return function (it) {
      return it + 1 | 0;
    };
  }
  function CoroutinesCanAwait$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline$slambda($result, resultContinuation) {
    this.$result_1 = $result;
    CoroutineImpl.call(this, resultContinuation);
  }
  CoroutinesCanAwait$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline$slambda.prototype.invoke_qflhgo_k$ = function ($this$runTest, $cont) {
    var tmp = this.create_5ibv4j_k$($this$runTest, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  CoroutinesCanAwait$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_qflhgo_k$((!(p1 == null) ? isInterface(p1, TestScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  CoroutinesCanAwait$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline$slambda.prototype.doResume_5yljmg_k$ = function () {
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
            assertEquals$default(3, ARGUMENT, null, 4, null);
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
  CoroutinesCanAwait$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline$slambda.prototype.create_5ibv4j_k$ = function ($this$runTest, completion) {
    var i = new CoroutinesCanAwait$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline$slambda(this.$result_1, completion);
    i.$this$runTest_1 = $this$runTest;
    return i;
  };
  CoroutinesCanAwait$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_5ibv4j_k$((!(value == null) ? isInterface(value, TestScope) : false) ? value : THROW_CCE(), completion);
  };
  CoroutinesCanAwait$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline$slambda.$metadata$ = classMeta('CoroutinesCanAwait$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function CoroutinesCanAwait$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline$slambda_0($result, resultContinuation) {
    var i = new CoroutinesCanAwait$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline$slambda($result, resultContinuation);
    var l = function ($this$runTest, $cont) {
      return i.invoke_qflhgo_k$($this$runTest, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$lambda() {
    return function () {
      throw IllegalArgumentException_init_$Create$('Whoops');
    };
  }
  function CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$lambda_0($tmp0_pending) {
    return function (resolve, reject) {
      var tmp;
      try {
        tmp = resolve($tmp0_pending());
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          tmp_0 = reject($p);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$lambda_1() {
    return function (it) {
      return it + 1 | 0;
    };
  }
  function CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$lambda_2() {
    return function (it) {
      return 1;
    };
  }
  function CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$lambda_3() {
    return function (it) {
      return imul(it, 2);
    };
  }
  function CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$lambda_4() {
    return function (it) {
      return it + 1 | 0;
    };
  }
  function CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$slambda($result, resultContinuation) {
    this.$result_1 = $result;
    CoroutineImpl.call(this, resultContinuation);
  }
  CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$slambda.prototype.invoke_qflhgo_k$ = function ($this$runTest, $cont) {
    var tmp = this.create_5ibv4j_k$($this$runTest, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_qflhgo_k$((!(p1 == null) ? isInterface(p1, TestScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$slambda.prototype.doResume_5yljmg_k$ = function () {
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
            assertEquals$default(3, ARGUMENT, null, 4, null);
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
  CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$slambda.prototype.create_5ibv4j_k$ = function ($this$runTest, completion) {
    var i = new CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$slambda(this.$result_1, completion);
    i.$this$runTest_1 = $this$runTest;
    return i;
  };
  CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_5ibv4j_k$((!(value == null) ? isInterface(value, TestScope) : false) ? value : THROW_CCE(), completion);
  };
  CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$slambda.$metadata$ = classMeta('CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$slambda_0($result, resultContinuation) {
    var i = new CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$slambda($result, resultContinuation);
    var l = function ($this$runTest, $cont) {
      return i.invoke_qflhgo_k$($this$runTest, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$lambda($zero) {
    return function () {
      $zero._v = 0;
      return 25;
    };
  }
  function CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$lambda_0($tmp0_pending) {
    return function (resolve, reject) {
      var tmp;
      try {
        tmp = resolve($tmp0_pending());
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          tmp_0 = reject($p);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$lambda_1($zero) {
    return function (it) {
      return 1 / $zero._v | 0;
    };
  }
  function CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$lambda_2() {
    return function (it) {
      return imul(it, 2);
    };
  }
  function CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$lambda_3($zero) {
    return function (it) {
      return $zero._v;
    };
  }
  function CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$lambda_4() {
    return function (it) {
      return it + 1 | 0;
    };
  }
  function CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$slambda($result, resultContinuation) {
    this.$result_1 = $result;
    CoroutineImpl.call(this, resultContinuation);
  }
  CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$slambda.prototype.invoke_qflhgo_k$ = function ($this$runTest, $cont) {
    var tmp = this.create_5ibv4j_k$($this$runTest, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_qflhgo_k$((!(p1 == null) ? isInterface(p1, TestScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$slambda.prototype.doResume_5yljmg_k$ = function () {
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
  CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$slambda.prototype.create_5ibv4j_k$ = function ($this$runTest, completion) {
    var i = new CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$slambda(this.$result_1, completion);
    i.$this$runTest_1 = $this$runTest;
    return i;
  };
  CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_5ibv4j_k$((!(value == null) ? isInterface(value, TestScope) : false) ? value : THROW_CCE(), completion);
  };
  CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$slambda.$metadata$ = classMeta('CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$slambda_0($result, resultContinuation) {
    var i = new CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$slambda($result, resultContinuation);
    var l = function ($this$runTest, $cont) {
      return i.invoke_qflhgo_k$($this$runTest, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function CoroutinesCanAwait() {
  }
  CoroutinesCanAwait.prototype.should_be_able_to_await_a_coroutine_gu2dcy_k$ = function () {
    var tmp$ret$0;
    {
      var tmp0_pending = CoroutinesCanAwait$should_be_able_to_await_a_coroutine$lambda();
      tmp$ret$0 = new Promise(CoroutinesCanAwait$should_be_able_to_await_a_coroutine$lambda_0(tmp0_pending));
    }
    var result = tmp$ret$0;
    var tmp = new Long(0, 0);
    return runTest$default(null, tmp, CoroutinesCanAwait$should_be_able_to_await_a_coroutine$slambda_0(result, null), 3, null);
  };
  CoroutinesCanAwait.prototype.should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline_ft3jl_k$ = function () {
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_pending = CoroutinesCanAwait$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline$lambda();
          tmp$ret$0 = new Promise(CoroutinesCanAwait$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline$lambda_0(tmp0_pending));
        }
        var tmp = tmp$ret$0;
        var tmp_0 = tmp instanceof Promise ? tmp : THROW_CCE();
        var tmp1_then = tmp_0.catch(CoroutinesCanAwait$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline$lambda_1());
        var tmp2_then = CoroutinesCanAwait$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline$lambda_2();
        tmp$ret$1 = tmp1_then.then(tmp2_then);
      }
      var tmp3_then = tmp$ret$1;
      var tmp4_then = CoroutinesCanAwait$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline$lambda_3();
      tmp$ret$2 = tmp3_then.then(tmp4_then);
    }
    var result = tmp$ret$2;
    var tmp_1 = new Long(0, 0);
    return runTest$default(null, tmp_1, CoroutinesCanAwait$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline$slambda_0(result, null), 3, null);
  };
  CoroutinesCanAwait.prototype.should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline_am6v9s_k$ = function () {
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
              var tmp0_pending = CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$lambda();
              tmp$ret$0 = new Promise(CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$lambda_0(tmp0_pending));
            }
            var tmp1_then = tmp$ret$0;
            var tmp2_then = CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$lambda_1();
            tmp$ret$1 = tmp1_then.then(tmp2_then);
          }
          var tmp3_catch = tmp$ret$1;
          var tmp4_catch = CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$lambda_2();
          tmp$ret$2 = (tmp3_catch instanceof Promise ? tmp3_catch : THROW_CCE()).catch(tmp4_catch);
        }
        var tmp5_then = tmp$ret$2;
        var tmp6_then = CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$lambda_3();
        tmp$ret$3 = tmp5_then.then(tmp6_then);
      }
      var tmp7_then = tmp$ret$3;
      var tmp8_then = CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$lambda_4();
      tmp$ret$4 = tmp7_then.then(tmp8_then);
    }
    var result = tmp$ret$4;
    var tmp = new Long(0, 0);
    return runTest$default(null, tmp, CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline$slambda_0(result, null), 3, null);
  };
  CoroutinesCanAwait.prototype.should_be_able_to_recover_from_an_error_mid_pipeline_v79d0p_k$ = function () {
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
              var tmp0_pending = CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$lambda(zero);
              tmp$ret$0 = new Promise(CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$lambda_0(tmp0_pending));
            }
            var tmp1_then = tmp$ret$0;
            var tmp2_then = CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$lambda_1(zero);
            tmp$ret$1 = tmp1_then.then(tmp2_then);
          }
          var tmp3_then = tmp$ret$1;
          var tmp4_then = CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$lambda_2();
          tmp$ret$2 = tmp3_then.then(tmp4_then);
        }
        var tmp5_catch = tmp$ret$2;
        var tmp6_catch = CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$lambda_3(zero);
        tmp$ret$3 = (tmp5_catch instanceof Promise ? tmp5_catch : THROW_CCE()).catch(tmp6_catch);
      }
      var tmp7_then = tmp$ret$3;
      var tmp8_then = CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$lambda_4();
      tmp$ret$4 = tmp7_then.then(tmp8_then);
    }
    var result = tmp$ret$4;
    var tmp = new Long(0, 0);
    return runTest$default(null, tmp, CoroutinesCanAwait$should_be_able_to_recover_from_an_error_mid_pipeline$slambda_0(result, null), 3, null);
  };
  CoroutinesCanAwait.$metadata$ = classMeta('CoroutinesCanAwait');
  function test_fun_izoufj() {
    suite('CoroutinesCanAwait', false, test_fun$CoroutinesCanAwait_test_fun_lpp4fx());
  }
  function test_fun$CoroutinesCanAwait_test_fun$should_be_able_to_await_a_coroutine_test_fun_kkdq2y() {
    return function () {
      var tmp = new CoroutinesCanAwait();
      return tmp.should_be_able_to_await_a_coroutine_gu2dcy_k$();
      $unreachable();
    };
  }
  function test_fun$CoroutinesCanAwait_test_fun$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline_test_fun_vqqs05() {
    return function () {
      var tmp = new CoroutinesCanAwait();
      return tmp.should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline_ft3jl_k$();
      $unreachable();
    };
  }
  function test_fun$CoroutinesCanAwait_test_fun$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline_test_fun_9frhjc() {
    return function () {
      var tmp = new CoroutinesCanAwait();
      return tmp.should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline_am6v9s_k$();
      $unreachable();
    };
  }
  function test_fun$CoroutinesCanAwait_test_fun$should_be_able_to_recover_from_an_error_mid_pipeline_test_fun_i1w499() {
    return function () {
      var tmp = new CoroutinesCanAwait();
      return tmp.should_be_able_to_recover_from_an_error_mid_pipeline_v79d0p_k$();
      $unreachable();
    };
  }
  function test_fun$CoroutinesCanAwait_test_fun_lpp4fx() {
    return function () {
      test('should_be_able_to_await_a_coroutine', false, test_fun$CoroutinesCanAwait_test_fun$should_be_able_to_await_a_coroutine_test_fun_kkdq2y());
      test('should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline', false, test_fun$CoroutinesCanAwait_test_fun$should_be_able_to_recover_from_an_error_at_the_start_of_a_pipeline_test_fun_vqqs05());
      test('should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline', false, test_fun$CoroutinesCanAwait_test_fun$should_be_able_to_recover_from_an_error_mid_pipeline_with_rejected_operations_in_between_pipeline_test_fun_9frhjc());
      test('should_be_able_to_recover_from_an_error_mid_pipeline', false, test_fun$CoroutinesCanAwait_test_fun$should_be_able_to_recover_from_an_error_mid_pipeline_test_fun_i1w499());
      return Unit_getInstance();
    };
  }
  function PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda$slambda.prototype.invoke_u7fh2j_k$ = function ($this$pending, $cont) {
    var tmp = this.create_b6qu53_k$($this$pending, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_u7fh2j_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          return 10;
        } else if (tmp === 1) {
          throw this.exception_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda$slambda.prototype.create_b6qu53_k$ = function ($this$pending, completion) {
    var i = new PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda$slambda(completion);
    i.$this$pending_1 = $this$pending;
    return i;
  };
  PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda$slambda.$metadata$ = classMeta('PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda$slambda_0(resultContinuation) {
    var i = new PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda$slambda(resultContinuation);
    var l = function ($this$pending, $cont) {
      return i.invoke_u7fh2j_k$($this$pending, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda$lambda($resolveFn, $rejectFn) {
    return function (resolve, reject) {
      $resolveFn._v = resolve;
      $rejectFn._v = reject;
      return Unit_getInstance();
    };
  }
  function PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda$lambda_0($resolveFn, $rejectFn) {
    return function (resolve, reject) {
      $resolveFn._v = resolve;
      $rejectFn._v = reject;
      return Unit_getInstance();
    };
  }
  function PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda$lambda_1($resolveFn, $rejectFn) {
    return function (resolve, reject) {
      $resolveFn._v = resolve;
      $rejectFn._v = reject;
      return Unit_getInstance();
    };
  }
  function fail($this) {
    throw IllegalStateException_init_$Create$('Failed intionally');
  }
  function PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda.prototype.invoke_qflhgo_k$ = function ($this$runTest, $cont) {
    var tmp = this.create_5ibv4j_k$($this$runTest, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_qflhgo_k$((!(p1 == null) ? isInterface(p1, TestScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 35;
            var tmp_0 = this;
            tmp_0.tmp0_map0__1 = pending$default(this.$this$runTest_1, null, null, PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda$slambda_0(null), 3, null);
            var tmp_1 = this;
            this.resolveFn1__1 = {_v: null};
            this.rejectFn2__1 = {_v: null};
            var tmp_2 = this;
            tmp_2.promise3__1 = new Promise(PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda$lambda(this.resolveFn1__1, this.rejectFn2__1));
            var tmp_3 = this;
            tmp_3.tmp0__set_resolveFn_4_nes19l_1 = this.resolveFn1__1._v;
            this.promise3__1.resolveFn = this.tmp0__set_resolveFn_4_nes19l_1;
            var tmp_4 = this;
            tmp_4.tmp1__set_rejectFn_5_dv8s8w_1 = this.rejectFn2__1._v;
            this.promise3__1.rejectFn = this.tmp1__set_rejectFn_5_dv8s8w_1;
            var tmp_5 = this;
            tmp_5.tmp2__set_state_6_sc4qqi_1 = PendingState_getInstance();
            this.promise3__1.state = this.tmp2__set_state_6_sc4qqi_1;
            tmp_1.pending7__1 = this.promise3__1;
            this.exceptionState_1 = 8;
            this.state_1 = 1;
            continue $sm;
          case 1:
            this.state_1 = 2;
            suspendResult = await_0(this.tmp0_map0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.tmp1__anonymous_9_yix0hb_1 = suspendResult;
            this.state_1 = 3;
            suspendResult = delay(new Long(10, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.tmp0_resolveWith10__1 = fail(this.this$0__1);
            var tmp_6 = this;
            var tmp_7 = this.pending7__1.state;
            tmp_6.tmp0_elvis_lhs11__1 = tmp_7 instanceof ConcurrentState ? tmp_7 : null;
            if (this.tmp0_elvis_lhs11__1 == null) {
              this.tmp$ret$08__1 = false;
              this.state_1 = 7;
              var tmp_8 = this;
              continue $sm;
            } else {
              this.WHEN_RESULT12__1 = this.tmp0_elvis_lhs11__1;
              this.state_1 = 4;
              continue $sm;
            }

            break;
          case 4:
            this.s13__1 = this.WHEN_RESULT12__1;
            var tmp_9 = this.s13__1;
            if (tmp_9 instanceof PendingState) {
              var tmp_10 = this;
              var tmp_11 = this.pending7__1.resolveFn;
              tmp_10.tmp1_elvis_lhs14__1 = (!(tmp_11 == null) ? typeof tmp_11 === 'function' : false) ? tmp_11 : null;
              if (this.tmp1_elvis_lhs14__1 == null) {
                this.tmp$ret$08__1 = false;
                this.state_1 = 7;
                var tmp_12 = this;
                continue $sm;
              } else {
                this.WHEN_RESULT15__1 = this.tmp1_elvis_lhs14__1;
                this.state_1 = 6;
                continue $sm;
              }
            } else {
              this.state_1 = 5;
              continue $sm;
            }

            ;
            break;
          case 5:
            this.tmp$ret$08__1 = false;
            if (false) {
              this.state_1 = 1;
              continue $sm;
            }

            this.state_1 = 7;
            continue $sm;
          case 6:
            this.r16__1 = this.WHEN_RESULT15__1;
            this.r16__1(this.tmp0_resolveWith10__1);
            var tmp_13 = this;
            tmp_13.tmp0__set_state_17_4wqg24__1 = new Fulfilled(this.tmp0_resolveWith10__1);
            this.pending7__1.state = this.tmp0__set_state_17_4wqg24__1;
            this.tmp$ret$08__1 = true;
            this.state_1 = 7;
            continue $sm;
          case 7:
            ;
            this.exceptionState_1 = 35;
            this.state_1 = 9;
            continue $sm;
          case 8:
            this.exceptionState_1 = 35;
            var tmp_14 = this.exception_1;
            if (tmp_14 instanceof Error) {
              this.err18__1 = this.exception_1;
              var tmp$ret$2;
              l$ret$3: do {
                var tmp_15 = this.pending7__1.state;
                var tmp0_elvis_lhs = tmp_15 instanceof ConcurrentState ? tmp_15 : null;
                var tmp_16;
                if (tmp0_elvis_lhs == null) {
                  tmp$ret$2 = false;
                  break l$ret$3;
                } else {
                  tmp_16 = tmp0_elvis_lhs;
                }
                var s = tmp_16;
                if (s instanceof PendingState) {
                  var tmp_17 = this.pending7__1.rejectFn;
                  var tmp1_elvis_lhs = (!(tmp_17 == null) ? typeof tmp_17 === 'function' : false) ? tmp_17 : null;
                  var tmp_18;
                  if (tmp1_elvis_lhs == null) {
                    tmp$ret$2 = false;
                    break l$ret$3;
                  } else {
                    tmp_18 = tmp1_elvis_lhs;
                  }
                  var r = tmp_18;
                  r(this.err18__1);
                  var tmp0__set_state__b2y64u = new Rejected(this.err18__1);
                  this.pending7__1.state = tmp0__set_state__b2y64u;
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
          case 9:
            this.exceptionState_1 = 35;
            this.tmp2_exception19__1 = this.pending7__1;
            var tmp_19 = this;
            this.resolveFn20__1 = {_v: null};
            this.rejectFn21__1 = {_v: null};
            var tmp_20 = this;
            tmp_20.promise22__1 = new Promise(PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda$lambda_0(this.resolveFn20__1, this.rejectFn21__1));
            var tmp_21 = this;
            tmp_21.tmp0__set_resolveFn_23_ff0jho_1 = this.resolveFn20__1._v;
            this.promise22__1.resolveFn = this.tmp0__set_resolveFn_23_ff0jho_1;
            var tmp_22 = this;
            tmp_22.tmp1__set_rejectFn_24_3pvzu1__1 = this.rejectFn21__1._v;
            this.promise22__1.rejectFn = this.tmp1__set_rejectFn_24_3pvzu1__1;
            var tmp_23 = this;
            tmp_23.tmp2__set_state_25_q2qd65__1 = PendingState_getInstance();
            this.promise22__1.state = this.tmp2__set_state_25_q2qd65__1;
            tmp_19.pending26__1 = this.promise22__1;
            this.exceptionState_1 = 16;
            this.state_1 = 10;
            continue $sm;
          case 10:
            this.state_1 = 11;
            suspendResult = await_0(this.tmp2_exception19__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 11:
            this.tmp0_resolveWith28__1 = suspendResult;
            var tmp_24 = this;
            var tmp_25 = this.pending26__1.state;
            tmp_24.tmp0_elvis_lhs29__1 = tmp_25 instanceof ConcurrentState ? tmp_25 : null;
            if (this.tmp0_elvis_lhs29__1 == null) {
              this.tmp$ret$427__1 = false;
              this.state_1 = 15;
              var tmp_26 = this;
              continue $sm;
            } else {
              this.WHEN_RESULT30__1 = this.tmp0_elvis_lhs29__1;
              this.state_1 = 12;
              continue $sm;
            }

            break;
          case 12:
            this.s31__1 = this.WHEN_RESULT30__1;
            var tmp_27 = this.s31__1;
            if (tmp_27 instanceof PendingState) {
              var tmp_28 = this;
              var tmp_29 = this.pending26__1.resolveFn;
              tmp_28.tmp1_elvis_lhs32__1 = (!(tmp_29 == null) ? typeof tmp_29 === 'function' : false) ? tmp_29 : null;
              if (this.tmp1_elvis_lhs32__1 == null) {
                this.tmp$ret$427__1 = false;
                this.state_1 = 15;
                var tmp_30 = this;
                continue $sm;
              } else {
                this.WHEN_RESULT33__1 = this.tmp1_elvis_lhs32__1;
                this.state_1 = 14;
                continue $sm;
              }
            } else {
              this.state_1 = 13;
              continue $sm;
            }

            ;
            break;
          case 13:
            this.tmp$ret$427__1 = false;
            if (false) {
              this.state_1 = 10;
              continue $sm;
            }

            this.state_1 = 15;
            continue $sm;
          case 14:
            this.r34__1 = this.WHEN_RESULT33__1;
            this.r34__1(this.tmp0_resolveWith28__1);
            var tmp_31 = this;
            tmp_31.tmp0__set_state_35_4wqg0g_1 = new Fulfilled(this.tmp0_resolveWith28__1);
            this.pending26__1.state = this.tmp0__set_state_35_4wqg0g_1;
            this.tmp$ret$427__1 = true;
            this.state_1 = 15;
            continue $sm;
          case 15:
            ;
            this.exceptionState_1 = 35;
            this.state_1 = 25;
            continue $sm;
          case 16:
            this.exceptionState_1 = 35;
            var tmp_32 = this.exception_1;
            if (tmp_32 instanceof Error) {
              this.err36__1 = this.exception_1;
              this.exceptionState_1 = 23;
              this.state_1 = 17;
              continue $sm;
            } else {
              throw this.exception_1;
            }

            break;
          case 17:
            this.state_1 = 18;
            suspendResult = delay(new Long(10, 0), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 18:
            this.tmp1_resolveWith38__1 = 2;
            var tmp_33 = this;
            var tmp_34 = this.pending26__1.state;
            tmp_33.tmp0_elvis_lhs39__1 = tmp_34 instanceof ConcurrentState ? tmp_34 : null;
            if (this.tmp0_elvis_lhs39__1 == null) {
              this.tmp$ret$637__1 = false;
              this.state_1 = 22;
              var tmp_35 = this;
              continue $sm;
            } else {
              this.WHEN_RESULT40__1 = this.tmp0_elvis_lhs39__1;
              this.state_1 = 19;
              continue $sm;
            }

            break;
          case 19:
            this.s41__1 = this.WHEN_RESULT40__1;
            var tmp_36 = this.s41__1;
            if (tmp_36 instanceof PendingState) {
              var tmp_37 = this;
              var tmp_38 = this.pending26__1.resolveFn;
              tmp_37.tmp1_elvis_lhs42__1 = (!(tmp_38 == null) ? typeof tmp_38 === 'function' : false) ? tmp_38 : null;
              if (this.tmp1_elvis_lhs42__1 == null) {
                this.tmp$ret$637__1 = false;
                this.state_1 = 22;
                var tmp_39 = this;
                continue $sm;
              } else {
                this.WHEN_RESULT43__1 = this.tmp1_elvis_lhs42__1;
                this.state_1 = 21;
                continue $sm;
              }
            } else {
              this.state_1 = 20;
              continue $sm;
            }

            ;
            break;
          case 20:
            this.tmp$ret$637__1 = false;
            if (false) {
              this.state_1 = 17;
              continue $sm;
            }

            this.state_1 = 22;
            continue $sm;
          case 21:
            this.r44__1 = this.WHEN_RESULT43__1;
            this.r44__1(this.tmp1_resolveWith38__1);
            var tmp_40 = this;
            tmp_40.tmp0__set_state_45_4wqfzl_1 = new Fulfilled(this.tmp1_resolveWith38__1);
            this.pending26__1.state = this.tmp0__set_state_45_4wqfzl_1;
            this.tmp$ret$637__1 = true;
            this.state_1 = 22;
            continue $sm;
          case 22:
            ;
            this.exceptionState_1 = 35;
            this.state_1 = 24;
            continue $sm;
          case 23:
            this.exceptionState_1 = 35;
            var tmp_41 = this.exception_1;
            if (tmp_41 instanceof Error) {
              this.err46__1 = this.exception_1;
              var tmp$ret$8;
              l$ret$9: do {
                var tmp_42 = this.pending26__1.state;
                var tmp0_elvis_lhs_0 = tmp_42 instanceof ConcurrentState ? tmp_42 : null;
                var tmp_43;
                if (tmp0_elvis_lhs_0 == null) {
                  tmp$ret$8 = false;
                  break l$ret$9;
                } else {
                  tmp_43 = tmp0_elvis_lhs_0;
                }
                var s_0 = tmp_43;
                if (s_0 instanceof PendingState) {
                  var tmp_44 = this.pending26__1.rejectFn;
                  var tmp1_elvis_lhs_0 = (!(tmp_44 == null) ? typeof tmp_44 === 'function' : false) ? tmp_44 : null;
                  var tmp_45;
                  if (tmp1_elvis_lhs_0 == null) {
                    tmp$ret$8 = false;
                    break l$ret$9;
                  } else {
                    tmp_45 = tmp1_elvis_lhs_0;
                  }
                  var r_0 = tmp_45;
                  r_0(this.err46__1);
                  var tmp0__set_state__b2y64u_0 = new Rejected(this.err46__1);
                  this.pending26__1.state = tmp0__set_state__b2y64u_0;
                  tmp$ret$8 = true;
                  break l$ret$9;
                }
                tmp$ret$8 = false;
              }
               while (false);
              this.state_1 = 24;
              continue $sm;
            } else {
              throw this.exception_1;
            }

            break;
          case 24:
            this.exceptionState_1 = 35;
            this.state_1 = 25;
            continue $sm;
          case 25:
            this.exceptionState_1 = 35;
            this.tmp3_map47__1 = this.pending26__1;
            var tmp_46 = this;
            this.resolveFn48__1 = {_v: null};
            this.rejectFn49__1 = {_v: null};
            var tmp_47 = this;
            tmp_47.promise50__1 = new Promise(PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda$lambda_1(this.resolveFn48__1, this.rejectFn49__1));
            var tmp_48 = this;
            tmp_48.tmp0__set_resolveFn_51_ff0jk7__1 = this.resolveFn48__1._v;
            this.promise50__1.resolveFn = this.tmp0__set_resolveFn_51_ff0jk7__1;
            var tmp_49 = this;
            tmp_49.tmp1__set_rejectFn_52_3pvzri_1 = this.rejectFn49__1._v;
            this.promise50__1.rejectFn = this.tmp1__set_rejectFn_52_3pvzri_1;
            var tmp_50 = this;
            tmp_50.tmp2__set_state_53_q2qd3m_1 = PendingState_getInstance();
            this.promise50__1.state = this.tmp2__set_state_53_q2qd3m_1;
            tmp_46.pending54__1 = this.promise50__1;
            this.exceptionState_1 = 32;
            this.state_1 = 26;
            continue $sm;
          case 26:
            this.state_1 = 27;
            suspendResult = await_0(this.tmp3_map47__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 27:
            this.tmp4__anonymous_56_126g1g_1 = suspendResult;
            this.tmp0_resolveWith57__1 = this.tmp4__anonymous_56_126g1g_1 - 2 | 0;
            var tmp_51 = this;
            var tmp_52 = this.pending54__1.state;
            tmp_51.tmp0_elvis_lhs58__1 = tmp_52 instanceof ConcurrentState ? tmp_52 : null;
            if (this.tmp0_elvis_lhs58__1 == null) {
              this.tmp$ret$1055__1 = false;
              this.state_1 = 31;
              var tmp_53 = this;
              continue $sm;
            } else {
              this.WHEN_RESULT59__1 = this.tmp0_elvis_lhs58__1;
              this.state_1 = 28;
              continue $sm;
            }

            break;
          case 28:
            this.s60__1 = this.WHEN_RESULT59__1;
            var tmp_54 = this.s60__1;
            if (tmp_54 instanceof PendingState) {
              var tmp_55 = this;
              var tmp_56 = this.pending54__1.resolveFn;
              tmp_55.tmp1_elvis_lhs61__1 = (!(tmp_56 == null) ? typeof tmp_56 === 'function' : false) ? tmp_56 : null;
              if (this.tmp1_elvis_lhs61__1 == null) {
                this.tmp$ret$1055__1 = false;
                this.state_1 = 31;
                var tmp_57 = this;
                continue $sm;
              } else {
                this.WHEN_RESULT62__1 = this.tmp1_elvis_lhs61__1;
                this.state_1 = 30;
                continue $sm;
              }
            } else {
              this.state_1 = 29;
              continue $sm;
            }

            ;
            break;
          case 29:
            this.tmp$ret$1055__1 = false;
            if (false) {
              this.state_1 = 26;
              continue $sm;
            }

            this.state_1 = 31;
            continue $sm;
          case 30:
            this.r63__1 = this.WHEN_RESULT62__1;
            this.r63__1(this.tmp0_resolveWith57__1);
            var tmp_58 = this;
            tmp_58.tmp0__set_state_64_4wqfxw_1 = new Fulfilled(this.tmp0_resolveWith57__1);
            this.pending54__1.state = this.tmp0__set_state_64_4wqfxw_1;
            this.tmp$ret$1055__1 = true;
            this.state_1 = 31;
            continue $sm;
          case 31:
            ;
            this.exceptionState_1 = 35;
            this.state_1 = 33;
            continue $sm;
          case 32:
            this.exceptionState_1 = 35;
            var tmp_59 = this.exception_1;
            if (tmp_59 instanceof Error) {
              this.err65__1 = this.exception_1;
              var tmp$ret$12;
              l$ret$13: do {
                var tmp_60 = this.pending54__1.state;
                var tmp0_elvis_lhs_1 = tmp_60 instanceof ConcurrentState ? tmp_60 : null;
                var tmp_61;
                if (tmp0_elvis_lhs_1 == null) {
                  tmp$ret$12 = false;
                  break l$ret$13;
                } else {
                  tmp_61 = tmp0_elvis_lhs_1;
                }
                var s_1 = tmp_61;
                if (s_1 instanceof PendingState) {
                  var tmp_62 = this.pending54__1.rejectFn;
                  var tmp1_elvis_lhs_1 = (!(tmp_62 == null) ? typeof tmp_62 === 'function' : false) ? tmp_62 : null;
                  var tmp_63;
                  if (tmp1_elvis_lhs_1 == null) {
                    tmp$ret$12 = false;
                    break l$ret$13;
                  } else {
                    tmp_63 = tmp1_elvis_lhs_1;
                  }
                  var r_1 = tmp_63;
                  r_1(this.err65__1);
                  var tmp0__set_state__b2y64u_1 = new Rejected(this.err65__1);
                  this.pending54__1.state = tmp0__set_state__b2y64u_1;
                  tmp$ret$12 = true;
                  break l$ret$13;
                }
                tmp$ret$12 = false;
              }
               while (false);
              this.state_1 = 33;
              continue $sm;
            } else {
              throw this.exception_1;
            }

            break;
          case 33:
            this.exceptionState_1 = 35;
            this.tmp5_collect66__1 = this.pending54__1;
            this.state_1 = 34;
            suspendResult = await_0(this.tmp5_collect66__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 34:
            var tmp6__anonymous__fv9ai5 = suspendResult;
            expect(tmp6__anonymous__fv9ai5).toBe_vfaz1p_k$(0);
            return Unit_getInstance();
          case 35:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 35) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda.prototype.create_5ibv4j_k$ = function ($this$runTest, completion) {
    var i = new PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda(this.this$0__1, completion);
    i.$this$runTest_1 = $this$runTest;
    return i;
  };
  PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_5ibv4j_k$((!(value == null) ? isInterface(value, TestScope) : false) ? value : THROW_CCE(), completion);
  };
  PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda.$metadata$ = classMeta('PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda_0(this$0, resultContinuation) {
    var i = new PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda(this$0, resultContinuation);
    var l = function ($this$runTest, $cont) {
      return i.invoke_qflhgo_k$($this$runTest, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function PendingCanSafelyBeExecuteInSuspendContexts() {
  }
  PendingCanSafelyBeExecuteInSuspendContexts.prototype.should_map_from_one_pending_type_to_another_faszab_k$ = function () {
    var tmp = new Long(0, 0);
    return runTest$default(null, tmp, PendingCanSafelyBeExecuteInSuspendContexts$should_map_from_one_pending_type_to_another$slambda_0(this, null), 3, null);
  };
  PendingCanSafelyBeExecuteInSuspendContexts.$metadata$ = classMeta('PendingCanSafelyBeExecuteInSuspendContexts');
  function test_fun_izoufj_0() {
    suite('PendingCanSafelyBeExecuteInSuspendContexts', false, test_fun$PendingCanSafelyBeExecuteInSuspendContexts_test_fun_qptcim());
  }
  function test_fun$PendingCanSafelyBeExecuteInSuspendContexts_test_fun$should_map_from_one_pending_type_to_another_test_fun_wvdqcq() {
    return function () {
      var tmp = new PendingCanSafelyBeExecuteInSuspendContexts();
      return tmp.should_map_from_one_pending_type_to_another_faszab_k$();
      $unreachable();
    };
  }
  function test_fun$PendingCanSafelyBeExecuteInSuspendContexts_test_fun_qptcim() {
    return function () {
      test('should_map_from_one_pending_type_to_another', false, test_fun$PendingCanSafelyBeExecuteInSuspendContexts_test_fun$should_map_from_one_pending_type_to_another_test_fun_wvdqcq());
      return Unit_getInstance();
    };
  }
  function PendingLambdasShouldBeAbleToRunSuspendingCode$should_be_constructable_with_suspend_functions_in_a_suspend_scope$lambda() {
    return function () {
      return 0;
    };
  }
  function PendingLambdasShouldBeAbleToRunSuspendingCode$should_be_constructable_with_suspend_functions_in_a_suspend_scope$lambda_0($tmp0_pending) {
    return function (resolve, reject) {
      var tmp;
      try {
        tmp = resolve($tmp0_pending());
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          tmp_0 = reject($p);
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function PendingLambdasShouldBeAbleToRunSuspendingCode$should_be_constructable_with_suspend_functions_in_a_suspend_scope$slambda($pend, resultContinuation) {
    this.$pend_1 = $pend;
    CoroutineImpl.call(this, resultContinuation);
  }
  PendingLambdasShouldBeAbleToRunSuspendingCode$should_be_constructable_with_suspend_functions_in_a_suspend_scope$slambda.prototype.invoke_qflhgo_k$ = function ($this$runTest, $cont) {
    var tmp = this.create_5ibv4j_k$($this$runTest, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  PendingLambdasShouldBeAbleToRunSuspendingCode$should_be_constructable_with_suspend_functions_in_a_suspend_scope$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_qflhgo_k$((!(p1 == null) ? isInterface(p1, TestScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  PendingLambdasShouldBeAbleToRunSuspendingCode$should_be_constructable_with_suspend_functions_in_a_suspend_scope$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            suspendResult = await_0(this.$pend_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var ARGUMENT = suspendResult;
            var ARGUMENT_0 = expect(ARGUMENT);
            ARGUMENT_0.toBe_vfaz1p_k$(0);
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
  PendingLambdasShouldBeAbleToRunSuspendingCode$should_be_constructable_with_suspend_functions_in_a_suspend_scope$slambda.prototype.create_5ibv4j_k$ = function ($this$runTest, completion) {
    var i = new PendingLambdasShouldBeAbleToRunSuspendingCode$should_be_constructable_with_suspend_functions_in_a_suspend_scope$slambda(this.$pend_1, completion);
    i.$this$runTest_1 = $this$runTest;
    return i;
  };
  PendingLambdasShouldBeAbleToRunSuspendingCode$should_be_constructable_with_suspend_functions_in_a_suspend_scope$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_5ibv4j_k$((!(value == null) ? isInterface(value, TestScope) : false) ? value : THROW_CCE(), completion);
  };
  PendingLambdasShouldBeAbleToRunSuspendingCode$should_be_constructable_with_suspend_functions_in_a_suspend_scope$slambda.$metadata$ = classMeta('PendingLambdasShouldBeAbleToRunSuspendingCode$should_be_constructable_with_suspend_functions_in_a_suspend_scope$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function PendingLambdasShouldBeAbleToRunSuspendingCode$should_be_constructable_with_suspend_functions_in_a_suspend_scope$slambda_0($pend, resultContinuation) {
    var i = new PendingLambdasShouldBeAbleToRunSuspendingCode$should_be_constructable_with_suspend_functions_in_a_suspend_scope$slambda($pend, resultContinuation);
    var l = function ($this$runTest, $cont) {
      return i.invoke_qflhgo_k$($this$runTest, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function PendingLambdasShouldBeAbleToRunSuspendingCode() {
  }
  PendingLambdasShouldBeAbleToRunSuspendingCode.prototype.should_be_constructable_with_suspend_functions_in_a_suspend_scope_jwly9x_k$ = function () {
    var tmp$ret$0;
    {
      var tmp0_pending = PendingLambdasShouldBeAbleToRunSuspendingCode$should_be_constructable_with_suspend_functions_in_a_suspend_scope$lambda();
      tmp$ret$0 = new Promise(PendingLambdasShouldBeAbleToRunSuspendingCode$should_be_constructable_with_suspend_functions_in_a_suspend_scope$lambda_0(tmp0_pending));
    }
    var pend = tmp$ret$0;
    var tmp = new Long(0, 0);
    return runTest$default(null, tmp, PendingLambdasShouldBeAbleToRunSuspendingCode$should_be_constructable_with_suspend_functions_in_a_suspend_scope$slambda_0(pend, null), 3, null);
  };
  PendingLambdasShouldBeAbleToRunSuspendingCode.$metadata$ = classMeta('PendingLambdasShouldBeAbleToRunSuspendingCode');
  function test_fun_izoufj_1() {
    suite('PendingLambdasShouldBeAbleToRunSuspendingCode', false, test_fun$PendingLambdasShouldBeAbleToRunSuspendingCode_test_fun_rz20my());
  }
  function test_fun$PendingLambdasShouldBeAbleToRunSuspendingCode_test_fun$should_be_constructable_with_suspend_functions_in_a_suspend_scope_test_fun_phdu1g() {
    return function () {
      var tmp = new PendingLambdasShouldBeAbleToRunSuspendingCode();
      return tmp.should_be_constructable_with_suspend_functions_in_a_suspend_scope_jwly9x_k$();
      $unreachable();
    };
  }
  function test_fun$PendingLambdasShouldBeAbleToRunSuspendingCode_test_fun_rz20my() {
    return function () {
      test('should_be_constructable_with_suspend_functions_in_a_suspend_scope', false, test_fun$PendingLambdasShouldBeAbleToRunSuspendingCode_test_fun$should_be_constructable_with_suspend_functions_in_a_suspend_scope_test_fun_phdu1g());
      return Unit_getInstance();
    };
  }
  function PendingsCanBeControlledFromTheOutside$should_be_resolvable_externally$slambda$lambda($resolveFn, $rejectFn) {
    return function (resolve, reject) {
      $resolveFn._v = resolve;
      $rejectFn._v = reject;
      return Unit_getInstance();
    };
  }
  function PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda$slambda.prototype.invoke_u7fh2j_k$ = function ($this$pending, $cont) {
    var tmp = this.create_b6qu53_k$($this$pending, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_u7fh2j_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          return 0;
        } else if (tmp === 1) {
          throw this.exception_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda$slambda.prototype.create_b6qu53_k$ = function ($this$pending, completion) {
    var i = new PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda$slambda(completion);
    i.$this$pending_1 = $this$pending;
    return i;
  };
  PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda$slambda.$metadata$ = classMeta('PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda$slambda_0(resultContinuation) {
    var i = new PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda$slambda(resultContinuation);
    var l = function ($this$pending, $cont) {
      return i.invoke_u7fh2j_k$($this$pending, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function PendingsCanBeControlledFromTheOutside$should_be_resolvable_externally$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  PendingsCanBeControlledFromTheOutside$should_be_resolvable_externally$slambda.prototype.invoke_qflhgo_k$ = function ($this$runTest, $cont) {
    var tmp = this.create_5ibv4j_k$($this$runTest, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  PendingsCanBeControlledFromTheOutside$should_be_resolvable_externally$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_qflhgo_k$((!(p1 == null) ? isInterface(p1, TestScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  PendingsCanBeControlledFromTheOutside$should_be_resolvable_externally$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            var tmp_0 = this;
            this.resolveFn0__1 = {_v: null};
            this.rejectFn1__1 = {_v: null};
            var tmp_1 = this;
            tmp_1.promise2__1 = new Promise(PendingsCanBeControlledFromTheOutside$should_be_resolvable_externally$slambda$lambda(this.resolveFn0__1, this.rejectFn1__1));
            var tmp_2 = this;
            tmp_2.tmp0__set_resolveFn_3_nes19k_1 = this.resolveFn0__1._v;
            this.promise2__1.resolveFn = this.tmp0__set_resolveFn_3_nes19k_1;
            var tmp_3 = this;
            tmp_3.tmp1__set_rejectFn_4_dv8s8x_1 = this.rejectFn1__1._v;
            this.promise2__1.rejectFn = this.tmp1__set_rejectFn_4_dv8s8x_1;
            var tmp_4 = this;
            tmp_4.tmp2__set_state_5_sc4qqj_1 = PendingState_getInstance();
            this.promise2__1.state = this.tmp2__set_state_5_sc4qqj_1;
            tmp_0.pending6__1 = this.promise2__1;
            var tmp_5 = this;
            l$ret$1: do {
              var tmp_6 = this.pending6__1.state;
              var tmp0_elvis_lhs = tmp_6 instanceof ConcurrentState ? tmp_6 : null;
              var tmp_7;
              if (tmp0_elvis_lhs == null) {
                this.tmp$ret$07__1 = false;
                break l$ret$1;
              } else {
                tmp_7 = tmp0_elvis_lhs;
              }
              var s = tmp_7;
              if (s instanceof PendingState) {
                var tmp_8 = this.pending6__1.resolveFn;
                var tmp1_elvis_lhs = (!(tmp_8 == null) ? typeof tmp_8 === 'function' : false) ? tmp_8 : null;
                var tmp_9;
                if (tmp1_elvis_lhs == null) {
                  this.tmp$ret$07__1 = false;
                  break l$ret$1;
                } else {
                  tmp_9 = tmp1_elvis_lhs;
                }
                var r = tmp_9;
                r(1);
                var tmp0__set_state__b2y64u = new Fulfilled(1);
                this.pending6__1.state = tmp0__set_state__b2y64u;
                this.tmp$ret$07__1 = true;
                break l$ret$1;
              }
              this.tmp$ret$07__1 = false;
            }
             while (false);
            tmp_5.success8__1 = this.tmp$ret$07__1;
            expect(this.success8__1).toBe_vfaz1p_k$(true);
            this.state_1 = 1;
            suspendResult = await_0(this.pending6__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var res = suspendResult;
            var tmp$ret$2;
            l$ret$3: do {
              var tmp_10 = this.pending6__1.state;
              var tmp0_elvis_lhs_0 = tmp_10 instanceof ConcurrentState ? tmp_10 : null;
              var tmp_11;
              if (tmp0_elvis_lhs_0 == null) {
                tmp$ret$2 = false;
                break l$ret$3;
              } else {
                tmp_11 = tmp0_elvis_lhs_0;
              }
              var s_0 = tmp_11;
              if (s_0 instanceof PendingState) {
                var tmp_12 = this.pending6__1.resolveFn;
                var tmp1_elvis_lhs_0 = (!(tmp_12 == null) ? typeof tmp_12 === 'function' : false) ? tmp_12 : null;
                var tmp_13;
                if (tmp1_elvis_lhs_0 == null) {
                  tmp$ret$2 = false;
                  break l$ret$3;
                } else {
                  tmp_13 = tmp1_elvis_lhs_0;
                }
                var r_0 = tmp_13;
                r_0(2);
                var tmp0__set_state__b2y64u_0 = new Fulfilled(2);
                this.pending6__1.state = tmp0__set_state__b2y64u_0;
                tmp$ret$2 = true;
                break l$ret$3;
              }
              tmp$ret$2 = false;
            }
             while (false);
            var success2 = tmp$ret$2;
            expect(success2).toBe_vfaz1p_k$(false);
            expect(res).toBe_vfaz1p_k$(1);
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
  PendingsCanBeControlledFromTheOutside$should_be_resolvable_externally$slambda.prototype.create_5ibv4j_k$ = function ($this$runTest, completion) {
    var i = new PendingsCanBeControlledFromTheOutside$should_be_resolvable_externally$slambda(completion);
    i.$this$runTest_1 = $this$runTest;
    return i;
  };
  PendingsCanBeControlledFromTheOutside$should_be_resolvable_externally$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_5ibv4j_k$((!(value == null) ? isInterface(value, TestScope) : false) ? value : THROW_CCE(), completion);
  };
  PendingsCanBeControlledFromTheOutside$should_be_resolvable_externally$slambda.$metadata$ = classMeta('PendingsCanBeControlledFromTheOutside$should_be_resolvable_externally$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function PendingsCanBeControlledFromTheOutside$should_be_resolvable_externally$slambda_0(resultContinuation) {
    var i = new PendingsCanBeControlledFromTheOutside$should_be_resolvable_externally$slambda(resultContinuation);
    var l = function ($this$runTest, $cont) {
      return i.invoke_qflhgo_k$($this$runTest, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda.prototype.invoke_qflhgo_k$ = function ($this$runTest, $cont) {
    var tmp = this.create_5ibv4j_k$($this$runTest, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_qflhgo_k$((!(p1 == null) ? isInterface(p1, TestScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            var tmp_0 = this;
            tmp_0.pending0__1 = pending$default(this.$this$runTest_1, null, null, PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda$slambda_0(null), 3, null);
            var tmp_1 = this;
            l$ret$1: do {
              var tmp_2 = this.pending0__1.state;
              var tmp0_elvis_lhs = tmp_2 instanceof ConcurrentState ? tmp_2 : null;
              var tmp_3;
              if (tmp0_elvis_lhs == null) {
                this.tmp$ret$01__1 = false;
                break l$ret$1;
              } else {
                tmp_3 = tmp0_elvis_lhs;
              }
              var s = tmp_3;
              if (s instanceof PendingState) {
                var tmp_4 = this.pending0__1.resolveFn;
                var tmp1_elvis_lhs = (!(tmp_4 == null) ? typeof tmp_4 === 'function' : false) ? tmp_4 : null;
                var tmp_5;
                if (tmp1_elvis_lhs == null) {
                  this.tmp$ret$01__1 = false;
                  break l$ret$1;
                } else {
                  tmp_5 = tmp1_elvis_lhs;
                }
                var r = tmp_5;
                r(1);
                var tmp0__set_state__b2y64u = new Fulfilled(1);
                this.pending0__1.state = tmp0__set_state__b2y64u;
                this.tmp$ret$01__1 = true;
                break l$ret$1;
              }
              this.tmp$ret$01__1 = false;
            }
             while (false);
            tmp_1.success2__1 = this.tmp$ret$01__1;
            expect(this.success2__1).toBe_vfaz1p_k$(true);
            this.state_1 = 1;
            suspendResult = await_0(this.pending0__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var res = suspendResult;
            var tmp$ret$2;
            l$ret$3: do {
              var tmp_6 = this.pending0__1.state;
              var tmp0_elvis_lhs_0 = tmp_6 instanceof ConcurrentState ? tmp_6 : null;
              var tmp_7;
              if (tmp0_elvis_lhs_0 == null) {
                tmp$ret$2 = false;
                break l$ret$3;
              } else {
                tmp_7 = tmp0_elvis_lhs_0;
              }
              var s_0 = tmp_7;
              if (s_0 instanceof PendingState) {
                var tmp_8 = this.pending0__1.resolveFn;
                var tmp1_elvis_lhs_0 = (!(tmp_8 == null) ? typeof tmp_8 === 'function' : false) ? tmp_8 : null;
                var tmp_9;
                if (tmp1_elvis_lhs_0 == null) {
                  tmp$ret$2 = false;
                  break l$ret$3;
                } else {
                  tmp_9 = tmp1_elvis_lhs_0;
                }
                var r_0 = tmp_9;
                r_0(2);
                var tmp0__set_state__b2y64u_0 = new Fulfilled(2);
                this.pending0__1.state = tmp0__set_state__b2y64u_0;
                tmp$ret$2 = true;
                break l$ret$3;
              }
              tmp$ret$2 = false;
            }
             while (false);
            var success2 = tmp$ret$2;
            expect(success2).toBe_vfaz1p_k$(false);
            expect(res).toBe_vfaz1p_k$(1);
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
  PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda.prototype.create_5ibv4j_k$ = function ($this$runTest, completion) {
    var i = new PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda(completion);
    i.$this$runTest_1 = $this$runTest;
    return i;
  };
  PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_5ibv4j_k$((!(value == null) ? isInterface(value, TestScope) : false) ? value : THROW_CCE(), completion);
  };
  PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda.$metadata$ = classMeta('PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda_0(resultContinuation) {
    var i = new PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda(resultContinuation);
    var l = function ($this$runTest, $cont) {
      return i.invoke_qflhgo_k$($this$runTest, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function PendingsCanBeControlledFromTheOutside() {
  }
  PendingsCanBeControlledFromTheOutside.prototype.should_be_resolvable_externally_6km2h8_k$ = function () {
    var tmp = new Long(0, 0);
    return runTest$default(null, tmp, PendingsCanBeControlledFromTheOutside$should_be_resolvable_externally$slambda_0(null), 3, null);
  };
  PendingsCanBeControlledFromTheOutside.prototype.should_not_be_able_to_control_an_uncontrolled_pending_b826b0_k$ = function () {
    var tmp = new Long(0, 0);
    return runTest$default(null, tmp, PendingsCanBeControlledFromTheOutside$should_not_be_able_to_control_an_uncontrolled_pending$slambda_0(null), 3, null);
  };
  PendingsCanBeControlledFromTheOutside.$metadata$ = classMeta('PendingsCanBeControlledFromTheOutside');
  function test_fun_izoufj_2() {
    suite('PendingsCanBeControlledFromTheOutside', false, test_fun$PendingsCanBeControlledFromTheOutside_test_fun_6msmv3());
  }
  function test_fun$PendingsCanBeControlledFromTheOutside_test_fun$should_be_resolvable_externally_test_fun_ypay5c() {
    return function () {
      var tmp = new PendingsCanBeControlledFromTheOutside();
      return tmp.should_be_resolvable_externally_6km2h8_k$();
      $unreachable();
    };
  }
  function test_fun$PendingsCanBeControlledFromTheOutside_test_fun$should_not_be_able_to_control_an_uncontrolled_pending_test_fun_gz4kiw() {
    return function () {
      var tmp = new PendingsCanBeControlledFromTheOutside();
      return tmp.should_not_be_able_to_control_an_uncontrolled_pending_b826b0_k$();
      $unreachable();
    };
  }
  function test_fun$PendingsCanBeControlledFromTheOutside_test_fun_6msmv3() {
    return function () {
      test('should_be_resolvable_externally', false, test_fun$PendingsCanBeControlledFromTheOutside_test_fun$should_be_resolvable_externally_test_fun_ypay5c());
      test('should_not_be_able_to_control_an_uncontrolled_pending', false, test_fun$PendingsCanBeControlledFromTheOutside_test_fun$should_not_be_able_to_control_an_uncontrolled_pending_test_fun_gz4kiw());
      return Unit_getInstance();
    };
  }
  //region block: tests
  (function () {
    suite('', false, function () {
      test_fun_izoufj();
      test_fun_izoufj_0();
      test_fun_izoufj_1();
      test_fun_izoufj_2();
    });
  }());
  //endregion
  //region block: exports
  kotlin_foundation_runtimes_functions.$jsExportAll$(_);
  kotlin_foundation_runtimes_koncurrent_primitives_core.$jsExportAll$(_);
  kotlin_foundation_runtimes_koncurrent_primitives_mock.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=foundation-runtimes-koncurrent-pending-coroutines-test.js.map