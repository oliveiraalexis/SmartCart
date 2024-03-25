import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from '../Button/Button'
import { Checkbox } from '../Checkbox/Checkbox'
import { PopupMenu } from '../PopupMenu/PopupMenu'
import { usePriceMask } from '../../hooks/usePriceMask'

export const Product = ({product, toggleProductForm, deleteProduct}) => {

    const [isSelected, setSelection] = useState(false);
    const precoTotal = parseFloat(product.qtde) * parseFloat(product.preco)
    let checkboxColor = isSelected == true ? '#348555' : '#FFFFFF'
    
    function onValueChange(){
        setSelection(prev => !prev)
    }

    return (
        <View style={styles.container}>
                <View style={styles.viewleft}>                
                    <View style={styles.viewtop}>
                        <Checkbox value={isSelected} onValueChange={onValueChange} checkboxColor={checkboxColor}/>
                        <Text style={{
                            color: checkboxColor,
                            fontWeight: 'bold',
                            fontSize: 15,}}
                        >{product.nome}</Text>
                    </View>
                    <Text style={styles.text}>Quantidade: {product.qtde} {product.tipo}</Text>
                    <Text style={styles.text}>Preço Total: {usePriceMask(precoTotal.toString())}</Text>
                </View>
                <View style={styles.viewright}>
                    <PopupMenu param={product} del={deleteProduct} toggleForm={toggleProductForm}/>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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
        color: '#808696',
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