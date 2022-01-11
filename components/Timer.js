import React, { useState } from 'react';
import {
	View,
	Animated,
	Button,
	StyleSheet,
} from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function Timer() {
	const [isPlaying, setIsPlaying] = useState(true);
	const [resetKey, setResetKey] = useState(0);
	const [duration, setDuration] = useState(1200);

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

	const countdownTimer =
		<CountdownCircleTimer
			size={200}
			isPlaying={isPlaying}
			duration={duration}
			colors="#A30000"
			onComplete={() => [true, duration]}
			key={resetKey}
		>
			{({ remainingTime, animatedColor }) => (
				<Animated.Text style={{ color: animatedColor, fontSize: 48 }}>
					{formatTime(remainingTime)}
				</Animated.Text>
			)}
		</CountdownCircleTimer>;

	return (
		<View>
			{isPlaying ? countdownTimer :
				<View style={styles.viewStyle}>
					<Button
						title="DEC"
						onPress={decrementTimer}
					>
					</Button>
					{countdownTimer}
					<Button title="INC" onPress={incrementTimer}></Button>
				</View>
			}
			<Button
				title={isPlaying ? 'Stop Timer' : 'Start Timer'}
				onPress={() => setIsPlaying(prev => !prev)}
			>
			</Button>
			<Button
				title='Reset Timer'
				onPress={() => {
					setIsPlaying(false);
					setResetKey(prev => prev + 1);
				}}
			>
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	viewStyle: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	}
});

// Helper function to format time to MM:SS
function formatTime(time) {
	const minutes = Math.floor(time / 60);
	const seconds = time % 60;
	return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}