import React, {Component} from 'react';
import {connect} from 'react-redux';
import Clipboard from '@react-native-clipboard/clipboard';

import { View } from 'react-native'
import { Text, Card, Button } from 'react-native-elements'

import { showModal } from '../../actions/ux';

class Current extends Component {
  constructor(props){
    super(props)
  }

  handleCloseModal = () => {
    const { dispatch } = this.props
    dispatch(showModal({ open: false, type: 'current' }))
  }

 handleCopyToClipboard = () => {
    const { note } = this.props
    Clipboard.setString(note.content);
  };

  render() {
    const { note } = this.props
    const { content, checked } = note

    return (
      <Card>
        <Card.Title>{content}</Card.Title>
        <Card.Divider/>
          <View>
            <Text >{content}</Text>
          </View>
        <Card.Divider/>
        { checked && <Button title="Copy" onPress={this.handleCopyToClipboard} /> }
        <Button title="Close" onPress={this.handleCloseModal} />
      </Card>
    )
  }
}

function mapStateToProps(state){
  const { notes } = state
  return {
    note: notes.currentNote
  }
}

export default connect(mapStateToProps)(Current);