import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { List, Card, Title, Paragraph } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={HomeScreen} />
      </Stack.Navigator>
    
  );
}
const CONTENT = [
  {
    title: 'What is Rigid Collar',
    content:
      'RIGIDCOLLAR(リジカラ) is a specially designed part made from tempered aluminum. Each product has been designed, produced and proven on actual vehicles. Compatible to approximately 1,000 models*, RIGIDCOLLAR(リジカラ) can be installed to cars from almost all car manufacturers.”).',
  },
  {
    title: 'Principles',
    content:
      'The gap in your car, that is where the problem hides. RIGIDCOLLAR (リジカラ) fills the gap between the body and subframe. The tapered portion of RIGIDCOLLAR (リジカラ) deforms as the bolt is tightened, filling the gap between the bolt and the inner wall of the bolt hole. In the final stage of bolt tightening, the RIGIDCOLLAR (リジカラ) eliminates any gap that maybe present from the uneven steel surface, achieving the ultimate fastness.',
  },
  {
    title: 'Effects',
    content:
      'Installing RIGIDCOLLAR (リジカラ), your driving will change drastically. It changes your cars and your cars’ specification. Reduction of annoying vibration and shaking that occurs when the engine is started. Decrease in vibration will mean reduction in cabin noise. Better straight-running stability, docile rolling, and reduced corrective steering. Improved straight line stability, compliant roll characteristics and reduced amount of steering corrections. Smooth overall driving feel reduces fatigue on long drives.',
  },
];

const HomeScreen = () => {
  const [activeSections, setActiveSections] = useState([]);

  const [multipleSelect] = useState(false);

  const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Animatable.Text
          animation={isActive ? 'bounceIn' : undefined}
          style={{ textAlign: 'center' }}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>リジカラ</Text>
          <Card style={styles.card}>
            <Card.Content>
              <Title>RIGID COLLAR</Title>
              <Paragraph style={{fontStyle: 'italic', color: 'red'}}>
                Cutting-edge technology that improves the rigidity of your car for ideal driving performance.</Paragraph>
            </Card.Content>
            <Card.Cover
              style={{ marginTop: 10, height: 200 }}
              source={{
                uri:
                  'https://www.rigidcollar.jp/wp-content/uploads/2020/02/17_12_5_004.jpg',
              }}
            />
          </Card>
         <Text style={{padding: 20, textAlign: 'center', color: 'black'}}>Frequently Asked Questions</Text>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={renderHeader}
            renderContent={renderContent}
            duration={400}
            onChange={setSections}/>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e9ff',
    paddingTop: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 60,
    fontWeight: '900',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    color: '#3a32d9',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '300',
  },
  content: {
    alignContent: 'center',
    padding: 10,
    backgroundColor: '#f5fcff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
});
