import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ColorPicker } from 'react-native-color-picker'
import Slider from '@react-native-community/slider';
import { NavigationHelpersContext } from '@react-navigation/native';
import currentColor from '../components/Timer'
import { borderTopColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function Settings() {


	//global.changedColor = !global.changedColor;


	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.titleLayout}>select a new timer color.
			</Text>
			<ColorPicker
				onColorSelected={
					(color) => global.currentColor[0] = color
					//console.log(!global.changedColor[0])
					//global.setColorOn = (prev => !prev)
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
		//textAlign: 'center',
		alignContent: 'stretch'
	}
});