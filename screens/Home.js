import React from 'react';
import {
	StyleSheet,
	SafeAreaView,
	StatusBar,
	Image,
	Pressable,
	View,
	Text
} from 'react-native';
import Timer from './components/Timer.js';

// 20 min (in seconds)
const duration = 1200;


export default function Home({ navigation}) {

	return (
		<SafeAreaView style={styles.wrapper}>
			<StatusBar style="auto" />
			
			<Timer duration={duration} />
			
			<View style={styles.settingsButton}>
				<Pressable
					onPress={() => navigation.navigate("Settings")}>
					<Image
						style={styles.settingsIcon}
						source={require('../assets/gear.png')}
					/>
				</Pressable>
			</View>
			<View style={styles.calendarButton}>
				<Pressable
					onPress={() => navigation.navigate("UserCalendar")}>
					<Image
						style={styles.settingsIcon}
						source={require('../assets/calendar.png')}
					/>
				</Pressable>
			</View>

			
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	settingsButton: {
		position: 'absolute',
		right: 10,
		top: 10
	},
	calendarButton: {
		position: 'absolute',
		left: 10,
		top: 10
	},
	settingsIcon: {
		width: 50,
		height: 50
	}
});