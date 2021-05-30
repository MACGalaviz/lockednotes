import React, {Component} from 'react';
import {connect} from 'react-redux';

import { View } from 'react-native'
import { Card, Button } from 'react-native-elements'

import { showModal } from '../../actions/ux';
import { editNewNote } from '../../actions/notes';

import Input from '../../components/simple/Input';

class New extends Component {
  constructor(props){
    super(props)
    this.handleShowModal = this.handleShowNewNote.bind(this)
  }

  handleShowNewNote = () => {
    const { dispatch } = this.props
    dispatch(showModal({newNote: false}))
  }

  handleEditNewNote = (editedNote) => {
    const { dispatch } = this.props
    dispatch(editNewNote(editedNote))
  }

  render() {
    const { newNote } = this.props
    const { content, checked } = newNote

    return (
      <Card>
        <Card.Title>Title</Card.Title>
        <Card.Divider/>
          <View>
            <Input
              placeHolder={'Write Something...'}
              onChange={(value) => { this.handleEditNewNote({ content: value }) }}
              value={content}
              checkBoxTitle={'Make It Copyable'}
              onChecked={() => { this.handleEditNewNote({ checked:!checked }) }}
              checked={checked}
            />
          </View>
        <Card.Divider/>
        <Button title="Close" onPress={this.handleShowNewNote} />
      </Card>
    )
  }
}

function mapStateToProps(state){
  const { ux, notes } = state
  return {
    newNote: notes.newNote,
    ux
  }
}

export default connect(mapStateToProps)(New);