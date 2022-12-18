import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Random from './components/random.js';
import About from './components/about.js';


export default function App() {

  const Tab = createBottomTabNavigator();
  
  return (
    <NavigationContainer >
     <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'about') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            }

            
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          
          tabBarStyle:{ height: 75 }
        })}
      >
        <Tab.Screen styles={styles.text_nav} name="home" component={Random} options={{headerShown: false, tabBarLabelStyle: {fontSize: 15,fontWeight: "bold"}}}/>
        <Tab.Screen name="about" component={About} options={{headerShown: false, tabBarLabelStyle: {fontSize: 15,fontWeight: "bold"}}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container_nav: {
    backgroundColor: "green"
  },
  
  
});
