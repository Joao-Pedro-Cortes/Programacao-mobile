import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    const nome = 'Maria';   
    return (     
      <View style={styles.container}>       
        <Text>Hello, {nome}!</Text>     
      </View>   ); 

  
}

const styles = StyleSheet.create({
  titulo: {   
    fontSize: 160,   
    fontWeight: 'bold',   
    color: '#2563eb',
    flexDirection: 'row',}, 

  },
);
