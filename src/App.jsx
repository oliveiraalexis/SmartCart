import React from 'react';
import { StyleSheet } from 'react-native';
import Lists from './pages/ListsScreen/ListsScreen';
import DetalheLista from './pages/ListDetailScreen/ListDetailScreen';

const App = () => {

	return (
		<Lists/>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	}
});

export default App;