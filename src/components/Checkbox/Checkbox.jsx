import React, {useState} from 'react'
import { Platform } from 'react-native'
import RNCheckBox from '@react-native-community/checkbox'

export const Checkbox = ({onValueChange, value}) => {

    if (Platform.OS === 'android'){
        return (
            <RNCheckBox
                disabled={false}
                value={value}
                onValueChange={onValueChange}
                tintColors={{true: '#FFFFFF', false: '#FFFFFF'}}
            />
        )
    }

    return (
        <RNCheckBox
            disabled={false}
            value={value}
            onValueChange={onValueChange}
            tintColor= '#FFFFFF'
            onCheckColor= '#FFFFFF'
            onFillColor= '#FFFFFF'
            onTintColor= '#FFFFFF'
        />
    )
}
