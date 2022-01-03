import React, { useState } from 'react';
import {
	View,
	Animated,
	Button
} from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function Timer({ duration }) {
	const [isPlaying, setIsPlaying] = useState(true);
	return (
		<View>
			<CountdownCircleTimer
				isPlaying={isPlaying}
				duration={duration}
				colors="#A30000"
				onComplete={() => [true, duration]}
			>
				{({ remainingTime, animatedColor }) => (
					<Animated.Text style={{ color: animatedColor }}>
						{formatTime(remainingTime)}
					</Animated.Text>
				)}
			</CountdownCircleTimer>
			<Button
				title={isPlaying ? 'Stop Timer' : 'Resume Timer'}
				onPress={() => setIsPlaying(!isPlaying)}
			>
			</Button>
		</View>
	);
}

// Helper function to format time to MM:SS
function formatTime(time) {
	const minutes = Math.floor(time / 60);
	const seconds = time % 60;
	return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}