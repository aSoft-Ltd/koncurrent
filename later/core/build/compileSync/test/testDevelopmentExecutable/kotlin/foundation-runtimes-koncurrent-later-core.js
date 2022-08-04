(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './foundation-runtimes-koncurrent-primitives-core.js', './foundation-runtimes-kotlinx-collections-interoperable.js', './88b0986a7186d029-atomicfu-js-ir.js', './foundation-runtimes-functions.js', './foundation-runtimes-kotlinx-collections-atomic.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./foundation-runtimes-koncurrent-primitives-core.js'), require('./foundation-runtimes-kotlinx-collections-interoperable.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'), require('./foundation-runtimes-functions.js'), require('./foundation-runtimes-kotlinx-collections-atomic.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-core'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-later-core'.");
    }
    if (typeof this['foundation-runtimes-koncurrent-primitives-core'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-core'. Its dependency 'foundation-runtimes-koncurrent-primitives-core' was not found. Please, check whether 'foundation-runtimes-koncurrent-primitives-core' is loaded prior to 'foundation-runtimes-koncurrent-later-core'.");
    }
    if (typeof this['foundation-runtimes-kotlinx-collections-interoperable'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-core'. Its dependency 'foundation-runtimes-kotlinx-collections-interoperable' was not found. Please, check whether 'foundation-runtimes-kotlinx-collections-interoperable' is loaded prior to 'foundation-runtimes-koncurrent-later-core'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-core'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'foundation-runtimes-koncurrent-later-core'.");
    }
    if (typeof this['foundation-runtimes-functions'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-core'. Its dependency 'foundation-runtimes-functions' was not found. Please, check whether 'foundation-runtimes-functions' is loaded prior to 'foundation-runtimes-koncurrent-later-core'.");
    }
    if (typeof this['foundation-runtimes-kotlinx-collections-atomic'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-koncurrent-later-core'. Its dependency 'foundation-runtimes-kotlinx-collections-atomic' was not found. Please, check whether 'foundation-runtimes-kotlinx-collections-atomic' is loaded prior to 'foundation-runtimes-koncurrent-later-core'.");
    }
    root['foundation-runtimes-koncurrent-later-core'] = factory(typeof this['foundation-runtimes-koncurrent-later-core'] === 'undefined' ? {} : this['foundation-runtimes-koncurrent-later-core'], this['kotlin-kotlin-stdlib-js-ir'], this['foundation-runtimes-koncurrent-primitives-core'], this['foundation-runtimes-kotlinx-collections-interoperable'], this['88b0986a7186d029-atomicfu-js-ir'], this['foundation-runtimes-functions'], this['foundation-runtimes-kotlinx-collections-atomic']);
  }
}(this, function (_, kotlin_kotlin, kotlin_foundation_runtimes_koncurrent_primitives_core, kotlin_foundation_runtimes_kotlinx_collections_interoperable, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_foundation_runtimes_functions, kotlin_foundation_runtimes_kotlinx_collections_atomic) {
  'use strict';
  //region block: imports
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var Fulfilled = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.e;
  var Unit_getInstance = kotlin_kotlin.$_$.w1;
  var toList = kotlin_kotlin.$_$.j3;
  var ListWrapper = kotlin_foundation_runtimes_kotlinx_collections_interoperable.$_$.g;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e;
  var Collection = kotlin_kotlin.$_$.y1;
  var isInterface = kotlin_kotlin.$_$.d5;
  var Settled = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.h;
  var Executors_getInstance = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.a;
  var get_atomicfu$reentrantLock = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var mapCapacity = kotlin_kotlin.$_$.d3;
  var coerceAtLeast = kotlin_kotlin.$_$.l5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var toMutableMap = kotlin_kotlin.$_$.n3;
  var SynchronousExecutor_getInstance = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.c;
  var objectMeta = kotlin_kotlin.$_$.i5;
  var Consumer = kotlin_foundation_runtimes_functions.$_$.a;
  var classMeta = kotlin_kotlin.$_$.p4;
  var Runnable = kotlin_foundation_runtimes_functions.$_$.b;
  var Rejected = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.g;
  var THROW_CCE = kotlin_kotlin.$_$.c6;
  var isObject = kotlin_kotlin.$_$.f5;
  var addSuppressed = kotlin_kotlin.$_$.f6;
  var mutableAtomicListOf = kotlin_foundation_runtimes_kotlinx_collections_atomic.$_$.a;
  var PendingState_getInstance = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.b;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.k6;
  var PendingState = kotlin_foundation_runtimes_koncurrent_primitives_core.$_$.f;
  var interfaceMeta = kotlin_kotlin.$_$.v4;
  //endregion
  //region block: pre-declaration
  //endregion
  function _get_lock__d9xa4g($this) {
    return $this.lock_1;
  }
  function Later$Companion$allFulfilled$lambda() {
    return function (it) {
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
      return tmp$ret$3;
    };
  }
  function Later$Companion$allFulfilledValues$lambda$lambda() {
    return function (it) {
      return it.value_1;
    };
  }
  function Later$Companion$allFulfilledValues$lambda() {
    return function (list) {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_toInteroperableList = list.map(Later$Companion$allFulfilledValues$lambda$lambda());
          tmp$ret$0 = new ListWrapper(toList(tmp0_toInteroperableList));
        }
        tmp$ret$1 = tmp$ret$0;
      }
      return tmp$ret$1;
    };
  }
  function Later$Companion$all$lambda($states, $element, $laters, $later) {
    return function (state) {
      var tmp$ret$11;
      {
        var tmp0_withLock = Companion_getInstance().lock_1;
        {
          $states.put_3mhbri_k$($element, state);
        }
        var tmp;
        var tmp$ret$3;
        $l$block_0: {
          var tmp$ret$2;
          {
            var tmp$ret$1;
            {
              var tmp0_mapTo = ArrayList_init_$Create$_0($laters.length);
              var indexedObject = $laters;
              var inductionVariable = 0;
              var last = indexedObject.length;
              while (inductionVariable < last) {
                var item = indexedObject[inductionVariable];
                inductionVariable = inductionVariable + 1 | 0;
                var tmp$ret$0;
                {
                  tmp$ret$0 = item.state_1;
                }
                tmp0_mapTo.add_1j60pz_k$(tmp$ret$0);
              }
              tmp$ret$1 = tmp0_mapTo;
            }
            tmp$ret$2 = tmp$ret$1;
          }
          var tmp0_all = tmp$ret$2;
          var tmp_0;
          if (isInterface(tmp0_all, Collection)) {
            tmp_0 = tmp0_all.isEmpty_y1axqb_k$();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$3 = true;
            break $l$block_0;
          }
          var tmp0_iterator = tmp0_all.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            var tmp$ret$4;
            {
              tmp$ret$4 = element instanceof Settled;
            }
            if (!tmp$ret$4) {
              tmp$ret$3 = false;
              break $l$block_0;
            }
          }
          tmp$ret$3 = true;
        }
        if (tmp$ret$3) {
          var tmp$ret$10;
          {
            var tmp$ret$9;
            {
              var tmp$ret$7;
              {
                var tmp$ret$6;
                {
                  var tmp0_mapTo_0 = ArrayList_init_$Create$_0($laters.length);
                  var indexedObject_0 = $laters;
                  var inductionVariable_0 = 0;
                  var last_0 = indexedObject_0.length;
                  while (inductionVariable_0 < last_0) {
                    var item_0 = indexedObject_0[inductionVariable_0];
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    var tmp$ret$5;
                    {
                      tmp$ret$5 = item_0.state_1;
                    }
                    tmp0_mapTo_0.add_1j60pz_k$(tmp$ret$5);
                  }
                  tmp$ret$6 = tmp0_mapTo_0;
                }
                tmp$ret$7 = tmp$ret$6;
              }
              var tmp1_filterIsInstance = tmp$ret$7;
              var tmp$ret$8;
              {
                var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
                var tmp0_iterator_0 = tmp1_filterIsInstance.iterator_jk1svi_k$();
                while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
                  var element_0 = tmp0_iterator_0.next_20eer_k$();
                  if (element_0 instanceof Settled) {
                    tmp0_filterIsInstanceTo.add_1j60pz_k$(element_0);
                  }
                }
                tmp$ret$8 = tmp0_filterIsInstanceTo;
              }
              tmp$ret$9 = tmp$ret$8;
            }
            var tmp2_toInteroperableList = tmp$ret$9;
            tmp$ret$10 = new ListWrapper(toList(tmp2_toInteroperableList));
          }
          var stateList = tmp$ret$10;
          $later.resolveWith(stateList);
          tmp = Unit_getInstance();
        }
        tmp$ret$11 = tmp;
      }
      return Unit_getInstance();
    };
  }
  function Later_init_$Init$(handler, executor, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      handler = null;
    if (!(($mask0 & 2) === 0))
      executor = Executors_getInstance().default();
    Later.call($this, handler, executor);
    return $this;
  }
  function Later_init_$Create$(handler, executor, $mask0, $marker) {
    return Later_init_$Init$(handler, executor, $mask0, $marker, Object.create(Later.prototype));
  }
  function Later_init_$Init$_0(handler, executor, $this) {
    var executor_0 = executor === void 1 ? Executors_getInstance().default() : executor;
    Later.call($this, Later$_init_$lambda_rgyry7(handler), executor_0);
    return $this;
  }
  function _ignore_fromHandler(handler, executor) {
    return Later_init_$Init$_0(handler, executor, Object.create(Later.prototype));
  }
  function Later_init_$Init$_1(handler, executor, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      executor = Executors_getInstance().default();
    Later_init_$Init$_0(handler, executor, $this);
    return $this;
  }
  function Later_init_$Create$_0(handler, executor, $mask0, $marker) {
    return Later_init_$Init$_1(handler, executor, $mask0, $marker, Object.create(Later.prototype));
  }
  function _get_thenQueue__709yqr($this) {
    return $this.thenQueue_1;
  }
  function _get_finallyQueue__roy7gj($this) {
    return $this.finallyQueue_1;
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = get_atomicfu$reentrantLock();
    }
    tmp.lock_1 = tmp$ret$0;
  }
  Companion.prototype.resolve = function (value, executor) {
    return this.resolve_wzvgn4_k$(value, executor === void 1 ? Executors_getInstance().default() : executor);
  };
  Companion.prototype.resolve_wzvgn4_k$ = function (value, executor) {
    var l = Later_init_$Create$(null, executor, 1, null);
    l.resolveWith(value);
    return l;
  };
  Companion.prototype.resolve$default_yco90m_k$ = function (value, executor, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      executor = Executors_getInstance().default();
    return this.resolve_wzvgn4_k$(value, executor);
  };
  Companion.prototype.reject = function (error, executor) {
    return this.reject_ci62hy_k$(error, executor === void 1 ? Executors_getInstance().default() : executor);
  };
  Companion.prototype.reject_ci62hy_k$ = function (error, executor) {
    var l = Later_init_$Create$(null, executor, 1, null);
    l.rejectWith(error);
    return l;
  };
  Companion.prototype.reject$default_o0t8tw_k$ = function (error, executor, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      executor = Executors_getInstance().default();
    return this.reject_ci62hy_k$(error, executor);
  };
  Companion.prototype.allFulfilled = function (laters) {
    var tmp$ret$0;
    {
      var tmp0_then = this.all(laters.slice());
      var tmp1_then = Later$Companion$allFulfilled$lambda();
      var tmp2_then = tmp0_then.executor_1;
      tmp$ret$0 = tmp0_then.then_kkt96f_k$(tmp1_then, null, tmp2_then);
    }
    return tmp$ret$0;
  };
  Companion.prototype.allFulfilledValues = function (laters) {
    var tmp$ret$0;
    {
      var tmp0_then = this.allFulfilled(laters.slice());
      var tmp1_then = Later$Companion$allFulfilledValues$lambda();
      var tmp2_then = tmp0_then.executor_1;
      tmp$ret$0 = tmp0_then.then_kkt96f_k$(tmp1_then, null, tmp2_then);
    }
    return tmp$ret$0;
  };
  Companion.prototype.all = function (laters) {
    var later = Later_init_$Create$(null, null, 3, null);
    var tmp$ret$2;
    {
      var result = LinkedHashMap_init_$Create$(coerceAtLeast(mapCapacity(laters.length), 16));
      var tmp$ret$1;
      {
        var indexedObject = laters;
        var inductionVariable = 0;
        var last = indexedObject.length;
        while (inductionVariable < last) {
          var element = indexedObject[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0;
          {
            tmp$ret$0 = element.state_1;
          }
          result.put_3mhbri_k$(element, tmp$ret$0);
        }
        tmp$ret$1 = result;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    var states = toMutableMap(tmp$ret$2);
    {
      var indexedObject_0 = laters;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject_0.length;
      while (inductionVariable_0 < last_0) {
        var element_0 = indexedObject_0[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        {
          element_0.complete_izeisb_k$(Later$Companion$all$lambda(states, element_0, laters, later), SynchronousExecutor_getInstance());
        }
      }
    }
    return later;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function propagateFulfilled($this, value) {
    {
      var tmp0_forEach = $this.thenQueue_1;
      var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        {
          var tmp = Later$propagateFulfilled$lambda(element, value);
          $this.executor_1.execute(new sam$functions_Runnable$0_1(tmp));
        }
      }
    }
    {
      var tmp1_forEach = $this.finallyQueue_1;
      var tmp0_iterator_0 = tmp1_forEach.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        {
          var tmp_0 = Later$propagateFulfilled$lambda_0(element_0, value);
          $this.executor_1.execute(new sam$functions_Runnable$0_1(tmp_0));
        }
      }
    }
    $this.thenQueue_1.clear_j9y8zo_k$();
    $this.finallyQueue_1.clear_j9y8zo_k$();
  }
  function propagateRejected($this, error) {
    {
      var tmp0_forEach = $this.thenQueue_1;
      var tmp0_iterator = tmp0_forEach.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        {
          var later = element.later_1;
          var tmp = Later$propagateRejected$lambda(element, later, error);
          $this.executor_1.execute(new sam$functions_Runnable$0_2(tmp));
        }
      }
    }
    {
      var tmp1_forEach = $this.finallyQueue_1;
      var tmp0_iterator_0 = tmp1_forEach.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        {
          var later_0 = element_0.later_1;
          var tmp_0 = Later$propagateRejected$lambda_0(element_0, later_0, error);
          $this.executor_1.execute(new sam$functions_Runnable$0_2(tmp_0));
        }
      }
    }
    $this.thenQueue_1.clear_j9y8zo_k$();
    $this.finallyQueue_1.clear_j9y8zo_k$();
  }
  function sam$functions_Consumer$0(function_0) {
    this.function_1 = function_0;
  }
  sam$functions_Consumer$0.prototype.accept = function (obj) {
    return this.function_1(obj);
  };
  sam$functions_Consumer$0.$metadata$ = classMeta('sam$functions_Consumer$0', [Consumer]);
  function sam$functions_Runnable$0(function_0) {
    this.function_1 = function_0;
  }
  sam$functions_Runnable$0.prototype.run = function () {
    return this.function_1();
  };
  sam$functions_Runnable$0.$metadata$ = classMeta('sam$functions_Runnable$0', [Runnable]);
  function sam$functions_Runnable$0_0(function_0) {
    this.function_1 = function_0;
  }
  sam$functions_Runnable$0_0.prototype.run = function () {
    return this.function_1();
  };
  sam$functions_Runnable$0_0.$metadata$ = classMeta('sam$functions_Runnable$0', [Runnable]);
  function sam$functions_Runnable$0_1(function_0) {
    this.function_1 = function_0;
  }
  sam$functions_Runnable$0_1.prototype.run = function () {
    return this.function_1();
  };
  sam$functions_Runnable$0_1.$metadata$ = classMeta('sam$functions_Runnable$0', [Runnable]);
  function sam$functions_Runnable$0_2(function_0) {
    this.function_1 = function_0;
  }
  sam$functions_Runnable$0_2.prototype.run = function () {
    return this.function_1();
  };
  sam$functions_Runnable$0_2.$metadata$ = classMeta('sam$functions_Runnable$0', [Runnable]);
  function Later$_init_$lambda_rgyry7($handler) {
    return function (resolve, reject) {
      $handler.execute_xaldrn_k$(new sam$functions_Consumer$0(resolve), new sam$functions_Consumer$0(reject));
      return Unit_getInstance();
    };
  }
  function invoke$resolveWith(receiver, p0) {
    receiver.resolveWith(p0);
  }
  function invoke$rejectWith(receiver, p0) {
    receiver.rejectWith(p0);
  }
  function Later$lambda$resolveWith$ref($boundThis) {
    return function (p0) {
      invoke$resolveWith($boundThis, p0);
      return Unit_getInstance();
    };
  }
  function Later$lambda$rejectWith$ref($boundThis) {
    return function (p0) {
      invoke$rejectWith($boundThis, p0);
      return Unit_getInstance();
    };
  }
  function Later$lambda($handler, this$0) {
    return function () {
      var tmp;
      try {
        var tmp0_safe_receiver = $handler;
        if (tmp0_safe_receiver == null)
          null;
        else {
          var tmp_0 = Later$lambda$resolveWith$ref(this$0);
          tmp0_safe_receiver(tmp_0, Later$lambda$rejectWith$ref(this$0));
        }
        tmp = Unit_getInstance();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          this$0.rejectWith($p);
          tmp_1 = Unit_getInstance();
        } else {
          throw $p;
        }
        tmp = tmp_1;
      }
      return Unit_getInstance();
    };
  }
  function Later$then$lambda($onResolved) {
    return function (value) {
      return $onResolved.invoke(value);
    };
  }
  function Later$flatten$lambda$lambda$lambda($later) {
    return function (it) {
      return $later.resolveWith(it);
    };
  }
  function Later$flatten$lambda$lambda$lambda_0($later) {
    return function (it) {
      return $later.rejectWith(it);
    };
  }
  function Later$flatten$lambda$lambda($onResolved, $res, $executor, $later) {
    return function () {
      var tmp;
      try {
        var resolved = $onResolved($res);
        var tmp_0 = Later$flatten$lambda$lambda$lambda($later);
        resolved.then_kkt96f_k$(tmp_0, Later$flatten$lambda$lambda$lambda_0($later), $executor);
        tmp = Unit_getInstance();
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          $later.rejectWith($p);
          tmp_1 = Unit_getInstance();
        } else {
          throw $p;
        }
        tmp = tmp_1;
      }
      return Unit_getInstance();
    };
  }
  function Later$flatten$lambda($executor, $onResolved, $later) {
    return function (res) {
      var tmp = Later$flatten$lambda$lambda($onResolved, res, $executor, $later);
      $executor.execute(new sam$functions_Runnable$0_0(tmp));
      return Unit_getInstance();
    };
  }
  function Later$flatten$lambda_0($later) {
    return function (it) {
      return $later.rejectWith(it);
    };
  }
  function Function$invoke$ref($boundThis) {
    var l = function (p0) {
      return $boundThis.invoke(p0);
    };
    l.callableName = 'invoke';
    return l;
  }
  function Later$error$lambda($handler) {
    return function (err) {
      return $handler.invoke(err);
    };
  }
  function Later$complete$lambda($handler) {
    return function (state) {
      $handler.accept(state);
      return Unit_getInstance();
    };
  }
  function Later$cleanUp$lambda($cleanUp) {
    return function (value) {
      $cleanUp(new Fulfilled(value));
      return value;
    };
  }
  function Later$cleanUp$lambda_0($cleanUp) {
    return function (err) {
      $cleanUp(new Rejected(err));
      return isObject(err) ? err : THROW_CCE();
    };
  }
  function Later$propagateFulfilled$lambda($element, $value) {
    return function () {
      var later = $element.later_1;
      var tmp;
      try {
        var resolver = $element.resolver_1;
        var tmp_0;
        if (!(resolver == null)) {
          later.resolveWith(resolver($value));
          tmp_0 = Unit_getInstance();
        } else {
          later.resolveWith($value);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          later.rejectWith($p);
          tmp_1 = Unit_getInstance();
        } else {
          throw $p;
        }
        tmp = tmp_1;
      }
      return Unit_getInstance();
    };
  }
  function Later$propagateFulfilled$lambda_0($element, $value) {
    return function () {
      var later = $element.later_1;
      var tmp;
      try {
        var resolver = $element.resolver_1;
        var tmp_0;
        if (!(resolver == null)) {
          later.resolveWith(resolver($value));
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var tmp_2;
          try {
            var rejecter = $element.rejecter_1;
            var tmp_3;
            if (!(rejecter == null)) {
              later.resolveWith(rejecter($p));
              tmp_3 = Unit_getInstance();
            }
            tmp_2 = tmp_3;
          } catch ($p) {
            var tmp_4;
            if ($p instanceof Error) {
              addSuppressed($p, $p);
              later.rejectWith($p);
              tmp_4 = Unit_getInstance();
            } else {
              throw $p;
            }
            tmp_2 = tmp_4;
          }
          tmp_1 = tmp_2;
        } else {
          throw $p;
        }
        tmp = tmp_1;
      }
      return Unit_getInstance();
    };
  }
  function Later$propagateRejected$lambda($element, $later, $error) {
    return function () {
      var tmp;
      try {
        var rejecter = $element.rejecter_1;
        var tmp_0;
        if (!(rejecter == null)) {
          $later.resolveWith(rejecter($error));
          tmp_0 = Unit_getInstance();
        } else {
          $later.rejectWith($error);
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          addSuppressed($error, $p);
          $later.rejectWith($error);
          tmp_1 = Unit_getInstance();
        } else {
          throw $p;
        }
        tmp = tmp_1;
      }
      return Unit_getInstance();
    };
  }
  function Later$propagateRejected$lambda_0($element, $later, $error) {
    return function () {
      var tmp;
      try {
        var rejecter = $element.rejecter_1;
        var tmp_0;
        if (!(rejecter == null)) {
          $later.resolveWith(rejecter($error));
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          addSuppressed($error, $p);
          $later.rejectWith($error);
          tmp_1 = Unit_getInstance();
        } else {
          throw $p;
        }
        tmp = tmp_1;
      }
      return Unit_getInstance();
    };
  }
  function Later(handler, executor) {
    Companion_getInstance();
    var handler_0 = handler === void 1 ? null : handler;
    var executor_0 = executor === void 1 ? Executors_getInstance().default() : executor;
    this.executor_1 = executor_0;
    this.thenQueue_1 = mutableAtomicListOf([]);
    this.finallyQueue_1 = mutableAtomicListOf([]);
    this.state_1 = PendingState_getInstance();
    var tmp = Later$lambda(handler_0, this);
    this.executor_1.execute(new sam$functions_Runnable$0(tmp));
  }
  Later.prototype.get_executor_1zf7oc_k$ = function () {
    return this.executor_1;
  };
  Later.prototype.set__ignore_state_l38xy9_k$ = function (_set____db54di) {
    this.state_1 = _set____db54di;
  };
  Later.prototype.get__ignore_state_sjqijq_k$ = function () {
    return this.state_1;
  };
  Later.prototype._ignore_thenWithExecutor = function (onResolved, onRejected, executor) {
    return this.then_kkt96f_k$(onResolved, onRejected === void 1 ? null : onRejected, executor === void 1 ? this.executor_1 : executor);
  };
  Later.prototype.then_kkt96f_k$ = function (onResolved, onRejected, executor) {
    var later = Later_init_$Create$(null, executor, 1, null);
    var item = new LaterQueueItem(later, onResolved, onRejected);
    this.thenQueue_1.add_1j60pz_k$(item);
    var s = this.state_1;
    if (s instanceof Fulfilled)
      propagateFulfilled(this, s.value_1);
    else {
      if (s instanceof Rejected)
        propagateRejected(this, s.cause_1);
      else {
      }
    }
    return later;
  };
  Later.prototype.then$default_qwqxvb_k$ = function (onResolved, onRejected, executor, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      onRejected = null;
    if (!(($mask0 & 4) === 0))
      executor = this.executor_1;
    return this.then_kkt96f_k$(onResolved, onRejected, executor);
  };
  Later.prototype.then = function (onResolved, executor) {
    return this.then_56v6nh_k$(onResolved, executor === void 1 ? this.executor_1 : executor);
  };
  Later.prototype.then_56v6nh_k$ = function (onResolved, executor) {
    return this.then_kkt96f_k$(onResolved, null, executor);
  };
  Later.prototype.then$default_z8547n_k$ = function (onResolved, executor, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      executor = this.executor_1;
    return this.then_56v6nh_k$(onResolved, executor);
  };
  Later.prototype._ignore_then = function (onResolved, executor) {
    return this.then_3qx49e_k$(onResolved, executor === void 1 ? this.executor_1 : executor);
  };
  Later.prototype.then_3qx49e_k$ = function (onResolved, executor) {
    return this.then_kkt96f_k$(Later$then$lambda(onResolved), null, executor);
  };
  Later.prototype.then$default_9cvwj0_k$ = function (onResolved, executor, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      executor = this.executor_1;
    return this.then_3qx49e_k$(onResolved, executor);
  };
  Later.prototype.flatten = function (onResolved, executor) {
    return this.flatten_3d79pv_k$(onResolved, executor === void 1 ? this.executor_1 : executor);
  };
  Later.prototype.flatten_3d79pv_k$ = function (onResolved, executor) {
    var later = Later_init_$Create$(null, executor, 1, null);
    var tmp = Later$flatten$lambda(executor, onResolved, later);
    this.then_kkt96f_k$(tmp, Later$flatten$lambda_0(later), executor);
    return later;
  };
  Later.prototype.flatten$default_dvo64t_k$ = function (onResolved, executor, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      executor = this.executor_1;
    return this.flatten_3d79pv_k$(onResolved, executor);
  };
  Later.prototype._ignore_flatten = function (onResolved, executor) {
    return this.flatten_wt7aa4_k$(onResolved, executor === void 1 ? this.executor_1 : executor);
  };
  Later.prototype.flatten_wt7aa4_k$ = function (onResolved, executor) {
    return this.flatten_3d79pv_k$(Function$invoke$ref(onResolved), executor);
  };
  Later.prototype.flatten$default_6qnwni_k$ = function (onResolved, executor, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      executor = this.executor_1;
    return this.flatten_wt7aa4_k$(onResolved, executor);
  };
  Later.prototype.error = function (handler, executor) {
    return this.error_ytflvn_k$(handler, executor === void 1 ? this.executor_1 : executor);
  };
  Later.prototype.error_ytflvn_k$ = function (handler, executor) {
    return this.then_kkt96f_k$(null, handler, executor);
  };
  Later.prototype.error$default_8z3aw3_k$ = function (handler, executor, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      executor = this.executor_1;
    return this.error_ytflvn_k$(handler, executor);
  };
  Later.prototype._ignore_error = function (handler, executor) {
    return this.error_km5yqw_k$(handler, executor === void 1 ? this.executor_1 : executor);
  };
  Later.prototype.error_km5yqw_k$ = function (handler, executor) {
    return this.then_kkt96f_k$(null, Later$error$lambda(handler), executor);
  };
  Later.prototype.error$default_mfyrzc_k$ = function (handler, executor, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      executor = this.executor_1;
    return this.error_km5yqw_k$(handler, executor);
  };
  Later.prototype._ignore_complete = function (handler, executor) {
    return this.complete_hjvvbh_k$(handler, executor === void 1 ? this.executor_1 : executor);
  };
  Later.prototype.complete_hjvvbh_k$ = function (handler, executor) {
    return this.cleanUp_y5bwey_k$(executor, Later$complete$lambda(handler));
  };
  Later.prototype.complete$default_r5619j_k$ = function (handler, executor, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      executor = this.executor_1;
    return this.complete_hjvvbh_k$(handler, executor);
  };
  Later.prototype.complete = function (cleanUp, executor) {
    return this.complete_izeisb_k$(cleanUp, executor === void 1 ? this.executor_1 : executor);
  };
  Later.prototype.complete_izeisb_k$ = function (cleanUp, executor) {
    return this.cleanUp_y5bwey_k$(executor, cleanUp);
  };
  Later.prototype.complete$default_6v7p0l_k$ = function (cleanUp, executor, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      executor = this.executor_1;
    return this.complete_izeisb_k$(cleanUp, executor);
  };
  Later.prototype.cleanUp_y5bwey_k$ = function (executor, cleanUp) {
    var s = this.state_1;
    if (s instanceof Settled) {
      cleanUp(s);
      var tmp0_subject = s;
      var tmp;
      if (tmp0_subject instanceof Fulfilled) {
        var tmp_0 = Companion_getInstance().resolve_wzvgn4_k$(s.value_1, executor);
        tmp = tmp_0 instanceof Later ? tmp_0 : THROW_CCE();
      } else {
        if (tmp0_subject instanceof Rejected) {
          var tmp_1 = Companion_getInstance().reject_ci62hy_k$(s.cause_1, executor);
          tmp = tmp_1 instanceof Later ? tmp_1 : THROW_CCE();
        } else {
          noWhenBranchMatchedException();
        }
      }
      return tmp;
    }
    var later = Later_init_$Create$(null, executor, 1, null);
    var resolve = Later$cleanUp$lambda(cleanUp);
    var rejected = Later$cleanUp$lambda_0(cleanUp);
    this.finallyQueue_1.add_1j60pz_k$(new LaterQueueItem(later, resolve, rejected));
    return later;
  };
  Later.prototype.toPromise = function () {
    return toPlatformConcurrentMonad(this);
  };
  Later.prototype._ignore_toPromise = function (executor) {
    return toPlatformConcurrentMonad_0(this, executor);
  };
  Later.prototype.resolveWith = function (value) {
    var tmp = this.state_1;
    if (tmp instanceof PendingState) {
      try {
        this.state_1 = new Fulfilled(value);
        propagateFulfilled(this, value);
      } catch ($p) {
        if ($p instanceof Error) {
          this.rejectWith($p);
        } else {
          throw $p;
        }
      }
      return true;
    }
    return false;
  };
  Later.prototype.rejectWith = function (error) {
    var tmp = this.state_1;
    if (tmp instanceof PendingState) {
      this.state_1 = new Rejected(error);
      propagateRejected(this, error);
      return true;
    }
    return false;
  };
  Later.prototype.toString = function () {
    return 'Later(' + this.state_1 + ')';
  };
  Later.$metadata$ = classMeta('Later');
  Object.defineProperty(Later.prototype, 'executor', {
    configurable: true,
    get: Later.prototype.get_executor_1zf7oc_k$
  });
  Object.defineProperty(Later.prototype, '_ignore_state', {
    configurable: true,
    get: Later.prototype.get__ignore_state_sjqijq_k$,
    set: Later.prototype.set__ignore_state_l38xy9_k$
  });
  function Later_0(executor, handler) {
    return new Later(handler, executor);
  }
  function LaterOld_init_$Init$(handler, executor, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      handler = null;
    if (!(($mask0 & 2) === 0))
      executor = Executors_getInstance().default();
    LaterOld.call($this, handler, executor);
    return $this;
  }
  function LaterOld_init_$Create$(handler, executor, $mask0, $marker) {
    return LaterOld_init_$Init$(handler, executor, $mask0, $marker, Object.create(LaterOld.prototype));
  }
  function LaterOld(handler, executor) {
    var handler_0 = handler === void 1 ? null : handler;
    var executor_0 = executor === void 1 ? Executors_getInstance().default() : executor;
    this.executor_1 = executor_0;
  }
  LaterOld.prototype.get_executor_1zf7oc_k$ = function () {
    return this.executor_1;
  };
  LaterOld.$metadata$ = classMeta('LaterOld');
  Object.defineProperty(LaterOld.prototype, 'executor', {
    configurable: true,
    get: LaterOld.prototype.get_executor_1zf7oc_k$
  });
  function then(_this__u8e3s4, executor, onFulfilled) {
    return _this__u8e3s4.then_kkt96f_k$(onFulfilled, null, executor);
  }
  function filterFulfilled(_this__u8e3s4) {
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          var tmp0_filterIsInstanceTo = ArrayList_init_$Create$();
          var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
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
    return tmp$ret$2;
  }
  function filterFulfilledValues(_this__u8e3s4) {
    var tmp$ret$0;
    {
      var tmp0_toInteroperableList = _this__u8e3s4.map(filterFulfilledValues$lambda());
      tmp$ret$0 = new ListWrapper(toList(tmp0_toInteroperableList));
    }
    return tmp$ret$0;
  }
  function filterFulfilledValues_0(_this__u8e3s4) {
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
              var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
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
        var tmp0_toInteroperableList_0 = tmp0_filterFulfilledValues.map(filterFulfilledValues$lambda_0());
        tmp$ret$4 = new ListWrapper(toList(tmp0_toInteroperableList_0));
      }
      tmp$ret$5 = tmp$ret$4;
    }
    return tmp$ret$5;
  }
  function catch_0(_this__u8e3s4, executor, handler) {
    return _this__u8e3s4.then_kkt96f_k$(null, handler, executor);
  }
  function flatten(_this__u8e3s4, executor) {
    return flatten_0(_this__u8e3s4, executor, flatten$lambda());
  }
  function flatten_0(_this__u8e3s4, executor, onResolved) {
    return _this__u8e3s4.flatten_3d79pv_k$(onResolved, executor);
  }
  function flatten$default(_this__u8e3s4, executor, onResolved, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      executor = _this__u8e3s4.executor_1;
    return flatten_0(_this__u8e3s4, executor, onResolved);
  }
  function finally_0(_this__u8e3s4, executor, cleanUp) {
    return _this__u8e3s4.cleanUp_y5bwey_k$(executor, cleanUp);
  }
  function finally$default(_this__u8e3s4, executor, cleanUp, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      executor = _this__u8e3s4.executor_1;
    return finally_0(_this__u8e3s4, executor, cleanUp);
  }
  function filterFulfilledValues$lambda() {
    return function (it) {
      return it.value_1;
    };
  }
  function filterFulfilledValues$lambda_0() {
    return function (it) {
      return it.value_1;
    };
  }
  function flatten$lambda() {
    return function (it) {
      return it;
    };
  }
  function LaterHandler() {
  }
  LaterHandler.$metadata$ = interfaceMeta('LaterHandler');
  function LaterQueueItem(later, resolver, rejecter) {
    this.later_1 = later;
    this.resolver_1 = resolver;
    this.rejecter_1 = rejecter;
  }
  LaterQueueItem.prototype.get_later_iujm1v_k$ = function () {
    return this.later_1;
  };
  LaterQueueItem.prototype.get_resolver_xkyg9b_k$ = function () {
    return this.resolver_1;
  };
  LaterQueueItem.prototype.get_rejecter_t5w4et_k$ = function () {
    return this.rejecter_1;
  };
  LaterQueueItem.$metadata$ = classMeta('LaterQueueItem');
  function toPromise(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    var tmp0_elvis_lhs = tmp$ret$0.promise;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$2;
      {
        var tmp0_apply = new Promise(toPromise$lambda(_this__u8e3s4));
        {
        }
        {
          var tmp$ret$1;
          {
            tmp$ret$1 = tmp0_apply;
          }
          tmp$ret$1.promise = tmp0_apply;
        }
        tmp$ret$2 = tmp0_apply;
      }
      tmp = tmp$ret$2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function toPromise$lambda$lambda($resolve) {
    return function (it) {
      $resolve(it);
      return Unit_getInstance();
    };
  }
  function toPromise$lambda$lambda_0($reject) {
    return function (it) {
      $reject(it);
      return Unit_getInstance();
    };
  }
  function toPromise$lambda($this_toPromise) {
    return function (resolve, reject) {
      var tmp = toPromise$lambda$lambda(resolve);
      $this_toPromise.then_kkt96f_k$(tmp, toPromise$lambda$lambda_0(reject), $this_toPromise.executor_1);
      return Unit_getInstance();
    };
  }
  function toPlatformConcurrentMonad(_this__u8e3s4) {
    return toPromise(_this__u8e3s4);
  }
  function toPlatformConcurrentMonad_0(_this__u8e3s4, executor) {
    return toPromise(_this__u8e3s4);
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $koncurrent = _.koncurrent || (_.koncurrent = {});
    $koncurrent.Later = Later;
    $koncurrent.Later._ignore_fromHandler = _ignore_fromHandler;
    Object.defineProperty($koncurrent.Later, 'Companion', {
      configurable: true,
      get: Companion_getInstance
    });
    var $koncurrent = _.koncurrent || (_.koncurrent = {});
    $koncurrent.LaterOld = LaterOld;
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = finally$default;
  _.$_$.b = flatten$default;
  _.$_$.c = Companion_getInstance;
  _.$_$.d = flatten_0;
  _.$_$.e = Later;
  //endregion
  return _;
}));

//# sourceMappingURL=foundation-runtimes-koncurrent-later-core.js.map