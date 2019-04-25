import axios from 'axios'

const API_KEY = 'f08d761b7d293bc4a675324c7e76b042'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'
export const REQ_ERROR = 'REQ_ERROR'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},kr`
  const request = axios.get(url).catch(err => {
    console.log('에러!!', err)
  })

  // react-promiss 가 알아서 비동기작업이 완료되기를 기다렸다가 리듀서로 넘긴다
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
