import React from 'react';
import {
	SafeAreaView,
	Text,
	StatusBar,
	Button,
	Image
} from 'react-native';

const style = {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center'
}

const Home = ({ navigation }) => (
	<SafeAreaView style={style}>
		<StatusBar style="auto" />
		<Text>Home Screen</Text>
		<Button
			title="Go to Settings"
			onPress={() => navigation.navigate("Settings")}
		>
		</Button>
	</SafeAreaView>
);

export default Home;