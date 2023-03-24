import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>; 

import Icon from 'react-native-vector-icons/Ionicons';


function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
//navigators
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import Home from "./screens/Home";
import Account from "./screens/Account";
import History from "./screens/History";
import TakeMe from "./screens/TakeMe";
// import Signup from "./screens/Signup";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { enableScreens } from 'react-native-screens';

//screens
// import Chats from './screens/Chats';
// import Groups from './screens/Groups';
// import Chat from './screens/Chat';
// import Moments from './screens/Moments';
// import Settings from './screens/Settings';
// import changeAvatar from './screens/changeAvatar';
// import Help from './screens/Help';
// import Account from './screens/Account';
// import Status from './screens/Status';
// import ChangeName from './screens/ChangeName';
// import ChatProfileScreen from './screens/ChatProfileScreen'

// import { colors } from './config/constants';
// import { useNavigation } from "@react-navigation/core";

// //icons
// import Icon from 'react-native-vector-icons/Ionicons'

// //firebase
// import {auth, app} from "./config/firebase"
// import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth"


const Tabs = createBottomTabNavigator()

const TabsScreen = ({route}: {route : any}, {navigation}: {navigation: any}) => {

  // const {chats, status, moments, backkColor} = route.params

  

  return (
  <Tabs.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle:{backgroundColor: 'white'},
          tabBarIcon: ({ focused, color, size, name }) => {
            let iconColor = 'gray'

            if (route.name === 'Home') {
              iconColor = 'black'
            } else if (route.name === 'Account') {
              iconColor = focused ? 'black' : 'gray';
            }

            // You can return any component that you like here!
            return <Icon style={{color: iconColor}} name={name} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}
      >
         {/* screenOptions={{headerShown: false, tabBarStyle:{backgroundColor: 'white'}}} */}
      
    <Tabs.Screen  name='Home' component={Home} initialParams={{}}
     options={{tabBarLabel: 'Home',tabBarLabelStyle:{fontWeight: '600', fontSize: 10},tabBarIcon: ({ color, size }) => (
        <Icon name="ios-home" style={{opacity: 0.8}} color='gray' size={24} />)}}
        />    
        

    <Tabs.Screen  name='TakeMe' component={TakeMe} initialParams={{}}
     options={{tabBarLabel: 'TakeMe',tabBarLabelStyle:{fontWeight: '600', fontSize: 10} ,tabBarIcon: ({ color, size }) => (
        <Icon name="airplane" style={{opacity: 0.8}} color='gray' size={24} />)}}
        />    
    <Tabs.Screen  name='History' component={History} initialParams={{}}
     options={{tabBarLabel: 'History',tabBarLabelStyle:{fontWeight: '600', fontSize: 10},tabBarIcon: ({ color, size }) => (
        <Icon name="md-list-outline" style={{opacity: 0.8}} color='gray' size={size} />),}}
        />
    <Tabs.Screen  name='Account' component={Account} initialParams={{}}
     options={{tabBarLabel: 'Account',tabBarLabelStyle:{fontWeight: '600', fontSize: 10},tabBarIcon: ({ color, size }) => (
        <Icon name="person" style={{opacity: 0.8}} color='gray' size={22} />),}}
        />
    {/* <Tabs.Screen  name='Settings' component={Settings}
    //  options={{tabBarLabel: 'Settings',tabBarIcon: ({ color, size }) => (
    //     <Ionicons name="settings-outline" color={color} size={size} />),}}
        /> */}
  </Tabs.Navigator>
  )
  }

  interface Props {
    navigation: any
  }


// enableScreens()
function App()  {

const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs" screenOptions={{headerShown: false}}>
        <Stack.Screen name='Tabs' component={TabsScreen}/>
        <Stack.Screen name='Home' component={Home}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
} 

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
