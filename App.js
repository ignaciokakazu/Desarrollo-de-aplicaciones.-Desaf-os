import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Today } from './components/Today/Today';
import { AlertBtn } from './components/AlertBtn/AlertBtn'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola, Coder!</Text>
      <Today></Today>
      <AlertBtn></AlertBtn>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Arial',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 85
  }
});
