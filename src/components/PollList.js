import React, { Component } from 'react'
import { Tab, Grid } from 'semantic-ui-react'
import Poll from './Poll'
import { connect } from 'react-redux'

class PollList extends Component {
  render() {
    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <Tab 
            menu={{ secondary: true, pointing: true, attached:true, tabular:true, widths: 2 }}
            data={{...this.props}} 
            panes={[
              {
                menuItem: 'Unanswered Polls',
                render: (props) => props.data.unansweredQuestions.map(poll => <Poll key={poll} id={poll}/>)
              },
              {
                menuItem: 'Answered Polls',
                render: (props) => props.data.answeredQuestions.map(poll => <Poll key={poll} id={poll}/>)
              },
            ]} />
        </Grid.Column>
      </Grid>
    )
  }
}

function mapStateToProps ({questions, users, authedUser}) {
  const answeredQuestions = Object.keys(users[authedUser].answers)
  const questionsList = Object.keys(questions)
  const unansweredQuestions = questionsList.filter(que => !answeredQuestions.includes(que))
  
  return {
    answeredQuestions,
    unansweredQuestions,
  }
}

export default connect(mapStateToProps)(PollList)