import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMapView from '../components/google_map'
import _ from 'lodash'

class WeatherList extends Component {
  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature (C)</th>
              <th>Pressure (hPa)</th>
              <th>Humidity (%)</th>
            </tr>
          </thead>
          <tbody>{this.props.weather.map(this._renderWeather)}</tbody>
        </table>
      </div>
    )
  }

  _renderWeather(cityData) {
    const temps = cityData.list
      .map(weather => weather.main.temp)
      .map(temp => _.round(temp - 273.15)) // 섭씨로 바꿈
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    const { lon, lat } = cityData.city.coord

    return (
      <tr key={cityData.city.id}>
        <td>
          <GoogleMapView
            lon={lon}
            lat={lat}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </td>
        <td>
          <Chart data={temps} color="black" units="C" />
        </td>
        <td>
          <Chart data={pressures} color="red" units="hPa" />
        </td>
        <td>
          <Chart data={humidities} color="green" units="%" />
        </td>
      </tr>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather: weather }
}

export default connect(mapStateToProps)(WeatherList)
