import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ColorPicker } from 'react-native-color-picker'
import Slider from '@react-native-community/slider';

export default function Settings() {

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.titleLayout}>select a new timer color.
			</Text>
			<ColorPicker
				onColorSelected={
					(color) => global.currentColor[0] = color
				}
				style={styles.colorpiker}
				sliderComponent={Slider}
			/>
			<Text style={styles.textLayout}>select color for timer by tapping center button
			</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 2,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	colorpiker: {
		width: 350,
		height: 550,
	},
	titleLayout: {

		top: 30,
		"color": "black",
		"fontSize": 30,
		"fontWeight": "bold",
		"marginBottom": 36,


	},
	textLayout: {
		alignContent: 'stretch'
	}
});