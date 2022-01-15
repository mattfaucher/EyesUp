import React, { useState } from "react";
import { View, Animated, StyleSheet, TouchableOpacity, Text } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import Icon from "react-native-vector-icons/FontAwesome";
import formatTime from "../hooks/formatTime";
import sendPushNotification from "../notifications/sendPushNotification";



export default function Timer({ expoPushToken }) {
  const MIN_DURATION = 10;
  const MAX_DURATION = 40;
  const [isPlaying, setIsPlaying] = useState(true);
  const [resetKey, setResetKey] = useState(0);
  const [duration, setDuration] = useState(1200);
  const [colorOn, setColorOn] = React.useState(true);
  const delayToRestartTimerInMilliSeconds = 20000;
  //note: "#007AFF" is the ios blue color


  const message = {
    to: expoPushToken,
    sound: "default",
    title: "Time to look up!",
    body: "Look at something ~20ft away for 20 seconds!",
    data: {},
  };

  const incrementTimer = () => {
    if (duration >= 60 * MAX_DURATION) {
      setDuration(60 * MAX_DURATION);
      setResetKey((prev) => prev + 1);
    } else {
      setDuration((prev) => prev + 60);
      setResetKey((prev) => prev + 1);
    }
  };

  const decrementTimer = () => {

    if (duration <= 60 * MIN_DURATION) {
      setDuration(60 * MIN_DURATION);
      setResetKey((prev) => prev + 1);
    } else {
      setDuration((prev) => prev - 60);
      setResetKey((prev) => prev + 1);
    }
  };

  const sendPush = async () =>
    await sendPushNotification(expoPushToken, message);


  return (
    <View>
      <View style={styles.viewStyle}>
        {isPlaying ? (
          <></>
        ) : (
          <Icon
            name="chevron-down"
            size={80}
            style={styles.chevronStyle}
            color={global.currentColor[0]}
            onPress={decrementTimer}
          />
        )}
        <CountdownCircleTimer
          size={200}
          isPlaying={isPlaying}
          duration={duration}
          colors={[[colorOn ? global.currentColor[0] : global.currentColor[0]]]}
          onComplete={() => {
            sendPush();
            return [true, delayToRestartTimerInMilliSeconds];
          }}
          key={resetKey}
        >
          {({ remainingTime, animatedColor }) => (
            <Animated.Text style={{ color: global.currentColor[0], fontSize: 48 }}>
              {remainingTime == 0 ? (
                <Animated.Text color={global.currentColor[0]}>Done</Animated.Text>
              ) : (
                formatTime(remainingTime)
              )}
            </Animated.Text>
          )}
        </CountdownCircleTimer>
        {isPlaying ? (
          <></>
        ) : (
          < Icon
            name="chevron-up"
            size={80}
            style={styles.chevronStyle}
            color={global.currentColor[0]}
            onPress={incrementTimer}
          />
        )}
      </View>
      <View style={styles.container}>
        <View style={styles.button}
          backgroundColor={global.currentColor[0]}>
          <TouchableOpacity
            onPress={() => {
              setIsPlaying((prev) => !prev)
              //setColorOn(prev => !prev)
            }}
          >
            <Text style={styles.ButtonText}>{isPlaying ? "Stop Timer" : "Start Timer"}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}
          backgroundColor={global.currentColor[0]}>
          <TouchableOpacity
            onPress={() => {
              setIsPlaying(false);
              setResetKey((prev) => prev + 1);

              //setColorOn(prev => !prev)
              //console.log(global.currentColor[0]);
            }}
          >
            <Text style={styles.ButtonText}>Reset Timer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    width: 150,
    height: 40,
    marginHorizontal: 10,
    marginVertical: 50,
    backgroundColor: "#007AFF",
    elevation: 30,
    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOpacity: 0.8,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
    borderRadius: 20,
  },
  ButtonText: {
    color: 'white',
    fontSize: 18,
    width: 150,
    height: 40,
    textAlign: "center",
    marginHorizontal: 0,
    marginVertical: 8,


  },
  chevronStyle: {
    marginHorizontal: 10
    //color= { global.currentColor[0] }
  },
});
