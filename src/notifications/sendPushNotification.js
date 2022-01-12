// Can use this function below, OR use Expo's Push Notification Tool-> https://expo.dev/notifications
const sendPushNotification = async (expoPushToken, message) => {

	await fetch('https://exp.host/--/api/v2/push/send', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Accept-encoding': 'gzip, deflate',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(message),
	});
}

export default sendPushNotification;