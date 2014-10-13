/** @jsx React.DOM */

import _ from "lodash"
import React from "react/addons"
import Immutable from "immutable"

;(function (undefined) {
  "use strict";

  var ClassSet = React.addons.classSet;

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

  var ArenaOrder = React.createClass({
    config: {
      group: Immutable.Sequence(["Tic", "Tac", "Toe"]),
      enemies: Immutable.Sequence(["The bad guy"]),
      orders: Immutable.Sequence([
        "Attack",
        "Defend",
        "Protect",
        "Help",
      ]),
      submitBtns: Immutable.Sequence(["Go", "Cancel"]),
    },
    getInitialState() {
      return {
        group: Immutable.Set(),
        order: null,
        targets: Immutable.Set(),
      }
    },
    selectYakyo(name) {
      return () => {
        var group = this.state.group
        if (group.contains(name)) {
          this.setState({group: group.remove(name)})
        } else {
          this.setState({group: group.add(name)})
        }
      }
    },
    selectOrder(name) {
      return () => this.setState({order: this.state.order == name ? null : name})
    },
    selectTarget(name) {
      return () => {
        var targets = this.state.targets
        if (targets.contains(name)) {
          this.setState({targets: targets.remove(name)})
        } else {
          this.setState({targets: targets.add(name)})
        }
      }
    },
    render() {
      return (
        <div className="arena-order" style={{height: '100px'}}>
          <div className="arena-order-who">
            {this.config.group.map(yakyo => {
              var classes = ClassSet({
                btn: true,
                'arena-order-yakyo': true,
                selected: this.state.group.contains(yakyo),
              })
              return (
                <div className={classes} onClick={this.selectYakyo(yakyo)}><YakyoImg />{yakyo}</div>
              )
            }).toJS()}
          </div>
          <div className="arena-order-orders">
            {this.config.orders.map(order => {
              var classes = ClassSet({
                btn: true,
                'arena-order-order': true,
                selected: this.state.order == order,
              })
              return <div className={classes} onClick={this.selectOrder(order)}>{order}!</div>
            }).toJS()}
          </div>
          <div className="arena-order-targets">
            {this.config.enemies.map(enemy => {
              var classes = ClassSet({
                btn: true,
                'arena-order-target': true,
                selected: this.state.targets.contains(enemy),
              })
              return <div className={classes} onClick={this.selectTarget(enemy)}>{enemy}</div>
            }).toJS()}
            {this.config.group.map(yakyo => {
              var classes = ClassSet({
                btn: true,
                'arena-order-target': true,
                selected: this.state.targets.contains(yakyo),
              })
              return <div className={classes} onClick={this.selectTarget(yakyo)}><YakyoImg />{yakyo}</div>
            }).toJS()}
          </div>
          <div className="arena-order-submit">
            {this.config.submitBtns.map(submitBtn =>
              <div className="btn arena-order-submit-button">{submitBtn}!</div>
            ).toJS()}
          </div>
        </div>
      )
    }
  })

  var ArenaActions = React.createClass({
    getInitialState() {
      return Immutable.Sequence([
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
      ])
    },
    render() {
      return (
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
      )
    }
  })

  var Arena = React.createClass({
    render() {
      return (
        <div id="arena">
          <ArenaOrder />
          <ArenaActions />
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
