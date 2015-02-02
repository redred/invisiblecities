define(['jquery', 'mustache', 'baseUtil'], function($, Mustache, baseUtil) {
  'use strict';
  var debug, loadData, name, render, renderAll;
  name = 'viewCities';
  debug = baseUtil.debug;
  loadData = function() {
    var url;
    url = 'data/cities.json';
    return $.ajax({
      url: url
    }).done(function(data) {
      return renderAll(data);
    });
  };
  render = function(opts) {
    var rendered, template;
    template = $(opts.template).html();
    Mustache.parse(template);
    rendered = Mustache.render(template, opts.data);
    return $(opts.target).append(rendered);
  };
  renderAll = function(data) {
    render({
      target: 'section.body',
      data: data,
      template: '#tmpl-groups'
    });
    return render({
      target: 'section.body',
      data: data,
      template: '#tmpl-cities'
    });
  };
  return $(document).ready(function() {
    return loadData();
  });
});
