import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
// import LotsOfStyles from './components/LotsOfStyles'; 
import FixedDimensionsBasics from './components/FixedDimensionsBasics'; 


export default function App() {
  return (
    <View>
      {/* <LotsOfStyles /> */}
      <FixedDimensionsBasics />
      <StatusBar/>
    </View>
  );
}


