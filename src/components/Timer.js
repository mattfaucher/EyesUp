import React, { useState, useEffect } from 'react';
import {
	View,
	Animated,
	Button,
	StyleSheet
} from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import Icon from 'react-native-vector-icons/FontAwesome';
import formatTime from '../hooks/formatTime';
import sendPushNotification from '../notifications/sendPushNotification';

export default function Timer({ expoPushToken }) {
	const [isPlaying, setIsPlaying] = useState(true);
	const [resetKey, setResetKey] = useState(0);
	const [duration, setDuration] = useState(1200);
	const delayToRestartTimerInMilliSeconds = 20000;
	const message = {
		to: expoPushToken,
		sound: 'default',
		title: 'Time to look up!',
		body: 'Look at something ~20ft away for 20 seconds!',
		data: {}
	};

	const incrementTimer = () => {
		// 40 min is the maximum duration
		if (duration >= (60 * 40)) {
			setDuration(60 * 40);
			setResetKey(prev => prev + 1);
		} else {
			setDuration(prev => prev + 60);
			setResetKey(prev => prev + 1);
		}
	}

	const decrementTimer = () => {
		// 5 min is the minimum duration
		if (duration <= (60 * 5)) {
			setDuration(60 * 5);
			setResetKey(prev => prev + 1);
		} else {
			setDuration(prev => prev - 60);
			setResetKey(prev => prev + 1);
		}
	}

	const push = async () => await sendPushNotification(expoPushToken, message);

	return (
		<View>
			<View style={styles.viewStyle}>
				{isPlaying ?
					<></> :
					<Icon name="chevron-down" size={80} style={styles.chevronStyle} onPress={decrementTimer} />
				}
				<CountdownCircleTimer
					size={200}
					isPlaying={isPlaying}
					// TODO: uncomment original duration line
					//duration={duration}
					duration={5}
					colors="#007AFF"
					onComplete={() => {
						push();
						return [true, 5000];
					}}
					key={resetKey}
				>
					{({ remainingTime, animatedColor }) => (
						<Animated.Text style={{ color: animatedColor, fontSize: 48 }}>
							{remainingTime == 0 ?
								<Animated.Text
									color={animatedColor}
								>
									Done
								</Animated.Text> :
								formatTime(remainingTime)}
						</Animated.Text>
					)}
				</CountdownCircleTimer>
				{isPlaying ?
					<></> :
					<Icon name="chevron-up" size={80} style={styles.chevronStyle} onPress={incrementTimer} />
				}
			</View>
			<View style={styles.container}>
				<View style={styles.button}>
					<Button
						title={isPlaying ? 'Stop Timer' : 'Start Timer'}
						color='white'
						onPress={() => setIsPlaying(prev => !prev)}
					>
					</Button>
				</View>
				<View style={styles.button}>
					<Button
						title='Reset Timer'
						color='white'
						onPress={() => {
							setIsPlaying(false);
							setResetKey(prev => prev + 1);
						}}
					>
					</Button>
				</View>
			</View>
		</View >
	);
}

const styles = StyleSheet.create({
	viewStyle: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},

	container: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	button: {
		width: '40%',
		height: 40,
		marginVertical: 50,
		backgroundColor: '#007AFF',
		elevation: 30,
		shadowColor: 'rgba(0, 0, 0, 0.4)',
		shadowOpacity: 0.8,
		shadowRadius: 15,
		shadowOffset: { width: 1, height: 13 },
		borderRadius: 20,
	},
	chevronStyle: {
		marginHorizontal: 10,
		color: '#007AFF'
	}
});