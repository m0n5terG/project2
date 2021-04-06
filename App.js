import React from 'react';
import HomeScreen from './components/HomeScreen';
import EventScreen from './components/EventScreen';
import ContactScreen from './components/ContactScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
          
            if (route.name === 'Home') {
              iconName = focused ? 'instagram' : 'home';
            } else if (route.name === 'Event') {
              iconName = focused ? 'internet-explorer' : 'opera';
            } else if (route.name === 'Contact') {
              iconName = focused ? 'puzzle-piece' : 'tty';
            }
            return <FontAwesome name={iconName} size={size-2} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#e809dd',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Event" component={EventScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
