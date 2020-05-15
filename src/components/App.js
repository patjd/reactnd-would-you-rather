import React, { Component } from 'react';
import Login from './Login'
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux'
import Dashboard from './Dashboard';
import Poll from './Poll'
import PollList from './PollList';
import AnsweringPoll from './AnsweringPoll';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser } = this.props

    return (
      <Router>
        { authedUser === null 
          ? <Route exact path='/' component={Login} />
          : <Route path='/home' component={Dashboard}/> }
      </Router>
    )
  }
}

function mapStateToProps ({authedUser}) {
  return {
    authedUser
  }
}
export default connect(mapStateToProps)(App);
