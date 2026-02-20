import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {

  function handlePress() {
    console.log('Add button pressed');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> My Tasks </Text>

      <View style={styles.divider}/>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Add a new task...'
          style={styles.inputText}
        />
        <Button
          title='Add'
          onPress={handlePress}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text> Task 1 </Text>
        <Text> Task 2 </Text>
        <Text> Task 3 </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#917ac6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#100404'
  },
  divider: {
    marginTop: 20,
    width: '80%',
    height: 1,
    backgroundColor: '#4a4646',
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: '80%',
    borderWidth: 1,
    borderColor: '#313929',
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 10
  },
  inputText: {
    flex: 1,
    padding: 10
  }
});