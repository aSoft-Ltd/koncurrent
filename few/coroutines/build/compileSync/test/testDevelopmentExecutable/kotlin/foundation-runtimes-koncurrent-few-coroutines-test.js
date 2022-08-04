(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './foundation-runtimes-expect-core.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './kotlinx.coroutines-kotlinx-coroutines-test-js-ir.js', './foundation-runtimes-koncurrent-few-coroutines.js', './foundation-runtimes-koncurrent-primitives-mock.js', './foundation-runtimes-koncurrent-primitives-core.js', './foundation-runtimes-koncurrent-few-core.js', './kotlin-kotlin-test-js-ir.js', './foundation-runtimes-functions.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./foundation-runtimes-expect-core.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./kotlinx.coroutines-kotlinx-coroutines-test-js-ir.js'), require('./foundation-runtimes-koncurrent-few-coroutines.js'), require('./foundation-runtimes-koncurrent-primitives-mock.js'), require('./foundation-runtimes-koncurrent-primitives-core.js'), require('./foundation-runtimes-koncurrent-few-core.js'), require('./kotlin-kotlin-test-js-ir.js'), require('./foundation-runtimes-functions.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-few-coroutines-test'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-few-coroutines-test'.");
    }
    if (typeof this['foundation-runtimes-expect-core'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-few-coroutines-test'. Its dependency 'foundation-runtimes-expect-core' was not found. Please, check whether 'foundation-runtimes-expect-core' is loaded prior to 'foundation-runtimes-koncurrent-few-coroutines-test'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-few-coroutines-test'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-few-coroutines-test'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-test-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-few-coroutines-test'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-test-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-test-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-few-coroutines-test'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-few-coroutines'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-few-coroutines-test'. Its dependency 'foundation-runtimes-koncurrent-few-coroutines' was not found. Please, check whether 'foundation-runtimes-koncurrent-few-coroutines' is loaded prior to 'foundation-runtimes-koncurrent-few-coroutines-test'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-primitives-mock'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-few-coroutines-test'. Its dependency 'foundation-runtimes-koncurrent-primitives-mock' was not found. Please, check whether 'foundation-runtimes-koncurrent-primitives-mock' is loaded prior to 'foundation-runtimes-koncurrent-few-coroutines-test'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-primitives-core'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-few-coroutines-test'. Its dependency 'foundation-runtimes-koncurrent-primitives-core' was not found. Please, check whether 'foundation-runtimes-koncurrent-primitives-core' is loaded prior to 'foundation-runtimes-koncurrent-few-coroutines-test'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-few-core'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-few-coroutines-test'. Its dependency 'foundation-runtimes-koncurrent-few-core' was not found. Please, check whether 'foundation-runtimes-koncurrent-few-core' is loaded prior to 'foundation-runtimes-koncurrent-few-coroutines-test'.");
    }
    if (typeof this['kotlin-kotlin-test-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-few-coroutines-test'. Its dependency 'kotlin-kotlin-test-js-ir' was not found. Please, check whether 'kotlin-kotlin-test-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-few-coroutines-test'.");
    }
    if (typeof this['foundation-runtimes-functions'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-few-coroutines-test'. Its dependency 'foundation-runtimes-functions' was not found. Please, check whether 'foundation-runtimes-functions' is loaded prior to 'foundation-runtimes-koncurrent-few-coroutines-test'.");
    }
    root['foundation-runtimes-koncurrent-few-coroutines-test'] = factory(typeof this['foundation-runtimes-koncurrent-few-coroutines-test'] === 'undefined' ? {} : this['foundation-runtimes-koncurrent-few-coroutines-test'], this['kotlin-kotlin-stdlib-js-ir'], this['foundation-runtimes-expect-core'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['kotlinx.coroutines-kotlinx-coroutines-test-js-ir'], this['foundation-runtimes-koncurrent-few-coroutines'], this['foundation-runtimes-koncurrent-primitives-mock'], this['foundation-runtimes-koncurrent-primitives-core'], this['foundation-runtimes-koncurrent-few-core'], this['kotlin-kotlin-test-js-ir'], this['foundation-runtimes-functions']);
  }
}(this, function (_, kotlin_kotlin, kotlin_foundation_runtimes_expect_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_test, kotlin_foundation_runtimes_koncurrent_few_coroutines, kotlin_foundation_runtimes_koncurrent_primitives_mock, kotlin_foundation_runtimes_koncurrent_primitives_core, kotlin_foundation_runtimes_koncurrent_few_core, kotlin_kotlin_test, kotlin_foundation_runtimes_functions) {
  'use strict';
  //region block: imports
  var CoroutineImpl = kotlin_kotlin.$_$.m2;
  var Unit_getInstance = kotlin_kotlin.$_$.i1;
  var THROW_CCE = kotlin_kotlin.$_$.c4;
  var println = kotlin_kotlin.$_$.r2;
  var classMeta = kotlin_kotlin.$_$.u2;
  var expect = kotlin_foundation_runtimes_expect_core.$_$.a;
  var toBeLessThan = kotlin_foundation_runtimes_expect_core.$_$.b;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var isInterface = kotlin_kotlin.$_$.d3;
  var until = kotlin_kotlin.$_$.k3;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w1;
  var TestScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_test.$_$.b;
  var toFlow = kotlin_foundation_runtimes_koncurrent_few_coroutines.$_$.b;
  var onEach = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q;
  var toFew = kotlin_foundation_runtimes_koncurrent_few_coroutines.$_$.a;
  var MockExecutor_init_$Create$ = kotlin_foundation_runtimes_koncurrent_primitives_mock.$_$.a;
  var Executors_getInstance = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.a;
  var SimpleFewImpl = kotlin_foundation_runtimes_koncurrent_few_core.$_$.a;
  var flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p;
  var Long = kotlin_kotlin.$_$.z3;
  var runTest$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_test.$_$.a;
  var suite = kotlin_kotlin_test.$_$.h;
  var test = kotlin_kotlin_test.$_$.i;
  var SuspendFunction1 = kotlin_kotlin.$_$.o2;
  //endregion
  //region block: pre-declaration
  CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda.prototype.constructor = CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda;
  CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda_1.prototype = Object.create(CoroutineImpl.prototype);
  CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda_1.prototype.constructor = CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda_1;
  CanConvertAFewIntoAFlow$getFlowNumbers$slambda.prototype = Object.create(CoroutineImpl.prototype);
  CanConvertAFewIntoAFlow$getFlowNumbers$slambda.prototype.constructor = CanConvertAFewIntoAFlow$getFlowNumbers$slambda;
  CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda.prototype = Object.create(CoroutineImpl.prototype);
  CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda.prototype.constructor = CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda;
  CanConvertAFewIntoAFlow$a_flow_should_be_callable_as_a_few$slambda.prototype = Object.create(CoroutineImpl.prototype);
  CanConvertAFewIntoAFlow$a_flow_should_be_callable_as_a_few$slambda.prototype.constructor = CanConvertAFewIntoAFlow$a_flow_should_be_callable_as_a_few$slambda;
  //endregion
  function CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda.prototype.invoke_kv9s22_k$ = function (it, $cont) {
    var tmp = this.create_4s7vdz_k$(it, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_kv9s22_k$((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $cont);
  };
  CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          println('Flowing ' + this.it_1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.exception_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda.prototype.create_4s7vdz_k$ = function (it, completion) {
    var i = new CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda(completion);
    i.it_1 = it;
    return i;
  };
  CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_4s7vdz_k$((!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE(), completion);
  };
  CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda.$metadata$ = classMeta('CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda_0(resultContinuation) {
    var i = new CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda(resultContinuation);
    var l = function (it, $cont) {
      return i.invoke_kv9s22_k$(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda_1(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda_1.prototype.invoke_kv9s22_k$ = function (it, $cont) {
    var tmp = this.create_4s7vdz_k$(it, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda_1.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_kv9s22_k$((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE(), $cont);
  };
  CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda_1.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          println('collecting :' + this.it_1);
          toBeLessThan(expect(this.it_1), 3);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.exception_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda_1.prototype.create_4s7vdz_k$ = function (it, completion) {
    var i = new CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda_1(completion);
    i.it_1 = it;
    return i;
  };
  CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda_1.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_4s7vdz_k$((!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE(), completion);
  };
  CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda_1.$metadata$ = classMeta('CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda_2(resultContinuation) {
    var i = new CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda_1(resultContinuation);
    var l = function (it, $cont) {
      return i.invoke_kv9s22_k$(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function CanConvertAFewIntoAFlow$a_flow_should_be_callable_as_a_few$slambda$lambda() {
    return function (it) {
      println('Flowing ' + it);
      return Unit_getInstance();
    };
  }
  function CanConvertAFewIntoAFlow$a_flow_should_be_callable_as_a_few$slambda$lambda_0() {
    return function (it) {
      println('collecting :' + it);
      toBeLessThan(expect(it), 3);
      return Unit_getInstance();
    };
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.function_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    return this.function_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function CanConvertAFewIntoAFlow$getFewNumbers$lambda() {
    return function ($this$few) {
      {
      }
      var inductionVariable = 0;
      var tmp;
      if (inductionVariable < 3) {
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          {
            $this$few.emit(index);
          }
        }
         while (inductionVariable < 3);
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function CanConvertAFewIntoAFlow$getFlowNumbers$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  CanConvertAFewIntoAFlow$getFlowNumbers$slambda.prototype.invoke_ozuoch_k$ = function ($this$flow, $cont) {
    var tmp = this.create_uouz4k_k$($this$flow, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  CanConvertAFewIntoAFlow$getFlowNumbers$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_ozuoch_k$((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $cont);
  };
  CanConvertAFewIntoAFlow$getFlowNumbers$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 4;
            this.tmp0_iterator0__1 = until(0, 3).iterator_jk1svi_k$();
            this.state_1 = 1;
            continue $sm;
          case 1:
            if (!this.tmp0_iterator0__1.hasNext_bitz1p_k$()) {
              this.state_1 = 3;
              continue $sm;
            }

            this.index1__1 = this.tmp0_iterator0__1.next_20eer_k$();
            this.state_1 = 2;
            suspendResult = this.$this$flow_1.emit_1fbrsb_k$(this.index1__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.state_1 = 1;
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.exception_1;
        }
      } catch ($p) {
        if (this.exceptionState_1 === 4) {
          throw $p;
        } else {
          this.state_1 = this.exceptionState_1;
          this.exception_1 = $p;
        }
      }
     while (true);
  };
  CanConvertAFewIntoAFlow$getFlowNumbers$slambda.prototype.create_uouz4k_k$ = function ($this$flow, completion) {
    var i = new CanConvertAFewIntoAFlow$getFlowNumbers$slambda(completion);
    i.$this$flow_1 = $this$flow;
    return i;
  };
  CanConvertAFewIntoAFlow$getFlowNumbers$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_uouz4k_k$((!(value == null) ? isInterface(value, FlowCollector) : false) ? value : THROW_CCE(), completion);
  };
  CanConvertAFewIntoAFlow$getFlowNumbers$slambda.$metadata$ = classMeta('CanConvertAFewIntoAFlow$getFlowNumbers$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function CanConvertAFewIntoAFlow$getFlowNumbers$slambda_0(resultContinuation) {
    var i = new CanConvertAFewIntoAFlow$getFlowNumbers$slambda(resultContinuation);
    var l = function ($this$flow, $cont) {
      return i.invoke_ozuoch_k$($this$flow, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda.prototype.invoke_qflhgo_k$ = function ($this$runTest, $cont) {
    var tmp = this.create_5ibv4j_k$($this$runTest, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_qflhgo_k$((!(p1 == null) ? isInterface(p1, TestScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            var tmp_0 = toFlow(this.this$0__1.getFewNumbers_268xa0_k$());
            var tmp_1 = onEach(tmp_0, CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda_0(null));
            var tmp_2 = CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda$slambda_2(null);
            suspendResult = tmp_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_2), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
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
  CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda.prototype.create_5ibv4j_k$ = function ($this$runTest, completion) {
    var i = new CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda(this.this$0__1, completion);
    i.$this$runTest_1 = $this$runTest;
    return i;
  };
  CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_5ibv4j_k$((!(value == null) ? isInterface(value, TestScope) : false) ? value : THROW_CCE(), completion);
  };
  CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda.$metadata$ = classMeta('CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda_0(this$0, resultContinuation) {
    var i = new CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda(this$0, resultContinuation);
    var l = function ($this$runTest, $cont) {
      return i.invoke_qflhgo_k$($this$runTest, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function CanConvertAFewIntoAFlow$a_flow_should_be_callable_as_a_few$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  CanConvertAFewIntoAFlow$a_flow_should_be_callable_as_a_few$slambda.prototype.invoke_qflhgo_k$ = function ($this$runTest, $cont) {
    var tmp = this.create_5ibv4j_k$($this$runTest, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  CanConvertAFewIntoAFlow$a_flow_should_be_callable_as_a_few$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_qflhgo_k$((!(p1 == null) ? isInterface(p1, TestScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  CanConvertAFewIntoAFlow$a_flow_should_be_callable_as_a_few$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          var tmp_0 = toFew(this.this$0__1.getFlowNumbers_j2jym2_k$(), this.$this$runTest_1);
          var tmp_1 = tmp_0.onEach(CanConvertAFewIntoAFlow$a_flow_should_be_callable_as_a_few$slambda$lambda()).executeOn(this.this$0__1.executor_1);
          tmp_1.collect(CanConvertAFewIntoAFlow$a_flow_should_be_callable_as_a_few$slambda$lambda_0());
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.exception_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  CanConvertAFewIntoAFlow$a_flow_should_be_callable_as_a_few$slambda.prototype.create_5ibv4j_k$ = function ($this$runTest, completion) {
    var i = new CanConvertAFewIntoAFlow$a_flow_should_be_callable_as_a_few$slambda(this.this$0__1, completion);
    i.$this$runTest_1 = $this$runTest;
    return i;
  };
  CanConvertAFewIntoAFlow$a_flow_should_be_callable_as_a_few$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_5ibv4j_k$((!(value == null) ? isInterface(value, TestScope) : false) ? value : THROW_CCE(), completion);
  };
  CanConvertAFewIntoAFlow$a_flow_should_be_callable_as_a_few$slambda.$metadata$ = classMeta('CanConvertAFewIntoAFlow$a_flow_should_be_callable_as_a_few$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function CanConvertAFewIntoAFlow$a_flow_should_be_callable_as_a_few$slambda_0(this$0, resultContinuation) {
    var i = new CanConvertAFewIntoAFlow$a_flow_should_be_callable_as_a_few$slambda(this$0, resultContinuation);
    var l = function ($this$runTest, $cont) {
      return i.invoke_qflhgo_k$($this$runTest, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function CanConvertAFewIntoAFlow() {
    var tmp = this;
    tmp.executor_1 = MockExecutor_init_$Create$(null, 1, null);
  }
  CanConvertAFewIntoAFlow.prototype.get_executor_1zf7oc_k$ = function () {
    return this.executor_1;
  };
  CanConvertAFewIntoAFlow.prototype.getFewNumbers_268xa0_k$ = function () {
    var tmp$ret$1;
    {
      var tmp0_few = CanConvertAFewIntoAFlow$getFewNumbers$lambda();
      var tmp1_few = Executors_getInstance().default();
      var tmp$ret$0;
      {
        tmp$ret$0 = new SimpleFewImpl(tmp1_few, tmp0_few);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  CanConvertAFewIntoAFlow.prototype.getFlowNumbers_j2jym2_k$ = function () {
    return flow(CanConvertAFewIntoAFlow$getFlowNumbers$slambda_0(null));
  };
  CanConvertAFewIntoAFlow.prototype.a_few_should_be_callable_as_a_flow_giopdl_k$ = function () {
    var tmp = new Long(0, 0);
    return runTest$default(null, tmp, CanConvertAFewIntoAFlow$a_few_should_be_callable_as_a_flow$slambda_0(this, null), 3, null);
  };
  CanConvertAFewIntoAFlow.prototype.a_flow_should_be_callable_as_a_few_hnvtm9_k$ = function () {
    var tmp = new Long(0, 0);
    return runTest$default(null, tmp, CanConvertAFewIntoAFlow$a_flow_should_be_callable_as_a_few$slambda_0(this, null), 3, null);
  };
  CanConvertAFewIntoAFlow.$metadata$ = classMeta('CanConvertAFewIntoAFlow');
  function test_fun_izoufj() {
    suite('CanConvertAFewIntoAFlow', false, test_fun$CanConvertAFewIntoAFlow_test_fun_w0v0hb());
  }
  function test_fun$CanConvertAFewIntoAFlow_test_fun$a_few_should_be_callable_as_a_flow_test_fun_983vrf() {
    return function () {
      var tmp = new CanConvertAFewIntoAFlow();
      return tmp.a_few_should_be_callable_as_a_flow_giopdl_k$();
      $unreachable();
    };
  }
  function test_fun$CanConvertAFewIntoAFlow_test_fun$a_flow_should_be_callable_as_a_few_test_fun_jdrw5n() {
    return function () {
      var tmp = new CanConvertAFewIntoAFlow();
      return tmp.a_flow_should_be_callable_as_a_few_hnvtm9_k$();
      $unreachable();
    };
  }
  function test_fun$CanConvertAFewIntoAFlow_test_fun_w0v0hb() {
    return function () {
      test('a_few_should_be_callable_as_a_flow', false, test_fun$CanConvertAFewIntoAFlow_test_fun$a_few_should_be_callable_as_a_flow_test_fun_983vrf());
      test('a_flow_should_be_callable_as_a_few', false, test_fun$CanConvertAFewIntoAFlow_test_fun$a_flow_should_be_callable_as_a_few_test_fun_jdrw5n());
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
  kotlin_foundation_runtimes_koncurrent_few_core.$jsExportAll$(_);
  kotlin_foundation_runtimes_koncurrent_primitives_mock.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=foundation-runtimes-koncurrent-few-coroutines-test.js.map