import React from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import function1 from './component/function1';

export default function App() {
  return (
    <ScrollView>
      <Text>Text 1</Text>
      <Text>Text 2</Text>
      <ActivityIndicator></ActivityIndicator>
      <function1 number={1}/>;
     
    </ScrollView>
}

