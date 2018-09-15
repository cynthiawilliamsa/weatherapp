import React, { Component } from 'react';
import './App.css';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather"

const API_Key = cc39b796f8d8b6f7071eeed96f14bab9;

class App extends Component {
  getWeather = async () => {
    const api_Call = await fetch(`https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=${API_Call}`)
    const data = await api_Call.json();
    console.log(data)
  }

  
  render() {
    return (
      <div className="App">
        <Titles />
        <Form />
        <Weather/>
          
      </div>
    );
  }
}

export default App;
