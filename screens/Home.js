import React from 'react';
import {
	SafeAreaView,
	Text,
	StatusBar,
	Image,
	Pressable
} from 'react-native';
import { TouchableOpacity } from 'react-native-web';

const style = {
	flex: 1,
	alignItems: 'center',
	justifyContent: 'center'
}


const Home = ({ navigation }) => (
	<SafeAreaView style={style}>
		<StatusBar style="auto" />
		<Text>Home Screen</Text>
		
		<Pressable onPress={() => navigation.navigate("Settings")}>
			<Image
				style={{width: 50, height:50}}
				source={require('../assets/gear.png')}
			/>
		</Pressable>
	</SafeAreaView>
	
);

export default Home;