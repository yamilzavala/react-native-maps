import React from 'react';
import {View, Text, TextInput} from 'react-native'

export default InputComponent = ({title, ...rest}) => {
    return (
        <View>
            <Text>{title}</Text>
            <TextInput {...rest}/>
        </View>
    )
}