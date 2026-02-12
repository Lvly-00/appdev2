import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import Flex from './components/Flex';




export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <Flex />


      <StatusBar />
    </SafeAreaView>
  );
}


