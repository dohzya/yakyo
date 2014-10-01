/* jshint asi:true, newcap:false */

var _ = require('lodash')
var Q = require('q')
var React = require('react')

var template = require('./template.jsx')

;(function (undefined) {
  "use strict";

  template.init()

  Q("oui").then(console.log.bind(console))

}())
