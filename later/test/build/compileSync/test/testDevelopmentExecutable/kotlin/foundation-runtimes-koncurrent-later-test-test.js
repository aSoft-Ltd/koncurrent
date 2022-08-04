(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './foundation-runtimes-expect-core.js', './foundation-runtimes-koncurrent-later-core.js', './foundation-runtimes-koncurrent-primitives-core.js', './foundation-runtimes-koncurrent-later-test.js', './kotlin-kotlin-test-js-ir.js', './foundation-runtimes-functions.js', './foundation-runtimes-kotlinx-collections-interoperable.js', './foundation-runtimes-koncurrent-primitives-mock.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./foundation-runtimes-expect-core.js'), require('./foundation-runtimes-koncurrent-later-core.js'), require('./foundation-runtimes-koncurrent-primitives-core.js'), require('./foundation-runtimes-koncurrent-later-test.js'), require('./kotlin-kotlin-test-js-ir.js'), require('./foundation-runtimes-functions.js'), require('./foundation-runtimes-kotlinx-collections-interoperable.js'), require('./foundation-runtimes-koncurrent-primitives-mock.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-test-test'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-later-test-test'.");
    }
    if (typeof this['foundation-runtimes-expect-core'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-test-test'. Its dependency 'foundation-runtimes-expect-core' was not found. Please, check whether 'foundation-runtimes-expect-core' is loaded prior to 'foundation-runtimes-koncurrent-later-test-test'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-later-core'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-test-test'. Its dependency 'foundation-runtimes-koncurrent-later-core' was not found. Please, check whether 'foundation-runtimes-koncurrent-later-core' is loaded prior to 'foundation-runtimes-koncurrent-later-test-test'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-primitives-core'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-test-test'. Its dependency 'foundation-runtimes-koncurrent-primitives-core' was not found. Please, check whether 'foundation-runtimes-koncurrent-primitives-core' is loaded prior to 'foundation-runtimes-koncurrent-later-test-test'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-later-test'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-test-test'. Its dependency 'foundation-runtimes-koncurrent-later-test' was not found. Please, check whether 'foundation-runtimes-koncurrent-later-test' is loaded prior to 'foundation-runtimes-koncurrent-later-test-test'.");
    }
    if (typeof this['kotlin-kotlin-test-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-test-test'. Its dependency 'kotlin-kotlin-test-js-ir' was not found. Please, check whether 'kotlin-kotlin-test-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-later-test-test'.");
    }
    if (typeof this['foundation-runtimes-functions'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-test-test'. Its dependency 'foundation-runtimes-functions' was not found. Please, check whether 'foundation-runtimes-functions' is loaded prior to 'foundation-runtimes-koncurrent-later-test-test'.");
    }
    if (typeof this['foundation-runtimes-kotlinx-collections-interoperable'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-test-test'. Its dependency 'foundation-runtimes-kotlinx-collections-interoperable' was not found. Please, check whether 'foundation-runtimes-kotlinx-collections-interoperable' is loaded prior to 'foundation-runtimes-koncurrent-later-test-test'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-primitives-mock'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-test-test'. Its dependency 'foundation-runtimes-koncurrent-primitives-mock' was not found. Please, check whether 'foundation-runtimes-koncurrent-primitives-mock' is loaded prior to 'foundation-runtimes-koncurrent-later-test-test'.");
    }
    root['foundation-runtimes-koncurrent-later-test-test'] = factory(typeof this['foundation-runtimes-koncurrent-later-test-test'] === 'undefined' ? {} : this['foundation-runtimes-koncurrent-later-test-test'], this['kotlin-kotlin-stdlib-js-ir'], this['foundation-runtimes-expect-core'], this['foundation-runtimes-koncurrent-later-core'], this['foundation-runtimes-koncurrent-primitives-core'], this['foundation-runtimes-koncurrent-later-test'], this['kotlin-kotlin-test-js-ir'], this['foundation-runtimes-functions'], this['foundation-runtimes-kotlinx-collections-interoperable'], this['foundation-runtimes-koncurrent-primitives-mock']);
  }
}(this, function (_, kotlin_kotlin, kotlin_foundation_runtimes_expect_core, kotlin_foundation_runtimes_koncurrent_later_core, kotlin_foundation_runtimes_koncurrent_primitives_core, kotlin_foundation_runtimes_koncurrent_later_test, kotlin_kotlin_test, kotlin_foundation_runtimes_functions, kotlin_foundation_runtimes_kotlinx_collections_interoperable, kotlin_foundation_runtimes_koncurrent_primitives_mock) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var println = kotlin_kotlin.$_$.i4;
  var expect = kotlin_foundation_runtimes_expect_core.$_$.a;
  var Unit_getInstance = kotlin_kotlin.$_$.w1;
  var Companion_getInstance = kotlin_foundation_runtimes_koncurrent_later_core.$_$.b;
  var Executors_getInstance = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.a;
  var runLaterTest = kotlin_foundation_runtimes_koncurrent_later_test.$_$.a;
  var flatten$default = kotlin_foundation_runtimes_koncurrent_later_core.$_$.a;
  var classMeta = kotlin_kotlin.$_$.o4;
  var suite = kotlin_kotlin_test.$_$.g;
  var test = kotlin_kotlin_test.$_$.h;
  //endregion
  //region block: pre-declaration
  //endregion
  function LaterTestApiTest$should_be_able_to_run_later_tests$lambda$lambda() {
    return function (it) {
      return it + 1 | 0;
    };
  }
  function LaterTestApiTest$should_be_able_to_run_later_tests$lambda$lambda_0() {
    return function (it) {
      println('expecting');
      expect(it).toBe_vfaz1p_k$(46);
      println('expected');
      return imul(it, 10);
    };
  }
  function LaterTestApiTest$should_be_able_to_run_later_tests$lambda$lambda_1() {
    return function (it) {
      println('Another result: ' + it);
      return Unit_getInstance();
    };
  }
  function LaterTestApiTest$should_be_able_to_run_later_tests$lambda() {
    return function () {
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            var tmp = Companion_getInstance();
            var tmp0_then = tmp.resolve$default_yco90m_k$(45, null, 2, null);
            var tmp1_then = LaterTestApiTest$should_be_able_to_run_later_tests$lambda$lambda();
            var tmp2_then = tmp0_then.executor_1;
            tmp$ret$0 = tmp0_then.then_kkt96f_k$(tmp1_then, null, tmp2_then);
          }
          var tmp3_then = tmp$ret$0;
          var tmp4_then = LaterTestApiTest$should_be_able_to_run_later_tests$lambda$lambda_0();
          var tmp5_then = tmp3_then.executor_1;
          tmp$ret$1 = tmp3_then.then_kkt96f_k$(tmp4_then, null, tmp5_then);
        }
        var tmp6_then = tmp$ret$1;
        var tmp7_then = LaterTestApiTest$should_be_able_to_run_later_tests$lambda$lambda_1();
        var tmp8_then = tmp6_then.executor_1;
        tmp$ret$2 = tmp6_then.then_kkt96f_k$(tmp7_then, null, tmp8_then);
      }
      return tmp$ret$2;
    };
  }
  function LaterTestApiTest$can_return_after_some_computation$lambda($tmp0_test) {
    return function () {
      return $tmp0_test;
    };
  }
  function LaterTestApiTest$should_be_able_to_test_things_imperatively$lambda() {
    return function (it) {
      var tmp = Companion_getInstance();
      var tmp_0 = it + 24 | 0;
      return tmp.resolve$default_yco90m_k$(tmp_0, null, 2, null);
    };
  }
  function LaterTestApiTest$should_be_able_to_test_things_imperatively$lambda_0() {
    return function (it) {
      println('Expecting');
      imul(it, 10);
      println('Expected');
      return Unit_getInstance();
    };
  }
  function LaterTestApiTest$should_be_able_to_test_things_imperatively$lambda_1($tmp3_test) {
    return function () {
      return $tmp3_test;
    };
  }
  function LaterTestApiTest() {
  }
  LaterTestApiTest.prototype.should_be_able_to_run_later_tests_7fennv_k$ = function () {
    var tmp = Executors_getInstance().default();
    return runLaterTest(tmp, LaterTestApiTest$should_be_able_to_run_later_tests$lambda());
  };
  LaterTestApiTest.prototype.can_return_after_some_computation_kzenpu_k$ = function () {
    var int = 6;
    var tmp$ret$0;
    {
      var tmp = Companion_getInstance();
      var tmp0_test = tmp.resolve$default_yco90m_k$(int, null, 2, null);
      var tmp1_test = Executors_getInstance().default();
      tmp$ret$0 = runLaterTest(tmp1_test, LaterTestApiTest$can_return_after_some_computation$lambda(tmp0_test));
    }
    return tmp$ret$0;
  };
  LaterTestApiTest.prototype.should_be_able_to_test_things_imperatively_l826l1_k$ = function () {
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        var tmp = Companion_getInstance();
        var tmp_0 = tmp.resolve$default_yco90m_k$(45, null, 2, null);
        var tmp0_then = flatten$default(tmp_0, null, LaterTestApiTest$should_be_able_to_test_things_imperatively$lambda(), 1, null);
        var tmp1_then = LaterTestApiTest$should_be_able_to_test_things_imperatively$lambda_0();
        var tmp2_then = tmp0_then.executor_1;
        tmp$ret$0 = tmp0_then.then_kkt96f_k$(tmp1_then, null, tmp2_then);
      }
      var tmp3_test = tmp$ret$0;
      var tmp4_test = Executors_getInstance().default();
      tmp$ret$1 = runLaterTest(tmp4_test, LaterTestApiTest$should_be_able_to_test_things_imperatively$lambda_1(tmp3_test));
    }
    return tmp$ret$1;
  };
  LaterTestApiTest.$metadata$ = classMeta('LaterTestApiTest');
  function test_fun_izoufj() {
    suite('LaterTestApiTest', false, test_fun$LaterTestApiTest_test_fun_7okjjk());
  }
  function test_fun$LaterTestApiTest_test_fun$should_be_able_to_run_later_tests_test_fun_euap52() {
    return function () {
      var tmp = new LaterTestApiTest();
      return tmp.should_be_able_to_run_later_tests_7fennv_k$();
      $unreachable();
    };
  }
  function test_fun$LaterTestApiTest_test_fun$can_return_after_some_computation_test_fun_1b51h6() {
    return function () {
      var tmp = new LaterTestApiTest();
      tmp.can_return_after_some_computation_kzenpu_k$();
      return Unit_getInstance();
      $unreachable();
    };
  }
  function test_fun$LaterTestApiTest_test_fun$should_be_able_to_test_things_imperatively_test_fun_los3aw() {
    return function () {
      var tmp = new LaterTestApiTest();
      return tmp.should_be_able_to_test_things_imperatively_l826l1_k$();
      $unreachable();
    };
  }
  function test_fun$LaterTestApiTest_test_fun_7okjjk() {
    return function () {
      test('should_be_able_to_run_later_tests', false, test_fun$LaterTestApiTest_test_fun$should_be_able_to_run_later_tests_test_fun_euap52());
      test('can_return_after_some_computation', false, test_fun$LaterTestApiTest_test_fun$can_return_after_some_computation_test_fun_1b51h6());
      test('should_be_able_to_test_things_imperatively', false, test_fun$LaterTestApiTest_test_fun$should_be_able_to_test_things_imperatively_test_fun_los3aw());
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
  kotlin_foundation_runtimes_koncurrent_primitives_mock.$jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=foundation-runtimes-koncurrent-later-test-test.js.map