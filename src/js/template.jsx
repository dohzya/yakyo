/** @jsx React.DOM */

var _ = require('lodash')
var React = require('react')

;(function (undefined) {
  "use strict";

  function drawWithBorder(length, lines) {
    return (
      <div id="logs">
        <pre className="ascii">
          +{_.range(0, length).map(function () { return '-' }).join('')}+
        </pre>
        {
          _.map(lines, function (line) {
            var chars = Array(length)
            for (var i=0; i < length; i++) { chars[i] = line[i] || ' ' }
            return (
              <pre className="ascii">
                |{chars.join('')}|
              </pre>
            )
          })
        }
        <pre className="ascii">
          +{_.range(0, length).map(function () { return '-' }).join('')}+
        </pre>
      </div>
    )
  }

  var Header = React.createClass({
    length: function() {
      return 80
    },
    lines: function () {
      return [" Garden | Training | Exploration | dressage"]
    },
    render: function() {
      return drawWithBorder(this.length(), this.lines())
    }
  })

  var Garden = React.createClass({
    length: function() {
      return 80
    },
    lines: function () {
      return ['       \o/', '', ' -o-', '', '', '                ---+-+-o=']
    },
    render: function() {
      return drawWithBorder(this.length(), this.lines())
    }
  })

  var Logs = React.createClass({
    logs: function () {
      return [
        {date: 'now', msg: 'Bla bla 1'},
        {date: 'now', msg: 'Bla bla 2'},
        {date: 'now', msg: 'Bla bla 3'},
      ]
    },
    length: function() {
      return 80
    },
    lines: function () {
      return _.map(this.logs(), function (log) { return log.msg })
    },
    render: function() {
      return drawWithBorder(this.length(), this.lines())
    }
  })

  var Game = React.createClass({
    img: function() {
      return "+-----------------------------------+\n" +
             "+                                   +\n" +
             "+-----------------------------------+"
    },
    render: function() {
      return (
        <div id="game">
          <Header/>
          <Garden/>
          <Logs/>
        </div>
      )
    }
  })

  module.exports = {
    init: function(el) {
      React.renderComponent(<Game/>, el)
    }
  }

}())
