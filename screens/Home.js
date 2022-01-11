import React from 'react';
import {
	StyleSheet,
	SafeAreaView,
	StatusBar
} from 'react-native';
import Timer from '../components/Timer.js';

export default function Home() {
	return (
		<SafeAreaView style={styles.wrapper}>
			<StatusBar style="auto" />
			<Timer />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});