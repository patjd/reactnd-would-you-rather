import React, { Component } from 'react'
import { handleGetQuestions } from '../actions/questions'
import { connect } from 'react-redux'
import PollList from './PollList'

class Dashboard extends Component {

    componentDidMount() {
        this.props.dispatch(handleGetQuestions())
    }

    render() {
        return (
            <div>
                <PollList />
            </div>
        )
    }
}

export default connect()(Dashboard)