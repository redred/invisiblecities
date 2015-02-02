var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

define(['jquery'], function($) {
  'use strict';
  var BaseUtil, baseUtil, name;
  name = 'BaseUtil';
  BaseUtil = (function() {
    function BaseUtil(options) {
      this.debug = __bind(this.debug, this);
      this.enable_debug = true;
      if (options && options.enable_debug) {
        this.enable_debug = options.enable_debug;
      }
    }

    BaseUtil.prototype.debug = function(obj) {
      if ((typeof console !== "undefined" && console !== null) && typeof console === 'object' && console.log) {
        if (this.enable_debug === true) {
          return console.log(obj);
        }
      }
    };

    return BaseUtil;

  })();
  return baseUtil = new BaseUtil();
});
