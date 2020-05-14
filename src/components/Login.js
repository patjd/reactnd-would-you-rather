import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown, Card, Image, Container, Divider, Button, Header} from 'semantic-ui-react'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {

  state = {
    authedUser: ''
  }

  handleChange = (event, data) => {
    this.setState({authedUser: data.value})
  }

  signIn = () => {
    this.props.dispatch(setAuthedUser(this.state.authedUser))
  }

  render() {
    const { users } = this.props

    const userOptions = Object.keys(users).map(id => ({
      key: id,
      text: users[id].name,
      value: id,
      image: { avatar: true, src: users[id].avatarURL }
    }))

    return (
      <Container textAlign='center' className='login-card'>
        <Card centered>
          <Card.Content>
            <Card.Header>Welcome to the Would you Rather App!</Card.Header>
            <Divider />
            <Image src='./logo192.png' wrapped ui={false} />
            <Header as="h3">Sign in</Header>
            <Dropdown
              placeholder='Select User'
              fluid
              selection
              options={userOptions}
              onChange={this.handleChange}
            />
          </Card.Content>
          <Button onClick={this.signIn}>Sign In</Button>
        </Card>
      </Container>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Login)