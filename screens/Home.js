import React from 'react';
import {
	SafeAreaView,
	StatusBar,
	Image,
	Pressable,
} from 'react-native';
import Timer from './components/Timer.js';

const style = {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center'
}

export default function Home({ navigation }) {
	return (
		<SafeAreaView style={style}>
			<StatusBar style="auto" />
			<Timer duration={10} />
			<Pressable
				onPress={() => navigation.navigate("Settings")}>
				<Image
					style={{ width: 50, height: 50 }}
					source={require('../assets/gear.png')}
				/>
			</Pressable>
		</SafeAreaView>
	);
}