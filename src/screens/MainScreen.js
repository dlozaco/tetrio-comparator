import { StatusBar } from 'expo-status-bar'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font'
import { Tiny5_400Regular } from '@expo-google-fonts/tiny5'
import { Button, TextInput } from 'react-native-web'
import { getUser, getUserSummaries } from '../api/tetrioEndpoints'
import image from '../../assets/tetrioBackground.jpg'
import { useState } from 'react'

export default function MainScreen({ navigation }) {
  const [user, setUser] = useState('')
  const [firstUser, setFirstUser] = useState('')
  const [secondUser, setSecondUser] = useState('')
  const onValueChange = (text) => setUser(text); 
  const [fontsLoaded] = useFonts({
    Tiny5_400Regular
  })

  const goToUser = (user) => {
    navigation.navigate('User', {name: user})
  }

  return (
    <ImageBackground source={image} style={{
      width: '100%',
      height: '100%'
    }}>
      <View style={styles.container}>
          <Text style={styles.title} numberOfLines={2}>Tetrio Comparator</Text>

          <TextInput
            style={styles.textInput}
            placeholder='username'
            placeholderTextColor={'#949493'}
            value={user}
            onChangeText={onValueChange}
          />
            <View style={styles.spacerUser}/>
            <Button
              title='USER INFO'
              style={{ marginTop: 60 }}
              color='#D54DBB'
              onPress={() => { goToUser(user) }}
            />
            <View style={styles.spacer}/>

            <TextInput
            style={styles.textInput}
              placeholder='username 1'
              placeholderTextColor={'#949493'}
            />
            <TextInput
              style={styles.textInput}
              placeholder='username 2'
              placeholderTextColor={'#808080'}
            />
            <View style={styles.spacerUser}/>
            <Button
              title='COMPARE USERS'
              color='#D54DBB'
              onPress={() => {
                alert("Has perdido otra vez")
              }}
            />
        <StatusBar style="dark" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100
  },
  userComparator: {
    margin: 20
  },
  spacerUser: {
    height: 20
  },
  title: {
    color: 'white',
    fontSize: '528%',
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    fontFamily: 'Tiny5_400Regular'
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
    fontSize: 25,
    marginTop: 10,
    height: '5%',
    width: '60%',
    textAlign: 'center',
    borderRadius: 5
  },
});
