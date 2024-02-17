import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Header = ({title}) => {

	return (
		<SafeAreaView style={styles.Container}>
			<Icon name="shopping-cart" size={25} color="#FFFFFF" />
			<Text style={styles.text}>{title}</Text>
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
		fontSize: 15,
		paddingLeft: 14
	}
})