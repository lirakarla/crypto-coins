import React from 'react';
import './App.css';
import AvailableCoinsView from './Views/AvailableCoins';
import Header from './Components/Header';
function App() {
  return (
    <div className="App h-screen bg-gray-10">
      <Header></Header>
     <AvailableCoinsView></AvailableCoinsView>
    </div>
  );
}

export default App;
