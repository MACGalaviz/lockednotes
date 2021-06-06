import React, {Component} from 'react';
import {connect} from 'react-redux';

import { View } from 'react-native'
import { Card, Button } from 'react-native-elements'

import { showModal } from '../../actions/ux';
import { saveNewNote, editNewNote, clearNewNote } from '../../actions/notes';

import Input from '../../components/simple/Input';

class New extends Component {
  constructor(props){
    super(props)
  }

  handleShowNewNote = () => {
    const { dispatch } = this.props
    dispatch(showModal({ open: false, type: 'new' }))
  }

  handleEditNewNote = (editedNote) => {
    const { dispatch } = this.props
    dispatch(editNewNote(editedNote))
  }
  
  handleSaveNewNote = () => {
    const { dispatch, storage } = this.props
    dispatch(saveNewNote(storage))
    dispatch(clearNewNote())
    this.handleShowNewNote()
  }

  handleClearNewNote = () => {
    const { dispatch } = this.props
    dispatch(clearNewNote())
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
        <Button title="Save" onPress={this.handleSaveNewNote} />
        <Button title="Clear" onPress={this.handleClearNewNote} />
        <Button title="Close" onPress={this.handleShowNewNote} />
      </Card>
    )
  }
}

function mapStateToProps(state){
  const { ux, notes } = state
  return {
    storage: notes.storage,
    newNote: notes.newNote,
    ux
  }
}

export default connect(mapStateToProps)(New);
