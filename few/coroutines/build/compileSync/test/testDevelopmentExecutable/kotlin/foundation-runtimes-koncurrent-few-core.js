(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './foundation-runtimes-koncurrent-primitives-core.js', './foundation-runtimes-functions.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./foundation-runtimes-koncurrent-primitives-core.js'), require('./foundation-runtimes-functions.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-few-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-few-core'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-primitives-core'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-few-core'. Its dependency 'foundation-runtimes-koncurrent-primitives-core' was not found. Please, check whether 'foundation-runtimes-koncurrent-primitives-core' is loaded prior to 'foundation-runtimes-koncurrent-few-core'.");
    }
    if (typeof this['foundation-runtimes-functions'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-few-core'. Its dependency 'foundation-runtimes-functions' was not found. Please, check whether 'foundation-runtimes-functions' is loaded prior to 'foundation-runtimes-koncurrent-few-core'.");
    }
    root['foundation-runtimes-koncurrent-few-core'] = factory(typeof this['foundation-runtimes-koncurrent-few-core'] === 'undefined' ? {} : this['foundation-runtimes-koncurrent-few-core'], this['kotlin-kotlin-stdlib-js-ir'], this['foundation-runtimes-koncurrent-primitives-core'], this['foundation-runtimes-functions']);
  }
}(this, function (_, kotlin_kotlin, kotlin_foundation_runtimes_koncurrent_primitives_core, kotlin_foundation_runtimes_functions) {
  'use strict';
  //region block: imports
  var interfaceMeta = kotlin_kotlin.$_$.b3;
  var Unit_getInstance = kotlin_kotlin.$_$.i1;
  var addSuppressed = kotlin_kotlin.$_$.g4;
  var classMeta = kotlin_kotlin.$_$.u2;
  var Executors_getInstance = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.a;
  var Runnable = kotlin_foundation_runtimes_functions.$_$.a;
  //endregion
  //region block: pre-declaration
  SimpleFewImpl.prototype = Object.create(AbstractFew.prototype);
  SimpleFewImpl.prototype.constructor = SimpleFewImpl;
  //endregion
  function Few() {
  }
  Few.$metadata$ = interfaceMeta('Few');
  function few(on, block) {
    var tmp$ret$0;
    {
      tmp$ret$0 = new SimpleFewImpl(on, block);
    }
    return tmp$ret$0;
  }
  function FewCollector() {
  }
  FewCollector.$metadata$ = interfaceMeta('FewCollector');
  function BiConsumer$accept$ref($boundThis) {
    var l = function (p0, p1) {
      $boundThis.accept_90xfq6_k$(p0, p1);
      return Unit_getInstance();
    };
    l.callableName = 'accept';
    return l;
  }
  function Function$invoke$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.invoke(p0);
    };
    l.callableName = 'invoke';
    return l;
  }
  function Consumer$accept$ref($boundThis) {
    var l = function (p0) {
      $boundThis.accept(p0);
      return Unit_getInstance();
    };
    l.callableName = 'accept';
    return l;
  }
  function AbstractFew$catchImpl$lambda($collector, $fromDownStream) {
    return function (it) {
      var tmp;
      try {
        tmp = $collector.emit(it);
      } catch ($p) {
        var tmp_0;
        if ($p instanceof Error) {
          $fromDownStream._v = $p;
          throw $p;
        } else {
          throw $p;
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function AbstractFew() {
  }
  AbstractFew.prototype.collect = function (collector) {
    return this._ignore_collect(new SimpleFewCollector(collector));
  };
  AbstractFew.prototype.error = function (catcher) {
    return this._ignore_catch(catcher);
  };
  AbstractFew.prototype._ignore_error = function (catcher) {
    return this._ignore_catch(BiConsumer$accept$ref(catcher));
  };
  AbstractFew.prototype._ignore_map = function (transformer) {
    return this.map(Function$invoke$ref(transformer));
  };
  AbstractFew.prototype._ignore_onEach = function (consumer) {
    return this.onEach(Consumer$accept$ref(consumer));
  };
  AbstractFew.prototype.catchImpl_glhd9m_k$ = function (collector) {
    var fromDownStream = {_v: null};
    try {
      this.collect(AbstractFew$catchImpl$lambda(collector, fromDownStream));
    } catch ($p) {
      if ($p instanceof Error) {
        var tmp0_elvis_lhs = fromDownStream._v;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return $p;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var fromDownStream_0 = tmp;
        addSuppressed($p, fromDownStream_0);
        throw $p;
      } else {
        throw $p;
      }
    }
    return null;
  };
  AbstractFew.$metadata$ = classMeta('AbstractFew', [Few]);
  function simpleFew(on, block) {
    return new SimpleFewImpl(on, block);
  }
  function SimpleFewCollector(block) {
    this.block_1 = block;
  }
  SimpleFewCollector.prototype.get_block_ip8l7o_k$ = function () {
    return this.block_1;
  };
  SimpleFewCollector.prototype.emit = function (value) {
    return this.block_1(value);
  };
  SimpleFewCollector.$metadata$ = classMeta('SimpleFewCollector', [FewCollector]);
  function SimpleFewImpl_init_$Init$(executor, block, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      executor = Executors_getInstance().default();
    SimpleFewImpl.call($this, executor, block);
    return $this;
  }
  function SimpleFewImpl_init_$Create$(executor, block, $mask0, $marker) {
    return SimpleFewImpl_init_$Init$(executor, block, $mask0, $marker, Object.create(SimpleFewImpl.prototype));
  }
  function _get_executor__6gpljs($this) {
    return $this.executor_1;
  }
  function transform($this, transformer) {
    return new SimpleFewImpl($this.executor_1, SimpleFewImpl$transform$lambda($this, transformer));
  }
  function sam$functions_Runnable$0(function_0) {
    this.function_1 = function_0;
  }
  sam$functions_Runnable$0.prototype.run = function () {
    return this.function_1();
  };
  sam$functions_Runnable$0.$metadata$ = classMeta('sam$functions_Runnable$0', [Runnable]);
  function SimpleFewImpl$collect$lambda(this$0, $collector) {
    return function () {
      this$0.block_1($collector);
      return Unit_getInstance();
    };
  }
  function SimpleFewImpl$map$lambda$lambda($this_$receiver, $transformer) {
    return function (it) {
      $this_$receiver.emit($transformer(it));
      return Unit_getInstance();
    };
  }
  function SimpleFewImpl$map$lambda(this$0, $transformer) {
    return function ($this$$receiver) {
      this$0.collect(SimpleFewImpl$map$lambda$lambda($this$$receiver, $transformer));
      return Unit_getInstance();
    };
  }
  function SimpleFewImpl$onEach$lambda$lambda($this_$receiver, $block) {
    return function (it) {
      var tmp$ret$0;
      {
        $block(it);
        tmp$ret$0 = it;
      }
      $this_$receiver.emit(tmp$ret$0);
      return Unit_getInstance();
    };
  }
  function SimpleFewImpl$onEach$lambda(this$0, $block) {
    return function ($this$$receiver) {
      this$0.collect(SimpleFewImpl$onEach$lambda$lambda($this$$receiver, $block));
      return Unit_getInstance();
    };
  }
  function SimpleFewImpl$catch$lambda(this$0, $catcher) {
    return function ($this$$receiver) {
      var exception = this$0.catchImpl_glhd9m_k$($this$$receiver);
      if (!(exception == null))
        $catcher($this$$receiver, exception);
      return Unit_getInstance();
    };
  }
  function SimpleFewImpl$transform$lambda$lambda($this_$receiver, $transformer) {
    return function (it) {
      $this_$receiver.emit($transformer(it));
      return Unit_getInstance();
    };
  }
  function SimpleFewImpl$transform$lambda(this$0, $transformer) {
    return function ($this$$receiver) {
      this$0.collect(SimpleFewImpl$transform$lambda$lambda($this$$receiver, $transformer));
      return Unit_getInstance();
    };
  }
  function SimpleFewImpl(executor, block) {
    AbstractFew.call(this);
    this.executor_1 = executor;
    this.block_1 = block;
  }
  SimpleFewImpl.prototype.get_block_ip8l7o_k$ = function () {
    return this.block_1;
  };
  SimpleFewImpl.prototype._ignore_collect = function (collector) {
    var tmp = SimpleFewImpl$collect$lambda(this, collector);
    return this.executor_1.execute(new sam$functions_Runnable$0(tmp));
  };
  SimpleFewImpl.prototype.executeOn = function (executor) {
    return new SimpleFewImpl(executor, this.block_1);
  };
  SimpleFewImpl.prototype.map = function (transformer) {
    var tmp$ret$0;
    {
      tmp$ret$0 = new SimpleFewImpl(this.executor_1, SimpleFewImpl$map$lambda(this, transformer));
    }
    return tmp$ret$0;
  };
  SimpleFewImpl.prototype.onEach = function (block) {
    var tmp$ret$0;
    {
      tmp$ret$0 = new SimpleFewImpl(this.executor_1, SimpleFewImpl$onEach$lambda(this, block));
    }
    return tmp$ret$0;
  };
  SimpleFewImpl.prototype._ignore_catch = function (catcher) {
    return new SimpleFewImpl(this.executor_1, SimpleFewImpl$catch$lambda(this, catcher));
  };
  SimpleFewImpl.$metadata$ = classMeta('SimpleFewImpl', undefined, undefined, undefined, undefined, AbstractFew.prototype);
  function fewOf(value, executor) {
    return fewOf_0(value, executor === void 1 ? Executors_getInstance().default() : executor);
  }
  function fewOf_0(value, executor) {
    var tmp$ret$0;
    {
      var tmp0_simpleFew = fewOf$lambda(value);
      tmp$ret$0 = new SimpleFewImpl(executor, tmp0_simpleFew);
    }
    return tmp$ret$0;
  }
  function fewOf$default(value, executor, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      executor = Executors_getInstance().default();
    return fewOf_0(value, executor);
  }
  function few_0(block, executor) {
    return few_1(block, executor === void 1 ? Executors_getInstance().default() : executor);
  }
  function few_1(block, executor) {
    var tmp$ret$0;
    {
      var tmp0_simpleFew = few$lambda(block);
      tmp$ret$0 = new SimpleFewImpl(executor, tmp0_simpleFew);
    }
    return tmp$ret$0;
  }
  function few$default(block, executor, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      executor = Executors_getInstance().default();
    return few_1(block, executor);
  }
  function catch_0(handler) {
    console.log('Nyeee');
  }
  function fewOf$lambda($value) {
    return function ($this$simpleFew) {
      $this$simpleFew.emit($value);
      return Unit_getInstance();
    };
  }
  function few$lambda($block) {
    return function ($this$simpleFew) {
      $block($this$simpleFew);
      return Unit_getInstance();
    };
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $koncurrent = _.koncurrent || (_.koncurrent = {});
    var $koncurrent = _.koncurrent || (_.koncurrent = {});
    _.fewOf = fewOf;
    _.few = few_0;
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = SimpleFewImpl;
  //endregion
  return _;
}));

//# sourceMappingURL=foundation-runtimes-koncurrent-few-core.js.map