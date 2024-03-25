import React from 'react'
import { Platform } from 'react-native'
import RNCheckBox from '@react-native-community/checkbox'

export const Checkbox = ({onValueChange, value, checkboxColor}) => {

    if (Platform.OS === 'android'){
        return (
            <RNCheckBox
                disabled={false}
                value={value}
                onValueChange={onValueChange}
                tintColors={{true: checkboxColor, false: checkboxColor}}
            />
        )
    }

    return (
        <RNCheckBox
            disabled={false}
            value={value}
            onValueChange={onValueChange}
            tintColor={checkboxColor}
            onCheckColor={checkboxColor}
            onFillColor={checkboxColor}
            onTintColor={checkboxColor}
        />
    )
}
