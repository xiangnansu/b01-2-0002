"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classStaticPrivateMethodGet(receiver, classConstructor, method) { _classCheckPrivateStaticAccess(receiver, classConstructor); return method; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _element = /*#__PURE__*/new WeakMap();

var _running = /*#__PURE__*/new WeakMap();

var AutoPlay = /*#__PURE__*/function () {
  function AutoPlay(_click) {
    var _this = this;

    _classCallCheck(this, AutoPlay);

    _classPrivateFieldInitSpec(this, _element, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _running, {
      writable: true,
      value: void 0
    });

    if (!AutoPlay.instance) {
      _classPrivateFieldSet(this, _element, new Element(document.querySelector(".autoplay")));

      _classPrivateFieldSet(this, _running, false);

      var handlers = {
        click: function click() {
          if (_classPrivateFieldGet(_this, _running)) {
            _classPrivateFieldGet(_this, _element).image = "url(shapes/autoplay-play.svg)";
          } else {
            _classPrivateFieldGet(_this, _element).image = "url(shapes/autoplay-pause.svg)";
          }

          _classPrivateFieldSet(_this, _running, !_classPrivateFieldGet(_this, _running));

          _click && _click(_classPrivateFieldGet(_this, _running));
        },
        pointerover: function pointerover(left, top) {
          Sound.pointerover.play();
        }
      };

      _classPrivateFieldGet(this, _element).addEventListener("click", handlers.click);

      _classPrivateFieldGet(this, _element).addEventListener("pointerover", handlers.pointerover);
    }

    return AutoPlay.instance || (AutoPlay.instance = this);
  }

  _createClass(AutoPlay, [{
    key: "reset",
    value: function reset() {
      _classPrivateFieldGet(this, _element).image = "url(shapes/autoplay-play.svg)";

      _classPrivateFieldSet(this, _running, false);
    }
  }]);

  return AutoPlay;
}();

var BackgroundMusic = /*#__PURE__*/_createClass(function BackgroundMusic() {
  _classCallCheck(this, BackgroundMusic);

  if (!BackgroundMusic.instance) {
    var audio = Sound.background;
    audio && audio.addEventListener("ended", function () {
      this.currentTime = 0;
      this.play();
    });

    var autoplay = function autoplay() {
      audio && (audio.muted = true);
      audio && audio.play();
      audio && (audio.muted = false);

      if (audio && audio.duration > 0 && audio && audio.paused === false) {
        document.removeEventListener("pointerdown", autoplay);
      } else {
        setTimeout(function () {
          document.dispatchEvent(new Event("pointerdown"));
        }, 100);
      }
    };

    document.addEventListener("pointerdown", autoplay);
  }

  return BackgroundMusic.instance || (BackgroundMusic.instance = this);
});

var _element2 = /*#__PURE__*/new WeakMap();

var _enabe = /*#__PURE__*/new WeakMap();

var Cursor = /*#__PURE__*/function () {
  function Cursor(domelement) {
    var _this2 = this;

    _classCallCheck(this, Cursor);

    _classPrivateFieldInitSpec(this, _element2, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _enabe, {
      writable: true,
      value: void 0
    });

    _defineProperty(this, "$pointerdown", void 0);

    _defineProperty(this, "$pointermove", void 0);

    _defineProperty(this, "$pointerup", void 0);

    _defineProperty(this, "$visible", void 0);

    _classPrivateFieldSet(this, _element2, new Element(domelement));

    _classPrivateFieldSet(this, _enabe, true);

    var click = function click(left, top, dispatchEvent) {
      if (_classPrivateFieldGet(_this2, _enabe) || dispatchEvent) {
        _classStaticPrivateFieldSpecSet(Cursor, Cursor, _left, left);

        _classStaticPrivateFieldSpecSet(Cursor, Cursor, _top, top);

        if (_this2.visible) {
          _this2.click && _this2.click(left, top);
        }
      }
    };

    var pointerdown = function pointerdown(left, top, dispatchEvent) {
      if (_classPrivateFieldGet(_this2, _enabe) || dispatchEvent) {
        _classStaticPrivateFieldSpecSet(Cursor, Cursor, _left, left);

        _classStaticPrivateFieldSpecSet(Cursor, Cursor, _top, top);

        if (_this2.visible) {
          _classPrivateFieldGet(_this2, _element2).left = left;
          _classPrivateFieldGet(_this2, _element2).top = top;
          _this2.$pointerdown && _this2.$pointerdown(left, top);
        }
      }
    };

    var pointermove = function pointermove(left, top, dispatchEvent) {
      if (_classPrivateFieldGet(_this2, _enabe) || dispatchEvent) {
        _classStaticPrivateFieldSpecSet(Cursor, Cursor, _left, left);

        _classStaticPrivateFieldSpecSet(Cursor, Cursor, _top, top);

        if (_this2.visible) {
          _classPrivateFieldGet(_this2, _element2).left = left;
          _classPrivateFieldGet(_this2, _element2).top = top;
          _this2.$pointermove && _this2.$pointermove(left, top);
        }
      }
    };

    var pointerup = function pointerup(left, top, dispatchEvent) {
      if (_classPrivateFieldGet(_this2, _enabe) || dispatchEvent) {
        _classStaticPrivateFieldSpecSet(Cursor, Cursor, _left, left);

        _classStaticPrivateFieldSpecSet(Cursor, Cursor, _top, top);

        _this2.$pointerup && _this2.$pointerup(left, top);
      }
    };

    PointerEvent.addEventListener("click", this.domelement, click, false);
    PointerEvent.addEventListener("pointermove", this.domelement, pointermove, false);
    PointerEvent.addEventListener("pointerdown", this.domelement, pointerdown, false);
    PointerEvent.addEventListener("pointerup", this.domelement, pointerup, false);
  }

  _createClass(Cursor, [{
    key: "domelement",
    get: function get() {
      return _classPrivateFieldGet(this, _element2).domelement;
    }
  }, {
    key: "element",
    get: function get() {
      return _classPrivateFieldGet(this, _element2);
    }
  }, {
    key: "enable",
    set: function set(value) {
      _classPrivateFieldSet(this, _enabe, value);
    }
  }, {
    key: "style",
    get: function get() {
      return _classPrivateFieldGet(this, _element2).style;
    }
  }, {
    key: "visible",
    get: function get() {
      return _classPrivateFieldGet(this, _element2).visible;
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _element2).left = Cursor.left;
      _classPrivateFieldGet(this, _element2).top = Cursor.top;
      _classPrivateFieldGet(this, _element2).visible = value;
      this.$visible && this.$visible(value);
    }
  }], [{
    key: "left",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(Cursor, Cursor, _left);
    }
  }, {
    key: "top",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(Cursor, Cursor, _top);
    }
  }]);

  return Cursor;
}();

var _left = {
  writable: true,
  value: void 0
};
var _top = {
  writable: true,
  value: void 0
};

var _element3 = /*#__PURE__*/new WeakMap();

var _offsetX = /*#__PURE__*/new WeakMap();

var _offsetY = /*#__PURE__*/new WeakMap();

var _originalX = /*#__PURE__*/new WeakMap();

var _originalY = /*#__PURE__*/new WeakMap();

var Draggable = /*#__PURE__*/function () {
  function Draggable(domelement) {
    var _this3 = this;

    _classCallCheck(this, Draggable);

    _classPrivateFieldInitSpec(this, _element3, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _offsetX, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _offsetY, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _originalX, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _originalY, {
      writable: true,
      value: void 0
    });

    _defineProperty(this, "$dragend", void 0);

    _defineProperty(this, "$dragmove", void 0);

    _defineProperty(this, "$dragstart", void 0);

    _classPrivateFieldSet(this, _element3, new Element(domelement));

    var dragend = function dragend(left, top, dragger) {
      _classPrivateFieldGet(_this3, _element3).left = _classPrivateFieldGet(_this3, _originalX);
      _classPrivateFieldGet(_this3, _element3).top = _classPrivateFieldGet(_this3, _originalY);
      _this3.$dragend && _this3.$dragend(left, top, dragger);
    };

    var dragmove = function dragmove(left, top, dragger) {
      _classPrivateFieldGet(_this3, _element3).left = left + _classPrivateFieldGet(_this3, _offsetX);
      _classPrivateFieldGet(_this3, _element3).top = top + _classPrivateFieldGet(_this3, _offsetY);
      _this3.$dragmove && _this3.$dragmove(left, top, dragger);
    };

    var dragstart = function dragstart(left, top) {
      _classPrivateFieldSet(_this3, _offsetX, _classPrivateFieldGet(_this3, _element3).left - left);

      _classPrivateFieldSet(_this3, _offsetY, _classPrivateFieldGet(_this3, _element3).top - top);

      _classPrivateFieldSet(_this3, _originalX, _classPrivateFieldGet(_this3, _element3).left);

      _classPrivateFieldSet(_this3, _originalY, _classPrivateFieldGet(_this3, _element3).top);

      _this3.$dragstart && _this3.$dragstart(left, top);
      return _classPrivateFieldGet(_this3, _element3);
    };

    PointerEvent.addEventListener("dragend", _classPrivateFieldGet(this, _element3), dragend);
    PointerEvent.addEventListener("dragmove", _classPrivateFieldGet(this, _element3), dragmove);
    PointerEvent.addEventListener("dragstart", _classPrivateFieldGet(this, _element3), dragstart);
  }

  _createClass(Draggable, [{
    key: "domelement",
    get: function get() {
      return _classPrivateFieldGet(this, _element3).domelement;
    }
  }, {
    key: "element",
    get: function get() {
      return _classPrivateFieldGet(this, _element3);
    }
  }]);

  return Draggable;
}();

var _element4 = /*#__PURE__*/new WeakMap();

var Droppable = /*#__PURE__*/function () {
  function Droppable(domelement) {
    var _this4 = this;

    _classCallCheck(this, Droppable);

    _classPrivateFieldInitSpec(this, _element4, {
      writable: true,
      value: void 0
    });

    _defineProperty(this, "$dragout", void 0);

    _defineProperty(this, "$dragover", void 0);

    _defineProperty(this, "$drop", void 0);

    _classPrivateFieldSet(this, _element4, new Element(domelement));

    var dragout = function dragout(left, top, dragger) {
      _this4.$dragout && _this4.$dragout(left, top, dragger);
    };

    var dragover = function dragover(left, top, dragger) {
      _this4.$dragover && _this4.$dragover(left, top, dragger);
    };

    var drop = function drop(left, top, dragger) {
      _this4.$drop && _this4.$drop(left, top, dragger);
    };

    PointerEvent.addEventListener("dragout", _classPrivateFieldGet(this, _element4), dragout);
    PointerEvent.addEventListener("dragover", _classPrivateFieldGet(this, _element4), dragover);
    PointerEvent.addEventListener("drop", _classPrivateFieldGet(this, _element4), drop);
  }

  _createClass(Droppable, [{
    key: "domelement",
    get: function get() {
      return _classPrivateFieldGet(this, _element4).domelement;
    }
  }, {
    key: "element",
    get: function get() {
      return _classPrivateFieldGet(this, _element4);
    }
  }]);

  return Droppable;
}();

var _domelement = /*#__PURE__*/new WeakMap();

var Element = /*#__PURE__*/function () {
  function Element(domelement) {
    _classCallCheck(this, Element);

    _classPrivateFieldInitSpec(this, _domelement, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _domelement, domelement);
  }

  _createClass(Element, [{
    key: "bottom",
    get: function get() {
      return this.top + this.height;
    },
    set: function set(value) {
      this.top = value - this.height;
    }
  }, {
    key: "children",
    get: function get() {
      return _classPrivateFieldGet(this, _domelement).children;
    }
  }, {
    key: "domelement",
    get: function get() {
      return _classPrivateFieldGet(this, _domelement);
    }
  }, {
    key: "enable",
    get: function get() {
      return this.style["pointer-events"] === "none" ? false : true;
    },
    set: function set(value) {
      this.style["pointer-events"] = value ? "all" : "none";
    }
  }, {
    key: "height",
    get: function get() {
      return _classPrivateFieldGet(this, _domelement).getBoundingClientRect().height / frame.scale.y;
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _domelement).style["height"] = value + "px";
    }
  }, {
    key: "image",
    get: function get() {
      return this.style["background-image"];
    },
    set: function set(value) {
      this.style["background-image"] = value;
    }
  }, {
    key: "left",
    get: function get() {
      return (_classPrivateFieldGet(this, _domelement).getBoundingClientRect().left - frame.getBoundingClientRect().left) / frame.scale.x;
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _domelement).style["left"] = value - (1 - this.scale.x) * parseFloat(getComputedStyle(_classPrivateFieldGet(this, _domelement)).width) / 2.0 + "px";
    }
  }, {
    key: "rect",
    get: function get() {
      return {
        left: this.left,
        top: this.top,
        width: this.width,
        height: this.height,
        right: this.left + this.width,
        bottom: this.top + this.height
      };
    }
  }, {
    key: "right",
    get: function get() {
      return this.left + this.width;
    },
    set: function set(value) {
      this.left = value - this.width;
    }
  }, {
    key: "scale",
    get: function get() {
      var visible = this.visible;
      _classPrivateFieldGet(this, _domelement).style["display"] = "initial";
      var scale = {
        x: _classPrivateFieldGet(this, _domelement).getBoundingClientRect().width / _classPrivateFieldGet(this, _domelement).offsetWidth / frame.scale.x,
        y: _classPrivateFieldGet(this, _domelement).getBoundingClientRect().height / _classPrivateFieldGet(this, _domelement).offsetHeight / frame.scale.y
      };
      this.visible = visible;
      return scale;
    }
  }, {
    key: "style",
    get: function get() {
      return _classPrivateFieldGet(this, _domelement).style;
    }
  }, {
    key: "transform",
    get: function get() {
      return _classPrivateFieldGet(this, _domelement).style["transform"];
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _domelement).style["transform"] = value;
    }
  }, {
    key: "top",
    get: function get() {
      return (_classPrivateFieldGet(this, _domelement).getBoundingClientRect().top - frame.getBoundingClientRect().top) / frame.scale.y;
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _domelement).style["top"] = value - (1 - this.scale.y) * parseFloat(getComputedStyle(_classPrivateFieldGet(this, _domelement)).height) / 2.0 + "px";
    }
  }, {
    key: "visible",
    get: function get() {
      return getComputedStyle(_classPrivateFieldGet(this, _domelement)).display === "none" ? false : true;
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _domelement).style["display"] = value ? "block" : "none";
    }
  }, {
    key: "width",
    get: function get() {
      return _classPrivateFieldGet(this, _domelement).getBoundingClientRect().width / frame.scale.x;
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _domelement).style["width"] = value + "px";
    }
  }, {
    key: "zindex",
    get: function get() {
      return this.style["z-index"];
    },
    set: function set(value) {
      this.style["z-index"] = value;
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(type, handler, active) {
      PointerEvent.addEventListener(type, this, handler, active);
    }
  }, {
    key: "getBoundingClientRect",
    value: function getBoundingClientRect() {
      return _classPrivateFieldGet(this, _domelement).getBoundingClientRect();
    }
  }, {
    key: "getComputedStyle",
    value: function getComputedStyle() {
      return this.getComputedStyle(_classPrivateFieldGet(this, _domelement));
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, handler) {
      PointerEvent.removeEventListener(type, this, handler);
    }
  }]);

  return Element;
}();

var _element5 = /*#__PURE__*/new WeakMap();

var _buttons = /*#__PURE__*/new WeakMap();

var EndScreen = /*#__PURE__*/function () {
  function EndScreen(_click2) {
    var _this5 = this;

    _classCallCheck(this, EndScreen);

    _classPrivateFieldInitSpec(this, _element5, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _buttons, {
      writable: true,
      value: new Array()
    });

    if (!EndScreen.instance) {
      (function () {
        _classPrivateFieldSet(_this5, _element5, new Element(document.querySelector(".end-screen")));

        var handlers = {
          click: function click(index) {
            if (index === 0) {
              Sound.lose && (Sound.lose.pause(), Sound.lose.currentTime = 0);
              Sound.timeup && (Sound.timeup.pause(), Sound.timeup.currentTime = 0);
              Sound.win && (Sound.win.pause(), Sound.win.currentTime = 0);
              _this5.visible = false;
              _click2 && _click2();
            }
          },
          pointerout: function pointerout(index) {
            _classPrivateFieldGet(_this5, _buttons)[index].image = Image.EndScreen_pointerout;
          },
          pointerover: function pointerover(index) {
            Sound.pointerover.play();
            _classPrivateFieldGet(_this5, _buttons)[index].image = Image.EndScreen_pointerover;
          }
        };
        var buttons = document.querySelector(".end-screen > .end-screen-buttons");

        var _loop = function _loop(i) {
          _classPrivateFieldGet(_this5, _buttons).push(new Element(buttons.children[i]));

          _classPrivateFieldGet(_this5, _buttons)[i].addEventListener("click", function () {
            return handlers.click(i);
          });

          _classPrivateFieldGet(_this5, _buttons)[i].addEventListener("pointerout", function () {
            return handlers.pointerout(i);
          });

          _classPrivateFieldGet(_this5, _buttons)[i].addEventListener("pointerover", function () {
            return handlers.pointerover(i);
          });
        };

        for (var i = 0; i < buttons.childElementCount; i++) {
          _loop(i);
        }
      })();
    }

    return EndScreen.instance || (EndScreen.instance = this);
  }

  _createClass(EndScreen, [{
    key: "result",
    set: function set(value) {
      var result = new Element(document.querySelector(".end-screen > .end-screen-result"));

      switch (value) {
        case "lose":
          Sound.lose && Sound.lose.play();
          result.image = Image.EndScreen_lose;
          break;

        case "timeup":
          Sound.timeup && Sound.timeup.play();
          result.image = Image.EndScreen_timeup;
          break;

        case "win":
          Sound.win && Sound.win.play();
          result.image = Image.EndScreen_lose;
          break;
      }
    }
  }, {
    key: "score",
    set: function set(value) {
      document.querySelector(".end-screen > .end-screen-score > .end-screen-score-text").innerHTML = value;
      document.querySelector(".end-screen > .end-screen-score > .end-screen-score-point-text").style["left"] = value < 10 ? "192px" : value < 100 ? "219px" : "246px";
    }
  }, {
    key: "visible",
    get: function get() {
      return _classPrivateFieldGet(this, _element5).visible;
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _element5).visible = value;
    }
  }]);

  return EndScreen;
}();

var ExitButton = /*#__PURE__*/_createClass(function ExitButton() {
  _classCallCheck(this, ExitButton);

  if (!ExitButton.instance) {
    var element = new Element(document.querySelector(".exit-button"));
    var door1 = new Element(document.querySelector(".exit-button > .exit-button-door-1"));
    var text1 = new Element(document.querySelector(".exit-button > .exit-button-text-1"));
    var text2 = new Element(document.querySelector(".exit-button > .exit-button-text-2"));

    var pointerout = function pointerout(left, top) {
      element.style["right"] = "20px";
      element.style["width"] = "64px";
      door1.visible = false;
      text1.style["left"] = " -15px";
      text1.style["top"] = "2px";
      text2.style["right"] = "-5px";
      text2.style["bottom"] = "2px";
    };

    var pointerover = function pointerover(left, top) {
      Sound.exit.play();
      element.style["right"] = "15px";
      element.style["width"] = "90px";
      door1.visible = true;
      text1.style["left"] = " -10px";
      text1.style["top"] = "-5px";
      text2.style["right"] = "-5px";
      text2.style["bottom"] = "-5px";
    };

    element.addEventListener("pointerout", pointerout);
    element.addEventListener("pointerover", pointerover);
  }

  return ExitButton.instance || (ExitButton.instance = this);
});

var _height = /*#__PURE__*/new WeakMap();

var _width = /*#__PURE__*/new WeakMap();

var Frame = /*#__PURE__*/function (_Element) {
  _inherits(Frame, _Element);

  var _super = _createSuper(Frame);

  function Frame(domelement) {
    var _this6;

    _classCallCheck(this, Frame);

    _this6 = _super.call(this, domelement);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this6), _width, {
      get: void 0,
      set: _set_width
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this6), _height, {
      get: void 0,
      set: _set_height
    });

    return _this6;
  }

  _createClass(Frame, [{
    key: "height",
    get: function get() {
      return this.domelement.getBoundingClientRect().height;
    }
  }, {
    key: "scale",
    get: function get() {
      var visible = this.visible;
      this.domelement.style["display"] = "initial";
      var scale = {
        x: this.domelement.getBoundingClientRect().width / this.domelement.offsetWidth,
        y: this.domelement.getBoundingClientRect().height / this.domelement.offsetHeight
      };
      this.visible = visible;
      return scale;
    }
  }, {
    key: "width",
    get: function get() {
      return this.domelement.getBoundingClientRect().width;
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(type, handler) {
      this.domelement.addEventListener(type, handler);
    }
  }, {
    key: "getComputedStyle",
    value: function getComputedStyle() {
      return this.domelement.getComputedStyle(this.domelement);
    }
  }, {
    key: "removeChild",
    value: function removeChild(domelement) {
      return this.domelement.removeChild(domelement);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, handler) {
      this.domelement.removeEventListener(type, handler);
    }
  }]);

  return Frame;
}(Element);

function _set_height(value) {}

function _set_width(value) {}

var FullScreen = /*#__PURE__*/_createClass(function FullScreen() {
  _classCallCheck(this, FullScreen);

  if (!FullScreen.instance) {
    var element = new Element(document.querySelector(".fullscreen"));
    var fullscreen = false;

    var click = function click() {
      if (fullscreen && document.fullscreenElement !== null) {
        (document.exitFullscreen || document.webkitExitFullscreen).call(document);
        frame.transform = "translate(-50%, -50%) scale(1, 1)";
      } else {
        var requestFullscreen = function requestFullscreen() {
          var scale = window.innerWidth > window.innerHeight ? screen.height / 600 : screen.width / 800;
          frame.transform = "translate(-50%, -50%) scale(".concat(scale - 0.01, ", ").concat(scale - 0.01, ")");
        };

        var promise = (document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullScreen || document.documentElement.mozRequestFullScreen).call(document.documentElement);
        promise && promise.then(requestFullscreen) || setTimeout(requestFullscreen, 0.33);
      }

      fullscreen = !fullscreen;
    };

    var fullscreenchange = function fullscreenchange() {};

    var pointerover = function pointerover(left, top) {
      Sound.pointerover.play();
    };

    document.addEventListener('fullscreenchange', fullscreenchange);
    document.addEventListener('webkitfullscreenchange', fullscreenchange);
    element.addEventListener("click", click);
    element.addEventListener("pointerover", pointerover);
  }

  return FullScreen.instance || (FullScreen.instance = this);
});

var PointerEvent = /*#__PURE__*/function () {
  function PointerEvent() {
    _classCallCheck(this, PointerEvent);
  }

  _createClass(PointerEvent, null, [{
    key: "constructor",
    value: function constructor() {
      frame.addEventListener("click", _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _click3));
      frame.addEventListener("pointerdown", _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _pointerdown));
      frame.addEventListener("pointermove", _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _pointermove));
      frame.addEventListener("pointerup", _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _pointerup));
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(type, element, handler, active) {
      var listeners = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getListeners).call(PointerEvent, type);

      listeners.push({
        element: element,
        handler: handler,
        active: active === false ? false : true
      });
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(type, clientX, clientY) {
      var e = new Event(type);
      var frameScale = frame.scale;
      e.clientX = frame.getBoundingClientRect().left + clientX * frameScale.x;
      e.clientY = frame.getBoundingClientRect().top + clientY * frameScale.y;
      e.$dispatchEvent = true;

      switch (type) {
        case "click":
          _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _click3).call(PointerEvent, e);

          break;

        case "pointerdown":
          _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _pointerdown).call(PointerEvent, e);

          break;

        case "pointermove":
          _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _pointermove).call(PointerEvent, e);

          break;

        case "pointerup":
          _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _pointerup).call(PointerEvent, e);

          break;
      }
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, element, handler) {
      var listeners = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getListeners).call(PointerEvent, type);

      for (var i = 0; i < listeners.length; i++) {
        if (listeners[i].element === element) {
          if (!handler || listeners[i].handler === handler) {
            listeners.splice(i, 1);
          }
        }
      }
    }
  }]);

  return PointerEvent;
}();

function _click3(e) {
  var _classStaticPrivateMe = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getPointerPosition).call(PointerEvent, e),
      _classStaticPrivateMe2 = _slicedToArray(_classStaticPrivateMe, 2),
      left = _classStaticPrivateMe2[0],
      top = _classStaticPrivateMe2[1];

  var dispatchEvent = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _isDispatchEvent).call(PointerEvent, e);

  var topmostDomelement = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getTopmostDomelementFromPointer).call(PointerEvent, e.clientX, e.clientY);

  if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _hoveringDomelement) !== topmostDomelement) {
    return;
  }

  for (var i = 0; i < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dropListeners).length; i++) {
    if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dropListeners)[i].element.domelement === topmostDomelement) {
      return;
    }
  }

  for (var _i2 = 0; _i2 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _clickListeners).length; _i2++) {
    if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _clickListeners)[_i2].element.domelement === topmostDomelement) {
      _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _clickListeners)[_i2].handler(left, top, dispatchEvent);
    }
  }
}

function _pointerdown(e) {
  var _classStaticPrivateMe3 = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getPointerPosition).call(PointerEvent, e),
      _classStaticPrivateMe4 = _slicedToArray(_classStaticPrivateMe3, 2),
      left = _classStaticPrivateMe4[0],
      top = _classStaticPrivateMe4[1];

  var dispatchEvent = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _isDispatchEvent).call(PointerEvent, e);

  var topmostDomelement = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getTopmostDomelementFromPointer).call(PointerEvent, e.clientX, e.clientY);

  _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _dispatchPointerout).call(PointerEvent, topmostDomelement, left, top, dispatchEvent);

  for (var i = 0; i < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerdownListeners).length; i++) {
    if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerdownListeners)[i].element.domelement === topmostDomelement) {
      _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _dispatchPointerover).call(PointerEvent, topmostDomelement, left, top, dispatchEvent);

      _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerdownListeners)[i].handler(left, top, dispatchEvent);

      break;
    }
  }

  (function () {
    for (var _i3 = 0; _i3 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _clickListeners).length; _i3++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _clickListeners)[_i3].element.domelement === topmostDomelement) {
        return;
      }
    }

    for (var _i4 = 0; _i4 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerdownListeners).length; _i4++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerdownListeners)[_i4].active === false) {
        _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerdownListeners)[_i4].handler(left, top, dispatchEvent);
      }
    }
  })();

  for (var _i5 = 0; _i5 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragstartListeners).length; _i5++) {
    if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragstartListeners)[_i5].element.domelement === topmostDomelement) {
      _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _dispatchPointerover).call(PointerEvent, topmostDomelement, left, top, dispatchEvent);

      _classStaticPrivateFieldSpecSet(PointerEvent, PointerEvent, _dragger, _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragstartListeners)[_i5].handler(left, top, dispatchEvent));

      break;
    }
  }

  _classStaticPrivateFieldSpecSet(PointerEvent, PointerEvent, _hoveringDomelement, topmostDomelement);
}

function _pointermove(e) {
  var _classStaticPrivateMe5 = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getPointerPosition).call(PointerEvent, e),
      _classStaticPrivateMe6 = _slicedToArray(_classStaticPrivateMe5, 2),
      left = _classStaticPrivateMe6[0],
      top = _classStaticPrivateMe6[1];

  var dispatchEvent = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _isDispatchEvent).call(PointerEvent, e);

  var topmostDomelement = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getTopmostDomelementFromPointer).call(PointerEvent, e.clientX, e.clientY);

  _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _dispatchPointerout).call(PointerEvent, topmostDomelement, left, top, dispatchEvent);

  if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger) && _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _hoveringDomelement) !== topmostDomelement) {
    for (var i = 0; i < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragoutListeners).length; i++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragoutListeners)[i].element.domelement === _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _hoveringDomelement)) {
        _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragoutListeners)[i].handler(left, top, dispatchEvent, _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger));

        break;
      }
    }
  }

  _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _dispatchPointerover).call(PointerEvent, topmostDomelement, left, top, dispatchEvent);

  if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger) && _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _hoveringDomelement) !== topmostDomelement) {
    for (var _i6 = 0; _i6 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragoverListeners).length; _i6++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragoverListeners)[_i6].element.domelement === topmostDomelement) {
        _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragoverListeners)[_i6].handler(left, top, dispatchEvent, _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger));

        break;
      }
    }
  }

  for (var _i7 = 0; _i7 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointermoveListeners).length; _i7++) {
    if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointermoveListeners)[_i7].element.domelement === topmostDomelement || _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointermoveListeners)[_i7].active === false) {
      _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointermoveListeners)[_i7].handler(left, top, dispatchEvent);
    }
  }

  if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger)) {
    for (var _i8 = 0; _i8 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragmoveListeners).length; _i8++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragmoveListeners)[_i8].element.domelement === _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger).domelement) {
        _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragmoveListeners)[_i8].handler(left, top, dispatchEvent, _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger));

        break;
      }
    }
  }

  _classStaticPrivateFieldSpecSet(PointerEvent, PointerEvent, _hoveringDomelement, topmostDomelement);
}

function _pointerup(e) {
  var _classStaticPrivateMe7 = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getPointerPosition).call(PointerEvent, e),
      _classStaticPrivateMe8 = _slicedToArray(_classStaticPrivateMe7, 2),
      left = _classStaticPrivateMe8[0],
      top = _classStaticPrivateMe8[1];

  var dispatchEvent = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _isDispatchEvent).call(PointerEvent, e);

  var topmostDomelement = _classStaticPrivateMethodGet(PointerEvent, PointerEvent, _getTopmostDomelementFromPointer).call(PointerEvent, e.clientX, e.clientY);

  for (var i = 0; i < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerupListeners).length; i++) {
    if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerupListeners)[i].element.domelement === topmostDomelement) {
      _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerupListeners)[i].handler(left, top, dispatchEvent);

      break;
    }
  }

  (function () {
    for (var _i9 = 0; _i9 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _clickListeners).length; _i9++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _clickListeners)[_i9].element.domelement === topmostDomelement) {
        return;
      }
    }

    for (var _i10 = 0; _i10 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerupListeners).length; _i10++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerupListeners)[_i10].active === false) {
        _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerupListeners)[_i10].handler(left, top, dispatchEvent);
      }
    }
  })();

  if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger)) {
    for (var _i11 = 0; _i11 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dropListeners).length; _i11++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dropListeners)[_i11].element.domelement === topmostDomelement) {
        _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dropListeners)[_i11].handler(left, top, dispatchEvent, _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger));

        _classStaticPrivateFieldSpecSet(PointerEvent, PointerEvent, _dragger, null);

        return;
      }
    }

    for (var _i12 = 0; _i12 < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragendListeners).length; _i12++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragendListeners)[_i12].element.domelement === _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger).domelement) {
        _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragendListeners)[_i12].handler(left, top, dispatchEvent, _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger));

        _classStaticPrivateFieldSpecSet(PointerEvent, PointerEvent, _dragger, null);

        return;
      }
    }
  }
}

function _getListeners(type) {
  switch (type) {
    case "click":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _clickListeners);

    case "dragstart":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragstartListeners);

    case "dragmove":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragmoveListeners);

    case "dragout":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragoutListeners);

    case "dragover":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragoverListeners);

    case "dragend":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragendListeners);

    case "drop":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dropListeners);

    case "pointerdown":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerdownListeners);

    case "pointermove":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointermoveListeners);

    case "pointerover":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointeroverListeners);

    case "pointerout":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointeroutListeners);

    case "pointerup":
      return _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointerupListeners);
  }
}

function _getPointerPosition(e) {
  var frameScale = frame.scale;
  return [(e.clientX - frame.getBoundingClientRect().left) / frameScale.x, (e.clientY - frame.getBoundingClientRect().top) / frameScale.y];
}

function _isDispatchEvent(e) {
  return e.$dispatchEvent !== undefined;
}

function _getTopmostDomelementFromPointer(left, top) {
  var topmostDomelements = document.elementsFromPoint(left, top);
  var topmostDomelement = topmostDomelements[0].$parent || topmostDomelements[0];

  if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger) === null) {
    return topmostDomelement;
  }

  for (var i = 0; i < topmostDomelements.length; i++) {
    topmostDomelement = topmostDomelements[i].$parent || topmostDomelements[i];

    if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _dragger).domelement !== topmostDomelement) {
      return topmostDomelement;
    }
  }
}

function _dispatchPointerout(topmostDomelement, left, top, dispatchEvent) {
  if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _hoveringDomelement) !== topmostDomelement) {
    for (var i = 0; i < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointeroutListeners).length; i++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointeroutListeners)[i].element.domelement === _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _hoveringDomelement)) {
        _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointeroutListeners)[i].handler(left, top, dispatchEvent);

        return;
      }
    }
  }
}

function _dispatchPointerover(topmostDomelement, left, top, dispatchEvent) {
  if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _hoveringDomelement) !== topmostDomelement) {
    for (var i = 0; i < _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointeroverListeners).length; i++) {
      if (_classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointeroverListeners)[i].element.domelement === topmostDomelement) {
        _classStaticPrivateFieldSpecGet(PointerEvent, PointerEvent, _pointeroverListeners)[i].handler(left, top, dispatchEvent);

        return;
      }
    }
  }
}

var _hoveringDomelement = {
  writable: true,
  value: null
};
var _dragger = {
  writable: true,
  value: null
};
var _clickListeners = {
  writable: true,
  value: new Array()
};
var _dragstartListeners = {
  writable: true,
  value: new Array()
};
var _dragmoveListeners = {
  writable: true,
  value: new Array()
};
var _dragoutListeners = {
  writable: true,
  value: new Array()
};
var _dragoverListeners = {
  writable: true,
  value: new Array()
};
var _dragendListeners = {
  writable: true,
  value: new Array()
};
var _dropListeners = {
  writable: true,
  value: new Array()
};
var _pointerdownListeners = {
  writable: true,
  value: new Array()
};
var _pointermoveListeners = {
  writable: true,
  value: new Array()
};
var _pointeroutListeners = {
  writable: true,
  value: new Array()
};
var _pointeroverListeners = {
  writable: true,
  value: new Array()
};
var _pointerupListeners = {
  writable: true,
  value: new Array()
};

var _button = /*#__PURE__*/new WeakMap();

var _element6 = /*#__PURE__*/new WeakMap();

var StartScreen = /*#__PURE__*/function () {
  function StartScreen(_click5) {
    var _this7 = this;

    _classCallCheck(this, StartScreen);

    _classPrivateFieldInitSpec(this, _button, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _element6, {
      writable: true,
      value: void 0
    });

    if (!StartScreen.instance) {
      _classPrivateFieldSet(this, _element6, new Element(document.querySelector(".start-screen")));

      _classPrivateFieldSet(this, _button, new Element(document.querySelector(".start-screen > .start-screen-button")));

      var handlers = {
        click: function click(left, top) {
          Sound.start.play();
          _this7.visible = false;
          _click5 && _click5();
        },
        pointerout: function pointerout(left, top) {
          _classPrivateFieldGet(_this7, _button).width = 434;
          _classPrivateFieldGet(_this7, _button).height = 155;
          _classPrivateFieldGet(_this7, _button).image = Image.StartScreen_pointerout;
          _classPrivateFieldGet(_this7, _button).transform = "translate(-50%, -50%) scale(0.8, 0.8)";
        },
        pointerover: function pointerover(left, top) {
          Sound.pointerover.play();
          _classPrivateFieldGet(_this7, _button).width = 613;
          _classPrivateFieldGet(_this7, _button).height = 211;
          _classPrivateFieldGet(_this7, _button).image = Image.StartScreen_pointerover;
          _classPrivateFieldGet(_this7, _button).transform = "translate(-50%, -50%) scale(0.8, 0.8)";
        }
      };

      _classPrivateFieldGet(this, _button).addEventListener("click", handlers.click);

      _classPrivateFieldGet(this, _button).addEventListener("pointerout", handlers.pointerout);

      _classPrivateFieldGet(this, _button).addEventListener("pointerover", handlers.pointerover);
    }

    return StartScreen.instance || (StartScreen.instance = this);
  }

  _createClass(StartScreen, [{
    key: "visible",
    get: function get() {
      return _classPrivateFieldGet(this, _element6).visible;
    },
    set: function set(value) {
      _classPrivateFieldGet(this, _element6).visible = value;
    }
  }]);

  return StartScreen;
}();

var StarCursor = /*#__PURE__*/function (_Cursor) {
  _inherits(StarCursor, _Cursor);

  var _super2 = _createSuper(StarCursor);

  function StarCursor() {
    var _this8;

    _classCallCheck(this, StarCursor);

    if (!StarCursor.instance) {
      _this8 = _super2.call(this, document.querySelector(".star-cursor"));
    }

    return _possibleConstructorReturn(_this8, StarCursor.instance || (StarCursor.instance = _assertThisInitialized(_this8)));
  }

  return _createClass(StarCursor);
}(Cursor);

var _element7 = /*#__PURE__*/new WeakMap();

var _hInterval = /*#__PURE__*/new WeakMap();

var _paused = /*#__PURE__*/new WeakMap();

var _second = /*#__PURE__*/new WeakMap();

var _timeup = /*#__PURE__*/new WeakMap();

var Timer = /*#__PURE__*/function () {
  function Timer(timeup) {
    _classCallCheck(this, Timer);

    _classPrivateFieldInitSpec(this, _element7, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _hInterval, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _paused, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _second, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _timeup, {
      writable: true,
      value: void 0
    });

    if (!Timer.instance) {
      _classPrivateFieldSet(this, _element7, new Element(document.querySelector(".timer")));

      _classPrivateFieldSet(this, _second, 0);

      _classPrivateFieldSet(this, _timeup, timeup);
    }

    return Timer.instance || (Timer.instance = this);
  }

  _createClass(Timer, [{
    key: "pause",
    value: function pause() {
      _classPrivateFieldSet(this, _paused, true);
    }
  }, {
    key: "resume",
    value: function resume() {
      _classPrivateFieldSet(this, _paused, false);
    }
  }, {
    key: "start",
    value: function start(duration) {
      var _this9 = this;

      _classPrivateFieldSet(this, _paused, false);

      _classPrivateFieldSet(this, _second, 0);

      clearInterval(_classPrivateFieldGet(this, _hInterval));

      _classPrivateFieldSet(this, _hInterval, setInterval(function () {
        if (_classPrivateFieldGet(_this9, _paused) === true) {
          return;
        }

        _classPrivateFieldSet(_this9, _second, _classPrivateFieldGet(_this9, _second) + 0.1);

        var remainingTime = duration - _classPrivateFieldGet(_this9, _second);

        if (remainingTime <= 0) {
          _classPrivateFieldGet(_this9, _element7).domelement.innerHTML = "00:00";

          _this9.stop();

          _classPrivateFieldGet(_this9, _timeup) && _classPrivateFieldGet(_this9, _timeup).call(_this9);
        } else {
          _classPrivateFieldGet(_this9, _element7).domelement.innerHTML = "00:".concat(remainingTime / 10 < 1 ? "0" : "").concat(Math.floor(remainingTime));
        }
      }, 100));
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(_classPrivateFieldGet(this, _hInterval));
    }
  }]);

  return Timer;
}();

var Utility = /*#__PURE__*/function () {
  function Utility() {
    _classCallCheck(this, Utility);
  }

  _createClass(Utility, null, [{
    key: "distance",
    value: function distance(x1, y1, x2, y2) {
      return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    }
  }, {
    key: "isBaidu",
    value: function isBaidu() {
      var userAgent = navigator.userAgent.toLowerCase();
      return userAgent.indexOf("bidu") >= 0 || userAgent.indexOf("baidu") >= 0 || false;
    }
  }, {
    key: "isFirefox",
    value: function isFirefox() {
      var userAgent = navigator.userAgent.toLowerCase();
      return userAgent.indexOf("firefox") >= 0 || userAgent.indexOf("fxios/i") >= 0 || false;
    }
  }, {
    key: "intersectPoint",
    value: function intersectPoint(point, rect) {
      if (point.left > rect.left && point.left < rect.left + rect.width && point.top > rect.top && point.top < rect.top + rect.height) {
        return true;
      }

      return false;
    }
  }, {
    key: "intersectRect",
    value: function intersectRect(rect1, rect2) {
      if (Utility.intersectPoint({
        left: rect1.left,
        top: rect1.top
      }, rect2) || Utility.intersectPoint({
        left: rect1.left + rect1.width,
        top: rect1.top
      }, rect2) || Utility.intersectPoint({
        left: rect1.left,
        top: rect1.top + rect1.height
      }, rect2) || Utility.intersectPoint({
        left: rect1.left + rect1.width,
        top: rect1.top + rect1.height
      }, rect2)) {
        return true;
      }

      return false;
    }
  }, {
    key: "lerp",
    value: function lerp(start, end, t) {
      return start + (end - start) * t;
    }
  }, {
    key: "random",
    value: function random(max) {
      return Math.floor(Math.random() * max);
    }
  }, {
    key: "randomSort",
    value: function randomSort(array) {
      for (var i = 0; i < array.length; i++) {
        var index = Utility.random(array.length);
        var _ref = [array[index], array[i]];
        array[i] = _ref[0];
        array[index] = _ref[1];
      }

      return array;
    }
  }, {
    key: "waitForCondition",
    value: function () {
      var _waitForCondition = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(condition) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(condition() === false)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return Utility.waitForSeconds(0);

              case 3:
                _context.next = 0;
                break;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function waitForCondition(_x) {
        return _waitForCondition.apply(this, arguments);
      }

      return waitForCondition;
    }()
  }, {
    key: "waitForSeconds",
    value: function waitForSeconds(seconds) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, seconds * 1000.0);
      });
    }
  }]);

  return Utility;
}();

window.focus();

window.ondragstart = function () {
  return false;
};

var frame = new Frame(document.getElementById("frame"));
PointerEvent.constructor();
"use strict";

var _running2 = /*#__PURE__*/new WeakMap();

var ArtificialMentalRetardation = /*#__PURE__*/function () {
  function ArtificialMentalRetardation() {
    _classCallCheck(this, ArtificialMentalRetardation);

    _classPrivateFieldInitSpec(this, _running2, {
      writable: true,
      value: void 0
    });

    if (!ArtificialMentalRetardation.instance) {}

    return ArtificialMentalRetardation.instance || (ArtificialMentalRetardation.instance = this);
  }

  _createClass(ArtificialMentalRetardation, [{
    key: "start",
    value: function () {
      var _start = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _classPrivateFieldSet(this, _running2, true);

                while (_classPrivateFieldGet(this, _running2)) {}

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function start() {
        return _start.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: "stop",
    value: function stop() {
      _classPrivateFieldSet(this, _running2, false);
    }
  }]);

  return ArtificialMentalRetardation;
}();

var Image = /*#__PURE__*/function () {
  function Image() {
    _classCallCheck(this, Image);
  }

  _createClass(Image, null, [{
    key: "EndScreen_lose",
    get: function get() {
      return "none";
    }
  }, {
    key: "EndScreen_pointerout",
    get: function get() {
      return "none";
    }
  }, {
    key: "EndScreen_pointerover",
    get: function get() {
      return "none";
    }
  }, {
    key: "EndScreen_timeup",
    get: function get() {
      return "none";
    }
  }, {
    key: "EndScreen_win",
    get: function get() {
      return "none";
    }
  }, {
    key: "StartScreen_pointerout",
    get: function get() {
      return "url(shapes/82.svg)";
    }
  }, {
    key: "StartScreen_pointerover",
    get: function get() {
      return "url(shapes/83.svg)";
    }
  }]);

  return Image;
}();

var Sound = /*#__PURE__*/function () {
  function Sound() {
    _classCallCheck(this, Sound);
  }

  _createClass(Sound, null, [{
    key: "constructor",
    value: function constructor() {
      _classStaticPrivateFieldSpecSet(Sound, Sound, _background, new Audio("sounds/1_bgmusic05.wav.mp3"));

      _classStaticPrivateFieldSpecSet(Sound, Sound, _exit, new Audio("sounds/74.mp3"));

      _classStaticPrivateFieldSpecSet(Sound, Sound, _good, null);

      _classStaticPrivateFieldSpecSet(Sound, Sound, _lose, null);

      _classStaticPrivateFieldSpecSet(Sound, Sound, _pointerover, new Audio("sounds/98.mp3"));

      _classStaticPrivateFieldSpecSet(Sound, Sound, _start2, new Audio("sounds/2_開始玩.mp3"));

      _classStaticPrivateFieldSpecSet(Sound, Sound, _timeup2, null);

      _classStaticPrivateFieldSpecSet(Sound, Sound, _win, null);

      _classStaticPrivateFieldSpecSet(Sound, Sound, _wrong, null);
    }
  }, {
    key: "background",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(Sound, Sound, _background);
    }
  }, {
    key: "exit",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(Sound, Sound, _exit);
    }
  }, {
    key: "good",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(Sound, Sound, _good);
    }
  }, {
    key: "lose",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(Sound, Sound, _lose);
    }
  }, {
    key: "pointerover",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(Sound, Sound, _pointerover);
    }
  }, {
    key: "start",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(Sound, Sound, _start2);
    }
  }, {
    key: "timeup",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(Sound, Sound, _timeup2);
    }
  }, {
    key: "win",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(Sound, Sound, _win);
    }
  }, {
    key: "wrong",
    get: function get() {
      return _classStaticPrivateFieldSpecGet(Sound, Sound, _wrong);
    }
  }]);

  return Sound;
}();

var _background = {
  writable: true,
  value: void 0
};
var _exit = {
  writable: true,
  value: void 0
};
var _good = {
  writable: true,
  value: void 0
};
var _lose = {
  writable: true,
  value: void 0
};
var _pointerover = {
  writable: true,
  value: void 0
};
var _start2 = {
  writable: true,
  value: void 0
};
var _timeup2 = {
  writable: true,
  value: void 0
};
var _win = {
  writable: true,
  value: void 0
};
var _wrong = {
  writable: true,
  value: void 0
};

var _boy = /*#__PURE__*/new WeakMap();

var _element8 = /*#__PURE__*/new WeakMap();

var _index = /*#__PURE__*/new WeakMap();

var _maximized = /*#__PURE__*/new WeakMap();

var Stage = /*#__PURE__*/function () {
  function Stage(domelement, index) {
    var _this10 = this;

    _classCallCheck(this, Stage);

    _classPrivateFieldInitSpec(this, _boy, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _element8, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _index, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _maximized, {
      writable: true,
      value: false
    });

    _defineProperty(this, "$animationend", void 0);

    _defineProperty(this, "$click", void 0);

    _defineProperty(this, "$pointerover", void 0);

    _defineProperty(this, "$pointerout", void 0);

    _classPrivateFieldSet(this, _element8, new Element(domelement));

    _classPrivateFieldSet(this, _boy, new Element(domelement.children[0]));

    _classPrivateFieldSet(this, _index, index);

    _classPrivateFieldGet(this, _boy).addEventListener("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var vy, scale, stopTop;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              new Audio("sounds/3_pick.mp3").play();
              new Cutie().visible = true;
              _classPrivateFieldGet(_this10, _boy).style["width"] = "181px";
              _classPrivateFieldGet(_this10, _boy).style["height"] = "253px";
              _classPrivateFieldGet(_this10, _boy).image = "url(shapes/125.svg)";
              _classPrivateFieldGet(_this10, _boy).left += 6;
              _classPrivateFieldGet(_this10, _boy).top -= 3;
              _classPrivateFieldGet(_this10, _boy).enable = false;
              _classPrivateFieldGet(_this10, _boy).zindex = 3;
              _context3.next = 11;
              return Utility.waitForSeconds(0.1);

            case 11:
              _classPrivateFieldGet(_this10, _boy).image = "url(shapes/127.svg)";
              _context3.next = 14;
              return Utility.waitForSeconds(0.1);

            case 14:
              vy = 5;
              scale = 0.65;
              stopTop = _classPrivateFieldGet(_this10, _boy).top + 10;

            case 17:
              if (!true) {
                _context3.next = 30;
                break;
              }

              if (!(vy < 0 && _classPrivateFieldGet(_this10, _boy).top > stopTop)) {
                _context3.next = 22;
                break;
              }

              _context3.next = 21;
              return Utility.waitForSeconds(1);

            case 21:
              return _context3.abrupt("break", 30);

            case 22:
              _classPrivateFieldGet(_this10, _boy).style["top"] = parseFloat(_classPrivateFieldGet(_this10, _boy).style["top"]) - vy + "px";
              _classPrivateFieldGet(_this10, _boy).transform = "scale(".concat(scale, ",").concat(scale, ")");
              vy -= 0.1;
              scale += 0.002;
              _context3.next = 28;
              return Utility.waitForSeconds(0);

            case 28:
              _context3.next = 17;
              break;

            case 30:
              _this10.$click && _this10.$click(_classPrivateFieldGet(_this10, _maximized));
              _classPrivateFieldGet(_this10, _boy).visible = false;

            case 32:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));

    var animationend = function animationend() {
      _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _classPrivateFieldGet(_this10, _element8).style["left"] = "-2px";
                _classPrivateFieldGet(_this10, _element8).style["top"] = "-2px";
                _classPrivateFieldGet(_this10, _element8).transform = "scale(1.01, 1.01)";
                _classPrivateFieldGet(_this10, _element8).style["animation"] = "none";
                document.querySelector(".white-screen").style["display"] = "block";
                _context4.next = 7;
                return Utility.waitForSeconds(0.1);

              case 7:
                _classPrivateFieldGet(_this10, _element8).children[1].style["display"] = "block";
                document.querySelector(".white-screen").style["display"] = "none";

                _classPrivateFieldSet(_this10, _maximized, true);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();

      _classPrivateFieldGet(_this10, _boy).style["width"] = "182px";
      _classPrivateFieldGet(_this10, _boy).style["height"] = "225px";
      _classPrivateFieldGet(_this10, _boy).transform = "scale(0.65, 0.65) ";
      _classPrivateFieldGet(_this10, _boy).image = "url(shapes/122.svg)";
      _classPrivateFieldGet(_this10, _boy).enable = true;
      _classPrivateFieldGet(_this10, _boy).visible = true;
      _classPrivateFieldGet(_this10, _boy).zindex = 1;
      _this10.$animationend && _this10.$animationend(_classPrivateFieldGet(_this10, _boy));
    };

    var click = function click() {
      if (_classPrivateFieldGet(_this10, _maximized) === false) {
        _classPrivateFieldGet(_this10, _element8).style["-webkit-filter"] = "none";
        _classPrivateFieldGet(_this10, _element8).style["filter"] = "none";
        _this10.$click && _this10.$click(_classPrivateFieldGet(_this10, _maximized));
      }
    };

    var pointerover = function pointerover() {
      if (_classPrivateFieldGet(_this10, _maximized) === false) {
        new Audio("sounds/98.mp3").play();
      }

      _classPrivateFieldGet(_this10, _element8).style["-webkit-filter"] = "url(#sofGlow)";
      _classPrivateFieldGet(_this10, _element8).style["filter"] = "url(#sofGlow)";
    };

    var pointerout = function pointerout() {
      _classPrivateFieldGet(_this10, _element8).style["-webkit-filter"] = "none";
      _classPrivateFieldGet(_this10, _element8).style["filter"] = "none";
    };

    _classPrivateFieldGet(this, _element8).domelement.addEventListener("animationend", animationend);

    _classPrivateFieldGet(this, _element8).addEventListener("click", click);

    _classPrivateFieldGet(this, _element8).addEventListener("pointerover", pointerover);

    _classPrivateFieldGet(this, _element8).addEventListener("pointerout", pointerout);
  }

  _createClass(Stage, [{
    key: "element",
    get: function get() {
      return _classPrivateFieldGet(this, _element8);
    }
  }, {
    key: "index",
    get: function get() {
      return _classPrivateFieldGet(this, _index);
    }
  }, {
    key: "maximized",
    value: function () {
      var _maximized2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var _this11 = this;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.element.style["z-index"] = 99;
                this.element.style["animation"] = "stage-".concat(_classPrivateFieldGet(this, _index) === Stage.forest ? "forest" : _classPrivateFieldGet(this, _index) === Stage.undersea ? "undersea" : "bathroom", " 0.5s linear");
                _context5.next = 4;
                return Utility.waitForCondition(function () {
                  return _classPrivateFieldGet(_this11, _maximized) === true;
                });

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function maximized() {
        return _maximized2.apply(this, arguments);
      }

      return maximized;
    }()
  }, {
    key: "minimized",
    value: function minimized() {
      this.element.style["z-index"] = 10;
      this.element.style["left"] = _classPrivateFieldGet(this, _index) === Stage.forest ? "-250px" : _classPrivateFieldGet(this, _index) === Stage.undersea ? "0" : "250px";
      this.element.style["top"] = "-130px";
      this.element.transform = "scale(0.28, 0.28)";

      _classPrivateFieldSet(this, _maximized, false);
    }
  }], [{
    key: "forest",
    get: function get() {
      return 0;
    }
  }, {
    key: "undersea",
    get: function get() {
      return 1;
    }
  }, {
    key: "bathroom",
    get: function get() {
      return 2;
    }
  }]);

  return Stage;
}();

var Bathroom = /*#__PURE__*/function (_Stage) {
  _inherits(Bathroom, _Stage);

  var _super3 = _createSuper(Bathroom);

  function Bathroom(click) {
    var _this12;

    _classCallCheck(this, Bathroom);

    _this12 = _super3.call(this, document.querySelector(".stages > .stage-bathroom"), Stage.bathroom);

    _this12.$animationend = function (boy) {
      var position = [{
        left: 75,
        top: 0
      }, {
        left: 70,
        top: 320
      }, {
        left: 560,
        top: 340
      }][Utility.random(3)];
      boy.left = position.left;
      boy.top = position.top;
    };

    _this12.$click = function (maximized) {
      click && click(_assertThisInitialized(_this12), maximized);
    };

    return _this12;
  }

  return _createClass(Bathroom);
}(Stage);

var _element9 = /*#__PURE__*/new WeakMap();

var Boy = /*#__PURE__*/function () {
  function Boy() {
    _classCallCheck(this, Boy);

    _classPrivateFieldInitSpec(this, _element9, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _element9, new Element(document.querySelector(".boy")));
  }

  _createClass(Boy, [{
    key: "jumpBackward",
    value: function () {
      var _jumpBackward = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(index) {
        var vx, vy, scale;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                new Audio("sounds/99.mp3").play();
                vx = index === Stage.forest ? 1.4 : index === Stage.undersea ? 0 : -1.4;
                vy = 10;
                scale = 1;

              case 4:
                if (!true) {
                  _context6.next = 17;
                  break;
                }

                if (!(vy < 0 && _classPrivateFieldGet(this, _element9).top > 120)) {
                  _context6.next = 8;
                  break;
                }

                _classPrivateFieldGet(this, _element9).visible = false;
                return _context6.abrupt("break", 17);

              case 8:
                _classPrivateFieldGet(this, _element9).left -= vx;
                _classPrivateFieldGet(this, _element9).top -= vy;
                _classPrivateFieldGet(this, _element9).transform = "scale(".concat(scale, ",").concat(scale, ")");
                vy -= 0.1;
                scale -= 0.004;
                _context6.next = 15;
                return Utility.waitForSeconds(0);

              case 15:
                _context6.next = 4;
                break;

              case 17:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function jumpBackward(_x2) {
        return _jumpBackward.apply(this, arguments);
      }

      return jumpBackward;
    }()
  }, {
    key: "jumpForward",
    value: function () {
      var _jumpForward = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(index) {
        var vx, vy, scale;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                new Audio("sounds/99.mp3").play();
                _classPrivateFieldGet(this, _element9).visible = true;
                vx = index === Stage.forest ? -1.36 : index === Stage.undersea ? 0 : 1.36;
                vy = 7.599;
                scale = 0.296;

              case 5:
                if (!true) {
                  _context7.next = 20;
                  break;
                }

                if (!(vy < 0 && _classPrivateFieldGet(this, _element9).top > 214.8)) {
                  _context7.next = 11;
                  break;
                }

                _classPrivateFieldGet(this, _element9).style["left"] = "310px";
                _classPrivateFieldGet(this, _element9).style["top"] = "270px";
                _classPrivateFieldGet(this, _element9).transform = "scale(1.4, 1.4)";
                return _context7.abrupt("break", 20);

              case 11:
                _classPrivateFieldGet(this, _element9).left -= vx;
                _classPrivateFieldGet(this, _element9).top -= vy;
                _classPrivateFieldGet(this, _element9).transform = "scale(".concat(scale, ",").concat(scale, ")");
                vy -= 0.1;
                scale += 0.00615;
                _context7.next = 18;
                return Utility.waitForSeconds(0);

              case 18:
                _context7.next = 5;
                break;

              case 20:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function jumpForward(_x3) {
        return _jumpForward.apply(this, arguments);
      }

      return jumpForward;
    }()
  }]);

  return Boy;
}();

var _element10 = /*#__PURE__*/new WeakMap();

var _face = /*#__PURE__*/new WeakMap();

var _eyes = /*#__PURE__*/new WeakMap();

var _message = /*#__PURE__*/new WeakMap();

var Cutie = /*#__PURE__*/function () {
  function Cutie() {
    var _this13 = this;

    _classCallCheck(this, Cutie);

    _classPrivateFieldInitSpec(this, _element10, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _face, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _eyes, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _message, {
      writable: true,
      value: void 0
    });

    if (!Cutie.instance) {
      _classPrivateFieldSet(this, _element10, new Element(document.querySelector(".cutie")));

      _classPrivateFieldSet(this, _face, new Element(document.querySelector(".cutie > .cutie-face")));

      _classPrivateFieldSet(this, _eyes, new Element(document.querySelector(".cutie > .cutie-eyes")));

      _classPrivateFieldSet(this, _message, new Element(document.querySelector(".cutie > .cutie-message")));

      var wink = function wink(winking) {
        if (winking) {
          _classPrivateFieldGet(_this13, _eyes).image = "url(shapes/159.svg)";
          setTimeout(wink, 100.0, false);
        } else {
          _classPrivateFieldGet(_this13, _eyes).image = "url(shapes/158.svg)";
          setTimeout(wink, Math.max(0.5 * 1000, Math.random() * 1 * 1000), true);
        }
      };

      wink(true);
    }

    return Cutie.instance || (Cutie.instance = this);
  }

  _createClass(Cutie, [{
    key: "visible",
    set: function set(value) {
      var _this14 = this;

      var audio = new Audio("sounds/2_bababa.mp3");
      audio.play();

      if (value) {
        _classPrivateFieldGet(this, _element10).visible = true;
        new Audio("sounds/3_pick.mp3").play();
        _classPrivateFieldGet(this, _face).image = "url(shapes/157.svg)";
        _classPrivateFieldGet(this, _message).image = "url(shapes/162.svg)";
        setTimeout(function () {
          _classPrivateFieldGet(_this14, _element10).visible = false;
        }, 1 * 1000);
        setTimeout(function () {
          audio.pause();
          audio.currentTime = 0;
        }, 1.75 * 1000);
      } else {
        _classPrivateFieldGet(this, _element10).visible = false;
      }
    }
  }]);

  return Cutie;
}();

var Forest = /*#__PURE__*/function (_Stage2) {
  _inherits(Forest, _Stage2);

  var _super4 = _createSuper(Forest);

  function Forest(click) {
    var _this15;

    _classCallCheck(this, Forest);

    _this15 = _super4.call(this, document.querySelector(".stages > .stage-forest"), Stage.forest);

    _this15.$animationend = function (boy) {
      var position = [{
        left: 55,
        top: 205
      }, {
        left: 270,
        top: 330
      }, {
        left: 550,
        top: 185
      }][Utility.random(3)];
      boy.left = position.left;
      boy.top = position.top;
    };

    _this15.$click = function (maximized) {
      click && click(_assertThisInitialized(_this15), maximized);
    };

    return _this15;
  }

  return _createClass(Forest);
}(Stage);

var Undersea = /*#__PURE__*/function (_Stage3) {
  _inherits(Undersea, _Stage3);

  var _super5 = _createSuper(Undersea);

  function Undersea(click) {
    var _this16;

    _classCallCheck(this, Undersea);

    _this16 = _super5.call(this, document.querySelector(".stages > .stage-undersea"), Stage.undersea);

    _this16.$animationend = function (boy) {
      var position = [{
        left: 5,
        top: 235
      }, {
        left: 380,
        top: 315
      }, {
        left: 640,
        top: 265
      }][Utility.random(3)];
      boy.left = position.left;
      boy.top = position.top;
    };

    _this16.$click = function (maximized) {
      click && click(_assertThisInitialized(_this16), maximized);
    };

    return _this16;
  }

  return _createClass(Undersea);
}(Stage);

var Main = /*#__PURE__*/function () {
  function Main() {
    _classCallCheck(this, Main);

    _defineProperty(this, "artificialMentalRetardation", void 0);

    _defineProperty(this, "autoplay", void 0);

    _defineProperty(this, "backgroundMusic", void 0);

    _defineProperty(this, "bathroom", void 0);

    _defineProperty(this, "boy", void 0);

    _defineProperty(this, "clickable", void 0);

    _defineProperty(this, "forest", void 0);

    _defineProperty(this, "starCursor", void 0);

    _defineProperty(this, "undersea", void 0);

    this.autoplay_click = this.autoplay_click.bind(this);
    this.stage_click = this.stage_click.bind(this);
    this.start = this.start.bind(this);
    new AutoPlay();
    new ExitButton();
    new FullScreen();
    new StartScreen(this.start);
    this.artificialMentalRetardation = new ArtificialMentalRetardation();
    this.autoplay = new AutoPlay(this.autoplay_click);
    this.backgroundMusic = new BackgroundMusic();
    this.boy = new Boy();
    this.starCursor = new StarCursor();
    this.forest = new Forest(this.stage_click);
    this.undersea = new Undersea(this.stage_click);
    this.bathroom = new Bathroom(this.stage_click);
    this.starCursor.visible = true;
  }

  _createClass(Main, [{
    key: "start",
    value: function () {
      var _start3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function start() {
        return _start3.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: "autoplay_click",
    value: function autoplay_click(running) {
      if (running) {
        if (this.startScreen.visible) {
          this.startScreen.visible = false;
          this.start();
        } else if (this.endScreen.visible) {
          this.restart();
        }

        this.artificialMentalRetardation.start();
      } else {
        this.artificialMentalRetardation.stop();
      }
    }
  }, {
    key: "stage_click",
    value: function () {
      var _stage_click = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(stage, maximized) {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!(this.clickable === false)) {
                  _context9.next = 2;
                  break;
                }

                return _context9.abrupt("return");

              case 2:
                this.clickable = false;

                if (!(maximized === false)) {
                  _context9.next = 10;
                  break;
                }

                _context9.next = 6;
                return this.boy.jumpBackward(stage.index);

              case 6:
                _context9.next = 8;
                return stage.maximized();

              case 8:
                _context9.next = 13;
                break;

              case 10:
                stage.minimized();
                _context9.next = 13;
                return this.boy.jumpForward(stage.index);

              case 13:
                this.clickable = true;

              case 14:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function stage_click(_x4, _x5) {
        return _stage_click.apply(this, arguments);
      }

      return stage_click;
    }()
  }]);

  return Main;
}();

Sound.constructor();
new Main();