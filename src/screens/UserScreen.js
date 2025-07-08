import { StyleSheet, Text, ImageBackground } from 'react-native'
import { useFonts } from 'expo-font'
import image from '../../assets/tetrioBackground.jpg'
import { Tiny5_400Regular } from '@expo-google-fonts/tiny5'


export default function UserScreen({ navigation, route }) {
    const [fontsLoaded] = useFonts({
        Tiny5_400Regular
    })
    return (
      <ImageBackground source={image} style={{
            width: '100%',
            height: '100%'
          }}>
        <Text style={styles.title} numberOfLines={2}>Tetrio Comparator</Text>
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
