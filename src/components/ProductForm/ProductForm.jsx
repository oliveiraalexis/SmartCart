import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { Button } from '../Button/Button'
import { usePriceMask } from '../../hooks/usePriceMask'

export const ProductForm = ({listName, productForm, addProduct, editProduct, toggleProductForm}) => {
    
    const edicao = Object.keys(productForm).includes("nome", "tipo", "qtde", "preco")
    
    const [nomeProduto, setNome] = useState(edicao ? productForm.nome : '');
    const [qtdeProduto, setQtde] = useState(edicao ? productForm.qtde.toString() : '1');
    const [precoProduto, setPreco] = useState(edicao ? productForm.preco.toString() : '0');
    const [mascaraPrecoProduto, setMascaraPreco] = useState(edicao ? usePriceMask(productForm.preco.toString()) : 'R$ 0,00');
    
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(edicao ? productForm.tipo : 'un');
    const [items, setItems] = useState([
        {label: 'Kg', value: 'kg'},
        {label: 'Un', value: 'un'}
    ]);
    
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

    let newProduct = {nome: nomeProduto, tipo: value, qtde: parseInt(qtdeProduto), preco: parseFloat(precoProduto)}

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
                                maxWidth: 80,
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
                    <TextInput
                        style={styles.inputNumber}
                        onChangeText={setQtde}
                        value={qtdeProduto}
                        defaultValue={qtdeProduto}
                        keyboardType="numeric"
                        maxLength={5}
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
                <Button onPress={!edicao ? () => addProduct(newProduct) : () => editProduct(listName, productForm, newProduct)} iconName={'check'} bRadius={10} bBackgroundColor={'#178b4c'} width={118} height={33}/>
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
        width: 80,
        borderRadius: 10,
        paddingVertical: 5,
        paddingStart: 10,
        backgroundColor: '#D9D9D9',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 7,
        marginBottom: 7
    },
    dropdown: {
        borderWidth: 0,
        borderRadius: 10,
        backgroundColor: '#D9D9D9',
        width: 80,
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
