import React from 'react';
import './App.css';
import TrendingAssetCart from './components/TrendingAssetCart';

function App() {
  return (
    <div className=" min-h-screen flex flex-col md:flex-row justify-center items-center bg-[#14172B] md:space-x-9 md:px-10">
      <TrendingAssetCart/>
      <TrendingAssetCart/>
      <TrendingAssetCart/>
      <TrendingAssetCart/>
      <TrendingAssetCart/>
    </div>
  );
}

export default App;
