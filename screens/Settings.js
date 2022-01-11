import React from 'react';
import {
	SafeAreaView,
	Text,
	StatusBar,
	Button
} from 'react-native';

export default function Settings({ navigation }) {

	return (
		<SafeAreaView style={styles}>
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

const styles = {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center'
}

