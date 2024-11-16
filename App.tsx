import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootNavigation } from './src/navigation/RootNavigation';
import './src/i18n/i18n';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RootNavigation />
    </GestureHandlerRootView>
  );
}

export default App;
