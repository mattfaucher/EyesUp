import React from 'react';
import {
	SafeAreaView,
	Text,
	StatusBar,
	Button,
	StyleSheet,
	TextInput
} from 'react-native';

const style = {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center'
}
export default function Settings({ navigation}) {

	const [number, onChangeNumber] = React.useState(null);
	return (
	<SafeAreaView style={style}>
		<StatusBar style="auto" />
		<Text>Settings Screen</Text>
		<Button
			title="Go Home"
			onPress={() => navigation.navigate("Home")}
		>
		</Button>
		<TextInput
			style={StyleSheet.TextInput}
			onChangeText={onChangeNumber}
			value={number}
			placeholder="input new timer duration"
			keyboardType="number-pad"
		/>
		
		<Button
			title = "Create new timer"
			onPress={() => {
				//TODO: alter key within Timer to reset time?
			}}
		>
		</Button>

	</SafeAreaView>
	);
};

