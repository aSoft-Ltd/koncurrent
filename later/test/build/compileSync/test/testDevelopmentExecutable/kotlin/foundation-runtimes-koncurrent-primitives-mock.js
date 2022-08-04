(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './foundation-runtimes-koncurrent-primitives-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./foundation-runtimes-koncurrent-primitives-core.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-primitives-mock'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-primitives-mock'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-primitives-core'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-primitives-mock'. Its dependency 'foundation-runtimes-koncurrent-primitives-core' was not found. Please, check whether 'foundation-runtimes-koncurrent-primitives-core' is loaded prior to 'foundation-runtimes-koncurrent-primitives-mock'.");
    }
    root['foundation-runtimes-koncurrent-primitives-mock'] = factory(typeof this['foundation-runtimes-koncurrent-primitives-mock'] === 'undefined' ? {} : this['foundation-runtimes-koncurrent-primitives-mock'], this['kotlin-kotlin-stdlib-js-ir'], this['foundation-runtimes-koncurrent-primitives-core']);
  }
}(this, function (_, kotlin_kotlin, kotlin_foundation_runtimes_koncurrent_primitives_core) {
  'use strict';
  //region block: imports
  var println = kotlin_kotlin.$_$.i4;
  var Executor = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.d;
  var classMeta = kotlin_kotlin.$_$.o4;
  var objectMeta = kotlin_kotlin.$_$.h5;
  var interfaceMeta = kotlin_kotlin.$_$.u4;
  //endregion
  //region block: pre-declaration
  //endregion
  function MockExecutor_init_$Init$(config, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0)) {
      var tmp = Companion_getInstance();
      config = tmp.invoke$default_1hm0s3_k$(null, false, 3, null);
    }
    MockExecutor.call($this, config);
    return $this;
  }
  function MockExecutor_init_$Create$(config, $mask0, $marker) {
    return MockExecutor_init_$Init$(config, $mask0, $marker, Object.create(MockExecutor.prototype));
  }
  function _get_config__hi7kzb($this) {
    return $this.config_1;
  }
  function MockExecutor_init_$Init$_0(name, logOnExecute, $this) {
    var logOnExecute_0 = logOnExecute === void 1 ? Companion_getInstance().DEFAULT_LOG_ON_EXECUTE_1 : logOnExecute;
    MockExecutor.call($this, Companion_getInstance().invoke_xqtqub_k$(name, logOnExecute_0));
    return $this;
  }
  function create(name, logOnExecute) {
    return MockExecutor_init_$Init$_0(name, logOnExecute, Object.create(MockExecutor.prototype));
  }
  function MockExecutor_init_$Init$_1(name, logOnExecute, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      logOnExecute = Companion_getInstance().DEFAULT_LOG_ON_EXECUTE_1;
    MockExecutor_init_$Init$_0(name, logOnExecute, $this);
    return $this;
  }
  function MockExecutor_init_$Create$_0(name, logOnExecute, $mask0, $marker) {
    return MockExecutor_init_$Init$_1(name, logOnExecute, $mask0, $marker, Object.create(MockExecutor.prototype));
  }
  function MockExecutor(config) {
    var tmp;
    if (config === void 1) {
      var tmp_0 = Companion_getInstance();
      tmp = tmp_0.invoke$default_1hm0s3_k$(null, false, 3, null);
    } else {
      tmp = config;
    }
    var config_0 = tmp;
    this.config_1 = config_0;
  }
  MockExecutor.prototype.execute = function (runnable) {
    if (this.config_1.get_logOnExecute_qi79xh_k$())
      println('Executing on ' + this.config_1.get_name_woqyms_k$());
    runnable.run();
  };
  MockExecutor.prototype.toString = function () {
    return 'MockExecutor(name=' + this.config_1.get_name_woqyms_k$() + ')';
  };
  MockExecutor.$metadata$ = classMeta('MockExecutor', [Executor]);
  function Companion() {
    Companion_instance = this;
    this.DEFAULT_NAME_1 = 'Mock Exector';
    this.DEFAULT_LOG_ON_EXECUTE_1 = true;
  }
  Companion.prototype.get_DEFAULT_NAME_wljyuq_k$ = function () {
    return this.DEFAULT_NAME_1;
  };
  Companion.prototype.get_DEFAULT_LOG_ON_EXECUTE_7l4y09_k$ = function () {
    return this.DEFAULT_LOG_ON_EXECUTE_1;
  };
  Companion.prototype.invoke_xqtqub_k$ = function (name, logOnExecute) {
    return new MockExecutorConfigImpl(name, logOnExecute);
  };
  Companion.prototype.invoke$default_1hm0s3_k$ = function (name, logOnExecute, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.DEFAULT_NAME_1;
    if (!(($mask0 & 2) === 0))
      logOnExecute = this.DEFAULT_LOG_ON_EXECUTE_1;
    return this.invoke_xqtqub_k$(name, logOnExecute);
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function MockExecutorConfig() {
    Companion_getInstance();
  }
  MockExecutorConfig.$metadata$ = interfaceMeta('MockExecutorConfig');
  function MockExecutorConfigImpl(name, logOnExecute) {
    this.name_1 = name;
    this.logOnExecute_1 = logOnExecute;
  }
  MockExecutorConfigImpl.prototype.get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  MockExecutorConfigImpl.prototype.get_logOnExecute_qi79xh_k$ = function () {
    return this.logOnExecute_1;
  };
  MockExecutorConfigImpl.$metadata$ = classMeta('MockExecutorConfigImpl', [MockExecutorConfig]);
  //region block: exports
  function $jsExportAll$(_) {
    var $koncurrent = _.koncurrent || (_.koncurrent = {});
    $koncurrent.MockExecutor = MockExecutor;
    $koncurrent.MockExecutor.create = create;
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = MockExecutor_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=foundation-runtimes-koncurrent-primitives-mock.js.map