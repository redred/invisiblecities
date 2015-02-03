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
      _.each(d.cities, (obj, i) ->
        obj.order = i + 1
      )
      debug d
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
      target: 'section.body-1'
      data: data
      template: '#tmpl-text'
    )

    render(
      title: 'Groups'
      target: 'section.body-1'
      data: data
      template: '#tmpl-groups'
    )

    render(
      title: 'Cities Original'
      target: 'section.body-1'
      data: data
      template: '#tmpl-cities'
    )

    citiesAlphabetical = sortAlphabetical(data.cities, 'name')

    for city in citiesAlphabetical
      city.groupId = 0
      delete city.groupOrder
    # debug citiesAlphabetical
    render(
      title: 'Cities Alphabetical'
      target: 'section.body-1'
      data: 
        cities: citiesAlphabetical
      template: '#tmpl-cities-alphabetical'
    )

    firstLetters = []
    for city, i in citiesAlphabetical
      firstLetter = city.name.substring(0,1).toLowerCase()
      found = false
      for letter, j in firstLetters
        if letter.character == firstLetter
          found = true
          firstLetters[j].count++
      if found != true
        firstLetters.push(
          character: firstLetter
          count: 1
        )

    debug firstLetters
    firstLetterData =
      firstLetters: firstLetters
    debug firstLetterData
    render(
      title: 'First Letter Frequency'
      target: 'section.body-1'
      data: firstLetterData
      template: '#tmpl-first-letters'
    )

  sortAlphabetical = (arr, prop) ->
    newArr = arr
    newArr = _.sortBy(
      newArr
      (o) ->
        o[prop]
    )
    newArr

  $(document).ready( ->
    loadData()
  )
