(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './foundation-runtimes-kotlinx-collections-interoperable.js', './kotlin-kotlin-stdlib-js-ir.js', './88b0986a7186d029-atomicfu-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./foundation-runtimes-kotlinx-collections-interoperable.js'), require('./kotlin-kotlin-stdlib-js-ir.js'), require('./88b0986a7186d029-atomicfu-js-ir.js'));
  else {
    if (typeof this['foundation-runtimes-kotlinx-collections-interoperable'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-kotlinx-collections-atomic'. Its dependency 'foundation-runtimes-kotlinx-collections-interoperable' was not found. Please, check whether 'foundation-runtimes-kotlinx-collections-interoperable' is loaded prior to 'foundation-runtimes-kotlinx-collections-atomic'.");
    }
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-kotlinx-collections-atomic'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'foundation-runtimes-kotlinx-collections-atomic'.");
    }
    if (typeof this['88b0986a7186d029-atomicfu-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-kotlinx-collections-atomic'. Its dependency '88b0986a7186d029-atomicfu-js-ir' was not found. Please, check whether '88b0986a7186d029-atomicfu-js-ir' is loaded prior to 'foundation-runtimes-kotlinx-collections-atomic'.");
    }
    root['foundation-runtimes-kotlinx-collections-atomic'] = factory(typeof this['foundation-runtimes-kotlinx-collections-atomic'] === 'undefined' ? {} : this['foundation-runtimes-kotlinx-collections-atomic'], this['foundation-runtimes-kotlinx-collections-interoperable'], this['kotlin-kotlin-stdlib-js-ir'], this['88b0986a7186d029-atomicfu-js-ir']);
  }
}(this, function (_, kotlin_foundation_runtimes_kotlinx_collections_interoperable, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var Collection = kotlin_foundation_runtimes_kotlinx_collections_interoperable.$_$.b;
  var interfaceMeta = kotlin_kotlin.$_$.v4;
  var mutableListOf = kotlin_kotlin.$_$.f3;
  var MutableListWrapper = kotlin_foundation_runtimes_kotlinx_collections_interoperable.$_$.i;
  var Unit_getInstance = kotlin_kotlin.$_$.w1;
  var MutableCollection = kotlin_foundation_runtimes_kotlinx_collections_interoperable.$_$.h;
  var toMutableList = kotlin_kotlin.$_$.m3;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var toArray = kotlin_foundation_runtimes_kotlinx_collections_interoperable.$_$.a;
  var forEach = kotlin_foundation_runtimes_kotlinx_collections_interoperable.$_$.d;
  var forEachWithIndex = kotlin_foundation_runtimes_kotlinx_collections_interoperable.$_$.c;
  var map = kotlin_foundation_runtimes_kotlinx_collections_interoperable.$_$.f;
  var mapWithIndex = kotlin_foundation_runtimes_kotlinx_collections_interoperable.$_$.e;
  var MutableList = kotlin_foundation_runtimes_kotlinx_collections_interoperable.$_$.j;
  var classMeta = kotlin_kotlin.$_$.p4;
  //endregion
  //region block: pre-declaration
  function get_size() {
    return this.get_atomic_b4urlg_k$().value_1.get_size_woubt6_k$();
  }
  function iterator() {
    return this.get_atomic_b4urlg_k$().value_1.iterator_jk1svi_k$();
  }
  //endregion
  function AtomicCollection() {
  }
  AtomicCollection.$metadata$ = interfaceMeta('AtomicCollection', [Collection]);
  function mutableAtomicListOf(elements) {
    var tmp$ret$0;
    {
      var tmp0_mutableListOf = elements.slice();
      tmp$ret$0 = new MutableListWrapper(mutableListOf(tmp0_mutableListOf.slice()));
    }
    return MutableAtomicList_init_$Create$(tmp$ret$0);
  }
  function MutableAtomicCollection() {
  }
  MutableAtomicCollection.$metadata$ = interfaceMeta('MutableAtomicCollection', [AtomicCollection, MutableCollection]);
  function MutableAtomicList_init_$Init$(list, $this) {
    var tmp$ret$0;
    {
      tmp$ret$0 = new MutableListWrapper(toMutableList(list));
    }
    MutableAtomicList.call($this, atomic$ref$1(tmp$ret$0));
    return $this;
  }
  function MutableAtomicList_init_$Create$(list) {
    return MutableAtomicList_init_$Init$(list, Object.create(MutableAtomicList.prototype));
  }
  function MutableAtomicList$add$lambda($index, $element) {
    return function ($this$doAction) {
      $this$doAction.add_ydlf05_k$($index, $element);
      return Unit_getInstance();
    };
  }
  function MutableAtomicList$addAll$lambda($index, $elements) {
    return function ($this$doAction) {
      return $this$doAction.addAll_ikuqlt_k$($index, $elements);
    };
  }
  function MutableAtomicList$addAll$lambda_0($index, $elements) {
    return function ($this$doAction) {
      return $this$doAction.addAllAtIndex($index, $elements);
    };
  }
  function MutableAtomicList$removeAt$lambda($index) {
    return function ($this$doAction) {
      return $this$doAction.removeAt_qvpkxi_k$($index);
    };
  }
  function MutableAtomicList$add$lambda_0($element) {
    return function ($this$doAction) {
      return $this$doAction.add_1j60pz_k$($element);
    };
  }
  function MutableAtomicList$addAll$lambda_1($elements) {
    return function ($this$doAction) {
      return $this$doAction.addAll_oxxjjk_k$($elements);
    };
  }
  function MutableAtomicList$addAll$lambda_2($elements) {
    return function ($this$doAction) {
      return $this$doAction.addAll($elements);
    };
  }
  function MutableAtomicList$remove$lambda($element) {
    return function ($this$doAction) {
      return $this$doAction.remove_8hbkc6_k$($element);
    };
  }
  function MutableAtomicList$removeAll$lambda($elements) {
    return function ($this$doAction) {
      return $this$doAction.removeAll_99to5v_k$($elements);
    };
  }
  function MutableAtomicList$removeAll$lambda_0($elements) {
    return function ($this$doAction) {
      return $this$doAction.removeAll($elements);
    };
  }
  function MutableAtomicList$retainAll$lambda($elements) {
    return function ($this$doAction) {
      return $this$doAction.retainAll_j44sd0_k$($elements);
    };
  }
  function MutableAtomicList$retainAll$lambda_0($elements) {
    return function ($this$doAction) {
      return $this$doAction.retainAll($elements);
    };
  }
  function MutableAtomicList(atomic) {
    this.atomic_1 = atomic;
  }
  MutableAtomicList.prototype.get_atomic_b4urlg_k$ = function () {
    return this.atomic_1;
  };
  MutableAtomicList.prototype.doAction_v3a9bd_k$ = function (run) {
    var tmp$ret$0;
    {
      var tmp0_toInteroperableMutableList = this.atomic_1.value_1;
      tmp$ret$0 = new MutableListWrapper(toMutableList(tmp0_toInteroperableMutableList));
    }
    var list = tmp$ret$0;
    var res = run(list);
    {
      var tmp1_lazySet = this.atomic_1;
      tmp1_lazySet.value_1 = list;
    }
    return res;
  };
  MutableAtomicList.prototype.doAction_7mgh09_k$ = function (run) {
    return this.doAction_v3a9bd_k$(run);
  };
  MutableAtomicList.prototype.get_fkrdnv_k$ = function (index) {
    return this.atomic_1.value_1.get_fkrdnv_k$(index);
  };
  MutableAtomicList.prototype.indexOf_dcv8dt_k$ = function (element) {
    return this.atomic_1.value_1.indexOf_dcv8dt_k$(element);
  };
  MutableAtomicList.prototype.lastIndexOf_rzx8t5_k$ = function (element) {
    return this.atomic_1.value_1.lastIndexOf_rzx8t5_k$(element);
  };
  MutableAtomicList.prototype.listIterator_xjshxw_k$ = function () {
    return this.atomic_1.value_1.listIterator_xjshxw_k$();
  };
  MutableAtomicList.prototype.listIterator_5hanv9_k$ = function (index) {
    return this.atomic_1.value_1.listIterator_5hanv9_k$(index);
  };
  MutableAtomicList.prototype.set_meu351_k$ = function (index, element) {
    return this.atomic_1.value_1.set_meu351_k$(index, element);
  };
  MutableAtomicList.prototype.subList_d153ha_k$ = function (fromIndex, toIndex) {
    var tmp$ret$0;
    {
      var tmp0_toInteroperableMutableList = this.atomic_1.value_1.subList_d153ha_k$(fromIndex, toIndex);
      tmp$ret$0 = new MutableListWrapper(toMutableList(tmp0_toInteroperableMutableList));
    }
    return tmp$ret$0;
  };
  MutableAtomicList.prototype.add_ydlf05_k$ = function (index, element) {
    return this.doAction_v3a9bd_k$(MutableAtomicList$add$lambda(index, element));
  };
  MutableAtomicList.prototype.addAll_ikuqlt_k$ = function (index, elements) {
    return this.doAction_v3a9bd_k$(MutableAtomicList$addAll$lambda(index, elements));
  };
  MutableAtomicList.prototype.addAllAtIndex = function (index, elements) {
    return this.doAction_v3a9bd_k$(MutableAtomicList$addAll$lambda_0(index, elements));
  };
  MutableAtomicList.prototype.removeAt_qvpkxi_k$ = function (index) {
    return this.doAction_v3a9bd_k$(MutableAtomicList$removeAt$lambda(index));
  };
  MutableAtomicList.prototype.clear_j9y8zo_k$ = function () {
    {
      var tmp0_lazySet = this.atomic_1;
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = ArrayList_init_$Create$();
        }
        tmp$ret$1 = new MutableListWrapper(tmp$ret$0);
      }
      var tmp1_lazySet = tmp$ret$1;
      tmp0_lazySet.value_1 = tmp1_lazySet;
    }
  };
  MutableAtomicList.prototype.get_size_woubt6_k$ = function () {
    return this.atomic_1.value_1.get_size_woubt6_k$();
  };
  MutableAtomicList.prototype.contains_2ehdt1_k$ = function (element) {
    return this.atomic_1.value_1.contains_2ehdt1_k$(element);
  };
  MutableAtomicList.prototype.containsAll_jr3fla_k$ = function (elements) {
    return this.atomic_1.value_1.containsAll_jr3fla_k$(elements);
  };
  MutableAtomicList.prototype.containsAll = function (elements) {
    return this.atomic_1.value_1.containsAll(elements);
  };
  MutableAtomicList.prototype.isEmpty_y1axqb_k$ = function () {
    return this.atomic_1.value_1.isEmpty_y1axqb_k$();
  };
  MutableAtomicList.prototype.iterator_jk1svi_k$ = function () {
    return this.atomic_1.value_1.iterator_jk1svi_k$();
  };
  MutableAtomicList.prototype.add_1j60pz_k$ = function (element) {
    return this.doAction_v3a9bd_k$(MutableAtomicList$add$lambda_0(element));
  };
  MutableAtomicList.prototype.addAll_oxxjjk_k$ = function (elements) {
    return this.doAction_v3a9bd_k$(MutableAtomicList$addAll$lambda_1(elements));
  };
  MutableAtomicList.prototype.addAll = function (elements) {
    return this.doAction_v3a9bd_k$(MutableAtomicList$addAll$lambda_2(elements));
  };
  MutableAtomicList.prototype.remove_8hbkc6_k$ = function (element) {
    return this.doAction_v3a9bd_k$(MutableAtomicList$remove$lambda(element));
  };
  MutableAtomicList.prototype.removeAll_99to5v_k$ = function (elements) {
    return this.doAction_v3a9bd_k$(MutableAtomicList$removeAll$lambda(elements));
  };
  MutableAtomicList.prototype.removeAll = function (elements) {
    return this.doAction_v3a9bd_k$(MutableAtomicList$removeAll$lambda_0(elements));
  };
  MutableAtomicList.prototype.retainAll_j44sd0_k$ = function (elements) {
    return this.doAction_v3a9bd_k$(MutableAtomicList$retainAll$lambda(elements));
  };
  MutableAtomicList.prototype.retainAll = function (elements) {
    return this.doAction_v3a9bd_k$(MutableAtomicList$retainAll$lambda_0(elements));
  };
  MutableAtomicList.$metadata$ = classMeta('MutableAtomicList', [MutableAtomicCollection, MutableList]);
  //region block: post-declaration
  MutableAtomicList.prototype.toArray = toArray;
  MutableAtomicList.prototype.forEach = forEach;
  MutableAtomicList.prototype.forEachWithIndex = forEachWithIndex;
  MutableAtomicList.prototype.map = map;
  MutableAtomicList.prototype.mapWithIndex = mapWithIndex;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = mutableAtomicListOf;
  //endregion
  return _;
}));

//# sourceMappingURL=foundation-runtimes-kotlinx-collections-atomic.js.map