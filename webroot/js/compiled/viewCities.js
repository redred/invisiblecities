define(['jquery', 'underscore', 'mustache', 'baseUtil'], function($, _, Mustache, util) {
  'use strict';
  var debug, loadData, name, render, renderAll, sortAlphabetical;
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
      _.each(d.cities, function(obj, i) {
        return obj.order = i + 1;
      });
      debug(d);
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
    var citiesAlphabetical, city, firstLetter, firstLetterData, firstLetters, found, i, j, letter, _i, _j, _k, _len, _len1, _len2;
    render({
      target: 'section.body-1',
      data: data,
      template: '#tmpl-text'
    });
    render({
      title: 'Groups',
      target: 'section.body-1',
      data: data,
      template: '#tmpl-groups'
    });
    render({
      title: 'Cities Original',
      target: 'section.body-1',
      data: data,
      template: '#tmpl-cities'
    });
    citiesAlphabetical = sortAlphabetical(data.cities, 'name');
    for (_i = 0, _len = citiesAlphabetical.length; _i < _len; _i++) {
      city = citiesAlphabetical[_i];
      city.groupId = 0;
      delete city.groupOrder;
    }
    render({
      title: 'Cities Alphabetical',
      target: 'section.body-1',
      data: {
        cities: citiesAlphabetical
      },
      template: '#tmpl-cities-alphabetical'
    });
    firstLetters = [];
    for (i = _j = 0, _len1 = citiesAlphabetical.length; _j < _len1; i = ++_j) {
      city = citiesAlphabetical[i];
      firstLetter = city.name.substring(0, 1).toLowerCase();
      found = false;
      for (j = _k = 0, _len2 = firstLetters.length; _k < _len2; j = ++_k) {
        letter = firstLetters[j];
        if (letter.character === firstLetter) {
          found = true;
          firstLetters[j].count++;
        }
      }
      if (found !== true) {
        firstLetters.push({
          character: firstLetter,
          count: 1
        });
      }
    }
    debug(firstLetters);
    firstLetterData = {
      firstLetters: firstLetters
    };
    debug(firstLetterData);
    return render({
      title: 'First Letter Frequency',
      target: 'section.body-1',
      data: firstLetterData,
      template: '#tmpl-first-letters'
    });
  };
  sortAlphabetical = function(arr, prop) {
    var newArr;
    newArr = arr;
    newArr = _.sortBy(newArr, function(o) {
      return o[prop];
    });
    return newArr;
  };
  return $(document).ready(function() {
    return loadData();
  });
});
