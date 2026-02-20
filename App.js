import {view, text , textInput, button ,stylesheet } from 'rect-native';

export default function App() {

  function handlepress() {
    console.log('add button Pressed');
  }
  return (
    <view style={styles.container}>
      <text style={styles.title}> My Tasks </text>

      <view style={styles.divider}/>
      
      <view style={styles.inputContainer}>
      <TextInput
       placeholder= 'Add a new task...'/>
       style={styles.inputtext}
      <button
       title='Add '
        onPress={(handlepress) => {}}/>
      </view>

      <veiw>

        <text> Task 1 </text>
        <text> Task 1 </text>
        <text> Task 1 </text>

      </veiw>
    </view>
  )

}

const styles = stylesheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#151212'
  },
  divider: {
    marginTop:20,
    width: '80%',
    height: 1,
    backgroundColor: '#ffffff',
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: '80%',
    boarderwidth: 1,
    borderColor: '#ffffff',
    borderRadius: 5,

  },
  inputtext: {
    flex: 1,
  }
})
