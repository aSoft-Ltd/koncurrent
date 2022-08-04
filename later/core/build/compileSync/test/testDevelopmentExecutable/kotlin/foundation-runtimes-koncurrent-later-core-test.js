(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './foundation-runtimes-koncurrent-primitives-core.js', './foundation-runtimes-expect-core.js', './foundation-runtimes-kotlinx-collections-interoperable.js', './foundation-runtimes-koncurrent-later-core.js', './foundation-runtimes-koncurrent-later-test.js', './kotlin-kotlin-test-js-ir.js', './foundation-runtimes-koncurrent-primitives-mock.js', './foundation-runtimes-functions.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./foundation-runtimes-koncurrent-primitives-core.js'), require('./foundation-runtimes-expect-core.js'), require('./foundation-runtimes-kotlinx-collections-interoperable.js'), require('./foundation-runtimes-koncurrent-later-core.js'), require('./foundation-runtimes-koncurrent-later-test.js'), require('./kotlin-kotlin-test-js-ir.js'), require('./foundation-runtimes-koncurrent-primitives-mock.js'), require('./foundation-runtimes-functions.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-core-test'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-later-core-test'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-primitives-core'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-core-test'. Its dependency 'foundation-runtimes-koncurrent-primitives-core' was not found. Please, check whether 'foundation-runtimes-koncurrent-primitives-core' is loaded prior to 'foundation-runtimes-koncurrent-later-core-test'.");
    }
    if (typeof this['foundation-runtimes-expect-core'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-core-test'. Its dependency 'foundation-runtimes-expect-core' was not found. Please, check whether 'foundation-runtimes-expect-core' is loaded prior to 'foundation-runtimes-koncurrent-later-core-test'.");
    }
    if (typeof this['foundation-runtimes-kotlinx-collections-interoperable'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-core-test'. Its dependency 'foundation-runtimes-kotlinx-collections-interoperable' was not found. Please, check whether 'foundation-runtimes-kotlinx-collections-interoperable' is loaded prior to 'foundation-runtimes-koncurrent-later-core-test'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-later-core'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-core-test'. Its dependency 'foundation-runtimes-koncurrent-later-core' was not found. Please, check whether 'foundation-runtimes-koncurrent-later-core' is loaded prior to 'foundation-runtimes-koncurrent-later-core-test'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-later-test'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-core-test'. Its dependency 'foundation-runtimes-koncurrent-later-test' was not found. Please, check whether 'foundation-runtimes-koncurrent-later-test' is loaded prior to 'foundation-runtimes-koncurrent-later-core-test'.");
    }
    if (typeof this['kotlin-kotlin-test-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-core-test'. Its dependency 'kotlin-kotlin-test-js-ir' was not found. Please, check whether 'kotlin-kotlin-test-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-later-core-test'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-primitives-mock'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-core-test'. Its dependency 'foundation-runtimes-koncurrent-primitives-mock' was not found. Please, check whether 'foundation-runtimes-koncurrent-primitives-mock' is loaded prior to 'foundation-runtimes-koncurrent-later-core-test'.");
    }
    if (typeof this['foundation-runtimes-functions'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-core-test'. Its dependency 'foundation-runtimes-functions' was not found. Please, check whether 'foundation-runtimes-functions' is loaded prior to 'foundation-runtimes-koncurrent-later-core-test'.");
    }
    root['foundation-runtimes-koncurrent-later-core-test'] = factory(typeof this['foundation-runtimes-koncurrent-later-core-test'] === 'undefined' ? {} : this['foundation-runtimes-koncurrent-later-core-test'], this['kotlin-kotlin-stdlib-js-ir'], this['foundation-runtimes-koncurrent-primitives-core'], this['foundation-runtimes-expect-core'], this['foundation-runtimes-kotlinx-collections-interoperable'], this['foundation-runtimes-koncurrent-later-core'], this['foundation-runtimes-koncurrent-later-test'], this['kotlin-kotlin-test-js-ir'], this['foundation-runtimes-koncurrent-primitives-mock'], this['foundation-runtimes-functions']);
  }
}(this, function (_, kotlin_kotlin, kotlin_foundation_runtimes_koncurrent_primitives_core, kotlin_foundation_runtimes_expect_core, kotlin_foundation_runtimes_kotlinx_collections_interoperable, kotlin_foundation_runtimes_koncurrent_later_core, kotlin_foundation_runtimes_koncurrent_later_test, kotlin_kotlin_test, kotlin_foundation_runtimes_koncurrent_primitives_mock, kotlin_foundation_runtimes_functions) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var Fulfilled = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.e;
  var Unit_getInstance = kotlin_kotlin.$_$.w1;
  var sum = kotlin_kotlin.$_$.g3;
  var expect = kotlin_foundation_runtimes_expect_core.$_$.a;
  var toList = kotlin_kotlin.$_$.j3;
  var ListWrapper = kotlin_foundation_runtimes_kotlinx_collections_interoperable.$_$.g;
  var Companion_getInstance = kotlin_foundation_runtimes_koncurrent_later_core.$_$.c;
  var Executors_getInstance = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.a;
  var runLaterTest = kotlin_foundation_runtimes_koncurrent_later_test.$_$.a;
  var Later = kotlin_foundation_runtimes_koncurrent_later_core.$_$.e;
  var classMeta = kotlin_kotlin.$_$.p4;
  var suite = kotlin_kotlin_test.$_$.g;
  var test = kotlin_kotlin_test.$_$.h;
  var println = kotlin_kotlin.$_$.j4;
  var MockExecutor_init_$Create$ = kotlin_foundation_runtimes_koncurrent_primitives_mock.$_$.b;
  var flatten = kotlin_foundation_runtimes_koncurrent_later_core.$_$.d;
  var flatten$default = kotlin_foundation_runtimes_koncurrent_later_core.$_$.b;
  var MockExecutor_init_$Create$_0 = kotlin_foundation_runtimes_koncurrent_primitives_mock.$_$.a;
  var finally$default = kotlin_foundation_runtimes_koncurrent_later_core.$_$.a;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.z;
  //endregion
  //region block: pre-declaration
  //endregion
  function CanAwaitForMultipleLaters$should_resolve_multiple_laters$lambda() {
    return function (list) {
      var tmp$ret$3;
      {
        var tmp$ret$2;
        {
          var tmp0_mapNotNullTo = ArrayList_init_$Create$();
          {
            var tmp0_iterator = list.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var element = tmp0_iterator.next_20eer_k$();
              {
                var tmp$ret$0;
                {
                  var tmp0_safe_receiver = element instanceof Fulfilled ? element : null;
                  tmp$ret$0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.value_1;
                }
                var tmp0_safe_receiver_0 = tmp$ret$0;
                if (tmp0_safe_receiver_0 == null)
                  null;
                else {
                  var tmp$ret$1;
                  {
                    {
                    }
                    tmp0_mapNotNullTo.add_1j60pz_k$(tmp0_safe_receiver_0);
                    tmp$ret$1 = Unit_getInstance();
                  }
                }
              }
            }
          }
          tmp$ret$2 = tmp0_mapNotNullTo;
        }
        tmp$ret$3 = tmp$ret$2;
      }
      return tmp$ret$3;
    };
  }
  function CanAwaitForMultipleLaters$should_resolve_multiple_laters$lambda_0() {
    return function (it) {
      return sum(it);
    };
  }
  function CanAwaitForMultipleLaters$should_resolve_multiple_laters$lambda_1() {
    return function (it) {
      expect(it).toBe_vfaz1p_k$(6);
      return Unit_getInstance();
    };
  }
  function CanAwaitForMultipleLaters$should_resolve_multiple_laters$lambda_2($tmp9_test) {
    return function () {
      return $tmp9_test;
    };
  }
  function CanAwaitForMultipleLaters$should_resolve_just_fulfilled_values$lambda() {
    return function (res, _anonymous_parameter_1__qggqgd) {
      res(1);
      return Unit_getInstance();
    };
  }
  function CanAwaitForMultipleLaters$should_resolve_just_fulfilled_values$lambda_0() {
    return function (res, _anonymous_parameter_1__qggqgd) {
      res(2);
      return Unit_getInstance();
    };
  }
  function CanAwaitForMultipleLaters$should_resolve_just_fulfilled_values$lambda_1() {
    return function (res, _anonymous_parameter_1__qggqgd) {
      res(3);
      return Unit_getInstance();
    };
  }
  function CanAwaitForMultipleLaters$should_resolve_just_fulfilled_values$lambda_2() {
    return function (res, _anonymous_parameter_1__qggqgd) {
      res(4);
      return Unit_getInstance();
    };
  }
  function CanAwaitForMultipleLaters$should_resolve_just_fulfilled_values$lambda$lambda() {
    return function (it) {
      return it.value_1;
    };
  }
  function CanAwaitForMultipleLaters$should_resolve_just_fulfilled_values$lambda_3() {
    return function (it) {
      var tmp$ret$6;
      {
        var tmp$ret$5;
        {
          var tmp$ret$3;
          {
            var tmp$ret$2;
            {
              var tmp$ret$1;
              {
                var tmp$ret$0;
                {
                  var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
                  var tmp0_iterator = it.iterator_jk1svi_k$();
                  while (tmp0_iterator.hasNext_bitz1p_k$()) {
                    var element = tmp0_iterator.next_20eer_k$();
                    if (element instanceof Fulfilled) {
                      tmp0_filterIsInstanceTo.add_1j60pz_k$(element);
                    }
                  }
                  tmp$ret$0 = tmp0_filterIsInstanceTo;
                }
                tmp$ret$1 = tmp$ret$0;
              }
              var tmp0_toInteroperableList = tmp$ret$1;
              tmp$ret$2 = new ListWrapper(toList(tmp0_toInteroperableList));
            }
            tmp$ret$3 = tmp$ret$2;
          }
          var tmp0_filterFulfilledValues = tmp$ret$3;
          var tmp$ret$4;
          {
            var tmp0_toInteroperableList_0 = tmp0_filterFulfilledValues.map(CanAwaitForMultipleLaters$should_resolve_just_fulfilled_values$lambda$lambda());
            tmp$ret$4 = new ListWrapper(toList(tmp0_toInteroperableList_0));
          }
          tmp$ret$5 = tmp$ret$4;
        }
        tmp$ret$6 = tmp$ret$5;
      }
      return sum(tmp$ret$6);
    };
  }
  function CanAwaitForMultipleLaters$should_resolve_just_fulfilled_values$lambda_4() {
    return function (it) {
      expect(it).toBe_vfaz1p_k$(10);
      return Unit_getInstance();
    };
  }
  function CanAwaitForMultipleLaters$should_resolve_just_fulfilled_values$lambda_5($tmp14_test) {
    return function () {
      return $tmp14_test;
    };
  }
  function CanAwaitForMultipleLaters() {
  }
  CanAwaitForMultipleLaters.prototype.should_resolve_multiple_laters_deo907_k$ = function () {
    var tmp$ret$3;
    {
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            var tmp = Companion_getInstance();
            var tmp_0 = Companion_getInstance();
            var tmp_1 = tmp_0.resolve$default_yco90m_k$(1, null, 2, null);
            var tmp_2 = Companion_getInstance();
            var tmp_3 = tmp_2.resolve$default_yco90m_k$(2, null, 2, null);
            var tmp_4 = Companion_getInstance();
            var tmp0_then = tmp.all([tmp_1, tmp_3, tmp_4.resolve$default_yco90m_k$(3, null, 2, null)]);
            var tmp1_then = CanAwaitForMultipleLaters$should_resolve_multiple_laters$lambda();
            var tmp2_then = tmp0_then.executor_1;
            tmp$ret$0 = tmp0_then.then_kkt96f_k$(tmp1_then, null, tmp2_then);
          }
          var tmp3_then = tmp$ret$0;
          var tmp4_then = CanAwaitForMultipleLaters$should_resolve_multiple_laters$lambda_0();
          var tmp5_then = tmp3_then.executor_1;
          tmp$ret$1 = tmp3_then.then_kkt96f_k$(tmp4_then, null, tmp5_then);
        }
        var tmp6_then = tmp$ret$1;
        var tmp7_then = CanAwaitForMultipleLaters$should_resolve_multiple_laters$lambda_1();
        var tmp8_then = tmp6_then.executor_1;
        tmp$ret$2 = tmp6_then.then_kkt96f_k$(tmp7_then, null, tmp8_then);
      }
      var tmp9_test = tmp$ret$2;
      var tmp10_test = Executors_getInstance().default();
      tmp$ret$3 = runLaterTest(tmp10_test, CanAwaitForMultipleLaters$should_resolve_multiple_laters$lambda_2(tmp9_test));
    }
    return tmp$ret$3;
  };
  CanAwaitForMultipleLaters.prototype.should_resolve_just_fulfilled_values_h6onme_k$ = function () {
    var tmp$ret$6;
    {
      var tmp$ret$5;
      {
        var tmp$ret$4;
        {
          var tmp = Companion_getInstance();
          var tmp$ret$0;
          {
            var tmp0_Later = CanAwaitForMultipleLaters$should_resolve_just_fulfilled_values$lambda();
            var tmp1_Later = Executors_getInstance().default();
            tmp$ret$0 = new Later(tmp0_Later, tmp1_Later);
          }
          var tmp_0 = tmp$ret$0;
          var tmp$ret$1;
          {
            var tmp2_Later = CanAwaitForMultipleLaters$should_resolve_just_fulfilled_values$lambda_0();
            var tmp3_Later = Executors_getInstance().default();
            tmp$ret$1 = new Later(tmp2_Later, tmp3_Later);
          }
          var tmp_1 = tmp$ret$1;
          var tmp$ret$2;
          {
            var tmp4_Later = CanAwaitForMultipleLaters$should_resolve_just_fulfilled_values$lambda_1();
            var tmp5_Later = Executors_getInstance().default();
            tmp$ret$2 = new Later(tmp4_Later, tmp5_Later);
          }
          var tmp_2 = tmp$ret$2;
          var tmp$ret$3;
          {
            var tmp6_Later = CanAwaitForMultipleLaters$should_resolve_just_fulfilled_values$lambda_2();
            var tmp7_Later = Executors_getInstance().default();
            tmp$ret$3 = new Later(tmp6_Later, tmp7_Later);
          }
          var tmp8_then = tmp.all([tmp_0, tmp_1, tmp_2, tmp$ret$3]);
          var tmp9_then = CanAwaitForMultipleLaters$should_resolve_just_fulfilled_values$lambda_3();
          var tmp10_then = tmp8_then.executor_1;
          tmp$ret$4 = tmp8_then.then_kkt96f_k$(tmp9_then, null, tmp10_then);
        }
        var tmp11_then = tmp$ret$4;
        var tmp12_then = CanAwaitForMultipleLaters$should_resolve_just_fulfilled_values$lambda_4();
        var tmp13_then = tmp11_then.executor_1;
        tmp$ret$5 = tmp11_then.then_kkt96f_k$(tmp12_then, null, tmp13_then);
      }
      var tmp14_test = tmp$ret$5;
      var tmp15_test = Executors_getInstance().default();
      tmp$ret$6 = runLaterTest(tmp15_test, CanAwaitForMultipleLaters$should_resolve_just_fulfilled_values$lambda_5(tmp14_test));
    }
    return tmp$ret$6;
  };
  CanAwaitForMultipleLaters.$metadata$ = classMeta('CanAwaitForMultipleLaters');
  function test_fun_izoufj() {
    suite('CanAwaitForMultipleLaters', false, test_fun$CanAwaitForMultipleLaters_test_fun_9dxki2());
  }
  function test_fun$CanAwaitForMultipleLaters_test_fun$should_resolve_multiple_laters_test_fun_r0vvls() {
    return function () {
      var tmp = new CanAwaitForMultipleLaters();
      return tmp.should_resolve_multiple_laters_deo907_k$();
      $unreachable();
    };
  }
  function test_fun$CanAwaitForMultipleLaters_test_fun$should_resolve_just_fulfilled_values_test_fun_4pctlr() {
    return function () {
      var tmp = new CanAwaitForMultipleLaters();
      return tmp.should_resolve_just_fulfilled_values_h6onme_k$();
      $unreachable();
    };
  }
  function test_fun$CanAwaitForMultipleLaters_test_fun_9dxki2() {
    return function () {
      test('should_resolve_multiple_laters', false, test_fun$CanAwaitForMultipleLaters_test_fun$should_resolve_multiple_laters_test_fun_r0vvls());
      test('should_resolve_just_fulfilled_values', false, test_fun$CanAwaitForMultipleLaters_test_fun$should_resolve_just_fulfilled_values_test_fun_4pctlr());
      return Unit_getInstance();
    };
  }
  function ErrorHandlingTestCase$should_propagate_errors_down_stream$lambda($blockcount, $zero) {
    return function (res, _anonymous_parameter_1__qggqgd) {
      var tmp0 = $blockcount._v;
      $blockcount._v = tmp0 + 1 | 0;
      $zero._v = 0;
      res(25);
      return Unit_getInstance();
    };
  }
  function ErrorHandlingTestCase$should_propagate_errors_down_stream$lambda_0($blockcount, $zero) {
    return function (it) {
      var tmp0 = $blockcount._v;
      $blockcount._v = tmp0 + 1 | 0;
      println('danger here');
      return divide(1, $zero._v);
    };
  }
  function ErrorHandlingTestCase$should_propagate_errors_down_stream$lambda_1($blockcount) {
    return function (it) {
      var tmp0 = $blockcount._v;
      $blockcount._v = tmp0 + 1 | 0;
      println('danger cont...');
      return imul(it, 2);
    };
  }
  function ErrorHandlingTestCase$should_propagate_errors_down_stream$lambda_2($blockcount, $zero) {
    return function (it) {
      var tmp0 = $blockcount._v;
      $blockcount._v = tmp0 + 1 | 0;
      println('Recovering');
      return $zero._v;
    };
  }
  function ErrorHandlingTestCase$should_propagate_errors_down_stream$lambda_3($blockcount, $result) {
    return function (it) {
      var tmp0 = $blockcount._v;
      $blockcount._v = tmp0 + 1 | 0;
      println('Recovered');
      it + 1 | 0;
      $result._v = it + 1 | 0;
      return Unit_getInstance();
    };
  }
  function ErrorHandlingTestCase$should_execute_catch_when_it_encounters_an_error$lambda($blockcount) {
    return function (it) {
      var tmp0 = $blockcount._v;
      $blockcount._v = tmp0 + 1 | 0;
      return divide(it, it);
    };
  }
  function ErrorHandlingTestCase$should_execute_catch_when_it_encounters_an_error$lambda_0($blockcount) {
    return function (it) {
      var tmp0 = $blockcount._v;
      $blockcount._v = tmp0 + 1 | 0;
      return 5;
    };
  }
  function ErrorHandlingTestCase$should_execute_catch_when_it_encounters_an_error$lambda_1($blockcount, $result) {
    return function (it) {
      var tmp0 = $blockcount._v;
      $blockcount._v = tmp0 + 1 | 0;
      $result._v = it;
      return Unit_getInstance();
    };
  }
  function ErrorHandlingTestCase$should_not_execute_catch_if_there_are_no_errors$lambda($blockcount) {
    return function (it) {
      var tmp0 = $blockcount._v;
      $blockcount._v = tmp0 + 1 | 0;
      return it + 7 | 0;
    };
  }
  function ErrorHandlingTestCase$should_not_execute_catch_if_there_are_no_errors$lambda_0($blockcount) {
    return function (it) {
      var tmp0 = $blockcount._v;
      $blockcount._v = tmp0 + 1 | 0;
      return 5;
    };
  }
  function ErrorHandlingTestCase$should_not_execute_catch_if_there_are_no_errors$lambda_1($blockcount, $result) {
    return function (it) {
      var tmp0 = $blockcount._v;
      $blockcount._v = tmp0 + 1 | 0;
      $result._v = it;
      return Unit_getInstance();
    };
  }
  function ErrorHandlingTestCase$can_totally_chain_errors_and_then_blocks_continuously$lambda($blockcount) {
    return function (it) {
      var tmp0 = $blockcount._v;
      $blockcount._v = tmp0 + 1 | 0;
      return it + 7 | 0;
    };
  }
  function ErrorHandlingTestCase$can_totally_chain_errors_and_then_blocks_continuously$lambda_0($blockcount) {
    return function (it) {
      var tmp0 = $blockcount._v;
      $blockcount._v = tmp0 + 1 | 0;
      return it - 11 | 0;
    };
  }
  function ErrorHandlingTestCase$can_totally_chain_errors_and_then_blocks_continuously$lambda_1($blockcount) {
    return function (it) {
      var tmp0 = $blockcount._v;
      $blockcount._v = tmp0 + 1 | 0;
      return divide(it, it);
    };
  }
  function ErrorHandlingTestCase$can_totally_chain_errors_and_then_blocks_continuously$lambda_2($blockcount) {
    return function (it) {
      var tmp0 = $blockcount._v;
      $blockcount._v = tmp0 + 1 | 0;
      return 5;
    };
  }
  function ErrorHandlingTestCase$can_totally_chain_errors_and_then_blocks_continuously$lambda_3($blockcount, $result) {
    return function (it) {
      var tmp0 = $blockcount._v;
      $blockcount._v = tmp0 + 1 | 0;
      $result._v = it;
      return Unit_getInstance();
    };
  }
  function ErrorHandlingTestCase$can_totally_chain_many_errors_and_then_blocks_continuously$lambda($blockcount) {
    return function (it) {
      var tmp0 = $blockcount._v;
      $blockcount._v = tmp0 + 1 | 0;
      return it + 7 | 0;
    };
  }
  function ErrorHandlingTestCase$can_totally_chain_many_errors_and_then_blocks_continuously$lambda_0($blockcount) {
    return function (it) {
      var tmp0 = $blockcount._v;
      $blockcount._v = tmp0 + 1 | 0;
      return it - 11 | 0;
    };
  }
  function ErrorHandlingTestCase$can_totally_chain_many_errors_and_then_blocks_continuously$lambda_1($blockcount) {
    return function (it) {
      var tmp0 = $blockcount._v;
      $blockcount._v = tmp0 + 1 | 0;
      return divide(it, it);
    };
  }
  function ErrorHandlingTestCase$can_totally_chain_many_errors_and_then_blocks_continuously$lambda_2($blockcount) {
    return function (it) {
      var tmp0 = $blockcount._v;
      $blockcount._v = tmp0 + 1 | 0;
      return 5;
    };
  }
  function ErrorHandlingTestCase$can_totally_chain_many_errors_and_then_blocks_continuously$lambda_3($blockcount) {
    return function (it) {
      var tmp0 = $blockcount._v;
      $blockcount._v = tmp0 + 1 | 0;
      return it - 5 | 0;
    };
  }
  function ErrorHandlingTestCase$can_totally_chain_many_errors_and_then_blocks_continuously$lambda_4($blockcount) {
    return function (it) {
      var tmp0 = $blockcount._v;
      $blockcount._v = tmp0 + 1 | 0;
      return divide(it, it);
    };
  }
  function ErrorHandlingTestCase$can_totally_chain_many_errors_and_then_blocks_continuously$lambda_5($blockcount) {
    return function (it) {
      var tmp0 = $blockcount._v;
      $blockcount._v = tmp0 + 1 | 0;
      return 0;
    };
  }
  function ErrorHandlingTestCase$can_totally_chain_many_errors_and_then_blocks_continuously$lambda_6($blockcount, $result) {
    return function (it) {
      var tmp0 = $blockcount._v;
      $blockcount._v = tmp0 + 1 | 0;
      $result._v = it;
      return Unit_getInstance();
    };
  }
  function ErrorHandlingTestCase() {
    var tmp = this;
    tmp.executor_1 = MockExecutor_init_$Create$(null, 1, null);
  }
  ErrorHandlingTestCase.prototype.get_executor_1zf7oc_k$ = function () {
    return this.executor_1;
  };
  ErrorHandlingTestCase.prototype.should_propagate_errors_down_stream_lszere_k$ = function () {
    var blockcount = {_v: 0};
    var result = {_v: -1};
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
              var tmp1_Later = ErrorHandlingTestCase$should_propagate_errors_down_stream$lambda(blockcount, zero);
              tmp$ret$0 = new Later(tmp1_Later, tmp0_Later);
            }
            var tmp2_then = tmp$ret$0;
            var tmp3_then = ErrorHandlingTestCase$should_propagate_errors_down_stream$lambda_0(blockcount, zero);
            var tmp4_then = tmp2_then.executor_1;
            tmp$ret$1 = tmp2_then.then_kkt96f_k$(tmp3_then, null, tmp4_then);
          }
          var tmp5_then = tmp$ret$1;
          var tmp6_then = ErrorHandlingTestCase$should_propagate_errors_down_stream$lambda_1(blockcount);
          var tmp7_then = tmp5_then.executor_1;
          tmp$ret$2 = tmp5_then.then_kkt96f_k$(tmp6_then, null, tmp7_then);
        }
        var tmp8_catch = tmp$ret$2;
        var tmp9_catch = ErrorHandlingTestCase$should_propagate_errors_down_stream$lambda_2(blockcount, zero);
        var tmp10_catch = tmp8_catch.executor_1;
        tmp$ret$3 = tmp8_catch.then_kkt96f_k$(null, tmp9_catch, tmp10_catch);
      }
      var tmp11_then = tmp$ret$3;
      var tmp12_then = ErrorHandlingTestCase$should_propagate_errors_down_stream$lambda_3(blockcount, result);
      var tmp13_then = tmp11_then.executor_1;
      tmp$ret$4 = tmp11_then.then_kkt96f_k$(tmp12_then, null, tmp13_then);
    }
    expect(blockcount._v).toBe_ks6s6m_k$(4, 'Chained code blocks where not executed as expected');
    expect(result._v).toBe_vfaz1p_k$(1);
  };
  ErrorHandlingTestCase.prototype.should_execute_catch_when_it_encounters_an_error_bmy2or_k$ = function () {
    var blockcount = {_v: 0};
    var result = {_v: 0};
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_then = Companion_getInstance().resolve_wzvgn4_k$(0, this.executor_1);
          var tmp1_then = ErrorHandlingTestCase$should_execute_catch_when_it_encounters_an_error$lambda(blockcount);
          var tmp2_then = tmp0_then.executor_1;
          tmp$ret$0 = tmp0_then.then_kkt96f_k$(tmp1_then, null, tmp2_then);
        }
        var tmp3_catch = tmp$ret$0;
        var tmp4_catch = ErrorHandlingTestCase$should_execute_catch_when_it_encounters_an_error$lambda_0(blockcount);
        var tmp5_catch = tmp3_catch.executor_1;
        tmp$ret$1 = tmp3_catch.then_kkt96f_k$(null, tmp4_catch, tmp5_catch);
      }
      var tmp6_then = tmp$ret$1;
      var tmp7_then = ErrorHandlingTestCase$should_execute_catch_when_it_encounters_an_error$lambda_1(blockcount, result);
      var tmp8_then = tmp6_then.executor_1;
      tmp$ret$2 = tmp6_then.then_kkt96f_k$(tmp7_then, null, tmp8_then);
    }
    expect(blockcount._v).toBe_vfaz1p_k$(3);
    expect(result._v).toBe_vfaz1p_k$(5);
  };
  ErrorHandlingTestCase.prototype.should_not_execute_catch_if_there_are_no_errors_m59v5i_k$ = function () {
    var blockcount = {_v: 0};
    var result = {_v: 0};
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_then = Companion_getInstance().resolve_wzvgn4_k$(4, this.executor_1);
          var tmp1_then = ErrorHandlingTestCase$should_not_execute_catch_if_there_are_no_errors$lambda(blockcount);
          var tmp2_then = tmp0_then.executor_1;
          tmp$ret$0 = tmp0_then.then_kkt96f_k$(tmp1_then, null, tmp2_then);
        }
        var tmp3_catch = tmp$ret$0;
        var tmp4_catch = ErrorHandlingTestCase$should_not_execute_catch_if_there_are_no_errors$lambda_0(blockcount);
        var tmp5_catch = tmp3_catch.executor_1;
        tmp$ret$1 = tmp3_catch.then_kkt96f_k$(null, tmp4_catch, tmp5_catch);
      }
      var tmp6_then = tmp$ret$1;
      var tmp7_then = ErrorHandlingTestCase$should_not_execute_catch_if_there_are_no_errors$lambda_1(blockcount, result);
      var tmp8_then = tmp6_then.executor_1;
      tmp$ret$2 = tmp6_then.then_kkt96f_k$(tmp7_then, null, tmp8_then);
    }
    expect(blockcount._v).toBe_vfaz1p_k$(2);
    expect(result._v).toBe_vfaz1p_k$(11);
  };
  ErrorHandlingTestCase.prototype.can_totally_chain_errors_and_then_blocks_continuously_nbr6cd_k$ = function () {
    var blockcount = {_v: 0};
    var result = {_v: 0};
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
              var tmp0_then = Companion_getInstance().resolve_wzvgn4_k$(4, this.executor_1);
              var tmp1_then = ErrorHandlingTestCase$can_totally_chain_errors_and_then_blocks_continuously$lambda(blockcount);
              var tmp2_then = tmp0_then.executor_1;
              tmp$ret$0 = tmp0_then.then_kkt96f_k$(tmp1_then, null, tmp2_then);
            }
            var tmp3_then = tmp$ret$0;
            var tmp4_then = ErrorHandlingTestCase$can_totally_chain_errors_and_then_blocks_continuously$lambda_0(blockcount);
            var tmp5_then = tmp3_then.executor_1;
            tmp$ret$1 = tmp3_then.then_kkt96f_k$(tmp4_then, null, tmp5_then);
          }
          var tmp6_then = tmp$ret$1;
          var tmp7_then = ErrorHandlingTestCase$can_totally_chain_errors_and_then_blocks_continuously$lambda_1(blockcount);
          var tmp8_then = tmp6_then.executor_1;
          tmp$ret$2 = tmp6_then.then_kkt96f_k$(tmp7_then, null, tmp8_then);
        }
        var tmp9_catch = tmp$ret$2;
        var tmp10_catch = ErrorHandlingTestCase$can_totally_chain_errors_and_then_blocks_continuously$lambda_2(blockcount);
        var tmp11_catch = tmp9_catch.executor_1;
        tmp$ret$3 = tmp9_catch.then_kkt96f_k$(null, tmp10_catch, tmp11_catch);
      }
      var tmp12_then = tmp$ret$3;
      var tmp13_then = ErrorHandlingTestCase$can_totally_chain_errors_and_then_blocks_continuously$lambda_3(blockcount, result);
      var tmp14_then = tmp12_then.executor_1;
      tmp$ret$4 = tmp12_then.then_kkt96f_k$(tmp13_then, null, tmp14_then);
    }
    expect(blockcount._v).toBe_ks6s6m_k$(5, 'Chained code blocks where not executed as expected');
    expect(result._v).toBe_vfaz1p_k$(5);
  };
  ErrorHandlingTestCase.prototype.can_totally_chain_many_errors_and_then_blocks_continuously_jap1g9_k$ = function () {
    var blockcount = {_v: 0};
    var result = {_v: 0};
    var tmp$ret$7;
    {
      var tmp$ret$6;
      {
        var tmp$ret$5;
        {
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
                    var tmp0_then = Companion_getInstance().resolve_wzvgn4_k$(4, this.executor_1);
                    var tmp1_then = ErrorHandlingTestCase$can_totally_chain_many_errors_and_then_blocks_continuously$lambda(blockcount);
                    var tmp2_then = tmp0_then.executor_1;
                    tmp$ret$0 = tmp0_then.then_kkt96f_k$(tmp1_then, null, tmp2_then);
                  }
                  var tmp3_then = tmp$ret$0;
                  var tmp4_then = ErrorHandlingTestCase$can_totally_chain_many_errors_and_then_blocks_continuously$lambda_0(blockcount);
                  var tmp5_then = tmp3_then.executor_1;
                  tmp$ret$1 = tmp3_then.then_kkt96f_k$(tmp4_then, null, tmp5_then);
                }
                var tmp6_then = tmp$ret$1;
                var tmp7_then = ErrorHandlingTestCase$can_totally_chain_many_errors_and_then_blocks_continuously$lambda_1(blockcount);
                var tmp8_then = tmp6_then.executor_1;
                tmp$ret$2 = tmp6_then.then_kkt96f_k$(tmp7_then, null, tmp8_then);
              }
              var tmp9_catch = tmp$ret$2;
              var tmp10_catch = ErrorHandlingTestCase$can_totally_chain_many_errors_and_then_blocks_continuously$lambda_2(blockcount);
              var tmp11_catch = tmp9_catch.executor_1;
              tmp$ret$3 = tmp9_catch.then_kkt96f_k$(null, tmp10_catch, tmp11_catch);
            }
            var tmp12_then = tmp$ret$3;
            var tmp13_then = ErrorHandlingTestCase$can_totally_chain_many_errors_and_then_blocks_continuously$lambda_3(blockcount);
            var tmp14_then = tmp12_then.executor_1;
            tmp$ret$4 = tmp12_then.then_kkt96f_k$(tmp13_then, null, tmp14_then);
          }
          var tmp15_then = tmp$ret$4;
          var tmp16_then = ErrorHandlingTestCase$can_totally_chain_many_errors_and_then_blocks_continuously$lambda_4(blockcount);
          var tmp17_then = tmp15_then.executor_1;
          tmp$ret$5 = tmp15_then.then_kkt96f_k$(tmp16_then, null, tmp17_then);
        }
        var tmp18_catch = tmp$ret$5;
        var tmp19_catch = ErrorHandlingTestCase$can_totally_chain_many_errors_and_then_blocks_continuously$lambda_5(blockcount);
        var tmp20_catch = tmp18_catch.executor_1;
        tmp$ret$6 = tmp18_catch.then_kkt96f_k$(null, tmp19_catch, tmp20_catch);
      }
      var tmp21_then = tmp$ret$6;
      var tmp22_then = ErrorHandlingTestCase$can_totally_chain_many_errors_and_then_blocks_continuously$lambda_6(blockcount, result);
      var tmp23_then = tmp21_then.executor_1;
      tmp$ret$7 = tmp21_then.then_kkt96f_k$(tmp22_then, null, tmp23_then);
    }
    expect(blockcount._v).toBe_ks6s6m_k$(8, 'Chained code blocks where not executed as expected');
    expect(result._v).toBe_vfaz1p_k$(0);
  };
  ErrorHandlingTestCase.$metadata$ = classMeta('ErrorHandlingTestCase');
  function test_fun_izoufj_0() {
    suite('ErrorHandlingTestCase', false, test_fun$ErrorHandlingTestCase_test_fun_ufk44r());
  }
  function test_fun$ErrorHandlingTestCase_test_fun$should_propagate_errors_down_stream_test_fun_nhv12j() {
    return function () {
      var tmp = new ErrorHandlingTestCase();
      tmp.should_propagate_errors_down_stream_lszere_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$ErrorHandlingTestCase_test_fun$should_execute_catch_when_it_encounters_an_error_test_fun_1xmgk6() {
    return function () {
      var tmp = new ErrorHandlingTestCase();
      tmp.should_execute_catch_when_it_encounters_an_error_bmy2or_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$ErrorHandlingTestCase_test_fun$should_not_execute_catch_if_there_are_no_errors_test_fun_evzo9z() {
    return function () {
      var tmp = new ErrorHandlingTestCase();
      tmp.should_not_execute_catch_if_there_are_no_errors_m59v5i_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$ErrorHandlingTestCase_test_fun$can_totally_chain_errors_and_then_blocks_continuously_test_fun_ab5f9o() {
    return function () {
      var tmp = new ErrorHandlingTestCase();
      tmp.can_totally_chain_errors_and_then_blocks_continuously_nbr6cd_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$ErrorHandlingTestCase_test_fun$can_totally_chain_many_errors_and_then_blocks_continuously_test_fun_rbqpig() {
    return function () {
      var tmp = new ErrorHandlingTestCase();
      tmp.can_totally_chain_many_errors_and_then_blocks_continuously_jap1g9_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$ErrorHandlingTestCase_test_fun_ufk44r() {
    return function () {
      test('should_propagate_errors_down_stream', false, test_fun$ErrorHandlingTestCase_test_fun$should_propagate_errors_down_stream_test_fun_nhv12j());
      test('should_execute_catch_when_it_encounters_an_error', false, test_fun$ErrorHandlingTestCase_test_fun$should_execute_catch_when_it_encounters_an_error_test_fun_1xmgk6());
      test('should_not_execute_catch_if_there_are_no_errors', false, test_fun$ErrorHandlingTestCase_test_fun$should_not_execute_catch_if_there_are_no_errors_test_fun_evzo9z());
      test('can_totally_chain_errors_and_then_blocks_continuously', false, test_fun$ErrorHandlingTestCase_test_fun$can_totally_chain_errors_and_then_blocks_continuously_test_fun_ab5f9o());
      test('can_totally_chain_many_errors_and_then_blocks_continuously', false, test_fun$ErrorHandlingTestCase_test_fun$can_totally_chain_many_errors_and_then_blocks_continuously_test_fun_rbqpig());
      return Unit_getInstance();
    };
  }
  function NestedValuesTest$should_be_able_to_unwrap_cascaded_values_without_a_callback$lambda() {
    return function (it) {
      return it;
    };
  }
  function NestedValuesTest$should_be_able_to_unwrap_cascaded_values_without_a_callback$lambda_0($resolved) {
    return function (it) {
      println('Comparing');
      expect(it).toBe_vfaz1p_k$(2);
      println('Finished comparing');
      $resolved._v = true;
      return Unit_getInstance();
    };
  }
  function NestedValuesTest$should_be_able_to_unwrap_cascaded_values_with_a_callback$lambda($executor) {
    return function (it) {
      println('Flattening');
      return Companion_getInstance().resolve_wzvgn4_k$(2 + it | 0, $executor);
    };
  }
  function NestedValuesTest$should_be_able_to_unwrap_cascaded_values_with_a_callback$lambda_0($resolved) {
    return function (it) {
      println('Comparing ' + it);
      expect(it).toBe_vfaz1p_k$(3);
      println('Finished comparing');
      $resolved._v = true;
      return Unit_getInstance();
    };
  }
  function NestedValuesTest$should_be_able_to_switch_executors$lambda() {
    return function (it) {
      expect(it).toBe_vfaz1p_k$(0);
      return it + 1 | 0;
    };
  }
  function NestedValuesTest$should_be_able_to_switch_executors$lambda_0() {
    return function (it) {
      expect(it).toBe_vfaz1p_k$(1);
      return imul(it, 2);
    };
  }
  function NestedValuesTest$should_be_able_to_switch_executors$lambda_1() {
    return function (it) {
      expect(it).toBe_vfaz1p_k$(2);
      return divide(1, it - 2 | 0);
    };
  }
  function NestedValuesTest$should_be_able_to_switch_executors$lambda_2($recovered) {
    return function (it) {
      $recovered._v = true;
      return 0;
    };
  }
  function NestedValuesTest$should_be_able_to_switch_executors$lambda_3($result) {
    return function (it) {
      $result._v = 1;
      println('Finished processing later');
      return Unit_getInstance();
    };
  }
  function NestedValuesTest$should_keep_execution_on_first_executor$lambda() {
    return function (it) {
      expect(it).toBe_vfaz1p_k$(0);
      return it + 1 | 0;
    };
  }
  function NestedValuesTest$should_keep_execution_on_first_executor$lambda_0() {
    return function (it) {
      expect(it).toBe_vfaz1p_k$(1);
      return imul(it, 2);
    };
  }
  function NestedValuesTest$should_keep_execution_on_first_executor$lambda_1() {
    return function (it) {
      expect(it).toBe_vfaz1p_k$(2);
      return divide(1, it - 2 | 0);
    };
  }
  function NestedValuesTest$should_keep_execution_on_first_executor$lambda_2() {
    return function (it) {
      return 0;
    };
  }
  function NestedValuesTest$should_keep_execution_on_first_executor$lambda_3() {
    return function (it) {
      println('Finished processing later');
      return Unit_getInstance();
    };
  }
  function NestedValuesTest() {
  }
  NestedValuesTest.prototype.should_be_able_to_unwrap_cascaded_values_without_a_callback_1g5ohw_k$ = function () {
    var executor = MockExecutor_init_$Create$(null, 1, null);
    var resolved = {_v: false};
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        var tmp0_flatten = Companion_getInstance().resolve_wzvgn4_k$(Companion_getInstance().resolve_wzvgn4_k$(2, executor), executor);
        var tmp1_flatten = tmp0_flatten.executor_1;
        tmp$ret$0 = flatten(tmp0_flatten, tmp1_flatten, NestedValuesTest$should_be_able_to_unwrap_cascaded_values_without_a_callback$lambda());
      }
      var tmp2_then = tmp$ret$0;
      var tmp3_then = NestedValuesTest$should_be_able_to_unwrap_cascaded_values_without_a_callback$lambda_0(resolved);
      var tmp4_then = tmp2_then.executor_1;
      tmp$ret$1 = tmp2_then.then_kkt96f_k$(tmp3_then, null, tmp4_then);
    }
    println('Done here');
    expect(resolved._v).toBe_ks6s6m_k$(true, "Expected then block to be resolved but it wasn't");
  };
  NestedValuesTest.prototype.should_be_able_to_unwrap_cascaded_values_with_a_callback_fxjwwg_k$ = function () {
    var executor = MockExecutor_init_$Create$(null, 1, null);
    var resolved = {_v: false};
    var tmp$ret$0;
    {
      var tmp = Companion_getInstance().resolve_wzvgn4_k$(1, executor);
      var tmp0_then = flatten$default(tmp, null, NestedValuesTest$should_be_able_to_unwrap_cascaded_values_with_a_callback$lambda(executor), 1, null);
      var tmp1_then = NestedValuesTest$should_be_able_to_unwrap_cascaded_values_with_a_callback$lambda_0(resolved);
      var tmp2_then = tmp0_then.executor_1;
      tmp$ret$0 = tmp0_then.then_kkt96f_k$(tmp1_then, null, tmp2_then);
    }
    println('Done here');
    expect(resolved._v).toBe_ks6s6m_k$(true, "Expected then block to be executed but it wasn't");
  };
  NestedValuesTest.prototype.should_be_able_to_switch_executors_zgkte5_k$ = function () {
    var e1 = MockExecutor_init_$Create$_0('Mock Executor 1', false, 2, null);
    var e2 = MockExecutor_init_$Create$_0('Mock Executor 2', false, 2, null);
    var e3 = MockExecutor_init_$Create$_0('Mock Executor 3', false, 2, null);
    var recovered = {_v: false};
    var result = {_v: -1};
    var tmp$ret$3;
    {
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            var tmp0_then = Companion_getInstance().resolve_wzvgn4_k$(0, e1);
            var tmp1_then = NestedValuesTest$should_be_able_to_switch_executors$lambda();
            tmp$ret$0 = tmp0_then.then_kkt96f_k$(tmp1_then, null, e2);
          }
          var tmp2_then = tmp$ret$0;
          var tmp3_then = NestedValuesTest$should_be_able_to_switch_executors$lambda_0();
          tmp$ret$1 = tmp2_then.then_kkt96f_k$(tmp3_then, null, e3);
        }
        var tmp4_then = tmp$ret$1;
        var tmp5_then = NestedValuesTest$should_be_able_to_switch_executors$lambda_1();
        tmp$ret$2 = tmp4_then.then_kkt96f_k$(tmp5_then, null, e1);
      }
      var tmp6_catch = tmp$ret$2;
      var tmp7_catch = NestedValuesTest$should_be_able_to_switch_executors$lambda_2(recovered);
      tmp$ret$3 = tmp6_catch.then_kkt96f_k$(null, tmp7_catch, e2);
    }
    var tmp = tmp$ret$3;
    finally$default(tmp, null, NestedValuesTest$should_be_able_to_switch_executors$lambda_3(result), 1, null);
    expect(recovered._v).toBe_ks6s6m_k$(true, "Expected Later to be recovered at this point but it wasn't");
    expect(result._v).toBe_ks6s6m_k$(1, "Finally block didn't execute");
  };
  NestedValuesTest.prototype.should_keep_execution_on_first_executor_1a92t8_k$ = function () {
    var tmp$ret$3;
    {
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            var tmp = Companion_getInstance();
            var tmp0_then = tmp.resolve_wzvgn4_k$(0, MockExecutor_init_$Create$_0('Mock Executor 1', false, 2, null));
            var tmp1_then = NestedValuesTest$should_keep_execution_on_first_executor$lambda();
            var tmp2_then = tmp0_then.executor_1;
            tmp$ret$0 = tmp0_then.then_kkt96f_k$(tmp1_then, null, tmp2_then);
          }
          var tmp3_then = tmp$ret$0;
          var tmp4_then = NestedValuesTest$should_keep_execution_on_first_executor$lambda_0();
          var tmp5_then = tmp3_then.executor_1;
          tmp$ret$1 = tmp3_then.then_kkt96f_k$(tmp4_then, null, tmp5_then);
        }
        var tmp6_then = tmp$ret$1;
        var tmp7_then = NestedValuesTest$should_keep_execution_on_first_executor$lambda_1();
        var tmp8_then = tmp6_then.executor_1;
        tmp$ret$2 = tmp6_then.then_kkt96f_k$(tmp7_then, null, tmp8_then);
      }
      var tmp9_catch = tmp$ret$2;
      var tmp10_catch = NestedValuesTest$should_keep_execution_on_first_executor$lambda_2();
      var tmp11_catch = tmp9_catch.executor_1;
      tmp$ret$3 = tmp9_catch.then_kkt96f_k$(null, tmp10_catch, tmp11_catch);
    }
    var tmp_0 = tmp$ret$3;
    finally$default(tmp_0, null, NestedValuesTest$should_keep_execution_on_first_executor$lambda_3(), 1, null);
  };
  NestedValuesTest.$metadata$ = classMeta('NestedValuesTest');
  function test_fun_izoufj_1() {
    suite('NestedValuesTest', false, test_fun$NestedValuesTest_test_fun_mqw34d());
  }
  function test_fun$NestedValuesTest_test_fun$should_be_able_to_unwrap_cascaded_values_without_a_callback_test_fun_s14ikz() {
    return function () {
      var tmp = new NestedValuesTest();
      tmp.should_be_able_to_unwrap_cascaded_values_without_a_callback_1g5ohw_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$NestedValuesTest_test_fun$should_be_able_to_unwrap_cascaded_values_with_a_callback_test_fun_xsfk01() {
    return function () {
      var tmp = new NestedValuesTest();
      tmp.should_be_able_to_unwrap_cascaded_values_with_a_callback_fxjwwg_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$NestedValuesTest_test_fun$should_be_able_to_switch_executors_test_fun_1zd258() {
    return function () {
      var tmp = new NestedValuesTest();
      tmp.should_be_able_to_switch_executors_zgkte5_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$NestedValuesTest_test_fun$should_keep_execution_on_first_executor_test_fun_s1oq8b() {
    return function () {
      var tmp = new NestedValuesTest();
      tmp.should_keep_execution_on_first_executor_1a92t8_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$NestedValuesTest_test_fun_mqw34d() {
    return function () {
      test('should_be_able_to_unwrap_cascaded_values_without_a_callback', false, test_fun$NestedValuesTest_test_fun$should_be_able_to_unwrap_cascaded_values_without_a_callback_test_fun_s14ikz());
      test('should_be_able_to_unwrap_cascaded_values_with_a_callback', false, test_fun$NestedValuesTest_test_fun$should_be_able_to_unwrap_cascaded_values_with_a_callback_test_fun_xsfk01());
      test('should_be_able_to_switch_executors', false, test_fun$NestedValuesTest_test_fun$should_be_able_to_switch_executors_test_fun_1zd258());
      test('should_keep_execution_on_first_executor', false, test_fun$NestedValuesTest_test_fun$should_keep_execution_on_first_executor_test_fun_s1oq8b());
      return Unit_getInstance();
    };
  }
  function divide(_this__u8e3s4, other) {
    if (other === 0) {
      throw IllegalStateException_init_$Create$('Thou shall not divide by zero');
    }
    return _this__u8e3s4 / other | 0;
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
  kotlin_foundation_runtimes_kotlinx_collections_interoperable.$jsExportAll$(_);
  kotlin_foundation_runtimes_koncurrent_later_core.$jsExportAll$(_);
  kotlin_foundation_runtimes_koncurrent_primitives_mock.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=foundation-runtimes-koncurrent-later-core-test.js.map