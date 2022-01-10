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
		

	</SafeAreaView>
	);
};

