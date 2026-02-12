import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
// import LotsOfStyles from './components/LotsOfStyles'; 
// import FixedDimensionsBasics from './components/FixedDimensionsBasics';
// import FlexDimensionsBasics from './components/FlexDimensionsBasics';
import PercentageDimensionsBasics from './components/PercentageDimensionsBasics';




export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <LotsOfStyles/> */}
      {/* <FixedDimensionsBasics/> */}
      {/* <FlexDimensionsBasics/> */}
      <PercentageDimensionsBasics />


      <StatusBar />
    </SafeAreaView>
  );
}


