(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core-js-ir'.");
    }
    root['kotlinx-serialization-kotlinx-serialization-core-js-ir'] = factory(typeof this['kotlinx-serialization-kotlinx-serialization-core-js-ir'] === 'undefined' ? {} : this['kotlinx-serialization-kotlinx-serialization-core-js-ir'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var THROW_CCE = kotlin_kotlin.$_$.c6;
  var Annotation = kotlin_kotlin.$_$.w5;
  var classMeta = kotlin_kotlin.$_$.p4;
  var getKClass = kotlin_kotlin.$_$.b;
  var getStringHashCode = kotlin_kotlin.$_$.t4;
  var interfaceMeta = kotlin_kotlin.$_$.v4;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.v;
  var captureStack = kotlin_kotlin.$_$.n4;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.w;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.y;
  var IllegalArgumentException_init_$Init$_2 = kotlin_kotlin.$_$.u;
  var IllegalArgumentException = kotlin_kotlin.$_$.z5;
  var emptyList = kotlin_kotlin.$_$.x2;
  var Unit_getInstance = kotlin_kotlin.$_$.w1;
  var Iterator = kotlin_kotlin.$_$.b2;
  var Iterable = kotlin_kotlin.$_$.a2;
  var isBlank = kotlin_kotlin.$_$.t5;
  var toString = kotlin_kotlin.$_$.k5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.x;
  var equals = kotlin_kotlin.$_$.q4;
  var toList = kotlin_kotlin.$_$.k3;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.k;
  var toHashSet = kotlin_kotlin.$_$.i3;
  var copyToArray = kotlin_kotlin.$_$.w2;
  var toBooleanArray = kotlin_kotlin.$_$.h3;
  var withIndex = kotlin_kotlin.$_$.p3;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.l2;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e;
  var to = kotlin_kotlin.$_$.n6;
  var toMap = kotlin_kotlin.$_$.l3;
  var lazy = kotlin_kotlin.$_$.j6;
  var contentEquals = kotlin_kotlin.$_$.m2;
  var until = kotlin_kotlin.$_$.o5;
  var joinToString$default = kotlin_kotlin.$_$.d;
  var KProperty1 = kotlin_kotlin.$_$.q5;
  var getPropertyCallableRef = kotlin_kotlin.$_$.s4;
  var objectMeta = kotlin_kotlin.$_$.i5;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.h6;
  var isInterface = kotlin_kotlin.$_$.d5;
  var toIntOrNull = kotlin_kotlin.$_$.u5;
  var hashCode = kotlin_kotlin.$_$.u4;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.z;
  var isObject = kotlin_kotlin.$_$.f5;
  var isArray = kotlin_kotlin.$_$.w4;
  var arrayIterator = kotlin_kotlin.$_$.l4;
  var ArrayList = kotlin_kotlin.$_$.x1;
  var asList = kotlin_kotlin.$_$.k2;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.g;
  var Collection = kotlin_kotlin.$_$.y1;
  var step = kotlin_kotlin.$_$.n5;
  var getValue = kotlin_kotlin.$_$.z2;
  var Map = kotlin_kotlin.$_$.e2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var LinkedHashMap = kotlin_kotlin.$_$.c2;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.h;
  var HashMap = kotlin_kotlin.$_$.z1;
  var HashMap_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var List = kotlin_kotlin.$_$.d2;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.c;
  var lazy_0 = kotlin_kotlin.$_$.i6;
  var contentHashCode = kotlin_kotlin.$_$.n2;
  var Companion_getInstance = kotlin_kotlin.$_$.t1;
  var isCharArray = kotlin_kotlin.$_$.z4;
  var charArray = kotlin_kotlin.$_$.o4;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.n1;
  var isDoubleArray = kotlin_kotlin.$_$.a5;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.o1;
  var isFloatArray = kotlin_kotlin.$_$.b5;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.u1;
  var isLongArray = kotlin_kotlin.$_$.e5;
  var longArray = kotlin_kotlin.$_$.h5;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.p1;
  var isIntArray = kotlin_kotlin.$_$.c5;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.q1;
  var isShortArray = kotlin_kotlin.$_$.g5;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.m1;
  var isByteArray = kotlin_kotlin.$_$.y4;
  var BooleanCompanionObject_getInstance = kotlin_kotlin.$_$.l1;
  var isBooleanArray = kotlin_kotlin.$_$.x4;
  var booleanArray = kotlin_kotlin.$_$.m4;
  var coerceAtLeast = kotlin_kotlin.$_$.l5;
  var copyOf = kotlin_kotlin.$_$.r2;
  var copyOf_0 = kotlin_kotlin.$_$.t2;
  var copyOf_1 = kotlin_kotlin.$_$.u2;
  var copyOf_2 = kotlin_kotlin.$_$.p2;
  var copyOf_3 = kotlin_kotlin.$_$.v2;
  var copyOf_4 = kotlin_kotlin.$_$.o2;
  var copyOf_5 = kotlin_kotlin.$_$.s2;
  var copyOf_6 = kotlin_kotlin.$_$.q2;
  var Char = kotlin_kotlin.$_$.x5;
  var Long = kotlin_kotlin.$_$.a6;
  var Unit = kotlin_kotlin.$_$.d6;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.s1;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.r1;
  var mapOf = kotlin_kotlin.$_$.e3;
  var KClass = kotlin_kotlin.$_$.p5;
  var emptyMap = kotlin_kotlin.$_$.y2;
  var get_indices = kotlin_kotlin.$_$.c3;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.b1;
  var get_indices_0 = kotlin_kotlin.$_$.b3;
  //endregion
  //region block: pre-declaration
  SerializationException.prototype = Object.create(IllegalArgumentException.prototype);
  SerializationException.prototype.constructor = SerializationException;
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  ENUM.prototype = Object.create(SerialKind.prototype);
  ENUM.prototype.constructor = ENUM;
  CONTEXTUAL.prototype = Object.create(SerialKind.prototype);
  CONTEXTUAL.prototype.constructor = CONTEXTUAL;
  PrimitiveKind.prototype = Object.create(SerialKind.prototype);
  PrimitiveKind.prototype.constructor = PrimitiveKind;
  BOOLEAN.prototype = Object.create(PrimitiveKind.prototype);
  BOOLEAN.prototype.constructor = BOOLEAN;
  BYTE.prototype = Object.create(PrimitiveKind.prototype);
  BYTE.prototype.constructor = BYTE;
  CHAR.prototype = Object.create(PrimitiveKind.prototype);
  CHAR.prototype.constructor = CHAR;
  SHORT.prototype = Object.create(PrimitiveKind.prototype);
  SHORT.prototype.constructor = SHORT;
  INT.prototype = Object.create(PrimitiveKind.prototype);
  INT.prototype.constructor = INT;
  LONG.prototype = Object.create(PrimitiveKind.prototype);
  LONG.prototype.constructor = LONG;
  FLOAT.prototype = Object.create(PrimitiveKind.prototype);
  FLOAT.prototype.constructor = FLOAT;
  DOUBLE.prototype = Object.create(PrimitiveKind.prototype);
  DOUBLE.prototype.constructor = DOUBLE;
  STRING.prototype = Object.create(PrimitiveKind.prototype);
  STRING.prototype.constructor = STRING;
  StructureKind.prototype = Object.create(SerialKind.prototype);
  StructureKind.prototype.constructor = StructureKind;
  CLASS.prototype = Object.create(StructureKind.prototype);
  CLASS.prototype.constructor = CLASS;
  LIST.prototype = Object.create(StructureKind.prototype);
  LIST.prototype.constructor = LIST;
  MAP.prototype = Object.create(StructureKind.prototype);
  MAP.prototype.constructor = MAP;
  OBJECT.prototype = Object.create(StructureKind.prototype);
  OBJECT.prototype.constructor = OBJECT;
  PolymorphicKind.prototype = Object.create(SerialKind.prototype);
  PolymorphicKind.prototype.constructor = PolymorphicKind;
  SEALED.prototype = Object.create(PolymorphicKind.prototype);
  SEALED.prototype.constructor = SEALED;
  OPEN.prototype = Object.create(PolymorphicKind.prototype);
  OPEN.prototype.constructor = OPEN;
  function decodeSerializableValue(deserializer) {
    return deserializer.deserialize_2t41fm_k$(this);
  }
  function decodeNullableSerializableValue(deserializer) {
    var isNullabilitySupported = deserializer.get_descriptor_wjt6a0_k$().get_isNullable_67sy7o_k$();
    return (isNullabilitySupported ? true : this.decodeNotNullMark_us4ba1_k$()) ? this.decodeSerializableValue_xpp80o_k$(deserializer) : this.decodeNull_jzrmuj_k$();
  }
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      previousValue = null;
    return $handler == null ? this.decodeSerializableElement_5lsbxj_k$(descriptor, index, deserializer, previousValue) : $handler(descriptor, index, deserializer, previousValue);
  }
  function decodeNullableSerializableElement$default(descriptor, index, deserializer, previousValue, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      previousValue = null;
    return $handler == null ? this.decodeNullableSerializableElement_ri3t5d_k$(descriptor, index, deserializer, previousValue) : $handler(descriptor, index, deserializer, previousValue);
  }
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.beginStructure_dv3yt3_k$(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.serialize_32qylj_k$(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.get_descriptor_wjt6a0_k$().get_isNullable_67sy7o_k$();
    if (isNullabilitySupported) {
      return this.encodeSerializableValue_bps9ot_k$(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.encodeNull_ek2hec_k$();
    } else {
      this.encodeNotNullMark_40lhgg_k$();
      this.encodeSerializableValue_bps9ot_k$(serializer, value);
    }
  }
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  PrimitiveArrayDescriptor.prototype = Object.create(ListLikeDescriptor.prototype);
  PrimitiveArrayDescriptor.prototype.constructor = PrimitiveArrayDescriptor;
  ArrayClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayClassDesc.prototype.constructor = ArrayClassDesc;
  LinkedHashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  LinkedHashMapClassDesc.prototype.constructor = LinkedHashMapClassDesc;
  HashMapClassDesc.prototype = Object.create(MapLikeDescriptor.prototype);
  HashMapClassDesc.prototype.constructor = HashMapClassDesc;
  ArrayListClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  ArrayListClassDesc.prototype.constructor = ArrayListClassDesc;
  LinkedHashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  LinkedHashSetClassDesc.prototype.constructor = LinkedHashSetClassDesc;
  HashSetClassDesc.prototype = Object.create(ListLikeDescriptor.prototype);
  HashSetClassDesc.prototype.constructor = HashSetClassDesc;
  CollectionLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  CollectionLikeSerializer.prototype.constructor = CollectionLikeSerializer;
  PrimitiveArraySerializer.prototype = Object.create(CollectionLikeSerializer.prototype);
  PrimitiveArraySerializer.prototype.constructor = PrimitiveArraySerializer;
  ReferenceArraySerializer.prototype = Object.create(CollectionLikeSerializer.prototype);
  ReferenceArraySerializer.prototype.constructor = ReferenceArraySerializer;
  CollectionSerializer.prototype = Object.create(CollectionLikeSerializer.prototype);
  CollectionSerializer.prototype.constructor = CollectionSerializer;
  MapLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  MapLikeSerializer.prototype.constructor = MapLikeSerializer;
  LinkedHashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  LinkedHashMapSerializer.prototype.constructor = LinkedHashMapSerializer;
  HashMapSerializer.prototype = Object.create(MapLikeSerializer.prototype);
  HashMapSerializer.prototype.constructor = HashMapSerializer;
  ArrayListSerializer.prototype = Object.create(CollectionSerializer.prototype);
  ArrayListSerializer.prototype.constructor = ArrayListSerializer;
  CharArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  CharArraySerializer_0.prototype.constructor = CharArraySerializer_0;
  DoubleArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  DoubleArraySerializer_0.prototype.constructor = DoubleArraySerializer_0;
  FloatArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  FloatArraySerializer_0.prototype.constructor = FloatArraySerializer_0;
  LongArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  LongArraySerializer_0.prototype.constructor = LongArraySerializer_0;
  IntArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  IntArraySerializer_0.prototype.constructor = IntArraySerializer_0;
  ShortArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ShortArraySerializer_0.prototype.constructor = ShortArraySerializer_0;
  ByteArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ByteArraySerializer_0.prototype.constructor = ByteArraySerializer_0;
  BooleanArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  BooleanArraySerializer_0.prototype.constructor = BooleanArraySerializer_0;
  CharArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  CharArrayBuilder.prototype.constructor = CharArrayBuilder;
  DoubleArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  DoubleArrayBuilder.prototype.constructor = DoubleArrayBuilder;
  FloatArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  FloatArrayBuilder.prototype.constructor = FloatArrayBuilder;
  LongArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  LongArrayBuilder.prototype.constructor = LongArrayBuilder;
  IntArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  IntArrayBuilder.prototype.constructor = IntArrayBuilder;
  ShortArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ShortArrayBuilder.prototype.constructor = ShortArrayBuilder;
  ByteArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  ByteArrayBuilder.prototype.constructor = ByteArrayBuilder;
  BooleanArrayBuilder.prototype = Object.create(PrimitiveArrayBuilder.prototype);
  BooleanArrayBuilder.prototype.constructor = BooleanArrayBuilder;
  SerialModuleImpl.prototype = Object.create(SerializersModule.prototype);
  SerialModuleImpl.prototype.constructor = SerialModuleImpl;
  Argless.prototype = Object.create(ContextualProvider.prototype);
  Argless.prototype.constructor = Argless;
  WithTypeArguments.prototype = Object.create(ContextualProvider.prototype);
  WithTypeArguments.prototype.constructor = WithTypeArguments;
  function contextual(kClass, serializer) {
    return this.contextual_e1eobl_k$(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  function polymorphicDefault(baseClass, defaultDeserializerProvider) {
    this.polymorphicDefaultDeserializer_1n0ayq_k$(baseClass, defaultDeserializerProvider);
  }
  //endregion
  function ExperimentalSerializationApi() {
  }
  ExperimentalSerializationApi.prototype.equals = function (other) {
    if (!(other instanceof ExperimentalSerializationApi))
      return false;
    var tmp0_other_with_cast = other instanceof ExperimentalSerializationApi ? other : THROW_CCE();
    return true;
  };
  ExperimentalSerializationApi.prototype.hashCode = function () {
    return 0;
  };
  ExperimentalSerializationApi.prototype.toString = function () {
    return '@kotlinx.serialization.ExperimentalSerializationApi()';
  };
  ExperimentalSerializationApi.$metadata$ = classMeta('ExperimentalSerializationApi', [Annotation]);
  function InternalSerializationApi() {
  }
  InternalSerializationApi.prototype.equals = function (other) {
    if (!(other instanceof InternalSerializationApi))
      return false;
    var tmp0_other_with_cast = other instanceof InternalSerializationApi ? other : THROW_CCE();
    return true;
  };
  InternalSerializationApi.prototype.hashCode = function () {
    return 0;
  };
  InternalSerializationApi.prototype.toString = function () {
    return '@kotlinx.serialization.InternalSerializationApi()';
  };
  InternalSerializationApi.$metadata$ = classMeta('InternalSerializationApi', [Annotation]);
  function Serializable_init_$Init$(with_0, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      with_0 = getKClass(KSerializer);
    Serializable.call($this, with_0);
    return $this;
  }
  function Serializable_init_$Create$(with_0, $mask0, $marker) {
    return Serializable_init_$Init$(with_0, $mask0, $marker, Object.create(Serializable.prototype));
  }
  function Serializable(with_0) {
    this.with_1 = with_0;
  }
  Serializable.prototype.get_with_wowvm7_k$ = function () {
    return this.with_1;
  };
  Serializable.prototype.equals = function (other) {
    if (!(other instanceof Serializable))
      return false;
    var tmp0_other_with_cast = other instanceof Serializable ? other : THROW_CCE();
    if (!this.with_1.equals(tmp0_other_with_cast.with_1))
      return false;
    return true;
  };
  Serializable.prototype.hashCode = function () {
    return imul(getStringHashCode('with'), 127) ^ this.with_1.hashCode();
  };
  Serializable.prototype.toString = function () {
    return '@kotlinx.serialization.Serializable(with=' + this.with_1 + ')';
  };
  Serializable.$metadata$ = classMeta('Serializable', [Annotation]);
  function KSerializer() {
  }
  KSerializer.$metadata$ = interfaceMeta('KSerializer', [SerializationStrategy, DeserializationStrategy]);
  function SerializationStrategy() {
  }
  SerializationStrategy.$metadata$ = interfaceMeta('SerializationStrategy');
  function DeserializationStrategy() {
  }
  DeserializationStrategy.$metadata$ = interfaceMeta('DeserializationStrategy');
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(Object.create(SerializationException.prototype));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, Object.create(SerializationException.prototype));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_1(message, cause) {
    var tmp = SerializationException_init_$Init$_1(message, cause, Object.create(SerializationException.prototype));
    captureStack(tmp, SerializationException_init_$Create$_1);
    return tmp;
  }
  function SerializationException_init_$Init$_2(cause, $this) {
    IllegalArgumentException_init_$Init$_2(cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_2(cause) {
    var tmp = SerializationException_init_$Init$_2(cause, Object.create(SerializationException.prototype));
    captureStack(tmp, SerializationException_init_$Create$_2);
    return tmp;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  SerializationException.$metadata$ = classMeta('SerializationException', undefined, undefined, undefined, undefined, IllegalArgumentException.prototype);
  function serializer(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_0(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_1(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function SerialDescriptor() {
  }
  SerialDescriptor.$metadata$ = interfaceMeta('SerialDescriptor');
  function get_elementDescriptors(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = new _no_name_provided__qut3iv(_this__u8e3s4);
    }
    return tmp$ret$0;
  }
  function _set_elementsLeft__kqd1tz($this, _set____db54di) {
    $this.elementsLeft_1 = _set____db54di;
  }
  function _get_elementsLeft__56mb9v($this) {
    return $this.elementsLeft_1;
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.$this_elementDescriptors_1 = $this_elementDescriptors;
    this.elementsLeft_1 = $this_elementDescriptors.get_elementsCount_288r0x_k$();
  }
  elementDescriptors$1$1.prototype.hasNext_bitz1p_k$ = function () {
    return this.elementsLeft_1 > 0;
  };
  elementDescriptors$1$1.prototype.next_20eer_k$ = function () {
    var tmp = this.$this_elementDescriptors_1.get_elementsCount_288r0x_k$();
    var tmp0_this = this;
    var tmp1 = tmp0_this.elementsLeft_1;
    tmp0_this.elementsLeft_1 = tmp1 - 1 | 0;
    return this.$this_elementDescriptors_1.getElementDescriptor_sqz94k_k$(tmp - tmp1 | 0);
  };
  elementDescriptors$1$1.$metadata$ = classMeta(undefined, [Iterator]);
  function _no_name_provided__qut3iv($this_elementDescriptors) {
    this.$this_elementDescriptors_1 = $this_elementDescriptors;
  }
  _no_name_provided__qut3iv.prototype.iterator_jk1svi_k$ = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = new elementDescriptors$1$1(this.$this_elementDescriptors_1);
    }
    return tmp$ret$0;
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [Iterable]);
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = !isBlank(serialName);
      }
      var tmp0_require = tmp$ret$0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$1;
        {
          tmp$ret$1 = 'Blank serial names are prohibited';
        }
        var message = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    {
      var tmp1_require = !equals(kind, CLASS_getInstance());
      {
      }
      if (!tmp1_require) {
        var tmp$ret$2;
        {
          tmp$ret$2 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
        }
        var message_0 = tmp$ret$2;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.elementNames_1.get_size_woubt6_k$(), toList(typeParameters), sdBuilder);
  }
  function buildSerialDescriptor$default(serialName, kind, typeParameters, builder, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      builder = buildSerialDescriptor$lambda();
    }
    return buildSerialDescriptor(serialName, kind, typeParameters, builder);
  }
  function _get_uniqueNames__t2j14q($this) {
    return $this.uniqueNames_1;
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.serialName_1 = serialName;
    this.isNullable_1 = false;
    this.annotations_1 = emptyList();
    this.elementNames_1 = ArrayList_init_$Create$();
    this.uniqueNames_1 = HashSet_init_$Create$();
    this.elementDescriptors_1 = ArrayList_init_$Create$();
    this.elementAnnotations_1 = ArrayList_init_$Create$();
    this.elementOptionality_1 = ArrayList_init_$Create$();
  }
  ClassSerialDescriptorBuilder.prototype.get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  ClassSerialDescriptorBuilder.prototype.set_isNullable_o72f9b_k$ = function (_set____db54di) {
    this.isNullable_1 = _set____db54di;
  };
  ClassSerialDescriptorBuilder.prototype.get_isNullable_67sy7o_k$ = function () {
    return this.isNullable_1;
  };
  ClassSerialDescriptorBuilder.prototype.set_annotations_vlf62n_k$ = function (_set____db54di) {
    this.annotations_1 = _set____db54di;
  };
  ClassSerialDescriptorBuilder.prototype.get_annotations_20dirp_k$ = function () {
    return this.annotations_1;
  };
  ClassSerialDescriptorBuilder.prototype.get_elementNames_57dki3_k$ = function () {
    return this.elementNames_1;
  };
  ClassSerialDescriptorBuilder.prototype.get_elementDescriptors_jxewnl_k$ = function () {
    return this.elementDescriptors_1;
  };
  ClassSerialDescriptorBuilder.prototype.get_elementAnnotations_wjl0r5_k$ = function () {
    return this.elementAnnotations_1;
  };
  ClassSerialDescriptorBuilder.prototype.get_elementOptionality_sheked_k$ = function () {
    return this.elementOptionality_1;
  };
  ClassSerialDescriptorBuilder.prototype.element_t1rubu_k$ = function (elementName, descriptor, annotations, isOptional) {
    {
      var tmp0_require = this.uniqueNames_1.add_1j60pz_k$(elementName);
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = "Element with name '" + elementName + "' is already registered";
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var tmp0_this = this;
    {
      var tmp1_plusAssign = tmp0_this.elementNames_1;
      tmp1_plusAssign.add_1j60pz_k$(elementName);
    }
    var tmp1_this = this;
    {
      var tmp2_plusAssign = tmp1_this.elementDescriptors_1;
      tmp2_plusAssign.add_1j60pz_k$(descriptor);
    }
    var tmp2_this = this;
    {
      var tmp3_plusAssign = tmp2_this.elementAnnotations_1;
      tmp3_plusAssign.add_1j60pz_k$(annotations);
    }
    var tmp3_this = this;
    {
      var tmp4_plusAssign = tmp3_this.elementOptionality_1;
      tmp4_plusAssign.add_1j60pz_k$(isOptional);
    }
  };
  ClassSerialDescriptorBuilder.prototype.element$default_m7h690_k$ = function (elementName, descriptor, annotations, isOptional, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      annotations = emptyList();
    if (!(($mask0 & 8) === 0))
      isOptional = false;
    return this.element_t1rubu_k$(elementName, descriptor, annotations, isOptional);
  };
  ClassSerialDescriptorBuilder.$metadata$ = classMeta('ClassSerialDescriptorBuilder');
  function _get_elementNames__mdlk9t($this) {
    return $this.elementNames_1;
  }
  function _get_elementDescriptors__y23q9p($this) {
    return $this.elementDescriptors_1;
  }
  function _get_elementAnnotations__1vliwz($this) {
    return $this.elementAnnotations_1;
  }
  function _get_elementOptionality__ruzsih($this) {
    return $this.elementOptionality_1;
  }
  function _get_name2Index__3zzra8($this) {
    return $this.name2Index_1;
  }
  function _get_typeParametersDescriptors__7g731r($this) {
    return $this.typeParametersDescriptors_1;
  }
  function _get__hashCode__tgwhef($this) {
    var tmp$ret$0;
    {
      var tmp0_getValue = _hashCode$factory();
      tmp$ret$0 = $this._hashCode$delegate_1.get_value_j01efc_k$();
    }
    return tmp$ret$0;
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.typeParametersDescriptors_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.getElementName_ykpypc_k$(it) + ': ' + this$0.getElementDescriptor_sqz94k_k$(it).get_serialName_u2rqhk_k$();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.serialName_1 = serialName;
    this.kind_1 = kind;
    this.elementsCount_1 = elementsCount;
    this.annotations_1 = builder.annotations_1;
    this.serialNames_1 = toHashSet(builder.elementNames_1);
    var tmp = this;
    var tmp$ret$0;
    {
      var tmp0_toTypedArray = builder.elementNames_1;
      tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    }
    tmp.elementNames_1 = tmp$ret$0;
    this.elementDescriptors_1 = compactArray(builder.elementDescriptors_1);
    var tmp_0 = this;
    var tmp$ret$1;
    {
      var tmp0_toTypedArray_0 = builder.elementAnnotations_1;
      tmp$ret$1 = copyToArray(tmp0_toTypedArray_0);
    }
    tmp_0.elementAnnotations_1 = tmp$ret$1;
    this.elementOptionality_1 = toBooleanArray(builder.elementOptionality_1);
    var tmp_1 = this;
    var tmp$ret$4;
    {
      var tmp0_map = withIndex(this.elementNames_1);
      var tmp$ret$3;
      {
        var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
        var tmp0_iterator = tmp0_map.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator.next_20eer_k$();
          var tmp$ret$2;
          {
            tmp$ret$2 = to(item.value_1, item.index_1);
          }
          tmp0_mapTo.add_1j60pz_k$(tmp$ret$2);
        }
        tmp$ret$3 = tmp0_mapTo;
      }
      tmp$ret$4 = tmp$ret$3;
    }
    tmp_1.name2Index_1 = toMap(tmp$ret$4);
    this.typeParametersDescriptors_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2._hashCode$delegate_1 = lazy(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  SerialDescriptorImpl.prototype.get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  SerialDescriptorImpl.prototype.get_kind_wop7ml_k$ = function () {
    return this.kind_1;
  };
  SerialDescriptorImpl.prototype.get_elementsCount_288r0x_k$ = function () {
    return this.elementsCount_1;
  };
  SerialDescriptorImpl.prototype.get_annotations_20dirp_k$ = function () {
    return this.annotations_1;
  };
  SerialDescriptorImpl.prototype.get_serialNames_8zf3cl_k$ = function () {
    return this.serialNames_1;
  };
  SerialDescriptorImpl.prototype.getElementName_ykpypc_k$ = function (index) {
    return getChecked(this.elementNames_1, index);
  };
  SerialDescriptorImpl.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    var tmp0_elvis_lhs = this.name2Index_1.get_1mhr4y_k$(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      Companion_getInstance_1();
      tmp = -3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  SerialDescriptorImpl.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    return getChecked(this.elementAnnotations_1, index);
  };
  SerialDescriptorImpl.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    return getChecked(this.elementDescriptors_1, index);
  };
  SerialDescriptorImpl.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    return getChecked_0(this.elementOptionality_1, index);
  };
  SerialDescriptorImpl.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.get_serialName_u2rqhk_k$() === other.get_serialName_u2rqhk_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      {
        var tmp0__anonymous__q1qw7t = other;
        tmp$ret$1 = contentEquals(this.typeParametersDescriptors_1, tmp0__anonymous__q1qw7t.typeParametersDescriptors_1);
      }
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.get_elementsCount_288r0x_k$() === other.get_elementsCount_288r0x_k$())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.get_elementsCount_288r0x_k$();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.getElementDescriptor_sqz94k_k$(index).get_serialName_u2rqhk_k$() === other.getElementDescriptor_sqz94k_k$(index).get_serialName_u2rqhk_k$())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.getElementDescriptor_sqz94k_k$(index).get_kind_wop7ml_k$(), other.getElementDescriptor_sqz94k_k$(index).get_kind_wop7ml_k$())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  SerialDescriptorImpl.prototype.hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  SerialDescriptorImpl.prototype.toString = function () {
    var tmp = until(0, this.elementsCount_1);
    var tmp_0 = this.serialName_1 + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, SerialDescriptorImpl$toString$lambda(this), 24, null);
  };
  SerialDescriptorImpl.$metadata$ = classMeta('SerialDescriptorImpl', [SerialDescriptor, CachedNames]);
  function buildSerialDescriptor$lambda() {
    return function ($this$null) {
      return Unit_getInstance();
    };
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
  }
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  ENUM.$metadata$ = objectMeta('ENUM', undefined, undefined, undefined, undefined, SerialKind.prototype);
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  CONTEXTUAL.$metadata$ = objectMeta('CONTEXTUAL', undefined, undefined, undefined, undefined, SerialKind.prototype);
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  SerialKind.prototype.toString = function () {
    return ensureNotNull(getKClassFromExpression(this).get_simpleName_r6f8py_k$());
  };
  SerialKind.prototype.hashCode = function () {
    return getStringHashCode(this.toString());
  };
  SerialKind.$metadata$ = classMeta('SerialKind');
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  BOOLEAN.$metadata$ = objectMeta('BOOLEAN', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  BYTE.$metadata$ = objectMeta('BYTE', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  CHAR.$metadata$ = objectMeta('CHAR', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  SHORT.$metadata$ = objectMeta('SHORT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  INT.$metadata$ = objectMeta('INT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  LONG.$metadata$ = objectMeta('LONG', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  FLOAT.$metadata$ = objectMeta('FLOAT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  DOUBLE.$metadata$ = objectMeta('DOUBLE', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  STRING.$metadata$ = objectMeta('STRING', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  PrimitiveKind.$metadata$ = classMeta('PrimitiveKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  CLASS.$metadata$ = objectMeta('CLASS', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  LIST.$metadata$ = objectMeta('LIST', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  MAP.$metadata$ = objectMeta('MAP', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  OBJECT.$metadata$ = objectMeta('OBJECT', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  StructureKind.$metadata$ = classMeta('StructureKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  SEALED.$metadata$ = objectMeta('SEALED', undefined, undefined, undefined, undefined, PolymorphicKind.prototype);
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  OPEN.$metadata$ = objectMeta('OPEN', undefined, undefined, undefined, undefined, PolymorphicKind.prototype);
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  PolymorphicKind.$metadata$ = classMeta('PolymorphicKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function Decoder() {
  }
  Decoder.$metadata$ = interfaceMeta('Decoder');
  function Companion() {
    Companion_instance = this;
    this.DECODE_DONE_1 = -1;
    this.UNKNOWN_NAME_1 = -3;
  }
  Companion.prototype.get_DECODE_DONE_1b8fna_k$ = function () {
    return this.DECODE_DONE_1;
  };
  Companion.prototype.get_UNKNOWN_NAME_lj8hxl_k$ = function () {
    return this.UNKNOWN_NAME_1;
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_1() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CompositeDecoder() {
    Companion_getInstance_1();
  }
  CompositeDecoder.$metadata$ = interfaceMeta('CompositeDecoder');
  function decodeStructure(_this__u8e3s4, descriptor, block) {
    var composite = _this__u8e3s4.beginStructure_dv3yt3_k$(descriptor);
    var result = block(composite);
    composite.endStructure_e64gd4_k$(descriptor);
    return result;
  }
  function Encoder() {
  }
  Encoder.$metadata$ = interfaceMeta('Encoder');
  function CompositeEncoder() {
  }
  CompositeEncoder.$metadata$ = interfaceMeta('CompositeEncoder');
  function encodeCollection(_this__u8e3s4, descriptor, collectionSize, block) {
    var composite = _this__u8e3s4.beginCollection_dgpn47_k$(descriptor, collectionSize);
    block(composite);
    composite.endStructure_e64gd4_k$(descriptor);
  }
  function CachedNames() {
  }
  CachedNames.$metadata$ = interfaceMeta('CachedNames');
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.serialName_1 = primitive.get_serialName_u2rqhk_k$() + 'Array';
  }
  PrimitiveArrayDescriptor.prototype.get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  PrimitiveArrayDescriptor.$metadata$ = classMeta('PrimitiveArrayDescriptor', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function ArrayClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayClassDesc.prototype.get_serialName_u2rqhk_k$ = function () {
    return 'kotlin.Array';
  };
  ArrayClassDesc.$metadata$ = classMeta('ArrayClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  LinkedHashMapClassDesc.$metadata$ = classMeta('LinkedHashMapClassDesc', undefined, undefined, undefined, undefined, MapLikeDescriptor.prototype);
  function HashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.HashMap', keyDesc, valueDesc);
  }
  HashMapClassDesc.$metadata$ = classMeta('HashMapClassDesc', undefined, undefined, undefined, undefined, MapLikeDescriptor.prototype);
  function ListLikeDescriptor(elementDescriptor) {
    this.elementDescriptor_1 = elementDescriptor;
    this.elementsCount_1 = 1;
  }
  ListLikeDescriptor.prototype.get_elementDescriptor_pui6ea_k$ = function () {
    return this.elementDescriptor_1;
  };
  ListLikeDescriptor.prototype.get_kind_wop7ml_k$ = function () {
    return LIST_getInstance();
  };
  ListLikeDescriptor.prototype.get_elementsCount_288r0x_k$ = function () {
    return this.elementsCount_1;
  };
  ListLikeDescriptor.prototype.getElementName_ykpypc_k$ = function (index) {
    return index.toString();
  };
  ListLikeDescriptor.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ListLikeDescriptor.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return false;
  };
  ListLikeDescriptor.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return emptyList();
  };
  ListLikeDescriptor.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return this.elementDescriptor_1;
  };
  ListLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.elementDescriptor_1, other.elementDescriptor_1) ? this.get_serialName_u2rqhk_k$() === other.get_serialName_u2rqhk_k$() : false)
      return true;
    return false;
  };
  ListLikeDescriptor.prototype.hashCode = function () {
    return imul(hashCode(this.elementDescriptor_1), 31) + getStringHashCode(this.get_serialName_u2rqhk_k$()) | 0;
  };
  ListLikeDescriptor.prototype.toString = function () {
    return this.get_serialName_u2rqhk_k$() + '(' + this.elementDescriptor_1 + ')';
  };
  ListLikeDescriptor.$metadata$ = classMeta('ListLikeDescriptor', [SerialDescriptor]);
  function get_ARRAY_NAME() {
    return ARRAY_NAME;
  }
  var ARRAY_NAME;
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.serialName_1 = serialName;
    this.keyDescriptor_1 = keyDescriptor;
    this.valueDescriptor_1 = valueDescriptor;
    this.elementsCount_1 = 2;
  }
  MapLikeDescriptor.prototype.get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  MapLikeDescriptor.prototype.get_keyDescriptor_qkqayt_k$ = function () {
    return this.keyDescriptor_1;
  };
  MapLikeDescriptor.prototype.get_valueDescriptor_j2bi95_k$ = function () {
    return this.valueDescriptor_1;
  };
  MapLikeDescriptor.prototype.get_kind_wop7ml_k$ = function () {
    return MAP_getInstance();
  };
  MapLikeDescriptor.prototype.get_elementsCount_288r0x_k$ = function () {
    return this.elementsCount_1;
  };
  MapLikeDescriptor.prototype.getElementName_ykpypc_k$ = function (index) {
    return index.toString();
  };
  MapLikeDescriptor.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return false;
  };
  MapLikeDescriptor.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return emptyList();
  };
  MapLikeDescriptor.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.get_serialName_u2rqhk_k$() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var tmp0_subject = index % 2 | 0;
    var tmp;
    switch (tmp0_subject) {
      case 0:
        tmp = this.keyDescriptor_1;
        break;
      case 1:
        tmp = this.valueDescriptor_1;
        break;
      default:
        throw IllegalStateException_init_$Create$('Unreached');
    }
    return tmp;
  };
  MapLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.get_serialName_u2rqhk_k$() === other.get_serialName_u2rqhk_k$()))
      return false;
    if (!equals(this.keyDescriptor_1, other.keyDescriptor_1))
      return false;
    if (!equals(this.valueDescriptor_1, other.valueDescriptor_1))
      return false;
    return true;
  };
  MapLikeDescriptor.prototype.hashCode = function () {
    var result = getStringHashCode(this.get_serialName_u2rqhk_k$());
    result = imul(31, result) + hashCode(this.keyDescriptor_1) | 0;
    result = imul(31, result) + hashCode(this.valueDescriptor_1) | 0;
    return result;
  };
  MapLikeDescriptor.prototype.toString = function () {
    return this.get_serialName_u2rqhk_k$() + '(' + this.keyDescriptor_1 + ', ' + this.valueDescriptor_1 + ')';
  };
  MapLikeDescriptor.$metadata$ = classMeta('MapLikeDescriptor', [SerialDescriptor]);
  function get_LINKED_HASH_MAP_NAME() {
    return LINKED_HASH_MAP_NAME;
  }
  var LINKED_HASH_MAP_NAME;
  function get_HASH_MAP_NAME() {
    return HASH_MAP_NAME;
  }
  var HASH_MAP_NAME;
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  ArrayListClassDesc.prototype.get_serialName_u2rqhk_k$ = function () {
    return 'kotlin.collections.ArrayList';
  };
  ArrayListClassDesc.$metadata$ = classMeta('ArrayListClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function LinkedHashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  LinkedHashSetClassDesc.prototype.get_serialName_u2rqhk_k$ = function () {
    return 'kotlin.collections.LinkedHashSet';
  };
  LinkedHashSetClassDesc.$metadata$ = classMeta('LinkedHashSetClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function HashSetClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  HashSetClassDesc.prototype.get_serialName_u2rqhk_k$ = function () {
    return 'kotlin.collections.HashSet';
  };
  HashSetClassDesc.$metadata$ = classMeta('HashSetClassDesc', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function get_ARRAY_LIST_NAME() {
    return ARRAY_LIST_NAME;
  }
  var ARRAY_LIST_NAME;
  function get_LINKED_HASH_SET_NAME() {
    return LINKED_HASH_SET_NAME;
  }
  var LINKED_HASH_SET_NAME;
  function get_HASH_SET_NAME() {
    return HASH_SET_NAME;
  }
  var HASH_SET_NAME;
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.descriptor_1 = new PrimitiveArrayDescriptor(primitiveSerializer.get_descriptor_wjt6a0_k$());
  }
  PrimitiveArraySerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  PrimitiveArraySerializer.prototype.builderSize_mmbugq_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_position_jfponi_k$();
  };
  PrimitiveArraySerializer.prototype.toResult_nzwaf2_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.build_1k0s4u_k$();
  };
  PrimitiveArraySerializer.prototype.checkCapacity_ge5iis_k$ = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ensureCapacity_ignus8_k$(size);
  };
  PrimitiveArraySerializer.prototype.collectionIterator_apv53g_k$ = function (_this__u8e3s4) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use writeContents instead');
  };
  PrimitiveArraySerializer.prototype.collectionIterator_v9vfqb_k$ = function (_this__u8e3s4) {
    return this.collectionIterator_apv53g_k$((_this__u8e3s4 == null ? true : isObject(_this__u8e3s4)) ? _this__u8e3s4 : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.insert_64qdau_k$ = function (_this__u8e3s4, index, element) {
    throw IllegalStateException_init_$Create$('This method lead to boxing and must not be used, use Builder.append instead');
  };
  PrimitiveArraySerializer.prototype.builder_3thy1n_k$ = function () {
    return this.toBuilder_9n7g5t_k$(this.empty_1lj7f1_k$());
  };
  PrimitiveArraySerializer.prototype.serialize_q3dfzy_k$ = function (encoder, value) {
    var size = this.collectionSize_gnp0og_k$(value);
    {
      var tmp0_encodeCollection = this.descriptor_1;
      var composite = encoder.beginCollection_dgpn47_k$(tmp0_encodeCollection, size);
      {
        this.writeContent_jq3j40_k$(composite, value, size);
      }
      composite.endStructure_e64gd4_k$(tmp0_encodeCollection);
    }
  };
  PrimitiveArraySerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_q3dfzy_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.serialize_wciw4p_k$ = function (encoder, value) {
    return this.serialize_q3dfzy_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  PrimitiveArraySerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return this.merge_6fpf53_k$(decoder, null);
  };
  PrimitiveArraySerializer.$metadata$ = classMeta('PrimitiveArraySerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function PrimitiveArrayBuilder() {
  }
  PrimitiveArrayBuilder.prototype.ensureCapacity$default_ya9857_k$ = function (requiredCapacity, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      requiredCapacity = this.get_position_jfponi_k$() + 1 | 0;
    return $handler == null ? this.ensureCapacity_ignus8_k$(requiredCapacity) : $handler(requiredCapacity);
  };
  PrimitiveArrayBuilder.$metadata$ = classMeta('PrimitiveArrayBuilder');
  function _get_elementSerializer__tegbkt($this) {
    return $this.elementSerializer_1;
  }
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.elementSerializer_1 = elementSerializer;
  }
  CollectionLikeSerializer.prototype.serialize_wciw4p_k$ = function (encoder, value) {
    var size = this.collectionSize_gnp0og_k$(value);
    {
      var tmp0_encodeCollection = this.get_descriptor_wjt6a0_k$();
      var composite = encoder.beginCollection_dgpn47_k$(tmp0_encodeCollection, size);
      {
        var iterator = this.collectionIterator_v9vfqb_k$(value);
        var inductionVariable = 0;
        if (inductionVariable < size)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            composite.encodeSerializableElement_pr92am_k$(this.get_descriptor_wjt6a0_k$(), index, this.elementSerializer_1, iterator.next_20eer_k$());
          }
           while (inductionVariable < size);
      }
      composite.endStructure_e64gd4_k$(tmp0_encodeCollection);
    }
  };
  CollectionLikeSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_wciw4p_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  CollectionLikeSerializer.prototype.readAll_s7t1kq_k$ = function (decoder, builder, startIndex, size) {
    {
      var tmp0_require = size >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.readElement_yuufx2_k$(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  CollectionLikeSerializer.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    var tmp = this.get_descriptor_wjt6a0_k$();
    this.insert_64qdau_k$(builder, index, decoder.decodeSerializableElement$default_xyql7s_k$(tmp, index, this.elementSerializer_1, null, 8, null));
  };
  CollectionLikeSerializer.$metadata$ = classMeta('CollectionLikeSerializer', undefined, undefined, undefined, undefined, AbstractCollectionSerializer.prototype);
  function readSize($this, decoder, builder) {
    var size = decoder.decodeCollectionSize_cd6i6s_k$($this.get_descriptor_wjt6a0_k$());
    $this.checkCapacity_ge5iis_k$(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  AbstractCollectionSerializer.prototype.merge_6fpf53_k$ = function (decoder, previous) {
    var tmp0_safe_receiver = previous;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.toBuilder_9n7g5t_k$(tmp0_safe_receiver);
    var builder = tmp1_elvis_lhs == null ? this.builder_3thy1n_k$() : tmp1_elvis_lhs;
    var startIndex = this.builderSize_mmbugq_k$(builder);
    var compositeDecoder = decoder.beginStructure_dv3yt3_k$(this.get_descriptor_wjt6a0_k$());
    if (compositeDecoder.decodeSequentially_xlblqy_k$()) {
      this.readAll_s7t1kq_k$(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.decodeElementIndex_nk5a2l_k$(this.get_descriptor_wjt6a0_k$());
        Companion_getInstance_1();
        if (index === -1)
          break $l$loop;
        var tmp = startIndex + index | 0;
        this.readElement$default_s49edv_k$(compositeDecoder, tmp, builder, false, 8, null);
      }
    }
    compositeDecoder.endStructure_e64gd4_k$(this.get_descriptor_wjt6a0_k$());
    return this.toResult_nzwaf2_k$(builder);
  };
  AbstractCollectionSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return this.merge_6fpf53_k$(decoder, null);
  };
  AbstractCollectionSerializer.prototype.readElement$default_s49edv_k$ = function (decoder, index, builder, checkIndex, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      checkIndex = true;
    return $handler == null ? this.readElement_yuufx2_k$(decoder, index, builder, checkIndex) : $handler(decoder, index, builder, checkIndex);
  };
  AbstractCollectionSerializer.$metadata$ = classMeta('AbstractCollectionSerializer', [KSerializer]);
  function _get_kClass__80op26($this) {
    return $this.kClass_1;
  }
  function ReferenceArraySerializer(kClass, eSerializer) {
    CollectionLikeSerializer.call(this, eSerializer);
    this.kClass_1 = kClass;
    this.descriptor_1 = new ArrayClassDesc(eSerializer.get_descriptor_wjt6a0_k$());
  }
  ReferenceArraySerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  ReferenceArraySerializer.prototype.collectionSize_sgvbkw_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ReferenceArraySerializer.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_sgvbkw_k$((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.collectionIterator_hdgi7n_k$ = function (_this__u8e3s4) {
    return arrayIterator(_this__u8e3s4);
  };
  ReferenceArraySerializer.prototype.collectionIterator_v9vfqb_k$ = function (_this__u8e3s4) {
    return this.collectionIterator_hdgi7n_k$((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.builder_3thy1n_k$ = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$();
    }
    return tmp$ret$0;
  };
  ReferenceArraySerializer.prototype.builderSize_q7iht4_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  ReferenceArraySerializer.prototype.builderSize_mmbugq_k$ = function (_this__u8e3s4) {
    return this.builderSize_q7iht4_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.toResult_l9vbl8_k$ = function (_this__u8e3s4) {
    return toNativeArrayImpl(_this__u8e3s4, this.kClass_1);
  };
  ReferenceArraySerializer.prototype.toResult_nzwaf2_k$ = function (_this__u8e3s4) {
    return this.toResult_l9vbl8_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.toBuilder_qnyl35_k$ = function (_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asList(_this__u8e3s4));
  };
  ReferenceArraySerializer.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_qnyl35_k$((!(_this__u8e3s4 == null) ? isArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ReferenceArraySerializer.prototype.checkCapacity_3yirqq_k$ = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ensureCapacity_ignus8_k$(size);
  };
  ReferenceArraySerializer.prototype.checkCapacity_ge5iis_k$ = function (_this__u8e3s4, size) {
    return this.checkCapacity_3yirqq_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  ReferenceArraySerializer.prototype.insert_5tew8_k$ = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.add_ydlf05_k$(index, element);
  };
  ReferenceArraySerializer.prototype.insert_64qdau_k$ = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.insert_5tew8_k$(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ReferenceArraySerializer.$metadata$ = classMeta('ReferenceArraySerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  CollectionSerializer.prototype.collectionSize_diz0mn_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  CollectionSerializer.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_diz0mn_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CollectionSerializer.prototype.collectionIterator_pvbym6_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.iterator_jk1svi_k$();
  };
  CollectionSerializer.prototype.collectionIterator_v9vfqb_k$ = function (_this__u8e3s4) {
    return this.collectionIterator_pvbym6_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CollectionSerializer.$metadata$ = classMeta('CollectionSerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.keySerializer_1 = keySerializer;
    this.valueSerializer_1 = valueSerializer;
  }
  MapLikeSerializer.prototype.get_keySerializer_t29hrc_k$ = function () {
    return this.keySerializer_1;
  };
  MapLikeSerializer.prototype.get_valueSerializer_gksbgm_k$ = function () {
    return this.valueSerializer_1;
  };
  MapLikeSerializer.prototype.readAll_s7t1kq_k$ = function (decoder, builder, startIndex, size) {
    {
      var tmp0_require = size >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Size must be known in advance when using READ_ALL';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.first_1;
    var last = progression.last_1;
    var step_0 = progression.step_1;
    if ((step_0 > 0 ? inductionVariable <= last : false) ? true : step_0 < 0 ? last <= inductionVariable : false)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.readElement_yuufx2_k$(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  MapLikeSerializer.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    var tmp = this.get_descriptor_wjt6a0_k$();
    var key = decoder.decodeSerializableElement$default_xyql7s_k$(tmp, index, this.keySerializer_1, null, 8, null);
    var tmp_0;
    if (checkIndex) {
      var tmp$ret$1;
      {
        var tmp0_also = decoder.decodeElementIndex_nk5a2l_k$(this.get_descriptor_wjt6a0_k$());
        {
        }
        {
          {
            var tmp0_require = tmp0_also === (index + 1 | 0);
            {
            }
            if (!tmp0_require) {
              var tmp$ret$0;
              {
                tmp$ret$0 = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + tmp0_also;
              }
              var message = tmp$ret$0;
              throw IllegalArgumentException_init_$Create$(toString(message));
            }
          }
        }
        tmp$ret$1 = tmp0_also;
      }
      tmp_0 = tmp$ret$1;
    } else {
      tmp_0 = index + 1 | 0;
    }
    var vIndex = tmp_0;
    var tmp_1;
    var tmp_2;
    if (builder.containsKey_wgk31w_k$(key)) {
      var tmp_3 = this.valueSerializer_1.get_descriptor_wjt6a0_k$().get_kind_wop7ml_k$();
      tmp_2 = !(tmp_3 instanceof PrimitiveKind);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = decoder.decodeSerializableElement_5lsbxj_k$(this.get_descriptor_wjt6a0_k$(), vIndex, this.valueSerializer_1, getValue(builder, key));
    } else {
      var tmp_4 = this.get_descriptor_wjt6a0_k$();
      tmp_1 = decoder.decodeSerializableElement$default_xyql7s_k$(tmp_4, vIndex, this.valueSerializer_1, null, 8, null);
    }
    var value = tmp_1;
    {
      builder.put_3mhbri_k$(key, value);
    }
  };
  MapLikeSerializer.prototype.serialize_wciw4p_k$ = function (encoder, value) {
    var size = this.collectionSize_gnp0og_k$(value);
    {
      var tmp0_encodeCollection = this.get_descriptor_wjt6a0_k$();
      var composite = encoder.beginCollection_dgpn47_k$(tmp0_encodeCollection, size);
      {
        var iterator = this.collectionIterator_v9vfqb_k$(value);
        var index = 0;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = iterator;
          }
          var tmp0_iterator = tmp$ret$0;
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            {
              var tmp$ret$1;
              {
                tmp$ret$1 = element.get_key_18j28a_k$();
              }
              var k = tmp$ret$1;
              var tmp$ret$2;
              {
                tmp$ret$2 = element.get_value_j01efc_k$();
              }
              var v = tmp$ret$2;
              var tmp = this.get_descriptor_wjt6a0_k$();
              var tmp0 = index;
              index = tmp0 + 1 | 0;
              composite.encodeSerializableElement_pr92am_k$(tmp, tmp0, this.keySerializer_1, k);
              var tmp_0 = this.get_descriptor_wjt6a0_k$();
              var tmp1 = index;
              index = tmp1 + 1 | 0;
              composite.encodeSerializableElement_pr92am_k$(tmp_0, tmp1, this.valueSerializer_1, v);
            }
          }
        }
      }
      composite.endStructure_e64gd4_k$(tmp0_encodeCollection);
    }
  };
  MapLikeSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_wciw4p_k$(encoder, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  MapLikeSerializer.$metadata$ = classMeta('MapLikeSerializer', undefined, undefined, undefined, undefined, AbstractCollectionSerializer.prototype);
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.descriptor_1 = new LinkedHashMapClassDesc(kSerializer.get_descriptor_wjt6a0_k$(), vSerializer.get_descriptor_wjt6a0_k$());
  }
  LinkedHashMapSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  LinkedHashMapSerializer.prototype.collectionSize_1ouzjx_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  LinkedHashMapSerializer.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_1ouzjx_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.collectionIterator_kjktzq_k$ = function (_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    }
    return tmp$ret$0;
  };
  LinkedHashMapSerializer.prototype.collectionIterator_v9vfqb_k$ = function (_this__u8e3s4) {
    return this.collectionIterator_kjktzq_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.builder_3thy1n_k$ = function () {
    return LinkedHashMap_init_$Create$();
  };
  LinkedHashMapSerializer.prototype.builderSize_39d0bl_k$ = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.get_size_woubt6_k$(), 2);
  };
  LinkedHashMapSerializer.prototype.builderSize_mmbugq_k$ = function (_this__u8e3s4) {
    return this.builderSize_39d0bl_k$(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.toResult_8706jh_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  LinkedHashMapSerializer.prototype.toResult_nzwaf2_k$ = function (_this__u8e3s4) {
    return this.toResult_8706jh_k$(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.toBuilder_iza02_k$ = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  LinkedHashMapSerializer.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_iza02_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LinkedHashMapSerializer.prototype.checkCapacity_n86247_k$ = function (_this__u8e3s4, size) {
  };
  LinkedHashMapSerializer.prototype.checkCapacity_ge5iis_k$ = function (_this__u8e3s4, size) {
    return this.checkCapacity_n86247_k$(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  LinkedHashMapSerializer.prototype.insertKeyValuePair_o57l8p_k$ = function (_this__u8e3s4, index, key, value) {
    _this__u8e3s4.put_3mhbri_k$(key, value);
    return Unit_getInstance();
  };
  LinkedHashMapSerializer.prototype.insertKeyValuePair_nrn1wz_k$ = function (_this__u8e3s4, index, key, value) {
    var tmp = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE();
    var tmp_0 = (key == null ? true : isObject(key)) ? key : THROW_CCE();
    return this.insertKeyValuePair_o57l8p_k$(tmp, index, tmp_0, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  LinkedHashMapSerializer.$metadata$ = classMeta('LinkedHashMapSerializer', undefined, undefined, undefined, undefined, MapLikeSerializer.prototype);
  function HashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.descriptor_1 = new HashMapClassDesc(kSerializer.get_descriptor_wjt6a0_k$(), vSerializer.get_descriptor_wjt6a0_k$());
  }
  HashMapSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  HashMapSerializer.prototype.collectionSize_1ouzjx_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  HashMapSerializer.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_1ouzjx_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.collectionIterator_kjktzq_k$ = function (_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    }
    return tmp$ret$0;
  };
  HashMapSerializer.prototype.collectionIterator_v9vfqb_k$ = function (_this__u8e3s4) {
    return this.collectionIterator_kjktzq_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.builder_3thy1n_k$ = function () {
    return HashMap_init_$Create$();
  };
  HashMapSerializer.prototype.builderSize_f8e7zc_k$ = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.get_size_woubt6_k$(), 2);
  };
  HashMapSerializer.prototype.builderSize_mmbugq_k$ = function (_this__u8e3s4) {
    return this.builderSize_f8e7zc_k$(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.toResult_ii3mzo_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  HashMapSerializer.prototype.toResult_nzwaf2_k$ = function (_this__u8e3s4) {
    return this.toResult_ii3mzo_k$(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.toBuilder_iza02_k$ = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? HashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  HashMapSerializer.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_iza02_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Map) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  HashMapSerializer.prototype.checkCapacity_bomj8i_k$ = function (_this__u8e3s4, size) {
  };
  HashMapSerializer.prototype.checkCapacity_ge5iis_k$ = function (_this__u8e3s4, size) {
    return this.checkCapacity_bomj8i_k$(_this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  HashMapSerializer.prototype.insertKeyValuePair_ogcj1a_k$ = function (_this__u8e3s4, index, key, value) {
    _this__u8e3s4.put_3mhbri_k$(key, value);
    return Unit_getInstance();
  };
  HashMapSerializer.prototype.insertKeyValuePair_nrn1wz_k$ = function (_this__u8e3s4, index, key, value) {
    var tmp = _this__u8e3s4 instanceof HashMap ? _this__u8e3s4 : THROW_CCE();
    var tmp_0 = (key == null ? true : isObject(key)) ? key : THROW_CCE();
    return this.insertKeyValuePair_ogcj1a_k$(tmp, index, tmp_0, (value == null ? true : isObject(value)) ? value : THROW_CCE());
  };
  HashMapSerializer.$metadata$ = classMeta('HashMapSerializer', undefined, undefined, undefined, undefined, MapLikeSerializer.prototype);
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.descriptor_1 = new ArrayListClassDesc(element.get_descriptor_wjt6a0_k$());
  }
  ArrayListSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  ArrayListSerializer.prototype.builder_3thy1n_k$ = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$();
    }
    return tmp$ret$0;
  };
  ArrayListSerializer.prototype.builderSize_pted1r_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$();
  };
  ArrayListSerializer.prototype.builderSize_mmbugq_k$ = function (_this__u8e3s4) {
    return this.builderSize_pted1r_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.toResult_t33s23_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  ArrayListSerializer.prototype.toResult_nzwaf2_k$ = function (_this__u8e3s4) {
    return this.toResult_t33s23_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.toBuilder_9sdg76_k$ = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_1(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  ArrayListSerializer.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_9sdg76_k$((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, List) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ArrayListSerializer.prototype.checkCapacity_ao7vf_k$ = function (_this__u8e3s4, size) {
    return _this__u8e3s4.ensureCapacity_ignus8_k$(size);
  };
  ArrayListSerializer.prototype.checkCapacity_ge5iis_k$ = function (_this__u8e3s4, size) {
    return this.checkCapacity_ao7vf_k$(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  ArrayListSerializer.prototype.insert_fxdj4m_k$ = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.add_ydlf05_k$(index, element);
  };
  ArrayListSerializer.prototype.insert_64qdau_k$ = function (_this__u8e3s4, index, element) {
    var tmp = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE();
    return this.insert_fxdj4m_k$(tmp, index, (element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ArrayListSerializer.$metadata$ = classMeta('ArrayListSerializer', undefined, undefined, undefined, undefined, CollectionSerializer.prototype);
  function _get_objectInstance__h8002x($this) {
    return $this.objectInstance_1;
  }
  function ObjectSerializer_init_$Init$(serialName, objectInstance, classAnnotations, $this) {
    ObjectSerializer.call($this, serialName, objectInstance);
    $this._annotations_1 = asList(classAnnotations);
    return $this;
  }
  function ObjectSerializer_init_$Create$(serialName, objectInstance, classAnnotations) {
    return ObjectSerializer_init_$Init$(serialName, objectInstance, classAnnotations, Object.create(ObjectSerializer.prototype));
  }
  function _set__annotations__kk13ma($this, _set____db54di) {
    $this._annotations_1 = _set____db54di;
  }
  function _get__annotations__yxc7sq($this) {
    return $this._annotations_1;
  }
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.annotations_1 = this$0._annotations_1;
      return Unit_getInstance();
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor$default($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null);
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.objectInstance_1 = objectInstance;
    this._annotations_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.descriptor$delegate_1 = lazy_0(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  ObjectSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = descriptor$factory();
      tmp$ret$0 = this.descriptor$delegate_1.get_value_j01efc_k$();
    }
    return tmp$ret$0;
  };
  ObjectSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    encoder.beginStructure_dv3yt3_k$(this.get_descriptor_wjt6a0_k$()).endStructure_e64gd4_k$(this.get_descriptor_wjt6a0_k$());
  };
  ObjectSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    var tmp$ret$1;
    {
      var tmp0_decodeStructure = this.get_descriptor_wjt6a0_k$();
      var composite = decoder.beginStructure_dv3yt3_k$(tmp0_decodeStructure);
      var tmp$ret$0;
      $l$block: {
        var index = composite.decodeElementIndex_nk5a2l_k$(this.get_descriptor_wjt6a0_k$());
        Companion_getInstance_1();
        if (index === -1) {
          tmp$ret$0 = Unit_getInstance();
          break $l$block;
        } else {
          throw SerializationException_init_$Create$_0('Unexpected index ' + index);
        }
      }
      var result = tmp$ret$0;
      composite.endStructure_e64gd4_k$(tmp0_decodeStructure);
      tmp$ret$1 = result;
    }
    return this.objectInstance_1;
  };
  ObjectSerializer.$metadata$ = classMeta('ObjectSerializer', [KSerializer]);
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.get_descriptor_wjt6a0_k$();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    init_properties_Platform_common_kt_9ujmfm();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cast(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    return isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
  }
  function compactArray(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    var tmp$ret$2;
    {
      {
      }
      var tmp;
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          {
          }
          tmp$ret$0 = _this__u8e3s4 == null ? true : _this__u8e3s4.isEmpty_y1axqb_k$();
        }
        tmp$ret$1 = tmp$ret$0;
      }
      if (!tmp$ret$1) {
        tmp = _this__u8e3s4;
      } else {
        tmp = null;
      }
      tmp$ret$2 = tmp;
    }
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      {
        tmp$ret$3 = copyToArray(tmp0_safe_receiver);
      }
      tmp_0 = tmp$ret$3;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function elementsHashCodeBy(_this__u8e3s4, selector) {
    init_properties_Platform_common_kt_9ujmfm();
    var tmp$ret$2;
    {
      var accumulator = 1;
      var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        var tmp$ret$1;
        {
          var tmp0__anonymous__q1qw7t = accumulator;
          var tmp = imul(31, tmp0__anonymous__q1qw7t);
          var tmp$ret$0;
          {
            var tmp0_hashCode = selector(element);
            var tmp0_safe_receiver = tmp0_hashCode;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
            tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          }
          tmp$ret$1 = tmp + tmp$ret$0 | 0;
        }
        accumulator = tmp$ret$1;
      }
      tmp$ret$2 = accumulator;
    }
    return tmp$ret$2;
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function init_properties_Platform_common_kt_9ujmfm() {
    if (properties_initialized_Platform_common_kt_i7q4ty) {
    } else {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = [];
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      EMPTY_DESCRIPTOR_ARRAY = tmp$ret$2;
    }
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.get_serialName_u2rqhk_k$());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    var tmp$ret$4;
    {
      var tmp$ret$3;
      {
        var accumulator = 1;
        var tmp0_iterator = elementDescriptors.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          var tmp$ret$2;
          {
            var tmp0__anonymous__q1qw7t = accumulator;
            var tmp = imul(31, tmp0__anonymous__q1qw7t);
            var tmp$ret$1;
            {
              var tmp$ret$0;
              {
                tmp$ret$0 = element.get_serialName_u2rqhk_k$();
              }
              var tmp0_hashCode = tmp$ret$0;
              var tmp0_safe_receiver = tmp0_hashCode;
              var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
              tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
            }
            tmp$ret$2 = tmp + tmp$ret$1 | 0;
          }
          accumulator = tmp$ret$2;
        }
        tmp$ret$3 = accumulator;
      }
      tmp$ret$4 = tmp$ret$3;
    }
    var namesHash = tmp$ret$4;
    var tmp$ret$9;
    {
      var tmp$ret$8;
      {
        var accumulator_0 = 1;
        var tmp0_iterator_0 = elementDescriptors.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_0.next_20eer_k$();
          var tmp$ret$7;
          {
            var tmp0__anonymous__q1qw7t_0 = accumulator_0;
            var tmp_0 = imul(31, tmp0__anonymous__q1qw7t_0);
            var tmp$ret$6;
            {
              var tmp$ret$5;
              {
                tmp$ret$5 = element_0.get_kind_wop7ml_k$();
              }
              var tmp0_hashCode_0 = tmp$ret$5;
              var tmp0_safe_receiver_0 = tmp0_hashCode_0;
              var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
              tmp$ret$6 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
            }
            tmp$ret$7 = tmp_0 + tmp$ret$6 | 0;
          }
          accumulator_0 = tmp$ret$7;
        }
        tmp$ret$8 = accumulator_0;
      }
      tmp$ret$9 = tmp$ret$8;
    }
    var kindHash = tmp$ret$9;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    init_properties_PluginHelperInterfaces_kt_tblf27();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function init_properties_PluginHelperInterfaces_kt_tblf27() {
    if (properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
    } else {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = [];
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      EMPTY_SERIALIZER_ARRAY = tmp$ret$2;
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_0(Companion_getInstance()));
  }
  CharArraySerializer_0.prototype.collectionSize_ws33uw_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  CharArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_ws33uw_k$((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.toBuilder_waug93_k$ = function (_this__u8e3s4) {
    return new CharArrayBuilder(_this__u8e3s4);
  };
  CharArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_waug93_k$((!(_this__u8e3s4 == null) ? isCharArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  CharArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return charArray(0);
  };
  CharArraySerializer_0.prototype.readElement_le7skj_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_y20c3x_k$(decoder.decodeCharElement_pg5vs7_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  CharArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_le7skj_k$(decoder, index, builder instanceof CharArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  CharArraySerializer_0.prototype.writeContent_wscki9_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeCharElement_4fawdf_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  CharArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_wscki9_k$(encoder, (!(content == null) ? isCharArray(content) : false) ? content : THROW_CCE(), size);
  };
  CharArraySerializer_0.$metadata$ = objectMeta('CharArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(DoubleCompanionObject_getInstance()));
  }
  DoubleArraySerializer_0.prototype.collectionSize_pzip3n_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  DoubleArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_pzip3n_k$((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.toBuilder_b07jn0_k$ = function (_this__u8e3s4) {
    return new DoubleArrayBuilder(_this__u8e3s4);
  };
  DoubleArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_b07jn0_k$((!(_this__u8e3s4 == null) ? isDoubleArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  DoubleArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return new Float64Array(0);
  };
  DoubleArraySerializer_0.prototype.readElement_g1li9q_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_g44bp4_k$(decoder.decodeDoubleElement_42w6gz_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  DoubleArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_g1li9q_k$(decoder, index, builder instanceof DoubleArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  DoubleArraySerializer_0.prototype.writeContent_xk6378_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeDoubleElement_m8xcw3_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  DoubleArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_xk6378_k$(encoder, (!(content == null) ? isDoubleArray(content) : false) ? content : THROW_CCE(), size);
  };
  DoubleArraySerializer_0.$metadata$ = objectMeta('DoubleArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(FloatCompanionObject_getInstance()));
  }
  FloatArraySerializer_0.prototype.collectionSize_173jc8_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  FloatArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_173jc8_k$((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.toBuilder_g1jv47_k$ = function (_this__u8e3s4) {
    return new FloatArrayBuilder(_this__u8e3s4);
  };
  FloatArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_g1jv47_k$((!(_this__u8e3s4 == null) ? isFloatArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  FloatArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return new Float32Array(0);
  };
  FloatArraySerializer_0.prototype.readElement_x45ji7_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_urs3el_k$(decoder.decodeFloatElement_nl5jiq_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  FloatArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_x45ji7_k$(decoder, index, builder instanceof FloatArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  FloatArraySerializer_0.prototype.writeContent_z7nd2p_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeFloatElement_o97mfb_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  FloatArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_z7nd2p_k$(encoder, (!(content == null) ? isFloatArray(content) : false) ? content : THROW_CCE(), size);
  };
  FloatArraySerializer_0.$metadata$ = objectMeta('FloatArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(Companion_getInstance_0()));
  }
  LongArraySerializer_0.prototype.collectionSize_91vysi_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  LongArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_91vysi_k$((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.toBuilder_8knb6p_k$ = function (_this__u8e3s4) {
    return new LongArrayBuilder(_this__u8e3s4);
  };
  LongArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_8knb6p_k$((!(_this__u8e3s4 == null) ? isLongArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  LongArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return longArray(0);
  };
  LongArraySerializer_0.prototype.readElement_qrifnb_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_gvce4t_k$(decoder.decodeLongElement_kyznym_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  LongArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_qrifnb_k$(decoder, index, builder instanceof LongArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  LongArraySerializer_0.prototype.writeContent_42fxmf_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeLongElement_xtv8il_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  LongArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_42fxmf_k$(encoder, (!(content == null) ? isLongArray(content) : false) ? content : THROW_CCE(), size);
  };
  LongArraySerializer_0.$metadata$ = objectMeta('LongArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(IntCompanionObject_getInstance()));
  }
  IntArraySerializer_0.prototype.collectionSize_p5ta3p_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  IntArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_p5ta3p_k$((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.toBuilder_murpja_k$ = function (_this__u8e3s4) {
    return new IntArrayBuilder(_this__u8e3s4);
  };
  IntArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_murpja_k$((!(_this__u8e3s4 == null) ? isIntArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  IntArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return new Int32Array(0);
  };
  IntArraySerializer_0.prototype.readElement_q2v34c_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_da0tyi_k$(decoder.decodeIntElement_cmpvet_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  IntArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_q2v34c_k$(decoder, index, builder instanceof IntArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  IntArraySerializer_0.prototype.writeContent_h3vxwe_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeIntElement_utywpf_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  IntArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_h3vxwe_k$(encoder, (!(content == null) ? isIntArray(content) : false) ? content : THROW_CCE(), size);
  };
  IntArraySerializer_0.$metadata$ = objectMeta('IntArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(ShortCompanionObject_getInstance()));
  }
  ShortArraySerializer_0.prototype.collectionSize_tiggjs_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ShortArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_tiggjs_k$((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.toBuilder_qo79nd_k$ = function (_this__u8e3s4) {
    return new ShortArrayBuilder(_this__u8e3s4);
  };
  ShortArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_qo79nd_k$((!(_this__u8e3s4 == null) ? isShortArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ShortArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return new Int16Array(0);
  };
  ShortArraySerializer_0.prototype.readElement_btg9b5_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_piqb6l_k$(decoder.decodeShortElement_zjkfm_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  ShortArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_btg9b5_k$(decoder, index, builder instanceof ShortArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ShortArraySerializer_0.prototype.writeContent_i3wixd_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeShortElement_2nnlvd_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  ShortArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_i3wixd_k$(encoder, (!(content == null) ? isShortArray(content) : false) ? content : THROW_CCE(), size);
  };
  ShortArraySerializer_0.$metadata$ = objectMeta('ShortArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(ByteCompanionObject_getInstance()));
  }
  ByteArraySerializer_0.prototype.collectionSize_qzl5wq_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  ByteArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_qzl5wq_k$((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.toBuilder_rgttij_k$ = function (_this__u8e3s4) {
    return new ByteArrayBuilder(_this__u8e3s4);
  };
  ByteArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_rgttij_k$((!(_this__u8e3s4 == null) ? isByteArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  ByteArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return new Int8Array(0);
  };
  ByteArraySerializer_0.prototype.readElement_9ieobv_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_jiz7k1_k$(decoder.decodeByteElement_76b0gq_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  ByteArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_9ieobv_k$(decoder, index, builder instanceof ByteArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  ByteArraySerializer_0.prototype.writeContent_16s3nh_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeByteElement_r2fm3n_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  ByteArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_16s3nh_k$(encoder, (!(content == null) ? isByteArray(content) : false) ? content : THROW_CCE(), size);
  };
  ByteArraySerializer_0.$metadata$ = objectMeta('ByteArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(BooleanCompanionObject_getInstance()));
  }
  BooleanArraySerializer_0.prototype.collectionSize_keckzw_k$ = function (_this__u8e3s4) {
    return _this__u8e3s4.length;
  };
  BooleanArraySerializer_0.prototype.collectionSize_gnp0og_k$ = function (_this__u8e3s4) {
    return this.collectionSize_keckzw_k$((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.toBuilder_uo58bx_k$ = function (_this__u8e3s4) {
    return new BooleanArrayBuilder(_this__u8e3s4);
  };
  BooleanArraySerializer_0.prototype.toBuilder_9n7g5t_k$ = function (_this__u8e3s4) {
    return this.toBuilder_uo58bx_k$((!(_this__u8e3s4 == null) ? isBooleanArray(_this__u8e3s4) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  BooleanArraySerializer_0.prototype.empty_1lj7f1_k$ = function () {
    return booleanArray(0);
  };
  BooleanArraySerializer_0.prototype.readElement_kzf5fx_k$ = function (decoder, index, builder, checkIndex) {
    builder.append_l5nnnz_k$(decoder.decodeBooleanElement_3vswy_k$(this.get_descriptor_wjt6a0_k$(), index));
  };
  BooleanArraySerializer_0.prototype.readElement_yuufx2_k$ = function (decoder, index, builder, checkIndex) {
    return this.readElement_kzf5fx_k$(decoder, index, builder instanceof BooleanArrayBuilder ? builder : THROW_CCE(), checkIndex);
  };
  BooleanArraySerializer_0.prototype.writeContent_j8grad_k$ = function (encoder, content, size) {
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        encoder.encodeBooleanElement_2l5aov_k$(this.get_descriptor_wjt6a0_k$(), i, content[i]);
      }
       while (inductionVariable < size);
  };
  BooleanArraySerializer_0.prototype.writeContent_jq3j40_k$ = function (encoder, content, size) {
    return this.writeContent_j8grad_k$(encoder, (!(content == null) ? isBooleanArray(content) : false) ? content : THROW_CCE(), size);
  };
  BooleanArraySerializer_0.$metadata$ = objectMeta('BooleanArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function _set_buffer__uxh4x5($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function CharArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  CharArrayBuilder.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  CharArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  CharArrayBuilder.prototype.append_y20c3x_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  CharArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf(this.buffer_1, this.position_1);
  };
  CharArrayBuilder.$metadata$ = classMeta('CharArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function _set_buffer__uxh4x5_0($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_0($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_0($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function DoubleArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  DoubleArrayBuilder.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  DoubleArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_0(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  DoubleArrayBuilder.prototype.append_g44bp4_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  DoubleArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_0(this.buffer_1, this.position_1);
  };
  DoubleArrayBuilder.$metadata$ = classMeta('DoubleArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function _set_buffer__uxh4x5_1($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_1($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_1($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function FloatArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  FloatArrayBuilder.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  FloatArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_1(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  FloatArrayBuilder.prototype.append_urs3el_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  FloatArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_1(this.buffer_1, this.position_1);
  };
  FloatArrayBuilder.$metadata$ = classMeta('FloatArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function _set_buffer__uxh4x5_2($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_2($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_2($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function LongArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  LongArrayBuilder.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  LongArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_2(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  LongArrayBuilder.prototype.append_gvce4t_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  LongArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_2(this.buffer_1, this.position_1);
  };
  LongArrayBuilder.$metadata$ = classMeta('LongArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function _set_buffer__uxh4x5_3($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_3($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_3($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function IntArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  IntArrayBuilder.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  IntArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_3(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  IntArrayBuilder.prototype.append_da0tyi_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  IntArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_3(this.buffer_1, this.position_1);
  };
  IntArrayBuilder.$metadata$ = classMeta('IntArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function _set_buffer__uxh4x5_4($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_4($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_4($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function ShortArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  ShortArrayBuilder.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  ShortArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_4(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  ShortArrayBuilder.prototype.append_piqb6l_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ShortArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_4(this.buffer_1, this.position_1);
  };
  ShortArrayBuilder.$metadata$ = classMeta('ShortArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function _set_buffer__uxh4x5_5($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_5($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_5($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function ByteArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  ByteArrayBuilder.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  ByteArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_5(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  ByteArrayBuilder.prototype.append_jiz7k1_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  ByteArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_5(this.buffer_1, this.position_1);
  };
  ByteArrayBuilder.$metadata$ = classMeta('ByteArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function _set_buffer__uxh4x5_6($this, _set____db54di) {
    $this.buffer_1 = _set____db54di;
  }
  function _get_buffer__tgqkad_6($this) {
    return $this.buffer_1;
  }
  function _set_position__5hlfea_6($this, _set____db54di) {
    $this.position_1 = _set____db54di;
  }
  function BooleanArrayBuilder(bufferWithData) {
    PrimitiveArrayBuilder.call(this);
    this.buffer_1 = bufferWithData;
    this.position_1 = bufferWithData.length;
    this.ensureCapacity_ignus8_k$(10);
  }
  BooleanArrayBuilder.prototype.get_position_jfponi_k$ = function () {
    return this.position_1;
  };
  BooleanArrayBuilder.prototype.ensureCapacity_ignus8_k$ = function (requiredCapacity) {
    if (this.buffer_1.length < requiredCapacity)
      this.buffer_1 = copyOf_6(this.buffer_1, coerceAtLeast(requiredCapacity, imul(this.buffer_1.length, 2)));
  };
  BooleanArrayBuilder.prototype.append_l5nnnz_k$ = function (c) {
    this.ensureCapacity$default_ya9857_k$(0, 1, null);
    var tmp = this.buffer_1;
    var tmp0_this = this;
    var tmp1 = tmp0_this.position_1;
    tmp0_this.position_1 = tmp1 + 1 | 0;
    tmp[tmp1] = c;
  };
  BooleanArrayBuilder.prototype.build_1k0s4u_k$ = function () {
    return copyOf_6(this.buffer_1, this.position_1);
  };
  BooleanArrayBuilder.$metadata$ = classMeta('BooleanArrayBuilder', undefined, undefined, undefined, undefined, PrimitiveArrayBuilder.prototype);
  function get_INITIAL_SIZE() {
    return INITIAL_SIZE;
  }
  var INITIAL_SIZE;
  function get_BUILTIN_SERIALIZERS() {
    init_properties_Primitives_kt_u7dn2q();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor('kotlin.String', STRING_getInstance());
  }
  StringSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  StringSerializer.prototype.serialize_xxlebn_k$ = function (encoder, value) {
    return encoder.encodeString_90sumj_k$(value);
  };
  StringSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_xxlebn_k$(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  StringSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeString_x3hxsx_k$();
  };
  StringSerializer.$metadata$ = objectMeta('StringSerializer', [KSerializer]);
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor('kotlin.Char', CHAR_getInstance());
  }
  CharSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  CharSerializer.prototype.serialize_t91c8o_k$ = function (encoder, value) {
    return encoder.encodeChar_kkx54x_k$(value);
  };
  CharSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_t91c8o_k$(encoder, value instanceof Char ? value.value_1 : THROW_CCE());
  };
  CharSerializer.prototype.deserialize_a5cptt_k$ = function (decoder) {
    return decoder.decodeChar_dc2jtx_k$();
  };
  CharSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return new Char(this.deserialize_a5cptt_k$(decoder));
  };
  CharSerializer.$metadata$ = objectMeta('CharSerializer', [KSerializer]);
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor('kotlin.Double', DOUBLE_getInstance());
  }
  DoubleSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  DoubleSerializer.prototype.serialize_jhnp8j_k$ = function (encoder, value) {
    return encoder.encodeDouble_79ztsb_k$(value);
  };
  DoubleSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_jhnp8j_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  DoubleSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeDouble_ur8l0f_k$();
  };
  DoubleSerializer.$metadata$ = objectMeta('DoubleSerializer', [KSerializer]);
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor('kotlin.Float', FLOAT_getInstance());
  }
  FloatSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  FloatSerializer.prototype.serialize_4f2ixk_k$ = function (encoder, value) {
    return encoder.encodeFloat_f5fde1_k$(value);
  };
  FloatSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_4f2ixk_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  FloatSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeFloat_jcnrwu_k$();
  };
  FloatSerializer.$metadata$ = objectMeta('FloatSerializer', [KSerializer]);
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor('kotlin.Long', LONG_getInstance());
  }
  LongSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  LongSerializer.prototype.serialize_95a0ia_k$ = function (encoder, value) {
    return encoder.encodeLong_rk3ab9_k$(value);
  };
  LongSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_95a0ia_k$(encoder, value instanceof Long ? value : THROW_CCE());
  };
  LongSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeLong_jzt186_k$();
  };
  LongSerializer.$metadata$ = objectMeta('LongSerializer', [KSerializer]);
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor('kotlin.Int', INT_getInstance());
  }
  IntSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  IntSerializer.prototype.serialize_ui7jaz_k$ = function (encoder, value) {
    return encoder.encodeInt_5vxmon_k$(value);
  };
  IntSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_ui7jaz_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  IntSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeInt_8iq8f5_k$();
  };
  IntSerializer.$metadata$ = objectMeta('IntSerializer', [KSerializer]);
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor('kotlin.Short', SHORT_getInstance());
  }
  ShortSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  ShortSerializer.prototype.serialize_tz9ag_k$ = function (encoder, value) {
    return encoder.encodeShort_rh3vxz_k$(value);
  };
  ShortSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_tz9ag_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ShortSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeShort_jjqk32_k$();
  };
  ShortSerializer.$metadata$ = objectMeta('ShortSerializer', [KSerializer]);
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor('kotlin.Byte', BYTE_getInstance());
  }
  ByteSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  ByteSerializer.prototype.serialize_bswtxi_k$ = function (encoder, value) {
    return encoder.encodeByte_gpyndp_k$(value);
  };
  ByteSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_bswtxi_k$(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  ByteSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeByte_jzz7je_k$();
  };
  ByteSerializer.$metadata$ = objectMeta('ByteSerializer', [KSerializer]);
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.descriptor_1 = new PrimitiveSerialDescriptor('kotlin.Boolean', BOOLEAN_getInstance());
  }
  BooleanSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  BooleanSerializer.prototype.serialize_bl0ez0_k$ = function (encoder, value) {
    return encoder.encodeBoolean_6cztl5_k$(value);
  };
  BooleanSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_bl0ez0_k$(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  BooleanSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    return decoder.decodeBoolean_m0aca_k$();
  };
  BooleanSerializer.$metadata$ = objectMeta('BooleanSerializer', [KSerializer]);
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.$$delegate_0__1 = new ObjectSerializer('kotlin.Unit', Unit_getInstance());
  }
  UnitSerializer.prototype.get_descriptor_wjt6a0_k$ = function () {
    return this.$$delegate_0__1.get_descriptor_wjt6a0_k$();
  };
  UnitSerializer.prototype.deserialize_a513f7_k$ = function (decoder) {
    this.$$delegate_0__1.deserialize_2t41fm_k$(decoder);
  };
  UnitSerializer.prototype.deserialize_2t41fm_k$ = function (decoder) {
    this.deserialize_a513f7_k$(decoder);
    return Unit_getInstance();
  };
  UnitSerializer.prototype.serialize_x908om_k$ = function (encoder, value) {
    this.$$delegate_0__1.serialize_32qylj_k$(encoder, Unit_getInstance());
  };
  UnitSerializer.prototype.serialize_32qylj_k$ = function (encoder, value) {
    return this.serialize_x908om_k$(encoder, value instanceof Unit ? value : THROW_CCE());
  };
  UnitSerializer.$metadata$ = objectMeta('UnitSerializer', [KSerializer]);
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    this.serialName_1 = serialName;
    this.kind_1 = kind;
  }
  PrimitiveSerialDescriptor.prototype.get_serialName_u2rqhk_k$ = function () {
    return this.serialName_1;
  };
  PrimitiveSerialDescriptor.prototype.get_kind_wop7ml_k$ = function () {
    return this.kind_1;
  };
  PrimitiveSerialDescriptor.prototype.get_elementsCount_288r0x_k$ = function () {
    return 0;
  };
  PrimitiveSerialDescriptor.prototype.getElementName_ykpypc_k$ = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor.prototype.getElementIndex_2hwbkl_k$ = function (name) {
    error(this);
  };
  PrimitiveSerialDescriptor.prototype.isElementOptional_c3hgb3_k$ = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor.prototype.getElementDescriptor_sqz94k_k$ = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor.prototype.getElementAnnotations_a57oar_k$ = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor.prototype.toString = function () {
    return 'PrimitiveDescriptor(' + this.serialName_1 + ')';
  };
  PrimitiveSerialDescriptor.$metadata$ = classMeta('PrimitiveSerialDescriptor', [SerialDescriptor]);
  var properties_initialized_Primitives_kt_6dpii6;
  function init_properties_Primitives_kt_u7dn2q() {
    if (properties_initialized_Primitives_kt_6dpii6) {
    } else {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().get_stringClass_bik2gy_k$(), serializer(StringCompanionObject_getInstance())), to(getKClass(Char), serializer_0(Companion_getInstance())), to(PrimitiveClasses_getInstance().get_charArrayClass_7lhfoe_k$(), CharArraySerializer()), to(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$(), serializer_1(DoubleCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_doubleArrayClass_84hee1_k$(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$(), serializer_2(FloatCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_floatArrayClass_qngmha_k$(), FloatArraySerializer()), to(getKClass(Long), serializer_3(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().get_longArrayClass_v379a4_k$(), LongArraySerializer()), to(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$(), serializer_4(IntCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_intArrayClass_h44pbv_k$(), IntArraySerializer()), to(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$(), serializer_5(ShortCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_shortArrayClass_c1p7wy_k$(), ShortArraySerializer()), to(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$(), serializer_6(ByteCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_byteArrayClass_57my8g_k$(), ByteArraySerializer()), to(PrimitiveClasses_getInstance().get_booleanClass_d285fr_k$(), serializer_7(BooleanCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().get_booleanArrayClass_lnbwea_k$(), BooleanArraySerializer()), to(getKClass(Unit), serializer_8(Unit_getInstance()))]);
    }
  }
  function get_NULL() {
    init_properties_Tuples_kt_v8bvox();
    return NULL;
  }
  var NULL;
  var properties_initialized_Tuples_kt_3vs7ar;
  function init_properties_Tuples_kt_v8bvox() {
    if (properties_initialized_Tuples_kt_3vs7ar) {
    } else {
      properties_initialized_Tuples_kt_3vs7ar = true;
      NULL = new Object();
    }
  }
  function get_EmptySerializersModule() {
    init_properties_SerializersModule_kt_swldyf();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  SerializersModule.prototype.getContextual_715qcj_k$ = function (kclass) {
    return this.getContextual_3ymxok_k$(kclass, emptyList());
  };
  SerializersModule.prototype.getContextual$default_ocirm0_k$ = function (kClass, typeArgumentsSerializers, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      typeArgumentsSerializers = emptyList();
    return $handler == null ? this.getContextual_3ymxok_k$(kClass, typeArgumentsSerializers) : $handler(kClass, typeArgumentsSerializers);
  };
  SerializersModule.$metadata$ = classMeta('SerializersModule');
  function _get_class2ContextualFactory__qh9mum($this) {
    return $this.class2ContextualFactory_1;
  }
  function _get_polyBase2DefaultSerializerProvider__mm2oxw($this) {
    return $this.polyBase2DefaultSerializerProvider_1;
  }
  function _get_polyBase2NamedSerializers__2zbzbo($this) {
    return $this.polyBase2NamedSerializers_1;
  }
  function _get_polyBase2DefaultDeserializerProvider__uja6n9($this) {
    return $this.polyBase2DefaultDeserializerProvider_1;
  }
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider) {
    SerializersModule.call(this);
    this.class2ContextualFactory_1 = class2ContextualFactory;
    this.polyBase2Serializers_1 = polyBase2Serializers;
    this.polyBase2DefaultSerializerProvider_1 = polyBase2DefaultSerializerProvider;
    this.polyBase2NamedSerializers_1 = polyBase2NamedSerializers;
    this.polyBase2DefaultDeserializerProvider_1 = polyBase2DefaultDeserializerProvider;
  }
  SerialModuleImpl.prototype.get_polyBase2Serializers_eilxqt_k$ = function () {
    return this.polyBase2Serializers_1;
  };
  SerialModuleImpl.prototype.getPolymorphic_1pjrjm_k$ = function (baseClass, value) {
    if (!isInstanceOf(value, baseClass))
      return null;
    var tmp0_safe_receiver = this.polyBase2Serializers_1.get_1mhr4y_k$(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_1mhr4y_k$(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.polyBase2DefaultSerializerProvider_1.get_1mhr4y_k$(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  SerialModuleImpl.prototype.getPolymorphic_gixe6f_k$ = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.polyBase2NamedSerializers_1.get_1mhr4y_k$(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      {
        tmp$ret$0 = ((!(tmp0_safe_receiver == null) ? isInterface(tmp0_safe_receiver, Map) : false) ? tmp0_safe_receiver : THROW_CCE()).get_1mhr4y_k$(serializedClassName);
      }
      tmp = tmp$ret$0;
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.polyBase2DefaultDeserializerProvider_1.get_1mhr4y_k$(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  SerialModuleImpl.prototype.getContextual_3ymxok_k$ = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.class2ContextualFactory_1.get_1mhr4y_k$(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.invoke_wrqehj_k$(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  SerialModuleImpl.prototype.dumpTo_q6va1n_k$ = function (collector) {
    {
      var tmp0_forEach = this.class2ContextualFactory_1;
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      }
      var tmp0_iterator = tmp$ret$0;
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        {
          var tmp$ret$1;
          {
            tmp$ret$1 = element.get_key_18j28a_k$();
          }
          var kclass = tmp$ret$1;
          var tmp$ret$2;
          {
            tmp$ret$2 = element.get_value_j01efc_k$();
          }
          var serial = tmp$ret$2;
          var tmp0_subject = serial;
          if (tmp0_subject instanceof Argless) {
            var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
            var tmp_0 = serial.serializer_1;
            collector.contextual_7ekeez_k$(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
          } else {
            if (tmp0_subject instanceof WithTypeArguments)
              collector.contextual_e1eobl_k$(kclass, serial.provider_1);
          }
        }
      }
    }
    {
      var tmp1_forEach = this.polyBase2Serializers_1;
      var tmp$ret$3;
      {
        tmp$ret$3 = tmp1_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      }
      var tmp0_iterator_0 = tmp$ret$3;
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        {
          var tmp$ret$4;
          {
            tmp$ret$4 = element_0.get_key_18j28a_k$();
          }
          var baseClass = tmp$ret$4;
          var tmp$ret$5;
          {
            tmp$ret$5 = element_0.get_value_j01efc_k$();
          }
          var classMap = tmp$ret$5;
          {
            var tmp$ret$6;
            {
              tmp$ret$6 = classMap.get_entries_p20ztl_k$().iterator_jk1svi_k$();
            }
            var tmp0_iterator_1 = tmp$ret$6;
            while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
              var element_1 = tmp0_iterator_1.next_20eer_k$();
              {
                var tmp$ret$7;
                {
                  tmp$ret$7 = element_1.get_key_18j28a_k$();
                }
                var actualClass = tmp$ret$7;
                var tmp$ret$8;
                {
                  tmp$ret$8 = element_1.get_value_j01efc_k$();
                }
                var serializer = tmp$ret$8;
                var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
                var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
                var tmp$ret$9;
                {
                  tmp$ret$9 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
                }
                collector.polymorphic_2hf1qx_k$(tmp_1, tmp_2, tmp$ret$9);
              }
            }
          }
        }
      }
    }
    {
      var tmp2_forEach = this.polyBase2DefaultSerializerProvider_1;
      var tmp$ret$10;
      {
        tmp$ret$10 = tmp2_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      }
      var tmp0_iterator_2 = tmp$ret$10;
      while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
        var element_2 = tmp0_iterator_2.next_20eer_k$();
        {
          var tmp$ret$11;
          {
            tmp$ret$11 = element_2.get_key_18j28a_k$();
          }
          var baseClass_0 = tmp$ret$11;
          var tmp$ret$12;
          {
            tmp$ret$12 = element_2.get_value_j01efc_k$();
          }
          var provider = tmp$ret$12;
          var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
          collector.polymorphicDefaultSerializer_mjilks_k$(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
        }
      }
    }
    {
      var tmp3_forEach = this.polyBase2DefaultDeserializerProvider_1;
      var tmp$ret$13;
      {
        tmp$ret$13 = tmp3_forEach.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      }
      var tmp0_iterator_3 = tmp$ret$13;
      while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
        var element_3 = tmp0_iterator_3.next_20eer_k$();
        {
          var tmp$ret$14;
          {
            tmp$ret$14 = element_3.get_key_18j28a_k$();
          }
          var baseClass_1 = tmp$ret$14;
          var tmp$ret$15;
          {
            tmp$ret$15 = element_3.get_value_j01efc_k$();
          }
          var provider_0 = tmp$ret$15;
          var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
          collector.polymorphicDefaultDeserializer_1n0ayq_k$(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
        }
      }
    }
  };
  SerialModuleImpl.$metadata$ = classMeta('SerialModuleImpl', undefined, undefined, undefined, undefined, SerializersModule.prototype);
  function Argless(serializer) {
    ContextualProvider.call(this);
    this.serializer_1 = serializer;
  }
  Argless.prototype.get_serializer_u29zhh_k$ = function () {
    return this.serializer_1;
  };
  Argless.prototype.invoke_wrqehj_k$ = function (typeArgumentsSerializers) {
    return this.serializer_1;
  };
  Argless.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Argless) {
      tmp = equals(other.serializer_1, this.serializer_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  Argless.prototype.hashCode = function () {
    return hashCode(this.serializer_1);
  };
  Argless.$metadata$ = classMeta('Argless', undefined, undefined, undefined, undefined, ContextualProvider.prototype);
  function WithTypeArguments(provider) {
    ContextualProvider.call(this);
    this.provider_1 = provider;
  }
  WithTypeArguments.prototype.get_provider_mw8vcq_k$ = function () {
    return this.provider_1;
  };
  WithTypeArguments.prototype.invoke_wrqehj_k$ = function (typeArgumentsSerializers) {
    return this.provider_1(typeArgumentsSerializers);
  };
  WithTypeArguments.$metadata$ = classMeta('WithTypeArguments', undefined, undefined, undefined, undefined, ContextualProvider.prototype);
  function ContextualProvider() {
  }
  ContextualProvider.$metadata$ = classMeta('ContextualProvider');
  var properties_initialized_SerializersModule_kt_fjigjn;
  function init_properties_SerializersModule_kt_swldyf() {
    if (properties_initialized_SerializersModule_kt_fjigjn) {
    } else {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap());
    }
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  SerializersModuleCollector.$metadata$ = interfaceMeta('SerializersModuleCollector');
  function isInstanceOf(_this__u8e3s4, kclass) {
    return kclass.isInstance_6tn68w_k$(_this__u8e3s4);
  }
  function toNativeArrayImpl(_this__u8e3s4, eClass) {
    var tmp$ret$0;
    {
      tmp$ret$0 = copyToArray(_this__u8e3s4);
    }
    return tmp$ret$0;
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  //region block: post-declaration
  SerialDescriptorImpl.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  SerialDescriptorImpl.prototype.get_isInline_usk17w_k$ = get_isInline;
  ListLikeDescriptor.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  ListLikeDescriptor.prototype.get_isInline_usk17w_k$ = get_isInline;
  ListLikeDescriptor.prototype.get_annotations_20dirp_k$ = get_annotations;
  PrimitiveArrayDescriptor.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  PrimitiveArrayDescriptor.prototype.get_isInline_usk17w_k$ = get_isInline;
  PrimitiveArrayDescriptor.prototype.get_annotations_20dirp_k$ = get_annotations;
  ArrayClassDesc.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  ArrayClassDesc.prototype.get_isInline_usk17w_k$ = get_isInline;
  ArrayClassDesc.prototype.get_annotations_20dirp_k$ = get_annotations;
  MapLikeDescriptor.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  MapLikeDescriptor.prototype.get_isInline_usk17w_k$ = get_isInline;
  MapLikeDescriptor.prototype.get_annotations_20dirp_k$ = get_annotations;
  LinkedHashMapClassDesc.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  LinkedHashMapClassDesc.prototype.get_isInline_usk17w_k$ = get_isInline;
  LinkedHashMapClassDesc.prototype.get_annotations_20dirp_k$ = get_annotations;
  HashMapClassDesc.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  HashMapClassDesc.prototype.get_isInline_usk17w_k$ = get_isInline;
  HashMapClassDesc.prototype.get_annotations_20dirp_k$ = get_annotations;
  ArrayListClassDesc.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  ArrayListClassDesc.prototype.get_isInline_usk17w_k$ = get_isInline;
  ArrayListClassDesc.prototype.get_annotations_20dirp_k$ = get_annotations;
  LinkedHashSetClassDesc.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  LinkedHashSetClassDesc.prototype.get_isInline_usk17w_k$ = get_isInline;
  LinkedHashSetClassDesc.prototype.get_annotations_20dirp_k$ = get_annotations;
  HashSetClassDesc.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  HashSetClassDesc.prototype.get_isInline_usk17w_k$ = get_isInline;
  HashSetClassDesc.prototype.get_annotations_20dirp_k$ = get_annotations;
  PrimitiveSerialDescriptor.prototype.get_isNullable_67sy7o_k$ = get_isNullable;
  PrimitiveSerialDescriptor.prototype.get_isInline_usk17w_k$ = get_isInline;
  PrimitiveSerialDescriptor.prototype.get_annotations_20dirp_k$ = get_annotations;
  //endregion
  //region block: init
  ARRAY_NAME = 'kotlin.Array';
  LINKED_HASH_MAP_NAME = 'kotlin.collections.LinkedHashMap';
  HASH_MAP_NAME = 'kotlin.collections.HashMap';
  ARRAY_LIST_NAME = 'kotlin.collections.ArrayList';
  LINKED_HASH_SET_NAME = 'kotlin.collections.LinkedHashSet';
  HASH_SET_NAME = 'kotlin.collections.HashSet';
  INITIAL_SIZE = 10;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ListSerializer;
  _.$_$.b = KSerializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core-js-ir.js.map