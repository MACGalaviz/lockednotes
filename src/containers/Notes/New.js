import React, {Component} from 'react';
import {connect} from 'react-redux';

import { View, Text } from 'react-native'
import { Card, Button } from 'react-native-elements'

import { showModal } from '../../actions/ux';

class New extends Component {
  constructor(props){
    super(props)
    this.handleShowModal = this.handleShowNewNote.bind(this)
  }

  handleShowNewNote = () => {
    const { dispatch } = this.props
    dispatch(showModal({newNote: false}))
  }

  render() {
    return (
      <Card>
        <Card.Title>Title</Card.Title>
        <Card.Divider/>
          <View>
            <Text>Content...</Text>
          </View>
        <Card.Divider/>
        <Button title="Close" onPress={this.handleShowNewNote} />
      </Card>
    )
  }
}

function mapStateToProps(state){
  const { ux } = state
  return {
    ux
  }
}

export default connect(mapStateToProps)(New);
