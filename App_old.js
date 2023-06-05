import { StatusBar } from "expo-status-bar"

import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native"
import { Stopwatch, Timer } from "react-native-stopwatch-timer"
import { useState } from "react"

export default function App() {
  const [timerStart, setTimerStart] = useState(false)
  const [timerReset, setTimerReset] = useState(false)
  const [totalDuration, setTotalDuration] = useState(3000) // 60000 = 1 minute

  const handleTimerComplete = () => {
    Alert.alert("Fin du chrono", "Au suivant !", [
      {
        text: "OK",
        onPress: () => {
          console.log("OK Pressed")
          setTimerStart(false)
          setTimerReset(true)
        },
      },
    ])
  }

  const toggleTimer = () => {
    setTimerStart(!timerStart)
    setTimerReset(false)
  }

  const resetTimer = () => {
    setTimerStart(false)
    setTimerReset(true)
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Timer
          totalDuration={totalDuration}
          msecs
          start={timerStart}
          reset={timerReset}
          option={styles.timerText}
          handleFinish={handleTimerComplete}
        />
        <TouchableHighlight onPress={toggleTimer}>
          <Text style={{ fontSize: 30 }}>{!timerStart ? "Start" : "Stop"}</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={resetTimer}>
          <Text style={{ fontSize: 30 }}>Reset</Text>
        </TouchableHighlight>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  timerText: {
    container: {
      backgroundColor: "#000",
      padding: 5,
      borderRadius: 5,
      width: 220,
      text: { fontSize: 30, color: "#FFF", marginLeft: 7 },
    },
    text: {
      fontSize: 30,
      color: "#FFF",
      marginLeft: 7,
    },
  },
})
