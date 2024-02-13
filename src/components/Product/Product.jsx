import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';

export const Product = ({nome, tipo, qtde, preco, toggleProductEdit}) => {

    const [isSelected, setSelection] = useState(false);

    function onValueChange(){
        setSelection(prev => !prev)
    }

    return (
        <View style={styles.container}>
            <View style={styles.viewtop}>
                <View style={styles.viewleft}>                
                    <Checkbox value={isSelected} onValueChange={onValueChange}/>
                    <Text style={styles.title}>{nome}</Text>
                </View>
                <View style={styles.viewright}>
                    <Button onPress={toggleProductEdit} iconName='pencil' bBackgroundColor='#161E33' />
                </View>
            </View>
            <Text style={styles.text}>Quantidade: {qtde} {tipo}</Text>
            <Text style={styles.text}>Preço Total: {parseFloat(qtde) * parseFloat(preco)}</Text>
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