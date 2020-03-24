import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigation from './src/navigations/AppNavigation';
import AppProvider from './src/providers/AppProvider';

const AppContainer = createAppContainer(AppNavigation);

class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <AppProvider>
        <AppContainer />
      </AppProvider>
    );
  }
}

export default App;
