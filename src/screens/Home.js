import React, { useState, useEffect, useRef } from 'react';
import {
	StyleSheet,
	SafeAreaView,
	StatusBar
} from 'react-native';
import Timer from '../components/Timer.js';
import * as Notifications from 'expo-notifications';
import registerForPushNotificationsAsync from '../notifications/registerForPushNotificationsAsync';

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: true,
		shouldSetBadge: false,
	}),
});

export default function Home() {
	const [expoPushToken, setExpoPushToken] = useState('');
	const [notification, setNotification] = useState(false);
	const notificationListener = useRef();
	const responseListener = useRef();

	useEffect(() => {
		registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
		// This listener is fired whenever a notification is received while the app is foregrounded
		notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
			setNotification(notification);
		});
		// This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
		responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
			console.log(response);
		});
		return () => {
			Notifications.removeNotificationSubscription(notificationListener.current);
			Notifications.removeNotificationSubscription(responseListener.current);
		};
	}, []);

	return (
		<SafeAreaView style={styles.wrapper}>
			<StatusBar style="auto" />
			<Timer expoPushToken={expoPushToken} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});