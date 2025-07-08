import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import MainScreen from './MainScreen'
import UserScreen from './UserScreen'

const Stack = createNativeStackNavigator()

export default function App({ navigation }) {
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='MainScreen'>
            <Stack.Screen name='MainScreen' component={MainScreen}
              options={{
                title:'Main Screen'
              }}/>
            <Stack.Screen name='User' component={UserScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
