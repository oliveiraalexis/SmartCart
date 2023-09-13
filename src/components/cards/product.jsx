import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import DeleteButton from '../buttons/deleteButton'
import DropDownPicker from 'react-native-dropdown-picker';

const Product = () => {

    const [isSelected, setSelection] = useState(false);
    const [qtde, setQtde] = useState(1);
    const [preco, setPreco] = useState(0.00);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('un');
    const [items, setItems] = useState([
        {label: 'Kg', value: 'kg'},
        {label: 'Un', value: 'un'}
    ]);

    return (
        <View style={styles.container}> 
            <View style={styles.viewup}>
                <View style={styles.viewcheck}>
                    <CheckBox
                        disabled={false}
                        value={isSelected}
                        onValueChange={() => setSelection(!isSelected)}
                    />
                    <Text style={styles.title}>Torrada Integral Adria</Text>
                </View>
                <DeleteButton/>
            </View>
            <View style={styles.viewdown}>
                <View style={styles.viewdownelements}>
                    <Text style={styles.text}>Tipo</Text>
                    <View>
                        <DropDownPicker
                            style={styles.dropdown}
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            placeholder=''

                            multiple={false}
                            mode="BADGE"
                        />
                    </View>
                </View>
                <View style={styles.viewdownelements}>
                    <Text style={styles.text}>Qtde</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setQtde}
                        value={qtde}
                        defaultValue='1'
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.viewdownelements}>
                    <Text style={styles.text}>Preço unit.</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPreco}
                        value={preco}
                        defaultValue="0,00"
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.viewdownelements}>
                    <Text style={styles.text}>Total</Text>
                    <View style={styles.price}>
                        <Text style={styles.title}>R$ 100,00</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        //backgroundColor: '#ffffff',
        borderBottomColor: '#717785',
        borderBottomWidth: 2,
        paddingVertical: 15
    },
    title: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    text: {
        color: '#717785',
        fontWeight: 'bold',
        fontSize: 18
    },
    viewup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        //backgroundColor: '#1b8ce9'

    },
    viewdown: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        //backgroundColor: '#e06411',
        marginVertical: 10
    },
    viewdownelements: {
        alignItems: 'center',
        flex: 1
    },
    viewcheck: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        height: 35,
        width: '70%',
        marginTop: 12,
        borderRadius: 10,
        paddingVertical: 5,
        paddingStart: 10,
        backgroundColor: '#D9D9D9',
        fontSize: 20,
        fontWeight: 'bold'
    },
    dropdown: {
        marginTop: 12,
        borderWidth: 0,
        borderRadius: 10,
        backgroundColor: '#D9D9D9',
        width: '70%',
        minHeight: 35,
        alignSelf: 'center'
    },
    price: {
        marginTop: 17,
    }
})

export default Product