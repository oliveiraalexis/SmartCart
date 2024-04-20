import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { Button } from '../Button/Button'
import { usePriceMask } from '../../hooks/usePriceMask'
import { addItem, editItem } from '../../hooks/useStorageManager'
import AmountInput from '../AmountInput/AmountInput'

export const ProductForm = ({listName, productToBeEdited, toggleProductForm}) => {
    
    const edition = Object.keys(productToBeEdited).includes("name", "type", "quantity", "price", "checked")
    
    const [productName, setProductName] = useState(edition ? productToBeEdited.name : '');
    const [productQuantity, setProductQuantity] = useState(edition ? productToBeEdited.quantity.toString() : '1');
    const [productPrice, setProductPrice] = useState(edition ? productToBeEdited.price.toString() : '0');
    const [productPriceMask, setProductPriceMask] = useState(edition ? usePriceMask(productToBeEdited.price.toString()) : usePriceMask('0'));
    let newProduct = {}
    
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(edition ? productToBeEdited.type : 'un');
    const [items, setItems] = useState([
        {label: 'Kg', value: 'kg'},
        {label: 'Un', value: 'un'}
    ]);
    
    useEffect(() => {
        newProduct = {name: productName, type: value, quantity: parseInt(productQuantity), price: parseFloat(productPrice), checked: false}
    }, [productName, productQuantity, productPrice, value])

    const formatPrice = (price) => {

        const onlyDigits = price
            .split("")
            .filter(s => /\d/.test(s))
            .join("")
            .padStart(3, "0")
        const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)

        setProductPrice(digitsFloat)
        setProductPriceMask(usePriceMask(digitsFloat))
    }

    return (
        <View style={styles.container}>
            <View style={styles.viewinputs}>
                <View>
                    <Text style={styles.text}>Produto:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setProductName}
                        value={productName}
                        defaultValue={productName}
                        maxLength={30}
                    />
                </View>
                <View>
                    <Text style={styles.text}>Tipo de quantidade:</Text>
                    <View>
                        <DropDownPicker
                            style={styles.dropdown}
                            dropDownContainerStyle={{
                                backgroundColor: '#D9D9D9',
                                maxWidth: 90,
                                borderColor: '#D9D9D9',
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}
                            labelStyle={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            multiple={false}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.text}>Quantidade:</Text>
                    <AmountInput
                        amount={productQuantity}
                        setAmount={setProductQuantity}
                    />
                </View>
                <View>
                    <Text style={styles.text}>Preço unitário:</Text>
                    <TextInput
                        style={styles.inputNumber}
                        onChangeText={formatPrice}
                        value={productPriceMask}
                        defaultValue={productPriceMask}
                        keyboardType="numeric"
                        maxLength={9}
                    />
                </View>
            </View>
            <View style={styles.button}>
                <Button disabled={productName == '' || productQuantity == '' || parseInt(productQuantity) < 1} onPress={!edition ? () => addItem(listName, newProduct, toggleProductForm) : () => editItem(listName, productToBeEdited, newProduct, toggleProductForm)} iconName={'check'} bRadius={10} bBackgroundColor={'#178b4c'} width={118} height={33}/>
                <Button onPress={() => toggleProductForm()} iconName={'remove'} bRadius={10} bBackgroundColor={'#8b1717'} width={118} height={33}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15
    },
    input: {
        height: 35,
        width: '100%',
        borderRadius: 10,
        paddingVertical: 5,
        paddingStart: 10,
        backgroundColor: '#D9D9D9',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 7,
        marginBottom: 7
    },
    inputNumber: {
        height: 35,
        width: 90,
        borderRadius: 10,
        paddingVertical: 5,
        paddingStart: 10,
        backgroundColor: '#D9D9D9',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 7,
        marginBottom: 7,
        color: '#000000'
    },
    dropdown: {
        borderWidth: 0,
        borderRadius: 10,
        backgroundColor: '#D9D9D9',
        width: 90,
        minHeight: 35,
        maxMenuHeight: 10,
        marginTop: 7,
        marginBottom: 7
    },
    price: {
        marginTop: 17,
    },
    viewinputs:{
        marginVertical: 20,
        marginHorizontal: 25
    },
    button:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
})
