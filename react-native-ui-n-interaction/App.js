import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import LotsOfStyles from './components/LotsOfStyles'; 

export default function App() {
  return (
    <View>
      <LotsOfStyles />
      <StatusBar/>
    </View>
  );
}


