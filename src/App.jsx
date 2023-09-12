import React from 'react';
import { StyleSheet } from 'react-native';
//import Listas from './pages/listas/listas';
import DetalheLista from './pages/detalhelista/detalhelista';

const App = () => {

	return (
		<DetalheLista/>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	}
});

export default App;