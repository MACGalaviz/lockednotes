import React from 'react'

import { Modal } from 'react-native'
import { Card, Button } from 'react-native-elements'

export function SimpleModal({visible, Content, onClose}) {
  return ( 
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        onClose
      }}
    >
      <Content />
    </Modal>
  )
};

export default SimpleModal;