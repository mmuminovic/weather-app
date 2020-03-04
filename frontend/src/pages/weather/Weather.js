import React, { Component } from 'react';
import './Weather.css';
import axios from 'axios';

class Weather extends Component {
    state = {
        country: null,
        city: null,
        timezone: null,
        temperature: null,
        weatherIcon: null,
        description: null,
        windSpeed: null,
        pressure: null,

        searchInput: ''
    }

    componentDidMount() {
        axios.get(`http://api.weatherstack.com/current?access_key=0f2e75cc713bf1e4ebbce9804d6b91f8&query=Belgrade`)
            .then(result => {
                const locationData = result.data.location;
                const currentWeatherData = result.data.current;
                this.setState({
                    country: locationData.country,
                    city: locationData.name,
                    timezone: locationData.timezone_id,
                    temperature: currentWeatherData.temperature,
                    weatherIcon: currentWeatherData.weather_icons[0],
                    description: currentWeatherData.weather_descriptions[0],
                    windSpeed: currentWeatherData.wind_speed,
                    pressure: currentWeatherData.pressure
                });
            })
    }

    searchWeatherHandler = () => {
        axios.get(`http://api.weatherstack.com/current?access_key=0f2e75cc713bf1e4ebbce9804d6b91f8&query=${this.state.searchInput}`)
            .then(result => {
                const locationData = result.data.location;
                const currentWeatherData = result.data.current;
                this.setState({
                    country: locationData.country,
                    city: locationData.name,
                    timezone: locationData.timezone_id,
                    temperature: currentWeatherData.temperature,
                    weatherIcon: currentWeatherData.weather_icons[0],
                    description: currentWeatherData.weather_descriptions[0],
                    windSpeed: currentWeatherData.wind_speed,
                    pressure: currentWeatherData.pressure
                });
            })
    }

    render() {
        return (
            <div className="WeatherPage">
                <div className="SearchForm">
                    <h3>Check weather infomration in your city:</h3>
                    <input type="text" value={this.state.searchInput} onChange={(event) => this.setState({searchInput: event.target.value})} /><br />
                    <button onClick={this.searchWeatherHandler}>Search</button>
                </div>
                <div className="CurrentWeather">
                    <p>Country: {this.state.country}</p>
                    <p>City: {this.state.city}</p>
                    <p>Timezone: {this.state.timezone}</p>
                    <p>Temperature: {this.state.temperature}°C</p>
                    {this.state.weatherIcon ? <img src={this.state.weatherIcon} alt="Weather icon" /> : null}
                    <p>Weather description: {this.state.description}</p>
                    <p>Wind speed: {this.state.windSpeed} km/h</p>
                    <p>Pressure: {this.state.pressure} mb</p>
                </div>
            </div>
        )
    }
}

export default Weather;