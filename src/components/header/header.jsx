import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {

	return (
		<SafeAreaView style={styles.Container}>
			<Icon name="shopping-cart" size={25} color="#FFFFFF" />
			<Text style={styles.text}>SMARTCART - LISTAS DE COMPRAS</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	Container: {
		backgroundColor: '#161E33',
		width: '100%',
		height: 70,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row'
	},
	text: {
		color: '#FFFFFF',
		fontWeight: 'bold',
		fontSize: 20,
		paddingLeft: 14
	}
});

export default Header;