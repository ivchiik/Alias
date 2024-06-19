import React from 'react';
import { RootNavigation } from './src/navigation/RootNavigation';
import './src/i18n/i18n';

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <RootNavigation />
    </>
  );
}

export default App;
