/* jshint asi:true, newcap:false */

import _ from "lodash"
import Q from "q"
import React from "react"

// makes React Developer Tools work
window.React = React

import "./template.jsx"

;(function (undefined) {
  "use strict";

  template.init(document.getElementById('yakyo'))

}())
