import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <Text>Text 1</Text>
      <Text>Text 2</Text>
      <ActivityIndicator></ActivityIndicator>
      <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu_%28cropped%29.jpg"}}
      style={styles.tinyLogo}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tinyLogo: {
    width: 500,
    height: 500,
  },
});
