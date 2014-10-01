/** @jsx React.DOM */

var React = require('react')

;(function (undefined) {
  "use strict";

  var HelloWorld = React.createClass({
    render: function() {
      return (
        <p>
          Hello, <input type="text" placeholder="Your name here" />!
          It is {this.props.date.toTimeString()}
        </p>
      )
    }
  })

  module.exports.init = function() {
    setInterval(function() {
      React.renderComponent(
        <HelloWorld date={new Date()} />,
        document.getElementById('example')
      )
    }, 500)
  }

}())
