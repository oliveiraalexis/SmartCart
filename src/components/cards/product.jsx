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
                        <Text style={styles.text}>R$ 100,00</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#ffffff',
        borderBottomColor: '#000000',
        borderBottomWidth: 3,
        paddingVertical: 10
    },
    title: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 20,
    },
    text: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 17
    },
    viewup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: '#1b8ce9'

    },
    viewdown: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#e06411'
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
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
    },
    dropdown: {
        marginTop: 12,
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: 'transparent',
        width: '70%',
        minHeight: 35,
        alignSelf: 'center',
    },
    price: {
        marginTop: 17,
        backgroundColor: '#bf30c4'
    }
})

export default Product