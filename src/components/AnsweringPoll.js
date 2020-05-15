import React, { Component } from 'react'
import { Grid, Segment, Header, Image, Button, Card, Form, Radio, Item } from 'semantic-ui-react'

class AnsweringPoll extends Component {

  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
        <Card className="answering-poll">
        <Card.Content>
          <Card.Header>Jaydeep Patel asks:</Card.Header>
        </Card.Content>
        <Card.Content>
          <Item.Group>
          <Item>
          <Item.Image src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' size='tiny' rounded />
          <Item.Content>
            <Item.Header as='h3'>Would You Rather</Item.Header>
            <Item.Description>
            <Form>
              <Form.Field>
                <Radio
                  label='Choose this'
                  name='radioGroup'
                  value='this'
                  checked={this.state.value === 'this'}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label='Or that'
                  name='radioGroup'
                  value='that'
                  checked={this.state.value === 'that'}
                  onChange={this.handleChange}
                />
              </Form.Field>
            </Form>
            </Item.Description>
            
            <Button fluid>Submit</Button>
          </Item.Content>
          </Item>
          </Item.Group>
        </Card.Content>
        </Card>
      
          
          
          
          
    

      /* // <Grid columns={3} centered>
      //   <Segment.Group>
      //     <Segment inverted>
      //       <Header as="h4" textAlign='left'>Jaydeep Patel asks:</Header>
      //     </Segment>
      //     <Segment.Group compact horizontal>
      //       <Segment>
      //         <Image src='./tyler.jpg' size='tiny' verticalAlign='middle' floated='left' circular />
      //       </Segment>
      //       <Segment>
      //         <Header as='h3'>Would You Rather</Header>
      //         ...Learn React...
      //         <Button fluid>View Poll</Button>
      //       </Segment>
      //     </Segment.Group> 
      //   </Segment.Group>
      // </Grid> */
    )
  }
}

export default AnsweringPoll