define [
  'jquery'
  'mustache'
  'baseUtil'
], (
  $
  Mustache
  baseUtil
) ->
  'use strict'
  name = 'viewCities'
  debug = baseUtil.debug

  loadData = ->
    url = 'data/cities.json'
    $.ajax(
      url: url
    ).done( (data) ->
      renderAll(data)
    )

  render = (opts) ->
    template = $(opts.template).html()
    Mustache.parse(template)
    rendered = Mustache.render(template, opts.data)
    $(opts.target).append(rendered)

  renderAll = (data) ->
    render(
      target: 'section.body'
      data: data
      template: '#tmpl-groups'
    )
    render(
      target: 'section.body'
      data: data
      template: '#tmpl-cities'
    )

  $(document).ready( ->
    loadData()
  )


