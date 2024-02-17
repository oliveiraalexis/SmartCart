import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '../Button/Button';

export const Header = ({goBack, title}) => {

	const jContent = goBack ? 'flex-start' : 'center'

	return (
		<SafeAreaView style={{...styles.Container, alignItems: jContent, justifyContent: 'center'}}>
			<View style={{flexDirection: 'row', alignItems: 'center'}}>
				{goBack && (<Button onPress={goBack} iconName={'arrow-left'} size={24} bRadius={0} bBackgroundColor={'#161E33'} width={60} height={'auto'} />
				)}
				{!goBack && (<Icon name="shopping-cart" size={25} color="#FFFFFF" />)}
				<Text style={styles.text}>{title}</Text>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	Container: {
		backgroundColor: '#161E33',
		width: '100%',
		height: 70
	},
	text: {
		color: '#FFFFFF',
		fontWeight: 'bold',
		fontSize: 15,
		paddingLeft: 14
	}
})