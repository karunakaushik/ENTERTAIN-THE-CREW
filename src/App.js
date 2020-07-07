import React, { Component } from 'react';
import MainPage from './components';
import AppProvider from './components/AppProvider';


class App extends Component{
 

  render()
  {
  return (
    <AppProvider>
    <div className="app">
     <MainPage />
    </div>
  </AppProvider>
  );
}
}

export default App;
