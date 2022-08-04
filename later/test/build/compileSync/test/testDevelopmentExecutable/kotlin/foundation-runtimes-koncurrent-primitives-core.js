(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-primitives-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-primitives-core'.");
    }
    root['foundation-runtimes-koncurrent-primitives-core'] = factory(typeof this['foundation-runtimes-koncurrent-primitives-core'] === 'undefined' ? {} : this['foundation-runtimes-koncurrent-primitives-core'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var classMeta = kotlin_kotlin.$_$.o4;
  var objectMeta = kotlin_kotlin.$_$.h5;
  var hashCode = kotlin_kotlin.$_$.t4;
  var THROW_CCE = kotlin_kotlin.$_$.b6;
  var equals = kotlin_kotlin.$_$.p4;
  var Unit_getInstance = kotlin_kotlin.$_$.w1;
  var interfaceMeta = kotlin_kotlin.$_$.u4;
  //endregion
  //region block: pre-declaration
  PendingState.prototype = Object.create(ConcurrentState.prototype);
  PendingState.prototype.constructor = PendingState;
  Settled.prototype = Object.create(ConcurrentState.prototype);
  Settled.prototype.constructor = Settled;
  Fulfilled.prototype = Object.create(Settled.prototype);
  Fulfilled.prototype.constructor = Fulfilled;
  Rejected.prototype = Object.create(Settled.prototype);
  Rejected.prototype.constructor = Rejected;
  //endregion
  function ConcurrentState() {
  }
  ConcurrentState.$metadata$ = classMeta('ConcurrentState');
  function PendingState() {
    PendingState_instance = this;
    ConcurrentState.call(this);
  }
  PendingState.prototype.toString = function () {
    return 'PENDING';
  };
  PendingState.$metadata$ = objectMeta('PendingState', undefined, undefined, undefined, undefined, ConcurrentState.prototype);
  var PendingState_instance;
  function PendingState_getInstance() {
    if (PendingState_instance == null)
      new PendingState();
    return PendingState_instance;
  }
  function Settled() {
    ConcurrentState.call(this);
  }
  Settled.$metadata$ = classMeta('Settled', undefined, undefined, undefined, undefined, ConcurrentState.prototype);
  function Fulfilled(value) {
    Settled.call(this);
    this.value_1 = value;
  }
  Fulfilled.prototype.get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  Fulfilled.prototype.toString = function () {
    return 'Fulfilled(' + this.value_1 + ')';
  };
  Fulfilled.prototype.component1 = function () {
    return this.value_1;
  };
  Fulfilled.prototype.copy = function (value) {
    return this.copy_mek8hi_k$(value === void 1 ? this.value_1 : value);
  };
  Fulfilled.prototype.copy_mek8hi_k$ = function (value) {
    return new Fulfilled(value);
  };
  Fulfilled.prototype.copy$default_dovemi_k$ = function (value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      value = this.value_1;
    return this.copy_mek8hi_k$(value);
  };
  Fulfilled.prototype.hashCode = function () {
    return this.value_1 == null ? 0 : hashCode(this.value_1);
  };
  Fulfilled.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Fulfilled))
      return false;
    var tmp0_other_with_cast = other instanceof Fulfilled ? other : THROW_CCE();
    if (!equals(this.value_1, tmp0_other_with_cast.value_1))
      return false;
    return true;
  };
  Fulfilled.$metadata$ = classMeta('Fulfilled', undefined, undefined, undefined, undefined, Settled.prototype);
  Object.defineProperty(Fulfilled.prototype, 'value', {
    configurable: true,
    get: Fulfilled.prototype.get_value_j01efc_k$
  });
  function Rejected(cause) {
    Settled.call(this);
    this.cause_1 = cause;
  }
  Rejected.prototype.get_cause_iplhs0_k$ = function () {
    return this.cause_1;
  };
  Rejected.prototype.toString = function () {
    return "Rejected('" + this.cause_1.message + "')";
  };
  Rejected.prototype.component1 = function () {
    return this.cause_1;
  };
  Rejected.prototype.copy = function (cause) {
    return this.copy_wk2br7_k$(cause === void 1 ? this.cause_1 : cause);
  };
  Rejected.prototype.copy_wk2br7_k$ = function (cause) {
    return new Rejected(cause);
  };
  Rejected.prototype.copy$default_l7v3hf_k$ = function (cause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      cause = this.cause_1;
    return this.copy_wk2br7_k$(cause);
  };
  Rejected.prototype.hashCode = function () {
    return hashCode(this.cause_1);
  };
  Rejected.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rejected))
      return false;
    var tmp0_other_with_cast = other instanceof Rejected ? other : THROW_CCE();
    if (!equals(this.cause_1, tmp0_other_with_cast.cause_1))
      return false;
    return true;
  };
  Rejected.$metadata$ = classMeta('Rejected', undefined, undefined, undefined, undefined, Settled.prototype);
  Object.defineProperty(Rejected.prototype, 'cause', {
    configurable: true,
    get: Rejected.prototype.get_cause_iplhs0_k$
  });
  function SynchronousExecutor() {
    SynchronousExecutor_instance = this;
  }
  SynchronousExecutor.prototype.execute = function (runnable) {
    return runnable.run();
  };
  SynchronousExecutor.prototype.toString = function () {
    return 'SynchronousExecutor';
  };
  SynchronousExecutor.$metadata$ = objectMeta('SynchronousExecutor', [Executor]);
  var SynchronousExecutor_instance;
  function SynchronousExecutor_getInstance() {
    if (SynchronousExecutor_instance == null)
      new SynchronousExecutor();
    return SynchronousExecutor_instance;
  }
  function Executors() {
    Executors_instance = this;
  }
  Executors.prototype.default = function () {
    return SetTimeoutExecutor_getInstance();
  };
  Executors.$metadata$ = objectMeta('Executors');
  var Executors_instance;
  function Executors_getInstance() {
    if (Executors_instance == null)
      new Executors();
    return Executors_instance;
  }
  function SetTimeoutExecutor$execute$lambda($runnable) {
    return function () {
      $runnable.run();
      return Unit_getInstance();
    };
  }
  function SetTimeoutExecutor() {
    SetTimeoutExecutor_instance = this;
  }
  SetTimeoutExecutor.prototype.execute = function (runnable) {
    setTimeout(SetTimeoutExecutor$execute$lambda(runnable));
  };
  SetTimeoutExecutor.$metadata$ = objectMeta('SetTimeoutExecutor', [Executor]);
  var SetTimeoutExecutor_instance;
  function SetTimeoutExecutor_getInstance() {
    if (SetTimeoutExecutor_instance == null)
      new SetTimeoutExecutor();
    return SetTimeoutExecutor_instance;
  }
  function Executor() {
  }
  Executor.$metadata$ = interfaceMeta('Executor');
  //region block: exports
  function $jsExportAll$(_) {
    var $koncurrent = _.koncurrent || (_.koncurrent = {});
    $koncurrent.ConcurrentState = ConcurrentState;
    Object.defineProperty($koncurrent, 'PendingState', {
      configurable: true,
      get: PendingState_getInstance
    });
    $koncurrent.Settled = Settled;
    $koncurrent.Fulfilled = Fulfilled;
    $koncurrent.Rejected = Rejected;
    var $koncurrent = _.koncurrent || (_.koncurrent = {});
    Object.defineProperty($koncurrent, 'SynchronousExecutor', {
      configurable: true,
      get: SynchronousExecutor_getInstance
    });
    var $koncurrent = _.koncurrent || (_.koncurrent = {});
    Object.defineProperty($koncurrent, 'Executors', {
      configurable: true,
      get: Executors_getInstance
    });
    var $koncurrent = _.koncurrent || (_.koncurrent = {});
    Object.defineProperty($koncurrent, 'SetTimeoutExecutor', {
      configurable: true,
      get: SetTimeoutExecutor_getInstance
    });
    var $koncurrent = _.koncurrent || (_.koncurrent = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = Executors_getInstance;
  _.$_$.b = PendingState_getInstance;
  _.$_$.c = SynchronousExecutor_getInstance;
  _.$_$.d = Executor;
  _.$_$.e = Fulfilled;
  _.$_$.f = PendingState;
  _.$_$.g = Rejected;
  _.$_$.h = Settled;
  //endregion
  return _;
}));

//# sourceMappingURL=foundation-runtimes-koncurrent-primitives-core.js.map