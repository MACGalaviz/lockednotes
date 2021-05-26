import React from 'react'

import { Input } from 'react-native-elements'

export function SimpleInput({placeHolder="", Icon=null, value="", onChange=null, style={}}) {
  return (
    <Input
        placeholder={placeHolder}
        leftIcon={Icon}
        style={style}
        onChangeText={onChange}
        value={value}
    />
  )
};

export default SimpleInput;