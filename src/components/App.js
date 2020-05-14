import React, { Component } from 'react';
import Login from './Login'
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux'
import Dashboard from './Dashboard';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser } = this.props

    return (
      <div>
        { authedUser === null 
          ? <Login />
          : <Dashboard/> }
      </div>
    )
  }
}

function mapStateToProps ({authedUser}) {
  return {
    authedUser
  }
}
export default connect(mapStateToProps)(App);
