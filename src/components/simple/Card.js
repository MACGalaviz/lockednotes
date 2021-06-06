import React from 'react'

import { ListItem } from 'react-native-elements'

export function SimpleCard({ content, onClick }){

 return (
    <ListItem onPress={onClick} bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{content}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  )
};
    
export default SimpleCard;