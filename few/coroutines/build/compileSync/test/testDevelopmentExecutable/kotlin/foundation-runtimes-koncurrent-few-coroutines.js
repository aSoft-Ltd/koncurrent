(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js', './foundation-runtimes-koncurrent-primitives-core.js', './foundation-runtimes-koncurrent-few-core.js', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'), require('./foundation-runtimes-koncurrent-primitives-core.js'), require('./foundation-runtimes-koncurrent-few-core.js'), require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-few-coroutines'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-few-coroutines'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-primitives-core'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-few-coroutines'. Its dependency 'foundation-runtimes-koncurrent-primitives-core' was not found. Please, check whether 'foundation-runtimes-koncurrent-primitives-core' is loaded prior to 'foundation-runtimes-koncurrent-few-coroutines'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-few-core'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-few-coroutines'. Its dependency 'foundation-runtimes-koncurrent-few-core' was not found. Please, check whether 'foundation-runtimes-koncurrent-few-core' is loaded prior to 'foundation-runtimes-koncurrent-few-coroutines'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-few-coroutines'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-few-coroutines'.");
    }
    root['foundation-runtimes-koncurrent-few-coroutines'] = factory(typeof this['foundation-runtimes-koncurrent-few-coroutines'] === 'undefined' ? {} : this['foundation-runtimes-koncurrent-few-coroutines'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'], this['foundation-runtimes-koncurrent-primitives-core'], this['foundation-runtimes-koncurrent-few-core'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_foundation_runtimes_koncurrent_primitives_core, kotlin_foundation_runtimes_koncurrent_few_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var channelFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var Executors_getInstance = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.a;
  var SimpleFewImpl = kotlin_foundation_runtimes_koncurrent_few_core.$_$.a;
  var Unit_getInstance = kotlin_kotlin.$_$.i1;
  var CoroutineImpl = kotlin_kotlin.$_$.m2;
  var THROW_CCE = kotlin_kotlin.$_$.c4;
  var ProducerScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var isInterface = kotlin_kotlin.$_$.d3;
  var classMeta = kotlin_kotlin.$_$.u2;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var isObject = kotlin_kotlin.$_$.e3;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.x;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.w1;
  var launch$default = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.g;
  var SuspendFunction1 = kotlin_kotlin.$_$.o2;
  //endregion
  //region block: pre-declaration
  toFlow$slambda.prototype = Object.create(CoroutineImpl.prototype);
  toFlow$slambda.prototype.constructor = toFlow$slambda;
  toFew$lambda$slambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  toFew$lambda$slambda$slambda.prototype.constructor = toFew$lambda$slambda$slambda;
  toFew$lambda$slambda.prototype = Object.create(CoroutineImpl.prototype);
  toFew$lambda$slambda.prototype.constructor = toFew$lambda$slambda;
  //endregion
  function toFlow(_this__u8e3s4) {
    return channelFlow(toFlow$slambda_0(_this__u8e3s4, null));
  }
  function toFew(_this__u8e3s4, scope) {
    var tmp$ret$1;
    {
      var tmp0_few = toFew$lambda(scope, _this__u8e3s4);
      var tmp1_few = Executors_getInstance().default();
      var tmp$ret$0;
      {
        tmp$ret$0 = new SimpleFewImpl(tmp1_few, tmp0_few);
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  }
  function toFlow$slambda$lambda($this_channelFlow) {
    return function (it) {
      $this_channelFlow.trySend_3hclq4_k$(it);
      return Unit_getInstance();
    };
  }
  function toFlow$slambda($this_toFlow, resultContinuation) {
    this.$this_toFlow_1 = $this_toFlow;
    CoroutineImpl.call(this, resultContinuation);
  }
  toFlow$slambda.prototype.invoke_7587ie_k$ = function ($this$channelFlow, $cont) {
    var tmp = this.create_xnm1el_k$($this$channelFlow, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  toFlow$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_7587ie_k$((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  toFlow$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          this.$this_toFlow_1.collect(toFlow$slambda$lambda(this.$this$channelFlow_1));
          this.$this$channelFlow_1.close$default_jao18g_k$(null, 1, null);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.exception_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  toFlow$slambda.prototype.create_xnm1el_k$ = function ($this$channelFlow, completion) {
    var i = new toFlow$slambda(this.$this_toFlow_1, completion);
    i.$this$channelFlow_1 = $this$channelFlow;
    return i;
  };
  toFlow$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_xnm1el_k$((!(value == null) ? isInterface(value, ProducerScope) : false) ? value : THROW_CCE(), completion);
  };
  toFlow$slambda.$metadata$ = classMeta('toFlow$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function toFlow$slambda_0($this_toFlow, resultContinuation) {
    var i = new toFlow$slambda($this_toFlow, resultContinuation);
    var l = function ($this$channelFlow, $cont) {
      return i.invoke_7587ie_k$($this$channelFlow, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.function_1 = function_0;
  }
  sam$kotlinx_coroutines_flow_FlowCollector$0.prototype.emit_1fbrsb_k$ = function (value, $cont) {
    return this.function_1(value, $cont);
  };
  sam$kotlinx_coroutines_flow_FlowCollector$0.$metadata$ = classMeta('sam$kotlinx_coroutines_flow_FlowCollector$0', [FlowCollector]);
  function toFew$lambda$slambda$slambda($this_few, resultContinuation) {
    this.$this_few_1 = $this_few;
    CoroutineImpl.call(this, resultContinuation);
  }
  toFew$lambda$slambda$slambda.prototype.invoke_tr8wvu_k$ = function (it, $cont) {
    var tmp = this.create_aq37ol_k$(it, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  toFew$lambda$slambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_tr8wvu_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE(), $cont);
  };
  toFew$lambda$slambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        if (tmp === 0) {
          this.exceptionState_1 = 1;
          this.$this_few_1.emit(this.it_1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.exception_1;
        }
      } catch ($p) {
        throw $p;
      }
     while (true);
  };
  toFew$lambda$slambda$slambda.prototype.create_aq37ol_k$ = function (it, completion) {
    var i = new toFew$lambda$slambda$slambda(this.$this_few_1, completion);
    i.it_1 = it;
    return i;
  };
  toFew$lambda$slambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_aq37ol_k$((value == null ? true : isObject(value)) ? value : THROW_CCE(), completion);
  };
  toFew$lambda$slambda$slambda.$metadata$ = classMeta('toFew$lambda$slambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function toFew$lambda$slambda$slambda_0($this_few, resultContinuation) {
    var i = new toFew$lambda$slambda$slambda($this_few, resultContinuation);
    var l = function (it, $cont) {
      return i.invoke_tr8wvu_k$(it, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function toFew$lambda$slambda($this_toFew, $this_few, resultContinuation) {
    this.$this_toFew_1 = $this_toFew;
    this.$this_few_1 = $this_few;
    CoroutineImpl.call(this, resultContinuation);
  }
  toFew$lambda$slambda.prototype.invoke_d6gbsu_k$ = function ($this$launch, $cont) {
    var tmp = this.create_b6qu53_k$($this$launch, $cont);
    tmp.result_1 = Unit_getInstance();
    tmp.exception_1 = null;
    return tmp.doResume_5yljmg_k$();
  };
  toFew$lambda$slambda.prototype.invoke_5zdxxo_k$ = function (p1, $cont) {
    return this.invoke_d6gbsu_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $cont);
  };
  toFew$lambda$slambda.prototype.doResume_5yljmg_k$ = function () {
    var suspendResult = this.result_1;
    $sm: do
      try {
        var tmp = this.state_1;
        switch (tmp) {
          case 0:
            this.exceptionState_1 = 2;
            this.state_1 = 1;
            var tmp_0 = toFew$lambda$slambda$slambda_0(this.$this_few_1, null);
            suspendResult = this.$this_toFew_1.collect_llpwvh_k$(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
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
  toFew$lambda$slambda.prototype.create_b6qu53_k$ = function ($this$launch, completion) {
    var i = new toFew$lambda$slambda(this.$this_toFew_1, this.$this_few_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  toFew$lambda$slambda.prototype.create_xubfvz_k$ = function (value, completion) {
    return this.create_b6qu53_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  toFew$lambda$slambda.$metadata$ = classMeta('toFew$lambda$slambda', undefined, undefined, undefined, [1], CoroutineImpl.prototype);
  function toFew$lambda$slambda_0($this_toFew, $this_few, resultContinuation) {
    var i = new toFew$lambda$slambda($this_toFew, $this_few, resultContinuation);
    var l = function ($this$launch, $cont) {
      return i.invoke_d6gbsu_k$($this$launch, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function toFew$lambda($scope, $this_toFew) {
    return function ($this$few) {
      launch$default($scope, null, null, toFew$lambda$slambda_0($this_toFew, $this$few, null), 3, null);
      return Unit_getInstance();
    };
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = toFew;
  _.$_$.b = toFlow;
  //endregion
  return _;
}));

//# sourceMappingURL=foundation-runtimes-koncurrent-few-coroutines.js.map