import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';

export const Product = ({nome, tipo, qtde, preco, toggleProductForm}) => {

    const [isSelected, setSelection] = useState(false);

    function onValueChange(){
        setSelection(prev => !prev)
    }

    return (
        <View style={styles.container}>
                <View style={styles.viewleft}>                
                    <View style={styles.viewtop}>
                        <Checkbox value={isSelected} onValueChange={onValueChange}/>
                        <Text style={styles.title}>{nome}</Text>
                    </View>
                    <Text style={styles.text}>Quantidade: {qtde} {tipo}</Text>
                    <Text style={styles.text}>Preço Total: {parseFloat(qtde) * parseFloat(preco)}</Text>
                </View>
                <View style={styles.viewright}>
                    <Button onPress={null} iconName='trash' bBackgroundColor='#161E33' size={15}/>
                    <Button onPress={toggleProductForm} iconName='pencil' bBackgroundColor='#161E33' size={15}/>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderBottomColor: '#717785',
        borderBottomWidth: 2,
        paddingVertical: 15,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        alignItems: 'center'
    },
    viewleft: {
        justifyContent: 'space-around'
    },
    viewright: {
        marginTop: 7,
        justifyContent: 'space-between'
    }
})