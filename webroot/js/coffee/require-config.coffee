requirejs.config
  'baseUrl':            'js'
  'paths':
    'requirelib':       'lib/require'
    'jquery':           'lib/jquery/jquery-1.11.1.min'
    'jqueryui':         'lib/jquery/jquery-ui-1.10.4.custom'
    'mustache':         'lib/mustachejs/mustache.min'
    'baseUtil':         'compiled/baseUtil'
    'viewCities':       'compiled/viewCities'
  'shim':
    'jqueryui':
      'deps':           [ 'jquery' ]
  'urlArgs' : "bust=" + (new Date()).getTime()

requirejs [
  'jquery'
  'jqueryui'
  'mustache'
  'baseUtil'
  'viewCities'
]
