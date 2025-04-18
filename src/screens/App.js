import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-web'
import { getUser, getUserSummaries } from '../api/tetrioEndpoints'

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Tetrio Comparator</Text>
        <TextInput
          style={styles.textInput}
          placeholder='user name'
          placeholderTextColor={'#808080'}
        />
        <Button
          title='USER INFO'
          style={[styles.button, { marginTop: 60 }]}
          onPress={() => {
            console.log('Button pressed');
          }}
        />
        <View style={styles.spacer}/>
        <View style={styles.userComparator}>
          <TextInput
          style={styles.textInput}
            placeholder='user1 name'
            placeholderTextColor={'#808080'}
          />
          <TextInput
            style={styles.textInput}
            placeholder='user2 name'
            placeholderTextColor={'#808080'}
          />
        </View>
        <Button
          title='COMPARE USERS'
          style={styles.button}
          onPress={() => {
            console.log('Button pressed');
          }}
        />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151314',
    alignItems: 'center',
    paddingTop: 80
  },
  userComparator: {
    margin: 20
  },
  title: {
    color: 'white',
    fontSize: 100,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  buttonGroup: {
    alignItems: 'center',
    margin: 60
  },
  spacer: {
    height: 20
  },
  textInput: {
    backgroundColor: 'white',
    marginTop: 10,
    height: 25,
    width: 300,
    textAlign: 'center',
    borderRadius: 40,
  },
  button: {
    marginTop: 10
  }
});
