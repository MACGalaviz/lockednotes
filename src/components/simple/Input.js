import React from 'react'

import { View } from 'react-native'
import { Input, CheckBox } from 'react-native-elements'

export function SimpleInput({
  placeHolder="",
  Icon=null,
  onChange=null,
  value="",
  style={},
  checkBoxTitle="",
  checked=false,
  onChecked=null
}){

 return (
    <View>
      <Input
        placeholder={placeHolder}
        leftIcon={Icon}
        style={style}
        onChangeText={onChange}
        value={value}
      />
      <CheckBox
        center
        title={checkBoxTitle}
        checked={checked}
        onPress={onChecked}
      />
    </View>
  )
};
    
export default SimpleInput;
  