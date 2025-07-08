import { StyleSheet, Text, ImageBackground, View } from 'react-native'
import { useFonts } from 'expo-font'
import image from '../../assets/tetrioBackground.jpg'
import { Tiny5_400Regular } from '@expo-google-fonts/tiny5'
import { useEffect, useState } from 'react'
import { showMessage } from 'react-native-flash-message'
import { getUser, getUserSummaries } from '../api/tetrioEndpoints'
import { FlatList } from 'react-native-web'


export default function UserScreen({ navigation, route }) {
  const [user, setUser] = useState({})
  const [fontsLoaded] = useFonts({
      Tiny5_400Regular
  })

  useEffect(() => {
    fetchUser()
  }, [route])

  const renderUser = ({ item }) => {
    <Text>{ item.username }</Text>
  }

  const fetchUser = async () => {
    try {
      const fetchedUser = await getUserSummaries(route.params.name)
      setUser(fetchedUser)
    } catch (error) {
      showMessage({
        message: `There was an error while retrieving user: ${error}`,
        type: 'error',

      })
    }
  }


  return (
    <ImageBackground source={image} style={{
          width: '100%',
          height: '100%'
        }}>
      <FlatList
        contentContainerStyle={styles.container}
        ListHeaderComponent={<Text style={styles.title} numberOfLines={2}>Tetrio Comparator</Text>}
        data={user}
      />
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
