define [
  'jquery'
], (
  $
) ->
  'use strict'
  name = 'BaseUtil'

  class BaseUtil
    constructor: (options) ->
      @enable_debug = true
      if options && options.enable_debug
        @enable_debug = options.enable_debug
    debug: (obj) =>
      if console? && typeof console == 'object' && console.log
        if @enable_debug == true
          console.log obj

  baseUtil = new BaseUtil()