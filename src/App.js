import React, { Component } from "react";
import "./App.css";
import Form from "./components/form/Form";
import Weather from "./components/weather/Weather";

const API_KEY = "e36ed364400282e43250b6c4c0274d44";

class App extends Component {
  state = {
    tempreature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: "",
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`
    );
    const data = await api.json();
    city && country
      ? this.setState({
          tempreature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: "",
        })
      : this.setState({
          tempreature: "",
          city: "",
          country: "",
          humidity: "",
          description: "",
          error: "please enter data",
        });
  };
  render() {
    return (
      <div className="wrapper">
        <div className="form-continer">
          <Form getWeather={this.getWeather} />
          <Weather state={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
