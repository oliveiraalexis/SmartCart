import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from '../Button/Button'
import { Checkbox } from '../Checkbox/Checkbox'
import { PopupMenu } from '../PopupMenu/PopupMenu'
import { usePriceMask } from '../../hooks/usePriceMask'

export const Product = ({product, toggleProductForm, deleteProduct}) => {

    const [isSelected, setSelection] = useState(false);

    function onValueChange(){
        setSelection(prev => !prev)
    }

    const precoTotal = parseFloat(product.qtde) * parseFloat(product.preco)

    return (
        <View style={styles.container}>
                <View style={styles.viewleft}>                
                    <View style={styles.viewtop}>
                        <Checkbox value={isSelected} onValueChange={onValueChange}/>
                        <Text style={styles.title}>{product.nome}</Text>
                    </View>
                    <Text style={styles.text}>Quantidade: {product.qtde} {product.tipo}</Text>
                    <Text style={styles.text}>Preço Total: {usePriceMask(precoTotal.toString())}</Text>
                </View>
                <View style={styles.viewright}>
                    {/* <Button onPress={() => deleteProduct(product)} iconName='trash' bBackgroundColor='#161E33' size={15}/>
                    <Button onPress={toggleProductForm} iconName='pencil' bBackgroundColor='#161E33' size={15}/> */}
                    <PopupMenu param={product} del={deleteProduct} toggleForm={toggleProductForm}/>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //borderBottomColor: '#717785',
        //borderBottomWidth: 2,
        paddingVertical: 15,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',

        marginHorizontal: 20,
        marginTop: 20,
        backgroundColor: '#161E33',
        borderRadius: 10
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