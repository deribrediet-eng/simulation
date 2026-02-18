import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{ useState} from 'react';

export default function App() {
  const [message, setMessage] = useState("ይጫኑ");
  return (
    <View style={styles.container}>
      <Text onPress={() => setMessage(" ትጭነዋል!")} style={{fontSize: 24}}>{message}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#676c51',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
