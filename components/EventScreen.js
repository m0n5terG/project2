import * as React from 'react';
import { Text, View, Button, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

function EventsHomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <ImageBackground
        source={require('../assets/universe.png')}
        style={{ flex: 1, resizeMode: 'contain', justifyContent: 'center' }}>
        <Text
          style={{
            color: 'white',
            fontSize: 42,
            fontWeight: 'bold',
            textAlign: 'center',
            backgroundColor: '#1f3f59',
          }}>
          Events!
        </Text>
      </ImageBackground>
      <Button
        onPress={() => navigation.navigate('EventsSecond')}
        title="Second Screen"></Button>
    </View>
  );
}

function EventsSecondScreen({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <ImageBackground
        source={require('../assets/finger.png')}
        style={{ flex: 1, resizeMode: 'contain', justifyContent: 'center' }}>
        <Text
          style={{
            color: 'gray',
            fontSize: 42,
            fontWeight: 'bold',
            textAlign: 'center',
            backgroundColor: '#f7fbff',
            
          }}>
          Second!
        </Text>
      </ImageBackground>
    </View>
  );
}

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EventsHome"
        component={EventsHomeScreen}
        options={{
          title: 'Events',
          headerStyle: { backgroundColor: '#82CAFF' },
          headerTintColor: '#0066ff',
          headerTitleStyle: 'bold',
        }}
      />
      <Stack.Screen
        name="EventsSecond"
        component={EventsSecondScreen}
        options={{
          title: 'Event Second',
          headerStyle: { backgroundColor: '#3BB9FF' },
          headerTintColor: '#0066ff',
          headerTitleStyle: 'bold',
        }}
      />
    </Stack.Navigator>
  );
}
