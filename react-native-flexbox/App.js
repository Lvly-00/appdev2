import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
// import Flex from './components/Flex';
// import FlexDirectionBasics from './components/FlexDirectionBasics';
// import DirectionLayout from './components/DirectionLayout';
import JustifyContentBasics from './components/JustifyContentBasics';




export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Flex /> */}
      {/* <FlexDirectionBasics /> */}
      {/* <DirectionLayout /> */}
      <JustifyContentBasics />

      <StatusBar />
    </SafeAreaView>
  );
}


