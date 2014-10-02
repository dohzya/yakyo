/* jshint asi:true, newcap:false */

var _ = require('lodash')
var Q = require('q')
var React = require('react')

// makes React Developer Tools work
window.React = React

var template = require('./template.jsx')

;(function (undefined) {
  "use strict";

  template.init(document.getElementById('yakyo'))

}())
