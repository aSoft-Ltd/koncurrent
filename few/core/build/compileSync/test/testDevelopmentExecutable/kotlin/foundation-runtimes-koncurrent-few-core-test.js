(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './foundation-runtimes-koncurrent-later-core.js', './foundation-runtimes-koncurrent-primitives-mock.js', './foundation-runtimes-koncurrent-few-core.js', './kotlin-kotlin-test-js-ir.js', './foundation-runtimes-expect-core.js', './foundation-runtimes-koncurrent-primitives-core.js', './foundation-runtimes-functions.js', './foundation-runtimes-kotlinx-collections-interoperable.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./foundation-runtimes-koncurrent-later-core.js'), require('./foundation-runtimes-koncurrent-primitives-mock.js'), require('./foundation-runtimes-koncurrent-few-core.js'), require('./kotlin-kotlin-test-js-ir.js'), require('./foundation-runtimes-expect-core.js'), require('./foundation-runtimes-koncurrent-primitives-core.js'), require('./foundation-runtimes-functions.js'), require('./foundation-runtimes-kotlinx-collections-interoperable.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-few-core-test'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-few-core-test'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-later-core'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-few-core-test'. Its dependency 'foundation-runtimes-koncurrent-later-core' was not found. Please, check whether 'foundation-runtimes-koncurrent-later-core' is loaded prior to 'foundation-runtimes-koncurrent-few-core-test'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-primitives-mock'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-few-core-test'. Its dependency 'foundation-runtimes-koncurrent-primitives-mock' was not found. Please, check whether 'foundation-runtimes-koncurrent-primitives-mock' is loaded prior to 'foundation-runtimes-koncurrent-few-core-test'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-few-core'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-few-core-test'. Its dependency 'foundation-runtimes-koncurrent-few-core' was not found. Please, check whether 'foundation-runtimes-koncurrent-few-core' is loaded prior to 'foundation-runtimes-koncurrent-few-core-test'.");
    }
    if (typeof this['kotlin-kotlin-test-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-few-core-test'. Its dependency 'kotlin-kotlin-test-js-ir' was not found. Please, check whether 'kotlin-kotlin-test-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-few-core-test'.");
    }
    if (typeof this['foundation-runtimes-expect-core'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-few-core-test'. Its dependency 'foundation-runtimes-expect-core' was not found. Please, check whether 'foundation-runtimes-expect-core' is loaded prior to 'foundation-runtimes-koncurrent-few-core-test'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-primitives-core'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-few-core-test'. Its dependency 'foundation-runtimes-koncurrent-primitives-core' was not found. Please, check whether 'foundation-runtimes-koncurrent-primitives-core' is loaded prior to 'foundation-runtimes-koncurrent-few-core-test'.");
    }
    if (typeof this['foundation-runtimes-functions'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-few-core-test'. Its dependency 'foundation-runtimes-functions' was not found. Please, check whether 'foundation-runtimes-functions' is loaded prior to 'foundation-runtimes-koncurrent-few-core-test'.");
    }
    if (typeof this['foundation-runtimes-kotlinx-collections-interoperable'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-few-core-test'. Its dependency 'foundation-runtimes-kotlinx-collections-interoperable' was not found. Please, check whether 'foundation-runtimes-kotlinx-collections-interoperable' is loaded prior to 'foundation-runtimes-koncurrent-few-core-test'.");
    }
    root['foundation-runtimes-koncurrent-few-core-test'] = factory(typeof this['foundation-runtimes-koncurrent-few-core-test'] === 'undefined' ? {} : this['foundation-runtimes-koncurrent-few-core-test'], this['kotlin-kotlin-stdlib-js-ir'], this['foundation-runtimes-koncurrent-later-core'], this['foundation-runtimes-koncurrent-primitives-mock'], this['foundation-runtimes-koncurrent-few-core'], this['kotlin-kotlin-test-js-ir'], this['foundation-runtimes-expect-core'], this['foundation-runtimes-koncurrent-primitives-core'], this['foundation-runtimes-functions'], this['foundation-runtimes-kotlinx-collections-interoperable']);
  }
}(this, function (_, kotlin_kotlin, kotlin_foundation_runtimes_koncurrent_later_core, kotlin_foundation_runtimes_koncurrent_primitives_mock, kotlin_foundation_runtimes_koncurrent_few_core, kotlin_kotlin_test, kotlin_foundation_runtimes_expect_core, kotlin_foundation_runtimes_koncurrent_primitives_core, kotlin_foundation_runtimes_functions, kotlin_foundation_runtimes_kotlinx_collections_interoperable) {
  'use strict';
  //region block: imports
  var println = kotlin_kotlin.$_$.i4;
  var Unit_getInstance = kotlin_kotlin.$_$.w1;
  var Companion_getInstance = kotlin_foundation_runtimes_koncurrent_later_core.$_$.a;
  var MockExecutor_init_$Create$ = kotlin_foundation_runtimes_koncurrent_primitives_mock.$_$.a;
  var SimpleFewImpl = kotlin_foundation_runtimes_koncurrent_few_core.$_$.b;
  var classMeta = kotlin_kotlin.$_$.o4;
  var suite = kotlin_kotlin_test.$_$.g;
  var test = kotlin_kotlin_test.$_$.h;
  var expect = kotlin_foundation_runtimes_expect_core.$_$.a;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.z;
  var MockExecutor_init_$Create$_0 = kotlin_foundation_runtimes_koncurrent_primitives_mock.$_$.b;
  var Executors_getInstance = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.a;
  var few = kotlin_foundation_runtimes_koncurrent_few_core.$_$.a;
  //endregion
  //region block: pre-declaration
  //endregion
  function _get_em__ndc0df($this) {
    return $this.em_1;
  }
  function _get_e1__ndbyxr($this) {
    return $this.e1__1;
  }
  function _get_e2__ndbyym($this) {
    return $this.e2__1;
  }
  function _get_e3__ndbyzh($this) {
    return $this.e3__1;
  }
  function FewAndLaterTest$should_play_well_with_later$lambda$lambda($this_few) {
    return function (it) {
      println('processing block 1');
      $this_few.emit(it + 1 | 0);
      return it + 1 | 0;
    };
  }
  function FewAndLaterTest$should_play_well_with_later$lambda$lambda_0($this_few) {
    return function (it) {
      println('processing block 2');
      $this_few.emit(it + 1 | 0);
      return it + 1 | 0;
    };
  }
  function FewAndLaterTest$should_play_well_with_later$lambda$lambda_1($this_few) {
    return function (it) {
      println('processing block 3');
      $this_few.emit(it);
      return Unit_getInstance();
    };
  }
  function FewAndLaterTest$should_play_well_with_later$lambda(this$0) {
    return function ($this$few) {
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            var tmp0_then = Companion_getInstance().resolve_wzvgn4_k$(0, this$0.e1__1);
            var tmp1_then = FewAndLaterTest$should_play_well_with_later$lambda$lambda($this$few);
            var tmp2_then = tmp0_then.executor_1;
            tmp$ret$0 = tmp0_then.then_kkt96f_k$(tmp1_then, null, tmp2_then);
          }
          var tmp3_then = tmp$ret$0;
          var tmp4_then = this$0.e2__1;
          var tmp5_then = FewAndLaterTest$should_play_well_with_later$lambda$lambda_0($this$few);
          tmp$ret$1 = tmp3_then.then_kkt96f_k$(tmp5_then, null, tmp4_then);
        }
        var tmp6_then = tmp$ret$1;
        var tmp7_then = this$0.e3__1;
        var tmp8_then = FewAndLaterTest$should_play_well_with_later$lambda$lambda_1($this$few);
        tmp$ret$2 = tmp6_then.then_kkt96f_k$(tmp8_then, null, tmp7_then);
      }
      return Unit_getInstance();
    };
  }
  function FewAndLaterTest$should_play_well_with_later$lambda_0() {
    return function (it) {
      println('Watching ' + it + ' pass by');
      return Unit_getInstance();
    };
  }
  function FewAndLaterTest$should_play_well_with_later$lambda_1() {
    return function (it) {
      println('Collecting ' + it);
      return Unit_getInstance();
    };
  }
  function FewAndLaterTest() {
    var tmp = this;
    tmp.em_1 = MockExecutor_init_$Create$('Executor #M Mock', false, 2, null);
    var tmp_0 = this;
    tmp_0.e1__1 = MockExecutor_init_$Create$('Executor #1 Mock', false, 2, null);
    var tmp_1 = this;
    tmp_1.e2__1 = MockExecutor_init_$Create$('Executor #2 Mock', false, 2, null);
    var tmp_2 = this;
    tmp_2.e3__1 = MockExecutor_init_$Create$('Executor #3 Mock', false, 2, null);
  }
  FewAndLaterTest.prototype.should_play_well_with_later_ipm178_k$ = function () {
    var tmp$ret$1;
    {
      var tmp0_few = this.em_1;
      var tmp1_few = FewAndLaterTest$should_play_well_with_later$lambda(this);
      var tmp$ret$0;
      {
        tmp$ret$0 = new SimpleFewImpl(tmp0_few, tmp1_few);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    var tmp = tmp$ret$1;
    var tmp_0 = tmp.onEach(FewAndLaterTest$should_play_well_with_later$lambda_0());
    tmp_0.collect(FewAndLaterTest$should_play_well_with_later$lambda_1());
  };
  FewAndLaterTest.$metadata$ = classMeta('FewAndLaterTest');
  function test_fun_izoufj() {
    suite('FewAndLaterTest', false, test_fun$FewAndLaterTest_test_fun_g87qth());
  }
  function test_fun$FewAndLaterTest_test_fun$should_play_well_with_later_test_fun_4rbbm3() {
    return function () {
      var tmp = new FewAndLaterTest();
      tmp.should_play_well_with_later_ipm178_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$FewAndLaterTest_test_fun_g87qth() {
    return function () {
      test('should_play_well_with_later', false, test_fun$FewAndLaterTest_test_fun$should_play_well_with_later_test_fun_4rbbm3());
      return Unit_getInstance();
    };
  }
  function _get_mockExecutor__jgjxci($this) {
    return $this.mockExecutor_1;
  }
  function FewApiTest$should_be_able_to_create_a_few$lambda() {
    return function ($this$simpleFew) {
      $this$simpleFew.emit(0);
      return Unit_getInstance();
    };
  }
  function FewApiTest$should_be_able_to_create_a_few$lambda_0() {
    return function (it) {
      println('Collecting ' + it);
      expect(it).toBe_vfaz1p_k$(0);
      println('Collected ' + it);
      return Unit_getInstance();
    };
  }
  function FewApiTest$should_be_able_to_collect_multiple_few$lambda() {
    return function ($this$few) {
      println('Emitting A');
      $this$few.emit('A');
      println('Emitting N');
      $this$few.emit('N');
      println('Emitting D');
      $this$few.emit('D');
      println('Emitting Y');
      $this$few.emit('Y');
      println('Finished emitting');
      return Unit_getInstance();
    };
  }
  function FewApiTest$should_be_able_to_collect_multiple_few$lambda_0($collectedName) {
    return function (it) {
      println('Collecting ' + it);
      $collectedName._v = $collectedName._v + it;
      return Unit_getInstance();
    };
  }
  function FewApiTest$should_be_able_to_interpect_intermediate_values$lambda() {
    return function ($this$few) {
      $this$few.emit('A');
      $this$few.emit('N');
      $this$few.emit('D');
      $this$few.emit('Y');
      return Unit_getInstance();
    };
  }
  function FewApiTest$should_be_able_to_interpect_intermediate_values$lambda_0() {
    return function (it) {
      println('Seeing ' + it);
      return Unit_getInstance();
    };
  }
  function FewApiTest$should_be_able_to_interpect_intermediate_values$lambda_1() {
    return function (it) {
      return "'" + it + "'";
    };
  }
  function FewApiTest$should_be_able_to_interpect_intermediate_values$lambda_2($collectedName) {
    return function (it) {
      println('Collecting ' + it);
      $collectedName._v = $collectedName._v + it;
      return Unit_getInstance();
    };
  }
  function FewApiTest$should_be_able_to_catch_upstream_errors$lambda() {
    return function ($this$few) {
      $this$few.emit(1);
      $this$few.emit(2);
      throw IllegalStateException_init_$Create$('For fun');
    };
  }
  function FewApiTest$should_be_able_to_catch_upstream_errors$lambda_0() {
    return function ($this$catch, it) {
      println('Caught a nasty error: ' + it.message);
      $this$catch.emit(3);
      $this$catch.emit(4);
      $this$catch.emit(5);
      return Unit_getInstance();
    };
  }
  function FewApiTest$should_be_able_to_catch_upstream_errors$lambda_1() {
    return function (it) {
      println('Collecting ' + it);
      return Unit_getInstance();
    };
  }
  function FewApiTest() {
    var tmp = this;
    tmp.mockExecutor_1 = MockExecutor_init_$Create$_0(null, 1, null);
  }
  FewApiTest.prototype.should_be_able_to_create_a_few_7e3hdh_k$ = function () {
    var tmp$ret$1;
    {
      var tmp0_fewOf = Executors_getInstance().default();
      var tmp$ret$0;
      {
        var tmp0_simpleFew = FewApiTest$should_be_able_to_create_a_few$lambda();
        tmp$ret$0 = new SimpleFewImpl(tmp0_fewOf, tmp0_simpleFew);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    var tmp = tmp$ret$1.executeOn(this.mockExecutor_1);
    tmp.collect(FewApiTest$should_be_able_to_create_a_few$lambda_0());
  };
  FewApiTest.prototype.should_be_able_to_collect_multiple_few_6cmk7w_k$ = function () {
    var tmp$ret$1;
    {
      var tmp0_few = this.mockExecutor_1;
      var tmp1_few = FewApiTest$should_be_able_to_collect_multiple_few$lambda();
      var tmp$ret$0;
      {
        tmp$ret$0 = new SimpleFewImpl(tmp0_few, tmp1_few);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    var name = tmp$ret$1;
    println("Haven't began collection, so this should run first");
    var collectedName = {_v: ''};
    name.collect(FewApiTest$should_be_able_to_collect_multiple_few$lambda_0(collectedName));
    println('Collected: ' + collectedName._v);
  };
  FewApiTest.prototype.should_be_able_to_interpect_intermediate_values_flaw17_k$ = function () {
    var tmp$ret$1;
    {
      var tmp0_few = this.mockExecutor_1;
      var tmp1_few = FewApiTest$should_be_able_to_interpect_intermediate_values$lambda();
      var tmp$ret$0;
      {
        tmp$ret$0 = new SimpleFewImpl(tmp0_few, tmp1_few);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    var tmp = tmp$ret$1;
    var tmp_0 = tmp.onEach(FewApiTest$should_be_able_to_interpect_intermediate_values$lambda_0());
    var name = tmp_0.map(FewApiTest$should_be_able_to_interpect_intermediate_values$lambda_1());
    var collectedName = {_v: ''};
    name.collect(FewApiTest$should_be_able_to_interpect_intermediate_values$lambda_2(collectedName));
    println('Collected: ' + collectedName._v);
  };
  FewApiTest.prototype.should_be_able_to_catch_upstream_errors_fpm8z9_k$ = function () {
    var tmp$ret$1;
    {
      var tmp0_few = this.mockExecutor_1;
      var tmp1_few = FewApiTest$should_be_able_to_catch_upstream_errors$lambda();
      var tmp$ret$0;
      {
        tmp$ret$0 = new SimpleFewImpl(tmp0_few, tmp1_few);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    var tmp = tmp$ret$1;
    var tmp_0 = tmp._ignore_catch(FewApiTest$should_be_able_to_catch_upstream_errors$lambda_0());
    tmp_0.collect(FewApiTest$should_be_able_to_catch_upstream_errors$lambda_1());
  };
  FewApiTest.$metadata$ = classMeta('FewApiTest');
  function test_fun_izoufj_0() {
    suite('FewApiTest', false, test_fun$FewApiTest_test_fun_p87zkm());
  }
  function test_fun$FewApiTest_test_fun$should_be_able_to_create_a_few_test_fun_90p841() {
    return function () {
      var tmp = new FewApiTest();
      tmp.should_be_able_to_create_a_few_7e3hdh_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$FewApiTest_test_fun$should_be_able_to_collect_multiple_few_test_fun_baixvu() {
    return function () {
      var tmp = new FewApiTest();
      tmp.should_be_able_to_collect_multiple_few_6cmk7w_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$FewApiTest_test_fun$should_be_able_to_interpect_intermediate_values_test_fun_b0ur75() {
    return function () {
      var tmp = new FewApiTest();
      tmp.should_be_able_to_interpect_intermediate_values_flaw17_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$FewApiTest_test_fun$should_be_able_to_catch_upstream_errors_test_fun_5mj0bz() {
    return function () {
      var tmp = new FewApiTest();
      tmp.should_be_able_to_catch_upstream_errors_fpm8z9_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$FewApiTest_test_fun_p87zkm() {
    return function () {
      test('should_be_able_to_create_a_few', false, test_fun$FewApiTest_test_fun$should_be_able_to_create_a_few_test_fun_90p841());
      test('should_be_able_to_collect_multiple_few', false, test_fun$FewApiTest_test_fun$should_be_able_to_collect_multiple_few_test_fun_baixvu());
      test('should_be_able_to_interpect_intermediate_values', false, test_fun$FewApiTest_test_fun$should_be_able_to_interpect_intermediate_values_test_fun_b0ur75());
      test('should_be_able_to_catch_upstream_errors', false, test_fun$FewApiTest_test_fun$should_be_able_to_catch_upstream_errors_test_fun_5mj0bz());
      return Unit_getInstance();
    };
  }
  function _get_mockExecutor__jgjxci_0($this) {
    return $this.mockExecutor_1;
  }
  function FewApiTestJs$can_call_collect_on_it$lambda() {
    return function ($this$simpleFew) {
      $this$simpleFew.emit(0);
      return Unit_getInstance();
    };
  }
  function FewApiTestJs$can_call_collect_on_it$lambda_0() {
    return function (it) {
      console.log('Collecting ' + it);
      expect(it).toBe_vfaz1p_k$(0);
      console.log('Collected ' + it);
      return Unit_getInstance();
    };
  }
  function FewApiTestJs$should_be_able_to_create_a_few$lambda() {
    return function ($this$simpleFew) {
      $this$simpleFew.emit(0);
      return Unit_getInstance();
    };
  }
  function FewApiTestJs$should_be_able_to_create_a_few$lambda_0() {
    return function (it) {
      println('Collecting ' + it);
      expect(it).toBe_vfaz1p_k$(0);
      println('Collected ' + it);
      return Unit_getInstance();
    };
  }
  function FewApiTestJs$should_be_able_to_instantiated_from_pure_js$lambda() {
    return function (it) {
      console.log('receiving ' + it);
      return Unit_getInstance();
    };
  }
  function FewApiTestJs$should_be_able_to_instantiated_from_pure_js$lambda_0($collectedName) {
    return function (it) {
      $collectedName._v = $collectedName._v + it;
      println('Collected ' + it);
      return Unit_getInstance();
    };
  }
  function FewApiTestJs$should_be_able_to_collect_multiple_few$lambda() {
    return function (it) {
      println('Emitting A');
      it.emit('A');
      println('Emitting N');
      it.emit('N');
      println('Emitting D');
      it.emit('D');
      println('Emitting Y');
      it.emit('Y');
      println('Finished emitting');
      return Unit_getInstance();
    };
  }
  function FewApiTestJs$should_be_able_to_collect_multiple_few$lambda_0($collectedName) {
    return function (it) {
      $collectedName._v = $collectedName._v + it;
      println('Collected ' + it);
      return Unit_getInstance();
    };
  }
  function FewApiTestJs$should_be_able_to_interpect_intermediate_values$lambda() {
    return function (it) {
      println('Emitting A');
      it.emit('A');
      println('Emitting N');
      it.emit('N');
      println('Emitting D');
      it.emit('D');
      println('Emitting Y');
      it.emit('Y');
      println('Finished emitting');
      return Unit_getInstance();
    };
  }
  function FewApiTestJs$should_be_able_to_interpect_intermediate_values$lambda_0() {
    return function (it) {
      println('Interceptor 1: ' + it);
      return Unit_getInstance();
    };
  }
  function FewApiTestJs$should_be_able_to_interpect_intermediate_values$lambda_1() {
    return function (it) {
      println('Interceptor 2: ' + it);
      return Unit_getInstance();
    };
  }
  function FewApiTestJs$should_be_able_to_interpect_intermediate_values$lambda_2($collectedName) {
    return function (it) {
      $collectedName._v = $collectedName._v + it;
      println('Collected ' + it);
      return Unit_getInstance();
    };
  }
  function FewApiTestJs() {
    var tmp = this;
    tmp.mockExecutor_1 = MockExecutor_init_$Create$_0(null, 1, null);
  }
  FewApiTestJs.prototype.can_call_collect_on_it_qenj3h_k$ = function () {
    var tmp$ret$1;
    {
      var tmp0_fewOf = this.mockExecutor_1;
      var tmp$ret$0;
      {
        var tmp0_simpleFew = FewApiTestJs$can_call_collect_on_it$lambda();
        tmp$ret$0 = new SimpleFewImpl(tmp0_fewOf, tmp0_simpleFew);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    var few = tmp$ret$1;
    few.collect(FewApiTestJs$can_call_collect_on_it$lambda_0());
  };
  FewApiTestJs.prototype.should_be_able_to_create_a_few_7e3hdh_k$ = function () {
    var tmp$ret$1;
    {
      var tmp0_fewOf = Executors_getInstance().default();
      var tmp$ret$0;
      {
        var tmp0_simpleFew = FewApiTestJs$should_be_able_to_create_a_few$lambda();
        tmp$ret$0 = new SimpleFewImpl(tmp0_fewOf, tmp0_simpleFew);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    var tmp = tmp$ret$1.executeOn(this.mockExecutor_1);
    tmp.collect(FewApiTestJs$should_be_able_to_create_a_few$lambda_0());
  };
  FewApiTestJs.prototype.should_be_able_to_instantiated_from_pure_js_umlbb4_k$ = function () {
    var tmp$ret$0;
    {
      var tmp0_unsafeCast = function (it) {
        console.log('raw stuff');
        it.emit('A');
        it.emit('N');
        it.emit('D');
        it.emit('Y');
      };
      tmp$ret$0 = tmp0_unsafeCast;
    }
    var func = tmp$ret$0;
    var name = few(func, this.mockExecutor_1);
    println("Haven't began collection, so this should run first");
    var collectedName = {_v: ''};
    name.onEach(FewApiTestJs$should_be_able_to_instantiated_from_pure_js$lambda()).collect(FewApiTestJs$should_be_able_to_instantiated_from_pure_js$lambda_0(collectedName));
    println('Collected: ' + collectedName._v);
    expect(collectedName._v).toBe_vfaz1p_k$('ANDY');
  };
  FewApiTestJs.prototype.should_be_able_to_collect_multiple_few_6cmk7w_k$ = function () {
    var name = few(FewApiTestJs$should_be_able_to_collect_multiple_few$lambda(), this.mockExecutor_1);
    println("Haven't began collection, so this should run first");
    var collectedName = {_v: ''};
    name.collect(FewApiTestJs$should_be_able_to_collect_multiple_few$lambda_0(collectedName));
    println('Collected: ' + collectedName._v);
    expect(collectedName._v).toBe_vfaz1p_k$('ANDY');
  };
  FewApiTestJs.prototype.should_be_able_to_interpect_intermediate_values_flaw17_k$ = function () {
    var name = few(FewApiTestJs$should_be_able_to_interpect_intermediate_values$lambda(), this.mockExecutor_1);
    println("Haven't began collection, so this should run first");
    var collectedName = {_v: ''};
    name.onEach(FewApiTestJs$should_be_able_to_interpect_intermediate_values$lambda_0()).onEach(FewApiTestJs$should_be_able_to_interpect_intermediate_values$lambda_1()).collect(FewApiTestJs$should_be_able_to_interpect_intermediate_values$lambda_2(collectedName));
    println('Collected: ' + collectedName._v);
    expect(collectedName._v).toBe_vfaz1p_k$('ANDY');
  };
  FewApiTestJs.$metadata$ = classMeta('FewApiTestJs');
  function test_fun_izoufj_1() {
    suite('FewApiTestJs', false, test_fun$FewApiTestJs_test_fun_3jeqw1());
  }
  function test_fun$FewApiTestJs_test_fun$can_call_collect_on_it_test_fun_diszme() {
    return function () {
      var tmp = new FewApiTestJs();
      tmp.can_call_collect_on_it_qenj3h_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$FewApiTestJs_test_fun$should_be_able_to_create_a_few_test_fun_s0xjgo() {
    return function () {
      var tmp = new FewApiTestJs();
      tmp.should_be_able_to_create_a_few_7e3hdh_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$FewApiTestJs_test_fun$should_be_able_to_instantiated_from_pure_js_test_fun_jqzjwd() {
    return function () {
      var tmp = new FewApiTestJs();
      tmp.should_be_able_to_instantiated_from_pure_js_umlbb4_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$FewApiTestJs_test_fun$should_be_able_to_collect_multiple_few_test_fun_a5wfz() {
    return function () {
      var tmp = new FewApiTestJs();
      tmp.should_be_able_to_collect_multiple_few_6cmk7w_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$FewApiTestJs_test_fun$should_be_able_to_interpect_intermediate_values_test_fun_qxx77s() {
    return function () {
      var tmp = new FewApiTestJs();
      tmp.should_be_able_to_interpect_intermediate_values_flaw17_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$FewApiTestJs_test_fun_3jeqw1() {
    return function () {
      test('can_call_collect_on_it', false, test_fun$FewApiTestJs_test_fun$can_call_collect_on_it_test_fun_diszme());
      test('should_be_able_to_create_a_few', false, test_fun$FewApiTestJs_test_fun$should_be_able_to_create_a_few_test_fun_s0xjgo());
      test('should_be_able_to_instantiated_from_pure_js', false, test_fun$FewApiTestJs_test_fun$should_be_able_to_instantiated_from_pure_js_test_fun_jqzjwd());
      test('should_be_able_to_collect_multiple_few', false, test_fun$FewApiTestJs_test_fun$should_be_able_to_collect_multiple_few_test_fun_a5wfz());
      test('should_be_able_to_interpect_intermediate_values', false, test_fun$FewApiTestJs_test_fun$should_be_able_to_interpect_intermediate_values_test_fun_qxx77s());
      return Unit_getInstance();
    };
  }
  //region block: tests
  (function () {
    suite('', false, function () {
      test_fun_izoufj();
      test_fun_izoufj_0();
      test_fun_izoufj_1();
    });
  }());
  //endregion
  //region block: exports
  kotlin_foundation_runtimes_functions.$jsExportAll$(_);
  kotlin_foundation_runtimes_koncurrent_primitives_core.$jsExportAll$(_);
  kotlin_foundation_runtimes_koncurrent_few_core.$jsExportAll$(_);
  kotlin_foundation_runtimes_kotlinx_collections_interoperable.$jsExportAll$(_);
  kotlin_foundation_runtimes_koncurrent_later_core.$jsExportAll$(_);
  kotlin_foundation_runtimes_koncurrent_primitives_mock.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=foundation-runtimes-koncurrent-few-core-test.js.map