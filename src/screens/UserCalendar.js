import React from 'react';
import {
	SafeAreaView,
	StatusBar,
	Text,
	View
} from 'react-native';
import {
	Calendar
} from 'react-native-calendars';

export default function UserCalendar() {

	return (
		<SafeAreaView >
			<StatusBar style="auto" />
			<Text>Calendar Screen</Text>
			<View >
				<Calendar
					current={'2022-01-08'}
					minDate={'2022-01-01'}
					maxDate={'2023-01-31'}
					onDayPress={day => {
						console.log('selected day', day);
					}}
					monthFormat={'MMMM yyyy'}
					onMonthChange={month => {
						console.log('month changed', month);
					}}
					hideExtraDays={true}
					firstDay={1}
					onPressArrowLeft={subtractMonth => subtractMonth()}
					onPressArrowRight={addMonth => addMonth()}
					disableAllTouchEventsForDisabledDays={true}
				/>
			</View>
		</SafeAreaView>
	);
};