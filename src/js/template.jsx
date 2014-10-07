/** @jsx React.DOM */

var _ = require('lodash')
var React = require('react')
var Immutable = require('immutable');

;(function (undefined) {
  "use strict";

  var Header = React.createClass({
    render: function() {
      return (
        <div id="header" className="header">
          <span className="header-item">Garden</span>
          <span className="header-item">Training</span>
          <span className="header-item">Exploration</span>
          <span className="header-item">Dressage</span>
        </div>
      )
    }
  })

  var YakyoImg = React.createClass({
    render: function() {
      return <img className="yakyo" src="/assets/img/yakyo.png" />
    }
  })

  var GardenYakyo = React.createClass({
    render: function() {
      return <YakyoImg />
    }
  })

  var Garden = React.createClass({
    render: function() {
      return (
        <div id="garden" style={{height: '100px'}}>
          <GardenYakyo />
          <GardenYakyo />
          <GardenYakyo />
        </div>
      )
    }
  })

  var Arena = React.createClass({
    render: function() {
      return (
        <div id="arena">
          <div className="arena-order" style={{height: '100px'}}>
            <div className="arena-order-who">
              <div className="btn arena-order-yakyo"><YakyoImg />Tic</div>
              <div className="btn arena-order-yakyo"><YakyoImg />Tac</div>
              <div className="btn arena-order-yakyo"><YakyoImg />Toe</div>
            </div>
            <div className="arena-order-orders">
              <div className="btn arena-order-order">Attack!</div>
              <div className="btn arena-order-order">Defend!</div>
              <div className="btn arena-order-order">Protect!</div>
              <div className="btn arena-order-order">Help!</div>
              <div className="btn arena-order-order">Combine!</div>
            </div>
            <div className="arena-order-targets">
              <div className="btn arena-order-target">The bad guy</div>
              <div className="btn arena-order-target"><YakyoImg />Tic</div>
              <div className="btn arena-order-target"><YakyoImg />Tac</div>
              <div className="btn arena-order-target"><YakyoImg />Toe</div>
            </div>
            <div className="arena-order-submit">
              <div className="btn arena-order-submit-button">Go!</div>
              <div className="btn arena-order-submit-button">Cancel</div>
            </div>
          </div>
          <hr />
          <div className="arena-actions" style={{height: '100px'}}>
            <div className="arena-action">
              <div className="arena-action-who">The bad guy</div>
              <div className="arena-action-what">prepares an attack</div>
              <div className="arena-action-responses"></div>
            </div>
            <div className="arena-action">
              <div className="arena-action-who">Tic</div>
              <div className="arena-action-what">prepares a fireball</div>
              <div className="arena-action-responses">
                <div className="btn arena-action-response">Stop!</div>
                <div className="btn arena-action-response">Great!</div>
              </div>
            </div>
            <div className="arena-action">
              <div className="arena-action-who">Tac</div>
              <div className="arena-action-what">does not know what to do</div>
              <div className="arena-action-responses"></div>
            </div>
            <div className="arena-action">
              <div className="arena-action-who">Toe</div>
              <div className="arena-action-what">protect himself</div>
              <div className="arena-action-responses">
                <div className="btn arena-action-response">Stop!</div>
                <div className="btn arena-action-response">Great!</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  })

  var Log = React.createClass({
    render: function() {
      return <div className="line">{this.props.log.msg}</div>
    }
  })



  var Logs = React.createClass({
    logs: function () {
      return Immutable.Sequence([
        {key: 3, date: 'now', msg: 'The bad guy attacked Tic with a punch, but failed'},
        {key: 4, date: 'now', msg: 'Toe attacked the bad guy with Tunnel'},
      ])
    },
    render: function() {
      return (
        <div id="logs">
          {this.logs().map(function (log) {
            return <Log key={log.key} log={log} />
          }).toJS()}
        </div>
      )
    }
  })

  var Game = React.createClass({
    render: function() {
      return (
        <div id="game">
          <Header/>
          <Garden/>
          <Arena/>
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
