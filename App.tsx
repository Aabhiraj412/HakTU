/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




import React from 'react';
import Profile from './components/profile'
import YourComponent from './components/create';
import Nav from './components/nav'
import Sign from './components/sign'
import Login from './components/login';
import Home from './components/home';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (
    
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="Sign" component={Sign} />
    //   </Stack.Navigator>
    // </NavigationContainer>


    // <Profile />
    // <Login />
    // <Sign />
    <Home />
    // <YourComponent />
  )
}

const styles = StyleSheet.create({

});

export default App;
