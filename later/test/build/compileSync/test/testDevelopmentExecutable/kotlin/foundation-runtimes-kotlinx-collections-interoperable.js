(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js', './kotlinx-serialization-kotlinx-serialization-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-kotlinx-collections-interoperable'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'foundation-runtimes-kotlinx-collections-interoperable'.");
    }
    if (typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'foundation-runtimes-kotlinx-collections-interoperable'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-js-ir' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-js-ir' is loaded prior to 'foundation-runtimes-kotlinx-collections-interoperable'.");
    }
    root['foundation-runtimes-kotlinx-collections-interoperable'] = factory(typeof this['foundation-runtimes-kotlinx-collections-interoperable'] === 'undefined' ? {} : this['foundation-runtimes-kotlinx-collections-interoperable'], this['kotlin-kotlin-stdlib-js-ir'], this['kotlinx-serialization-kotlinx-serialization-core-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var toMutableList = kotlin_kotlin.$_$.l3;
  var toMutableSet = kotlin_kotlin.$_$.n3;
  var toList = kotlin_kotlin.$_$.i3;
  var objectMeta = kotlin_kotlin.$_$.h5;
  var List = kotlin_kotlin.$_$.d2;
  var interfaceMeta = kotlin_kotlin.$_$.u4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var Unit_getInstance = kotlin_kotlin.$_$.w1;
  var mutableListOf = kotlin_kotlin.$_$.f3;
  var toString = kotlin_kotlin.$_$.j5;
  var hashCode = kotlin_kotlin.$_$.t4;
  var equals = kotlin_kotlin.$_$.p4;
  var classMeta = kotlin_kotlin.$_$.o4;
  var MutableCollection = kotlin_kotlin.$_$.f2;
  var MutableList = kotlin_kotlin.$_$.g2;
  var MutableSet = kotlin_kotlin.$_$.h2;
  var Set = kotlin_kotlin.$_$.i2;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var THROW_CCE = kotlin_kotlin.$_$.b6;
  var Collection = kotlin_kotlin.$_$.y1;
  var isInterface = kotlin_kotlin.$_$.c5;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var fillArrayVal = kotlin_kotlin.$_$.q4;
  var isArray = kotlin_kotlin.$_$.v4;
  var indexOf = kotlin_kotlin.$_$.a3;
  var Iterable = kotlin_kotlin.$_$.a2;
  //endregion
  //region block: pre-declaration
  function forEach(lambda) {
    var tmp0_iterator = this.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      lambda(item);
    }
  }
  function forEachWithIndex(lambda) {
    var tmp0_iterator = this.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      lambda(item, indexOf(this, item));
    }
  }
  function map(transform) {
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = ArrayList_init_$Create$();
      }
      tmp$ret$1 = new MutableListWrapper(tmp$ret$0);
    }
    var l = tmp$ret$1;
    var tmp0_iterator = this.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      l.add_1j60pz_k$(transform(item));
    }
    return l;
  }
  function mapWithIndex(transform) {
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = ArrayList_init_$Create$();
      }
      tmp$ret$1 = new MutableListWrapper(tmp$ret$0);
    }
    var l = tmp$ret$1;
    var tmp0_iterator = this.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      l.add_1j60pz_k$(transform(item, indexOf(this, item)));
    }
    return l;
  }
  function toArray() {
    var tmp = 0;
    var tmp_0 = this.get_size_woubt6_k$();
    var tmp$ret$0;
    {
      tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
    }
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      {
        tmp$ret$1 = null;
      }
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    var array = tmp_1;
    this.forEachWithIndex(Collection$toArray$lambda(array));
    return isArray(array) ? array : THROW_CCE();
  }
  MutableListWrapper.prototype = Object.create(ListWrapper.prototype);
  MutableListWrapper.prototype.constructor = MutableListWrapper;
  ListSerializer_0.prototype = Object.create(CollectionSerializer.prototype);
  ListSerializer_0.prototype.constructor = ListSerializer_0;
  MutableListSerializer.prototype = Object.create(CollectionSerializer.prototype);
  MutableListSerializer.prototype.constructor = MutableListSerializer;
  MutableSetSerializer.prototype = Object.create(CollectionSerializer.prototype);
  MutableSetSerializer.prototype.constructor = MutableSetSerializer;
  SetSerializer.prototype = Object.create(CollectionSerializer.prototype);
  SetSerializer.prototype.constructor = SetSerializer;
  //endregion
  function toInteroperableMutableList(_this__u8e3s4) {
    return new MutableListWrapper(toMutableList(_this__u8e3s4));
  }
  function toInteroperableMutableSet(_this__u8e3s4) {
    return new MutableSetWrapper(toMutableSet(_this__u8e3s4));
  }
  function toInteroperableList(_this__u8e3s4) {
    return new ListWrapper(toList(_this__u8e3s4));
  }
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.serializer = function (elementSerializer) {
    return new ListSerializer_0(elementSerializer);
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function List_0() {
    Companion_getInstance();
  }
  List_0.$metadata$ = interfaceMeta('List', [Collection_0, List]);
  function mutableListOf_0() {
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$();
    }
    return new MutableListWrapper(tmp$ret$0);
  }
  function mutableListOf_1(elements) {
    return new MutableListWrapper(mutableListOf(elements.slice()));
  }
  function _get_list__d9tsa5($this) {
    return $this.list_1;
  }
  function ListWrapper(list) {
    this.list_1 = list;
  }
  ListWrapper.prototype.get_size_woubt6_k$ = function () {
    return this.list_1.get_size_woubt6_k$();
  };
  ListWrapper.prototype.contains_2ehdt1_k$ = function (element) {
    return this.list_1.contains_2ehdt1_k$(element);
  };
  ListWrapper.prototype.containsAll_jr3fla_k$ = function (elements) {
    return this.list_1.containsAll_jr3fla_k$(elements);
  };
  ListWrapper.prototype.get_fkrdnv_k$ = function (index) {
    return this.list_1.get_fkrdnv_k$(index);
  };
  ListWrapper.prototype.indexOf_dcv8dt_k$ = function (element) {
    return this.list_1.indexOf_dcv8dt_k$(element);
  };
  ListWrapper.prototype.isEmpty_y1axqb_k$ = function () {
    return this.list_1.isEmpty_y1axqb_k$();
  };
  ListWrapper.prototype.iterator_jk1svi_k$ = function () {
    return this.list_1.iterator_jk1svi_k$();
  };
  ListWrapper.prototype.lastIndexOf_rzx8t5_k$ = function (element) {
    return this.list_1.lastIndexOf_rzx8t5_k$(element);
  };
  ListWrapper.prototype.listIterator_xjshxw_k$ = function () {
    return this.list_1.listIterator_xjshxw_k$();
  };
  ListWrapper.prototype.listIterator_5hanv9_k$ = function (index) {
    return this.list_1.listIterator_5hanv9_k$(index);
  };
  ListWrapper.prototype.subList_d153ha_k$ = function (fromIndex, toIndex) {
    var tmp$ret$0;
    {
      var tmp0_toInteroperableList = this.list_1.subList_d153ha_k$(fromIndex, toIndex);
      tmp$ret$0 = new ListWrapper(toList(tmp0_toInteroperableList));
    }
    return tmp$ret$0;
  };
  ListWrapper.prototype.toString = function () {
    return toString(this.list_1);
  };
  ListWrapper.prototype.hashCode = function () {
    return hashCode(this.list_1);
  };
  ListWrapper.prototype.equals = function (other) {
    return equals(this.list_1, other);
  };
  ListWrapper.$metadata$ = classMeta('ListWrapper', [List_0, List]);
  function MutableCollection_0() {
  }
  MutableCollection_0.$metadata$ = interfaceMeta('MutableCollection', [MutableCollection, Collection_0]);
  function MutableList_0() {
  }
  MutableList_0.$metadata$ = interfaceMeta('MutableList', [List_0, MutableList, MutableCollection_0]);
  function _get_list__d9tsa5_0($this) {
    return $this.list_2;
  }
  function MutableListWrapper(list) {
    ListWrapper.call(this, list);
    this.list_2 = list;
  }
  MutableListWrapper.prototype.get_size_woubt6_k$ = function () {
    return this.list_2.get_size_woubt6_k$();
  };
  MutableListWrapper.prototype.add_1j60pz_k$ = function (element) {
    return this.list_2.add_1j60pz_k$(element);
  };
  MutableListWrapper.prototype.add_ydlf05_k$ = function (index, element) {
    this.list_2.add_ydlf05_k$(index, element);
  };
  MutableListWrapper.prototype.addAll_ikuqlt_k$ = function (index, elements) {
    return this.list_2.addAll_ikuqlt_k$(index, elements);
  };
  MutableListWrapper.prototype.addAll_oxxjjk_k$ = function (elements) {
    return this.list_2.addAll_oxxjjk_k$(elements);
  };
  MutableListWrapper.prototype.clear_j9y8zo_k$ = function () {
    this.list_2.clear_j9y8zo_k$();
  };
  MutableListWrapper.prototype.contains_2ehdt1_k$ = function (element) {
    return this.list_2.contains_2ehdt1_k$(element);
  };
  MutableListWrapper.prototype.containsAll_jr3fla_k$ = function (elements) {
    return this.list_2.containsAll_jr3fla_k$(elements);
  };
  MutableListWrapper.prototype.get_fkrdnv_k$ = function (index) {
    return this.list_2.get_fkrdnv_k$(index);
  };
  MutableListWrapper.prototype.indexOf_dcv8dt_k$ = function (element) {
    return this.list_2.indexOf_dcv8dt_k$(element);
  };
  MutableListWrapper.prototype.isEmpty_y1axqb_k$ = function () {
    return this.list_2.isEmpty_y1axqb_k$();
  };
  MutableListWrapper.prototype.iterator_jk1svi_k$ = function () {
    return this.list_2.iterator_jk1svi_k$();
  };
  MutableListWrapper.prototype.lastIndexOf_rzx8t5_k$ = function (element) {
    return this.list_2.lastIndexOf_rzx8t5_k$(element);
  };
  MutableListWrapper.prototype.listIterator_xjshxw_k$ = function () {
    return this.list_2.listIterator_xjshxw_k$();
  };
  MutableListWrapper.prototype.listIterator_5hanv9_k$ = function (index) {
    return this.list_2.listIterator_5hanv9_k$(index);
  };
  MutableListWrapper.prototype.remove_8hbkc6_k$ = function (element) {
    return this.list_2.remove_8hbkc6_k$(element);
  };
  MutableListWrapper.prototype.removeAll_99to5v_k$ = function (elements) {
    return this.list_2.removeAll_99to5v_k$(elements);
  };
  MutableListWrapper.prototype.removeAt_qvpkxi_k$ = function (index) {
    return this.list_2.removeAt_qvpkxi_k$(index);
  };
  MutableListWrapper.prototype.retainAll_j44sd0_k$ = function (elements) {
    return this.list_2.retainAll_j44sd0_k$(elements);
  };
  MutableListWrapper.prototype.set_meu351_k$ = function (index, element) {
    return this.list_2.set_meu351_k$(index, element);
  };
  MutableListWrapper.prototype.addAll = function (elements) {
    return this.list_2.addAll_oxxjjk_k$(elements);
  };
  MutableListWrapper.prototype.removeAll = function (elements) {
    return this.list_2.removeAll_99to5v_k$(elements);
  };
  MutableListWrapper.prototype.retainAll = function (elements) {
    return this.list_2.retainAll_j44sd0_k$(elements);
  };
  MutableListWrapper.prototype.addAllAtIndex = function (index, elements) {
    return this.list_2.addAll_ikuqlt_k$(index, elements);
  };
  MutableListWrapper.prototype.containsAll = function (elements) {
    return this.list_2.containsAll_jr3fla_k$(elements);
  };
  MutableListWrapper.prototype.subList_d153ha_k$ = function (fromIndex, toIndex) {
    var tmp$ret$0;
    {
      var tmp0_toInteroperableMutableList = this.list_2.subList_d153ha_k$(fromIndex, toIndex);
      tmp$ret$0 = new MutableListWrapper(toMutableList(tmp0_toInteroperableMutableList));
    }
    return tmp$ret$0;
  };
  MutableListWrapper.$metadata$ = classMeta('MutableListWrapper', [MutableList_0, MutableList], undefined, undefined, undefined, ListWrapper.prototype);
  function MutableSet_0() {
  }
  MutableSet_0.$metadata$ = interfaceMeta('MutableSet', [Set_0, MutableSet]);
  function _get_set__e6gl0v($this) {
    return $this.set_1;
  }
  function MutableSetWrapper(set) {
    this.set_1 = set;
  }
  MutableSetWrapper.prototype.get_size_woubt6_k$ = function () {
    return this.set_1.get_size_woubt6_k$();
  };
  MutableSetWrapper.prototype.add_1j60pz_k$ = function (element) {
    return this.set_1.add_1j60pz_k$(element);
  };
  MutableSetWrapper.prototype.addAll_oxxjjk_k$ = function (elements) {
    return this.set_1.addAll_oxxjjk_k$(elements);
  };
  MutableSetWrapper.prototype.clear_j9y8zo_k$ = function () {
    this.set_1.clear_j9y8zo_k$();
  };
  MutableSetWrapper.prototype.contains_2ehdt1_k$ = function (element) {
    return this.set_1.contains_2ehdt1_k$(element);
  };
  MutableSetWrapper.prototype.containsAll_jr3fla_k$ = function (elements) {
    return this.set_1.containsAll_jr3fla_k$(elements);
  };
  MutableSetWrapper.prototype.isEmpty_y1axqb_k$ = function () {
    return this.set_1.isEmpty_y1axqb_k$();
  };
  MutableSetWrapper.prototype.iterator_jk1svi_k$ = function () {
    return this.set_1.iterator_jk1svi_k$();
  };
  MutableSetWrapper.prototype.remove_8hbkc6_k$ = function (element) {
    return this.set_1.remove_8hbkc6_k$(element);
  };
  MutableSetWrapper.prototype.removeAll_99to5v_k$ = function (elements) {
    return this.set_1.removeAll_99to5v_k$(elements);
  };
  MutableSetWrapper.prototype.retainAll_j44sd0_k$ = function (elements) {
    return this.set_1.retainAll_j44sd0_k$(elements);
  };
  MutableSetWrapper.prototype.toString = function () {
    return toString(this.set_1);
  };
  MutableSetWrapper.prototype.hashCode = function () {
    return hashCode(this.set_1);
  };
  MutableSetWrapper.prototype.equals = function (other) {
    return equals(this.set_1, other);
  };
  MutableSetWrapper.$metadata$ = classMeta('MutableSetWrapper', [MutableSet_0, MutableSet]);
  function Set_0() {
  }
  Set_0.$metadata$ = interfaceMeta('Set', [Collection_0, Set]);
  function CollectionSerializer(elementSerializer) {
    this.elementSerializer_1 = elementSerializer;
    this.descriptor_1 = this.elementSerializer_1.get_descriptor_wjt6a0_k$();
  }
  CollectionSerializer.prototype.get_elementSerializer_sc1d6t_k$ = function () {
    return this.elementSerializer_1;
  };
  CollectionSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  CollectionSerializer.prototype.serialize_seisag_k$ = function (encoder, value) {
    encoder.encodeSerializableValue_bps9ot_k$(ListSerializer(this.elementSerializer_1), toList(value));
  };
  CollectionSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_seisag_k$(encoder, (!(value == null) ? isInterface(value, Collection) : false) ? value : THROW_CCE());
  };
  CollectionSerializer.$metadata$ = classMeta('CollectionSerializer', [KSerializer]);
  function ListSerializer_0(elementSerializer) {
    CollectionSerializer.call(this, elementSerializer);
  }
  ListSerializer_0.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return new ListWrapper(decoder.decodeSerializableValue_xpp80o_k$(ListSerializer(this.get_elementSerializer_sc1d6t_k$())));
  };
  ListSerializer_0.$metadata$ = classMeta('ListSerializer', [KSerializer], undefined, undefined, undefined, CollectionSerializer.prototype);
  function MutableListSerializer(elementSerializer) {
    CollectionSerializer.call(this, elementSerializer);
  }
  MutableListSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp$ret$0;
    {
      var tmp0_toInteroperableMutableList = decoder.decodeSerializableValue_xpp80o_k$(ListSerializer(this.get_elementSerializer_sc1d6t_k$()));
      tmp$ret$0 = new MutableListWrapper(toMutableList(tmp0_toInteroperableMutableList));
    }
    return tmp$ret$0;
  };
  MutableListSerializer.$metadata$ = classMeta('MutableListSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function MutableSetSerializer(elementSerializer) {
    CollectionSerializer.call(this, elementSerializer);
  }
  MutableSetSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp$ret$0;
    {
      var tmp0_toInteroperableMutableSet = decoder.decodeSerializableValue_xpp80o_k$(new SetSerializer(this.get_elementSerializer_sc1d6t_k$()));
      tmp$ret$0 = new MutableSetWrapper(toMutableSet(tmp0_toInteroperableMutableSet));
    }
    return tmp$ret$0;
  };
  MutableSetSerializer.$metadata$ = classMeta('MutableSetSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function SetSerializer(elementSerializer) {
    CollectionSerializer.call(this, elementSerializer);
  }
  SetSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeSerializableValue_xpp80o_k$(new SetSerializer(this.get_elementSerializer_sc1d6t_k$()));
  };
  SetSerializer.$metadata$ = classMeta('SetSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function Collection$toArray$lambda($array) {
    return function (e, index) {
      $array[index] = e;
      return Unit_getInstance();
    };
  }
  function Collection_0() {
  }
  Collection_0.$metadata$ = interfaceMeta('Collection', [Iterable_0, Collection]);
  function Iterable_0() {
  }
  Iterable_0.$metadata$ = interfaceMeta('Iterable', [Iterable]);
  //region block: post-declaration
  ListWrapper.prototype.toArray = toArray;
  ListWrapper.prototype.forEach = forEach;
  ListWrapper.prototype.forEachWithIndex = forEachWithIndex;
  ListWrapper.prototype.map = map;
  ListWrapper.prototype.mapWithIndex = mapWithIndex;
  MutableListWrapper.prototype.toArray = toArray;
  MutableListWrapper.prototype.forEach = forEach;
  MutableListWrapper.prototype.forEachWithIndex = forEachWithIndex;
  MutableListWrapper.prototype.map = map;
  MutableListWrapper.prototype.mapWithIndex = mapWithIndex;
  MutableSetWrapper.prototype.toArray = toArray;
  MutableSetWrapper.prototype.forEach = forEach;
  MutableSetWrapper.prototype.forEachWithIndex = forEachWithIndex;
  MutableSetWrapper.prototype.map = map;
  MutableSetWrapper.prototype.mapWithIndex = mapWithIndex;
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $kotlinx = _.kotlinx || (_.kotlinx = {});
    var $kotlinx$collections = $kotlinx.collections || ($kotlinx.collections = {});
    var $kotlinx$collections$interoperable = $kotlinx$collections.interoperable || ($kotlinx$collections.interoperable = {});
    var $kotlinx = _.kotlinx || (_.kotlinx = {});
    var $kotlinx$collections = $kotlinx.collections || ($kotlinx.collections = {});
    var $kotlinx$collections$interoperable = $kotlinx$collections.interoperable || ($kotlinx$collections.interoperable = {});
    var $kotlinx = _.kotlinx || (_.kotlinx = {});
    var $kotlinx$collections = $kotlinx.collections || ($kotlinx.collections = {});
    var $kotlinx$collections$interoperable = $kotlinx$collections.interoperable || ($kotlinx$collections.interoperable = {});
    var $kotlinx = _.kotlinx || (_.kotlinx = {});
    var $kotlinx$collections = $kotlinx.collections || ($kotlinx.collections = {});
    var $kotlinx$collections$interoperable = $kotlinx$collections.interoperable || ($kotlinx$collections.interoperable = {});
    var $kotlinx = _.kotlinx || (_.kotlinx = {});
    var $kotlinx$collections = $kotlinx.collections || ($kotlinx.collections = {});
    var $kotlinx$collections$interoperable = $kotlinx$collections.interoperable || ($kotlinx$collections.interoperable = {});
    var $kotlinx = _.kotlinx || (_.kotlinx = {});
    var $kotlinx$collections = $kotlinx.collections || ($kotlinx.collections = {});
    var $kotlinx$collections$interoperable = $kotlinx$collections.interoperable || ($kotlinx$collections.interoperable = {});
    var $kotlinx = _.kotlinx || (_.kotlinx = {});
    var $kotlinx$collections = $kotlinx.collections || ($kotlinx.collections = {});
    var $kotlinx$collections$interoperable = $kotlinx$collections.interoperable || ($kotlinx$collections.interoperable = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = toArray;
  _.$_$.b = Collection_0;
  _.$_$.c = forEachWithIndex;
  _.$_$.d = forEach;
  _.$_$.e = mapWithIndex;
  _.$_$.f = map;
  _.$_$.g = ListWrapper;
  _.$_$.h = MutableCollection_0;
  _.$_$.i = MutableListWrapper;
  _.$_$.j = MutableList_0;
  //endregion
  return _;
}));

//# sourceMappingURL=foundation-runtimes-kotlinx-collections-interoperable.js.map