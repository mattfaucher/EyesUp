import React from 'react';
import {
	SafeAreaView,
	Text,
	StatusBar
} from 'react-native';

export default function Settings() {

	return (
		<SafeAreaView style={styles}>
			<StatusBar style="auto" />
			<Text>Settings Screen</Text>
		</SafeAreaView>
	);
};

const styles = {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center'
}

