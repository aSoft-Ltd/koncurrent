(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlin-kotlin-test-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlin-kotlin-test-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-expect-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'foundation-runtimes-expect-core'.");
    }
    if (typeof this['kotlin-kotlin-test-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-expect-core'. Its dependency 'kotlin-kotlin-test-js-ir' was not found. Please, check whether 'kotlin-kotlin-test-js-ir' is loaded prior to 'foundation-runtimes-expect-core'.");
    }
    root['foundation-runtimes-expect-core'] = factory(typeof this['foundation-runtimes-expect-core'] === 'undefined' ? {} : this['foundation-runtimes-expect-core'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlin-kotlin-test-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_kotlin_test) {
  'use strict';
  //region block: imports
  var trimIndent = kotlin_kotlin.$_$.r3;
  var compareTo = kotlin_kotlin.$_$.v2;
  var Unit_getInstance = kotlin_kotlin.$_$.i1;
  var assertTrue = kotlin_kotlin_test.$_$.g;
  var assertNotNull = kotlin_kotlin_test.$_$.e;
  var assertNotNull$default = kotlin_kotlin_test.$_$.b;
  var assertNull$default = kotlin_kotlin_test.$_$.c;
  var assertNull = kotlin_kotlin_test.$_$.f;
  var assertEquals = kotlin_kotlin_test.$_$.d;
  var assertEquals$default = kotlin_kotlin_test.$_$.a;
  var classMeta = kotlin_kotlin.$_$.u2;
  var interfaceMeta = kotlin_kotlin.$_$.b3;
  //endregion
  //region block: pre-declaration
  //endregion
  function expect(value) {
    return new BasicExpectationImpl(value);
  }
  function toBeLessThan(_this__u8e3s4, expected) {
    var tmp0_assertTrue = trimIndent('\n        \n    Expected : ' + _this__u8e3s4.get_value_j01efc_k$() + ' to be less than ' + expected + '\n    =============================\n   \n    ');
    {
    }
    var tmp$ret$0;
    {
      tmp$ret$0 = compareTo(_this__u8e3s4.get_value_j01efc_k$(), expected) < 0;
    }
    return assertTrue(tmp$ret$0, tmp0_assertTrue);
  }
  function BasicExpectationImpl(value) {
    this.value_1 = value;
  }
  BasicExpectationImpl.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  BasicExpectationImpl.prototype.toBeNonNull_uoeb6k_k$ = function (message) {
    assertNotNull(this.value_1, message);
  };
  BasicExpectationImpl.prototype.toBeNonNull_hzaycb_k$ = function () {
    assertNotNull$default(this.value_1, null, 2, null);
  };
  BasicExpectationImpl.prototype.toBeNull_9jf5o4_k$ = function () {
    return assertNull$default(this.value_1, null, 2, null);
  };
  BasicExpectationImpl.prototype.toBeNull_v6ffjn_k$ = function (message) {
    return assertNull(this.value_1, message);
  };
  BasicExpectationImpl.prototype.toBe_ks6s6m_k$ = function (expected, message) {
    return assertEquals(expected, this.value_1, message);
  };
  BasicExpectationImpl.prototype.toBe_vfaz1p_k$ = function (expected) {
    return assertEquals$default(expected, this.value_1, null, 4, null);
  };
  BasicExpectationImpl.$metadata$ = classMeta('BasicExpectationImpl', [BasicExpectation]);
  function BasicExpectation() {
  }
  BasicExpectation.$metadata$ = interfaceMeta('BasicExpectation');
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = expect;
  _.$_$.b = toBeLessThan;
  //endregion
  return _;
}));

//# sourceMappingURL=foundation-runtimes-expect-core.js.map