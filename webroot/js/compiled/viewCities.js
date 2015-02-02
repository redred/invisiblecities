define(['jquery', 'underscore', 'mustache', 'baseUtil'], function($, _, Mustache, util) {
  'use strict';
  var debug, loadData, name, render, renderAll;
  name = 'viewCities';
  debug = util.debug;
  loadData = function() {
    var url;
    url = 'data/cities.json';
    return $.ajax({
      url: url
    }).done(function(data) {
      var d;
      d = typeof data === 'string' ? JSON.parse(data) : data;
      return renderAll(d);
    });
  };
  render = function(opts) {
    var rendered, template;
    template = $(opts.template).html();
    Mustache.parse(template);
    if (opts.title) {
      opts.data.title = opts.title;
    }
    rendered = Mustache.render(template, opts.data);
    return $(opts.target).append(rendered);
  };
  renderAll = function(data) {
    var citiesAlphabetical, city, _i, _len;
    render({
      title: 'Groups',
      target: 'section.body',
      data: data,
      template: '#tmpl-groups'
    });
    render({
      title: 'Cities Original',
      target: 'section.body',
      data: data,
      template: '#tmpl-cities'
    });
    citiesAlphabetical = data.cities;
    citiesAlphabetical = _.sortBy(citiesAlphabetical, function(o) {
      return o.name;
    });
    for (_i = 0, _len = citiesAlphabetical.length; _i < _len; _i++) {
      city = citiesAlphabetical[_i];
      city.groupId = 0;
      delete city.groupOrder;
    }
    return render({
      title: 'Cities Alphabetical',
      target: 'section.body',
      data: {
        cities: citiesAlphabetical
      },
      template: '#tmpl-cities'
    });
  };
  return $(document).ready(function() {
    return loadData();
  });
});
