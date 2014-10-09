/** @jsx React.DOM */

import _ from "lodash"
import React from "react"
import Immutable from "immutable"

;(function (undefined) {
  "use strict";

  var Header = React.createClass({
    render() {
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
    render() {
      return <img className="yakyo" src="/assets/img/yakyo.png" />
    }
  })

  var GardenYakyo = React.createClass({
    render() {
      return <YakyoImg />
    }
  })

  var Garden = React.createClass({
    render() {
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
    render() {

      var ctx = {
        order: {
          group: Immutable.Sequence(["Tic", "Tac", "Toe"]),
          enemies: Immutable.Sequence(["The bad guy"]),
          orders: Immutable.Sequence([
            "Attack",
            "Defend",
            "Protect",
            "Help",
            "Combine",
          ]),
          submitBtns: Immutable.Sequence(["Go", "Cancel"]),
        },
        actions: Immutable.Sequence([
          {
            who: "The bad guy",
            what: "prepares an attack",
          }, {
            who: "Tic",
            what: "prepares a fireball",
            responses: Immutable.Sequence([
              "Stop!",
              "Great!",
            ]),
          }, {
            who: "Tac",
            what: "does not know what to do",
          }, {
            who: "Toe",
            what: "protect himself",
            responses: Immutable.Sequence([
              "Stop!",
              "Great!",
            ]),
          },
        ]),
      }

      return (
        <div id="arena">
          <div className="arena-order" style={{height: '100px'}}>
            <div className="arena-order-who">
              {ctx.order.group.map(yakyo =>
                <div className="btn arena-order-yakyo"><YakyoImg />{yakyo}</div>
              ).toJS()}
            </div>
            <div className="arena-order-orders">
              {ctx.order.orders.map(order =>
                <div className="btn arena-order-order">{order}!</div>
              ).toJS()}
            </div>
            <div className="arena-order-targets">
              {ctx.order.enemies.map(enemy =>
                <div className="btn arena-order-target">{enemy}</div>
              ).toJS()}
              {ctx.order.group.map(yakyo =>
                <div className="btn arena-order-target"><YakyoImg />{yakyo}</div>
              ).toJS()}
            </div>
            <div className="arena-order-submit">
              {ctx.order.submitBtns.map(submitBtn =>
                <div className="btn arena-order-submit-button">{submitBtn}!</div>
              ).toJS()}
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
    render() {
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
    render() {
      return (
        <div id="logs">
          {this.logs().map(log => <Log key={log.key} log={log} />).toJS()}
        </div>
      )
    }
  })

  var Game = React.createClass({
    render() {
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
    init(el) {
      React.renderComponent(<Game/>, el)
    }
  }

}())
