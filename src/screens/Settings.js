import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ColorPicker } from 'react-native-color-picker'
import Slider from '@react-native-community/slider';
import { NavigationHelpersContext } from '@react-navigation/native';
import currentColor from '../components/Timer'

export default function Settings() {


	//global.changedColor = !global.changedColor;


	return (
		<View style={styles.container}>
			<ColorPicker
				onColorSelected={
					(color) => global.currentColor[0] = color
					//console.log(!global.changedColor[0])
					//global.setColorOn = (prev => !prev)
				}


				//alterColor(color)}
				//alert(`Color selected: ${color}`)}
				//alterColor(color)}
				style={styles.colorpiker}
				sliderComponent={Slider}

			/>

		</View>
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
		height: 600,
	}
});