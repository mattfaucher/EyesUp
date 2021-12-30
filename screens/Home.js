import React from 'react';
import {
	SafeAreaView,
	Text,
	StatusBar,
	Button,
	Image,
	StyleSheet
} from 'react-native';

const style = {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center'
}

const styleLogo = StyleSheet.create({
	container: {
		paddingTop: 50,
	},
	settingIcon: {
		width: 50,
		height: 50,
	}
});

const Home = ({ navigation }) => (
	<SafeAreaView style={style}>
		<StatusBar style="auto" />
		<Text>Home Screen</Text>
		<Button
			title="Go to Settings"
			onPress={() => navigation.navigate("Settings")}
		>
		</Button>
		<Image
			source={require('./assets/gear.png')}
			style={styleLogo.settingIcon}
		/>
	</SafeAreaView>
);

export default Home;