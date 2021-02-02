import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';


import { DelayedCountries } from "./Countries";

export default function App() {
  return (
    <div className="App">
      <DelayedCountries />
    </div>
  );
}
