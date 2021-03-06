//
// Autogenerated by Thrift Compiler (0.10.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


TExtArgumentType = {
  'Int8' : 0,
  'Int16' : 1,
  'Int32' : 2,
  'Int64' : 3,
  'Float' : 4,
  'Double' : 5,
  'Void' : 6,
  'PInt8' : 7,
  'PInt16' : 8,
  'PInt32' : 9,
  'PInt64' : 10,
  'PFloat' : 11,
  'PDouble' : 12,
  'PBool' : 13,
  'Bool' : 14,
  'ArrayInt8' : 15,
  'ArrayInt16' : 16,
  'ArrayInt32' : 17,
  'ArrayInt64' : 18,
  'ArrayFloat' : 19,
  'ArrayDouble' : 20,
  'ArrayBool' : 21,
  'GeoPoint' : 22,
  'GeoLineString' : 23,
  'Cursor' : 24,
  'GeoPolygon' : 25,
  'GeoMultiPolygon' : 26,
  'ColumnInt8' : 27,
  'ColumnInt16' : 28,
  'ColumnInt32' : 29,
  'ColumnInt64' : 30,
  'ColumnFloat' : 31,
  'ColumnDouble' : 32,
  'ColumnBool' : 33
};
TOutputBufferSizeType = {
  'kConstant' : 0,
  'kUserSpecifiedConstantParameter' : 1,
  'kUserSpecifiedRowMultiplier' : 2
};
TUserDefinedFunction = function(args) {
  this.name = null;
  this.argTypes = null;
  this.retType = null;
  if (args) {
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.argTypes !== undefined && args.argTypes !== null) {
      this.argTypes = Thrift.copyList(args.argTypes, [null]);
    }
    if (args.retType !== undefined && args.retType !== null) {
      this.retType = args.retType;
    }
  }
};
TUserDefinedFunction.prototype = {};
TUserDefinedFunction.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.argTypes = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = input.readI32().value;
          this.argTypes.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.retType = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TUserDefinedFunction.prototype.write = function(output) {
  output.writeStructBegin('TUserDefinedFunction');
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.argTypes !== null && this.argTypes !== undefined) {
    output.writeFieldBegin('argTypes', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.I32, this.argTypes.length);
    for (var iter7 in this.argTypes)
    {
      if (this.argTypes.hasOwnProperty(iter7))
      {
        iter7 = this.argTypes[iter7];
        output.writeI32(iter7);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.retType !== null && this.retType !== undefined) {
    output.writeFieldBegin('retType', Thrift.Type.I32, 3);
    output.writeI32(this.retType);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TUserDefinedTableFunction = function(args) {
  this.name = null;
  this.sizerType = null;
  this.sizerArgPos = null;
  this.inputArgTypes = null;
  this.outputArgTypes = null;
  this.sqlArgTypes = null;
  if (args) {
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.sizerType !== undefined && args.sizerType !== null) {
      this.sizerType = args.sizerType;
    }
    if (args.sizerArgPos !== undefined && args.sizerArgPos !== null) {
      this.sizerArgPos = args.sizerArgPos;
    }
    if (args.inputArgTypes !== undefined && args.inputArgTypes !== null) {
      this.inputArgTypes = Thrift.copyList(args.inputArgTypes, [null]);
    }
    if (args.outputArgTypes !== undefined && args.outputArgTypes !== null) {
      this.outputArgTypes = Thrift.copyList(args.outputArgTypes, [null]);
    }
    if (args.sqlArgTypes !== undefined && args.sqlArgTypes !== null) {
      this.sqlArgTypes = Thrift.copyList(args.sqlArgTypes, [null]);
    }
  }
};
TUserDefinedTableFunction.prototype = {};
TUserDefinedTableFunction.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.sizerType = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.sizerArgPos = input.readI32().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.LIST) {
        var _size8 = 0;
        var _rtmp312;
        this.inputArgTypes = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = input.readI32().value;
          this.inputArgTypes.push(elem14);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.LIST) {
        var _size15 = 0;
        var _rtmp319;
        this.outputArgTypes = [];
        var _etype18 = 0;
        _rtmp319 = input.readListBegin();
        _etype18 = _rtmp319.etype;
        _size15 = _rtmp319.size;
        for (var _i20 = 0; _i20 < _size15; ++_i20)
        {
          var elem21 = null;
          elem21 = input.readI32().value;
          this.outputArgTypes.push(elem21);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.LIST) {
        var _size22 = 0;
        var _rtmp326;
        this.sqlArgTypes = [];
        var _etype25 = 0;
        _rtmp326 = input.readListBegin();
        _etype25 = _rtmp326.etype;
        _size22 = _rtmp326.size;
        for (var _i27 = 0; _i27 < _size22; ++_i27)
        {
          var elem28 = null;
          elem28 = input.readI32().value;
          this.sqlArgTypes.push(elem28);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TUserDefinedTableFunction.prototype.write = function(output) {
  output.writeStructBegin('TUserDefinedTableFunction');
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.sizerType !== null && this.sizerType !== undefined) {
    output.writeFieldBegin('sizerType', Thrift.Type.I32, 2);
    output.writeI32(this.sizerType);
    output.writeFieldEnd();
  }
  if (this.sizerArgPos !== null && this.sizerArgPos !== undefined) {
    output.writeFieldBegin('sizerArgPos', Thrift.Type.I32, 3);
    output.writeI32(this.sizerArgPos);
    output.writeFieldEnd();
  }
  if (this.inputArgTypes !== null && this.inputArgTypes !== undefined) {
    output.writeFieldBegin('inputArgTypes', Thrift.Type.LIST, 4);
    output.writeListBegin(Thrift.Type.I32, this.inputArgTypes.length);
    for (var iter29 in this.inputArgTypes)
    {
      if (this.inputArgTypes.hasOwnProperty(iter29))
      {
        iter29 = this.inputArgTypes[iter29];
        output.writeI32(iter29);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.outputArgTypes !== null && this.outputArgTypes !== undefined) {
    output.writeFieldBegin('outputArgTypes', Thrift.Type.LIST, 5);
    output.writeListBegin(Thrift.Type.I32, this.outputArgTypes.length);
    for (var iter30 in this.outputArgTypes)
    {
      if (this.outputArgTypes.hasOwnProperty(iter30))
      {
        iter30 = this.outputArgTypes[iter30];
        output.writeI32(iter30);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.sqlArgTypes !== null && this.sqlArgTypes !== undefined) {
    output.writeFieldBegin('sqlArgTypes', Thrift.Type.LIST, 6);
    output.writeListBegin(Thrift.Type.I32, this.sqlArgTypes.length);
    for (var iter31 in this.sqlArgTypes)
    {
      if (this.sqlArgTypes.hasOwnProperty(iter31))
      {
        iter31 = this.sqlArgTypes[iter31];
        output.writeI32(iter31);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

