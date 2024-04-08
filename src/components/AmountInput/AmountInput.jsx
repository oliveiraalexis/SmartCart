import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'

const AmountInput = ({amount, setQtde}) => {
    const [value, setValue] = useState(parseInt(amount))

    const increment = () => {
        setValue(prevValue => prevValue + 1)
    };

    const decrement = () => {
        if (value > 1){
            setValue(prevValue => prevValue - 1)
        }
    };

    useEffect(() => (
        setQtde(value)

    ),[value])

    return (
        <View style={styles.container}>
            <Pressable onPress={decrement} style={styles.buttonLeft}>
                <Text style={styles.Text}>-</Text>
            </Pressable>
            <TextInput
                style={styles.inputNumber}
                editable={false}
                value={value.toString()}
                defaultValue={value.toString()}
                maxLength={4}
            />
            <Pressable onPress={increment} style={styles.buttonRight}>
                <Text style={styles.Text}>+</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputNumber: {
        height: 35,
        width: 50,
        paddingVertical: 5,
        paddingStart: 10,
        backgroundColor: '#D9D9D9',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 7,
        marginBottom: 7,
        color: '#000000'
    },
    buttonRight: {
        width: 20,
        height: 35,
        backgroundColor: '#546fbb',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 10, // Arredonda a borda superior esquerda
        borderBottomRightRadius: 10
    },
    buttonLeft: {
        width: 20,
        height: 35,
        backgroundColor: '#546fbb',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10, // Arredonda a borda superior esquerda
        borderBottomLeftRadius: 10
    },
    Text: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 15
    }
})

export default AmountInput
