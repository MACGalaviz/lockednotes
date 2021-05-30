import React, {Component} from 'react';
import {connect} from 'react-redux';

import { View } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import New from './New'
import ModalNewNote from '../../components/simple/Modal'
import Card from '../../components/simple/Card';

import { showModal } from '../../actions/ux';
import { setCurrentNote } from '../../actions/notes';

class Notes extends Component {
  constructor(props){
    super(props)
    this.handleShowModal = this.handleShowNewNote.bind(this)
  }

  handleShowNewNote = () => {
    const { dispatch } = this.props
    dispatch(showModal({newNote: true}))
  }

  handleSelectNote = (note) => {
    const { dispatch } = this.props
    dispatch(setCurrentNote(note))
  }

  render() {
    const { modalNewNote, notes } = this.props;

    return (
      <View>
        <ModalNewNote visible={modalNewNote} Content={New} onClose={()=>{Alert.alert("Modal has been closed.");}}/>
        <Button
          icon={<Icon name="plus" color="white" />}
          title=" New Note"
          onPress={this.handleShowNewNote}
        />
        {
          notes.map((note, id) => (
            <Card key={id} content={note.content} onClick={() => { this.handleSelectNote(note) }} />
          ))
        }
      </View>
    )
  }
}

function mapStateToProps(state){
  const { ux, notes } = state

  return {
    modalNewNote: ux.modal.newNote,
    notes: notes.notes,
  }
}

export default connect(mapStateToProps)(Notes);