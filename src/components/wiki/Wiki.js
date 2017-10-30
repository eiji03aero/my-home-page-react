import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import WikiList from './WikiList.js'
import WikiShow from './WikiShow.js'
import WikiEdit from './WikiEdit.js'

import './wiki.scss'

export default class Wiki extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <Router>
        <div className="wiki">
          <div className="wikiHeader">
          </div>
          <Route exact path="/wiki" component={ WikiList } />
          <Route path="/wiki/edit/:name" component={ WikiEdit } />
        </div>
      </Router>
    )
  }
}