(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './foundation-runtimes-koncurrent-primitives-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./foundation-runtimes-koncurrent-primitives-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-pending-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-pending-core'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-primitives-core'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-pending-core'. Its dependency 'foundation-runtimes-koncurrent-primitives-core' was not found. Please, check whether 'foundation-runtimes-koncurrent-primitives-core' is loaded prior to 'foundation-runtimes-koncurrent-pending-core'.");
    }
    root['foundation-runtimes-koncurrent-pending-core'] = factory(typeof this['foundation-runtimes-koncurrent-pending-core'] === 'undefined' ? {} : this['foundation-runtimes-koncurrent-pending-core'], this['kotlin-kotlin-stdlib-js-ir'], this['foundation-runtimes-koncurrent-primitives-core']);
  }
}(this, function (_, kotlin_kotlin, kotlin_foundation_runtimes_koncurrent_primitives_core) {
  'use strict';
  //region block: imports
  var Unit_getInstance = kotlin_kotlin.$_$.h1;
  var PendingState_getInstance = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.a;
  var THROW_CCE = kotlin_kotlin.$_$.z3;
  var ConcurrentState = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.b;
  var Fulfilled = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.d;
  var PendingState = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.e;
  var Rejected = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.f;
  //endregion
  //region block: pre-declaration
  //endregion
  function pending(_this__u8e3s4, block) {
    return new Promise(pending$lambda(block));
  }
  function ResolvedPending(value) {
    return Promise.resolve(value);
  }
  function ControlledPending() {
    var resolveFn = {_v: null};
    var rejectFn = {_v: null};
    var promise = new Promise(ControlledPending$lambda(resolveFn, rejectFn));
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
    return promise;
  }
  function pending_0(block) {
    return new Promise(pending$lambda_0(block));
  }
  function pendingCreator(resolve, reject, block) {
    try {
      resolve(block());
    } catch ($p) {
      if ($p instanceof Error) {
        reject($p);
      } else {
        throw $p;
      }
    }
  }
  function pending$lambda($block) {
    return function (resolve, reject) {
      var tmp;
      try {
        tmp = resolve($block());
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
  function ControlledPending$lambda($resolveFn, $rejectFn) {
    return function (resolve, reject) {
      $resolveFn._v = resolve;
      $rejectFn._v = reject;
      return Unit_getInstance();
    };
  }
  function pending$lambda_0($block) {
    return function (resolve, reject) {
      var tmp;
      try {
        tmp = resolve($block());
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
  function then(_this__u8e3s4, executor, onResolved) {
    return _this__u8e3s4.then(onResolved);
  }
  function catch_0(_this__u8e3s4, executor, onRejected) {
    var tmp$ret$0;
    {
      tmp$ret$0 = (_this__u8e3s4 instanceof Promise ? _this__u8e3s4 : THROW_CCE()).catch(onRejected);
    }
    return tmp$ret$0;
  }
  function then_0(_this__u8e3s4, onResolved) {
    return _this__u8e3s4.then(onResolved);
  }
  function catch_1(_this__u8e3s4, onRejected) {
    return (_this__u8e3s4 instanceof Promise ? _this__u8e3s4 : THROW_CCE()).catch(onRejected);
  }
  function flatten(_this__u8e3s4, onFulfilled) {
    var tmp$ret$1;
    {
      var tmp0_unsafeCast = _this__u8e3s4.then(onFulfilled);
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_unsafeCast;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  }
  function resolveWith(_this__u8e3s4, value) {
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = _this__u8e3s4;
      }
      var tmp = tmp$ret$0.state;
      tmp$ret$1 = tmp instanceof ConcurrentState ? tmp : null;
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var s = tmp_0;
    if (s instanceof PendingState) {
      var tmp$ret$3;
      {
        var tmp$ret$2;
        {
          tmp$ret$2 = _this__u8e3s4;
        }
        var tmp_1 = tmp$ret$2.resolveFn;
        tmp$ret$3 = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
      }
      var tmp1_elvis_lhs = tmp$ret$3;
      var tmp_2;
      if (tmp1_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp1_elvis_lhs;
      }
      var r = tmp_2;
      r(value);
      {
        var tmp0__set_state__b2y64u = new Fulfilled(value);
        var tmp$ret$4;
        {
          tmp$ret$4 = _this__u8e3s4;
        }
        tmp$ret$4.state = tmp0__set_state__b2y64u;
      }
      return true;
    }
    return false;
  }
  function rejectWith(_this__u8e3s4, exception) {
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = _this__u8e3s4;
      }
      var tmp = tmp$ret$0.state;
      tmp$ret$1 = tmp instanceof ConcurrentState ? tmp : null;
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var s = tmp_0;
    if (s instanceof PendingState) {
      var tmp$ret$3;
      {
        var tmp$ret$2;
        {
          tmp$ret$2 = _this__u8e3s4;
        }
        var tmp_1 = tmp$ret$2.rejectFn;
        tmp$ret$3 = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
      }
      var tmp1_elvis_lhs = tmp$ret$3;
      var tmp_2;
      if (tmp1_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp1_elvis_lhs;
      }
      var r = tmp_2;
      r(exception);
      {
        var tmp0__set_state__b2y64u = new Rejected(exception);
        var tmp$ret$4;
        {
          tmp$ret$4 = _this__u8e3s4;
        }
        tmp$ret$4.state = tmp0__set_state__b2y64u;
      }
      return true;
    }
    return false;
  }
  function set_resolveFn(_this__u8e3s4, value) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    tmp$ret$0.resolveFn = value;
  }
  function get_resolveFn(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    var tmp = tmp$ret$0.resolveFn;
    return (!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : null;
  }
  function set_rejectFn(_this__u8e3s4, value) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    tmp$ret$0.rejectFn = value;
  }
  function get_rejectFn(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    var tmp = tmp$ret$0.rejectFn;
    return (!(tmp == null) ? typeof tmp === 'function' : false) ? tmp : null;
  }
  function set_state(_this__u8e3s4, value) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    tmp$ret$0.state = value;
  }
  function get_state(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    var tmp = tmp$ret$0.state;
    return tmp instanceof ConcurrentState ? tmp : null;
  }
  return _;
}));

//# sourceMappingURL=foundation-runtimes-koncurrent-pending-core.js.map