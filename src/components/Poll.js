import React, { Component } from 'react'
import { Card, Button, Item } from 'semantic-ui-react'
import { connect } from 'react-redux'

class Poll extends Component {
  render() {
    const { user, poll } = this.props
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>{user.name} asks:</Card.Header>
        </Card.Content>
        <Card.Content>
          <Item.Group>
            <Item>
              <Item.Image src={user.avatarURL} size='tiny' rounded />
              <Item.Content>
                <Item.Header as='h3'>Would You Rather</Item.Header>
                <Item.Description>{poll.optionOne.text}</Item.Description>
                <Item.Meta><Button primary fluid>View Poll</Button></Item.Meta>
              </Item.Content>
            </Item>
          </Item.Group>
        </Card.Content>
      </Card>
    )
  }
}

function mapStateToProps ({users, questions}, {id}) {
  const poll = questions[id]
  const user = users[poll.author]

  return {
    poll,
    user
  }
}

export default connect(mapStateToProps)(Poll)