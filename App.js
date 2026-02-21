import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() === '') return;

    setTasks([...tasks, task]);
    setTask('');
  }

  return (
    <View style={styles.container}>

      <Text style={styles.header}>Daily Planner</Text>

      <View style={styles.inputSection}>
        <TextInput
          placeholder="Type your task..."
          value={task}
          onChangeText={setTask}
          style={styles.input}
        />

        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.taskList}>
        {tasks.map((item, index) => (
          <Text key={index} style={styles.taskItem}>
            • {item}
          </Text>
        ))}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  inputSection: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
  },

  addButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 15,
    justifyContent: 'center',
    marginLeft: 10,
    borderRadius: 8,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  taskList: {
    marginTop: 10,
  },

  taskItem: {
    fontSize: 16,
    marginBottom: 8,
  },
});