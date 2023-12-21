import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Platform } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import { Button } from '../Button/Button';

export const Product = () => {

    const [isSelected, setSelection] = useState(false);
    const checkColor = Platform.OS === 'android' 
        ? {true: '#FFFFFF', false: '#FFFFFF'} 
        : {
            tintColor: '#FFFFFF',
            onCheckColor: '#FFFFFF',
            onFillColor: '#FFFFFF',
            onTintColor: '#FFFFFF'
        }

        console.log(checkColor)

    return (
        <View style={styles.container}>
            <View style={styles.viewtop}>
                <View style={styles.viewleft}>                
                    <CheckBox
                        disabled={false}
                        value={isSelected}
                        onValueChange={() => setSelection(!isSelected)}
                        tintColors={checkColor}
                        //IOS colors:
                        // tintColor= '#FFFFFF'
                        // onCheckColor= '#FFFFFF'
                        // onFillColor= '#FFFFFF'
                        // onTintColor= '#FFFFFF'
                    />
                    <Text style={styles.title}>Torrada Integral Adria</Text>
                </View>
                <View style={styles.viewright}>
                    <Button  iconName='pencil' bBackgroundColor='#161E33' />
                </View>
            </View>
            <Text style={styles.text}>Quantidade: 1un</Text>
            <Text style={styles.text}>Preço Total: R$ 9,99</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderBottomColor: '#717785',
        borderBottomWidth: 2,
        paddingVertical: 15,
        paddingHorizontal: 5
    },
    title: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15,
    },
    text: {
        color: '#717785',
        fontWeight: 'bold',
        fontSize: 12,
        marginTop: 6,
        marginLeft: 7

    },
    viewtop: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
    ,
    viewleft: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'

    },
    viewright: {
        marginTop: 7
    }
})