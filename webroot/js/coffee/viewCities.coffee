define [
  'jquery'
  'underscore'
  'mustache'
  'baseUtil'
], (
  $
  _
  Mustache
  util
) ->
  'use strict'
  name = 'viewCities'
  debug = util.debug

  loadData = ->
    url = 'data/cities.json'
    $.ajax(
      url: url
    ).done( (data) ->
      d = if typeof data == 'string' then JSON.parse data else data
      renderAll(d)
    )

  render = (opts) ->
    template = $(opts.template).html()
    Mustache.parse(template)
    opts.data.title = opts.title if opts.title
    rendered = Mustache.render(template, opts.data)
    $(opts.target).append(rendered)

  renderAll = (data) ->
    render(
      title: 'Groups'
      target: 'section.body'
      data: data
      template: '#tmpl-groups'
    )
    render(
      title: 'Cities Original'
      target: 'section.body'
      data: data
      template: '#tmpl-cities'
    )
    citiesAlphabetical = data.cities
    citiesAlphabetical = _.sortBy(
      citiesAlphabetical
      (o) ->
        o.name
    )
    for city in citiesAlphabetical
      city.groupId = 0
      delete city.groupOrder
    # debug citiesAlphabetical
    render(
      title: 'Cities Alphabetical'
      target: 'section.body'
      data: 
        cities: citiesAlphabetical
      template: '#tmpl-cities'
    )

  $(document).ready( ->
    loadData()
  )


