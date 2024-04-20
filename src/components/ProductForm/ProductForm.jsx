import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { Button } from '../Button/Button'
import { usePriceMask } from '../../hooks/usePriceMask'
import { addItem, editItem } from '../../hooks/useStorageManager'
import AmountInput from '../AmountInput/AmountInput'

export const ProductForm = ({listName, productToBeEdited, toggleProductForm}) => {
    
    const edition = Object.keys(productToBeEdited).includes("nome", "tipo", "qtde", "preco", "checked")
    
    const [nomeProduto, setNome] = useState(edition ? productToBeEdited.nome : '');
    const [qtdeProduto, setQtde] = useState(edition ? productToBeEdited.qtde.toString() : '1');
    const [precoProduto, setPreco] = useState(edition ? productToBeEdited.preco.toString() : '0');
    const [mascaraPrecoProduto, setMascaraPreco] = useState(edition ? usePriceMask(productToBeEdited.preco.toString()) : usePriceMask('0'));
    let newProduct = {}
    
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(edition ? productToBeEdited.tipo : 'un');
    const [items, setItems] = useState([
        {label: 'Kg', value: 'kg'},
        {label: 'Un', value: 'un'}
    ]);
    
    useEffect(() => {
        newProduct = {nome: nomeProduto, tipo: value, qtde: parseInt(qtdeProduto), preco: parseFloat(precoProduto), checked: false}
    }, [nomeProduto, qtdeProduto, precoProduto, value])

    const formatarPreco = (preco) => {

        const onlyDigits = preco
            .split("")
            .filter(s => /\d/.test(s))
            .join("")
            .padStart(3, "0")
        const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2)

        setPreco(digitsFloat)
        setMascaraPreco(usePriceMask(digitsFloat))
    }

    return (
        <View style={styles.container}>
            <View style={styles.viewinputs}>
                <View>
                    <Text style={styles.text}>Produto:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setNome}
                        value={nomeProduto}
                        defaultValue={nomeProduto}
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
                        amount={qtdeProduto}
                        setAmount={setQtde}
                    />
                </View>
                <View>
                    <Text style={styles.text}>Preço unitário:</Text>
                    <TextInput
                        style={styles.inputNumber}
                        onChangeText={formatarPreco}
                        value={mascaraPrecoProduto}
                        defaultValue={mascaraPrecoProduto}
                        keyboardType="numeric"
                        maxLength={9}
                    />
                </View>
            </View>
            <View style={styles.button}>
                <Button disabled={nomeProduto == '' || qtdeProduto == '' || parseInt(qtdeProduto) < 1} onPress={!edition ? () => addItem(listName, newProduct, toggleProductForm) : () => editItem(listName, productToBeEdited, newProduct, toggleProductForm)} iconName={'check'} bRadius={10} bBackgroundColor={'#178b4c'} width={118} height={33}/>
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
